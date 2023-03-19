import { Component } from "react";
import Image from "next/image";

// Components
import Text from "@/src/Components/Text";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Assets
import OutsidePortrait from "/public/images/outside/portrait-professionnel-101.jpg";

// Styles
import classes from "./classes.module.scss";

type IProps = {};
type IState = {};

export default class CardThreeContent extends Component<IProps, IState> {
  override render() {
    return (
      <div className={classes["root"]}>
        <Text tag={ETextTag.P} className={classes["text"]}>
          J&apos;ai été assistante maternelle pendant 8 ans, j&apos;ai adoré mon métier, le contact avec les enfants,
          tout ce qu&apos;ils nous apprennent, leur façon naturelle et authentique d&apos;être et de ressentir, mais
          après un atelier énergétique d&apos;une journée tout a basculé.
        </Text>

        <Text tag={ETextTag.P} className={classes["text"]}>
          J&apos;ai pris conscience que ce métier n&apos;était plus pour moi, j&apos;avais besoin de donner une autre
          forme de service et j&apos;ai laissé faire la vie, l&apos;univers me guider. J&apos;ai donc fait une formation
          de coaching qui m&apos;a appris à être qui je suis et moins introverti, puis mes mains ont commencé à chauffer
          et vibrer. Tout s&apos;est enchaîné…
        </Text>

        <div className={classes["image-container"]}>
          <Image src={OutsidePortrait} className={classes["image"]} fill alt="" />
        </div>

        <Text tag={ETextTag.P} className={classes["text"]}>
          Après avoir consulté une médium j&apos;ai compris que c&apos;était ma destinée par des signes qui se sont
          manifestés en moi qui confirmaient cela, a cet instant. Apporter des soins et soulager les personnes
          m&apos;apporte aussi bien, un bien être personnel mais aussi aux autres. Je suis comme une enfant qui découvre
          l&apos;immense possibilité que j&apos;ai, à chaque soin qui ne se ressemble pas. Mes capacités se développent
          au fil du temps (ma clair voyance, ma clair audience, ma clair ressenti), j&apos;évolue et tout est juste,
          tout arrive quand ça doit arriver.
        </Text>

        <Text tag={ETextTag.P} className={classes["text"]}>
          J&apos;expérimente la cocréation angélique, et j&apos;observe tout simplement ce qui se passe pour moi, dans
          ma vie et chez les personnes que je soigne.
        </Text>

        <Text tag={ETextTag.P} className={classes["text"]}>
          J&apos;ai alors décidé de devenir guérisseuse, un métier en parfait accord avec mes valeurs et ce qui me fait
          vibrer.
        </Text>

        <Text tag={ETextTag.P} className={classes["text"]}>
          Aujourd&apos;hui, avec mes outils et mes qualités, je vous accompagne pour que vous puissiez accéder, à votre
          rythme à la meilleure version de vous-même, à mon domicile dans une pièce qui vous est dédiée, pour un instant
          de bien-être, une pause pour soi.
        </Text>
      </div>
    );
  }
}
