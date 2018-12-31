import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

class Modal extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    userCanClose: PropTypes.bool,
    solidBackdrop: PropTypes.bool
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    };
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    let classNames = 'modal';
    if (this.state.isOpen) {
      classNames += ' open';
    }

    let backdropClassNames = 'modal-backdrop';
    if (this.props.solidBackdrop) {
      backdropClassNames += ' solid';
    }

    return (
      <div className={classNames}>
        <div className="modal-dialog">
          {this.props.userCanClose ? <button
            className="modal-dialog-close"
            type="button"
            onClick={() => this.closeModal()}
          /> : null}
          {this.props.render()}
        </div>
        {this.props.userCanClose ? <button
          className={backdropClassNames}
          type="button"
          onClick={this.props.userCanClose ? (() => this.closeModal()) : null}
        /> : <div className={backdropClassNames} />}
      </div>
    );
  }
}

export default Modal;
