import * as React from "react";

interface IProps {
  relativeHumidity: number;

}

const RelativeHumidity = (props: IProps) =>
  <div className={"rounded card water-color"}>
    <span>Відносна вологість: <strong> {props.relativeHumidity}%</strong></span>
  </div>;

export default RelativeHumidity;
