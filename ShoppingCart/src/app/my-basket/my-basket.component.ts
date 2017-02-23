import { Component, OnInit,Input,OnChanges } from '@angular/core';
import {Item} from '../Item';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-my-basket',
  templateUrl: './my-basket.component.html',
  styleUrls: ['./my-basket.component.css'],
  providers : [ItemsService]
})
export class MyBasketComponent implements OnInit {
   @Input() private itemsList:Item[];

  constructor(private itemsService:ItemsService) { }

  ngOnInit() {

  this.itemsList = this.itemsService.getMyBasketList();
  }

  ngOnChanges(){

  this.itemsList = this.itemsService.getMyBasketList();
  }

}
