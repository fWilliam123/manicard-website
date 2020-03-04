import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupDetailDialogComponent } from './user-group-detail-dialog.component';

describe('UserGroupDetailDialogComponent', () => {
  let component: UserGroupDetailDialogComponent;
  let fixture: ComponentFixture<UserGroupDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGroupDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
