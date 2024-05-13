require("../index");

describe("Custom Functions", () => {
    test("Compare map and customMap functions", () => {
        const array = [5, 4, 3, 2, 1];
        const mapResult = array.map((num) => num ** 2);
        const customMapResult = array.customMap((num) => num ** 2);
        expect(mapResult).toEqual(customMapResult);
    });
    test("Compare filter and customFilter functions", () => {
        const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        const filterResult = array.filter((num) => num % 2 != 0);
        const customFilterResult = array.customFilter((num) => num % 2 != 0);
        expect(filterResult).toEqual(customFilterResult);
    });
    test("Compare reduce and customReduce functions", () => {
        const array = [[1, 2], [3, 4], [5, 6]];
        const reduceResult = array.reduce((acc, subArr) => acc.concat(subArr), []);
        const customReduceResult = array.customReduce((acc, subArr) => acc.concat(subArr), []);
        expect(reduceResult).toEqual(customReduceResult);
    });
})