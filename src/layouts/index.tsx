import * as React from "react";
import Helmet from "react-helmet";

import "./index.css";
import Header from "../components/Header";


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
