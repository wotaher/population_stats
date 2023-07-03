import data from "./data.json";

export const mapData = () => {
  const acc = {};

  for (const countryName in data) {
    const countryData = data[countryName];

    const countryCode = countryData["Country Code"];

    const statsKeys = Object.keys(countryData).filter(Number);

    const stats = statsKeys.map((key) => {
      return {
        year: Number(key),
        population: countryData[key],
      };
    });

    acc[countryName] = {
      countryCode,
      stats,
    };
  }

  return acc;
};
