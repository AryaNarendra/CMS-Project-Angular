import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-cancel-order',
  templateUrl: './customer-cancel-order.component.html',
  styleUrls: ['./customer-cancel-order.component.css']
})
export class CustomerCancelOrderComponent implements OnInit {

  cusId : number;
  ordId : number;
  status : String;
  result : String;

  constructor(private _customerService : CustomerService,private _router : Router, private _route : ActivatedRoute) { 
    this.ordId=parseInt(localStorage.getItem("cancelOrderId"));
    this.cusId=parseInt(localStorage.getItem("cancelCustId"));
  }
  cancel() {
    this._customerService.cancelOrder(this.ordId,this.cusId,this.status).subscribe(x => {
      this.result=x;
      alert(x);
    });
    setTimeout(() => {
      this._router.navigate(['../customerPendingHistory'], {relativeTo: this._route});
    }
    , 3000);
  }
  

  ngOnInit(): void {
  }

}
