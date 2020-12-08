import React from "react"


function ListItem(props) {
    // console.log(props, "logging props from ListItem.js")
    // console.log(props.amount, "logging amount from ListItem.js")
    // console.log(props.item.id, "logging props.item.id from ListItem.js")

    if (props.amount) {
        return (
            <li
                onClick={props.onGroceryClick}
                value={props.value}
                key={props.id}
            >
                {props.value}  {props.amount}
            </li>
        );

    } return (
        <li
            onClick={props.onGroceryClick}
            value={props.value}
            key={props.id}
        >
            {props.value}
        </li>
    )
};


export default ListItem