import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import ReactDom from 'react-dom';

ReactDom.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));



reportWebVitals();
