using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DesafioStefanini.Migrations
{
    /// <inheritdoc />
    public partial class atualizandobd : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ItensPedidos_Pedidos_PedidoId",
                table: "ItensPedidos");

            migrationBuilder.DropForeignKey(
                name: "FK_ItensPedidos_Produtos_ProdutoId",
                table: "ItensPedidos");

            migrationBuilder.DropIndex(
                name: "IX_ItensPedidos_PedidoId",
                table: "ItensPedidos");

            migrationBuilder.DropIndex(
                name: "IX_ItensPedidos_ProdutoId",
                table: "ItensPedidos");

            migrationBuilder.DropColumn(
                name: "PedidoId",
                table: "ItensPedidos");

            migrationBuilder.DropColumn(
                name: "ProdutoId",
                table: "ItensPedidos");

            migrationBuilder.CreateIndex(
                name: "IX_ItensPedidos_IdPedido",
                table: "ItensPedidos",
                column: "IdPedido");

            migrationBuilder.CreateIndex(
                name: "IX_ItensPedidos_IdProduto",
                table: "ItensPedidos",
                column: "IdProduto");

            migrationBuilder.AddForeignKey(
                name: "FK_ItensPedidos_Pedidos_IdPedido",
                table: "ItensPedidos",
                column: "IdPedido",
                principalTable: "Pedidos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ItensPedidos_Produtos_IdProduto",
                table: "ItensPedidos",
                column: "IdProduto",
                principalTable: "Produtos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ItensPedidos_Pedidos_IdPedido",
                table: "ItensPedidos");

            migrationBuilder.DropForeignKey(
                name: "FK_ItensPedidos_Produtos_IdProduto",
                table: "ItensPedidos");

            migrationBuilder.DropIndex(
                name: "IX_ItensPedidos_IdPedido",
                table: "ItensPedidos");

            migrationBuilder.DropIndex(
                name: "IX_ItensPedidos_IdProduto",
                table: "ItensPedidos");

            migrationBuilder.AddColumn<int>(
                name: "PedidoId",
                table: "ItensPedidos",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProdutoId",
                table: "ItensPedidos",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_ItensPedidos_PedidoId",
                table: "ItensPedidos",
                column: "PedidoId");

            migrationBuilder.CreateIndex(
                name: "IX_ItensPedidos_ProdutoId",
                table: "ItensPedidos",
                column: "ProdutoId");

            migrationBuilder.AddForeignKey(
                name: "FK_ItensPedidos_Pedidos_PedidoId",
                table: "ItensPedidos",
                column: "PedidoId",
                principalTable: "Pedidos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ItensPedidos_Produtos_ProdutoId",
                table: "ItensPedidos",
                column: "ProdutoId",
                principalTable: "Produtos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
