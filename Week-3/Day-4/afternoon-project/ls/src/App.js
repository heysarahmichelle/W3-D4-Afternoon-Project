import React, { Component }from 'react';
import Data from "./react-i-ii-afternoon/data"
import "./Employee.css"

export default class App extends Component {
  constructor(){
    super();
      this.state={
        employeeNames:['']

      };
  }
previousName=()=>{
  this.setState({
    employeeNames: this.state.employeeNames
  })
}
nextName=()=>{
  this.setState({
    employeeNames: this.state.employeeNames
  })
}


  render(){
    return(
      <div>

        <div className="home-word">
          <section className="home">Home</section>
        </div>

        <div className="black-box">

          <section className="white-box">
            <h5 className="employee-name"><span class="the-span">Employee Name</span></h5>
            <h5 className="from">From:
              <h5 className="job">Job Title:</h5>
              <h5 className="employer">Employer:</h5>
            </h5>
            <h5 className="fav-movies">Favorite Movies:</h5>
          </section>
        </div>
          <section className='blue-buttons-center'>
            <button className="previous-next">
    <h3 className="previous">{"<"}Previous</h3>
            </button>
            <button className="sort-button">
                <h3 className="sort-button-two">Edit</h3>
            </button>
            <button className="sort-button">
                <h3 className="sort-button-two">Delete</h3>
            </button>
            <button className="sort-button">
                <h3 className="sort-button-two">New</h3>
            </button>
            <button className="previous-next">
              <h3 className="next">Next{">"}</h3>
            </button>
          </section>

        {this.state.employeeNames}
        
      </div>
    )
  }
}
