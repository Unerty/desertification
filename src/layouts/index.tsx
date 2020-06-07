import * as React from "react";
import Helmet from "react-helmet";

import "./index.css";


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
          title="Опустелювання"
          meta={[
            { name: "description", content: "Count your desert" },
            { name: "keywords", content: "desert, desertification, humidity, пустеля" }
          ]}
        />
        <div className={'wrapper'}>
          {this.props.children()}
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
