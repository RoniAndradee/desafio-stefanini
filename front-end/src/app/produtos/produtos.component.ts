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
    id: any;
    produto: any; 

    constructor(private produtoService: ProdutoService) { }

    ngOnInit(): void {
        this.buscarProdutos()
    }

    buscarProdutos(): void {
        this.produtoService.getProdutos().subscribe(
          (data) => {
            this.produtos = data;
          },
          (error) => {
            console.error('Erro ao listar os produtos', error);
          }
        );
      }

    buscarProduto(): void {
        if (this.id !== undefined) {
            this.produtoService.getProduto(this.id).subscribe(
                (data) => {
                    this.produto = data; // declarando que o produto é igual o valor retornado pela api
                },
                (error) => {
                    console.error('Erro ao buscar o produto', error);
                }
            );
        }
    }
}
