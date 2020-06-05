import * as React from "react";

interface IProps {
  temperature: number;
  onInput: (event:any) => void;

}

const TemperatureInput = (props: IProps) =>
  <div className={"input-card"}>
    <span>Temperature: <strong> {props.temperature} °C</strong></span>
    <input style={{width: "280px"}} type={"range"} id="temperatureSelector" name="temperatureSelector" min="-30" max="70" step="1"
           onInput={(event) => props.onInput(event)}
           onChange={(event) => props.onInput(event)}
    />
  </div>;

export default TemperatureInput;
