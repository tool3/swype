import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import PropTypes from 'prop-types';
import '../App.css';

const SwiperContent = (props) => {
    const { header, index, body, onArrowClick } = props;
    return (
        <div className="swype">
            <div className="swiper_card">
                <div className="swiper_card__header">{header}</div>
                <div className="swiper_card__body">
                    <div className="swiper_card__body--arrow"
                        onClick={() => onArrowClick(index - 1)} />
                    <div className="swiper_card__body--text">{body}</div>
                    <div className="swiper_card__body--arrow"
                        onClick={() => onArrowClick(index + 1)} />
                </div>
            </div>
        </div>
    );
};

const Swype = (props) => {
    const { cards } = props;
    const [state, updateState] = useState({ currentSlide: 0 })

    const updateSlide = (index) => {
        if (index >= 0 && index < cards.length) {
            updateState({ currentSlide: index });
        }
    }

    const onCarouselItemClick = (index) => {
        updateState({ currentSlide: index });
    }

    return (
        <div>
            <SwipeableViews
                enableMouseEvents
                onChangeIndex={updateSlide}
                index={state.currentSlide}
            >
                {cards.map(({ title, content }, index) => {
                    return (
                        <SwiperContent
                            header={title}
                            body={content}
                            key={index}
                            onArrowClick={updateSlide}
                            index={state.currentSlide}
                        />
                    );
                })}
            </SwipeableViews>
            <div className="carousell_indicator">
                {cards.map((item, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => onCarouselItemClick(index)}
                            className={
                                state.currentSlide === index
                                    ? "carousell_indicator--item selected"
                                    : "carousell_indicator--item"
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
};

Swype.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    })).isRequired
}

export default Swype;