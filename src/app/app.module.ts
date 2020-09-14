import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { CustomerOrderHistoryComponent } from './customer-order-history/customer-order-history.component';
import { CustomerPendingHistoryComponent } from './customer-pending-history/customer-pending-history.component';
import { WalletComponent } from './wallet/wallet.component';
import { CustomerCancelOrderComponent } from './customer-cancel-order/customer-cancel-order.component';
import { CustomerFilterPipe } from './customer-filter.pipe';
import { VendorFilterPipe } from './vendor-filter.pipe';
import { VendorComponent } from './vendor/vendor.component';
import { VendorAcceptAndRejectComponent } from './vendor-accept-and-reject/vendor-accept-and-reject.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorInfoComponent } from './vendor-info/vendor-info.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { VendorOrderHistoryComponent } from './vendor-order-history/vendor-order-history.component';
import { VendorPendingHistoryComponent } from './vendor-pending-history/vendor-pending-history.component';
import { CmsmainComponent } from './cmsmain/cmsmain.component';
import { LogOutComponent } from './log-out/log-out.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent,
    DashBoardComponent,
    CustomerInfoComponent,
    PlaceOrderComponent,
    CustomerOrderHistoryComponent,
    CustomerPendingHistoryComponent,
    WalletComponent,
    CustomerCancelOrderComponent,
    CustomerFilterPipe,
    VendorFilterPipe,
    VendorComponent,
    VendorAcceptAndRejectComponent,
    VendorDashboardComponent,
    VendorInfoComponent,
    VendorLoginComponent,
    VendorOrderHistoryComponent,
    VendorPendingHistoryComponent,
    CmsmainComponent,
    LogOutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
