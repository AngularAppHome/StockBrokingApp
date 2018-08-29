import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestologyComponent } from './investology.component';

describe('InvestologyComponent', () => {
  let component: InvestologyComponent;
  let fixture: ComponentFixture<InvestologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
