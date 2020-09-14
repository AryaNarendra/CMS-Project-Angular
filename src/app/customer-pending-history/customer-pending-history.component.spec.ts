import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';
import { Customer } from '../customer';
import { CustomerFilterPipe } from '../customer-filter.pipe';

import { CustomerPendingHistoryComponent } from './customer-pending-history.component';

describe('CustomerPendingHistoryComponent', () => {
  let component: CustomerPendingHistoryComponent;
  let fixture: ComponentFixture<CustomerPendingHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPendingHistoryComponent, CustomerFilterPipe ],
      imports: [ HttpClientTestingModule,HttpClientModule,HttpModule, RouterModule.forRoot([]), FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPendingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    let customer : Customer;
    customer = localStorage.getItem('customer')? JSON.parse(localStorage.getItem('customer')):[];
    expect(component).toBeTruthy();
  });
});
