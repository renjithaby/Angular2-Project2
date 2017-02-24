import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items.service';
@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {

  constructor(private itemsService:ItemsService) { }

    private _menuList;
    private _totalBasketItems:number;


  ngOnInit() {
     this.itemsService.getTotalBasketItems().subscribe(
          value => {
            this._totalBasketItems = value;
          }
      );

      this._menuList =[ {
          id:1,
          name:"FreshFruits",
          type:"parentNode",
          childs:[
              {
                  id:2,
                  name:"AllFruits",
                  type:"endNode"
              },
              {
                  id:3,
                  name:"Apples",
                  type:"endNode"
              },
              {
                  id:4,
                  name:"Bananas",
                  type:"endNode"
              },
              {
                  id:5,
                  name:"Grapes",
                  type:"endNode"
              }

          ]},
          {
              id: 6,
              name: "MySavedList",
              type: "endNode"
          }]
  }


  onMenuClick(event){
    console.log(event.target.id);
    console.log(event.target);
  }

  /*  menuClick(event) {
        var id = "";
        id = event.target.parentNode.id !== "" ? event.target.parentNode.id : event.target.parentNode.parentNode.id;
        switch (id) {
            case "fruits":
                this.showFruitsSubMenu = !this.showFruitsSubMenu;
                break;
            case "grocerries":
                this.showGrocerriesSubMenu = !this.showGrocerriesSubMenu;
                break;

        }
    }*/






}
