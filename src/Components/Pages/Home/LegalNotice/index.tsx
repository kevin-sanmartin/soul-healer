import { Component, Fragment } from "react";

// Components
import Text from "@/src/Components/Text";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Styles
import classes from "./classes.module.scss";

type IProps = {};
type IState = {
  isModalOpen: boolean;
};

export default class LegalNotice extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  override render() {
    return (
      <Fragment>
        <Text tag={ETextTag.SPAN} onClick={this.toggleModal} className={classes["link"]}>
          Mentions légales
        </Text>
        {this.state.isModalOpen && this.renderModal()}
      </Fragment>
    );
  }

  private renderModal() {
    return (
      <div className={classes["modal"]}>
        <div className={classes["layout"]} onClick={this.toggleModal} />
        <div className={classes["content"]}>{this.renderModalContent()}</div>
      </div>
    );
  }

  private renderModalContent() {
    return (
      <Fragment>
        <Text tag={ETextTag.H3} className={classes["title"]}>
          Mentions légales
        </Text>
        <div className={classes["section"]}>
          <Text tag={ETextTag.H4} className={classes["subtitle"]}>
            Informations générales:
          </Text>
          <Text tag={ETextTag.P} className={classes["text"]}>
            Le présent site est exploité par Nadia Richard en tant qu&apos;entreprise individuelle.
          </Text>
        </div>

        <div className={classes["section"]}>
          <Text tag={ETextTag.H4} className={classes["subtitle"]}>
            Coordonnées:
          </Text>
          <Text tag={ETextTag.P} className={classes["text"]}>
            Nom: Nadia Richard.
          </Text>
          <Text tag={ETextTag.P} className={classes["text"]}>
            Adresse: 06130 Grasse - Alpes Maritimes - France.
          </Text>
          <Text tag={ETextTag.P} className={classes["text"]}>
            Téléphone: 06.65.47.24.90
          </Text>
          <Text tag={ETextTag.P} className={classes["text"]}>
            Email: richnad06@gmail.com
          </Text>
        </div>

        <div className={classes["section"]}>
          <Text tag={ETextTag.H4} className={classes["subtitle"]}>
            Activité:
          </Text>
          <Text tag={ETextTag.P} className={classes["text"]}>
            Nadia Richard, dite "L&apos;Âme Guérisseuse" propose des services de soins énergétiques et de guérison, dans
            le but d&apos;améliorer le bien-être et l&apos;équilibre énergétique des individus.
          </Text>
        </div>

        <div className={classes["section"]}>
          <Text tag={ETextTag.H4} className={classes["subtitle"]}>
            Responsabilité:
          </Text>
          <Text tag={ETextTag.P} className={classes["text"]}>
            Nadia Richard, en tant que propriétaire et exploitante du site, s&apos;efforce de fournir des informations
            précises et de qualité. Cependant, elle ne peut être tenue responsable de l&apos;exactitude, de
            l&apos;exhaustivité ou de la pertinence des informations fournies sur le site. Les utilisateurs sont invités
            à consulter un professionnel de la santé qualifié avant de prendre des décisions basées sur les informations
            disponibles sur le site.
          </Text>
        </div>

        <div className={classes["section"]}>
          <Text tag={ETextTag.H4} className={classes["subtitle"]}>
            Propriété intellectuelle:
          </Text>
          <Text tag={ETextTag.P} className={classes["text"]}>
            Tous les contenus présents sur le présent site (textes, logos, vidéos, etc.) sont la propriété exclusive de
            Nadia Richard. Les images sont la propriété exclusive de Mégane Guisnet (https://meganeguisnet.com). Toute
            reproduction, distribution, ou utilisation sans autorisation écrite préalable est strictement interdite.
          </Text>
        </div>

        <div className={classes["section"]}>
          <Text tag={ETextTag.H4} className={classes["subtitle"]}>
            Protection des données personnelles:
          </Text>
          <Text tag={ETextTag.P} className={classes["text"]}>
            Nadia Richard s&apos;engage à respecter la confidentialité des données personnelles des utilisateurs du
            site. Les informations fournies par les utilisateurs via les formulaires de contact ou tout autre moyen de
            communication ne seront utilisées que dans le but de répondre aux demandes et de fournir les services
            demandés. Les données personnelles ne seront pas partagées avec des tiers sans consentement préalable.
          </Text>
        </div>

        <div className={classes["section"]}>
          <Text tag={ETextTag.H4} className={classes["subtitle"]}>
            Liens externes:
          </Text>
          <Text tag={ETextTag.P} className={classes["text"]}>
            Le présent site peut contenir des liens vers des sites tiers. Ces liens sont fournis uniquement à titre
            informatif et Nadia Richard n&apos;assume aucune responsabilité quant au contenu de ces sites externes.
          </Text>
        </div>

        <div className={classes["section"]}>
          <Text tag={ETextTag.H4} className={classes["subtitle"]}>
            Loi applicable et juridiction compétente:
          </Text>
          <Text tag={ETextTag.P} className={classes["text"]}>
            Les présentes mentions légales sont soumises au droit applicable dans le pays où vous exercez votre
            activité. Tout litige relatif au présent site sera soumis à la juridiction compétente de ce pays.
          </Text>
        </div>
      </Fragment>
    );
  }

  private toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }
}
