import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
    <h1>To-Do List</h1>
    <h3 *ngFor="#task of tasks" (click)="taskWasSelected(task)">{{ task.description }}</h3>
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
  taskWasSelected(clickedTask: Task): void {
    console.log(clickedTask);
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description, public id: number) {

  }
}

@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  template: `
  <h3 *ngFor="#currentTask of taskList" (click)="taskClicked(currentTask)">
    {{ currentTask.description }}
  </h3>
  `
})
export class TaskListComponent {
  public taskList: Task[];
  taskClicked(clickedTask: Task): void {
    console.log(clickedTask);
  }
}
