import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCardItemComponent } from './detail-card-item.component';

describe('DetailCardItemComponent', () => {
  let component: DetailCardItemComponent;
  let fixture: ComponentFixture<DetailCardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
