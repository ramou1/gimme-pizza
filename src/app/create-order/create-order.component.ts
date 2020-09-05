import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  
  orders: Array<any>;

  constructor(private api: ApiService) { }

  public half: boolean = false;
  public client: any;
  public pizzas: any = [{ halfNHalf: false,
                          extraSauce: true,
                          crust: "",
                          mainFlavor: "",
                          size: "",
                          note: "" }];

  ngOnInit(): void {
  }
  
  setType(type) {
    this.half = type;
    this.pizzas.halfNHalf = type;
  }

  sendPizza() {
    this.api.createOrder(this.pizzas);
  }

  chooseClient() {
    this.api.getOrderSample().subscribe(dados => this.orders = dados);
    console.log("Valor: ", this.orders);
  }

}
