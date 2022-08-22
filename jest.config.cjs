module.exports = {
    moduleNameMapper: {
        "^.+\\.(css|less|scss|sass)$": "babel-jest"
    },
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.ts']
}