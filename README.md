# Meet Up Event Planner
This app was created for the [Udacity Senior Web Developer Nanodegree](https://www.udacity.com/course/senior-web-developer-nanodegree-by-google--nd802).

Since one of my goals this year is to continue the transition from Angular to Angular 2, I chose to create this app with Angular 2 [angular-cli](https://github.com/angular/angular-cli).
The angular-cli builds in best practices such as bundling and minification for production builds, linting, test scaffolding and more. Directions for install the application, and running the tests can be found below.

## High Level Lessons Learned
The required features for this assignment were an account creation form, event creation form, and an event display list. I chose to accomplish this without adding the overhead of persistent storage.  Accounts and events created are only persistent in memory and the app is reset on every refresh. 
Using a framework such as Angular made the form validation for both account creation and event creation a cleaner development experience. Using [Twitter Bootstrap's v4 alpha](http://v4-alpha.getbootstrap.com/) made it much easier to design an application that looks great on both desktop and mobile. 
In addition the [ChromeVox](http://www.chromevox.com/) plugin is a fantastic tool for ensuring web apps work well for screen readers.

## Running the app locally
Clone the git repository and install the [angular-cli](npm install -g angular-cli) tool globally `npm install -g angular-cli`. Run `npm install` from the project's directory. This will install the projects dependencies and allow you to run a development server described below.

## Development server
Run `ng serve` for a local dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Type `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* [Event List Spec](https://github.com/philmerrell/meet-up-event-planner/blob/master/src/app/event-list/event-list.component.spec.ts) - This component's tests are what's know as "[shallow](https://angular.io/docs/ts/latest/guide/testing.html#!#shallow-component-test)" unit tests. Shallow tests allow us to test a component's logic and its template. Since we only want to test this component, we are going to tell the 
angular compiler to ignore tags it doesn't recognize such as `<router-outlet>`.  We accomplish this by adding `NO_ERRORS_SCHEMA` to the tesing module's `schemas` metadata. This greatly simplifies testing a component's template. The trade off is the angular compiler will not 
guard against misspelled and misused componets and directives. The particular tests for this component simply ensure the component can be created, display a certain message when the user is not logged in, display a welcome message when the user logs in and ensures the component gets a list of events to display.

## Running end-to-end tests

There are 2 end to end tests, which can be run by typing `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure the app is running locally via `ng serve`.
* Each end to end test is broken up into a spec file and a page object file. The [create-account.po.ts](https://github.com/philmerrell/meet-up-event-planner/blob/master/e2e/create-account/create-account.po.ts) file abstracts the actions of the tests into a page object. This makes our spec files easier to read. 
The [create-account.e2e-spec.ts](https://github.com/philmerrell/meet-up-event-planner/blob/master/e2e/create-account/create-account.e2e-spec.ts) file uses the page object file to navigate to the create account page, verfify navigation happened successfully, creates a user account, and verfiy the account was created successfully.  
