import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { Observable } from 'rxjs';
import { Order } from '../order';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-pending-history',
  templateUrl: './vendor-pending-history.component.html',
  styleUrls: ['./vendor-pending-history.component.css']
})
export class VendorPendingHistoryComponent implements OnInit {

  vendorName : string;
  venId : number;
  ordId : number;
  vendor : Vendor;
  orders : Observable<Order[]>;
  selValue : number;
  values : string;
  filter : string[];
  feature = 'Feature 1'
  arr : [];
  rs : string;
  status : string;
  selectedFeatures: any = [];
  searchString;
  
  acceptOrReject(ordId, venId, status) {
    localStorage.setItem("cancelOrderId",ordId);
    localStorage.setItem("cancelVenId", venId);
    localStorage.setItem("AcceptOrRejectStatus", status);
    this._router.navigate(['../vendor-accept-and-reject'], {relativeTo: this._route});
  }
  constructor(private vendorService : VendorService, private _route : ActivatedRoute,private _router : Router){
    this.vendor = localStorage.getItem('vendor')? JSON.parse(localStorage.getItem('vendor')):[];
    //alert("Vendor Id is " +this.vendor.venId);
    this.orders=this.vendorService.pendingHistory(this.vendor.venId);
    
   }
  
  checkIfAllSelected(x) {
    this.selectedFeatures.push(x);
    // alert("added");
  }
  cancelMe() {
    this.values = this.selectedFeatures.toString();
    // alert(this.values);
    this.filter = this.values.split(",");
    this.status="ACCEPTED";
    for(var v=0;v<this.filter.length;v++) {
      alert(this.filter[v]);
      this.vendorService.acceptOrReject(parseInt(this.filter[v]),this.vendor.venId,this.status).subscribe(x => {
        this.rs=x;
      })
    }
    alert("selected orders accepted sucessfully");
    this._router.navigate(['/vendorDashBoard']);
    alert(this.vendor.venId);

  }

  ngOnInit(): void {
  }

}
