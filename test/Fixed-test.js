import expect from 'expect.js';
import React from 'react/addons';
let { TestUtils } = React.addons;
var Fixed = require('../src/Fixed');


describe('Fixed', function () {

    var fixed = TestUtils.renderIntoDocument(
        <Fixed className="header">
            Fixed Header
        </Fixed>
    );

    it('renders the Fixed component', function () {
        var component = TestUtils.findRenderedDOMComponentWithClass(fixed, 'Fixed');
        expect(component.getDOMNode().textContent).to.equal('Fixed Header');
    });

});