"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react/addons"));

var prefix = _interopRequire(require("./Prefix"));

var Layout = React.createClass({
    displayName: "Layout",

    propTypes: {
        type: React.PropTypes.string.isRequired
    },

    getDefaultProps: function getDefaultProps() {
        return {
            type: "columns"
        };
    },

    render: function render() {
        console.info("Layout.render");
        var classes = ["Layout"];
        if (this.props.className) {
            classes.push(this.props.className);
        }

        var styles = undefined;

        if (this.props.type === "rows") {
            styles = {
                display: "flex",
                // todo: https://github.com/facebook/react/issues/2020
                // display: '-webkit-flex',

                WebkitBoxFlex: 1,
                WebkitFlex: 1,
                msFlex: 1,
                flex: 1,

                WebkitBoxOrient: "vertical",
                WebkitBoxDirection: "normal",
                WebkitFlexDirection: "column",
                msFlexDirection: "column",
                flexDirection: "column",

                position: "relative",
                height: "100%",
                minHeight: "100%"
            };
        } else {
            styles = {
                display: "flex",

                WebkitBoxFlex: 1,
                WebkitFlex: 1,
                msFlex: 1,
                flex: 1,

                WebkitBoxOrient: "horizontal",
                WebkitBoxDirection: "normal",
                WebkitFlexDirection: "row",
                msFlexDirection: "row",
                flexDirection: "row",

                height: "100%",
                position: "absolute",
                left: 0,
                right: 0
            };
        }

        styles = prefix(styles, window.navigator.userAgent);

        var type = this.props.type;
        var index = 0;
        var elements = this.props.children.map(function (child) {
            return React.addons.cloneWithProps(child, {
                type: type,
                key: index++
            });
        });

        return React.createElement(
            "div",
            { className: classes.join(" "), style: styles },
            elements
        );
    }
});

module.exports = Layout;

/*


 .Layout {
     display: flex;
     flex: 1;
     position: relative;
 }

 // vertically stacked
 .rows {
     flex-direction: column;
     height: 100%;
     min-height: 100%;
 }

 // left to right
 .columns {
     flex-direction: row;
     height: 100%;
     position: absolute;
     left: 0;
     right: 0;
 }

 .rows > .Fixed {
    width: 100%;
 }

 .columns > .Fixed {
     height: 100%;
 }

 .rows > .Flex {
 }

 .columns > .Flex {
    height: 100%;
 }

 // flexible content area
 .Flex {
    flex: 1;
 }

 */