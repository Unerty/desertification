import * as React from "react";
import { saturationVaporDensity } from "../functions";
import TemperatureInput from "../components/TemperatureInput";
import TerritoryInput from "../components/TerritoryInput";
import TreeAmountInput from "../components/TreeAmountInput";

interface IProps {
}

interface IState {
  territory: number; // INPUT Area in square kilometres
  averageTemperature: number; // INPUT Average yearly temperature
  treeAmount: number; // INPUT Amount of trees on the territory
  bushAmount: number; // INPUT Amount of trees on the territory
  treeCutting: number; // INPUT How much of trees is cut every year
  treePlanting: number; // INPUT Trees planted per year
  precipation: number; // INPUT Measured in mm. Sahara: 25-200, Kalahari: 100-500, Atakama: 25
  additionalWatering: number; // INPUT Measured in mm. Is added to precipation. May be a river or whatever
  relativeHumidity: number; //
  volatility: number; // How much humidity (in mm) is able to vaporize from all the surface
  absoluteHumidity: number; // Measured in grams per one meter cubic of air
}


export default class extends React.Component<IProps, IState> {
  constructor(props: IProps, context: any) {
    super(props, context);
    this.state = {
      territory: 35000, // Area of Mojave desert in square kilometres
      averageTemperature: 25, // Avg temp of Mojave Desert
      treeAmount: 3000,
      bushAmount: 5000,
      treeCutting: 0,
      treePlanting: 0,
      precipation: 150,
      additionalWatering: 0,
      relativeHumidity: 0, // non-input
      volatility: 0, // non-input
      absoluteHumidity: 0 // non-input
    };
  }

  countRelativeHumidity = (): number => this.state.absoluteHumidity / saturationVaporDensity(this.state.averageTemperature); // https://www.yaklass.ru/p/fizika/8-klass/izmenenie-sostoianiia-veshchestva-141552/otnositelnaia-vlazhnost-vozdukha-i-ee-izmerenie-189576/re-18d24d91-b778-4262-983f-4e1101acae16

  countVolatility = (): number => 0.0018 * (Math.pow(25 + this.state.averageTemperature, 2) * (100 - this.state.relativeHumidity)); // volatility http://meteorologist.ru/formula-isparyaemosti-ivanova.html

  countAbsoluteHumidity = (): number => ((this.state.treeAmount * 365.25 * 1000000) + (this.state.bushAmount * 365.25 * 1000000)) / (100 * 1000000 * this.state.territory); // ((treeAmount * daysInYear * howMuchEachTreeVaporizesPerDayInGrams) + (same for bushes)) / (height * SQkmToSQmetersCoefficient * desertTerritory)

  public render() {
    return (
      <div>
        <h1>Input Data</h1>
        <TerritoryInput territory={this.state.territory}
                        onInput={(event: any) => this.setState({ territory: event.target.value })}/>
        <TreeAmountInput treeAmount={this.state.treeAmount}
                        onInput={(event: any) => this.setState({ treeAmount: event.target.value })}/>
        <TemperatureInput temperature={this.state.averageTemperature}
                          onInput={(event: any) => this.setState({ averageTemperature: event.target.value })}/>
      </div>
    );
  }
}
