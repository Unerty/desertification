import * as React from "react";

interface IProps {
  relativeHumidity: number;

}

const RelativeHumidity = (props: IProps) =>
  <div className={"rounded card water-color"}>
    <span>Relative Humidity: <strong> {props.relativeHumidity}%</strong></span>
  </div>;

export default RelativeHumidity;
