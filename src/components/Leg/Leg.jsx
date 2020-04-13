import React from 'react';
import { minsToHours, formatTime } from '../../utils';
import STYLES from './Leg.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const Leg = (prop) => {
    return (
        <div className={getClassName('Leg')}>
            <div className={getClassName('Leg__left')}>
                <img 
                    className={getClassName('Leg__logo')} 
                    src={`https://logos.skyscnr.com/images/airlines/favicon/${prop.data.airline_id}.png`}
                />
                <div className={getClassName('Leg__time')}>
                    <span>{formatTime(prop.data.departure_time)}</span>
                    <span className={getClassName('Leg__airport-code')}>{prop.data.departure_airport}</span>
                </div>
                <div className={getClassName('Leg__arrow')}>--></div>
                <div className={getClassName('Leg__time')}>
                    <span>{formatTime(prop.data.arrival_time)}</span>
                    <span className={getClassName('Leg__airport-code')}>{prop.data.arrival_airport}</span>
                </div>
            </div>
            <div className={getClassName('Leg__right')}>
                <div>{minsToHours(prop.data.duration_mins)}</div>
                <div>{!prop.data.stops ? 'Direct' : `${prop.data.stops} Stop`}</div>
            </div>
        </div>
    )
};

export default Leg;
