import { Component, OnInit,Input } from '@angular/core';
import {Item} from '../Item';
import {ItemsService} from '../items.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-my-basket',
  templateUrl: './my-basket.component.html',
  styleUrls: ['./my-basket.component.css']
})
export class MyBasketComponent implements OnInit {
   @Input() private itemsList:Item[];
  constructor(private itemsService: ItemsService) { }

  ngOnInit() {

    this.itemsList = this.itemsService.getMyBasketList();
  }


}
