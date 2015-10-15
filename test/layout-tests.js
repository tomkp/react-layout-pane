import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import chai from 'chai';
const expect = chai.expect;
import {Layout, Fixed, Flex} from '../';


describe('Layout', function () {

    const layout = ReactTestUtils.renderIntoDocument(
        <Layout type="column">
            <Fixed className="header">
                Fixed Header
            </Fixed>
            <Flex className="content">
                Flex Body
            </Flex>
        </Layout>
    );


    it('renders the Layout', function () {
        const component = ReactTestUtils.findRenderedComponentWithType(layout, Layout);
        expect(ReactDOM.findDOMNode(component).children.length).to.equal(2);
    });


    it('renders the children', function () {
        const component = ReactTestUtils.findRenderedComponentWithType(layout, Layout);
        expect(component.props.children.length).to.equal(2);
        const fixed = component.props.children[0];
        const flex = component.props.children[1];
        expect(fixed.props.className).to.equal('header');
        expect(flex.props.className).to.equal('content');
    });
});



describe('Flex', function () {

    const flex = ReactTestUtils.renderIntoDocument(
        <Flex className="body">
            Flex Body
        </Flex>
    );

    it('renders the Flex component', function () {
        const component = ReactTestUtils.findRenderedComponentWithType(flex, Flex);
        expect(ReactDOM.findDOMNode(component).textContent).to.equal('Flex Body');
    });

});



describe('Fixed', function () {

    const fixed = ReactTestUtils.renderIntoDocument(
        <Fixed className="header">
            Fixed Header
        </Fixed>
    );

    it('renders the Fixed component', function () {
        const component = ReactTestUtils.findRenderedComponentWithType(fixed, Fixed);
        expect(ReactDOM.findDOMNode(component).textContent).to.equal('Fixed Header');
    });

});