import * as React from 'react'

const DUMMYTEXT = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore atque qui commodi, reiciendis omnis nisi voluptatem error sit illum quidem! Quibusdam, est totam atque natus in mollitia odio fugit impedit?'


export class ItemList extends React.Component {

    onChange() {
        const changedItem = Object.assign({}, this.props.items);
        const oldText = changedItem.text; 
        changedItem.text = prompt('Enter new text', oldText);
        this.props.onChange(changedItem);
    }

    onDelete() {
        this.props.onDelete(this.props.items)
    }

    edit() {
        const editedItem = Object.assign({}, this.props.items)
        
    }

    render() {
        const item = this.props.items;
        return <div className='commentBox'><ul>{item.author}</ul>
            <li>{item.text}<br />
                <span className='comments__date'>{item.date}</span>
                <button onClick={this.onDelete.bind(this)} className='comments__delete'>
                    <i className="far fa-trash-alt"></i>
                </button>
                <button onClick={this.onChange.bind(this)} className='comments__edit'>
                    <i className="far fa-edit"></i>
                </button>
            </li>
        </div>
    }
}