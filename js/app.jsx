import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail.jsx'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />

        </div>
    );
};

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});