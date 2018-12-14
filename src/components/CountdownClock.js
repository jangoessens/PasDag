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
    updateTitle();

}

function minTwoDigits(variable) {
    return (variable < 10 ? '0' : '') + Math.floor(variable);
}

function updateTitle() {
    if (document.hasFocus()) {
        document.title = String.fromCodePoint(0x1F308) + "WAAR IS DIE HYPE" + String.fromCodePoint(0x1F308) ;
    }
    else {
        document.title = String.fromCodePoint(0x1F37B) + "Nog " + writable_days + " Dagen!!" + String.fromCodePoint(0x1F37B) ;
    }
}
const CountdownClock = props => (
    <div className={"countdown-page " + props.appendClass}>
        <div className='countdown-clock-container '>

            {updateTitle}
            {calculateVariables(props.timeUntillPasDag)}
            <div className="countdown-clock">
                <ClockBlock displayNumber={writable_days} displayLabel="DAGEN"></ClockBlock>
                <ClockBlock displayNumber={writable_hours} displayLabel="UREN"></ClockBlock>
                <ClockBlock displayNumber={writable_minutes} displayLabel="MINUTEN"></ClockBlock>
                <ClockBlock displayNumber={writable_seconds} displayLabel="SECONDEN"></ClockBlock>
            </div>
            <DonationButton></DonationButton>
        </div>
    </div>

);
export default CountdownClock;