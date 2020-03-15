describe("what Can I Drink", function () {
    describe("input age", function () {
        it("should return Sorry. I can’t tell what drink because that age is incorrect!", function () {
            expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("If the age is less than 14, then it should return Drink Toddy", function () {
            expect(whatCanIDrink(13)).toBe("Drink Toddy");
        });
        it("If the age is less than 18, then it should return Drink Coke", function () {
            expect(whatCanIDrink(17)).toBe("Drink Coke");
        });
        it("If the age is less than 21, then it should return Drink Beer", function () {
            expect(whatCanIDrink(20)).toBe("Drink Beer");
        });
        it("If the age is less than 130, then it should return Drink Whisky", function () {
            expect(whatCanIDrink(45)).toBe("Drink Whisky");
        });
        it("If the age is not an age, then it should return Drink Whisky", function () {
            expect(whatCanIDrink("anyString")).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});