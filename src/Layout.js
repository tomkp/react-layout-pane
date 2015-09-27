import VendorPrefix from 'react-vendor-prefix';
import { Component } from 'react';
import React from 'react';



export default class Layout extends Component {


    constructor(props) {
        super(props);
    }


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

        if (this.props.type === 'column') {
            style.flexDirection = 'column';
        } else {
            style.flexDirection = 'row';
        }

        let prefixed = VendorPrefix.prefix({styles: style});

        return <div className={classes.join(' ')} style={prefixed.styles}>{this.props.children}</div>;
    }
}


Layout.propTypes = {
    type: React.PropTypes.string.isRequired
};

Layout.defaultProps = {
    type: 'row'
};

