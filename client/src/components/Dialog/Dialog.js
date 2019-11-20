import React, { Component } from 'react';

class Dialog extends Component {
  render(props) {
    console.log('props', props);
    return (
      <div>
        <h1>dialog</h1>
        <p onClick={() => props.history.push('/')}>back</p>
      </div>
    );
  }
}

export default Dialog;
