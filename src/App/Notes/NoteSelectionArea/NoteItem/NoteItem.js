import React from 'react';
import { Route } from 'react-router-dom';

import './NoteItem.css';

const shortenMe = (text) => {
    if (text.length <= 40) {
        return text;
    } else {
        return text.substring(0, 39) + '...';
    }
}

const NoteItem = (props) => {
    const dateCreated = new Date(props.note.created_at);
    const dateUpdated = new Date(props.note.updated_at);

    return (
        <Route render={({ history }) => (
            <div onClick={(event) => {
                // event.target.style.border = 'outset #0000ff'; <-- put a pin in it
                props.updateId(props.note.id);
                history.push('/notes/' + props.note.id);
            }} className='container note-item'>
                <div className='row inner-item'>
                    <div className='col-xs-6 dates'>
                        Created: {dateCreated.toLocaleDateString()}
                    </div>
                    <div className='col-xs-6 dates'>
                        Updated: {dateUpdated.toLocaleDateString()}
                    </div>
                </div>
                <div className='row inner-item'>
                    <div className='col-xs-12 note-text'>
                        {shortenMe(props.note.text)}
                    </div>
                </div>
            </div>
        )} />
    );
};

export default NoteItem;