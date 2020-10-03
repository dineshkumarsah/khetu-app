import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagentocartComponent } from './magentocart.component';

describe('MagentocartComponent', () => {
  let component: MagentocartComponent;
  let fixture: ComponentFixture<MagentocartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagentocartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagentocartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
