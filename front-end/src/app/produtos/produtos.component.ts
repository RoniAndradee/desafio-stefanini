import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/api/produto/produto.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
    selector: 'app-produtos',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './produtos.component.html',
    styleUrl: './produtos.component.css'
})

export class ProdutosComponent implements OnInit {
    produtos: any[] = [];
    idGet: any;
    idUpdate: any;
    idDelete: any;
    produto: any;
    novoProduto: any;
    erroGet: boolean = false;
    erroPost: boolean = false;
    erroDelete: boolean = false;
    nomeProduto: string = '';
    novoNome: string = '';
    valorProduto: any;
    novoValor: any;

    constructor(private produtoService: ProdutoService) { }

    ngOnInit(): void {
        this.listarProdutos()
    }

    listarProdutos(): void {
        this.produtoService.getProdutos().subscribe({
            next: (data) => {
                this.produtos = data;
            },
            error: (error) => {
                console.error('Erro ao listar os produtos', error);
            },
            complete: () => {
                console.log("Listagem dos produtos concluída")
            }
    });
    }

    buscarProduto(): void {
        if (this.idGet !== undefined) {
            this.produtoService.getProduto(this.idGet).subscribe({
                next: (data) => {
                    this.produto = data;
                    this.erroGet = false;
                },
                error: (error) => {
                    this.erroGet = true;
                    this.produto = undefined;
                    console.error('Erro ao buscar o produto', error);
                },
                complete: () => {
                    console.log('Busca de produto concluída.');
                }
            });
        }
    }

    adicionarProduto(): void {
        const novoProduto = {
            nomeProduto: this.nomeProduto,
            valor: this.valorProduto
        };

        if (this.nomeProduto !== '' && this.valorProduto !== 0) {
            this.produtoService.createProduto(novoProduto).subscribe({
                next: (data) => {
                    this.novoProduto = data;
                    this.erroPost = false;
                    console.log('Produto adicionado com sucesso!');
                },
                error: (error) => {
                    this.erroPost = true;
                    this.novoProduto = undefined;
                    console.error('Erro ao adicionar o produto', error);
                },
                complete: () => {
                    console.log('Adição de produto concluída.');
                }
            });
        }
    }


    excluirProduto(): void {
        if (this.idDelete !== undefined) {
            this.produtoService.deleteProduto(this.idDelete).subscribe({
                next: () => {
                    alert("Produto excluido com sucesso!")
                },
                error: (error) => {
                    this.erroDelete = error
                    console.error('Erro ao deletar o produto', error);
                }
            });
        }
    }
}
