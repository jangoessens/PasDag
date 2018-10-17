import React from 'react';

var writable_days, writable_hours, writable_minutes, writable_seconds;

function calculateVariables(timeUntill) {
    var days, hours, minutes, seconds;
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
        <div className="countdown-clock">
            {calculateVariables(props.timeUntillPasDag)}
            <div className="clock-number clock-days">{writable_days}
                <div className="clock-number-text">DAGEN</div>
            </div>
            <div className="clock-colon"></div>
            <div className="clock-number clock-hours">{writable_hours}
                <div className="clock-number-text">UREN</div>
            </div>
            <div className="clock-colon"></div>
            <div className="clock-number clock-minutes">{writable_minutes}
                <div className="clock-number-text">MINUTEN</div>
            </div>
            <div className="clock-colon"></div>
            <div className="clock-number clock-seconds">{writable_seconds}
                <div className="clock-number-text">SECONDEN</div>
            </div>
        </div>
        {/* <div className="countdown-clock-payment-link-container">
            <a href="www.bunq.me/waarisdiepas" target=".blank" className="link-button">
                <div className="countdown-clock-subtitle-text">WAAR IS DIE PAS??!?</div>
            </a>
        </div> */}
    </div>

);
export default CountdownClock;