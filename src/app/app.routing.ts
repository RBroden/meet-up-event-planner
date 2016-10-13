import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { HomeComponent } from './home/home.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { AuthRouteGuard } from './shared/auth-route-guard';

const appRoutes: Routes = [
    // { path: '', component: HomeComponent },
    { path: '', component: EventListComponent },
    { path: 'event/:id', component: EventDetailComponent },
    { path: 'create-account', component: CreateAccountComponent },
    { path: 'create-event', component: CreateEventComponent, canActivate: [ AuthRouteGuard ] }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);