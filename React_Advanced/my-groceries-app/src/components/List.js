import React from "react";
import ListItem from "./ListItem";

function List(props) {
    // console.log(props.listItems , "loggin props in List.js")
    // console.log(props.items, "loggin props.items in List.js")
    // console.log(props.items.id, "loggin props.items in List.js")

    // props.items.map(item=> console.log(item.title, "loggin--> props.items.map(item=>  item.title) in List.js"))
    const groceryItem = props.listItems.map
        (item => <ListItem
            onGroceryClick={props.onGroceryClick}
            // ListItem={item}
            value={item.title}
            key={item.id}
            amount={item.amount}
        />);
    return (
        <ul>
            {groceryItem} 
        </ul>


    );
};






export default List