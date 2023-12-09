"use strict";
exports.__esModule = true;
var button_module_css_1 = require("./button.module.css");
function navButton(_a) {
    var title = _a.title;
    return (React.createElement("div", { className: button_module_css_1["default"].button },
        title,
        " ",
        React.createElement("span", { className: button_module_css_1["default"].arrow }, "\u2192")));
}
exports["default"] = navButton;
