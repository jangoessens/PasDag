import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt} from '@fortawesome/free-solid-svg-icons/';

library.add(faMoneyBillAlt);

const HowToStep2 = props => (
    <div className="how-to-card second-card">
        <div className="how-to-card-background">
            <FontAwesomeIcon size="3x" className="background-icon user-icon" icon="user" />
            <FontAwesomeIcon size="3x" className="background-icon check-icon" icon="check" />
        </div>
        <div className="how-to-card-title">CHECK BIJ DIE KAS!</div>
    </div>
);

export default HowToStep2;

