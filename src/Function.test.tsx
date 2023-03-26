import { sumArray,minEvenNumber, mapperNumbers, sumMatrix } from "./util/functions"
test("test function sumArray", ()=>{
      const array: number[] = [1, 2, 3] ;
      expect(sumArray(array)).toEqual(6);
});
test("test function minEvenNumber with at least one even number", () =>{
        const array: number[] = [-1, 1, 2, 3, 0];
        expect(minEvenNumber(array)).toEqual(0)
});
test("test minEvenNumbers with no even number", ()=>{
        const array: number[] = [-1, 1,  3 ];
        expect (minEvenNumber(array)).toBeUndefined();

});
test("test mapper",() =>{
        const soursAr: number[] = [1, 2, 3];
        const expectedAr: number[] = [1, 4, 9];
        expect(mapperNumbers(soursAr, num => num **2)).toEqual(expectedAr)
});
test("test of sum matrix", ()=>{
        const matrix = [
                [1, 0, 0, 0, 1],
                [0, 0, 0, 0, 1],
        ];
        expect(sumMatrix(matrix)).toEqual(3);
})