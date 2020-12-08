import React from "react"
import List from "./List"

function ShoppingCart(props) {
    // console.log(props, "props in shoppingcart" )
    return (
        <div className="shoppingcart">
            <button onClick={props.onEmptyCart}>Empty Cart!</button>
            <List listItems={props.listItems}
             />
        </div>

    );


};




export default ShoppingCart