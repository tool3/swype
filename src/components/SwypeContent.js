import React from 'react';
import PropTypes from 'prop-types';

const SwypeContent = (props) => {
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

SwypeContent.propTypes = {
    header: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    onArrowClick: PropTypes.func.isRequired
}

export default SwypeContent;