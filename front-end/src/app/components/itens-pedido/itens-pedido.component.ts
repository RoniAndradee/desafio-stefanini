import { Component, OnInit } from '@angular/core';
import { ItensPedidoService } from '../../services/api/itensPedido/itens-pedido.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-itens-pedido',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './itens-pedido.component.html',
  styleUrls: ['./itens-pedido.component.css']
})
export class ItensPedidoComponent implements OnInit {
  // Lista de Itens de Pedido
  listaItensPedidos: any[] = [];

  // GET(ID)
  idGet: any;
  erroGet: boolean = false;
  itemPedido: any;

  // POST
  idPedido: any;
  idProduto: any;
  quantidade: any;
  novoItemPedido: any;
  erroPost: boolean = false;

  // UPDATE
  idUpdate: any;
  idPedidoUpdate: any;
  novoIdProduto: any;
  novaQuantidade: any;
  editado: boolean = false;
  erroUpdate: boolean = false;

  // DELETE
  idDelete: any;
  idPedidoDelete: any;
  deletado: boolean = false;
  erroDelete: boolean = false;

  constructor(private itensPedidoService: ItensPedidoService) { }

  ngOnInit(): void { }

  listarItensPedidos(): void {
    this.itensPedidoService.getItensPedidos().subscribe({
      next: (data) => {
        this.listaItensPedidos = data;
      },
      error: (error) => {
        console.error('Erro ao listar os itens de pedidos', error);
      }
    });
  }

  buscarItensPedido(): void {
    if (this.idGet) {
      this.itensPedidoService.getItensPedido(this.idGet).subscribe({
        next: (data) => {
          this.itemPedido = data;
          this.erroGet = false;
        },
        error: (error) => {
          this.erroGet = true;
          this.itemPedido = undefined;
          console.error('Erro ao buscar o item do pedido', error);
        }
      });
    } else {
      this.erroGet = true;
      this.itemPedido = undefined;
    }
  }

  adicionarItensPedido(): void {
    const novoItemPedido = {
      idPedido: this.idPedido,
      idProduto: this.idProduto,
      quantidade: this.quantidade
    };

    if (this.idPedido && this.idProduto && this.quantidade) {
      this.itensPedidoService.createItensPedido(novoItemPedido).subscribe({
        next: (data) => {
          this.novoItemPedido = data;
          this.erroPost = false;
        },
        error: (error) => {
          this.erroPost = true;
          this.novoItemPedido = undefined;
          console.error('Erro ao adicionar o item do pedido', error);
        }
      });
    } else {
      this.erroPost = true;
    }
  }

  editarItensPedido(): void {
    const itemPedidoEditado = {
      id: this.idUpdate,
      idPedido: this.idPedidoUpdate,
      idProduto: this.novoIdProduto,
      quantidade: this.novaQuantidade
    };

    if (this.novoIdProduto && this.novaQuantidade) {
      this.itensPedidoService.updateItensPedido(this.idUpdate, itemPedidoEditado).subscribe({
        next: () => {
          this.editado = true;
          this.erroUpdate = false;
        },
        error: (error) => {
          this.erroUpdate = true;
          this.editado = false;
          console.error('Erro ao editar o item do pedido', error);
        }
      });
    } else {
      this.erroUpdate = true;
    }
  }

  deletarItensPedido(): void {
    if (this.idDelete) {
      this.itensPedidoService.deleteItensPedido(this.idPedidoDelete, this.idDelete).subscribe({
        next: () => {
          this.deletado = true;
          setTimeout(() => location.reload(), 1000);
        },
        error: (error) => {
          this.erroDelete = true;
          console.error('Erro ao deletar o item do pedido', error);
        }
      });
    } else {
      this.erroDelete = true;
    }
  }
}
