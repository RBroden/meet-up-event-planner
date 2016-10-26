import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { emailValidator, lowercaseValidator, uppercaseValidator, numberValidator, symbolValidator, lengthValidator, matchPasswords } from './create-account.validators';
import { UserService } from '../services/user.service';
import { User } from '../services/user.model';

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

  constructor(fb: FormBuilder, private userService: UserService, private router: Router) {
    this.accountCreateForm = fb.group({
      'fname'           : ['', Validators.required],
      'lname'           : ['', Validators.required],
      'email'           : ['', emailValidator],
      'password'        : ['', [lengthValidator, lowercaseValidator, uppercaseValidator, numberValidator, symbolValidator]],
      'verifyPassword'  : ['', Validators.required],
      'bio'             : ['']
    }, { validator: matchPasswords('password', 'verifyPassword') });

    this.fname          = this.accountCreateForm.controls['fname'];
    this.lname          = this.accountCreateForm.controls['lname'];
    this.email          = this.accountCreateForm.controls['email'];
    this.password       = this.accountCreateForm.controls['password'];
    this.verifyPassword = this.accountCreateForm.controls['verifyPassword'];
    this.bio            = this.accountCreateForm.controls['bio'];
  }

  ngOnInit() {
    this.setInputFocus();
  }

  setInputFocus() {
    console.log(this.fname);
  }

  onSubmit() {
    let user = new User(this.fname.value, this.lname.value, this.email.value, this.password.value, this.verifyPassword.value, this.bio.value);
    this.userService.setUser(user);
    this.router.navigate(['/']);
  }

}
