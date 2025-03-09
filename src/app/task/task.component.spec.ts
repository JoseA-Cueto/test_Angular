// src/app/task/task.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskComponent } from './task.component';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let taskService: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TaskComponent, FormsModule],  // Agregar TaskComponent a imports
      providers: [TaskService]
    });

    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    taskService = TestBed.inject(TaskService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a task', () => {
    component.taskInput = 'New Task';
    component.addTask();
    expect(taskService.getTasks().length).toBe(1);
  });

  it('should remove a task', () => {
    component.taskInput = 'New Task';
    component.addTask();
    component.removeTask('New Task');
    expect(taskService.getTasks().length).toBe(0);
  });

  it('should not add an empty task', () => {
    component.taskInput = '';
    component.addTask();
    expect(taskService.getTasks().length).toBe(0);
  });
});


