import * as React from "react";

interface IProps {
  riskCategory: string;
}


const Header = (props: IProps) => {
  let risk = "";
  let biome = "";
  if (props.riskCategory === "cold-desert") {
    risk = "Very high";
    biome = "Cold desert";
  }
  if (props.riskCategory === "desert") {
    risk = "Very high";
    biome = "Desert";
  }
  if (props.riskCategory === "half-desert") {
    risk = "High";
    biome = "Half-desert";
  }
  if (props.riskCategory === "steppe") {
    risk = "Medium";
    biome = "Steppe";
  }
  if (props.riskCategory === "forest-steppe") {
    risk = "Moderate";
    biome = "Forest-steppe";
  }
  if (props.riskCategory === "cold-forest-steppe") {
    risk = "Moderate";
    biome = "Forest-steppe";
  }
  if (props.riskCategory === "forest") {
    risk = "Low";
    biome = "Forest";
  }
  if (props.riskCategory === "rainforest") {
    risk = "Low";
    biome = "Rainforest";
  }
  if (props.riskCategory === "wetland") {
    risk = "Low";
    biome = "Wetland";
  }
  return (
    <div className={"header"}>
      <h1>
        Risk: {risk}, Biome: {biome}
      </h1>
    </div>
  );
};

export default Header;
