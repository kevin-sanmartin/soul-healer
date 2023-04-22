import { Component } from "react";
import Image from "next/image";

// Components
import Text from "@/src/Components/Text";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Assets
import OutsidePortrait from "/public/images/outside/portrait-professionnel-034-min.jpg";

// Styles
import classes from "./classes.module.scss";

type IProps = {};
type IState = {};

export default class CardThreeContent extends Component<IProps, IState> {
  public render() {
    return (
      <div className={classes["root"]}>
        <Text tag={ETextTag.P} className={classes["text"]}>
          J&apos;ai été assistante maternelle pendant 8 ans, j&apos;ai adoré mon métier, le contact avec les enfants,
          tout ce qu&apos;ils nous apprennent, leur façon naturelle et authentique d&apos;être et de ressentir, mais
          après un atelier énergétique d&apos;une journée tout a basculé
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
      </div>
    );
  }
}
