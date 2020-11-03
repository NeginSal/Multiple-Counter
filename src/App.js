import React, {Component} from "react";
import Header from "./Header";
import AddCounter from "./AddCounter";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import Counter3 from "./Counter3";
import SnowStorm from 'react-snowstorm';
import './App.css';



class  App extends Component{
  render(){
    return(
      <div className="App">
      <Header />
      <AddCounter/>
      <Counter1 />
      <Counter2 />
      <Counter3 />
      <SnowStorm />
      </div>
    );
  }
}

export default App;
