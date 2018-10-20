import React from 'react';
import DonationButton from './DonationButton';
import ClockBlock from './ClockBlock';

var writable_days, writable_hours, writable_minutes, writable_seconds;

function calculateVariables(timeUntill) {
    var days, hours, minutes, seconds = 0;
    seconds = (timeUntill / 1000);
    writable_seconds = minTwoDigits(seconds % 60);
    minutes = (seconds / 60);
    writable_minutes = minTwoDigits(minutes % 60);
    hours = (minutes / 60);
    writable_hours = minTwoDigits(hours % 24);
    days = (hours / 24);
    writable_days = minTwoDigits(days);
}

function minTwoDigits(variable) {
    return (variable < 10 ? '0' : '') + Math.floor(variable);
}
const CountdownClock = props => (
    <div className="countdown-clock-container">
        {calculateVariables(props.timeUntillPasDag)}
        <div className="countdown-clock">
            <ClockBlock displayNumber={writable_days} displayLabel="DAGEN"></ClockBlock>
            <ClockBlock displayNumber={writable_hours} displayLabel="UREN"></ClockBlock>
            <ClockBlock displayNumber={writable_minutes} displayLabel="MINUTEN"></ClockBlock>
            <ClockBlock displayNumber={writable_seconds} displayLabel="SECONDEN"></ClockBlock>
        </div>
        <DonationButton></DonationButton>
    </div>

);
export default CountdownClock;