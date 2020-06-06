import * as React from "react";

interface IProps {
  precipation: number;
  onInput: (event: any) => void;

}

const PrecipationInput = (props: IProps) =>
  <div className={"rounded card water-color"}>
    <span>Precipation: <strong> {props.precipation} mm/year</strong></span>
    <input style={{ borderStyle: "unset", borderRadius: "10px" }}
           type="number" id="precipationSelector" name="precipationSelector" min="0" max="2000" step="1" value={props.precipation}
           onInput={(event) => props.onInput(event)}
           onChange={(event) => props.onInput(event)}
    />
  </div>;

export default PrecipationInput;
