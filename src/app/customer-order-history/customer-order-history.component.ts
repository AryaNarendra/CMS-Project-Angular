import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Observable } from 'rxjs';
import { Order } from '../order';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-order-history',
  templateUrl: './customer-order-history.component.html',
  styleUrls: ['./customer-order-history.component.css']
})
export class CustomerOrderHistoryComponent implements OnInit {

  customerName : string;
  custId : number;
  customer : Customer;
  orders : Observable<Order[]>;
  searchString;

  constructor(private customerService : CustomerService) { 
    this.customer = localStorage.getItem('customer')?JSON.parse(localStorage.getItem('customer')):[];
    this.orders = this.customerService.orderHistory(this.customer.cusId);
  }

  ngOnInit(): void {
  }

}
