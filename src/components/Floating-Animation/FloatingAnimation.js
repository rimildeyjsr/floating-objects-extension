import React from 'react';
import './FloatingAnimation.css';

export default class FloatingAnimation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>{this.props.buttonElement}</h1>
    )
  }
}
