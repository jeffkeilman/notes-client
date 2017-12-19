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

    loadInNotes = () => {
        if (this.props.notes) {
            return this.props.notes.map((note) => <NoteItem key={note.id} note={note} />);
        } else {
            return 'It\'s lonely in here... let\'s add some notes!';
        }
    };

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;

        if (isMobile) {
            return(
                <div>
                    <Toolbar />
                    <div className='note-items'>
                        {this.loadInNotes()}
                    </div>
                </div>
            );
        } else {
            return(
                <div>
                    <Toolbar />
                    <div className='note-items'>
                        {this.loadInNotes()}
                    </div>
                </div>
            );
        }
    }
}

export default NoteSelectionArea;