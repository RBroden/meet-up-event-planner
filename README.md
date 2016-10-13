# Meet Up Event Planner
This app was created for the [Udacity Senior Web Developer Nanodegree](https://www.udacity.com/course/senior-web-developer-nanodegree-by-google--nd802).

Since one of my goals this year is to continue the transition from Angular to Angular 2, I chose to create this app using Angular 2 using [angular-cli](https://github.com/angular/angular-cli).

## High Level Lessons Learned
* *Forms* - There are two options for creating forms in Angular 2 template-driven and reactive forms. Since reactive forms are created as properties on the component's class they 
give us the ability to test forms in unit tests rather than depending on e2e tests to validate form input.  
* *Unit Tests* - There are several types of unit tests. Isolated unit tests "examine an instance of a class all by itself without any dependence on Angular or any injected values."[1](https://angular.io/docs/ts/latest/guide/testing.html#!#isolated-unit-tests).
This type of test lends itself well to testing items such as pipes and services–where Angular is not a main dependency.  [Shallow component tests](https://angular.io/docs/ts/latest/guide/testing.html#!#shallow-component-test)

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.
