import * as React from 'react'

export class SideMenu extends React.Component {
    render() {
        const items = this.props.items
        let renderer = [];
        items.forEach((item, i) => {
            const menuItem = <a href='#' key={i}><li>{item}</li></a>
            renderer.push(menuItem);
        })
        return <div className='menu-items'>{renderer}</div>
    }
}