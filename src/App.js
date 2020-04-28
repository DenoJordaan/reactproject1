import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Rating from './Rating';
import Products from './Products';

class App extends Component {
  render() {
      const isValid = true;

      return (
        <div>
          <h1>
              My First React App!
              <Products/>
              <Rating rating="1"/>
              <Rating rating="2"/>
              <Rating rating="3"/>
              <Rating rating="4"/>
              <Rating rating="5"/>
              <Button varient="primary" disabled={!isValid}>Default</Button>
          </h1>
        </div>
    );
  }
}
export default App;