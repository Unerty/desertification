import * as React from "react";

interface IProps {
  volatility: number;

}

const Volatility = (props: IProps) =>
  <div className={"rounded card water-color"}>
    <span>Volatility: <strong> {props.volatility} mm/year</strong></span>
  </div>;

export default Volatility;
