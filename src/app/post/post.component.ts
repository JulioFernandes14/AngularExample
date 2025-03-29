import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

interface User {
  name: string
  email: string
}

@Component({
  selector: 'app-post',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  newUser: User = {
    name: '',
    email: '',
  };

  confirmUser: User = {
    name: '',
    email: '',
  }
  
  constructor(private requisicao: HttpClient) {}

  cadastrarUser() {
    this.requisicao.post<User>('https://jsonplaceholder.typicode.com/users', this.newUser).subscribe(response => {
      this.confirmUser = response
    });
  }

}
