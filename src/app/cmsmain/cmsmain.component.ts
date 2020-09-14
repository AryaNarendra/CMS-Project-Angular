import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cmsmain',
  templateUrl: './cmsmain.component.html',
  styleUrls: ['./cmsmain.component.css']
})
export class CmsmainComponent implements OnInit {

  constructor(private router : Router) {
    this.router.navigate(["customer-login"]);
   }

  ngOnInit(): void {

    this.router.navigate(["customer-login"]);
  }

}
