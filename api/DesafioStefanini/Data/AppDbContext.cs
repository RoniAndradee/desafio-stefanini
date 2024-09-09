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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ItensPedidoModel>()
                .HasOne(ip => ip.Pedido)
                .WithMany(p => p.ItensPedido)
                .HasForeignKey(ip => ip.IdPedido)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<ItensPedidoModel>()
                .HasOne(ip => ip.Produto)
                .WithMany(p => p.ItensPedido)
                .HasForeignKey(ip => ip.IdProduto)
                .OnDelete(DeleteBehavior.Restrict);
        }

    }
}
