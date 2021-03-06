import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {ItemsService} from './items.service';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { HomeComponent } from './home/home.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { SavedListComponent } from './saved-list/saved-list.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { QuantityWidgetComponent } from './quantity-widget/quantity-widget.component';
import { MyBasketComponent } from './my-basket/my-basket.component';
import { SaveListIconComponent } from './save-list-icon/save-list-icon.component';

const routes :Routes = <Routes>[

    {path: 'Home', component: HomeComponent},
    {path: 'FreshFruits', component: ItemsListComponent},
    {path: 'FreshFruits/:type', component: ItemsListComponent},
    /*{path: 'Apples', component: ItemsListComponent,data: { value: 'Apples' }},
    {path: 'Banana', component: ItemsListComponent,data: { value: 'Banana' }},
    {path: 'Grapes', component: ItemsListComponent},*/
    {path: "MySavedList", component: SavedListComponent},
    {path: "MyBasket", component: MyBasketComponent},
    {path: '', component: HomeComponent,pathMatch: 'full'},
    { path: '**', component: HomeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    HomeComponent,
    ItemsListComponent,
    SavedListComponent,
    ShoppingItemComponent,
    QuantityWidgetComponent,
    MyBasketComponent,
    SaveListIconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes,{useHash : true})
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
