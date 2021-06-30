import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrls: ['./child-c.component.scss']
})
export class ChildCComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // PARA REDIRECT POR RELATIVE ROUTE VIAS METODO
  // USANDO ActivatedRoute, Router, NavigationExtras
  goToItem(rota:string){
    let objToSend: NavigationExtras = { relativeTo: this.route }
    this.router.navigate([rota], objToSend)
  }

}
