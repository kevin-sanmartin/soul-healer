import classNames from "classnames";
import { Component } from "react";

// Components
import Text from "@/src/Components/Text";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Assets
import HealingSeance from "/public/images/healingSeance/portrait-professionnel-021-min.jpg";

// Styles
import classes from "./classes.module.scss";
import Image from "next/image";

type IProps = {};
type IState = {};

export default class CardOneContent extends Component<IProps, IState> {
  override render() {
    return (
      <div className={classes["root"]}>
        <Text tag={ETextTag.P} className={classes["text"]}>
          Absolument tout le monde peut profiter des bienfaits des soins énergétiques ! Et ce, quel que soit l'âge ou la
          situation. bébés, enfants et adultes.
        </Text>

        <Text tag={ETextTag.P} className={classes["text"]}>
          Donc, si vous êtes dans une démarche d'accompagnement et de travail sur soi, c'est le soin à faire en première
          intention.
        </Text>

        <Image src={HealingSeance} className={classes["image"]} alt="" />

        <Text tag={ETextTag.P} className={classNames(classes["text"], classes["bold"])}>
          Ces soins ne remplacent pas la médecine classique, mais peuvent être un complément très efficace.
        </Text>
      </div>
    );
  }
}
