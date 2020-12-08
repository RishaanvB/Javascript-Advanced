import React from "react";
import List from "./List";
import InputField from "./InputField"

function GroceryList(props) {

    // console.log("loggin addgrocery-->",props)

    // console.log("loggin grocerylistitems-->",props)
    // console.log("loggin key-->",props.groceryListItems.id)


    return (
        <div className="grocerylist" >
            <InputField
            onAddGrocery={props.onAddGrocery}

            />
            <List
                onGroceryClick={props.onGroceryClick}
                listItems={props.listItems}
            />

        </div>
    )
};





export default GroceryList 