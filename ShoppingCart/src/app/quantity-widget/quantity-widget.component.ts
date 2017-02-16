import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity-widget',
  templateUrl: './quantity-widget.component.html',
  styleUrls: ['./quantity-widget.component.css']
})
export class QuantityWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   @Input()  _quantity =4;
   @Input()  _price = 0;
    @Output() add = new EventEmitter();
     @Output() delete = new EventEmitter();

    onAddButtonClick(){
       // console.log("add the item  to the basket");
        this._quantity+=1;
        this.add.emit({quantity:this._quantity});
    }

    onMinusButtonClick(){
        // console.log("remove the item  to the basket");
         if(this._quantity!=0 ){
            this._quantity-= 1;
            this.delete.emit({quantity:this._quantity});
         }
    }

}
