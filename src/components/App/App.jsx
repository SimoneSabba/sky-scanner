import React, { useState, useEffect } from 'react';
import BpkText from 'bpk-component-text';
import axios from 'axios';

import Header from '../Header';
import FlightResults from '../Flight-Results'

import STYLES from './App.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const App = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() =>{
    setLoading(true);
    axios.get(`flights.json`)
    .then(res => {
      setLoading(false);
      const {itineraries, legs} = res.data;
      itineraries.map(
        (itinerary) => {
          itinerary.outbound = legs.find((item) => itinerary.legs[0] === item.id);
          itinerary.inbound = legs.find((item) => itinerary.legs[1] === item.id);
        })
      setFlights(itineraries);
    })
  }, [])
  return (
    <div className={getClassName('App')}>
      <Header />
      <main className={getClassName('App__main')}>
      {
      loading 
        ? <BpkText tagName="p">Loading results...</BpkText> 
        : <FlightResults results={flights}></FlightResults>
      }
      </main>
    </div>
  )
};

export default App;
