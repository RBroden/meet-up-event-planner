/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { EventListComponent } from './event-list.component';
import { UserService } from '../services/user.service';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location, CommonModule } from '@angular/common';
import { Observable } from 'rxjs/Rx';

describe('Component: EventList', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;
  let userService: UserService;
  let eventService: EventService;
  let router: Router;

  let de: DebugElement;
  let el: HTMLElement;

  let UserServiceStub = {
    currentUser: null,
    getUser: () => {
      return Observable.of(this.currentUser);
    },
    setUser: (user) => {
      this.currentUser = user;
    }
  };

  let EventServiceStub = {
      getEvents: () => {
          return Observable.of(
              [
                {
                    id: 1,
                    name: 'Test Event',
                    startDate: {
                        moment: ''
                    },
                    endDate: {
                        moment: ''
                    },
                    guests: ['Bob', 'Joe']
                }
            ]
          );
      }
  };

  class MockEventDetailComponent {};


  beforeEach(() => {
    // TestBed.configureTestingModule takes an @NgModule-like metadata object. This one simply declares the component to test.
    TestBed.configureTestingModule({
        declarations: [ EventListComponent ],
        imports: [ CommonModule ],
        schemas: [ NO_ERRORS_SCHEMA ],
        providers: [
            { provide: UserService, useValue: UserServiceStub },
            { provide: EventService, useValue: EventServiceStub },
            { provide: Router, useValue: RouterStub }
        ]
    });

    // TestBed.createComponent creates an instance of BannerComponent to test and returns a fixture.
    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;

    userService = TestBed.get(UserService);
    eventService = TestBed.get(EventService);

  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Meet Up" in an h1 tag when no user is signed in', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    expect(el.textContent).toBe('Meet Up');
  });

  it('should display the first name of a user when logged in', () => {
    userService.setUser({
      fname: 'Phil',
      lname: 'Merrell',
      email: 'philbot5000@gmail.com',
      password: '',
      verifyPassword: '',
      bio: ''
    });
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    expect(el.textContent).toBe('Hey, Phil');
  });

  it('should get a list of events from the eventService', () => {
      fixture.detectChanges();
      expect(component.events.length).toEqual(1);

  });
});


///////// Helpers /////////



class RouterStub {

}
