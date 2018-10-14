import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import RoshiBaseModal from './RoshiBaseModal';

class WrappedModalComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    return (
      <Snackbar
        open={this.state.isOpen}
        onClose={this.handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <RoshiBaseModal
          variant={this.props.variant}
          message={this.props.message}
          onClose={this.handleClose}
        />
      </Snackbar>
    );
  }
}

export default WrappedModalComponent;
