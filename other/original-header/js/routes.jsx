import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/home';
import Portfolio from './components/portfolio';
import Resume from './components/resume';

let App = (props) => {
    return (
        <div className='app'>
            <div>{props.children}</div>
        </div>
    );  
};

const routes = (
    <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/portfolio/:project'>
            <IndexRoute component={Portfolio}/>
        </Route>
        <Route path='/resume' component={Resume}/>
    </Route>
);

export default routes;