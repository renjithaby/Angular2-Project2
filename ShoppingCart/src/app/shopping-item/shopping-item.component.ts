import { Component, OnInit, Input } from '@angular/core';
import { QuantityWidgetComponent } from '../quantity-widget/quantity-widget.component';
import {Item} from '../Item';
import {ItemsService} from '../items.service';
@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],

  directives:[QuantityWidgetComponent],
  providers : [ItemsService]
})
export class ShoppingItemComponent implements OnInit {

  constructor(private itemsService:ItemsService) { }

  ngOnInit() {
    console.log("this._item.................................");
     console.log(this._item);
  }
   @Input() private _item;


  addItem($event){
       console.log("add this item....");
       this._item.quantity = $event.quantity;
       this.itemsService.addToMyBasket(this._item);
       console.log(this._item);
   }

   deleteItem($event){
      console.log("delete this item....");
       this._item.quantity = $event.quantity;
       this.itemsService.removeFromMyBasket(this._item);
   }

   saveItem(){
       console.log(" save item to list");
       //this._shoppingService.addItemtoSavedList(this._item);
   }

}
