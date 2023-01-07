import { createCadlLibrary } from "@cadl-lang/compiler";

export const myLibrary = createCadlLibrary({
  name: "myLibrary",
  diagnostics: {},
});

// optional but convenient
export const { reportDiagnostic, createDiagnostic, createStateSymbol } = myLibrary;