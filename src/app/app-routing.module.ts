import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { CustomerOrderHistoryComponent } from './customer-order-history/customer-order-history.component';
import { CustomerPendingHistoryComponent } from './customer-pending-history/customer-pending-history.component';
import { WalletComponent } from './wallet/wallet.component';
import { CustomerCancelOrderComponent } from './customer-cancel-order/customer-cancel-order.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorInfoComponent } from './vendor-info/vendor-info.component';
import { VendorPendingHistoryComponent } from './vendor-pending-history/vendor-pending-history.component';
import { VendorAcceptAndRejectComponent } from './vendor-accept-and-reject/vendor-accept-and-reject.component';
import { VendorOrderHistoryComponent } from './vendor-order-history/vendor-order-history.component';
import { CmsmainComponent } from './cmsmain/cmsmain.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { LogOutComponent } from './log-out/log-out.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

const routes: Routes = [
  // {path: '',component : CustomerLoginComponent},
  {path: 'dashBoard', component : DashBoardComponent,
  children :
  [
    {path:'placeOrder', component:PlaceOrderComponent, outlet:'data'},
    {path:'customerPendingHistory', component:CustomerPendingHistoryComponent, outlet:'data'},
    {path:'customerOrderHistory', component:CustomerOrderHistoryComponent, outlet:'data'},
    {path:'wallet', component:WalletComponent, outlet:'data'},
    {path:'customerInfo', component:CustomerInfoComponent, outlet:'data'},
    {path:'customerCancelOrder', component:CustomerCancelOrderComponent, outlet:'data'},
  ]},
  {path:'vendor-dashboard', component:VendorDashboardComponent,
  children :
  [
    {path:'vendor', component:VendorInfoComponent, outlet:'data'},
    {path:'vendor-pending-history', component: VendorPendingHistoryComponent, outlet:'data'},
    {path:'vendor-accept-and-reject', component: VendorAcceptAndRejectComponent, outlet:'data'},
    {path:'vendor-order-history', component: VendorOrderHistoryComponent, outlet:'data'},
  ]
  },
  {path:'cmsmain', component:CmsmainComponent,
children :
[

  // {path : '/', redirectTo: 'customer-login', pathMatch: 'full' },
  {path : 'vendor-login', component : VendorLoginComponent,outlet:'login' },
  {path : 'logOut', component : LogOutComponent, outlet : 'data' },
  {path : 'customer-login', component : CustomerLoginComponent,outlet:'login' },
]
},
  {path : '', component : CmsmainComponent ,
  children :
  [
    {path : '', redirectTo: '/cmsmain', pathMatch: 'full'},
  ]},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
