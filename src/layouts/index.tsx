import * as React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./index.css";

const Header = () => (
  <div className={"header"}
    style={{
      background: "sandybrown",
    }}
  >
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

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        <Helmet
          title="Desertification"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <Header/>
        <div className={'wrapper'}>
          {this.props.children()}
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
