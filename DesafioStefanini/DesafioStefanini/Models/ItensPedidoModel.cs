using System.Text.Json.Serialization;

namespace DesafioStefanini.Models
{
    public class ItensPedidoModel
    {
        public int Id { get; set; }
        public int IdPedido { get; set; }
        public int IdProduto { get; set; }
        public int Quantidade { get; set; }

        [JsonIgnore]
        public virtual PedidoModel? Pedido { get; set; }

        [JsonIgnore]
        public virtual ProdutoModel? Produto { get; set; }
    }
}
