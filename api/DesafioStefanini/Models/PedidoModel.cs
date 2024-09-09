using System.Text.Json.Serialization;

namespace DesafioStefanini.Models
{
    public class PedidoModel
    {
        public int Id { get; set; }
        public string NomeCliente { get; set; }
        public string EmailCliente { get; set; }
        public DateTime DataCriacao { get; set; }
        public bool Pago { get; set; }


        [JsonIgnore]
        public virtual ICollection<ItensPedidoModel> ItensPedido { get; set; } = new List<ItensPedidoModel>();
    }
}
