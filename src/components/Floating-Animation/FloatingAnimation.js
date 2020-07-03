import React from 'react';
import ReactDOM from 'react-dom';
import './FloatingAnimation.css';

export default class FloatingAnimation extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.buttonElement}</h1>
      </div>
    )
  }
}

function injectAnimationComponent(key) {
  console.log('function ' + key);
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "floating-animation");
  document.body.appendChild(newDiv);
  ReactDOM.render(<FloatingAnimation buttonElement={key}/>, newDiv);
}
