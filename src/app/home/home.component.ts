import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //interpolation use double  {{}}
  itemCount: number;
  //or Bind Property using []
  btntxt: string = "Click to add item";
  goalText: string ="My First Life Goal";
  goals =[];

  constructor() { }

  ngOnInit() {
    this.itemCount=this.goals.length;
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText="";
    this.itemCount=this.goals.length;
  }

}
