import * as React from "react";

interface IProps {
  humidificationIndex: number;

}

const HumidificationIndex = (props: IProps) =>
  <div className={"rounded card"}>
    <span>Індекс зволоження: <strong> {props.humidificationIndex} </strong></span>
  </div>;

export default HumidificationIndex;
