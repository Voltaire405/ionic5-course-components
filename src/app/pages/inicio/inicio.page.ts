import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes : Componentes[] = [
    {
      icon:"heart",
      name:"Alert",
      redirecTo:"/alert"
    },
    {
      icon:"barbell",
      name:"Action Sheet",
      redirecTo:"/action-sheet"
    },
    {
      icon:"image",
      name:"Avatar",
      redirecTo:"/avatar"
    },
    {
      icon:"aperture-sharp",
      name:"Botones",
      redirecTo:"/botones"
    }
  ];
  constructor() { }

  ngOnInit() {
  } 

}

interface Componentes{
  icon: string;
  name: string;
  redirecTo: string;
}