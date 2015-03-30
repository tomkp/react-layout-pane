import React from 'react';


let Fixed = React.createClass({

    propTypes: {
        type: React.PropTypes.string.isRequired
    },

    getDefaultProps() {
        return {
            type: 'columns'
        }
    },

    render() {
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
