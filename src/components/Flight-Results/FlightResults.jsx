import React from 'react';

import STYLES from './FlightResults.scss';
import Leg from '../Leg';
import CardFooter from '../Card-Footer';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const FlightResults = (prop) => {
  const results = prop.results.map(
    (item) => {
      return (
        <div key={item.id} className={getClassName('Card')}>
          <Leg data={item.outbound}/>
          <Leg data={item.inbound}/>
          <CardFooter price={item.price} agent={item.agent} />
        </div>
      );
    })

  return (
    <div className={getClassName('FlightResults')}>{results}</div>
  )
};

export default FlightResults;
