import { Injectable,EventEmitter } from '@angular/core';
import {Item} from './Item';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';
@Injectable()
export class ItemsService {

private allItemsList :Item[];
private myBasketList : Item[] = [];
private totalItems:Observable<number>;
private totalItemsObserver :Observer<any>;
private totalBasketItems:number;
private update = new EventEmitter();
  constructor() {
    this.totalBasketItems = 0;
  }

  totalItems = new Observable(observer => this.totalItemsObserver = observer).share();

  allItemsList = [
            {
                id:1,
                name:"Gala Apples",
                type:"Apples",
                image:"Apples_1.jpg",
                priceperunit:250,
                price:260,
                quantity:0
            },
            {
                id:2,
                name:"Granny Apples",
                type:"Apples",
                image:"Apples_2.jpg",
                priceperunit:200,
                price:200,
                quantity:0
            },
             {
                id:3,
                name:"Rose Apples",
                type:"Apples",
                image:"Apples_3.jpg",
                priceperunit:300,
                price:300,
                quantity:0
            },
             {
                id:4,
                name:"Red Grapes",
                type:"Grapes",
                image:"Grapes_1.jpg",
                priceperunit:300,
                price:300,
                quantity:0
            },
             {
                id:5,
                name:"Red Grapes",
                type:"Grapes",
                image:"Grapes_2.jpg",
                priceperunit:300,
                price:300,
                quantity:0
            },
              {
                id:6,
                name:"Value Banana",
                type:"Bananas",
                image:"Banana_1.jpg",
                priceperunit:100,
                price:100,
                quantity:0
            },
            {
                id:7,
                name:"Fair Trade Banana",
                type:"Bananas",
                image:"Banana_2.jpg",
                priceperunit:120,
                price:120,
                quantity:0
            },


        ];

  getAllItems(): Item[]{
    return this.allItemsList;
  }

  getMyBasketList(): Item[]{
    return this.myBasketList;
  }

  getTotalBasketItems():Observable{
    return this.totalItems;
  }

  addToMyBasket(item:Item){
      this.totalBasketItems += 1;
      this.totalItemsObserver.next(this.totalBasketItems);
      let itemInList = false;
      for (let i=0;i<this.myBasketList.length;i++){
        if(item.id === this.myBasketList[i].id){
          itemInList = true;
        }
      }

      if(!itemInList)
      this.myBasketList.push(item);
  }



   removeFromMyBasket(item:Item){
      this.totalBasketItems -= 1;
      this.totalItemsObserver.next(this.totalBasketItems);
      for (let i=0;i<this.myBasketList.length;i++){
        if(item.id === this.myBasketList[i].id){
          if(this.myBasketList[i].quantity < 1) {
            this.myBasketList.splice(i, 1);
            break;
          }

        }
      }
  }

}
