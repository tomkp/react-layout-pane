import expect from 'expect.js';
import React from 'react/addons';
const { TestUtils } = React.addons;
const Flex = require('../src/Flex');


describe('Flex', function () {

    const flex = TestUtils.renderIntoDocument(
        <Flex className="body">
            Flex Body
        </Flex>
    );

    it('renders the Flex component', function () {
        const component = TestUtils.findRenderedDOMComponentWithClass(flex, 'Flex');
        expect(component.getDOMNode().textContent).to.equal('Flex Body');
    });

});