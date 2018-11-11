import React from 'react';
import DonationButton from './DonationButton';
import CountdownClock from './CountdownClock';
import BackgroundBubble from './Beer-Background/BackgroundBubble';
import WaarIsDiePas from './WaarIsDiePas';

const generatedBubbles = [];
generateBubbles();
function generateBubbles() {
    for (var i = 0; i < 50; i++) {
        generatedBubbles.push(generateBubble());
    }
};

function generateBubble() {
    return <BackgroundBubble></BackgroundBubble>
}
const PasDag = props => (
    <div className="PasDag-container">
        <div className="PasDag-page">
            <div className="beer-background">
                <div className="beer-foam shake-after-fall-down">
                    {generatedBubbles}
                </div>
                <WaarIsDiePas></WaarIsDiePas>

                <div className="bubble" style={{ left: 20 + 'vw', animationDelay: 1.4 + "s" }}></div>
                <div className="bubble" style={{ left: 30 + 'vw', animationDelay: 2 + "s"}} ></div>
                <div className="bubble" style={{ left: 40 + 'vw', animationDelay: 1.3 + "s"}} ></div>
                <div className="bubble" style={{ left: 50 + 'vw', animationDelay: 2.1 + "s"}} ></div>
                <div className="bubble" style={{ left: 20 + 'vw', animationDelay: 2 + "s"}} ></div>
                <div className="bubble" style={{ left: 30 + 'vw', animationDelay: 2 + "s"}} ></div>
                <div className="bubble" style={{ left: 40 + 'vw', animationDelay: 1.5 + "s"}} ></div>
                <div className="bubble" style={{ left: 50 + 'vw', animationDelay: 3.7 + "s"}} ></div>
                <div className="bubble" style={{ left: 35 + 'vw', animationDelay: .8 + "s"}} ></div>
                <div className="bubble" style={{ left: 27 + 'vw', animationDelay: .6 + "s"}} ></div>
                <div className="bubble" style={{ left: 32 + 'vw', animationDelay: 4.2 + "s"}} ></div>
                <div className="bubble" style={{ left: 10 + 'vw', animationDelay: 2.5 + "s"}} ></div>
                <div className="bubble" style={{ left: 26 + 'vw', animationDelay: .5 + "s"}}></div>
                <div className="bubble" style={{ left: 70 + 'vw', animationDelay: 1.4 + "s" }}></div>
                <div className="bubble" style={{ left: 89 + 'vw', animationDelay: 2 + "s" }} ></div>
                <div className="bubble" style={{ left: 90 + 'vw', animationDelay: 1.3 + "s" }} ></div>
                <div className="bubble" style={{ left: 67 + 'vw', animationDelay: 2.1 + "s" }} ></div>
                <div className="bubble" style={{ left: 86 + 'vw', animationDelay: 2 + "s" }} ></div>
                <div className="bubble" style={{ left: 14 + 'vw', animationDelay: 2 + "s" }} ></div>
                <div className="bubble" style={{ left: 4 + 'vw', animationDelay: 1.5 + "s" }} ></div>
                <div className="bubble" style={{ left: 20 + 'vw', animationDelay: 3.7 + "s" }} ></div>
                <div className="bubble" style={{ left: 35 + 'vw', animationDelay: .8 + "s" }} ></div>
                <div className="bubble" style={{ left: 67 + 'vw', animationDelay: .6 + "s" }} ></div>
                <div className="bubble" style={{ left: 78 + 'vw', animationDelay: 4.2 + "s" }} ></div>
                <div className="bubble" style={{ left: 30 + 'vw', animationDelay: 2.5 + "s" }} ></div>
                <div className="bubble" style={{ left: 16 + 'vw', animationDelay: .5 + "s" }}></div>

                        < DonationButton ></DonationButton>

            </div>
        </div>
        <CountdownClock timeUntillPasDag={0} appendClass="fall-down"></CountdownClock>
    </div>
);

export default PasDag;