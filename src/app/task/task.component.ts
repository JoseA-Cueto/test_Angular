// src/app/task/task.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,  // Asegúrate de marcar el componente como standalone
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TaskService]  // Asegúrate de agregar el servicio aquí si no se usa a nivel global
})
export class TaskComponent implements OnInit {
  tasks: string[] = [];
  taskInput: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    if (this.taskInput) {
      this.taskService.addTask(this.taskInput);
      this.tasks = this.taskService.getTasks();
      this.taskInput = '';
    }
  }

  removeTask(task: string): void {
    this.taskService.removeTask(task);
    this.tasks = this.taskService.getTasks();
  }
}

