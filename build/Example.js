"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var Layout = _interopRequire(require("./Layout"));

var Flex = _interopRequire(require("./Flex"));

var Fixed = _interopRequire(require("./Fixed"));

var Example = React.createClass({
    displayName: "Example",

    render: function render() {
        return React.createElement(
            Layout,
            { type: "rows" },
            React.createElement(
                Fixed,
                { className: "header" },
                "Fixed Header"
            ),
            React.createElement(
                Flex,
                null,
                React.createElement(
                    Layout,
                    { type: "columns" },
                    React.createElement(
                        Fixed,
                        { className: "sidebar" },
                        "Fixed Sidebar"
                    ),
                    React.createElement(
                        Flex,
                        { className: "content" },
                        "Flex Body"
                    )
                )
            )
        );
    }

});

React.render(React.createElement(Example, null), document.body);