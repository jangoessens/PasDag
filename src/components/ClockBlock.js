import React from 'react';

const ClockBlock = props => (
        <div className="clock-number clock-days">{props.displayNumber}
            <div className="clock-number-text">{props.displayLabel}</div>
    </div>

);

export default ClockBlock;