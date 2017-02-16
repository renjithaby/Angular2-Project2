import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {

  constructor() { }

   private showFruitsSubMenu = false;
    private showGrocerriesSubMenu =false;
    private showMenu = false;

    private data :any ;
    private fruits :any ;
    private _menuList;
  ngOnInit() {

      this._menuList =[ {
          id:1,
          name:"FreshFruits",
          type:"parent",
          childs:[
              {
                  id:2,
                  name:"All Fruits",
                  type:"child"
              },
              {
                  id:3,
                  name:"Apples",
                  type:"child"
              },
              {
                  id:4,
                  name:"Banana",
                  type:"child"
              },
              {
                  id:5,
                  name:"Grapes",
                  type:"child"
              }

          ]

      }]
  }

    menuClick(event) {
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
    }

    getData(){

        this.data = [
        {
            item :"Home"
        },
        {
            item :"Grocerries",
            visible:false,
            subMenu :[
            {item :"Fruits"},
            {item :"vegitables"}
            ]
        }
    ]}


}
