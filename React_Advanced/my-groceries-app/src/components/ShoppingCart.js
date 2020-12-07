import React from "react"
import List from "./List"

function ShoppingCart(props) {
    // console.log(props.onEmptyCart)
    return (
        <div className="shoppingcart">
            <button onClick={props.onEmptyCart}>Empty Cart!</button>
            <List items={props.shoppingCartItems} />
        </div>

    );


};




export default ShoppingCart