import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit {
 
  result : any = {res:''};
  test : string;
  vendId : number;
  userName : string;
  passWord : string;
  vendor : Observable<Vendor>;
  count : number;
  validate()  {
    this.vendorService.validateVendor(this.userName,this.passWord).subscribe( x => {
    if(x=="1") {
      localStorage.setItem("user",this.userName);
      console.log("Vendor Success");
      this.router.navigate(["/vendor-dashboard"]);
    } else {
      this.count++;
    }
   console.log("result " +x);
   },
  err => {
    console.log(err);
  })
}
  constructor(private vendorService : VendorService, private router : Router) {
    this.count=0;
   }

  ngOnInit(): void {
  }

}
