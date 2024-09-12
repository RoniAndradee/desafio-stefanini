import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ItensPedidoComponent } from './components/itens-pedido/itens-pedido.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {path: '', component: HeaderComponent},
    {path: 'produtos', component: ProdutosComponent},
    {path: 'pedidos', component: PedidosComponent},
    {path: 'iten-pedido', component: ItensPedidoComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRouteModule {}

