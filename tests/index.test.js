const {
  selectPopulationOfFrance,
  selectPopulationOfGermany,
  smallWithHighGNP,
  scandinavia,
  startsWithG,
  endsWithY,
  top10BiggestInPopulation,
  top10SmallestInPopulation,
  top5LongestLifeExpectancy,
  largerThanFrance,
} = require("../exercises");

const rankOf = (result, countryName) =>
  result.findIndex((country) => country.name === countryName);

describe("EXAMPLE: selectPopulationOfFrance", () => {
  it("returns the correct result", async () => {
    const result = await selectPopulationOfFrance();
    const france = result.find((country) => country["name"] === "France");

    expect(result).toHaveLength(1);
    expect(france).toBeTruthy();
    expect(france.population).toEqual(59225700);
  });
});

describe("selectPopulationOfGermany", () => {
  it("returns the correct result", async () => {
    const result = await selectPopulationOfGermany();
    const germany = result.find((country) => country["name"] === "Germany");

    expect(result).toHaveLength(1);
    expect(germany).toBeTruthy();
    expect(germany.population).toEqual(82164700);
  });
});

describe("smallWithHighGNP", () => {
  it("returns the correct result", async () => {
    const result = await smallWithHighGNP();
    const randomCountryThatShouldExist = result.find(
      (country) => country["name"] === "Singapore"
    );

    expect(result).toHaveLength(17);
    expect(randomCountryThatShouldExist).toBeTruthy();
  });
});

describe("scandinavia", () => {
  it("returns the correct result", async () => {
    const result = await scandinavia();
    const countries = result.reduce((acc, el) => {
      acc[el.name] = true;
      return acc;
    }, {});

    expect(result).toHaveLength(3);
    expect(countries["Sweden"]).toBe(true);
    expect(countries["Norway"]).toBe(true);
    expect(countries["Denmark"]).toBe(true);
  });
});

describe("startsWithG", () => {
  it("returns the correct result", async () => {
    const result = await startsWithG();
    const allStartsWithG = result.every(({ name }) => name.startsWith("G"));

    expect(result).toHaveLength(15);
    expect(allStartsWithG).toBe(true);
  });
});

describe("endsWithY", () => {
  it("returns the correct result", async () => {
    const result = await endsWithY();
    const allEndsWithY = result.every(({ name }) => name.endsWith("y"));

    expect(result).toHaveLength(8);
    expect(allEndsWithY).toBe(true);
  });
});

describe("top10BiggestInPopulation", () => {
  it("returns the correct result", async () => {
    const result = await top10BiggestInPopulation();

    expect(result).toHaveLength(10);
    expect(rankOf(result, "China")).toBe(0);
    expect(rankOf(result, "Nigeria")).toBe(9);
  });
});

describe("top5LongestLifeExpectancy", () => {
  it("returns the correct result", async () => {
    const result = await top5LongestLifeExpectancy();

    expect(result).toHaveLength(5);
    expect(rankOf(result, "Andorra")).toBe(0);
    expect(rankOf(result, "Singapore")).toBe(4);
  });
});

describe("top10SmallestInPopulation", () => {
  it("returns the correct result", async () => {
    const result = await top10SmallestInPopulation();

    expect(result).toHaveLength(10);
    expect(rankOf(result, "Pitcairn")).toBe(0);
    expect(rankOf(result, "Saint Helena")).toBe(9);
  });
});

describe("largerThanFrance", () => {
  it("returns the correct result", async () => {
    const result = await largerThanFrance();

    expect(result).toHaveLength(20);
  });
});
