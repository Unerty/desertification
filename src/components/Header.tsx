import Link from "gatsby-link";
import * as React from "react";

const Header = () => (
  <div className={"header"}>
    <h1 style={{ margin: 0}}>
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none"
        }}
      >
        Desertification
      </Link>
    </h1>
  </div>
);

export default Header;
