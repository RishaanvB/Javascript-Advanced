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
                { id: 1, title: "Pannenkoek" },
                { id: 2, title: "Fristi" },
            ],
        };
        this.handleOnClickGrocery = this.handleOnClickGrocery.bind(this);
        this.handleOnEmptyCart = this.handleOnEmptyCart.bind(this);
        this.handleOnAddGrocery = this.handleOnAddGrocery.bind(this);


    };

    handleOnAddGrocery(event) {

        // console.log("adding grocery from Container", event.target.value);
        // console.log("adding grocery from Container",typeof event.target.value);
        // console.log("adding grocery from Container", event.target.value.length);

        // event.target.value.length < 1 ? console.log("is less than 0"))

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


    handleOnClickGrocery(event) {
        this.setState(prevState => {
            let groceryItem = event.target.getAttribute("value");
            let groceryID = prevState.shoppingListItems.length + 1;
            let newList =
                prevState.shoppingListItems.concat({ id: groceryID, title: groceryItem });
            return {
                shoppingListItems: newList
            };
        });
    };

    handleOnEmptyCart() {
        this.setState(
            { shoppingListItems: [] }
        );
    };


    render() {
        // const groceryItem = this.state.groceryItems.map(item => <GroceryList item={item} />)
        return (
            <div className="container">
                <div>
                    <h1>Grocery List</h1>
                    <GroceryList
                        onGroceryClick={this.handleOnClickGrocery}
                        groceryListItems={this.state.groceryItems}
                        onAddGrocery={this.handleOnAddGrocery}
                    // key={this.state.groceryItems.id}
                    // id={this.state.groceryItems.id}
                    // value={this.state.groceryItems.title}


                    // value={this.state.groceryItems.title}
                    />

                </div>
                <div>

                    <h1>Shopping Cart</h1>

                    <ShoppingCart
                        shoppingCartItems={this.state.shoppingListItems}
                        key={this.state.shoppingListItems.id}
                        value={this.state.shoppingListItems.title}
                        onEmptyCart={this.handleOnEmptyCart}
                    />

                </div>
            </div>
        )
    }


};


export default Container