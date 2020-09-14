import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { VendorFilterPipe } from '../vendor-filter.pipe';
import { VendorService } from '../vendor.service';

import { VendorPendingHistoryComponent } from './vendor-pending-history.component';

describe('VendorPendingHistoryComponent', () => {
  let component: VendorPendingHistoryComponent;
  let fixture: ComponentFixture<VendorPendingHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorPendingHistoryComponent, VendorFilterPipe ],
      imports: [HttpModule,HttpClientModule, RouterModule.forRoot([]), FormsModule], 
      providers:[VendorService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPendingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
