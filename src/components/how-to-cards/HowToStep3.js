import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt} from '@fortawesome/free-solid-svg-icons/';

library.add(faMoneyBillAlt);

const HowToStep3 = props => (
    <div className="how-to-card third-card">
        <div className="how-to-card-background">
            <FontAwesomeIcon size="3x" className="background-icon beer-icon-1" icon="beer" />
            <FontAwesomeIcon size="3x" className="background-icon beer-icon-2" icon="beer" />
        </div>
        <div className="how-to-card-title">VULLEN DAT GLAS!</div>
    </div>
);

export default HowToStep3;

