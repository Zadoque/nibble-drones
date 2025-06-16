/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  // carrega utilitários globais de teste
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // resolve alias "@/..."
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },

  // nova forma recomendada de passar opções ao ts-jest
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.jest.json',
        diagnostics: false           // opcional: silencia avisos de type-check
      }
    ]
  }
};
