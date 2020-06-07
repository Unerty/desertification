import * as React from "react";

interface IProps {
  waterAmount: number;
  onInput: (event: any) => void;

}

const WaterAmountInput = (props: IProps) =>
  <div className={"rounded card water-color"}>
    <span>Площа водоймищ: <strong> {props.waterAmount} км²</strong></span>
    <input style={{ borderStyle: "unset", borderRadius: "10px" }}
           type="number" id="waterAmountSelector" name="waterAmountSelector" min="0" step="1" value={props.waterAmount}
           onInput={(event) => props.onInput(event)}
           onChange={(event) => props.onInput(event)}
    />
  </div>;

export default WaterAmountInput;
