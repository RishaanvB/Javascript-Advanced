import React from "react"


function ListItem(props) {
    // console.log(props.item, "logging props.item from ListItem.js")
    // console.log(props, "logging props from ListItem.js")
    // console.log(props.item.id, "logging props.item.id from ListItem.js")
    return (
        <li
            onClick={props.onGroceryClick}
            value={props.value}
            key={props.item.id}
        >
            {props.item.title}
        </li>

    );


};


export default ListItem