import React, { Component } from "react";
import ListItem from "./ListItem"

class List extends Component {
    constructor() {
        super();
        this.state = {

        };
    };

    render() {
        return (
            <ul>
                <ListItem title="Boter"/>
                <ListItem title="Kaas"/>
                <ListItem title="Eieren"/>
                <ListItem title="Cornflakes"/>
            </ul>
            
            
        )
    };


};




export default List