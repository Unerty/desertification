import * as React from "react";

interface IProps {
  waterIncome: number;

}

const WaterIncome = (props: IProps) =>
  <div className={"rounded card water-color"}>
    <span>Water Income: <strong> {props.waterIncome} mm/year</strong></span>
  </div>;

export default WaterIncome;
