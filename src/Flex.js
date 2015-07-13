import React from 'react';
import VendorPrefix from 'react-vendor-prefix';


let Flex = React.createClass({

    propTypes: {
        type: React.PropTypes.string.isRequired
    },

    getDefaultProps() {
        return {
            type: 'columns'
        }
    },

    render() {
        let classes = ['Flex'];
        if (this.props.className) {
            classes.push(this.props.className);
        }

        let style;
        if (this.props.type === 'rows') {
            style = {
                flex: 1,
                position: 'relative'
            };
        } else {
            style = {
                flex: 1,
                position: 'relative'
                //height: '100%',
                //minHeight: '100%'
            };
        }
        let prefixed = VendorPrefix.prefix({styles: style});

        return <div className={classes.join(' ')} style={prefixed.styles}>{this.props.children}</div>;
    }
});



export default Flex;
