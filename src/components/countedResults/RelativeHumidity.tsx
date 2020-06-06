import * as React from "react";

interface IProps {
  relativeHumidity: number;

}

const RelativeHumidity = (props: IProps) =>
  <div className={"rounded card water-color"}>
    <span>Relative Humidity: <strong> {props.relativeHumidity} g/m³</strong></span>
  </div>;

export default RelativeHumidity;
