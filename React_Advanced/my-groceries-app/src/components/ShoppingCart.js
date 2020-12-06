import React from "react"
import List from "./List"

function ShoppingCart(props) {
    return (
        <div>

            <List items={props.shoppingCartItems} />
        </div>

    );


};




export default ShoppingCart