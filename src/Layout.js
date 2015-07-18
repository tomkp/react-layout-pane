import React from 'react/addons';
import VendorPrefix from 'react-vendor-prefix';

var {Children} = React;

let Layout = React.createClass({

    propTypes: {
        type: React.PropTypes.string.isRequired
    },

    getDefaultProps() {
        return {
            type: 'columns'
        }
    },

    render() {
        let classes = ['Layout'];
        if (this.props.className) {
            classes.push(this.props.className);
        }
        classes.push(this.props.type);

        let style;

        if (this.props.type === 'rows') {
            style = {
                display: 'flex',
                flex: 1,
                flexDirection: 'column',

                position: 'absolute',
                left: 0,
                right: 0,

                top: 0,
                bottom: 0
            };
        } else {
            style = {
                display: 'flex',
                flex: 1,
                flexDirection: 'row',

                position: 'absolute',
                left: 0,
                right: 0,

                top: 0,
                bottom: 0

            };
        }

        let prefixed = VendorPrefix.prefix({styles: style});

        return <div className={classes.join(' ')} style={prefixed.styles}>{this.props.children}</div>;
    }
});


export default Layout;
