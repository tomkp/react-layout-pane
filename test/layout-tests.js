import chai from 'chai';
const expect = chai.expect;
import React from 'react/addons';
const { TestUtils } = React.addons;
import {Layout, Fixed, Flex} from '../';


describe('Layout', function () {

    const layout = TestUtils.renderIntoDocument(
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
        const component = TestUtils.findRenderedDOMComponentWithClass(layout, 'Layout');
        expect(component.getDOMNode().children.length).to.equal(2);
    });


    it('renders the children', function () {
        const component = TestUtils.findRenderedDOMComponentWithClass(layout, 'Layout');
        expect(component.props.children.length).to.equal(2);
        const fixed = component.props.children[0];
        const flex = component.props.children[1];
        expect(fixed.props.className).to.equal('header');
        expect(flex.props.className).to.equal('content');
    });
});



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