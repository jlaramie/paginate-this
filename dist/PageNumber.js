'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.PageNumber = PageNumber;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _decorators = require('./decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PageNumber(props) {
  var pageActions = props.pageActions,
      page = props.page,
      currentPage = props.currentPage,
      pageTag = props.pageTag;

  var navigate = function navigate() {
    return pageActions.goTo(page);
  };

  var Tag = pageTag;
  var pageNumber = _react2.default.createElement(
    'span',
    null,
    page
  );
  var tagProps = Tag !== PageNumber.defaultProps.pageTag ? props : undefined;
  var link = page === currentPage ? pageNumber : _react2.default.createElement(
    Tag,
    _extends({}, tagProps, { type: 'button', onClick: navigate }),
    pageNumber
  );

  return link;
}

PageNumber.propTypes = {
  pageActions: _propTypes2.default.shape({
    goTo: _propTypes2.default.func.isRequired
  }).isRequired,
  page: _propTypes2.default.number.isRequired,
  currentPage: _propTypes2.default.number.isRequired,
  pageTag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string])
};
PageNumber.defaultProps = {
  pageTag: 'button'
};

exports.default = (0, _decorators.paginate)(PageNumber);