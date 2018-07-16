import * as React from 'react';
import { render } from 'react-dom';
import { CommentsForm } from './components/CommentsForm/commentsForm.jsx';


render(<CommentsForm />, document.querySelector('.comment-list'));