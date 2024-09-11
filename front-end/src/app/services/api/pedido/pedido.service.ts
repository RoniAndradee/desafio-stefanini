import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private API_URL = 'http://localhost:5159/api';

  constructor(private http: HttpClient) { }

  getPedidos(): Observable<any> {
    return this.http.get(`${this.API_URL}/pedido`);
  }

  getPedido(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/pedido/${id}`);
  }

  createPedido(item: any): Observable<any> {
    return this.http.post(`${this.API_URL}/pedido`, item);
  }

  updatePedido(id: number, item: any): Observable<any> {
    return this.http.put(`${this.API_URL}/pedido/${id}`, item);
  }

  deletePedido(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/pedido/${id}`);
  }
}