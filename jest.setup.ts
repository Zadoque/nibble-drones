// jest.setup.ts
globalThis.IS_REACT_ACT_ENVIRONMENT = true;   // ativa o novo act()
import "@testing-library/jest-dom";
