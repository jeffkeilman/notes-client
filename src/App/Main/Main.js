import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Notes from '../Notes/Notes';
import SignIn from '../SignIn/SignIn';

const Main = () => {
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Notes} />
                <Route path='/sign-in' component={SignIn} />
            </Switch>
        </div>
    );
}

export default Main;