import React, { Component } from 'react';
import VendorPrefix from 'react-vendor-prefix';
import assign from 'object-assign';

export default class Layout extends Component {

    render() {
        let classes = ['Layout'];
        if (this.props.className) {
            classes.push(this.props.className);
        }
        classes.push(this.props.type);

        let style = {
            display: 'flex',
            flex: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };

        style.flexDirection = (this.props.type === 'column') ? 'column' : 'row';

        if (this.props.style) {
            assign(style, this.props.style);
        }

        style = VendorPrefix.prefix({style}).style;

        return <div className={classes.join(' ')} style={style}>{this.props.children}</div>;
    }
}


Layout.propTypes = {
    type: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    style: React.PropTypes.object
};

Layout.defaultProps = {
    type: 'row'
};

