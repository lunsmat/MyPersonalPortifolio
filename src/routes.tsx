import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Header from './components/Header';
import { PageArea } from "./components/mainComponents";

import HomePage from './pages/HomePage';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Header />
            <PageArea>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </PageArea>
        </BrowserRouter>
    )
}

export default Routes;
