"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactSwipeableViews = require("react-swipeable-views");

var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

require("../App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwiperContent = function SwiperContent(props) {
    var header = props.header,
        index = props.index,
        body = props.body,
        onArrowClick = props.onArrowClick;

    return _react2.default.createElement(
        "div",
        { className: "swype" },
        _react2.default.createElement(
            "div",
            { className: "swiper_card" },
            _react2.default.createElement(
                "div",
                { className: "swiper_card__header" },
                header
            ),
            _react2.default.createElement(
                "div",
                { className: "swiper_card__body" },
                _react2.default.createElement("div", { className: "swiper_card__body--arrow",
                    onClick: function onClick() {
                        return onArrowClick(index - 1);
                    } }),
                _react2.default.createElement(
                    "div",
                    { className: "swiper_card__body--text" },
                    body
                ),
                _react2.default.createElement("div", { className: "swiper_card__body--arrow",
                    onClick: function onClick() {
                        return onArrowClick(index + 1);
                    } })
            )
        )
    );
};

var Swype = function Swype(props) {
    var cards = props.cards;

    var _useState = (0, _react.useState)({ currentSlide: 0 }),
        _useState2 = _slicedToArray(_useState, 2),
        state = _useState2[0],
        updateState = _useState2[1];

    var updateSlide = function updateSlide(index) {
        if (index >= 0 && index < cards.length) {
            updateState({ currentSlide: index });
        }
    };

    var onCarouselItemClick = function onCarouselItemClick(index) {
        updateState({ currentSlide: index });
    };

    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            _reactSwipeableViews2.default,
            {
                enableMouseEvents: true,
                onChangeIndex: updateSlide,
                index: state.currentSlide },
            cards.map(function (_ref, index) {
                var title = _ref.title,
                    content = _ref.content;

                return _react2.default.createElement(SwiperContent, {
                    header: title,
                    body: content,
                    key: index,
                    onArrowClick: updateSlide,
                    index: state.currentSlide
                });
            })
        ),
        _react2.default.createElement(
            "div",
            { className: "carousell_indicator" },
            cards.map(function (item, index) {
                return _react2.default.createElement("div", {
                    key: index,
                    onClick: function onClick() {
                        return onCarouselItemClick(index);
                    },
                    className: state.currentSlide === index ? "carousell_indicator--item selected" : "carousell_indicator--item"
                });
            })
        )
    );
};

Swype.propTypes = {
    cards: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        title: _propTypes2.default.string.isRequired,
        content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
    })).isRequired
};

exports.default = Swype;