import { Injectable } from '@angular/core';
import {Item} from './Item';
@Injectable()
export class ItemsService {

private allItemsList :Item[];
private myBasketList : Item[] = [];
  constructor() { }

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

  addToMyBasket(item:Item){
    this.myBasketList.push(item);
    console.log(this.myBasketList.length);
     console.log(this.myBasketList);
  }

   removeFromMyBasket(item:Item){
      let index = this.myBasketList.indexOf(item);
      this.myBasketList.splice(index,1);
  }

}
