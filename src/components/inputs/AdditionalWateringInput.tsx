import * as React from "react";

interface IProps {
  additionalWatering: number;
  onInput: (event: any) => void;

}

const AdditionalWateringInput = (props: IProps) =>
  <div className={"rounded card water-color"}>
    <span>Додаткове орошення: <strong> {props.additionalWatering} км³/рік</strong></span>
    <input style={{ borderStyle: "unset", borderRadius: "10px" }}
           type="number" id="additionalWateringSelector" name="additionalWateringSelector" min="0" step="1" value={props.additionalWatering}
           onInput={(event) => props.onInput(event)}
           onChange={(event) => props.onInput(event)}
    />
  </div>;

export default AdditionalWateringInput;
