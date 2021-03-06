import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Notes from '../Notes/Notes';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

const Main = () => {
    return(
        <Switch>
            <Route exact path='/' render={() => (
                <Redirect to='/notes' />
            )} />
            <Route path='/notes' component={Notes} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/sign-up' component={SignUp} />
        </Switch>
    );
}

export default Main;