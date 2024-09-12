using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DesafioStefanini.Data;
using DesafioStefanini.Models;

namespace DesafioStefanini.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItensPedidoController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ItensPedidoController(AppDbContext context)
        {
            _context = context;
        }

        // GET
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ItensPedidoModel>>> GetItensPedidos()
        {
            return await _context.ItensPedidos
                .Include(ip => ip.Produto)
                .Include(ip => ip.Pedido)
                .ToListAsync();
        }

        // GET
        [HttpGet("{id}")]
        public async Task<ActionResult<ItensPedidoModel>> GetItensPedido(int id)
        {
            var itensPedido = await _context.ItensPedidos
                .Include(ip => ip.Produto)
                .Include(ip => ip.Pedido)
                .FirstOrDefaultAsync(ip => ip.Id == id);

            if (itensPedido == null)
            {
                return NotFound();
            }

            return itensPedido;
        }

        //POST
        [HttpPost]
        public async Task<ActionResult<ItensPedidoModel>> PostItensPedido(ItensPedidoModel itensPedido)
        {
            var pedido = await _context.Pedidos.FindAsync(itensPedido.IdPedido);
            if (pedido == null)
            {
                return BadRequest(new { message = "Pedido não encontrado." });
            }

            var produto = await _context.Produtos.FindAsync(itensPedido.IdProduto);
            if (produto == null)
            {
                return BadRequest(new { message = "Produto não encontrado." });
            }

            _context.ItensPedidos.Add(itensPedido);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetItensPedido", new { id = itensPedido.Id }, itensPedido);
        }



        // PUT
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItensPedido(int id, ItensPedidoModel itensPedido)
        {
            if (id != itensPedido.Id)
            {
                return BadRequest();
            }

            _context.Entry(itensPedido).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItensPedidoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE
        [HttpDelete("{idPedido}/{id}")]
        public async Task<IActionResult> DeleteItensPedido(int idPedido, int id)
        {
            var itensPedido = await _context.ItensPedidos
                .FirstOrDefaultAsync(i => i.IdPedido == idPedido && i.Id == id);

            if (itensPedido == null)
            {
                return NotFound();
            }

            _context.ItensPedidos.Remove(itensPedido);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        private bool ItensPedidoExists(int id)
        {
            return _context.ItensPedidos.Any(e => e.Id == id);
        }
    }
}
