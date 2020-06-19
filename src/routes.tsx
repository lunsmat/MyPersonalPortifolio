import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default Routes;
