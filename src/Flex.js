import React, { Component } from 'react';
import VendorPrefix from 'react-vendor-prefix';
import assign from 'object-assign';

export default class Flex extends Component {

    render() {
        let classes = ['Flex'];
        if (this.props.className) {
            classes.push(this.props.className);
        }

        let style = {
            flex: 1,
            position: 'relative'
        };

        if (this.props.style) {
            assign(style, this.props.style);
        }

        style = VendorPrefix.prefix({style}).style;

        return <div className={classes.join(' ')} style={style}>{this.props.children}</div>;
    }
}

Flex.propTypes = {
    className: React.PropTypes.string,
    style: React.PropTypes.object
};
