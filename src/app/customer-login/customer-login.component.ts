import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import 'rxjs/add/observable/of';
import { Customer } from '../customer';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  result : any = {res : ''};
  test : string;
  custId : number;
  userName : string;
  password : string;
  customer : Observable<Customer>;
  count : number;

  validate() {
    this.customerService.validateCustomer(this.userName, this.password).subscribe(x => {
      if(x=="1"){
        localStorage.setItem("user", this.userName);
        console.log("Customer Success" +x);
        this.router.navigate(["/dashBoard"]);
       } else {
         this.count++;
       }
       console.log("result" +x);
    },
    err => {
      console.log(err);
    })
  }

  constructor(private customerService : CustomerService, private router : Router) { 
    this.count=0;
  }

  ngOnInit(): void {
  }

}
