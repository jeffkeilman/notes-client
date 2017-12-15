import React, { Component } from 'react';

import NoteItem from './NoteItem/NoteItem';
import Toolbar from './Toolbar/Toolbar';

class NoteSelectionArea extends Component {
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
                <div>
                    <Toolbar />
                    <div className='note-items'>
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                    </div>
                </div>
            );
        } else {
            return(
                <div>
                    <Toolbar />
                    <div className='note-items'>
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                    </div>
                </div>
            );
        }
    }
}

export default NoteSelectionArea;