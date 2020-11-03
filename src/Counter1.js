import React, {Component} from "react";
import './Counter1.css';
class Counter1 extends Component{
    constructor(props){
        super(props);
        this.state ={
            count: 0
        };
    }

    increment = () => {
       this.setState({
           count: this.state.count + 1
       });
    };
    
    render(){
        return(
          <div className="App1">
            <p class="p1">Step:1<hr/><b><h1>{this.state.count}</h1></b></p>
            <button class="btn1" onClick={this.increment}>Run</button>
          </div>
        );
      }

}
export default Counter1;