import * as React from "react";
import { saturationVaporDensity } from "../functions";
import TemperatureInput from "../components/inputs/TemperatureInput";
import TerritoryInput from "../components/inputs/TerritoryInput";
import TreeAmountInput from "../components/inputs/TreeAmountInput";
import BushesAmountInput from "../components/inputs/BushesAmountInput";
import TreeCuttingInput from "../components/inputs/TreeCuttingInput";
import TreePlantingInput from "../components/inputs/TreePlantingInput";
import PrecipationInput from "../components/inputs/PrecipationInput";
import AdditionalWateringInput from "../components/inputs/AdditionalWateringInput";
import RelativeHumidity from "../components/countedResults/RelativeHumidity";
import AbsoluteHumidity from "../components/countedResults/AbsoluteHumidity";
import Volatility from "../components/countedResults/Volatility";

interface IProps {
}

interface IState {
  territory: number; // INPUT Area in square kilometres
  averageTemperature: number; // INPUT Average yearly temperature
  treeAmount: number; // INPUT Amount of trees on the territory
  treeCutting: number; // INPUT How much of trees is cut every year
  treePlanting: number; // INPUT Trees planted per year
  bushesAmount: number; // INPUT Amount of trees on the territory
  precipation: number; // INPUT Measured in mm. Sahara: 25-200, Kalahari: 100-500, Atakama: 25
  additionalWatering: number; // INPUT Measured in mm. Is added to precipation. May be a river or whatever
  relativeHumidity: number; // absoluteHumidity/saturationVaporDensity
  volatility: number; // How much humidity (in mm) is able to vaporize from all the surface
  absoluteHumidity: number; // Measured in grams per one meter cubic of air
}


export default class extends React.Component<IProps, IState> {
  constructor(props: IProps, context: any) {
    super(props, context);
    this.state = {
      territory: 124000, // Area of Mojave desert in square kilometres
      averageTemperature: Number(25), // Avg temp of Mojave Desert
      treeAmount: 3000,
      treeCutting: 0,
      treePlanting: 0,
      bushesAmount: 5000,
      precipation: 150,
      additionalWatering: 0,
      relativeHumidity: 0, // non-input
      volatility: 0, // non-input
      absoluteHumidity: 0 // non-input
    };
  }

  countAbsoluteHumidity = async (): Promise<number> => await((this.state.treeAmount * 365.25) + (this.state.bushesAmount * 365.25)) / (this.state.territory); // ((treeAmount * daysInYear * howMuchEachTreeVaporizesPerDayInGrams) + (same for bushes)) / (height * SQkmToSQmetersCoefficient * desertTerritory)

  countRelativeHumidity = async (): Promise<number> => await (await this.countAbsoluteHumidity() / saturationVaporDensity(this.state.averageTemperature)); // https://www.yaklass.ru/p/fizika/8-klass/izmenenie-sostoianiia-veshchestva-141552/otnositelnaia-vlazhnost-vozdukha-i-ee-izmerenie-189576/re-18d24d91-b778-4262-983f-4e1101acae16

  countVolatility = async (): Promise<number> => {
    const addedAverageTemperature = 25 + this.state.averageTemperature;
    console.log(`addedAverageTemperature: ${addedAverageTemperature}`);
    console.log(`pow result: ${(Math.pow((addedAverageTemperature), 2))}`);
    console.log(`100 - rel.hum.: ${100 - await this.countRelativeHumidity()}`);
    return await ((0.01 * Math.pow(addedAverageTemperature, 2)) * (100 - await this.countRelativeHumidity()))// volatility http://meteorologist.ru/formula-isparyaemosti-ivanova.html
  };

  setAbsoluteHumidity = async (): Promise<void> => this.setState({ absoluteHumidity: await this.countAbsoluteHumidity() });

  setRelativeHumidity = async (): Promise<void> => this.setState({ relativeHumidity: await this.countRelativeHumidity() });

  setVolatility = async (): Promise<void> => await this.setState({ volatility: await this.countVolatility() });

  setCountedResults = (): void => {
    this.setAbsoluteHumidity().then(this.setRelativeHumidity).then(this.setVolatility).then(this.setRelativeHumidity).then(this.setAbsoluteHumidity);
  };


  public render() {
    return (
      <div>
        <h1>Input Data</h1>
        <div className={"group-of-cards"}>
          <TerritoryInput territory={this.state.territory}
                          onInput={(event: any) => {
                            this.setState({ territory: Number(event.target.value) });
                            this.setCountedResults();
                          }}/>
          <TemperatureInput temperature={this.state.averageTemperature}
                            onInput={(event: any) => {
                              this.setState({ averageTemperature: Number(event.target.value) });
                              this.setCountedResults();
                            }}/>
          <PrecipationInput precipation={this.state.precipation}
                            onInput={(event: any) => {
                              this.setState({ precipation: Number(event.target.value) });
                              this.setCountedResults();
                            }}/>
          <AdditionalWateringInput additionalWatering={this.state.additionalWatering}
                                   onInput={(event: any) => {
                                     this.setState({ additionalWatering: Number(event.target.value) });
                                     this.setCountedResults();
                                   }}/>
          <TreeAmountInput treeAmount={this.state.treeAmount}
                           onInput={(event: any) => {
                             this.setState({ treeAmount: Number(event.target.value) });
                             this.setCountedResults();
                           }}/>
          <TreeCuttingInput treeCutting={this.state.treeCutting}
                            onInput={(event: any) => {
                              this.setState({ treeCutting: Number(event.target.value) });
                              this.setCountedResults();
                            }}/>
          <TreePlantingInput treePlanting={this.state.treePlanting}
                             onInput={(event: any) => {
                               this.setState({ treePlanting: Number(event.target.value) });
                               this.setCountedResults();
                             }}/>
          <BushesAmountInput bushesAmount={this.state.bushesAmount}
                             onInput={(event: any) => {
                               this.setState({ bushesAmount: Number(event.target.value) });
                               this.setCountedResults();
                             }}/>
        </div>
        <h1>Counted Results</h1>
        <div className={"group-of-cards"}>
          <RelativeHumidity relativeHumidity={this.state.relativeHumidity}/>
          <AbsoluteHumidity absoluteHumidity={this.state.absoluteHumidity}/>
          <Volatility volatility={this.state.volatility}/>
        </div>
      </div>
    );
  }
}
