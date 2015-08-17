import chai from 'chai';
const expect = chai.expect;
import React from 'react/addons';
const { TestUtils } = React.addons;
const Fixed = require('../src/Fixed');


describe('Fixed', function () {

    const fixed = TestUtils.renderIntoDocument(
        <Fixed className="header">
            Fixed Header
        </Fixed>
    );

    it('renders the Fixed component', function () {
        const component = TestUtils.findRenderedDOMComponentWithClass(fixed, 'Fixed');
        expect(component.getDOMNode().textContent).to.equal('Fixed Header');
    });

});