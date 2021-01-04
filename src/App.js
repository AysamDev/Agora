import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react'
import Market from './Components/Market';
import { Component } from 'react';

class App extends Component {
  constructor()
  {
      super();
  }
  render()
  {
    return (
      <div>
            <Market />
      </div>
     
    );
  }
  }
  

export default observer(App);
