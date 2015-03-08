import React from 'react';
import Layout from './Layout';
import Flex from './Flex';
import Fixed from './Fixed';


var Example = React.createClass({

    render: function() {
        return (
            <Layout type="rows">
                <Fixed className="header">Fixed Header</Fixed>
                <Flex>
                    <Layout type="columns">
                        <Fixed className="sidebar">Fixed Sidebar</Fixed>
                        <Flex className="content">Flex Body</Flex>
                    </Layout>
                </Flex>
            </Layout>
        );
    }

});

React.render(<Example />, document.body);