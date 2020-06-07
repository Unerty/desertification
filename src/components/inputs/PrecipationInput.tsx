import * as React from "react";

interface IProps {
  precipation: number;
  onInput: (event: any) => void;

}

const PrecipationInput = (props: IProps) =>
  <div className={"rounded card water-color"}>
    <span>Опади: <strong> {props.precipation} мм/рік</strong></span>
    <input style={{ borderStyle: "unset", borderRadius: "10px" }}
           type="number" id="precipationSelector" name="precipationSelector" min="0" step="1" value={props.precipation}
           onInput={(event) => props.onInput(event)}
           onChange={(event) => props.onInput(event)}
    />
  </div>;

export default PrecipationInput;
