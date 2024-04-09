import React from 'react';

import { Button, Modal } from 'react-bootstrap';

export function MessageDialog(props) {
  return (
    <Modal {...props} show={props.message} centered>
      <Modal.Body>{props.message}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
