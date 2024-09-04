namespace DesafioStefanini.Models
{
    public class PedidoModel
    {
        public int Id { get; set; }
        public string NomeCliente { get; set; }
        public string EmailCliente { get; set; }
        public DateTime DataCriacao { get; set; }
        public bool Pago { get; set; }

        public ICollection<ItensPedidoModel> ItensPedido { get; set; }
    }
}
