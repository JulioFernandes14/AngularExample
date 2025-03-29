import { Component } from '@angular/core';
import dados  from './dados-loja.json'

interface Loja {
  idLoja: number
  nome: string
  localizacao: string
}

@Component({
  selector: 'app-get-json',
  imports: [],
  templateUrl: './get-json.component.html',
  styleUrl: './get-json.component.css'
})
export class GetJsonComponent {

  dados: Array<Loja> = dados

}
