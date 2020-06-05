import * as React from "react";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export default function Index(props: IndexPageProps, context: any) {
  let treeCutting: number = 0; // How much of trees is cut every year
  let treePlanting: number = 0; // Trees planted per year
  let precipation: number = 500; // Measured in mm. Sahara: 25-200, Kalahari: 100-500, Atakama: 25
  let additionalWatering: number = 0; // Measured in mm. Is added to precipation
  let averageTemperature: number = 30; // Average yearly temperature
  let absoluteHumidity: number; // Measured in grams per one meter cubic of air
  let relativeHumidity: number; // https://www.yaklass.ru/p/fizika/8-klass/izmenenie-sostoianiia-veshchestva-141552/otnositelnaia-vlazhnost-vozdukha-i-ee-izmerenie-189576/re-18d24d91-b778-4262-983f-4e1101acae16
  let volatility: number = 0.0018*(Math.pow(25 + averageTemperature, 2)*(100-relativeHumidity)); // volatility http://meteorologist.ru/formula-isparyaemosti-ivanova.html


  return (
    <div>
      <h1>Some H1</h1>
      <p>Some p
        <strong> Some strong</strong>
      </p>
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
