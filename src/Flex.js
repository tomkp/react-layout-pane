import React from 'react';


let Flex = React.createClass({

    render() {
        console.info('Flex.render');
        let classes = ['Flex', this.props.className].join(' ');
        return <div className={classes}>{this.props.children}</div>;
    }
});



module.exports = Flex;
