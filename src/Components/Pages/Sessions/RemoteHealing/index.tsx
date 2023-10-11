import { Component } from "react";
import Image from "next/image";
import classNames from "classnames";

// Components
import Text from "@/src/Components/Text";
import Observer from "@/src/Components/Observer";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Assets
import HandOutside from "/public/images/outside/portrait-professionnel-085.jpg";
import IllustrationImage from "/public/images/outside/portrait-professionnel-042-min.jpg";

// Styles
import classes from "./classes.module.scss";
import ContactButton from "@/src/Components/ContactButton";
import { EButtonSize } from "@/src/Entities/Button";

type IProps = {};
type IState = {
  isContainerVisible: boolean;
};

export default class RemoteHealing extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isContainerVisible: true,
    };

    this.handleContainerVisibilityChange = this.handleContainerVisibilityChange.bind(this);
  }

  public render() {
    return (
      <Observer
        onVisibilityChange={this.handleContainerVisibilityChange}
        className={classNames(classes["root"], {
          [classes["is-visible"]]: this.state.isContainerVisible,
        })}
      >
        <div className={classes["image-container"]}>
          <Image src={HandOutside} className={classes["image"]} alt="" />
        </div>

        <div className={classes["container"]}>
          <Text tag={ETextTag.P} className={classes["title"]}>
            Séance à distance
          </Text>

          <div className={classes["text-container"]}>
            <Text tag={ETextTag.P} className={classes["text"]}>
              Mes soins énergétiques canalisés à distance se font uniquement sur réservation. Ils sont disponibles le
              jour de la réservation.
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              Il suffit de me contacter par mail et de me donner vos disponibilités afin que je puisse organiser notre
              rendez-vous téléphonique dans un premier temps pour faire connaissance et convenir d&apos;une date ensuite
              pour le soin à distance et du paiement.
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              Je vous demanderai alors de m&apos;envoyer une photo récente debout, claire, prise de face, sans filtre,
              les yeux bien visibles. Je conserverai la photo afin d&apos;être en mesure d&apos;effectuer un suivi
              complet et précieux pour tous pour tout nouveau rendez-vous futur. Je vous confirmerai la réservation et
              les recommandations nécessaires au bon déroulement du soin par mail la veille du rendez-vous.
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              Vous devrez être aussi détendu et à l&apos;aise que possible lors de cette séance à distance, en
              choisissant un lieu prédisposé pour cela. Que vous optiez pour la position assise dans un fauteuil ou
              allongée sur un lit, cela ne changera pas tant que vous êtes ouvert au soin.
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              Comme en présentiel, je vous demanderai de prendre de profondes inspirations et expirations comme lors
              d&apos;une méditation afin de faire le vide, une musique pour vous accompagner serait l&apos;idéal, pour
              vous permettre de vous détendre et de pouvoir accueillir le soin avec facilité. Je vous enverrai alors un
              message sur votre portable pour vous avertir de la fin du soin.
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              Nous pourrons donc échanger par mail afin d&apos;avoir une trace écrite chacun, pour effectuer un retour
              sur le soin, les ressentis, l&apos;évaluation de « vos douleurs » s&apos;il y en a sur une échelle de 1 à
              10 afin de déterminer s&apos;il est nécessaire de reprendre rendez-vous.
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              Alors, nous ferons le point sur vos ressentis, vos émotions, votre soin. Je vous demanderai le lendemain,
              de m&apos;expliquer précisément vos ressentis, comment s&apos;est passé votre nuit ? Sur une échelle de 1
              à 10 où se situe « votre douleur », votre état et donc voir s&apos;il est nécessaire de reprendre
              rendez-vous pour un deuxième soin.
            </Text>
          </div>

          <Text tag={ETextTag.P} font="cabin" className={classes["price"]}>
            <span className={classes["bold"]}>60€</span> par séance
          </Text>

          <ContactButton size={EButtonSize.MEDIUM} text="Soin intuitif, énergie régénératrice. Essayez ?" />
        </div>
      </Observer>
    );
  }

  private handleContainerVisibilityChange(isVisible: boolean) {
    if (this.state.isContainerVisible === isVisible) return;
    this.setState({ isContainerVisible: isVisible });
  }
}
