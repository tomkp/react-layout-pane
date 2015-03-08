import React from 'react';


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
        console.info('Layout.render');
        let classes = ['Layout', this.props.type].join(' ');
        return <div className={classes}>{this.props.children}</div>;
    }
});


module.exports = Layout;
