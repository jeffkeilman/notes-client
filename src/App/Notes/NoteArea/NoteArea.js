import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './NoteArea.css';

// import NoteService from '../../../services/NoteService';

class NoteArea extends Component {
    state = {
        width: window.innerWidth
    };

    componentWillMount() {
        const id = window.location.pathname.split('/')[2];
        window.addEventListener('resize', this.handleWindowSizeChange);

        if (id) {
            this.props.updateId(id);
        }
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    };

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    handleTextChange = (event) => {
        this.props.updateText(event.target.value);
    };

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;

        if (isMobile) {
            return(
                <div className="container search-form-container">
                    <form>
                        <textarea
                            className="form-control"
                            rows="25"
                            placeholder="Type some text..."
                            value={this.props.text}
                            onChange={this.handleTextChange}
                        />
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
                        <textarea
                            className="form-control"
                            rows="30"
                            placeholder="Type some text..."
                            value={this.props.text}
                            onChange={this.handleTextChange}
                        />
                    </form>
                </div>
            );
        }
    };
}

export default NoteArea;