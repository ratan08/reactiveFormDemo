import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'; 
import { MatChipInputEvent } from '@angular/material/chips';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  loginForm!: FormGroup ;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      name: [null, Validators.required],
      lname: [null, Validators.required],
      add: [null, Validators.required],
      gender: ['', Validators.required]
    });
  }

  submit() {
    if (!this.loginForm.valid) {
      alert("fill the form")
    }else{
      alert("Form submitted  ")
    }
    console.log(this.loginForm.value);
  }
}
