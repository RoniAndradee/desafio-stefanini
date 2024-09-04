namespace DesafioStefanini.Models
{
    public class ItensPedidoModel
    {
        public int Id { get; set; }
        public int IdPedido { get; set; }
        public int IdProduto { get; set; }
        public int Quantidade { get; set; }

        public PedidoModel Pedido { get; set; }
        public ProdutoModel Produto { get; set; }
    }
}
