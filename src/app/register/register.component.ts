import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // client: any = [ { fullName: '', identityId: '', clientContacts: { email: '', phone: '' }, clientAddress: { streetAddress: '',  number: '',  complement: '',  neighborhood: '',  city: '',  state: '',  zipCode: '' } } ];
  client: any = [{ fullName: '', identityId: '', email: '', phone: '', streetAddress: '', number: '', complement: '', neighborhood: '', city: '', state: '', zipCode: '' }];

  states: any = [
    { abbreviation: 'AC', name: 'Acre' },
    { abbreviation: 'AL', name: 'Alagoas' },
    { abbreviation: 'AP', name: 'Amapá' },
    { abbreviation: 'AM', name: 'Amazonas' },
    { abbreviation: 'BA', name: 'Bahia' },
    { abbreviation: 'CE', name: 'Ceará' },
    { abbreviation: 'ES', name: 'Espírito Santo' },
    { abbreviation: 'GO', name: 'Goiás' },
    { abbreviation: 'MA', name: 'Maranhão' },
    { abbreviation: 'MT', name: 'Mato Grosso' },
    { abbreviation: 'MS', name: 'Mato Grosso do Sul' },
    { abbreviation: 'MG', name: 'Minas Gerais' },
    { abbreviation: 'PA', name: 'Pará' },
    { abbreviation: 'PB', name: 'Paraíba' },
    { abbreviation: 'PR', name: 'Paraná' },
    { abbreviation: 'PE', name: 'Pernambuco' },
    { abbreviation: 'PI', name: 'Piauí' },
    { abbreviation: 'RJ', name: 'Rio de Janeiro' },
    { abbreviation: 'RN', name: 'Rio Grande do Norte' },
    { abbreviation: 'RS', name: 'Rio Grande do Sul' },
    { abbreviation: 'RO', name: 'Rondônia' },
    { abbreviation: 'RR', name: 'Roraima' },
    { abbreviation: 'SC', name: 'Santa Catarina' },
    { abbreviation: 'SP', name: 'São Paulo' },
    { abbreviation: 'SE', name: 'Sergipe' },
    { abbreviation: 'TO', name: 'Tocantins' },
    { abbreviation: 'DF', name: 'Distrito Federal' }
  ];

  selectedState: any = this.states[0];

  // "clientContacts": {
  //     "email": "anabeatriz.daveiga@example.com",
  //     "phone": "31987448750"
  // },
  // "clientAddress": {
  //     "streetAddress": "Rua Hilda de Pereira Monte",
  //     "number": "88",
  //     "complement": "Apto. 995",
  //     "neighborhood": "Petrópolis",
  //     "city": "Maceió",
  //     "state": "AL",
  //     "zipCode": "57062585"
  // },
  // "fullName": "Ana Beatriz da Veiga",
  // "identityId": "00741238403"


  constructor(public api: ApiService, public location: Location) { }

  ngOnInit(): void {
  }

  setState(state) {
    this.client.state = state.abbreviation;
    console.log("State: ", state);
  }

  register() {
    console.log("dados cliente: ", this.client);
    this.api.createClient(this.client);
  }
  
  back() {
    this.location.back();
  }

}
