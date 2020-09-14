import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http : Http) { }

  showVendor() : Observable<Vendor[]> {
    return this.http.get('/CanteenProject/webapi/vendor/')
      .map((res: Response) => 
        res.json()
    )
  }

  searchVendor(venName : number) : Observable<Vendor> {
    return this.http.get('/CanteenProject/webapi/vendor/'+venName)
      .map((res: Response) => 
        res.json()
    )
  }

  validateVendor(user : string, password : string) : Observable<string> {
    return this.http.get('/CanteenProject/webapi/vendor/'+user+"/"+password,null)
      .map((res: Response) => 
        res.text()
    )
  }

  orderHistory(vendId : number) : Observable<Order[]> {
    return this.
    http.get("/CanteenProject/webapi/orders/vendor/"+vendId).
    map((res : Response) => res.json());
}

  pendingHistory(vendId : number) : Observable<Order[]> {
  return this.
  http.get("/CanteenProject/webapi/orders/vendorpending/"+vendId).
  map((res : Response) => res.json());
  }

  findByVendorName(user : string) : Observable<Vendor> {
    return this.
    http.get("/CanteenProject/webapi/vendor/"+user).
    map((res : Response) => res.json());
  }

 
acceptOrReject(ordId : number, vendId : number, status : String) : Observable<string> {
  return this.http.get("/CanteenProject/webapi/vendor/acceptOrRejectOrder/"+ordId + "/" + vendId + "/" +status,null).
  map((res : Response) => res.text());
}
}
