
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ShoppingItemComponent } from '../shopping-item/shopping-item.component';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  directives:[ShoppingItemComponent]
})
export class ItemsListComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) {

  }

  ngOnInit() {

console.log(this.route.params);
  this.route.params.subscribe(params => {
        console.log(params['id']);
      }
    );
  }

}
