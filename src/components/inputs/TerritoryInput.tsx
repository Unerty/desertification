import * as React from "react";

interface IProps {
  territory: number;
  onInput: (event: any) => void;

}

const TerritoryInput = (props: IProps) =>
  <div className={"rounded card"}>
    <span>Territory area: <strong> {props.territory} km²</strong></span>
    <input style={{ borderStyle: "unset", borderRadius: "10px" }}
           type="number" id="territorySelector" name="territorySelector" min="0" step="1" value={props.territory}
           onInput={(event) => props.onInput(event)}
           onChange={(event) => props.onInput(event)}
    />
  </div>;

export default TerritoryInput;
