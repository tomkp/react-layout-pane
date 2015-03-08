"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var Flex = React.createClass({
    displayName: "Flex",

    render: function render() {
        console.info("Flex.render");
        var classes = ["Flex"];
        if (this.props.className) {
            classes.push(this.props.className);
        }

        var styles = undefined;
        if (this.props.type === "rows") {
            styles = {
                WebkitBoxFlex: 1,
                WebkitFlex: 1,
                msFlex: 1,
                flex: 1
            };
        } else {
            styles = {
                WebkitBoxFlex: 1,
                WebkitFlex: 1,
                msFlex: 1,
                flex: 1,

                height: "100%",
                minHeight: "100%"
            };
        }
        return React.createElement(
            "div",
            { className: classes.join(" "), style: styles },
            this.props.children
        );
    }
});

module.exports = Flex;