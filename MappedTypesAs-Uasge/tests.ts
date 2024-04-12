type State = {
    name: string;
    age: number;
}


// objective is to create setter for each func

// Deriving from the State type itself
type Setters = {
    [K in keyof State]: (value: State[K]) => void;
};

type SetProperty<K extends string> = `set${Capitalize<K>}`;

// example 
type ExampleName = SetProperty<'name'>; // setName

/* All of the above at once */

type MappedSetters = {
    [K in keyof State as `set${Capitalize<K>}`]: (value: State[K]) => void;
}

// Generic 


type GenericMappedSetters<State> = {
    [K in keyof State & string as `set${Capitalize<K>}`]: (value: State[K]) => void;
}; // & string implies map only over K types which are string as Capitalize isn't gonna work otherwise


