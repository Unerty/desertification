import * as React from "react";

interface IProps {
  cactooAmount: number;
  onInput: (event: any) => void;

}

const CactooAmountInput = (props: IProps) =>
  <div className={"rounded card cactoo-color"}>
    <span>Amount of cactoo: <strong> {props.cactooAmount}</strong></span>
    <input style={{ borderStyle: "unset", borderRadius: "10px" }}
           type="number" id="cactooAmountSelector" name="cactooAmountSelector" min="0" step="1" value={props.cactooAmount}
           onInput={(event) => props.onInput(event)}
           onChange={(event) => props.onInput(event)}
    />
  </div>;

export default CactooAmountInput;
