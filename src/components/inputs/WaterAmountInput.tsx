import * as React from "react";

interface IProps {
  waterAmount: number;
  onInput: (event: any) => void;

}

const WaterAmountInput = (props: IProps) =>
  <div className={"rounded card water-color"}>
    <span>WaterAmount area: <strong> {props.waterAmount} km²</strong></span>
    <input style={{ borderStyle: "unset", borderRadius: "10px" }}
           type="number" id="waterAmountSelector" name="waterAmountSelector" min="0" max="2000000" step="1" value={props.waterAmount}
           onInput={(event) => props.onInput(event)}
           onChange={(event) => props.onInput(event)}
    />
  </div>;

export default WaterAmountInput;
