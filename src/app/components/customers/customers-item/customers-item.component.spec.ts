import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersItemComponent } from './customers-item.component';

describe('CustomersItemComponent', () => {
  let component: CustomersItemComponent;
  let fixture: ComponentFixture<CustomersItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
