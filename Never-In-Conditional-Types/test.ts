function error(message: string): never{
    throw new Error(message);
}

// const notAllowed:never = 'some string'; // error 

const allowed: never = error('Test');
const alsoAllowed: string = error('Test');

/* Conditional types Use case*/

// 1. Exclude null and undefined from a type
export type NoEmpty<T> = T extends null | undefined ? never : T;

type Example = NoEmpty<string | null>;
// Expanded as - NoEmpty<string>
// further - (string extends null | undefined ? never : string) | (null extends null | undefined ? never : string)

// 2nd one's true so final form is - string | never i.e. string eventually
