import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            { name: "Max", age: 28 },
            { name: "Manu", age: 29 },
            { name: "Stephanie", age: 26 },
        ],
    };

    switchNameHandler = (newName) => {
        //console.log("was clicked");
        //DONT DO THIS this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: "Manu", age: 29 },
                { name: "Stephanie", age: 37 },
            ],
        });
    };
    // listen for onChange event from input in person.js file
    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: "Max", age: 28 },
                { name: event.target.value, age: 29 },
                { name: "Stephanie", age: 26 },
            ],
        });
    };

    render() {
        const styles = {
            backgroundColor: "white",
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer",
        };

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={styles}
                    onClick={() => this.switchNameHandler("Maximillian !!")}
                >
                    Switch Name
                </button>
                <Person
                    name={this.state.persons[0].name} // this refers to the class App
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, "Max!")} // make the name Manu clickable by referencing to the switch handler
                    changed={this.nameChangedHandler}
                >
                    My hobbies: Racing
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
            </div>
        );
    }
}

export default App;
