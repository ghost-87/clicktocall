import React, { Component } from 'react';
import './App.css';
import CallWidget from './widget/CallWidget';

class App extends Component {
  constructor(props)  {
    super(props);
    this.state = {
    }
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <CallWidget/>
      </header>
    </div>
  );
}
}
export default App;


