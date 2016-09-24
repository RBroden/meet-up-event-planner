import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
// import { emailValidator, lowercaseValidator, uppercaseValidator, numberValidator, symbolValidator, lengthValidator, matchPasswords } from './create-account.validators';
import { UserService } from '../services/user.service';
import { User } from '../services/user.model';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  createEventForm: FormGroup;
  name: AbstractControl;

  constructor(fb: FormBuilder) {
    this.createEventForm = fb.group({
      'name'    : ['', Validators.required],
      'type'    : ['', Validators.required],
      'host'    : ['', Validators.required],
      'start'   : ['', Validators.required],
      'end'     : ['', Validators.required],
      'guests'  : ['', Validators.required],
      'location': ['', Validators.required],
      'message' : ['']    
    });

    this.name = this.createEventForm.controls['name'];
  }

  ngOnInit() {
  }

}
