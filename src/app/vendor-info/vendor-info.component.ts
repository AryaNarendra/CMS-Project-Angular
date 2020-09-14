import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-info',
  templateUrl: './vendor-info.component.html',
  styleUrls: ['./vendor-info.component.css']
})
export class VendorInfoComponent implements OnInit {

 
  vendorName : string;
  venId : number;
  vendor : Observable<Vendor>;
  vend : Vendor;
  constructor(private vendorService : VendorService) { 
  this.vendorService.findByVendorName(localStorage.getItem("user")).subscribe(x => {
    this.vend=x;
    localStorage.setItem('vendor', JSON.stringify(x));
  });
}
  ngOnInit(): void {
  }

}
