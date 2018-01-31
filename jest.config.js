// jest.config.js
module.exports = {
    // verbose: true,
    notify: true,
    // runner: 'jest-runner-eslint',
    // testMatch: ['**/__tests__/**/example*.js?(x)'],
    reporters: [
                 "default", 
                  ["<rootDir>/src/my-custom-reporter.js", { "banana": "yes", "pineapple": "no" }]
                 ],
    collectCoverage: true,
    coverageDirectory: './report' 
    // coverageReporters: ["json", "text", "lcov", "clover"] ,// ["json", "lcov", "text"]
    // coverageThreshold: {
    //     "global": {
    //         "branches": 80,
    //         "functions": 80,
    //         "lines": 80,
    //         "statements": -10
    //     }
    // }
};