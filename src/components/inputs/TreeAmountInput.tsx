import * as React from "react";

interface IProps {
  treeAmount: number;
  onInput: (event: any) => void;

}

const TreeAmountInput = (props: IProps) =>
  <div className={"rounded card tree-color"}>
    <span>Кількість дерев: <strong> {props.treeAmount}</strong></span>
    <input style={{ borderStyle: "unset", borderRadius: "10px" }}
           type="number" id="treeAmountSelector" name="treeAmountSelector" min="0" step="1" value={props.treeAmount}
           onInput={(event) => props.onInput(event)}
           onChange={(event) => props.onInput(event)}
    />
  </div>;

export default TreeAmountInput;
