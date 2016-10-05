import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { Event } from './event.model';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class EventService {

  private events: Array<Event> = [];
  public eventsObservable: BehaviorSubject<Event[]> = new BehaviorSubject(null);
  private currentEvent: Event;
  public currentEventObservable: BehaviorSubject<Event> = new BehaviorSubject(null);
  private seed: Array<any> = this.getSeed();

  constructor() {
    this.seed.forEach((obj) => {
      let event = new Event(obj.id, obj.user, obj.name, obj.eventType, obj.host, obj.start, obj.end, obj.location, obj.guests, obj.message);
      this.events.push(event);
    });

    this.updateEvents(this.events);
  }

  addEvent(event: Event): void {
    this.events.push(event);
    this.updateEvents(this.events);
  }

  updateEvents(events: Array<Event>): void {
    this.eventsObservable.next(events);
  }

  getEvents(): Observable<Event[]> {
    return this.eventsObservable.asObservable();
  }

  getCurrentEvent(id): Observable<Event> {
    let eventId = +id;
    let event = _.find(this.events, {'id': eventId});
    this.currentEventObservable.next(event);
    return this.currentEventObservable.asObservable();
  }
  
  getSeed() {
    return [
      {
        id: 1,
        user: {fname: 'Phil', lname: 'Merrell', email: 'philbot5000@gmail.com', password: '', verifyPassword: '', bio: '' },
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
        id: 2,
        user: {fname: 'Phil', lname: 'Merrell', email: 'philbot5000@gmail.com', password: '', verifyPassword: '', bio: '' },
        name: "Augmented Reality Dolphin Drone Demo",
        eventType: "Birthday",
        start: "2016-09-29T20:00",
        end: "2016-09-29T20:00",
        host: "Beats by Dre",
        location: "Beatson Hollow, Butte County, CA, United States",
        guests: ["aaa", "bbb", "name", "of", "people"],
        message: ""
      },
      {
        id: 3,
        user: {fname: 'Phil', lname: 'Merrell', email: 'philbot5000@gmail.com', password: '', verifyPassword: '', bio: '' },
        name: 'Tokyo Denim Franchise Conference',
        eventType: 'Conference',
        host: 'Tokyo Denim Inc.',
        start: '2016-09-26T22:00',
        end: '2016-09-26T22:00',
        location: '23, Mooka, Tochigi Prefecture, Japan',
        guests: ["Phil Merrell", "Ron Anderson", "Frank Smith"],
        message: 'Bring all your franchise marketing materials for review'
      }
    ];
  }

}
