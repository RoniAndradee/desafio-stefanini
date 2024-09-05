using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace DesafioStefanini.Models
{
    public class ProdutoModel
    {
        public int Id { get; set; }
        public string NomeProduto { get; set; }

        [Column(TypeName = "decimal(5, 2)")]
        public decimal Valor { get; set; }

        [JsonIgnore]
        public virtual ICollection<ItensPedidoModel> ItensPedido { get; set; } = new List<ItensPedidoModel>();
    }
}
