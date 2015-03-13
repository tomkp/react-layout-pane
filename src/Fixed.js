import React from 'react';



let Fixed = React.createClass({

    render() {
        console.info('Fixed.render');
        let classes = ['Fixed'];
        if (this.props.className) {
            classes.push(this.props.className);
        }

        let styles;
        if (this.props.type === 'rows') {
            styles = {
                width: '100%'
            };
        } else {
            styles = {
                height: '100%'
            };
        }

        return <div className={classes.join(' ')} style={styles}>{this.props.children}</div>;
    }
});


export default Fixed;
