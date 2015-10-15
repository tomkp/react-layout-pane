import React from 'react';
import ReactDOM from 'react-dom';
import {Layout, Flex, Fixed} from '../';


let Demo = React.createClass({

    render: function() {
        return (
            <Layout type="column">
                <Fixed className="header">
                    Fixed Header
                </Fixed>
                <Flex>
                    <Layout type="row">
                        <Fixed className="sidebar">
                            <Layout type="column">
                                <Fixed className="top-left">
                                    Top Left
                                </Fixed>
                                <Flex>
                                </Flex>
                                <Fixed className="bottom-left">
                                    Bottom Left
                                </Fixed>
                            </Layout>
                        </Fixed>
                        <Flex className="content">
                            Flex Body
                        </Flex>
                        <Fixed className="sidebar">
                            <Layout type="column">
                                <Fixed className="top-right">
                                    Top Right
                                </Fixed>
                                <Flex>
                                </Flex>
                                <Fixed className="bottom-right">
                                    Bottom Right
                                </Fixed>
                            </Layout>
                        </Fixed>
                    </Layout>
                </Flex>
                <Fixed className="header">
                    Fixed Footer
                </Fixed>
            </Layout>
        );
    }

});

ReactDOM.render(<Demo />, document.getElementById("container"));