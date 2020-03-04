import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeDetailDialogComponent } from './trade-detail-dialog.component';

describe('TradeDetailDialogComponent', () => {
  let component: TradeDetailDialogComponent;
  let fixture: ComponentFixture<TradeDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
