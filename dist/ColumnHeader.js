'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.ColumnHeader = ColumnHeader;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _decorators = require('./decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ColumnHeader(props) {
  var pageActions = props.pageActions,
      field = props.field,
      text = props.text,
      sort = props.sort,
      sortReverse = props.sortReverse,
      _props$sortable = props.sortable,
      sortable = _props$sortable === undefined ? true : _props$sortable,
      sortTag = props.sortTag;

  if (!sortable) {
    return _react2.default.createElement(
      'span',
      null,
      text
    );
  }

  var Tag = sortTag;
  var tagProps = Tag !== ColumnHeader.defaultProps.sortTag ? _extends({}, props, {
    sort: field,
    sortOrder: !sortReverse ? 'desc' : 'asc'
  }) : undefined;

  var sortByField = function sortByField() {
    return pageActions.sort(field, !sortReverse);
  };

  var arrow = sort === field && (sortReverse ? 'sort-desc' : 'sort-asc');

  var icon = arrow || 'sort';

  return _react2.default.createElement(
    Tag,
    _extends({}, tagProps, { onClick: sortByField }),
    text,
    _react2.default.createElement('i', { className: 'fa fa-' + icon })
  );
}

ColumnHeader.propTypes = {
  sort: _propTypes2.default.string,
  sortReverse: _propTypes2.default.bool,
  pageActions: _propTypes2.default.object,
  field: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string.isRequired,
  sortable: _propTypes2.default.bool,
  optionalSortTag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string])
};

ColumnHeader.defaultProps = {
  sortTag: 'button'
};

exports.default = (0, _decorators.sort)(ColumnHeader);