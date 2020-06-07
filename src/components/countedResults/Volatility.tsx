import * as React from "react";

interface IProps {
  volatility: number;

}

const Volatility = (props: IProps) =>
  <div className={"rounded card water-color"}>
    <span>Volatility: <strong> {props.volatility==1? 0 : props.volatility} mm/year</strong></span>
  </div>;

export default Volatility;
