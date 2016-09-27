import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { Event } from './event.model';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class EventService {

  public events: Array<Event> = [];
  public eventsObservable: BehaviorSubject<Event[]> = new BehaviorSubject(null);
  public seed: Array<any> = this.getSeed();

  constructor() {
    this.seed.forEach((obj) => {
      let event = new Event(obj.name, obj.eventType, obj.host, obj.start, obj.end, obj.location, obj.guests, obj.message);
      this.events.push(event);
    });

    this.updateEvents(this.events);
  }

  addEvent(event: Event) {
    this.events.push(event);
    this.updateEvents(this.events);
  }

  updateEvents(events: Array<Event>): void {
    this.eventsObservable.next(events);
  }

  getEvents(): Observable<Event[]> {
    return this.eventsObservable.asObservable();
  }

  getSeed() {
    return [
      {
        name: 'Tokyo Denim Franchise Conference',
        eventType: 'Conference',
        host: 'Tokyo Denim Inc.',
        start: '2016-09-26T22:00',
        end: '2016-09-26T22:00',
        location: '23, Mooka, Tochigi Prefecture, Japan',
        guests: ["Phil Merrell", "Ron Anderson", "Frank Smith"],
        message: 'Bring all your franchise marketing materials for review'
      },
      {
        end: "2016-09-29T22:00",
        eventType:"Party",
        host: "Universal Studios",
        location: "1342 Diamond Street, Brooklyn, NY, United States",
        guests: ["Pedro", "Sally", "June", "Isabel"],
        message:"",
        name: "Silent Wristwatch Film Festival",
        start: "2016-09-29T22:00"
      },
      {
        name: "Augmented Reality Drone Dolphin",
        eventType: "Birthday",
        start: "2016-09-29T20:00",
        end: "2016-09-29T20:00",
        host: "Beats by Dre",
        location: "Beatson Hollow, Butte County, CA, United States",
        guests: ["aaa", "bbb", "name", "of", "people"],
        message: ""
      }
    ];
  }

}
