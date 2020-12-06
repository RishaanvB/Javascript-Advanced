import React from "react";
import ListItem from "./ListItem";

function List(props) {
    console.log(props, "loggin props in List.js")
    console.log(props.items, "loggin props.items in List.js")

    // props.items.map(item=> console.log(item.title, "loggin--> props.items.map(item=>  item.title) in List.js"))
    const groceryItem = props.items.map(item => <ListItem item={item} grocery={item.title} /* key={item.id} */ onGroceryClick={props.onGroceryClick} />)

    return (
        <ul>
            {groceryItem}
        </ul>


    );
};






export default List