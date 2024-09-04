using DesafioStefanini.Models;
using Microsoft.EntityFrameworkCore;

namespace DesafioStefanini.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<PedidoModel> Pedidos { get; set; }
        public DbSet<ProdutoModel> Produtos { get; set; }
        public DbSet<ItensPedidoModel> ItensPedidos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=DesafioStefanini;Trusted_Connection=True;");
        }
    }
}
