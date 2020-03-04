import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAccordionItemComponent } from './detail-accordion-item.component';

describe('DetailAccordionItemComponent', () => {
  let component: DetailAccordionItemComponent;
  let fixture: ComponentFixture<DetailAccordionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAccordionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
