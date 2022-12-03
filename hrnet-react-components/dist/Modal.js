"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
require("./Modal.css");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    focusableElements = _useState2[0],
    setFocusableElements = _useState2[1];
  var activeIndex = 0;
  var handleKeydown = function handleKeydown(event) {
    // get the listener corresponding to the pressed key
    var listener = keyListenersMap.get(event.keyCode);

    // call the listener if it exists
    return listener && listener(event);
  };
  (0, _react.useEffect)(function () {
    if (isOpen) {
      setFocusableElements(document.querySelectorAll('#modalContent button'));
    }
  }, [isOpen]);
  (0, _react.useEffect)(function () {
    document.addEventListener('keydown', handleKeydown);
    return function () {
      // Detach listener when component unmounts
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);

  // Manage tab and shift+tab press
  var handleTab = function handleTab(event) {
    var total = focusableElements.length;

    // If tab was pressed without shift
    if (!event.shiftKey) {
      var _focusableElements$ac;
      // If activeIndex + 1 larger than array length focus first element otherwise focus next element
      activeIndex + 1 === total ? activeIndex = 0 : activeIndex += 1;
      (_focusableElements$ac = focusableElements[activeIndex]) === null || _focusableElements$ac === void 0 ? void 0 : _focusableElements$ac.focus();

      // Don't do anything I wouldn't do
      return event.preventDefault();
    }

    // If tab was pressed with shift
    if (event.shiftKey) {
      var _focusableElements$ac2;
      // if activeIndex - 1 less than 0 focus last element otherwise focus previous element
      activeIndex - 1 < 0 ? activeIndex = total - 1 : activeIndex -= 1;
      (_focusableElements$ac2 = focusableElements[activeIndex]) === null || _focusableElements$ac2 === void 0 ? void 0 : _focusableElements$ac2.focus();

      // Don't do anything I wouldn't do
      return event.preventDefault();
    }
  };

  // Close modal on escape press
  var handleEscape = function handleEscape(evt) {
    if (evt.key === 'Escape') {
      modalClose();
    }
  };

  // map of keyboard listeners
  var keyListenersMap = new Map([[27, handleEscape], [9, handleTab]]);
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
      onClick: modalClose,
      tabIndex: "0"
    }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faXmark,
      size: "2x",
      color: "#146EBE"
    })), children, /*#__PURE__*/_react.default.createElement("button", {
      className: "closeBtn",
      onClick: modalClose,
      tabIndex: "1"
    }, "Close this window")));
  } else {
    return null;
  }
}