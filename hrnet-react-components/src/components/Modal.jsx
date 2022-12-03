// @ts-nocheck

// CSS import
import "./Modal.css";

// FontAwesome Icons import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// React import
import React from "react";

// Proptypes import
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";

Modal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    isOpen: PropTypes.bool.isRequired,
    modalClose: PropTypes.func.isRequired
}

/**
 * 
 * @param {object} props used to build modal content
 * @param {array} props.children array containing content for the modal, as JSX elements
 * @param {boolean} props.isOpen manages if the modal should be rendered or not
 * @param {function} props.modalClose function used to close the modal
 * @returns JSX code of the modal if it has to be rendered, or null.
 */
export default function Modal({children, isOpen, modalClose}){

    const [focusableElements, setFocusableElements] = useState({});
    let activeIndex = 0;

    const handleKeydown = event => {
        // get the listener corresponding to the pressed key
        const listener = keyListenersMap.get(event.keyCode)
    
        // call the listener if it exists
        return listener && listener(event)
    }

    useEffect(() =>{
        if(isOpen){
            setFocusableElements(document.querySelectorAll('#modalContent button'));
        }
    }, [isOpen])    
  
    useEffect(() =>{
        document.addEventListener('keydown', handleKeydown)

        return () => {
            // Detach listener when component unmounts
            document.removeEventListener('keydown', handleKeydown)
        }
    }, [handleKeydown]) 

    // Manage tab and shift+tab press
    const handleTab = event => {
        let total = focusableElements.length;
      
        // If tab was pressed without shift
        if (!event.shiftKey) {  
          // If activeIndex + 1 larger than array length focus first element otherwise focus next element
          activeIndex + 1 === total ? activeIndex = 0 : activeIndex += 1;
      
          focusableElements[activeIndex]?.focus();
      
          // Don't do anything I wouldn't do
          return event.preventDefault();
        }
      
        // If tab was pressed with shift
        if (event.shiftKey) {
          // if activeIndex - 1 less than 0 focus last element otherwise focus previous element
          activeIndex - 1 < 0 ? activeIndex = total - 1 : activeIndex -= 1;
      
          focusableElements[activeIndex]?.focus();
      
          // Don't do anything I wouldn't do
          return event.preventDefault();
        }
    }

    // Close modal on escape press
    const handleEscape = evt => {
        if (evt.key === 'Escape'){
            modalClose();
        }
    };

    // map of keyboard listeners
    const keyListenersMap = new Map([
        [27, handleEscape],
        [9, handleTab],
    ]);

    if (isOpen) {
        return (
            <div className='modalBg' id="modalBg" role="dialog" aria-modal="true">
                <section className='modalContent' id="modalContent">
                    <button className="closeIcon" onClick={modalClose} tabIndex="0">
                        <FontAwesomeIcon icon={faXmark} size="2x" color="#146EBE"/>
                    </button>
                    {children}
                    <button className="closeBtn" onClick={modalClose} tabIndex="1">
                        Close this window
                    </button>             
                </section>
            </div>
        );
    }else{
        return null;
    }
}