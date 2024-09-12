import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItensPedidoService {

  private API_URL = 'http://localhost:5159/api';

  constructor(private http: HttpClient) { }

  getItensPedidos(): Observable<any> {
    return this.http.get(`${this.API_URL}/itenspedido`);
  }

  getItensPedido(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/itenspedido/${id}`);
  }

  createItensPedido(item: any): Observable<any> {
    return this.http.post(`${this.API_URL}/itenspedido`, item);
  }

  updateItensPedido(id: number, item: any): Observable<any> {
    return this.http.put(`${this.API_URL}/itenspedido/${id}`, item);
  }

  deleteItensPedido(idPedido: number, id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/itenspedido/${idPedido}/${id}`);
  }
}
