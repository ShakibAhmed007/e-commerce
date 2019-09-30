import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDashboardData(){
    return this.httpClient.get('http://localhost:9080/get-products-list');
  }
}
