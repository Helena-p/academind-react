import React from "react";

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>
                I am {props.name} and I am {props.age} years old!
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
        // to access anything between the JSX tags in the APP.js file, use the props.children attribute. Children is a reserved word
    );
};

export default person;
