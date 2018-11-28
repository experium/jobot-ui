
const components = require('@smooth-ui/core-sc');
const ui = require('./components');
const { theme } = require('./theme');

module.exports = {
    ...components,
    ...ui,
    theme
};
