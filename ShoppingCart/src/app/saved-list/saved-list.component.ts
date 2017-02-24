import { Component, OnInit,Input } from '@angular/core';
import {ItemsService} from '../items.service';
import {Item} from '../Item';
@Component({
  selector: 'app-saved-list',
  templateUrl: './saved-list.component.html',
  styleUrls: ['./saved-list.component.css']
})
export class SavedListComponent implements OnInit {
   @Input() private itemsList:Item[];
  constructor(private itemsService: ItemsService) { }

  ngOnInit() {

    this.itemsList = this.itemsService.getMySavedList();
  }

}
