import { Component } from "react";
import Image from "next/image";
import classNames from "classnames";

// Components
import Text from "@/src/Components/Text";
import ContactButton from "@/src/Components/ContactButton";
import Observer from "@/src/Components/Observer";

// Entities
import { ETextTag } from "@/src/Entities/Text";
import { EButtonSize } from "@/src/Entities/Button";

// Assets
import MusicOutside from "/public/images/outside/portrait-professionnel-117.jpg";

// Styles
import classes from "./classes.module.scss";

type IProps = {};
type IState = {
  isFirstBlockVisible: boolean;
};

export default class WhatIsEnergyHealing extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isFirstBlockVisible: true,
    };

    this.handleFirstBlockVisibilityChange = this.handleFirstBlockVisibilityChange.bind(this);
  }

  public render() {
    return (
      <div className={classes["root"]}>
        <Observer
          onVisibilityChange={this.handleFirstBlockVisibilityChange}
          className={classNames(classes["container"], {
            [classes["is-visible"]]: this.state.isFirstBlockVisible,
          })}
        >
          <div className={classes["text-container"]}>
            <Text tag={ETextTag.P} className={classes["text"]}>
              Le soin énergétique que je pratique est souvent décrit comme &apos;intuitif&apos;, car il repose sur la
              canalisation. C&apos;est-à-dire que j&apos;utilise ma capacité intuitive, mon ressenti, voire ma
              médiumnité pendant le soin.
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              Je me connecte à l&apos;énergie christique et sollicite l&apos;assistance de l&apos;archange Mickael, des
              êtres de lumière, de mes guides spirituels et des vôtres. Je suis un transmetteur d&apos;énergie, ce qui
              signifie que je ne suis pas le guérisseur à proprement parler. C&apos;est la source qui oeuvre à travers
              moi.
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              Pour faciliter cette connexion et ouvrir l&apos;Espace de Guérison, j&apos;utilise la Sauge et le Palo
              Santo, des outils qui purifient et nettoient, créant ainsi une liaison profonde entre le donneur et le
              receveur. Chaque séance est unique, différente à chaque fois, adaptée à chacun en fonction de ce que je
              reçois pour vous dans l&apos;instant présent.
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              Mon rôle est de vous apporter la paix, l&apos;énergie, la régénération, et de vous libérer de tout ce qui
              peut peser sur votre corps, votre cœur et votre âme. Il est important de noter que le nombre de séances
              peut varier en fonction de la problématique spécifique, car je me laisse guider par la source tout au long
              du processus de guérison.
            </Text>
          </div>

          <div className={classes["image-container"]}>
            <Image src={MusicOutside} className={classes["image"]} fill alt="" />
          </div>
        </Observer>

        <div className={classes["contact"]}>
          <ContactButton size={EButtonSize.MEDIUM} text="Restaurez votre bien-être intérieur. Intéressé ?" />
        </div>
      </div>
    );
  }

  private handleFirstBlockVisibilityChange(isVisible: boolean): void {
    if (this.state.isFirstBlockVisible === isVisible) return;
    this.setState({ isFirstBlockVisible: isVisible });
  }
}
