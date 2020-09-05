import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'https://gimme-pizza-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.API_URL}`)
  }

  listarPorId(id) {
    return this.http.get(`${this.API_URL}/${id}`)
  }

  login(username, password) {
    var data = { username: username, password: password };

    return new Promise((res, rej) => {
      this.http.post(`${this.API_URL}/authentication`, data).subscribe((resultUser: any) => {
        resultUser = resultUser.json();

        console.log("Dados sendo enviados: ", data);
        console.log("Usuario: ", resultUser);

      }, (error) => rej(error.json()));
    });
  }

  // createClient(fullName, identityId, email, phone, streetAddress, number, complement, neighborhood, city, state, zipCode) {
  createClient(data) {
      console.log("Dados sendo enviados: ", data);
    // var data = { fullName: fullName, identityId: identityId, email: email, phone: phone, streetAddress: streetAddress, number: number, complement: complement, neighborhood: neighborhood, city: city, state: state, zipCode: zipCode };
    // this.http.post<any[]>(`${this.API_URL}/clients`, data).subscribe((resultClient: any) => {
    //   resultClient = resultClient.json();
    //   console.log("Dados sendo enviados: ", data);
    // });
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

  // postJSON() {
  //   var json = JSON.stringify({var1: 'teste', var2: 1000});
  //   var params = 'json=' + json;
  //   var cabe = new Headers();
  //   cabe.append('Content-Type', 'application/x-www-form-urlencoded');
  //   return this.http.post(`${this.API_URL}`, 
  //   params, {
  //            headers : cabe
  //           })
  //           .map(res=> res.json());
  // }


}
