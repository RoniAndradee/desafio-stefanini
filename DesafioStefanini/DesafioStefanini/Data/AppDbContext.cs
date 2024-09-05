using DesafioStefanini.Models;
using Microsoft.EntityFrameworkCore;

namespace DesafioStefanini.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        {
        }

        public DbSet<PedidoModel> Pedidos { get; set; }
        public DbSet<ProdutoModel> Produtos { get; set; }
        public DbSet<ItensPedidoModel> ItensPedidos { get; set; }
    }
}
