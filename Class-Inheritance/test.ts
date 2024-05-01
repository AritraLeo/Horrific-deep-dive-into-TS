import { ActivatableMixin, DisposableMixin } from "./main";

class Disposable {
    isDisposed: boolean = false;
    dispose() {
        this.isDisposed = true;
    }
}

class Activatable {
    isActive: boolean = false;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}

// class Example extends Disposable, Activatable // throws err can't extend 2 classes 

/*

const Example = DisposableMixin(ActivatableMixin(class {
    test: string = 'test';
}));

const example = new Example(); // creates the obj 

type Example = InstanceType<typeof Example>;

function takeExample(example: Example) {
    example.activate;
    console.log(example.test);
}

takeExample(example)
*/

// Other way around or better approach is to create a class of that type

class Example extends DisposableMixin(ActivatableMixin(class {})) {
    member = 123;
    constructor(){
        super();
        this.member;
        this.dispose;
        this.isActive;
    }
}

const example: Example = new Example();

console.log(example.member);

        