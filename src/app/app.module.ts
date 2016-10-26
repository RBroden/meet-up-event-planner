import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EventListComponent } from './event-list/event-list.component';
import { HomeComponent } from './home/home.component';
import { EventService } from './services/event.service';
import { UserService } from './services/user.service';
import { CreateEventComponent } from './create-event/create-event.component';
import { GoogleMapsService } from './services/google-maps.service';
import { AuthRouteGuard } from './shared/auth-route-guard';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ng2-tag-input';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { MyAutofocusDirective } from './shared/autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    EventListComponent,
    HomeComponent,
    CreateEventComponent,
    EventDetailComponent,
    MyAutofocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    TagInputModule
  ],
  providers: [appRoutingProviders, UserService, EventService, GoogleMapsService, AuthRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
