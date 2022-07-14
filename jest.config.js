const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    moduleDirectories: ["node_modules", "<rootDir>/"],
    testEnvironment: "jest-environment-jsdom",
    moduleNameMapper: {
        "^@/components(.*)$": "<rootDir>/src/components/$1",
        "^@/utils(.*)$": "<rootDir>/src/utils/$1",
    },
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70,
        },
    },
};

module.exports = createJestConfig(customJestConfig);
