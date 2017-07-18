'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Prev = Prev;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _decorators = require('./decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Prev(props) {
  var pageActions = props.pageActions,
      hasPreviousPage = props.hasPreviousPage,
      currentPage = props.currentPage,
      pageTag = props.pageTag;

  var Tag = pageTag;
  var tagProps = Tag !== Prev.defaultProps.pageTag && hasPreviousPage ? _extends({}, props, {
    page: currentPage - 1
  }) : undefined;
  return _react2.default.createElement(
    Tag,
    _extends({}, tagProps, { type: 'button', disabled: !hasPreviousPage, onClick: hasPreviousPage && pageActions.prev }),
    _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
  );
}

Prev.propTypes = {
  pageActions: _propTypes2.default.shape({
    prev: _propTypes2.default.func.isRequired
  }).isRequired,
  hasPreviousPage: _propTypes2.default.bool,
  pageTag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string])
};

Prev.defaultProps = {
  pageTag: 'button'
};

exports.default = (0, _decorators.flip)(Prev);