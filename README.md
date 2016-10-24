# Meet Up Event Planner
This app was created for the [Udacity Senior Web Developer Nanodegree](https://www.udacity.com/course/senior-web-developer-nanodegree-by-google--nd802).

Since one of my goals this year is to continue the transition from Angular to Angular 2, I chose to create this app with Angular 2 [angular-cli](https://github.com/angular/angular-cli).
The angular-cli builds in best practices such as bundling and minification for production builds, linting, testing scaffolding and more.  Unit tests can be run via Karma using the `ng test` command.  e2e tests are run via Protractor using the `ng e2e` command.

## High Level Lessons Learned
* *Forms* - There are two options for creating forms in Angular 2 template-driven and reactive forms. Since reactive forms are created as properties on the component's class they 
give us the ability to test forms in unit tests rather than depending on e2e tests to validate form input.  
* *Unit Tests* - There are several types of unit tests. Isolated unit tests "examine an instance of a class all by itself without any dependence on Angular or any injected values."[[1]](https://angular.io/docs/ts/latest/guide/testing.html#!#isolated-unit-tests).
This type of test lends itself well to testing items such as pipes and services–where Angular is not a main dependency.  [Shallow component tests](https://angular.io/docs/ts/latest/guide/testing.html#!#shallow-component-test)

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. If you are running e2e tests it is necessary to run the `serve` conmmand first.

## Running unit tests

Type `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* [Event List Spec](https://github.com/philmerrell/meet-up-event-planner/blob/master/src/app/event-list/event-list.component.spec.ts) - This component's tests are what's know as "[shallow](https://angular.io/docs/ts/latest/guide/testing.html#!#shallow-component-test)" unit tests. Since we only want to test this component only, we are going to tell the 
angular compiler to ignore tags it doesn't recognize such as `<router-outlet>`.  We accomplish this by adding `NO_ERRORS_SCHEMA` to the tesing module's `schemas` metadata. This greatly simplifies testing a component's template. The trade off is the angular compiler will not 
guard against misspelled and misused componets and directives. The tests for this component simply ensure the component can be created, display a certain message when the user is not logged in, display a welcome message when the user logs in and ensures the component gets a list of events to display.

## Running end-to-end tests

There are 2 end to end tests, which can be run by typing `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure the app is running locally via `ng serve`.

Each end to end test is broken up into a spec file and a page object file. The [create-account.po.ts](https://github.com/philmerrell/meet-up-event-planner/blob/master/e2e/create-account/create-account.po.ts) file abstracts the actions of the tests into a page object. This makes our spec files easier to read. 
The [create-account.e2e.spec.ts](https://github.com/philmerrell/meet-up-event-planner/blob/master/e2e/create-account/create-account.e2e.spec.ts) file uses the page object file to navigate to the create account page, verfify navigation happened successfully, creates a user account, and verfiy the account was created successfully.  
