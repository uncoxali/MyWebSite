const withReactSvg = require('next-react-svg');
const path = require('path');

const nextTranslate = require('next-translate');

module.exports = withReactSvg({
    include: path.resolve(__dirname, 'assets/svg'),
    webpack(config, options) {
        return config;
    },
    env: {
        API_BASE_URL: 'www.google.com',
    },

    ...nextTranslate({}),
});
