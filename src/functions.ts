import table from "./saturationVaporDensityTable";

export const saturationVaporDensity = (temperature: number) => { // for example, temperature = 58.2
  if (table.has(temperature)) {
    return table.get(temperature);
  } else {
    const floor = Math.floor(temperature); // 58
    const ceil = Math.ceil(temperature); // 59
    const howMuchInRange = temperature - floor; // 58.2 - 58 = 0.2

    try {
      const floorTemperature = table.get(floor); // 148.6
      const ceilTemperature = table.get(ceil); // 154.8
      const temperatureRange = ceilTemperature - floorTemperature; // 6.2
      const countedSaturationVaporDensity = floorTemperature + (temperatureRange * howMuchInRange); // 148.6 + (6.2 * 0.2) = 149.24
      return countedSaturationVaporDensity;
    } catch (e) {
      throw e;
    }
  }
};
