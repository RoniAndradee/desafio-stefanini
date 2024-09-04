using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace DesafioStefanini.Controllers
{
    [ApiController]
    public class PedidoController : ControllerBase
    {
        [HttpGet]
        [Route("pedidos")]
        public IActionResult Get()
        {
            return Ok("Pedidos");
        }
    }
}
