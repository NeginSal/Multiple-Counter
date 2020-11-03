import React, {Component} from "react";
import './Counter2.css';
class Counter2 extends Component{
    constructor(props){
        super(props);
        this.state ={
            count: 0
        };
    }

    increment = () => {
       this.setState({
           count: this.state.count + 3
       });
    };
    render(){
        return(
          <div className="App2">
            <p class="p2">Step:3<hr/><b><h1>{this.state.count}</h1></b></p>
            <button class="btn2" onClick={this.increment}>Run</button>
          </div>
        );
      }

}
export default Counter2;