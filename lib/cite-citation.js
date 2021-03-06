'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _citeCitationCoins = require('./cite-citation-coins');

var _citeCitationCoins2 = _interopRequireDefault(_citeCitationCoins);

var _citeCitationChicago = require('./cite-citation-chicago');

var _citeCitationChicago2 = _interopRequireDefault(_citeCitationChicago);

var _citeCitationMla = require('./cite-citation-mla');

var _citeCitationMla2 = _interopRequireDefault(_citeCitationMla);

var _citeCitationWikipedia = require('./cite-citation-wikipedia');

var _citeCitationWikipedia2 = _interopRequireDefault(_citeCitationWikipedia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Citation = function (_React$Component) {
  _inherits(Citation, _React$Component);

  function Citation(props) {
    _classCallCheck(this, Citation);

    return _possibleConstructorReturn(this, (Citation.__proto__ || Object.getPrototypeOf(Citation)).call(this, props));
  }

  _createClass(Citation, [{
    key: 'render',
    value: function render() {
      var fields = this.props.fields;
      return _react2.default.createElement(
        'div',
        { className: 'citation' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_citeCitationCoins2.default, fields)
        ),
        _react2.default.createElement(
          'h3',
          null,
          'Chicago Style'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_citeCitationChicago2.default, fields)
        ),
        _react2.default.createElement(
          'h3',
          null,
          'MLA Style'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_citeCitationMla2.default, fields)
        ),
        _react2.default.createElement(
          'h3',
          null,
          'Wikipedia Style'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_citeCitationWikipedia2.default, fields)
        )
      );
    }
  }]);

  return Citation;
}(_react2.default.Component);

exports.default = Citation;


var propTypes = {
  fields: _react2.default.PropTypes.array,
  mapping: _react2.default.PropTypes.object
};

_citeCitationChicago2.default.propTypes = propTypes;