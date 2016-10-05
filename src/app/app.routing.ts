import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { HomeComponent } from './home/home.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'events', component: EventListComponent },
    { path: 'event/:id', component: EventDetailComponent },
    { path: 'create-account', component: CreateAccountComponent },
    { path: 'create-event', component: CreateEventComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);