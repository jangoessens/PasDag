import React from 'react';



function setBubbleVariables(props) {
    return {
        height: props.bubbleSize + "vh",
        width: props.bubbleSize + "vh",
        left: props.xpos + '%'
    }
}
const BackgroundBubble = props => (
    <div className="foam-bubble" style={setBubbleVariables(props)}></div>
);

export default BackgroundBubble;