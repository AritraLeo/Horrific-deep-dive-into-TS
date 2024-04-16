type Person = {
    name: string,
    age: number,
    location: string,
}

const me: Person = logger({
    name: 'Aritra',
    age: 20,
    location: 'Hooghly'
}, 'age');

me.age += 1; 


function logger<T>(obj: T, key: keyof T): T {
    console.log(obj);
    return obj;
}


