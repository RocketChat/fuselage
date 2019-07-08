import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router';
import React from 'react';


export const withLocation = (fn) => (
  <LocationProvider history={createHistory(createMemorySource('/'))}>
    {fn()}
  </LocationProvider>
);
