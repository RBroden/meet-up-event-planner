import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../services/user.model';
import { EventService } from '../services/event.service';
import { Event } from '../services/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  animations: [
    trigger('title', [
      state('fadeInDown', style({ opacity: 1, transform: 'translate3d(0, 0, 0)' })),
      state('fadeOutUp', style({ opacity: 0, transform: 'translate3d(0, -30%, 0)'})),
      transition('* => *', animate('.2s'))
    ]),
    trigger('fade', [
      state('fadeIn', style({ opacity: 1 })),
      state('fadeOut', style({ opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class EventListComponent implements OnInit {

  currentUser: User;
  events: Event[];
  titleAnimation: string = 'fadeOutUp';
  fadeAnimation: string = 'fadeOut';

  constructor(private router: Router, private userService: UserService, private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
    this.getUser();
    this.triggerViewAnimation();
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

  triggerViewAnimation() {
    setTimeout(() => {
      this.titleAnimation = 'fadeInDown';
      this.fadeAnimation = 'fadeIn';
    }, 300)
  }

}
