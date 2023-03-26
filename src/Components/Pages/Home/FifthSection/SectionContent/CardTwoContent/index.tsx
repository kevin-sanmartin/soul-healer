import Image from "next/image";
import { Component } from "react";

// Components
import Text from "@/src/Components/Text";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Assets
import HandHeartOutside from "/public/images/outside/portrait-professionnel-041-min.jpg";

// Styles
import classes from "./classes.module.scss";

type IProps = {};
type IState = {};

export default class CardTwoContent extends Component<IProps, IState> {
  override render() {
    return (
      <div className={classes["root"]}>
        <Text tag={ETextTag.P} className={classes["text"]}>
          Les soins énergétiques intuitifs se pratiquent, en individuel, par impositions des mains, en étant allongé(e)
          et en restant habillé(e). N&apos;hésitez pas à vous habiller très confortablement pour le soin.
        </Text>

        <Text tag={ETextTag.P} className={classes["text"]}>
          En premier lieu, vous serez invités à vous asseoir confortablement, vous détendre et parler de l&apos;objet de
          votre venue : vos (éventuels) maux, de déterminer la douleur sur une échelle de 1 à 10, soucis et vos
          attentes.
        </Text>

        <Text tag={ETextTag.P} className={classes["text"]}>
          Cette étape permet une mise en confiance essentielle avant le soin, ainsi qu&apos;un échange préalable
          indispensable pour déterminer le sens du travail engagé.
        </Text>

        <Text tag={ETextTag.P} className={classes["text"]}>
          Ensuite, vous passerez au soin proprement dit. Confortablement allongé sur la table de massage, je vous
          inviterai à la détente, en vous indiquant par exemple d&apos;adopter une respiration profonde de fixer votre
          attention soit sur la musique ou votre respiration, et je surtout vous encouragerai à accueillir vos pensées
          telles qu&apos;elles vous viennent à l&apos;esprit, sans aucune interruption avec une musique douce propice à
          la détente.
        </Text>

        <div className={classes["image-container"]}>
          <Image src={HandHeartOutside} className={classes["image"]} fill alt="" />
        </div>

        <Text tag={ETextTag.P} className={classes["text"]}>
          Pendant votre mise en place de votre relaxation, je me mettrai en condition et le soin commencera au moment de
          l&apos;apposition de mes mains.
        </Text>

        <Text tag={ETextTag.P} className={classes["text"]}>
          Il se terminera lorsque je vous inviterai à revenir ici et maintenant à votre rythme tout en douceur.
        </Text>

        <Text tag={ETextTag.P} className={classes["text"]}>
          Alors, nous ferons le point sur vos ressentis, vos émotions, votre soin.Je vous demanderai le lendemain, de
          m&apos;expliquer précisément vos ressentis, comment s&apos;est passé votre nuit ? sur une échelle de 1 à 10 où
          se situe « votre douleur », votre état et donc voir s&apos;il est nécessaire de reprendre rendez-vous pour un
          deuxième soin.
        </Text>
      </div>
    );
  }
}
