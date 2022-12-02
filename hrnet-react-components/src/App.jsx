// @ts-nocheck
import { useState } from 'react';
import './styles/App.css';
import Modal from './components/Modal';

function App() {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
      <Modal
        isOpen = {modalIsOpen}
        modalClose = {closeModal}
      >
      </Modal>
  );
}

export default App;
