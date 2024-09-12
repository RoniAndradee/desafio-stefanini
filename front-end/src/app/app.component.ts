import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { ProdutosComponent } from "./components/produtos/produtos.component";
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ItensPedidoComponent } from './components/itens-pedido/itens-pedido.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, ProdutosComponent, PedidosComponent, ItensPedidoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';

}
