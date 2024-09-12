import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/api/produto/produto.service';
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
    // GET 
    listaProdutos: any[] = [];

    // GET(ID)
    idGet: any;
    produto: any;
    erroGet: boolean = false;

    // POST
    novoProduto: any;
    nomeProduto: string = '';
    valorProduto: undefined;
    erroPost: boolean = false;

    // UPDATE
    idUpdate: any;
    novoNome: string = '';
    novoValor: any;
    editado: boolean = false;
    erroUpdate: boolean = false;

    // DELETE
    idDelete: any;
    erroDelete: boolean = false;



    deletado: boolean = false;

    constructor(private produtoService: ProdutoService) { }

    ngOnInit(): void {}

    // GET
    listarProdutos(): void {
        this.produtoService.getProdutos().subscribe({
            next: (data) => {
                this.listaProdutos = data;
            },
            error: (error) => {
                console.error('Erro ao listar os produtos', error);
            },
            complete: () => {
                console.log("Listagem dos produtos concluída")
            }
        });
    }

    // GET(ID)
    buscarProduto(): void {
        if (this.idGet != undefined) {
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
        } else if(this.idGet == undefined){
            this.erroGet = true;
        }
    }

    // POST
    adicionarProduto(): void {
        const novoProduto = {
            nomeProduto: this.nomeProduto,
            valor: this.valorProduto
        };

        if (this.nomeProduto != '' && this.valorProduto != undefined) {
            this.produtoService.createProduto(novoProduto).subscribe({
                next: (data) => {
                    this.novoProduto = data;
                    this.erroPost = false;
                    console.log('Produto adicionado com sucesso!');
                    setTimeout(() => {
                        location.reload();
                    }, 1000);
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
        } else if(this.nomeProduto == '' || this.valorProduto == undefined){
            this.erroPost = true;
        }
    }

    // UPDATE
    editarProduto(): void {
        const produtoEditado = {
            id: this.idUpdate,
            nomeProduto: this.novoNome,
            valor: this.novoValor
        };

        if (this.novoNome != '' || this.novoValor != undefined) {
            this.produtoService.updateProduto(this.idUpdate, produtoEditado).subscribe({
                next: () => {
                    this.editado = true;
                    this.erroUpdate = false;
                    console.log('Produto editado com sucesso!');
                },
                error: (error) => {
                    this.erroUpdate = true;
                    this.editado = false;
                    console.error('Erro ao editar o produto', error);
                },
                complete: () => {
                    console.log('Edição de produto concluída.');
                }
            });
        } else if(this.novoNome == '' || this.novoValor == 0){
            this.erroUpdate = true;
            console.log("Teste")
        }
    }

    // DELETE
    deletarProduto(): void {
        if (this.idDelete != undefined) {
            this.produtoService.deleteProduto(this.idDelete).subscribe({
                next: () => {
                    this.deletado = true;
                    this.erroDelete = false;
                    setTimeout(() => {
                        location.reload();
                    }, 1000);
                },
                error: (error) => {
                    this.erroDelete = true;
                    this.deletado = false;
                    console.error('Erro ao deletar o produto', error);
                }
            });
        } else if(this.idDelete == undefined){
            this.erroDelete = true;
        }
    }
}
