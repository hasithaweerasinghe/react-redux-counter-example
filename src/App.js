import React, { Component } from 'react';
import SavedNumbers from './components/SavedNumbers';
import CounterPanel from './components/CounterPanel';

class App extends Component {

  render() {
    return (
      <div className="container">
        <CounterPanel />
        <SavedNumbers />
      </div>
    );
  }
}

export default App;
