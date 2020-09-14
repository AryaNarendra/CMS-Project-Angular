import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { VendorFilterPipe } from '../vendor-filter.pipe';
import { VendorService } from '../vendor.service';

import { VendorOrderHistoryComponent } from './vendor-order-history.component';

describe('VendorOrderHistoryComponent', () => {
  let component: VendorOrderHistoryComponent;
  let fixture: ComponentFixture<VendorOrderHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorOrderHistoryComponent, VendorFilterPipe ],
      imports: [HttpModule,HttpClientModule, RouterModule.forRoot([])], 
      providers:[VendorService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
