import React from 'react';
import { Route } from 'react-router-dom';

import './NoteItem.css';

const NoteItem = () => {
    return (
        <Route render={({ history }) => (
            <div onClick={() => {
                history.push('/notes/' + 333/* eventually id */)
            }} className='container note-item'>
            A
            </div>
        )} />
    );
};

export default NoteItem;