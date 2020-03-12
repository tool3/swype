import React, { useState } from 'react';
import { CarousellIndicator, CarousellIndicatorItem, Selected, SwypeWrapper } from '../styled/styledComponents';
import SwypeContent from './SwypeContent';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';

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
        <SwypeWrapper>
            <SwipeableViews
                enableMouseEvents
                onChangeIndex={updateSlide}
                index={state.currentSlide}>
                {cards.map(({ title, content }, index) => {
                    return (
                        <SwypeContent
                            header={title}
                            body={content}
                            key={index}
                            onArrowClick={updateSlide}
                            index={state.currentSlide}
                        />
                    );
                })}
            </SwipeableViews>
            <CarousellIndicator>
                {cards.map((item, index) => {
                    return  state.currentSlide === index ? <Selected key={index}
                    onClick={() => onCarouselItemClick(index)}/> : <CarousellIndicatorItem key={index}
                    onClick={() => onCarouselItemClick(index)}/>
                })}
            </CarousellIndicator>
        </SwypeWrapper>
    );
};

Swype.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    })).isRequired
}

export default Swype;