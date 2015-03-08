"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var Fixed = React.createClass({
    displayName: "Fixed",

    render: function render() {
        console.info("Fixed.render");
        var classes = ["Fixed"];
        if (this.props.className) {
            classes.push(this.props.className);
        }

        var styles = undefined;
        if (this.props.type === "rows") {
            styles = {
                width: "100%"
            };
        } else {
            styles = {
                height: "100%"
            };
        }

        return React.createElement(
            "div",
            { className: classes.join(" "), style: styles },
            this.props.children
        );
    }
});

module.exports = Fixed;