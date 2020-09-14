import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderHistoryComponent } from './customer-order-history.component';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpModule } from '@angular/http';
import { CustomerFilterPipe } from '../customer-filter.pipe';
import { FormsModule } from '@angular/forms';
import { Customer } from '../customer';


describe('CustomerOrderHistoryComponent', () => {
  let component: CustomerOrderHistoryComponent;
  let fixture: ComponentFixture<CustomerOrderHistoryComponent>;


  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [ CustomerOrderHistoryComponent, CustomerFilterPipe ],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule, HttpModule,FormsModule], 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let customer : Customer;
    customer = localStorage.getItem('customer')?JSON.parse(localStorage.getItem('customer')):[];
    expect(component).toBeTruthy();
  });
});
