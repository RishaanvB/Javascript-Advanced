import React from "react";
import List from "./List";

function GroceryList(props) {


// console.log("loggin grocerylistitems-->",props.groceryListItems)
// console.log("loggin key-->",props.groceryListItems.id)


    return (
        <div >
            <List
                onGroceryClick={props.onGroceryClick}
                items={props.groceryListItems}
            />

        </div>
    )
};





export default GroceryList 