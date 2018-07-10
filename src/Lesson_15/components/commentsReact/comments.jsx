import * as React from 'react';
import { Ajax } from '../../utils/ajax.util';

const URL = 'https://evening-dawn-11092.herokuapp.com/';
const COMMENTS = `${URL}comments`;
const LIST = `${URL}list`;

export class CommentList extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
            text: '',
            author: ''
        };
        Ajax.get(COMMENTS, (resp) => {
            this.setState({ list: resp });
        });
    }

    inputHandler(e) {
        const target = e.target;
        if (target.className == 'comment-input__author') {
            this.setState({
                author: target.value
            });
        } else if (target.className == 'comment-input__text') {
            this.setState({
                text: target.value
            });
        }
    }

    addTask(comment) {
        this.setState({
            list: this.state.list.concat([comment]),
            text: ''
        })
    }

    submitForm(e) {
        e.preventDefault();
        if (this.state.text !== '' && this.state.author !== '') {
            Ajax.post(COMMENTS, { text: this.state.text, author: this.state.author }, (resp) => {
                this.addTask(resp);
            });
        }else {
            alert('Заполните все поля')
        }
    }

    render() {
        const comments = [];
        this.state.list.forEach((item) => {
            const ul = <ul>{item.author}</ul>;
            const li = <li>{item.text}<br/><span className='comments__date'>{item.date}</span></li>;
            comments.push(ul);
            comments.push(li);
        });
        return <div className='comments-form'>
            <form id='comment-input' onSubmit={this.submitForm.bind(this)}>
                <input type='text' value={this.state.author} onInput={this.inputHandler.bind(this)} className='comment-input__author' /><br />
                <textarea value={this.state.text} className='comment-input__text' onInput={this.inputHandler.bind(this)} /><br />
                <input type='submit' form='comment-input' value='SUBMIT' className='comment-input__submit' />
            </form>
            <div className='comments'>{comments}</div>
        </div>;
    }
}