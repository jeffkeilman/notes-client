import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Notes from '../Notes/Notes';
import SignIn from '../SignIn/SignIn';

const Main = () => {
    return(
        <Switch>
            <Route exact path='/notes' component={Notes} />
            <Route path='/sign-in' component={SignIn} />
        </Switch>
    );
}

export default Main;