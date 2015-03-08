import React from 'react';


let Fixed = React.createClass({

    render() {
        console.info('Fixed.render');
        let classes = ['Fixed', this.props.className].join(' ');
        return <div className={classes}>{this.props.children}</div>;
    }
});


module.exports = Fixed;
