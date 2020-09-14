import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  customerName : string;
  custId : number;
  customer : Observable<Customer>;
  cust : Customer;

  constructor(private customerService : CustomerService) {
    this.customerService.findByCustomerName(localStorage.getItem("user")).subscribe(x=>{this.cust=x;
    localStorage.setItem('customer', JSON.stringify(x));
  });
   }

  ngOnInit(): void {
    this.customer = this.customerService.findByCustomerName(localStorage.getItem("user"));
  }

}
