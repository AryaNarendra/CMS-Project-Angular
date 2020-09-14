import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Wallet } from './wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http : Http) { }

  showByWalletCustomerId(custId : number) : Observable<Wallet[]> {
    return this.http.get('/CanteenProject/webapi/wallet/'+custId)
      .map((res: Response) => 
        res.json()
    )
  }

  showWalletType(custId : string, walType : string) : Observable<Wallet[]> {
    return this.http.get('/CanteenProject/webapi/wallet/'+custId+"/"+walType,null)
      .map((res: Response) =>
        res.json()
    )
  }

}
