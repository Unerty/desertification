// https://cyberleninka.ru/article/n/dnevnoy-rashod-vody-na-transpiratsiyu-tselym-drevesnym-rasteniem
// https://studfile.net/preview/5707905/page:3/ - about volatility
// http://sun.tsu.ru/mminfo/000063105/274/image/274-136.pdf and http://www.kovas.ru/pdf1/40.pdf about water vaporizing
// (0.172*24*365.25)*1000


import * as React from "react";
import { saturationVaporDensity, waterVaporizingCoefficient } from "../functions";
import TemperatureInput from "../components/inputs/TemperatureInput";
import TerritoryInput from "../components/inputs/TerritoryInput";
import TreeAmountInput from "../components/inputs/TreeAmountInput";
import CactooAmountInput from "../components/inputs/CactooAmountInput";
import TreeCuttingInput from "../components/inputs/TreeCuttingInput";
import TreePlantingInput from "../components/inputs/TreePlantingInput";
import PrecipationInput from "../components/inputs/PrecipationInput";
import AdditionalWateringInput from "../components/inputs/AdditionalWateringInput";
import RelativeHumidity from "../components/countedResults/RelativeHumidity";
import AbsoluteHumidity from "../components/countedResults/AbsoluteHumidity";
import Volatility from "../components/countedResults/Volatility";
import WaterAmountInput from "../components/inputs/WaterAmountInput";
import WaterIncome from "../components/countedResults/WaterIncome";
import HumidificationIndex from "../components/countedResults/HumidificationIndex";

const CACTOO_VAPORIZES_PER_YEAR = 6000; // grams per year https://books.google.com.ua/books?id=cgo0ukOa_gIC&pg=PA9&lpg=PA9&dq=%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE+%D0%BA%D0%B0%D0%BA%D1%82%D1%83%D1%81%D0%BE%D0%B2+%D0%B2+%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9+%D0%BF%D1%83%D1%81%D1%82%D1%8B%D0%BD%D0%B5&source=bl&ots=6FQXLOTKi6&sig=ACfU3U3f1b84bYd4NhgYaQFfiwywuMDKxQ&hl=ru&sa=X&ved=2ahUKEwid-7aZ2O3pAhWnk4sKHcG3BW8Q6AEwBXoECAkQAQ#v=onepage&q=%D0%B8%D1%81%D0%BF%D0%B0%D1%80%D1%8F%D0%B5%D1%82%20%D0%BA%D0%B0%D0%BA%D1%82%D1%83%D1%81&f=false
const TREE_VAPORIZES_PER_DAY = 400000; //grams per day https://cyberleninka.ru/article/n/dnevnoy-rashod-vody-na-transpiratsiyu-tselym-drevesnym-rasteniem
const CLOUD_HEIGHT = 5000; // meters https://public.wmo.int/ru/%D0%B2%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D1%8B%D0%B9-%D0%BC%D0%B5%D1%82%D0%B5%D0%BE%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B4%D0%B5%D0%BD%D1%8C-2017-%D0%B3/%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D0%BA%D0%BE%D0%B2#:~:text=%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BE%D0%B1%D0%BB%D0%B0%D0%BA%D0%BE%D0%B2%20%D0%B2%D0%B5%D1%80%D1%85%D0%BD%D0%B5%D0%B3%D0%BE%20%D1%8F%D1%80%D1%83%D1%81%D0%B0%2C%20%D0%BA%D0%B0%D0%BA,%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%B2%20(6%20500%20%D1%84%D1%83%D1%82%D0%BE%D0%B2).
const DESERT_HUMIDIFICATION_INDEX = 0.15; // something is a desert if (precipation + extra water) / volatility < 0.15 https://ru.wikipedia.org/wiki/%D0%9F%D1%83%D1%81%D1%82%D1%8B%D0%BD%D1%8F
const VOLGA_RIVER_YEARLY_WATERFLOW = 254; // km3/year (8060 m3/sec) https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D1%80%D0%B5%D0%BA_%D0%BF%D0%BE_%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D0%B8

interface IProps {
}

