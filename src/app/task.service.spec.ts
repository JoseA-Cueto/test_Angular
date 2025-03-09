// src/app/task.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a task', () => {
    service.addTask('Test Task');
    expect(service.getTasks()).toContain('Test Task');
  });

  it('should remove a task', () => {
    service.addTask('Test Task');
    service.removeTask('Test Task');
    expect(service.getTasks()).not.toContain('Test Task');
  });

  it('should not add an empty task', () => {
    service.addTask('');
    expect(service.getTasks().length).toBe(0);
  });
});

