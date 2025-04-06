"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var Otp = exports["default"] = /*#__PURE__*/function (_Component) {
  function Otp(props) {
    var _this;
    _classCallCheck(this, Otp);
    _this = _callSuper(this, Otp, [props]);
    _this.state = {
      showfield: false,
      minutes: _this.props.minutes ? _this.props.minutes : 0,
      seconds: _this.props.seconds ? _this.props.seconds : 30
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }
  _inherits(Otp, _Component);
  return _createClass(Otp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      clearInterval(this.myInterval);
      this.otptimer();
    }
  }, {
    key: "otptimer",
    value: function otptimer() {
      var _this2 = this;
      clearInterval(this.myInterval);
      this.myInterval = setInterval(function () {
        var _this2$state = _this2.state,
          seconds = _this2$state.seconds,
          minutes = _this2$state.minutes;
        if (seconds > 0) {
          _this2.setState(function (_ref) {
            var seconds = _ref.seconds;
            return {
              seconds: seconds - 1
            };
          });
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(_this2.myInterval);
          } else {
            _this2.setState(function (_ref2) {
              var minutes = _ref2.minutes;
              return {
                minutes: minutes - 1,
                seconds: 59
              };
            });
          }
        }
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.myInterval);
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      this.setState({
        minutes: this.props.minutes ? this.props.minutes : 0,
        seconds: this.props.seconds ? this.props.seconds : 30
      });
      this.props.resend();
      this.otptimer();
      event.preventDefault();
    }
    //   wrapperFunction(e){
    //     this.props.resend;
    //     this.handleClick.bind(this);
    // }
  }, {
    key: "render",
    value: function render() {
      var textStyle = {
        fontSize: "16px",
        fontFamily: "Roboto",
        lineHeight: "22px",
        color: this.props.textColor ? this.props.textColor : "#000000"
      };
      var buttonStyling = {
        border: "none",
        cursor: "pointer",
        background: this.props.background ? this.props.background : "#0033cc",
        color: this.props.buttonColor ? this.props.buttonColor : "#fff",
        fontSize: "16px",
        lineHeight: "22px"
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: textStyle
      }, this.state.minutes === 0 && this.state.seconds === 0 ? /*#__PURE__*/_react["default"].createElement("button", {
        style: _objectSpread(_objectSpread({}, buttonStyling), this.props.buttonStyle),
        onClick: this.handleClick,
        className: this.props.buttonClassName
      }, this.props.ButtonText ? /*#__PURE__*/_react["default"].createElement("span", null, this.props.ButtonText, " ") : /*#__PURE__*/_react["default"].createElement("span", null, "Resend")) : /*#__PURE__*/_react["default"].createElement("span", {
        className: this.props.timerSpanClass,
        style: this.props.timerSpanStyle
      }, this.props.text ? /*#__PURE__*/_react["default"].createElement("span", null, this.props.text, " ") : /*#__PURE__*/_react["default"].createElement("span", null, "Time left: "), this.state.minutes < 10 ? "0".concat(this.state.minutes) : this.state.minutes, ":", this.state.seconds < 10 ? "0".concat(this.state.seconds) : this.state.seconds));
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return {
        options: _propTypes["default"].object
      };
    }
  }]);
}(_react.Component);