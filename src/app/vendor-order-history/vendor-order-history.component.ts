import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { Observable } from 'rxjs';
import { Order } from '../order';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-order-history',
  templateUrl: './vendor-order-history.component.html',
  styleUrls: ['./vendor-order-history.component.css']
})
export class VendorOrderHistoryComponent implements OnInit {

  vendorName : string;
  venId : number;
  vendor : Vendor;
  orders : Observable<Order[]>;
  searchString;
  
  constructor(private vendorService : VendorService) { 
    this.vendor = localStorage.getItem('vendor')? JSON.parse(localStorage.getItem('vendor')):[];
   // alert("vendor Id is " +this.vendor.venId);
   this.orders=this.vendorService.orderHistory(this.vendor.venId);
  }


  ngOnInit(): void {
  }

}
