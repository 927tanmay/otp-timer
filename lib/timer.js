"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Otp = /*#__PURE__*/function (_Component) {
  _inherits(Otp, _Component);

  var _super = _createSuper(Otp);

  _createClass(Otp, null, [{
    key: "propTypes",
    get: function get() {
      return {
        options: _propTypes.default.object
      };
    }
  }]);

  function Otp(props) {
    var _this;

    _classCallCheck(this, Otp);

    _this = _super.call(this, props);
    _this.state = {
      showfield: false,
      minutes: _this.props.minutes ? _this.props.minutes : 0,
      seconds: _this.props.seconds ? _this.props.seconds : 30
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Otp, [{
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
    } //   wrapperFunction(e){
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
        background: this.props.background ? this.props.background : "#0033cc",
        color: this.props.buttonColor ? this.props.buttonColor : "#fff",
        fontSize: "16px",
        lineHeight: "22px"
      };
      return /*#__PURE__*/_react.default.createElement("div", {
        style: textStyle
      }, this.state.minutes === 0 && this.state.seconds === 0 ? /*#__PURE__*/_react.default.createElement("button", {
        style: buttonStyling,
        onClick: this.handleClick
      }, this.props.ButtonText ? /*#__PURE__*/_react.default.createElement("span", null, this.props.ButtonText, " ") : /*#__PURE__*/_react.default.createElement("span", null, "Resend")) : /*#__PURE__*/_react.default.createElement("span", null, this.props.text ? /*#__PURE__*/_react.default.createElement("span", null, this.props.text, " ") : /*#__PURE__*/_react.default.createElement("span", null, "Time left: "), this.state.minutes < 10 ? "0".concat(this.state.minutes) : this.state.minutes, ":", this.state.seconds < 10 ? "0".concat(this.state.seconds) : this.state.seconds));
    }
  }]);

  return Otp;
}(_react.Component);

exports.default = Otp;