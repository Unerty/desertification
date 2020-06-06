import * as React from "react";

interface IProps {
  additionalWatering: number;
  onInput: (event: any) => void;

}

const AdditionalWateringInput = (props: IProps) =>
  <div className={"input-card water-color"}>
    <span>AdditionalWatering: <strong> {props.additionalWatering} mm/year</strong></span>
    <input style={{ borderStyle: "unset", borderRadius: "10px" }}
           type="number" id="additionalWateringSelector" name="additionalWateringSelector" min="0" max="2000000" step="1000" value={props.additionalWatering}
           onInput={(event) => props.onInput(event)}
           onChange={(event) => props.onInput(event)}
    />
  </div>;

export default AdditionalWateringInput;
