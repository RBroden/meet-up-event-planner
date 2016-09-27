import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../services/user.model';
import { GoogleMapsService } from '../services/google-maps.service';
import { EventService } from '../services/event.service';
import { Event } from '../services/event.model';

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

  // Workaround to accomodate <tag-input> validation...
  guestsTouched: boolean = false;

  constructor(fb: FormBuilder, private googleMaps: GoogleMapsService, private eventService: EventService) {
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
  }

  ngOnInit() {}

  checkGuestList() {
    this.guestsTouched = true;
  }

  geolocate() {
    this.googleMaps.geolocate();
  }

  updateEndTime() {
    this.end.setValue(this.start.value);
  }

  onSubmit() {
    let event = new Event(this.name.value, this.eventType.value, this.host.value, this.start.value, this.end.value, this.location.value, this.guests.value, this.message.value);
    this.eventService.addEvent(event);
  }

}
