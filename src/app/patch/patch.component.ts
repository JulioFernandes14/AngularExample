import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ResponseApi {
  id: number
  title: string
  body: string
  userId: number
}

@Component({
  selector: 'app-patch',
  imports: [FormsModule],
  templateUrl: './patch.component.html',
  styleUrl: './patch.component.css'
})
export class PatchComponent {

  id?: number
  newTitle?: string
  response?: ResponseApi

  constructor (private requisicao: HttpClient) {}

  patchFunction() {
    if (this.id && this.newTitle) {
      this.requisicao.patch<ResponseApi>(`https://jsonplaceholder.typicode.com/posts/${this.id}`, {
        title: this.newTitle,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },  
      }).subscribe(response => {
        this.response = response
      })
    }
  }

}
