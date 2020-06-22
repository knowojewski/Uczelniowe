import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadsNavComponent } from './threads-nav.component';

describe('ThreadsNavComponent', () => {
  let component: ThreadsNavComponent;
  let fixture: ComponentFixture<ThreadsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
