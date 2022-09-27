import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Hello, Bye} from './Hello';


// const root1 = <Hello hello='World'/>;
// const root2 = <Bye bye='World'/>;


ReactDOM.render(
  <>
    <Hello hello='World'/>
    <Bye bye='World'/>
  </>,
  document.getElementById('root')
);

