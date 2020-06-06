import table from "./saturationVaporDensityTable";

export const saturationVaporDensity = (temperature: number) => { // for example, temperature = 58.2
  if (table.has(temperature)) {
    return table.get(temperature);
  } else {
    console.log(`Temperature: ${temperature}, SVD: ${table.get(Math.floor(temperature))}`);
    return table.get(Math.floor(temperature));
    }
};
