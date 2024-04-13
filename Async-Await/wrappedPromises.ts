namespace TestWrappedAwait {
    
    type Wrapped = Promise<Promise<Promise<Promise<string>>>>;
    
    // Use Awaited to infer the awaited result type
    type AwaitedResult = Awaited<Wrapped>;
    const typeOf: string = typeof ({} as AwaitedResult);
    console.log(typeof typeOf); // It should log "string" as the type of the awaited result
}

namespace TestWrappedAwait2 {
    type Wrapped = Promise<Promise<Promise<Promise<string>>>>;

    function getWrappedPromise(): Wrapped {
        return Promise.resolve(
            Promise.resolve(
                Promise.resolve(
                    Promise.resolve('This is the awaited string!')
                ).then(value => value)
            ).then(value => value)
        ).then(value => value) as Wrapped;
    }
    
    getWrappedPromise().then((wrappedPromise) => {
        console.log(wrappedPromise); // logs the string
    });
    
}

