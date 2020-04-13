import React from 'react';
import TestRenderer from 'react-test-renderer';

import FlightResults from './FlightResults';

describe('FlightResults', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<FlightResults />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
