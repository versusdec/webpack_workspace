import * as React from 'react'
import { Editor } from '../editorWindow/editor.component.jsx';
import { render } from 'react-dom';

const DUMMYTEXT = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore atque qui commodi, reiciendis omnis nisi voluptatem error sit illum quidem! Quibusdam, est totam atque natus in mollitia odio fugit impedit?'


export class ItemList extends React.Component {
    constructor() {
        super();
        this.state = {
            newText: ''
        }
    }
    onChange(changedItem) {
        this.props.onChange(changedItem);
    }

    onDelete() {
        this.props.onDelete(this.props.items)
    }

    edit(element) {
        const item = Object.assign({}, this.props.items)
        const target = element.target.parentElement;
        render(<Editor item={item} /* value={item.text} */ onSubmit={this.onChange.bind(this)}/>, target)
    }

    render() {
        const item = this.props.items;
        return <div className='commentBox'><ul>{item.author}</ul>
            <li>{item.text}<br />
                <span className='comments__date'>{item.date}</span>
                <button onClick={this.onDelete.bind(this)} className='comments__delete'>
                    <i className="far fa-trash-alt"></i>
                </button>
                <button onClick={this.edit.bind(this)} className='comments__edit far fa-edit' />
            </li>
        </div>
    }
}