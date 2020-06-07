import * as React from "react";

interface IProps {
  waterIncome: number;

}

const WaterIncome = (props: IProps) =>
  <div className={"rounded card water-color"}>
    <span>Прихід води: <strong> {props.waterIncome} мм/рік</strong></span>
  </div>;

export default WaterIncome;
