import table from "./saturationVaporDensityTable";

const WATER_VAPORIZES_PER_YEAR_PER_ONEM2_WHEN_30DEGREES = Number(1507752); // grams per year when 30 degrees

export const saturationVaporDensity = (temperature: number) => { // for example, temperature = 58.2
  if (table.has(temperature)) {
    return table.get(temperature);
  } else {
    console.log(`Temperature: ${temperature}, SVD: ${table.get(Math.floor(temperature))}`);
    return table.get(Math.floor(temperature));
  }
};

export const waterVaporizingCoefficient = (temperature: number):number => { // how much water is vaporized per 1 km2 per year depending on the temperature
  return (temperature >= 0) ? Number((WATER_VAPORIZES_PER_YEAR_PER_ONEM2_WHEN_30DEGREES * saturationVaporDensity(temperature))) / 30.3 : Number((WATER_VAPORIZES_PER_YEAR_PER_ONEM2_WHEN_30DEGREES * saturationVaporDensity(temperature)))/(1000000*30.3)
};
