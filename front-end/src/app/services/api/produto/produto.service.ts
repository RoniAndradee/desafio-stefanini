import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private API_URL = 'http://localhost:5159/api';

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<any> {
    return this.http.get(`${this.API_URL}/produto`);
  }

  getProduto(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/produto/${id}`);
  }

  createProduto(item: any): Observable<any> {
    return this.http.post(`${this.API_URL}/produto`, item);
  }

  updateProduto(id: number, item: any): Observable<any> {
    return this.http.put(`${this.API_URL}/produto/${id}`, item);
  }

  deleteProduto(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/produto/${id}`);
  }
}