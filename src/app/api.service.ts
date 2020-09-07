import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // options: any;
  API_URL = 'https://gimme-pizza-api.herokuapp.com';

  headers: any = {
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'HEAD,GET,POST,PUT,DELETE,PATCH,OPTIONS',
  }
  
  options: any = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headers), 
  };

  constructor(private http: HttpClient) { }

  // listar() {
  //   return this.http.get<any[]>(`${this.API_URL}`)
  // }

  // listarPorId(id) {
  //   return this.http.get(`${this.API_URL}/${id}`)
  // }

  login(username, password) {
    var data = { Username: username, Password: password };

    return new Promise((res, rej) => {
      this.http.post(`${this.API_URL}/authentication`, data, this.options).subscribe((resultUser: any) => {
        resultUser = resultUser.json();

        console.log("Resultado: ", resultUser);

      }, (error) => rej(error.json()));
    });
  }

  // createClient(fullName, identityId, email, phone, streetAddress, number, complement, neighborhood, city, state, zipCode) {
  createClient(data) {
    console.log("Dados sendo enviados: ", data);
    this.http.post(`${this.API_URL}/clients`, data).subscribe((resultClient: any) => {
    resultClient = resultClient.json();
    // console.log("Dados sendo enviados: ", data);
    });
  }

  createOrder(data) {
    console.log("Dados sendo enviados: ", data);
  // this.http.post<any[]>(`${this.API_URL}/pizza-order`, data).subscribe((resultOrder: any) => {
  //   resultOrder = resultOrder.json();
  //   console.log("Dados sendo enviados: ", data);
  // });
  }

  getOrderSample() {
    return this.http.get<any[]>(`${this.API_URL}/samples/one`)
  }

}
