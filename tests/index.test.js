require("../index");

describe("Custom Functions", () => {
    test("Compare map and customMap functions", () => {
        const array = [5, 4, 3, 2, 1];
        const mapResult = array.map((num) => num ** 2);
        const customMapResult = array.customMap((num) => num ** 2);
        expect(mapResult).toEqual(customMapResult);
    })
})