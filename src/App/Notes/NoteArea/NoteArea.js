import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './NoteArea.css';

class NoteArea extends Component {
    state = {
        width: window.innerWidth
    };

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    };

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;

        if (isMobile) {
            return(
                <div className="container search-form-container">
                    <form>
                        <textarea className="form-control" rows="25" placeholder="Type some text..."></textarea>
                    </form>
                    <Route render={({ history }) => (
                        <button onClick={() => {
                            history.push('/notes')
                        }} className="btn btn-primary">&#60; Back</button>
                    )} />
                </div>
            );
        } else {
            return(
                <div className="container search-form-container">
                    <form>
                        <textarea className="form-control" rows="30" placeholder="Type some text..."></textarea>
                    </form>
                </div>
            );
        }
    };
}

export default NoteArea;