namespace TestAsyncAwait {
    
    main();
    
    async function main() {
        const single: Promise<string> = new Promise(res => res('tests'));
        
        const triple: Promise<Promise<Promise<string>>> =
        new Promise<Promise<Promise<string>>>(res =>
            res(
                new Promise<Promise<string>>(res => 
                    res(
                        new Promise<string>(res => {
                            res('Aritra')
                        })
                    )
                )
            )
        );
        
        const singleResult = await single;
        console.log(singleResult); // tests
        
        const tripleResult = await triple;
        console.log(tripleResult); // Aritra
        
    }
    
}