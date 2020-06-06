import * as React from "react";

interface IProps {
  treePlanting: number;
  onInput: (event: any) => void;

}

const TreePlantingInput = (props: IProps) =>
  <div className={"rounded card tree-color"}>
    <span>Trees planted every year: <strong> {props.treePlanting}</strong></span>
    <input style={{ borderStyle: "unset", borderRadius: "10px" }}
           type="number" id="treePlantingSelector" name="treePlantingSelector" min="0" max="2000000" step="1" value={props.treePlanting}
           onInput={(event) => props.onInput(event)}
           onChange={(event) => props.onInput(event)}
    />
  </div>;

export default TreePlantingInput;
