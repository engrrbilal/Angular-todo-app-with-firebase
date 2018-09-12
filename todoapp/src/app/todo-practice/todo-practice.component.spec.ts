import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPracticeComponent } from './todo-practice.component';

describe('TodoPracticeComponent', () => {
  let component: TodoPracticeComponent;
  let fixture: ComponentFixture<TodoPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
