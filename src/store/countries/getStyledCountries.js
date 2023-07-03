export const getStyledCountries = (countriesByCode) => {
  const acc = {};

  for (const countryCode in countriesByCode) {
    const styles = getCountryStyle(countriesByCode, countryCode);
    if (styles) acc[countryCode] = styles;
  }
  return acc;
};

const getCountryStyle = (countriesByCode, countryCode, year = 2022) => {
  const country = countriesByCode[countryCode];
  const stats = country.stats.find((stats) => stats.year === year);

  const styles = getPopulationStyles(stats.population);

  if (styles) {
    return styles;
  }

  return null;
};

const getPopulationStyles = (population) => {
  const rule = getPopulationRule(population);

  return rule ? getRuleStyles(rule) : getUndefinedStyles();
};

const getPopulationRule = (population) => {
  const rules = getSortedRulesArray();

  const rule = rules.find((rule) => {
    if (population >= rule) {
      // find first rule which applies
      return true;
    }
  });

  return rule ? rule : null;
};

const getSortedRulesArray = () => {
  return Object.keys(rules)
    .sort((a, b) => b - a)
    .map(Number);
};

const getRuleStyles = (rule) => {
  const styles = rules[rule];

  return { ...styles, hoverState: { backgroundColor: "#FF9B93" } };
};

const getUndefinedStyles = () => {
  return {
    backgroundColor: "black",
  };
};

const rules = {
  1000000000: {
    backgroundColor: "#FF9B93",
  },
  100000000: {
    backgroundColor: "#FFBE9F",
  },
  10000000: {
    backgroundColor: "#FFED8A",
  },
  1000000: {
    backgroundColor: "#99C99A",
  },
  100000: {
    backgroundColor: "#C4D4B2",
  },
};
