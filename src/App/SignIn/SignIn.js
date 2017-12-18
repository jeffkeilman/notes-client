import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './SignIn.css';

class SignIn extends Component {
    state = {
        emailValue: '',
        passValue: ''
    };

    handleChangeEmail = (event) => {
        this.setState({ emailValue: event.target.value });
    };

    handleChangePass = (event) => {
        this.setState({ passValue: event.target.value });
    };

    render() {
        return (
            <div className='container-fluid'>
                <div className='col-xs-8 col-xs-offset-2 col-sm-2 col-sm-offset-5 sign-in-container'>
                    <form>
                        <FormGroup controlId='formEmail'>
                            <ControlLabel>Email:</ControlLabel>
                            <FormControl
                                type='text'
                                value={this.state.emailValue}
                                placeholder='Enter email'
                                onChange={this.handleChangeEmail}
                                autoComplete='email'
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup controlId='formPass'>
                            <ControlLabel>Password:</ControlLabel>
                            <FormControl
                                type='password'
                                value={this.state.passValue}
                                placeholder='Enter password'
                                onChange={this.handleChangePass}
                                autoComplete='current-password'
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <Button type='button' className='btn btn-primary'>
                            Submit
                        </Button>
                    </form>
                    <Link to='/sign-up'>No account? Sign up!</Link>
                </div>
            </div>
        );
    };
}

export default SignIn;