import type { Config } from 'jest';

const config: Config = {
  // Usando o preset 'ts-jest' para suportar TypeScript
  preset: 'ts-jest',

  // Ambiente de teste configurado como 'node'
  testEnvironment: 'node',

  // Configurações que você forneceu anteriormente
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  // Adicione outras configurações conforme necessário

  // Exemplo de outras configurações que você forneceu
  // moduleFileExtensions: ["ts", "js", "json", "tsx", "jsx"],
  // transform: {
  //   "^.+\\.(ts|tsx)$": "ts-jest",
  // },
};

export default config;
