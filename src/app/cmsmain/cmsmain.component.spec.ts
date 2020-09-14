import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CmsmainComponent } from './cmsmain.component';

describe('CmsmainComponent', () => {
  let component: CmsmainComponent;
  let fixture: ComponentFixture<CmsmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsmainComponent ],
      imports: [
        RouterModule.forRoot([]),
        FormsModule,
        HttpClientTestingModule

        // other imports here
      ],
      providers: [RouterModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
