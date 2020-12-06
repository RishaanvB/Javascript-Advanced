import React from "react";
import ListItem from "./ListItem";

function List(props) {
    // console.log(props, "loggin props in List.js")
    // console.log(props.items, "loggin props.items in List.js")
    // console.log(props.items.id, "loggin props.items in List.js")

    // props.items.map(item=> console.log(item.title, "loggin--> props.items.map(item=>  item.title) in List.js"))
    const groceryItem = props.items.map
        (item => <ListItem
            onGroceryClick={props.onGroceryClick}
            item={item}
            value={item.title}
            key={item.id}
        />);
    return (
        <ul>
            {groceryItem}
        </ul>


    );
};






export default List