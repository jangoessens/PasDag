import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt, faUser, faCheck, faBeer } from '@fortawesome/free-solid-svg-icons/';
import HowToStep1 from './how-to-cards/HowToStep1';
import HowToStep2 from './how-to-cards/HowToStep2';
import HowToStep3 from './how-to-cards/HowToStep3';

library.add(faMoneyBillAlt, faUser, faCheck, faBeer);

const HowToPasDag = props => (
    <div className="how-to-pasdag-container">
        <div className="how-to-title-container">
            <div className="how-to-title">How To Pasdag
            </div>
        </div>
        <div className="how-to-card-container">

            <HowToStep1></HowToStep1>
            <HowToStep2></HowToStep2>
            <HowToStep3></HowToStep3>
        </div>
    </div>
);

export default HowToPasDag;