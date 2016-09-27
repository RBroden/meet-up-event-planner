import * as moment from 'moment';

export class Event {
  
  name: string;
  eventType: string;
  host: string;
  start: string;
  end: string;
  location: string;
  guests: Array<string>;
  message: string;
  startMoment: string;
  

  constructor(name, eventType, host, start, end, location, guests, message) {
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