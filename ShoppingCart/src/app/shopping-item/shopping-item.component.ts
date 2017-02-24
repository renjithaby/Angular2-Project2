import { Component, OnInit, Input } from '@angular/core';
import { QuantityWidgetComponent } from '../quantity-widget/quantity-widget.component';
import { SaveListIconComponent } from '../save-list-icon/save-list-icon.component';
import {Item} from '../Item';
import {ItemsService} from '../items.service';
@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],

  directives:[QuantityWidgetComponent,SaveListIconComponent]
})
export class ShoppingItemComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {

  }
   @Input() private _item;


  addItem($event){
       this._item.quantity = $event.quantity;
       this.itemsService.addToMyBasket(this._item);
       console.log(this._item);
   }

   deleteItem($event){
       this._item.quantity = $event.quantity;
       this.itemsService.removeFromMyBasket(this._item);
   }

   saveItem(){
       this.itemsService.addItemtoSavedList(this._item);
   }

}
