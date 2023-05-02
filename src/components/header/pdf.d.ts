// This tells TypeScript that any file with a .pdf extension should be treated as a module with a default export of type string. You can then import your PDF file as follows:
//A file with the .d.ts extension in TypeScript is a type declaration file. It is used to provide type information about a JavaScript module that does not have any TypeScript type definitions.
//A .d.ts file typically contains declarations of types, interfaces, classes, and functions that are used in a JavaScript module.
//When importing a module that does not have type declarations, TypeScript will look for a .d.ts


declare module '*.pdf' {
  const value: string;
  export default value;
}


declare module '*.png' {
  const value: string;
  export default value;
}
