import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/api/pedido/pedido.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-pedidos',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	templateUrl: './pedidos.component.html',
	styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
	listaPedidos: any[] = [];
	idGet: any;
	pedido: any;
	erroGet: boolean = false;

	novoPedido: any;
	nomeCliente: string = '';
	emailCliente: string = '';
	pago: string = '';
	erroPost: boolean = false;

	idUpdate: any;
	novoNomeCliente: string = '';
	novoEmailCliente: string = '';
	editado: boolean = false;
	erroUpdate: boolean = false;

	idDelete: any;
	deletado: boolean = false;
	erroDelete: boolean = false;

	constructor(private pedidoService: PedidoService) { }

	ngOnInit(): void {
		// this.listarPedidos();
	}

	listarPedidos(): void {
		this.pedidoService.getPedidos().subscribe({
			next: (data) => {
				this.listaPedidos = data;
				console.log(data)
			},
			error: (error) => {
				console.error('Erro ao listar os pedidos', error);
			},
			complete: () => {
				console.log("Listagem dos pedidos concluída.");
			}
		});
	}

	buscarPedido(): void {
		if (this.idGet) {
			this.pedidoService.getPedido(this.idGet).subscribe({
				next: (data) => {
					this.pedido = data;
					this.erroGet = false;
				},
				error: (error) => {
					this.erroGet = true;
					console.error('Erro ao buscar o pedido', error);
				},
				complete: () => {
					console.log('Busca de pedido concluída.');
				}
			});
		}
	}

	adicionarPedido(): void {
		const novoPedido = {
			nomeCliente: this.nomeCliente,
			emailCliente: this.emailCliente,
			pago: this.pago == 'sim' ? true : false
		};

		if (this.nomeCliente && this.emailCliente && this.pago) {
			this.pedidoService.createPedido(novoPedido).subscribe({
				next: (data) => {
					this.novoPedido = data;
					this.erroPost = false;
					setTimeout(() => location.reload(), 1000);
				},
				error: (error) => {
					this.erroPost = true;
					console.error('Erro ao adicionar o pedido', error);
				}
			});
		} else {
			this.erroPost = true;
		}
	}

	editarPedido(): void {
		const pedidoEditado = {
			id: this.idUpdate,
			nomeCliente: this.novoNomeCliente,
			emailCliente: this.novoEmailCliente
		};

		if (this.novoNomeCliente && this.novoEmailCliente) {
			this.pedidoService.updatePedido(this.idUpdate, pedidoEditado).subscribe({
				next: () => {
					this.editado = true;
					this.erroUpdate = false;
				},
				error: (error) => {
					this.erroUpdate = true;
					console.error('Erro ao editar o pedido', error);
				}
			});
		} else {
			this.erroUpdate = true;
		}
	}

	deletarPedido(): void {
		if (this.idDelete) {
			this.pedidoService.deletePedido(this.idDelete).subscribe({
				next: () => {
					this.deletado = true;
					setTimeout(() => location.reload(), 1000);
				},
				error: (error) => {
					this.erroDelete = true;
					console.error('Erro ao deletar o pedido', error);
				}
			});
		}
	}
}
