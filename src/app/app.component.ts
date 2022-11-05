import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]

})
export class AppComponent {
  
  
  constructor() {
    }
   

}
