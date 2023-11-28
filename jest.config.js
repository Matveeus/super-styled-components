module.exports = {
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.module\\.css$': 'identity-obj-proxy',
        '\\.css$': require.resolve('./components/css-mock.js'),
    },
};
