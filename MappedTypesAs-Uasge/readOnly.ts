type Point = {
    x: number,
    y: number
}

type ReadOnlyPoint = Readonly<Point>;

type MappedPoint<T> = {
    readonly [Key in keyof T]: T[Key] // Make a map of types - where Key is param/key of type T with the modifier it has in T
}


export const origin: MappedPoint<Point> = {
    x: 0,
    y: 0
}

// origin.x = 100; // throws error as readonly 