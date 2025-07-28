import { sum } from "../sum"

test("To test the sum of the number", () => {

    const result = sum(3, 4)
    
    //Assertion
    expect(result).toBe(7)
})