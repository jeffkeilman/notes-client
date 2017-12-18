import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './SignUp.css';

class SignUp extends Component {
    state = {
        emailValue: '',
        passValue: '',
        passVerifyValue: ''
    }

    handleChangeEmail = (event) => {
        this.setState({ emailValue: event.target.value });
    };

    handleChangePass = (event) => {
        this.setState({ passValue: event.target.value });
    };

    handleChangeVerify = (event) => {
        this.setState({ passVerifyValue: event.target.value });
    };

    getEmailValidationState = () => {
        const email = this.state.emailValue;

        if (email.length === 0) {
            return null;
        } else if (email.length >= 3 && email.includes('@')) {
            return 'success';
        } else {
            return 'error';
        }
    };

    getPassValidationState = () => {
        const pass = this.state.passValue;

        if (pass.length === 0) {
            return null;
        } else if (
            pass.length >= 6 &&
            pass.length <= 50 &&
            pass.search(/\d/) !== -1 &&
            pass.search(/[a-zA-Z]/) !== -1
        ) {
            return 'success';
        } else {
            return 'error';
        }
    };

    getPassVerifyValidationState = () => {
        const passVerify = this.state.passVerifyValue;
        const pass = this.state.passValue;

        if (passVerify.length === 0) {
            return null;
        } else if (passVerify === pass) {
            return 'success';
        } else {
            return 'error';
        }
    };

    render() {
        return(
            <div className='container-fluid'>
                <div className='col-xs-8 col-xs-offset-2 col-sm-2 col-sm-offset-5 sign-up-container'>
                        <form>
                            <FormGroup
                                controlId='formEmail'
                                validationState={this.getEmailValidationState()}
                            >
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
                            <FormGroup
                                controlId='formPass'
                                validationState={this.getPassValidationState()}
                            >
                                <ControlLabel>Password:</ControlLabel>
                                <FormControl
                                    type='password'
                                    value={this.state.passValue}
                                    placeholder='Enter password'
                                    onChange={this.handleChangePass}
                                    autoComplete='new-password'
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                            <FormGroup
                                controlId='formPassConf'
                                validationState={this.getPassVerifyValidationState()}
                            >
                                <ControlLabel>Password Confirmation:</ControlLabel>
                                <FormControl
                                    type='password'
                                    value={this.state.passVerifyValue}
                                    placeholder='Enter password confirmation'
                                    onChange={this.handleChangeVerify}
                                    autoComplete='new-password'
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                            <Button type='button' className='btn btn-primary'>
                                Submit
                            </Button>
                        </form>
                        <Link to='/sign-in'>Already have an account? Sign in!</Link>
                    </div>
            </div>
        );
    }
};

export default SignUp;