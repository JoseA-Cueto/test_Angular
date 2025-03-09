// src/app/task.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class TaskService {
  private tasks: string[] = [];

  constructor() { }

  getTasks(): string[] {
    return this.tasks;
  }

  addTask(task: string): void {
    if (task.trim().length > 0) {
      this.tasks.push(task);  
    }
  }

  removeTask(task: string): void {
    const index = this.tasks.indexOf(task);
    if (index >= 0) {
      this.tasks.splice(index, 1);
    }
  }
}

