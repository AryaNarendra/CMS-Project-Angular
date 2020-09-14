import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

import { CustomerInfoComponent } from './customer-info.component';

describe('CustomerInfoComponent', () => {
  let component: CustomerInfoComponent;
  let fixture: ComponentFixture<CustomerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInfoComponent ],
      imports:[HttpModule, HttpClientModule, FormsModule],
      providers:[CustomerService],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create customer info', () => {
    let customer : Observable<Customer>;
    let cust : Customer;
    cust = {"cusId":1,"cusName":"Rahul","cusPassword":"Rahul1997@","cusEmail":"rahulg@hexa.com","cusMobile":"7305662584","cusDob":null,"cusAddress":"7/4556,opaline"};


    expect(component).toBeTruthy();
  });
});
