import React from 'react/addons';
import VendorPrefix from 'react-vendor-prefix';


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

                //position: 'relative',
                //height: '100%',
                //minHeight: '100%'

                //width: '100%',
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

                //height: '100%',
                position: 'absolute',
                left: 0,
                right: 0,

                top: 0,
                bottom: 0

            };
        }

        let prefixed = VendorPrefix.prefix({styles: style});

        let type = this.props.type;
        let index = 0;
        let elements = [];
        if (this.props.children) {
             elements = this.props.children.map((child) => {
                return React.addons.cloneWithProps(child, {
                    type: type,
                    key: index++
                });
            });
        }

        return <div className={classes.join(' ')} style={prefixed.styles}>{elements}</div>;
    }
});


export default Layout;
