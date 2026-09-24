import { describe, it, expect } from "vitest";
import { sum, isAdult } from './vitest';


describe("function", () => {
    it("should add 2 numbers", () => {
        expect(sum(1, 2)).toBe(3);
    });

});


describe("Adult", () => {

    it("should return true if input>18 ", () => {
        expect(isAdult(19)).toBe(true);
    })

    it("should return true if input is 18",()=>{
        expect(isAdult(18)).toBe(true);
    })

    it("shold return false if input<18",()=>{
        expect(isAdult(17)).toBe(false);
    })
})

