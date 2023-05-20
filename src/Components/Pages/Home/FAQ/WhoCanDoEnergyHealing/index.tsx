import { Component } from "react";
import Image from "next/image";
import classNames from "classnames";

// Components
import Text from "@/src/Components/Text";
import Observer from "@/src/Components/Observer";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Assets
import HealingSeance from "/public/images/healingSeance/portrait-professionnel-027-min.jpg";

// Styles
import classes from "./classes.module.scss";
import ContactButton from "@/src/Components/ContactButton";
import { EButtonSize } from "@/src/Entities/Button";

type IProps = {};
type IState = {
  isContainerVisible: boolean;
};

export default class WhoCanDoEnergyHealing extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isContainerVisible: true,
    };

    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  public render() {
    return (
      <Observer
        onVisibilityChange={this.handleVisibilityChange}
        className={classNames(classes["root"], {
          [classes["is-visible"]]: this.state.isContainerVisible,
        })}
      >
        <Text tag={ETextTag.P} className={classes["text"]}>
          Absolument tout le monde peut profiter des bienfaits des soins énergétiques ! Et ce, quel que soit l&apos;âge
          ou la situation. bébés, enfants et adultes.
        </Text>

        <Text tag={ETextTag.P} className={classes["text"]}>
          Donc, si vous êtes dans une démarche d&apos;accompagnement et de travail sur soi, c&apos;est le soin à faire
          en première intention.
        </Text>

        <Image src={HealingSeance} className={classes["image"]} alt="" />

        <Text tag={ETextTag.P} className={classNames(classes["text"], classes["bold"])}>
          Ces soins ne remplacent pas la médecine classique, mais peuvent être un complément très efficace.
        </Text>

        <ContactButton size={EButtonSize.MEDIUM} text="Besoin d'une aide énergétique ? Contactez-moi" />
      </Observer>
    );
  }

  private handleVisibilityChange(isVisible: boolean) {
    if (this.state.isContainerVisible === isVisible) return;
    this.setState({ isContainerVisible: isVisible });
  }
}
