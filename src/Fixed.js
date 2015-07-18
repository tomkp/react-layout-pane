import React from 'react';


let Fixed = React.createClass({

    render() {
        let classes = ['Fixed'];
        if (this.props.className) {
            classes.push(this.props.className);
        }

        return <div className={classes.join(' ')} style={{
            position: 'relative'
        }}>{this.props.children}</div>;
    }
});


export default Fixed;
