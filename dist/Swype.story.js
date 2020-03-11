'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Swype = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Swype = require('./Swype');

var _Swype2 = _interopRequireDefault(_Swype);

var _cards = require('../cards/cards');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swype = exports.Swype = function Swype() {
    return _react2.default.createElement(_Swype2.default, { cards: _cards.cards });
};

exports.default = {
    title: 'Swype',
    component: Swype
};