import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Main } from 'containers'
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { css } from 'glamor'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <ToastContainer
                autoClose={3000}
                position="bottom-center"
                toastClassName={css({
                    background: 'black'
                })}
            />
            <Switch>
                <Route path='/' component={Main} />
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
