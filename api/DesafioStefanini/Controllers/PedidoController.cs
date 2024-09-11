using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DesafioStefanini.Data;
using DesafioStefanini.Models;

namespace DesafioStefanini.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidoController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PedidoController(AppDbContext context)
        {
            _context = context;
        }

        //GET
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PedidoDto>>> GetPedidos()
        {
            var pedidos = await _context.Pedidos
                .Include(p => p.ItensPedido)
                .ThenInclude(ip => ip.Produto)
                .ToListAsync();

            var pedidoDtos = pedidos.Select(p => new PedidoDto
            {
                Id = p.Id,
                NomeCliente = p.NomeCliente,
                EmailCliente = p.EmailCliente,
                Pago = p.Pago,
                ValorTotal = p.ItensPedido.Sum(ip => ip.Quantidade * ip.Produto.Valor),
                ItensPedido = p.ItensPedido.Select(ip => new ItemPedidoDto
                {
                    Id = ip.Id,
                    IdProduto = ip.IdProduto,
                    NomeProduto = ip.Produto.NomeProduto,
                    ValorUnitario = ip.Produto.Valor,
                    Quantidade = ip.Quantidade
                }).ToList()
            }).ToList();

            return Ok(pedidoDtos);
        }


        // GET
        [HttpGet("{id}")]
        public async Task<ActionResult<PedidoDto>> GetPedidoById(int id)
        {
            var pedido = await _context.Pedidos
                .Include(p => p.ItensPedido)
                .ThenInclude(ip => ip.Produto)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (pedido == null)
            {
                return NotFound();
            }

            var pedidoDto = new PedidoDto
            {
                Id = pedido.Id,
                NomeCliente = pedido.NomeCliente,
                EmailCliente = pedido.EmailCliente,
                Pago = pedido.Pago,
                ValorTotal = pedido.ItensPedido.Sum(ip => ip.Quantidade * ip.Produto.Valor),
                ItensPedido = pedido.ItensPedido.Select(ip => new ItemPedidoDto
                {
                    Id = ip.Id,
                    IdProduto = ip.IdProduto,
                    NomeProduto = ip.Produto.NomeProduto,
                    ValorUnitario = ip.Produto.Valor,
                    Quantidade = ip.Quantidade
                }).ToList()
            };

            return Ok(pedidoDto);
        }


        // POST
        [HttpPost]
        public async Task<ActionResult<PedidoModel>> PostPedido(PedidoModel pedido)
        {
            _context.Pedidos.Add(pedido);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPedidoById", new { id = pedido.Id }, pedido);
        }

        //PUT
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPedido(int id, PedidoModel pedido)
        {
            if (id != pedido.Id)
            {
                return BadRequest();
            }

            _context.Entry(pedido).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PedidoExists(id))
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
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePedido(int id)
        {
            var pedido = await _context.Pedidos.FindAsync(id);
            if (pedido == null)
            {
                return NotFound();
            }

            _context.Pedidos.Remove(pedido);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PedidoExists(int id)
        {
            return _context.Pedidos.Any(e => e.Id == id);
        }
    }
}
