import * as React from 'react';

export class Editor extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '' /* this.test() */
        };
    }

/*     test(){
        const item = this.props.value;
        this.setState({
            value: item
        })
    } */

    changedText(e) {
        const target = e.target;
        this.setState({
            value: target.value
        });
    }

    submit(item){
        item.preventDefault();
        let newObj = this.props.item;
        newObj.text = this.state.value;
        this.props.onSubmit(newObj)
    }

    render() {
        //console.log(this.props.value)
        if(this.state.value === ''){
            this.setState({
                value: this.props.item.text
            })
        }
        return <form onSubmit={this.submit.bind(this)}>
            <textarea className='editor' value={this.state.value} onChange={this.changedText.bind(this)} />
            <input className='editor__button' type='submit' value='SAVE' />
        </form>
    }
}


