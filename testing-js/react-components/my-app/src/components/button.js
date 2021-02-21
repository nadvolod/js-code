import React from "react";

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    //Initializing the visibility to false
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);    
  }
  // toggleVisibility() sets the state of the visibility property
  toggleVisibility() {
    //passing an anonymous function to setState
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}