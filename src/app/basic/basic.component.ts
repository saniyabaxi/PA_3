import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',

})
export class BasicComponent implements OnInit {
  name = 'assignment';
  num:number=30;
  str:String='Hello world';
  date1 = new Date();
  options=[1,2,3,4,5];
  optionscombo=[
    {
      id:101,
      name:'Saniya'
    },
    {
      id:102,
      name:'Siddhi'
    },
   ];
  selectedItem?:String;
  OnSelect(e:any){
     this.selectedItem =e.target.value
  }
  onmulti(){
    console.log("multi Selected");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
