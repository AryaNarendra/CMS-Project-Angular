import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

import { VendorInfoComponent } from './vendor-info.component';

describe('VendorInfoComponent', () => {
  let component: VendorInfoComponent;
  let fixture: ComponentFixture<VendorInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorInfoComponent ],
      imports:[HttpClientModule,RouterModule.forRoot([]),HttpModule,FormsModule],
      providers: [VendorService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create vendor info', () => {
    let vendor : Observable<Vendor>;
    let vend : Vendor;
    vend = {"venId":2,"venName":"Sarbani","venPassword":"sarbani123","venEmail":"sarbani@gmail.com","venMobile":"9678234654","venAddress":"PADUR"};


    expect(component).toBeTruthy();
  });
});
