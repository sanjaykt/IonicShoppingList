import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {Item} from "../../models/items/item";

@Injectable()
export class ShoppingListService {

  private shoppingListRef = this.db.list<Item>('shopping-list2');

  constructor(private db: AngularFireDatabase) {

  }

  getShoppingList() {
    return this.shoppingListRef;
  }

  addItem(item: Item) {
    return this.shoppingListRef.push(item)
  }
}
