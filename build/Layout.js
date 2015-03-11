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
                flex: 1,
                flexDirection: "column",

                position: "relative",
                height: "100%",
                minHeight: "100%"
            };
        } else {
            styles = {
                display: "flex",
                flex: 1,
                flexDirection: "row",

                height: "100%",
                position: "absolute",
                left: 0,
                right: 0
            };
        }

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
            { className: classes.join(" "), style: prefix(styles) },
            elements
        );
    }
});

module.exports = Layout;