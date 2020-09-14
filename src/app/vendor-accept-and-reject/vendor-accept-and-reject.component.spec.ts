import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http, HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { VendorService } from '../vendor.service';

import { VendorAcceptAndRejectComponent } from './vendor-accept-and-reject.component';

describe('VendorAcceptAndRejectComponent', () => {
  let component: VendorAcceptAndRejectComponent;
  let fixture: ComponentFixture<VendorAcceptAndRejectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorAcceptAndRejectComponent ],
      imports:[HttpClientModule, HttpClientTestingModule, RouterModule.forRoot([]), HttpModule],
      providers: [VendorService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorAcceptAndRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
