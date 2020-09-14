import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../customer.service';

import { CustomerCancelOrderComponent } from './customer-cancel-order.component';

describe('CustomerCancelOrderComponent', () => {
  let component: CustomerCancelOrderComponent;
  let fixture: ComponentFixture<CustomerCancelOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCancelOrderComponent ],
      imports: [HttpModule, FormsModule, RouterModule.forRoot([])], 
      providers: [CustomerService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCancelOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
