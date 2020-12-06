import React from "react";
import List from "./List";

function GroceryList(props) {





    return (
        <div >
            <List items={props.groceryListItems} onGroceryClick={props.onGroceryClick} />

        </div>
    )
};





export default GroceryList 