describe('test custom class Array', () => {
    describe('test metod map of class Array', () => {
        test(()=>{
            expect(new A()).toBeInstanceOf(A);
            expect(() => {}).toBeInstanceOf(Function);
            expect(new A()).toBeInstanceOf(Function); // throws
        })
    })
 
})