"use strict";

// https://github.com/facebook/react/issues/2020
// https://github.com/appsforartists/autoprefix-style-prop

var flexboxKeys = ["alignContent", "alignItems", "alignSelf", "flex", "flexBasis", "flexDirection", "flexFlow", "flexGrow", "flexShrink", "flexWrap", "justifyContent", "order", "transform"];

function Prefix(styles, userAgent) {

    var result = {};

    Object.keys(styles).forEach(function (key) {
        console.info("key", key);
        // Browser sniffing sucks, but Safari overloads display, and there's
        // no way to set a style key to two values in React
        if (key === "display" && styles.display.indexOf("flex") !== -1 && userAgent && userAgent.indexOf("WebKit") !== -1 && userAgent.indexOf("Chrom") === -1) {
            result.display = "-webkit-" + styles.display;
        } else if (flexboxKeys.indexOf(key) !== -1) {
            var titleCasedKey = key.substring(0, 1).toUpperCase() + key.substring(1);
            result["Webkit" + titleCasedKey] = styles[key];
        } else {
            result[key] = styles[key];
        }
    });

    return result;
}

module.exports = Prefix;