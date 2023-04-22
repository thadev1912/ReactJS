import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from '../src/redux/stores'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}> 
    <App /> 
    </Provider> 
);

reportWebVitals();
