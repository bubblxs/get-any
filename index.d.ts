interface Array<T> {
    /**
    get a random item from an array
    
    @returns a random value from an array.
    
    @example
    ```
    import "get-any";
    
    const arr = [1, 2, 3];
    
    console.log(arr.getAny()); // 3
    
    */
    getAny(): any;
}