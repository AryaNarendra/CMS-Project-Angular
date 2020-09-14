import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Menu } from '../menu';
import { Vendor } from '../vendor';
import { Wallet } from '../wallet';
import { MenuService } from '../menu.service';
import { VendorService } from '../vendor.service';
import { WalletService } from '../wallet.service';
import { Observable } from 'rxjs';
import { Order } from '../order';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  customer : Customer;
  menuList : Observable<Menu[]>;
  vendorList : Observable<Vendor[]>;
  walletList : Observable<Wallet[]>;
  result : string;
  menuFound : Menu;
  price : number;



  constructor(private _menuService : MenuService, private _vendorService : VendorService, private _walletService : WalletService,private _customerService : CustomerService, private _router : Router, private _route : ActivatedRoute) {
    this.customer = localStorage.getItem("customer")?JSON.parse(localStorage.getItem("customer")):[];
    this.model.cusId = this.customer.cusId;
    this.menuList = _menuService.showMenu();
    this.vendorList = _vendorService.showVendor();
    this.walletList = _walletService.showByWalletCustomerId(this.customer.cusId);
    this.menu.foodName="Dosa";
   }

   showAmount() {
     let menId : number;
     menId = parseInt(this.menu.foodName);
     this._menuService.searchMenu(menId).subscribe(x => {
       this.menuFound = x;
       this.price = x.foodPrice;
     })
   }

   placeOrder() {
     this.model.foodId = parseInt(this.menu.foodName);
     this.model.venId = parseInt(this.vendor.venName);
     this.model.walType = this.wallet.walType;
     this._customerService.placeOrder(this.model).subscribe(
       x=> {
       this.result=x;
       alert(this.result);
      });
     setTimeout(() => {
      this._router.navigate(['../customerPendingHistory'], {relativeTo: this._route});
    }
    , 3000);
   }

   model = new Order();
   menu = new Menu();
   vendor = new Vendor();
   wallet = new Wallet();

  ngOnInit() {
  }

}
