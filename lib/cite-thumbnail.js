'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _citeDownloadSource = require('./cite-download-source');

var _citeDownloadSource2 = _interopRequireDefault(_citeDownloadSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CiteThumbnail = function (_React$Component) {
  _inherits(CiteThumbnail, _React$Component);

  function CiteThumbnail(props) {
    _classCallCheck(this, CiteThumbnail);

    return _possibleConstructorReturn(this, (CiteThumbnail.__proto__ || Object.getPrototypeOf(CiteThumbnail)).call(this, props));
  }

  _createClass(CiteThumbnail, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          thumbnail = _props.thumbnail,
          sources = _props.sources;

      return _react2.default.createElement(
        'div',
        { className: 'col-md-2 download-source' },
        _react2.default.createElement('img', { className: 'thumbnail', src: thumbnail }),
        sources.map(function (source, i) {
          return _react2.default.createElement(_citeDownloadSource2.default, _extends({ key: i }, source));
        })
      );
    }
  }]);

  return CiteThumbnail;
}(_react2.default.Component);

var propTypes = {
  thumbnail: _react2.default.PropTypes.string.isRequired,
  sources: _react2.default.PropTypes.array.isRequired
};

CiteThumbnail.propTypes = propTypes;

exports.default = CiteThumbnail;