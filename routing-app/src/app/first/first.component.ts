import { Component, OnInit } from '@angular/core';
// A API ACTIVAETOUTE DISPONIBILIZA RECUROS PARA QUE
// SEJA POSSÍVEL OBTER DADOS DECLARADOS EM UMA URL
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(
    private route: ActivatedRoute) { 
   }

  ngOnInit(): void {
    // O OBSERVABLE QUERYPARAMS RETORNA O KEY VALUE
    // DAS INFORMAÇ~EOS DECLARADAS. EXEMPLO:
    // http://localhost:4200/first-component?name=Pier
    // TEMOS O OBJETO {name:'Pier'}
    this.route.queryParams.subscribe(params=>{
      console.log(params)
    })
  }

}
