import { Component ,Input , Output , EventEmitter} from '@angular/core';
import { Input, Output } from '../../../../node_modules/@angular/core/index';
import { ProductItemComponent } from '../product-item/product-item.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() products:any[] = [];
  @Output() liked = new EventEmitter<any>();
  @Output() removed = new EventEmitter<any>();
  @Output() favorite = new EventEmitter<any>();

  likedProduct(product:any){
    this.liked.emit(product);
    console.log("productList.likeProduct worked success");
  }
  removeProduct(product:any){
    this.removed.emit(product);
    console.log("productList.removedProduct worked success" );
  }
  favoriteProduct(product : any){
    this.favorite.emit(product);
    console.log("productList.favoriteProduct worked success");
  }
}
