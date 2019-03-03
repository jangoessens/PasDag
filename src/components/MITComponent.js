import React from 'react';
import CountdownClock from './CountdownClock';

const MITComponent = props => (
    <div className="mitcomponent-container">
        <CountdownClock timeUntillMIT={props.timeUntillMIT}></CountdownClock>
    </div>
);

export default MITComponent;