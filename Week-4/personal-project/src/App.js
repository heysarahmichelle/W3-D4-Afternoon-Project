import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={

    };
  }
  render(){
    return(
      <div className="App">
        
        <div className="App-header">
          <p className="taskbar">Home</p>
          <p className="taskbar">Secrets</p>
          <p className="taskbar">Contact</p>
        </div>
        <div className="body-container">
          <input className='your-secret-here-1' placeholder= "What's your secret?"/>
          <button className='your-secret-here-2'>Tell Me!</button>
        </div>
        <div className="secret-answers">
        </div>
      </div>
    )
  }
}

export default App;
