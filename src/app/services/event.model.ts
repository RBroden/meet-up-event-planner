import * as moment from 'moment';
import { User } from './user.model';

export class Event {
  
  id: number;
  user: User;
  name: string;
  eventType: string;
  host: string;
  start: string;
  end: string;
  location: any;
  guests: Array<string>;
  message: string;
  startMoment: string;
  

  constructor(id, user, name, eventType, host, start, end, location, guests, message) {
    this.id = id;
    this.user = user;
    this.name = name;
    this.eventType = eventType;
    this.host = host;
    this.start = start;
    this.end = end;
    this.location = location;
    this.guests = guests;
    this.message = message;
    this.startMoment = moment(start).format('MMMM Do YYYY [at] hh:mm a');
  }
}