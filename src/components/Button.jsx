import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div>
          <button 
            className={this.props.classButton}
            onClick={this.props.botaoFunction}
          >
            {this.props.text}</button>
        </div>
      </>
    );
  }
}

export default Button;
