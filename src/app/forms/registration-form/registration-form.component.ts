import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.validators();
  }
  validators(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailRegx)]],
      name: ['', Validators.required],
      lname: ['', Validators.required],
      add: ['', Validators.required],
      gender: ['Male', Validators.required],
      skills: new FormArray([
        
      ])
    });
  }
  get addSkills(){
    return (<FormArray>this.loginForm.get('skills')).controls;
  }
  add(){
   (<FormArray>this.loginForm.get('skills')).push(new FormControl('',Validators.required));
   
  }
  submit() {
    if (!this.loginForm.valid) {
      alert("fill the form")
    }else{
      alert("Form submitted  ")
    }
    console.log(this.loginForm);
  }
}
