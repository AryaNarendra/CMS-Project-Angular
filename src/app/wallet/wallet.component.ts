import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Wallet } from '../wallet';
import { Customer } from '../customer';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  wallet : Observable<Wallet[]>
  wallet1 : Observable<Wallet[]>
  customer : Customer;
  wallId : number;
  searchString;
  show() {
    this.wallet1=this.walletService.showByWalletCustomerId(this.wallId);
  }

  constructor(private walletService : WalletService) { 
    this.customer = localStorage.getItem('customer')? JSON.parse(localStorage.getItem('customer')):[];
    this.wallet1=this.walletService.showByWalletCustomerId(this.customer.cusId);
  //  this.orders=this.customerService.orderHistory(this.customer.cusId);
  //   this.wallet=walletService.showWallet();
  //   this.wallet1=walletService.showByWalletCustomerId(this.wallId);
  }


  ngOnInit(): void {
  }

}
