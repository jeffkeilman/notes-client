import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './Notes.css';

import NoteArea from './NoteArea/NoteArea';
import NoteSelectionArea from './NoteSelectionArea/NoteSelectionArea';

import NoteService from '../../services/NoteService';

class Notes extends Component {
    state = {
        width: window.innerWidth,
        notes: NoteService.index(),
        id: null,
        text: ''
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

    updateText = (text) => {
        this.setState({ text: text });
    };

    updateId = (id) => {
        this.setState({ id: id }, () => {
            if (this.state.id) {
                this.setState({ text: NoteService.show(this.state.id).text });
            }
        });
    };

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;

        if (isMobile) {
            return(
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-12 pre-scrollable left'>
                            <Switch>
                                <Route
                                    exact path='/notes'
                                    render={() => <NoteSelectionArea notes={this.state.notes} updateId={this.updateId} />}
                                />
                                <Route
                                    path='/notes/:id'
                                    render={() => <NoteArea text={this.state.text} updateId={this.updateId} updateText={this.updateText} />}
                                />
                            </Switch>
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-3 pre-scrollable left'>
                            <NoteSelectionArea notes={this.state.notes} updateId={this.updateId} />
                        </div>
                        <div className='col-xs-9 right'>
                            <NoteArea text={this.state.text} updateId={this.updateId} updateText={this.updateText} />
                        </div>
                    </div>
                </div>
            );
        }
    };
}

export default Notes;