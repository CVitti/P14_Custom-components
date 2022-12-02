// @ts-nocheck

// CSS import
import "../styles/Modal.css";

// FontAwesome Icons import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// Proptypes import
import PropTypes from 'prop-types';

Modal.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
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
    if (isOpen) {
        return (
            <div className='modalBg' id="modalBg" role="dialog" aria-modal="true">
                <section className='modalContent' id="modalContent">
                    <button className="closeIcon" onClick={modalClose} tabIndex="0">
                        <FontAwesomeIcon icon={faXmark} size="2x"/>
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