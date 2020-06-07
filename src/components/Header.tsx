import Link from "gatsby-link";
import * as React from "react";

const STOP_SYMBOL = "▶️";
const PLAY_SYMBOL = "⏸️";

interface IProps {
  year: number;
  isPlaying: boolean;
  onPlayButtonClick: () => void;
}

const Header = (props: IProps) => (
  <div className={"header"}>
    <div
      style={{
        marginLeft: "0.7rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textDecoration: "none",
        minWidth: "12rem",
        width: "fit-content"
      }}
    >
      <h1 style={{ margin: 0 }}>
        {`Year: ${props.year}`}
      </h1>
    </div>
    <div className="playbackSymbol"
         style={{
           display: "flex",
           flexDirection: "column",
           justifyContent: "center",
           color: "white",
           textDecoration: "none",
           width: "fit-content"

         }}
    >
      <h1 style={{
        margin: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 0,
        marginBottom: "0.1rem",
        cursor: "pointer"
      }}
          onClick={() => props.onPlayButtonClick()}>
        {props.isPlaying ? STOP_SYMBOL : PLAY_SYMBOL}
      </h1>
    </div>

  </div>
);

export default Header;
