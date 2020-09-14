import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from './menu';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http : Http) { }

  showMenu() : Observable<Menu[]> {
    return this.http.get('/CanteenProject/webapi/menu')
      .map((res: Response) => 
        res.json()
    )
  }

  searchMenu(foodId : number) : Observable<Menu> {
    return this.http.get('/CanteenProject/webapi/menu/'+foodId)
      .map((res: Response) => 
        res.json()
    )
  }
}
