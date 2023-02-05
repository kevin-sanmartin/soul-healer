import { Component } from "react";
import Head from "next/head";

type IProps = {};
type IState = {};

export default class HeadMetadata extends Component<IProps, IState> {
  public render() {
    return (
      <Head>
        <title>Nadia Richard - L'Âme Guerisseuse</title>
        <meta name="description" content="Soins energetiques" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    );
  }
}
