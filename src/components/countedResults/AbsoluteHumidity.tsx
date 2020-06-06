import * as React from "react";

interface IProps {
  absoluteHumidity: number;

}

const AbsoluteHumidity = (props: IProps) =>
  <div className={"rounded card water-color"}>
    <span>Absolute Humidity: <strong> {props.absoluteHumidity} g/m³</strong></span>
  </div>;

export default AbsoluteHumidity;
