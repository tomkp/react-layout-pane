import expect from 'expect.js';
import React from 'react/addons';
const { TestUtils } = React.addons;
const Layout = require('../src/Layout');
const Fixed = require('../src/Fixed');
const Flex = require('../src/Flex');


describe('Layout', function () {

    const layout = TestUtils.renderIntoDocument(
        <Layout type="rows">
            <Fixed className="header">
                Fixed Header
            </Fixed>
            <Flex className="content">
                Flex Body
            </Flex>
        </Layout>
    );

    it('renders the Layout', function () {
        const component = TestUtils.findRenderedDOMComponentWithClass(layout, 'Layout');
        expect(component.getDOMNode().children.length).to.equal(2);
    });


    it('renders the children', function () {
        const component = TestUtils.findRenderedDOMComponentWithClass(layout, 'Layout');

        expect(component.props.children.length).to.equal(2);

        const fixed = component.props.children[0];
        const flex = component.props.children[1];

        expect(fixed.type.displayName).to.equal('Fixed');
        expect(flex.type.displayName).to.equal('Flex');

        expect(fixed.props.type).to.equal('rows');
        expect(fixed.props.className).to.equal('header');

        expect(flex.props.type).to.equal('rows');
        expect(flex.props.className).to.equal('content');
    });
});