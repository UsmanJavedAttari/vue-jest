module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    moduleFileExtensions: ['vue', 'js', 'ts', 'json'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
            'jest-transform-stub'
    },
    transformIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    snapshotSerializers: ['jest-serializer-vue'],
    testMatch: [
        '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
    ],
    testURL: 'http://localhost/',
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname'
    ],
    setupFiles: ['<rootDir>/tests/unit/setupTests.ts']
};
