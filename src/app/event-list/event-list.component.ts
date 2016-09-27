import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../services/user.model';
import { EventService } from '../services/event.service';
import { Event } from '../services/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  currentUser: User;
  events: Event[];

  constructor(private router: Router, private userService: UserService, private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
    this.getUser();
  }

  getEvents() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });

    console.log(this.events);
  }

  getUser() {
    this.userService.getUser().subscribe(user => {
      this.currentUser = user;
    });
  }

  goTo(url) {
    this.router.navigate([url]);
  }

}
