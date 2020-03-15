describe("what Can I Drink", function () {
    describe("input age", function () {
        it("should return Sorry. I can’t tell what drink because that age is incorrect!", function(){
            expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});