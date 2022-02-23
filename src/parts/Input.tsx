import React from "react";

import { render } from 'react-dom';

import './style.css';

class App extends React.Component {
    constructor(props:any) {
      super(props);
      this.state = { value: '' };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event: { target: { value: any; }; }) {
      this.setState({ value: event.target.value });
    }
  
    handleSubmit(event: { preventDefault: () => void; }) {
      // alert('A name was submitted: ' + this.state.value ); //error here
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            {this.state === '' ? '' : 1}
            <input
              type="text"
              // value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default App;