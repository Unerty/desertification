import * as React from "react";

interface IProps {
  treeCutting: number;
  onInput: (event: any) => void;

}

const TreeCuttingInput = (props: IProps) =>
  <div className={"rounded card tree-color"}>
    <span>Trees cut every year: <strong> {props.treeCutting}</strong></span>
    <input style={{ borderStyle: "unset", borderRadius: "10px" }}
           type="number" id="treeCuttingSelector" name="treeCuttingSelector" min="0" max="2000000" step="1" value={props.treeCutting}
           onInput={(event) => props.onInput(event)}
           onChange={(event) => props.onInput(event)}
    />
  </div>;

export default TreeCuttingInput;
