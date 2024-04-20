/*  Interafces              |           Type
    Declaration Merging     |           Unions, Primitives
    Familiarity(extends)    |           Shorthand & Advanced Functions
*/

// Say from lib - 1 
interface Request {
    body: any
}

// Added params we want
interface Request {
    json: any;
}

function handleRequest(req: Request) {
    req.body;
    req.json;
}


type InputOnChangeHandler = (newValue: InputValueType) => void;

type InputValueType = string; // Interfaces don't allow aliasing of primitive types

type InputTypes = 'text' | 'email';

// Types

type InputProps = {
    type: InputTypes,
    value: InputValueType,
    onChange: InputOnChangeHandler
}
