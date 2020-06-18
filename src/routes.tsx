import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyles from './styles/global';

import HomePage from './pages/HomePage';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
