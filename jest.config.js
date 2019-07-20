const path = require ('path');

const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: false,
  moduleNameMapper: {
    '^actions[/](.+)': '<rootDir>/actions/$1',
    '^components[/](.+)': '<rootDir>/components/$1',
    '^containers[/](.+)': '<rootDir>/containers/$1',
    '^lib[/](.+)': '<rootDir>/lib/$1',
    '^reducers[/](.+)': '<rootDir>/reducers/$1',
  },
};
