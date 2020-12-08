import React, { Component } from "react"
import GroceryList from "./GroceryList"
import ShoppingCart from "./ShoppingCart";


class Container extends Component {
    constructor() {
        super();
        this.state = {
            groceryItems: [
                { id: 1, title: "Boter" },
                { id: 2, title: "Kaas" },
                { id: 3, title: "Eieren" },
                { id: 4, title: "Cornflakes" }
            ],
            shoppingListItems: [
                { id: 1, title: "Pannenkoek", amount: 4 },
                { id: 2, title: "Fristi", amount: 2 },
            ],
        };
        this.handleOnAddGroceryToCart = this.handleOnAddGroceryToCart.bind(this);
        this.handleOnEmptyCart = this.handleOnEmptyCart.bind(this);
        this.handleOnAddGrocery = this.handleOnAddGrocery.bind(this);
        this.addAmountToItem = this.addAmountToItem.bind(this);
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);

    };


    addAmountToItem = itemTitle => {
        const shoppingList = [...this.state.shoppingListItems];
        const newList = shoppingList.map(shoppingItem => {
          if (shoppingItem.title === itemTitle) {
            shoppingItem.amount++;
          }
          return shoppingItem;
        });
        this.setState({ shoppingListItems: newList });
      };

       handleClickGroceryItem = event => {
        const clickedItem = event.target.getAttribute("value");
        const currentShoppingList = this.state.shoppingListItems;

        const shoppingListItem = currentShoppingList.filter(
            
          item => item.title === clickedItem
        );
        console.log(shoppingListItem, "shoppinglistitem")
        shoppingListItem.length === 0
          ? this.handleOnAddGroceryToCart(clickedItem)
          : this.addAmountToItem(clickedItem);
      };

    handleOnAddGrocery(event) {
        event.preventDefault()

        this.setState(prevState => {
            let newGrocery = event.target.value
            let newID = prevState.groceryItems.length + 1
            let newList =
                prevState.groceryItems.concat({ id: newID, title: newGrocery });
            return {
                groceryItems: newList
            };
        });
    };
    
  


    handleOnAddGroceryToCart(event) {
       console.log(event)
        this.setState(prevState => {
            let groceryItem = event;
            let groceryID = prevState.shoppingListItems.length + 1;
            let newList =
                prevState.shoppingListItems.concat({ id: groceryID, title: groceryItem, amount: 1 });
            return {
                shoppingListItems: newList
            }
        })

    }

    handleOnEmptyCart() {
        this.setState(
            { shoppingListItems: [] }
        );
    };


    render() {


        return (
            <div className="container">
                <div>

                    <h1>Grocery List</h1>
                    <GroceryList
                        onGroceryClick={this.handleClickGroceryItem}
                        listItems={this.state.groceryItems}
                        onAddGrocery={this.handleOnAddGrocery}
                    />

                </div>
                <div>
                    <h1>Shopping Cart</h1>
                    <ShoppingCart
                        listItems={this.state.shoppingListItems}
                        key={this.state.shoppingListItems.id}
                        value={this.state.shoppingListItems.title}
                        onEmptyCart={this.handleOnEmptyCart}
                    />
                </div>
            </div>
        )
    }


}


export default Container