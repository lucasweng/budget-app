import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

Modal.defaultStyles.overlay.backgroundColor = 'translucent blue';

const ConfirmRemovalModal = props => (
  <Modal
    className="modal"
    contentLabel="Remove Expense"
    isOpen={props.isModalOpen}
    onRequestClose={props.onToggleModal} // esc or click outside to close modal
    closeTimeoutMS={200}
  >
    <h2 className="modal__title">Removing: {props.expense.description}</h2>
    <p className="modal__body">
      All the information will be deleted from the database.<br />
      This action cannot be undone.
    </p>
    <div className="modal__buttons">
      <button className="button" onClick={props.onToggleModal}>Keep Expense</button>
      <button className="button button--danger" onClick={props.onRemove}>Delete Expense</button>
    </div>
  </Modal>
);

ConfirmRemovalModal.propTypes = {
  expense: PropTypes.shape().isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default ConfirmRemovalModal;
