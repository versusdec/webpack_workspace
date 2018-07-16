import * as React from 'react';
import { Ajax } from '../../utils/ajax.util';
import { CommentsList } from '../CommentsList/commentsList.component.jsx';
import { InputForm } from '../InputForm/inputForm.component.jsx';
import { ID } from '../../utils/idGenerator';

const URL = 'https://evening-dawn-11092.herokuapp.com';
const COMMENTS = `${URL}/comments`;
const LIST = `${URL}/list`;

export class CommentsForm extends React.Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
        Ajax.get(COMMENTS, (resp) => {
            this.setState({ list: resp });
        });
    }

    add(comment) {
        this.setState({
            list: this.state.list.concat([comment]),
            text: ''
        })
    }


    submitForm(author, text) {
        Ajax.post(COMMENTS, { text: text, author: author }, (resp) => {
            this.add(resp);
        });
    }

    update(item) {
        Ajax.put(`${COMMENTS}/${item.id}`, item, (elem) => {
            this.setState((state) => {
                state.list.forEach((item, i, arr) => {
                    if (item.id === elem.id) {
                        arr[i] = elem;
                    }
                });
                return state
            });
        });
    }

    delete(delElem) {
        Ajax.delete(`${COMMENTS}/${delElem.id}`, () => {
            const updatedList = this.state.list.filter(elem => {
                return delElem.id !== elem.id
            });
            this.setState({
                list: updatedList
            })
        });
    }

    render() {
        return <div className='comments-form'>
            < InputForm onSubmit={this.submitForm.bind(this)} />
            <CommentsList items={this.state.list} onDelete={this.delete.bind(this)} onChange={this.update.bind(this)} />
        </div >;
    }
}