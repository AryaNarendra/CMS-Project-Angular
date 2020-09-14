import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VendorService } from './vendor.service';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('VendorService', () => {
  let service: VendorService;

  const profileInfo = {
    venId:2,
    venName:"Sarbani",
    venPassword:"sarbani123",
    venEmail:"sarbani@gmail.com",
    venMobile:"9678234654",
    venAddress:"PADUR"};


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, HttpClientModule,HttpClientTestingModule, FormsModule], 
      providers: [VendorService]
  });
    service = TestBed.inject(VendorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should get profile data of Sarbani', () => {
    const vendorService = TestBed.inject(VendorService);
    const http = TestBed.inject(HttpTestingController);
    let profileResponse;
    vendorService.findByVendorName('Sarbani').subscribe((Response) => {
      profileResponse = Response;
    });
    
    http.expectOne('http://localhost:8080/CanteenProject/webapi/vendor/Sarbani').flush(profileInfo);
    expect(profileResponse).toEqual(profileInfo);
   
});
})
