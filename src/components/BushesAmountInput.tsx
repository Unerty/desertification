import * as React from "react";

interface IProps {
  bushesAmount: number;
  onInput: (event: any) => void;

}

const BushesAmountInput = (props: IProps) =>
  <div className={"rounded card bush-color"}>
    <span>Amount of bushess: <strong> {props.bushesAmount}</strong></span>
    <input style={{ borderStyle: "unset", borderRadius: "10px" }}
           type="number" id="bushesAmountSelector" name="bushesAmountSelector" min="0" max="2000000" step="1" value={props.bushesAmount}
           onInput={(event) => props.onInput(event)}
           onChange={(event) => props.onInput(event)}
    />
  </div>;

export default BushesAmountInput;
