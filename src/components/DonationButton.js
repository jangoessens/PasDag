import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

library.add(faCreditCard);

const DonationButton = props => (
    <div className="donation-button-container">
        <div className="donation-button-link-container">
            <a href="http://www.bunq.me/waarisdiepas" target="_blank" className="link-button">
                <div class="sliding-button">
                    <div class="sliding-button-content">
                        <div class="button-icon">
                            <FontAwesomeIcon icon="credit-card" spin="YES" /></div>
                        <div class="button-text">Stort op die pas!</div>
                    </div>
                </div>
            </a>
        </div>
    </div>
);

export default DonationButton;