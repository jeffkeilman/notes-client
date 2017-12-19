import React from 'react';
import './Toolbar.css';

const Toolbar = () => {
    return (
        <div className="container search-form-container">
            <form className="form-inline pull-left">
                <div className="form-group">
                    <input type="text" className="form-control note-name" placeholder="Note text..." />
                    <button type="submit" className="btn btn-primary"><i className="fa fa-search" aria-hidden="true"></i></button>
                </div>
            </form>
            <button className="btn btn-success add-button pull-right"><i className="fa fa-plus" aria-hidden="true"></i></button>
            <button className="btn btn-danger delete-button pull-right"><i className="fa fa-minus" aria-hidden="true"></i></button>
        </div>
    );
}

export default Toolbar;