import * as React from 'react';

export class InputForm extends React.Component {
    constructor() {
        super();

        this.state = {
            author: '',
            text: ''
        }
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

    submitHandler(e) {
        e.preventDefault();
        if (this.state.text == '' || this.state.author == '') {
            alert('Заполните все поля')
        } else {
            this.props.onSubmit(this.state.author, this.state.text)
            this.state.text = '';
        }
    }

    render() {
        return <form className='comment-input' id='comments' onSubmit={this.submitHandler.bind(this)}>
            <input type='text' value={this.state.author} onInput={this.inputHandler.bind(this)} className='comment-input__author' />
            <textarea value={this.state.text} className='comment-input__text' onInput={this.inputHandler.bind(this)} />
            <input type='submit' form='comments' value='SUBMIT' className='comment-input__submit' />
        </form >
    }
}