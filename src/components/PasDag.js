import React from 'react';
import DonationButton from './DonationButton';
import CountdownClock from './CountdownClock';
import BackgroundBubble from './Beer-Background/BackgroundBubble';

const generatedBubbles = [];
generateBubbles();
function generateBubbles() {
    for (var i = 0; i < 50; i++) {
        generatedBubbles.push(generateBubble());
    }
};

function generateBubble() {
    var bubbleSize = Math.floor(Math.random() * 30);
    var xpos = Math.floor((Math.random() * 100) - 4);
    return <BackgroundBubble bubbleSize={bubbleSize} xpos={xpos}></BackgroundBubble>
}
const PasDag = props => (
    <div className="PasDag-container">
        <div className="PasDag-page">
            <div className="beer-background">
                <div className="beer-foam">
                    {generatedBubbles}
                </div>
                <DonationButton></DonationButton>

            </div>

        </div>
        <CountdownClock timeUntillPasDag={0} appendClass="fall-down"></CountdownClock>
    </div>
);

export default PasDag;