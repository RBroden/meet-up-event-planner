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
  guestsTouched: boolean = false; // Workaround to create <tag-input> component validation...

  currentUser: any;
  events: Event[];

  constructor(
    private fb: FormBuilder, 
    private googleMaps: GoogleMapsService, 
    private eventService: EventService, 
    private router: Router, 
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getCurrentUser();
    this.getEvents();
    this.buildForm();
  }

  buildForm() {
    this.createEventForm = this.fb.group({
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
    this.guests.setValue([]);
  }

  checkGuestList(item) {
    this.guestsTouched = true;
    
    // Ugly workaround :(
    if(item !== '') {
      this.guests.value.push(item);
    }
    let input: Element = document.querySelector('input[formcontrolname="item"]');
    input['value'] = '';
    /////
  }

  getCurrentUser() {
    this.userService.getUser().subscribe(user => {
      this.currentUser = user;
    });
  }

  geolocate() {
    this.googleMaps.geolocate();
  }

  updateEndTime() {
    this.end.setValue(this.start.value);
  }

  getEvents() {
    this.eventService.getEvents().subscribe(events => this.events = events);
  }

  updateLocationValue() {
    let locationValue = (<HTMLInputElement>document.getElementById('location')).value;
    this.location.setValue(locationValue);
  }

  onSubmit() {
    let eventId = this.events.length + 1;
    let event = new Event(eventId, this.currentUser, this.name.value, this.eventType.value, this.host.value, this.start.value, this.end.value, this.location.value, this.guests.value, this.message.value, this.googleMaps.getPlace().url);
    this.eventService.addEvent(event);
    this.router.navigate(['/events']);
  }

}
