import { Component, OnInit, Input } from '@angular/core';
import { QuantityWidgetComponent } from '../quantity-widget/quantity-widget.component';
@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],

  directives:[QuantityWidgetComponent]
})
export class ShoppingItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   @Input() private _item = {
                id:1,
                name:"Gala Apples",
                type:"apples",
                image:"Apples_1.jpg",
                priceperunit:250,
                price:260,
                quantity:0
            };


  addItem($event){
      // console.log("add this item....");
       this._item.quantity = $event.quantity;
       //this._shoppingService.addItemtoBasket(this._item);
   }

   deleteItem($event){
      // console.log("delete this item....");
       this._item.quantity = $event.quantity;
      // this._shoppingService.deleteItemFromBasket(this._item);
   }

   saveItem(){
       console.log(" save item to list");
       //this._shoppingService.addItemtoSavedList(this._item);
   }

}
