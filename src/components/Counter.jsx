import { Component } from "react";

export {Component} from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: 'john doe'
        }
    }
    handleIncrement = () => { // arrow function
if(this.state.count >= 10) {
    this.setState({ count:0 });
    return;
}
this.setState({ count: this.state.count + 1 });
    }
    handleNameChange(event) {
        this.setState({ name: event.target.value, count: this.state.count})
    }
    render() {
        return (
            <div>
                <h2>Counter</h2>
                <p>Count: {this.state.count}</p>
                <p>Name: {this.state.name}</p>
                <input type="text" value={this.state.name} onChange={(event) =>this.handleNameChange(event)}/>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    }
}