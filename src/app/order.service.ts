import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : Http) { }

  vendorOrder(venId : string) : Observable<Order[]> {
    return this.http.get('/CanteenProject/webapi/orders/vendor/'+venId)
      .map((res: Response) => 
        res.json()
    )
  }

  vendorPending(venId : string) : Observable<Order[]> {
    return this.http.get('/CanteenProject/webapi/orders/vendorpending/'+venId)
      .map((res: Response) => 
        res.json()
    )
  }

  customerOrder(custId : string) : Observable<Order[]> {
    return this.http.get('/CanteenProject/webapi/orders/customer/'+custId)
      .map((res: Response) => 
        res.json()
    )
  }

  customerPending(custId : string) : Observable<Order[]> {
    return this.http.get('/CanteenProject/webapi/orders/customerpending/'+custId)
      .map((res: Response) => 
        res.json()
    )
  }

  placeOrder(order : Order) : Observable<string> {
    return this.http.post('/CanteenProject/webapi/orders/placeorder/',order)
      .map((res: Response) => 
        res.text()
    )
  }
}
