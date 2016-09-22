import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { emailValidator, lowercaseValidator, uppercaseValidator, numberValidator, symbolValidator, lengthValidator, matchPasswords } from './create-account.validators';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  accountCreateForm: FormGroup;
  fname: AbstractControl;
  lname: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  verifyPassword: AbstractControl;
  bio: AbstractControl;

  constructor(fb: FormBuilder) {
    this.accountCreateForm = fb.group({
      'fname'           : ['', Validators.required],
      'lname'           : ['', Validators.required],
      'email'           : ['', emailValidator],
      'password'        : ['', [lengthValidator, lowercaseValidator, uppercaseValidator, numberValidator, symbolValidator]],
      'verifyPassword'  : ['', Validators.required],
      'bio'             : ['']
    }, { validator: matchPasswords('password', 'verifyPassword') });

    this.fname = this.accountCreateForm.controls['fname'];
    this.lname = this.accountCreateForm.controls['lname'];
    this.email = this.accountCreateForm.controls['email'];
    this.password = this.accountCreateForm.controls['password'];
    this.verifyPassword = this.accountCreateForm.controls['verifyPassword'];
    this.bio = this.accountCreateForm.controls['bio'];

  }

  ngOnInit() {}

  onSubmit() {
    alert('Submitted');
  }

}