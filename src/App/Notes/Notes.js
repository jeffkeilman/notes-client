import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './Notes.css';

import NoteArea from './NoteArea/NoteArea';
import NoteSelectionArea from './NoteSelectionArea/NoteSelectionArea';

class Notes extends Component {
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
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-12 pre-scrollable left'>
                            <Switch>
                                <Route exact path='/notes' component={NoteSelectionArea} />
                                <Route path='/notes/:id' component={NoteArea} />
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
                            <NoteSelectionArea />
                        </div>
                        <div className='col-xs-9 right'>
                            <NoteArea />
                        </div>
                    </div>
                </div>
            );
        }
    };
}

export default Notes;