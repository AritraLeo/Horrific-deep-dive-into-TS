let jsStringLiteral = "hello";
jsStringLiteral = 'hey';

let jsTemplateLiteral = `Example - ${jsStringLiteral}`;

console.log("String -" + jsStringLiteral);
console.log("Template -" + jsTemplateLiteral);


/* Difference with TS where we can set the type of var to be a literal kind of like a pattern match */

let str: string;
str = 'test TS string';

let strLiteral: 'hello';
strLiteral = 'hello';
// strLiteral = 'other things'; // throws error as it's not hello

let templateLiteral: `Example: ${string}`; // accepts any literal/string with pattern Example: 'any string'

templateLiteral = 'Example: hello';
// templateLiteral = 'not Example in prefix' // throws error
