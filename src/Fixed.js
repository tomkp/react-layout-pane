import { Component } from 'react';
import React from 'react';

export default class Fixed extends Component {

    render() {
        let classes = ['Fixed'];
        if (this.props.className) {
            classes.push(this.props.className);
        }

        return <div className={classes.join(' ')} style={{position: 'relative'}}>{this.props.children}</div>;
    }
}