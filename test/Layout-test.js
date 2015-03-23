import expect from 'expect.js';
import React from 'react/addons';
let { TestUtils } = React.addons;
var Layout = require('../src/Layout');


describe('Tab', function () {

    var layout = TestUtils.renderIntoDocument(
        <Layout />
    );

    it('renders the Layout', function () {
        var component = TestUtils.findRenderedDOMComponentWithClass(layout, 'Layout');
    });

});