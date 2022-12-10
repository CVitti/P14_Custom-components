// @ts-nocheck

// CSS import
import "./Modal.css";

// FontAwesome Icons import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// React import
import React from "react";

// MUI Button import
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Proptypes import
import PropTypes from 'prop-types';

Modal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    isOpen: PropTypes.bool.isRequired,
    modalClose: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired
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

    const btnTheme = createTheme({
        palette: {
          primary: {
            main: "#146EBE",
          },
        },
        typography: {
            fontFamily: 'Montserrat',
        },
    });

    if (isOpen) {
        return (
            <div className='modalBg' id="modalBg" role="dialog" aria-modal="true">
                <section className='modalContent' id="modalContent">
                    <button className="closeIcon" onClick={modalClose}>
                        <FontAwesomeIcon icon={faXmark} size="2x" color="#146EBE"/>
                    </button>
                    {children}
                    <ThemeProvider theme={btnTheme}>
                        <Button variant="contained" onClick={modalClose} sx={{width:"fit-content", alignSelf:"center"}}>
                            Close this window
                        </Button>
                    </ThemeProvider>            
                </section>
            </div>
        );
    }else{
        return null;
    }
}