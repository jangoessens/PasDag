import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt, faWallet} from '@fortawesome/free-solid-svg-icons/';

library.add(faMoneyBillAlt, faWallet);

const HowToStep1 = props => (
    <div className="how-to-card first-card">
        <div className="how-to-card-background">
            <FontAwesomeIcon size="3x" className="background-icon wallet-icon" icon="wallet"></FontAwesomeIcon>
            <FontAwesomeIcon size="3x" className="background-icon money-icon" icon="money-bill-alt" />
            <FontAwesomeIcon size="3x" className="background-icon pas-icon" icon="credit-card" />
        </div>
        <div className="how-to-card-title">STORT OP DIE PAS!</div>
    </div>
);

export default HowToStep1;

