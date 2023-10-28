import { Component } from "react";
import Head from "next/head";

type IProps = {};
type IState = {};

export default class HeadMetadata extends Component<IProps, IState> {
  public render() {
    return (
      <Head>
        <title>Soins énergétique Alpes-Maritimes, à domicile ou à distance - Nadia Richard</title>
        <meta
          name="description"
          content="Retrouvez un équilibre énergétique optimal grâce à mes soins. Soulagez le stress et l'anxiété. Sur Grasse dans les Alpes-maritimes. À distance ou chez moi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Nadia Richard" />
        <meta name="canonical" content="https://www.nadia-richard.fr" />

        <meta property="og:title" content="Soins énergétique à domicile ou à distance - Nadia Richard" />
        <meta
          name="keywords"
          content="soins énergétiques, bien-être, stress, anxiété, douleur, équilibre, thérapie, harmonie, méditation, énergéticienne"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nadia-richard.fr/" />
        <meta
          property="og:description"
          content="Retrouvez un équilibre énergétique optimal grâce à mes soins. Soulagez le stress et l'anxiété. Sur Grasse dans les Alpes-maritimes. À distance ou chez moi."
        />
        <meta
          property="og:image"
          content="https://www.nadia-richard.fr/images/healingSeance/portrait-professionnel-021-min.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    );
  }
}
