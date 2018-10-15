import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// icons
import * as UIIcons from '@material-ui/icons/';

// components
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';

// styles and colors
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

const variantIcon = {
  success: UIIcons.CheckCircle,
  warning: UIIcons.Warning,
  error: UIIcons.Error,
  info: UIIcons.Info,
};

const styles = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

function ModalContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <UIIcons.Close className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

ModalContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

/**
 * [Custom Modal using Snackbar component from Material-ui](https://material-ui.com/api/snackbar//)
 *
 * > Already exporting 'success', 'warning', 'error', 'info'
 *
 * @visibleName RoshiBaseModal
 */

const WrappedModalComponent = withStyles(styles)(ModalContent);

class RoshiBaseModal extends Component {
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
        <WrappedModalComponent
          onClose={this.handleClose}
          message={this.props.message}
          variant={this.props.variant}
        />
      </Snackbar>
    );
  }
}

RoshiBaseModal.propTypes = {
  /** Message to be displayed **/
  message: PropTypes.node.isRequired,
  /** Type of error to be displayed **/
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

RoshiBaseModal.defaultProps = {
  message: 'Kameha',
  variant: 'success',
};

/** @component */

export default RoshiBaseModal;
