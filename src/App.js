import React from 'react';
import {
    BrowserRouter,
    Switch,Route } from 'react-router-dom';

import Topbar from './components/Topbar';
import Issues from './routes/Issues';
import SingleIssue from './routes/SingleIssue';
import IssuesHeader from './components/IssuesHeader';
import Footer from './components/Footer';
import './assets/scss/app.scss';

const App = props => (
    <BrowserRouter>
        <div className="app flex-container flex-column">
            <Topbar />
            <div className="issues flex-grow">
                <IssuesHeader />
                <Switch>
                    <Route path="/:number" component={SingleIssue} />
                    <Route path="/" component={Issues} />
                </Switch>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
);

export default App;