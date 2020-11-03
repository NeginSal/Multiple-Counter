import React, {Component} from "react";
import Counter from './Counter';
import './AddCounter.css';


class AddCounter extends Component{
   
 constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            counterAmount: 0
        };
    }

    CreateCounter(){
        this.setState({
            isClicked: true,
            counterAmount: this.state.counterAmount + 1
        });
    }
    render(){
        const CounterArr = [];
       
        for (var i = 0; i < this.state.counterAmount; i += 1) {
            CounterArr.push(<Counter key={i}/>);
        };

        return(
            <div className="addcounter">
               
                <center>
                <input className="txt" type="text" value="" />
                    <button class="btn4"onClick={this.CreateCounter.bind(this)} > Add Counter </button>
                </center>
                <center>
                    {CounterArr}
                </center>
                
            </div>
        );
    }
}

  

export default AddCounter;