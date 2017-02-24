
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ShoppingItemComponent } from '../shopping-item/shopping-item.component';
import {Item} from '../Item';
import {ItemsService} from '../items.service';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  directives:[ShoppingItemComponent]
})
export class ItemsListComponent implements OnInit {
  private  allItemsList :Item[] ;
  private  itemsList :Item[] ;
  private myItem :Item;
  constructor(private route: ActivatedRoute,private router: Router, private itemsService: ItemsService) {

  }

  ngOnInit() {
     this.myItem = {
                id:1,
                name:"Gala Apples",
                type:"apples",
                image:"Apples_1.jpg",
                priceperunit:250,
                price:260,
                quantity:0
            };

this.allItemsList = this.itemsService.getAllItems();

console.log("---------------------------------------------------------------");
console.log(this.itemsList);
  this.route.params.subscribe(params => {
        this.itemsList = [];
        console.log(params['type']);
        let itemType = params['type'];
        if(itemType != "AllFruits") {
            for (let i = 0; i < this.allItemsList.length; i++) {
                if (this.allItemsList[i].type === itemType) {
                    this.itemsList.push(this.allItemsList[i]);
                }
            }
        }else{
            this.itemsList = this.allItemsList;
        }
      }
    );
  }

}
