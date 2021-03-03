import React, {Component} from 'react'
import './App.css';
import ShoppingList from './ShoppingList.js'


class App extends Component {
  render(){
    return (
      <div className="App">
        <ShoppingList/>
      </div>
    );
  }
  
}

export default App;
