import * as React from "react";

interface IProps {
  absoluteHumidity: number;

}

const AbsoluteHumidity = (props: IProps) =>
  <div className={"rounded card water-color"}>
    <span>Абсолютна вологість: <strong> {props.absoluteHumidity} г/м³</strong></span>
  </div>;

export default AbsoluteHumidity;
