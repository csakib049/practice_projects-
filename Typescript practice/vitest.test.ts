import { describe, it, expect } from "vitest";

describe("Practicing ", () => {

    function boom(){
        throw new Error('Some thing is wrong');
    }


   
    it("to be truthy",()=>{
        expect(boom).toThrow();
    })

    
});