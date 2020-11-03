import React, {Component} from "react";
import './Counter.css';
class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
    };

    OnIncrement () {
        this.setState({
            counter : this.state.counter + 1
        })
    }
    render(){
        return (
            <div className="counter-box">
                <h1>{this.state.counter}</h1>
                <button class="btn0"onClick={this.OnIncrement.bind(this)}>Run</button>
            </div>
        );

    }
}
export default Counter;