import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  public orders: any = [
    {
      id: 105,
      pizzaOrder: {
        id: 6,
        client: {
          id: 6,
          clientContacts: {
            email: "anaclara.galego@example.com",
            phone: "(47) 99248-3108"
          },
          clientAddress: {
            streetAddress: "Rodovia Eloah",
            number: "s/n",
            complement: "Casa 2",
            neighborhood: "Bairro",
            city: "Céu Azul",
            state: "DF",
            zipCode: "05559-300"
          },
          fullName: "Dr. Luiz Otávio Corte",
          identityId: "386-78-6798"
        },
        pizzas: [
          {
            halfNHalf: true,
            extraSauce: false,
            crust: "FINA",
            mainFlavor: "MARGUERITA",
            secondaryFlavor: "PORTUGUESA",
            size: "G",
            note: "Ut occaecati qui quaerat tempore."
          }
        ],
        deliveryAddress: {
          streetAddress: "Rodovia Eloah",
          number: "s/n",
          complement: "Casa 2",
          neighborhood: "Bairro",
          city: "Céu Azul",
          state: "DF",
          zipCode: "05559-300"
        },
        status: "PREPARANDO",
        scheduled: false
      },
      status: "PREPARANDO",
      submittedAddress: {
        streetAddress: "Rodovia Eloah",
        number: "s/n",
        complement: "Casa 2",
        neighborhood: "Bairro",
        city: "Céu Azul",
        state: "DF",
        zipCode: "05559-300"
      },
      scheduled: false,
      registeredIn: "2020-08-21T14:02:41.484-03:00"
    }];

  ngOnInit(): void {
    console.log("Orders: ", this.orders);
    
  }

}
