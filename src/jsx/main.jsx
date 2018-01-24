import React from 'react';
import ReactDOM from 'react-dom';

import { tsv } from 'd3';

import '../sass/main.sass';

import dataPath from '../data/data.tsv';

import App from './App';

// useStrict(true);

function parseData({ outcome, decision, name, sequence }) {
  return {
    outcome,
    decision,
    name,
    sequence: sequence.split(''),
  };
}

tsv(dataPath, d => {
  ReactDOM.render(
    <App data={d.map(parseData)} filter="D" />,
    document.getElementById('deleted'),
  );
  ReactDOM.render(
    <App data={d.map(parseData)} filter="K" />,
    document.getElementById('kept'),
  );
});
