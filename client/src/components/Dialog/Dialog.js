import React, { Component } from 'react';
import { DialogWrapper } from './styles';

class Dialog extends Component {
  render() {
    const { history } = this.props;

    return (
      <DialogWrapper>
        <h1>dialog</h1>
        <p onClick={() => history.push('/')}>back</p>
      </DialogWrapper>
    );
  }
}

export default Dialog;
