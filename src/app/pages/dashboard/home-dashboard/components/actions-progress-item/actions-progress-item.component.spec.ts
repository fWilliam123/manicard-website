import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsProgressItemComponent } from './actions-progress-item.component';

describe('ActionsProgressItemComponent', () => {
  let component: ActionsProgressItemComponent;
  let fixture: ComponentFixture<ActionsProgressItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsProgressItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsProgressItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
