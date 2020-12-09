const Eslint = require("./eslint");
const Prettier = require("./prettier");
const Stylelint = require("./stylelint");

module.exports = {
    Eslint,
    Prettier,
    Stylelint,
    default: Eslint
};
