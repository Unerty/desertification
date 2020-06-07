import * as React from "react";

interface IProps {
  riskCategory: string;
}


const Header = (props: IProps) => {
  let risk = "";
  let biome = "";
  if (props.riskCategory === "cold-desert") {
    risk = "Дуже високий";
    biome = "Холодна пустеля";
  }
  if (props.riskCategory === "desert") {
    risk = "Дуже високий";
    biome = "Пустеля";
  }
  if (props.riskCategory === "half-desert") {
    risk = "Високий";
    biome = "Напівпустеля";
  }
  if (props.riskCategory === "steppe") {
    risk = "Середній";
    biome = "Степ";
  }
  if (props.riskCategory === "forest-steppe") {
    risk = "Помірний";
    biome = "Лісостеп";
  }
  if (props.riskCategory === "cold-forest-steppe") {
    risk = "Помірний";
    biome = "Лісостеп";
  }
  if (props.riskCategory === "forest") {
    risk = "Низький";
    biome = "Ліс";
  }
  if (props.riskCategory === "rainforest") {
    risk = "Низький";
    biome = "Джунглі";
  }
  if (props.riskCategory === "wetland") {
    risk = "Низький";
    biome = "Болото";
  }
  return (
    <div className={"header"}>
      <h1>
        Ризик: {risk}, Біом: {biome}
      </h1>
    </div>
  );
};

export default Header;
