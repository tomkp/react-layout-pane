import expect from 'expect.js';
import React from 'react/addons';
let { TestUtils } = React.addons;
var Flex = require('../src/Flex');


describe('Flex', function () {

    var flex = TestUtils.renderIntoDocument(
        <Flex className="body">
            Flex Body
        </Flex>
    );

    it('renders the Flex component', function () {
        var component = TestUtils.findRenderedDOMComponentWithClass(flex, 'Flex');
        expect(component.getDOMNode().textContent).to.equal('Flex Body');
    });

});