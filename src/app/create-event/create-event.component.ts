import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
// import { emailValidator, lowercaseValidator, uppercaseValidator, numberValidator, symbolValidator, lengthValidator, matchPasswords } from './create-account.validators';
import { UserService } from '../services/user.service';
import { User } from '../services/user.model';
import { GoogleMapsService } from '../services/google-maps.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  createEventForm: FormGroup;
  name: AbstractControl;
  eventType: AbstractControl;
  host: AbstractControl;
  start: AbstractControl;
  end: AbstractControl;
  guests: AbstractControl;
  location: AbstractControl;
  message: AbstractControl;

  items: any;

  constructor(fb: FormBuilder, private googleMaps: GoogleMapsService) {
    this.createEventForm = fb.group({
      'name'      : ['', Validators.required],
      'eventType' : ['', Validators.required],
      'host'      : ['', Validators.required],
      'start'     : ['', Validators.required],
      'end'       : ['', Validators.required],
      'guests'    : [''],
      'location'  : ['', Validators.required],
      'message'   : ['']    
    });

    this.name = this.createEventForm.controls['name'];
    this.eventType = this.createEventForm.controls['eventType'];
    this.host = this.createEventForm.controls['host'];
    this.start = this.createEventForm.controls['start'];
    this.end = this.createEventForm.controls['end'];
    this.guests = this.createEventForm.controls['guests'];
    this.location = this.createEventForm.controls['location'];
    this.message = this.createEventForm.controls['message'];

    function lengthValidator(control: FormControl): { [s: string]: boolean } {
      if (control.value.length < 1) {
        return {invalidLength: true}
      }
    }

  }

  ngOnInit() {
    
  }

  geolocate() {
    this.googleMaps.geolocate();
  }

}
