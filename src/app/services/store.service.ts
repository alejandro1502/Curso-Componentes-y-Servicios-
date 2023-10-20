import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

import {Product} from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();


  addProduct(product:Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart)
  }

  getShoppingCart(){
    return this.myShoppingCart
  }

  getTotal(){
    return this.myShoppingCart.reduce((sum,item) => sum + item.price, 0)
  }

}


// clase 13 explican bien esta parte de los servicios, que es la inyeccion de dependencia
