import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import ChatBot from './ChatBot';

function ChatBotModal({show,handleClose}) {

return (
<>


<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title>AI ChatBot For Query</Modal.Title>
</Modal.Header>
<Modal.Body><ChatBot/></Modal.Body>

</Modal>
</>
);
}

export default ChatBotModal;