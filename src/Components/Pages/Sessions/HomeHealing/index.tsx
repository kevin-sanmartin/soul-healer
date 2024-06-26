import { Component } from "react";
import Image from "next/image";
import classNames from "classnames";

// Components
import Text from "@/src/Components/Text";
import Observer from "@/src/Components/Observer";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Assets
import RoomDetails from "/public/images/roomDetails/portrait-professionnel-010-min.jpg";
import HandInside from "/public/images/healingSeance/portrait-professionnel-023-min.jpg";

// Styles
import classes from "./classes.module.scss";
import ContactButton from "@/src/Components/ContactButton";
import { EButtonSize } from "@/src/Entities/Button";

type IProps = {};
type IState = {
  isContainerVisible: boolean;
};

export default class HomeHealing extends Component<IProps, IState> {
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
          <Image src={RoomDetails} className={classes["image"]} alt="" />
        </div>

        <div className={classes["container"]}>
          <Text tag={ETextTag.P} className={classes["title"]}>
            Séance à domicile
          </Text>

          <div className={classes["text-container"]}>
            <Text tag={ETextTag.P} className={classes["text"]}>
              Mes soins énergétiques canalisés se pratiquent, en individuel, par impositions des mains, en étant
              allongé(e) et en restant habillé(e). N&apos;hésitez pas à vous habiller très confortablement pour le soin.
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              En premier lieu, vous serez invités à vous asseoir confortablement, vous détendre et parler de
              l&apos;objet de votre venue : vos (éventuels) maux, de déterminer la douleur sur une échelle de 1 à 10,
              soucis et vos attentes.
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              Cette étape permet une mise en confiance essentielle avant le soin, ainsi qu&apos;un échange préalable
              indispensable pour déterminer le sens du travail engagé.
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              Ensuite, vous passerez au soin proprement dit. Confortablement allongé sur la table de massage, je vous
              inviterai à la détente, en vous indiquant par exemple d&apos;adopter une respiration profonde de fixer
              votre attention soit sur la musique ou votre respiration, et surtout je vous encouragerai à accueillir vos
              pensées telles qu&apos;elles vous viennent à l&apos;esprit, sans aucune interruption avec une musique
              douce propice à la détente.
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              Pendant votre mise en place de votre relaxation, je me mettrai en condition et le soin commencera au
              moment de l&apos;apposition de mes mains.
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              Il se terminera lorsque je vous inviterai à revenir ici et maintenant à votre rythme tout en douceur.
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              Alors, nous ferons le point sur vos ressentis, vos émotions, votre soin. Je vous demanderai le lendemain,
              de m&apos;expliquer précisément vos ressentis, comment s&apos;est passé votre nuit ? Sur une échelle de 1
              à 10 où se situe « votre douleur », votre état et donc voir s&apos;il est nécessaire de reprendre
              rendez-vous pour un deuxième soin.
            </Text>
          </div>

          <Text tag={ETextTag.P} font="cabin" className={classes["price"]}>
            <span className={classes["bold"]}>65€</span> par séance
          </Text>

          <ContactButton size={EButtonSize.MEDIUM} text="Explorez les bienfaits d'un soin intuitif. Prêt à essayer ?" />
        </div>
      </Observer>
    );
  }

  private handleContainerVisibilityChange(isVisible: boolean) {
    if (this.state.isContainerVisible === isVisible) return;
    this.setState({ isContainerVisible: isVisible });
  }
}
