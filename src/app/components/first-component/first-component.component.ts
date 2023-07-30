import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  name: string = 'Leonardo';
  age: number = 25;
  address: {
    street: string,
    city: string,
    state: string
  } = {
    street: 'Rua 1',
    city: 'São Paulo',
    state: 'SP'
  }

  // Função trocar de nome
  changeName() {
    this.name = 'Vechieti';
    if (this.name == 'Vechieti') {
      this.address.street = 'Rua 2';
    }
  }


}
