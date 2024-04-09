export type Name = {name: string};
export type Age = {age: number};

type Union = Name | Age;

type Intersection = Name & Age;

const name = {name: "Aritra"};
const age = {age: 20};
// Actually shouldn't happen according to TS we can't send both at the same time more on this in filter function (tragic prop)
const nameAndAge = {name: "Aritra", age: 20};

let union: Union;

// Unions
union = name;
union = age;
union = nameAndAge;

let intersection: Intersection;

// intersection = name; // throws error
// intersection = age; // throws error
intersection = nameAndAge; 


function filter(union: Union){
    if('name' in union){
        union.name;
    }

    if('age' in union){
        union.age;
    }

    // throws err
    if('name' in union && 'age' in union){
        union.name;
        union.age;
    }
}