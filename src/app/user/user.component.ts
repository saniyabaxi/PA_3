import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myForm: any;

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      uname: new FormControl(''),
      fname: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl(''),
      pas: new FormControl('')
    });
  }
  fname:any
  uname:any
  lname:any
  email:any
  pas:any;
  onSubmit(form: FormGroup) {
    // console.log('Valid?', form.valid); // true or false
    // console.log('Name', form.value.name);
    // console.log('Email', form.value.email);
    // console.log('Message', form.value.message);
    this.fname=form.value.fname;
    this.uname=form.value.uname;
    this.lname=form.value.lname;
    this.email=form.value.email;
    
  }
}


