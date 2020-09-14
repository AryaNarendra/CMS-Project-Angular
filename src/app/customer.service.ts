import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { Customer } from './customer';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : Http) { }

  getCustomers() : Observable<Customer[]> {
    return this.http.get('/CanteenProject/webapi/customer/')
      .map((res: Response) => {
       return res.json();
    })
  }

  searchCustomer(cusId : string) : Observable<Customer> {
    return this.http.get('/CanteenProject/webapi/customer/'+cusId)
      .map((res: Response) => {
       return res.json() as Customer;
    })
  }

  validateCustomer(user : string, password : string) : Observable<string> {
    return this.http.get('/CanteenProject/webapi/customer/'+user+"/"+password,null)
      .map((res: Response) => 
        res.text()
    );
  }


  findByCustomerName(user : string) : Observable<Customer> {
    return this.
    http.get("/CanteenProject/webapi/customer/name/"+user).
    map((res : Response) => res.json());
  }


  orderHistory(custId : number) : Observable<Order[]> {
    return this.
    http.get("/CanteenProject/webapi/orders/customer/"+custId).
    map((res : Response) => res.json());
  }

  pendingHistory(custId : number) : Observable<Order[]> {
    return this.
    http.get("/CanteenProject/webapi/orders/customerpending/"+custId).
    map((res : Response) => res.json());
  }
  placeOrder(orders : Order) : Observable<string> {
    return this.http.post("/CanteenProject/webapi/orders/placeorder/",orders).
    map((res : Response) => res.text());
  }
  cancelOrder(ordId : number, cusId : number, status : String) : Observable<string> {
    return this.http.post("/CanteenProject/webapi/orders/cancelorder/"+ordId + "/" +cusId+ "/" +status,null).
    map((res : Response) => res.text());
  }
}
