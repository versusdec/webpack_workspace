import * as React from 'react';
import { render } from 'react-dom';
import { CommentList } from './components/commentsReact/comments.jsx';

render(<CommentList />, document.querySelector('.comment-list'));