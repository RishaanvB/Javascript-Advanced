import React from "react"


function ListItem(props) {
    // console.log(props, "logging props from ListItem.js")
    // console.log(props.item.id, "logging props.id from ListItem.js")
    return (
        <li onClick={props.onGroceryClick} key={props.item.id} value={props.grocery} >{props.grocery}</li>

    );


};


export default ListItem