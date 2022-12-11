"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
require("./Modal.css");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// @ts-nocheck

// CSS import

// FontAwesome Icons import

// React import

// Proptypes import

Modal.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired,
  isOpen: _propTypes.default.bool.isRequired,
  modalClose: _propTypes.default.func.isRequired
};

/**
 * 
 * @param {object} props used to build modal content
 * @param {array} props.children array containing content for the modal, as JSX elements
 * @param {boolean} props.isOpen manages if the modal should be rendered or not
 * @param {function} props.modalClose function used to close the modal
 * @returns JSX code of the modal if it has to be rendered, or null.
 */
function Modal(_ref) {
  var children = _ref.children,
    isOpen = _ref.isOpen,
    modalClose = _ref.modalClose;
  if (isOpen) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "modalBg",
      id: "modalBg",
      role: "dialog",
      "aria-modal": "true"
    }, /*#__PURE__*/_react.default.createElement("section", {
      className: "modalContent",
      id: "modalContent"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "closeIcon",
      onClick: modalClose
    }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faXmark,
      size: "2x",
      color: "#146EBE"
    })), children, /*#__PURE__*/_react.default.createElement("button", {
      className: "closeBtn",
      onClick: modalClose
    }, "Close this window")));
  } else {
    return null;
  }
}