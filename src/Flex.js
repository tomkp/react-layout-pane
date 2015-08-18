import { Component } from 'react';
import React from 'react';
import VendorPrefix from 'react-vendor-prefix';

export default class Flex extends Component {

    render() {
        let classes = ['Flex'];
        if (this.props.className) {
            classes.push(this.props.className);
        }

        let prefixed = VendorPrefix.prefix({styles: {
            flex: 1,
            position: 'relative'
        }});

        return <div className={classes.join(' ')} style={prefixed.styles}>{this.props.children}</div>;
    }
}