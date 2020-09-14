import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-accept-and-reject',
  templateUrl: './vendor-accept-and-reject.component.html',
  styleUrls: ['./vendor-accept-and-reject.component.css']
})
export class VendorAcceptAndRejectComponent implements OnInit {

  vendId : number;
  orderId : number;
  status : string;
  result : string;
  // nrSelect = "ACCEPTED";

  constructor(private _vendorService : VendorService,private _router : Router, private _route : ActivatedRoute) { 
    this.orderId=parseInt(localStorage.getItem("cancelOrderId"));
    this.vendId=parseInt(localStorage.getItem("cancelVenId"));
  }
  acceptOrReject() {
    
    this._vendorService.acceptOrReject(this.orderId,this.vendId,this.status).subscribe(x =>{
      this.result=x;
      alert(x);
    });
    setTimeout(() => {
      this._router.navigate(['../vendor-pending-history'], {relativeTo: this._route});
    }
    , 3000);
  }

  ngOnInit(): void {
  }

}
