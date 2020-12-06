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
                { id: 1, title: "Melk" },
                { id: 2, title: "Vlaflip" },

            ],
        };
        this.handleOnClickGrocery = this.handleOnClickGrocery.bind(this);
    };

    handleOnClickGrocery(event) {
        const groceryItem = event.target.getAttribute("value");
        this.setState(prevState => {
            // console.log("loggin prevState", prevState)
            // console.log("loggin prevState.shoppingListItems", prevState.shoppingListItems)
            const newList =
                prevState.shoppingListItems.concat({ id: 1, title: groceryItem });
            return {
                shoppingListItems: newList
            };

        });
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
                        key={this.state.groceryItems.id}
                        value={this.state.groceryItems.title}
                    />

                </div>
                <div>

                    <h1>Shopping Cart</h1>
                    <ShoppingCart
                        shoppingCartItems={this.state.shoppingListItems}
                        key={this.state.shoppingListItems.id}
                        value={this.state.shoppingListItems.title}
                    />

                </div>
            </div>
        )
    }


};


export default Container