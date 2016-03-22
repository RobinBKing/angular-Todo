import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
    <h1>To-Do List</h1>
    <h3 *ngFor="#task of tasks">{{ task.description }}</h3>
    </div>
  `
})

export class AppComponent {
  public tasks: Task[];
  constructor(){
    this.tasks = [
      new Task("Create To-Do List app.", 0),
      new Task("Watch Treehouse Angular Video", 1),
      new Task("Walk the dog.", 2),
      new Task("Cook Dinner.", 3)
    ];
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description, public id: number) {

  }
}
