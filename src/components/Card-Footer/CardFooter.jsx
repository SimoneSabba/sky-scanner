import React from 'react';

import STYLES from './CardFooter.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const CardFooter = (prop) => {
  return (
    <div className={getClassName('CardFooter')}>
        <div>
            <div className={getClassName('CardFooter__price')}>{prop.price}</div>
            <div className={getClassName('CardFooter__agent')}>{prop.agent}</div>
        </div>
        <div className={getClassName('CardFooter__button')} role="button">Select</div>
    </div>
  )
};

export default CardFooter;
