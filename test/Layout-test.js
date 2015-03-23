import expect from 'expect.js';
import React from 'react/addons';
let { TestUtils } = React.addons;
var Layout = require('../src/Layout');
var Fixed = require('../src/Fixed');
var Flex = require('../src/Flex');


describe('Layout', function () {

    var layout = TestUtils.renderIntoDocument(
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
        var component = TestUtils.findRenderedDOMComponentWithClass(layout, 'Layout');
        expect(component.getDOMNode().children.length).to.equal(2);
    });


    it('renders the children', function () {
        var component = TestUtils.findRenderedDOMComponentWithClass(layout, 'Layout');

        expect(component.props.children.length).to.equal(2);

        var fixed = component.props.children[0];
        var flex = component.props.children[1];

        expect(fixed.type.displayName).to.equal('Fixed');
        expect(flex.type.displayName).to.equal('Flex');

        expect(fixed.props.type).to.equal('rows');
        expect(fixed.props.className).to.equal('header');

        expect(flex.props.type).to.equal('rows');
        expect(flex.props.className).to.equal('content');
    });
});