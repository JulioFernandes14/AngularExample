import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface RequestResponseApi {
  id: number
  title: string
  body: string
  userId: number
}

@Component({
  selector: 'app-put',
  imports: [FormsModule],
  templateUrl: './put.component.html',
  styleUrl: './put.component.css'
})
export class PutComponent {
  request: RequestResponseApi = {
    id: 0,
    title: '',
    body: '',
    userId: 0
  }
  response?: RequestResponseApi


  constructor (private requisicao: HttpClient) {}

  patchFunction() {
    if (this.request?.id && this.request?.title && this.request?.body && this.request?.userId) {
      this.requisicao.put<RequestResponseApi>(`https://jsonplaceholder.typicode.com/posts/${this.request.id}`, {
        id: JSON.stringify(this.request.id),
        title: JSON.stringify(this.request.title),
        body: JSON.stringify(this.request.body),
        userId: JSON.stringify(this.request.userId),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },  
      }).subscribe(response => {
        this.response = response
      })
    }
  }
}
