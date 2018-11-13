import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail.jsx'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                content="Nice blog post"
            />
            <CommentDetail
                author="Alex"
                timeAgo="Today at 2:00AM"
                content="I like the subject"
            />
            <CommentDetail
                author="Jane"
                timeAgo="Yesterday at 5:00PM"
                content="I like the writing"
            />
        </div>
    );
};

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});