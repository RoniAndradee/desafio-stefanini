namespace DesafioStefanini.Models
{
    public class ProdutoModel
    {
        public int Id { get; set; }
        public string NomeProduto { get; set; }
        public decimal Valor { get; set; }

        public ICollection<ItensPedidoModel> ItensPedido { get; set; }
    }
}
