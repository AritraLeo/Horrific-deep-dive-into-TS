export class State<T> {
    constructor(public current: T) {}
    update(next: Partial<T>){ // Partial make the mapped types optional
        this.current = {...this.current, ...next};
    }
}


const state = new State({x: 0, y: 0});
state.update({y: 20});
console.log(state.current);
