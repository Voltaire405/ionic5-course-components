import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  checkbox = [
    {
      name:"primary",
      selected: true
    },
    {
      name:"secondary",
      selected: false
    },
    {
      name:"tertiary",
      selected:true
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  onClick(check){
    console.log(check);
  }

}
