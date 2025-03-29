import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface User {
  id: 1,
  name: string
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

@Component({
  selector: 'app-get',
  imports: [],
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})
export class GetComponent {

  users: Array<User> = [] 
  

  constructor(private requisicao: HttpClient) { 
    this.buscarDados()
  }

  buscarDados() {
    this.requisicao.get<Array<User>>('https://jsonplaceholder.typicode.com/users').subscribe(dado => {
      this.users = dado
    })
  }

}
