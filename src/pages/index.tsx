import * as React from "react";
import { saturationVaporDensity } from "../functions";
import TemperatureInput from "../components/TemperatureInput";

interface IProps {
}

interface IState {
  averageTemperature: number; // INPUT Average yearly temperature
  absoluteHumidity: number; // INPUT Measured in grams per one meter cubic of air
  treeAmount: number; // INPUT Amount of trees on the territory
  treeCutting: number; // INPUT How much of trees is cut every year
  treePlanting: number; // INPUT Trees planted per year
  precipation: number; // INPUT Measured in mm. Sahara: 25-200, Kalahari: 100-500, Atakama: 25
  additionalWatering: number; // INPUT Measured in mm. Is added to precipation. May be a river or whatever
  relativeHumidity: number;
  volatility: number;
}


export default class extends React.Component<IProps, IState> {
  constructor(props: IProps, context: any) {
    super(props, context);
    this.state = {
      averageTemperature: 30,
      absoluteHumidity: 0,
      treeAmount: 1000,
      treeCutting: 0,
      treePlanting: 0,
      precipation: 50,
      additionalWatering: 0,
      relativeHumidity: 0,
      volatility: 0
    };
  }

  countRelativeHumidity = (): number => this.state.absoluteHumidity / saturationVaporDensity(this.state.averageTemperature); // https://www.yaklass.ru/p/fizika/8-klass/izmenenie-sostoianiia-veshchestva-141552/otnositelnaia-vlazhnost-vozdukha-i-ee-izmerenie-189576/re-18d24d91-b778-4262-983f-4e1101acae16

  countVolatility = (): number => 0.0018 * (Math.pow(25 + this.state.averageTemperature, 2) * (100 - this.state.relativeHumidity)); // volatility http://meteorologist.ru/formula-isparyaemosti-ivanova.html


  public render() {
    return (
      <div>
        <h1>Input Data</h1>
        <TemperatureInput temperature={this.state.averageTemperature} onInput={(event: any) => this.setState({averageTemperature: event.target.value})}/>
      </div>
    );
  }
}
