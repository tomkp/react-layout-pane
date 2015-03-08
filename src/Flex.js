import React from 'react';

let Flex = React.createClass({

    render() {
        console.info('Flex.render');
        let classes = ['Flex'];
        if (this.props.className) {
            classes.push(this.props.className);
        }

        let styles;
        if (this.props.type === 'rows') {
            styles = {
                WebkitBoxFlex: 1,
                WebkitFlex: 1,
                msFlex: 1,
                flex: 1
            };
        } else {
            styles = {
                WebkitBoxFlex: 1,
                WebkitFlex: 1,
                msFlex: 1,
                flex: 1,

                height: '100%',
                minHeight: '100%'
            };
        }
        return <div className={classes.join(' ')} style={styles}>{this.props.children}</div>;
    }
});



module.exports = Flex;
