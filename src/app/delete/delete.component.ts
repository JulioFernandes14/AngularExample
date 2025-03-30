import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete',
  imports: [FormsModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  id?: number
  response?: any

  constructor (private requisicao: HttpClient) {}

  patchFunction() {
    if (this.id) {
      this.requisicao.delete(`https://jsonplaceholder.typicode.com/posts/${this.id}`).subscribe((response: any) => {
        this.response = response
      })
    }
  }

  log(s: any) {
    console.log(s)
  }
}
