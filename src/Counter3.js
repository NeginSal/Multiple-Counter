import React, {Component} from "react";
import './Counter3.css';
class Counter3 extends Component{
    constructor(props){
        super(props);
        this.state ={
            count: 0
        };
    }

    increment = () => {
       this.setState({
           count: this.state.count -2.6
       });
    };

    render(){
        return(
          <div className="App3">
            <p class="p3">Step:-2<hr/><b><h1>{this.state.count}</h1></b></p>
            <button class="btn3" onClick={this.increment}>Run</button>
          </div>
        );
      }

}
export default Counter3;