interface IState {
  territory: number; // INPUT Area in square kilometres
  averageTemperature: number; // INPUT Average yearly temperature
  treeAmount: number; // INPUT Amount of trees on the territory
  treeCutting: number; // INPUT How much of trees is cut every year
  treePlanting: number; // INPUT Trees planted per year
  cactooAmount: number; // INPUT Amount of trees on the territory
  precipation: number; // INPUT Measured in mm. Sahara: 25-200, Kalahari: 100-500, Atakama: 25
  waterAmount: number // INPUT Measured in square kilometres
  additionalWatering: number; // INPUT Measured in mm. Is added to precipation. May be a river or whatever
  relativeHumidity: number; // absoluteHumidity/saturationVaporDensity
  volatility: number; // How much humidity (in mm) is able to vaporize from all the surface
  absoluteHumidity: number; // Measured in grams per one meter cubic of air
  waterIncome: number // how much water comes each year
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
      cactooAmount: 5000,
      precipation: 150,
      additionalWatering: VOLGA_RIVER_YEARLY_WATERFLOW,
      waterAmount: 13,
      relativeHumidity: 0, // non-input
      volatility: 0, // non-input
      absoluteHumidity: 0, // non-input
      waterIncome: 0 // non-input
    };
  }

  countAbsoluteHumidity = async (): Promise<number> => {
    return await ((Number(this.state.treeAmount * TREE_VAPORIZES_PER_DAY / CLOUD_HEIGHT * 365.25 + this.state.cactooAmount * CACTOO_VAPORIZES_PER_YEAR / CLOUD_HEIGHT)) + Number(this.state.waterAmount) * waterVaporizingCoefficient(this.state.averageTemperature) * 50) / (this.state.territory * CLOUD_HEIGHT); // ((treeAmount * daysInYear * howMuchEachTreeVaporizesPerDayInGrams) + (same for cactoo)) / (height * SQkmToSQmetersCoefficient * desertTerritory)
  };
  countRelativeHumidity = async (): Promise<number> => await (await this.countAbsoluteHumidity() / saturationVaporDensity(this.state.averageTemperature)); // https://www.yaklass.ru/p/fizika/8-klass/izmenenie-sostoianiia-veshchestva-141552/otnositelnaia-vlazhnost-vozdukha-i-ee-izmerenie-189576/re-18d24d91-b778-4262-983f-4e1101acae16

  countVolatility = async (): Promise<number> => {
    const addedAverageTemperature = 25 + this.state.averageTemperature;
    return await Math.max(((0.01 * Math.pow(addedAverageTemperature, 2)) * (100 - await this.countRelativeHumidity())), 0.01);// volatility http://meteorologist.ru/formula-isparyaemosti-ivanova.html
  };

  countWaterIncome = (): number => (Number(this.state.precipation) + (1000 * (Number(this.state.additionalWatering) / Number(this.state.territory))) - ((Number(this.state.waterAmount) * waterVaporizingCoefficient(Number(this.state.averageTemperature))) / (Number(this.state.territory) * 100000)));

  setAbsoluteHumidity = async (): Promise<void> => this.setState({ absoluteHumidity: await this.countAbsoluteHumidity() });

  setRelativeHumidity = async (): Promise<void> => this.setState({ relativeHumidity: await this.countRelativeHumidity() });

  setVolatility = async (): Promise<void> => await this.setState({ volatility: await this.countVolatility() });

  setWaterIncome = async (): Promise<void> => await this.setState({ waterIncome: await this.countWaterIncome() });

  setCountedResults = (): void => {
    this.setAbsoluteHumidity().then(this.setRelativeHumidity).then(this.setVolatility).then(this.setRelativeHumidity).then(this.setAbsoluteHumidity).then(this.setWaterIncome);
  };


  public render() {
    const humidificationIndex = this.countWaterIncome() / this.state.volatility; // (precipation + extra water) / volatility < 0.15
    let backgroundStyle = "";

    if (this.state.averageTemperature < 1) {
      backgroundStyle = "cold-desert";
    } else {
      if (humidificationIndex <= 0.15) {
        backgroundStyle = "desert";
      }
      if (humidificationIndex > 0.15 && humidificationIndex <= 0.4) {
        backgroundStyle = "moderate";
      }
      if (humidificationIndex > 0.4 && humidificationIndex <= 1) {
        backgroundStyle = "rainforest";
      }
      if (humidificationIndex > 1) {
        backgroundStyle = "rain";
      }
    }
    return (
      <div>
        <div className={`background-image + ${backgroundStyle}`} />
        <h1>Input Data</h1>
        <div className={"group-of-cards"}>
          <TerritoryInput territory={this.state.territory}
                          onInput={(event: any) => {
                            this.setState({ territory: Number(event.target.value) });
                            this.setCountedResults();
                          }}/>
          <WaterAmountInput waterAmount={this.state.waterAmount}
                            onInput={(event: any) => {
                              this.setState({ waterAmount: Number(event.target.value) });
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
          <CactooAmountInput cactooAmount={this.state.cactooAmount}
                             onInput={(event: any) => {
                               this.setState({ cactooAmount: Number(event.target.value) });
                               this.setCountedResults();
                             }}/>
        </div>
        <h1>Counted Results</h1>
        <div className={"group-of-cards"}>
          <RelativeHumidity relativeHumidity={this.state.relativeHumidity}/>
          <AbsoluteHumidity absoluteHumidity={this.state.absoluteHumidity}/>
          <Volatility volatility={this.state.volatility}/>
          <WaterIncome waterIncome={this.state.waterIncome}/>
          <HumidificationIndex humidificationIndex={humidificationIndex}/>
        </div>
        <div className="cold-desert"/>
        <div className="desert"/>
        <div className="moderate"/>
        <div className="rainforest"/>
        <div className="rain"/>
      </div>
    );
  }
}

