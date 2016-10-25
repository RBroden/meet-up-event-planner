import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from '../services/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Event;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventService
        .getCurrentEvent(this.route.snapshot.params['id'])
        .subscribe(event => {
          this.event = event
          console.log(event);
        });
  }

  viewDirections(url) {
    window.open(url, '_blank');
  }

}
