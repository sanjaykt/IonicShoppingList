import { ShoppingListService } from './../../services/shopping-list/shopping-list.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddShoppingItemPage} from "../add-shopping-item/add-shopping-item";
import { Observable } from '../../../node_modules/rxjs';
import { Item } from '../../models/items/item';
import {FirebaseListObservable} from "angularfire2/database-deprecated";



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  shoppingList$: FirebaseListObservable<Item[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private shopping: ShoppingListService) {

    this.shoppingList$ = this.shopping.getShoppingList()
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload,
          ...c.payload.val()
        }))
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
