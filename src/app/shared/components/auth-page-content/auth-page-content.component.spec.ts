import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageContentComponent } from './auth-page-content.component';

describe('AuthPageContentComponent', () => {
  let component: AuthPageContentComponent;
  let fixture: ComponentFixture<AuthPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
