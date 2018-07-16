import * as React from 'react';
import { ItemList } from './commList.jsx';
import { ID } from '../../utils/idGenerator'

export class CommentsList extends React.Component {
    constructor() {
        super();

    }
    onItemChange(item){
        this.props.onChange(item);
    }

    onDelete(item){
        this.props.onDelete(item);
    }

    render() {
        const comments = this.props.items.map(itemListObj =>
            <ItemList onDelete={this.onDelete.bind(this)} onChange={this.onItemChange.bind(this)} key={ID()} items={itemListObj} />
        );

        return <div key={ID()} className='comments'>{comments}</div>;

    }
}
