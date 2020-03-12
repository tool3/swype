import React from 'react';
import PropTypes from 'prop-types';
import { SwypeDiv, SwypeCard, SwypeCardHeader, SwypeCardBody, SwypeCardArrow } from '../styled/styledComponents';

const SwypeContent = (props) => {
    const { header, index, body, onArrowClick } = props;
    return (
        <SwypeDiv>
            <SwypeCard>
                <SwypeCardHeader>{header}</SwypeCardHeader>
                <SwypeCardBody>
                    <SwypeCardArrow onClick={() => onArrowClick(index - 1)} />
                    <div>{body}</div>
                    <SwypeCardArrow onClick={() => onArrowClick(index + 1)} />
                </SwypeCardBody>
            </SwypeCard>
        </SwypeDiv>
    );
};

SwypeContent.propTypes = {
    header: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    onArrowClick: PropTypes.func.isRequired
}

export default SwypeContent;