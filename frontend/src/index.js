import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Main} from 'containers'
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Main} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
