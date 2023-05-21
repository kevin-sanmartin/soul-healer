import { Component } from "react";
import Image from "next/image";
import classNames from "classnames";

// Components
import Text from "@/src/Components/Text";
import ListItem from "./ListItem";
import Observer from "@/src/Components/Observer";
import ContactButton from "@/src/Components/ContactButton";

// Entities
import { ETextTag } from "@/src/Entities/Text";
import { EButtonSize } from "@/src/Entities/Button";

// Assets
import HealingSeance from "/public/images/healingSeance/portrait-professionnel-021-min.jpg";
import { AiFillCheckCircle as CheckIcon } from "react-icons/ai";

// Config
import { EWebsiteLinks } from "@/src/Config/WebsiteLinks";

// Styles
import classes from "./classes.module.scss";

type IProps = {
  id: EWebsiteLinks;
  className?: string;
};
type IState = {
  isListItemContainerVisible: boolean;
};

export default class ThirdSection extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isListItemContainerVisible: false,
    };

    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  public render() {
    return (
      <section className={classNames(classes["root"], this.props.className)} id={this.props.id}>
        <div className={classes["healing-presentation-container"]}>
          <Image src={HealingSeance} className={classes["image"]} fill alt="" />

          <Text tag={ETextTag.H2} font="xiaoWei" className={classes["title"]}>
            Les soins énergétiques peuvent soigner :
          </Text>

          <div className={classes["container"]}>
            <Observer onVisibilityChange={this.handleVisibilityChange} className={classes["list-container"]}>
              <ListItem
                className={classNames(classes["list-item"], {
                  [classes["is-visible"]]: this.state.isListItemContainerVisible,
                })}
                title="Maux physiques"
                listItems={[
                  "Douleurs de dos",
                  "Problèmes de peaux",
                  "Brûlures",
                  "Tendinite",
                  "Sciatique",
                  "Soins personnalisés pour diverses douleurs physiques",
                ]}
                icon={<CheckIcon className={classes["icon"]} />}
              />
              <ListItem
                className={classNames(classes["list-item"], {
                  [classes["is-visible"]]: this.state.isListItemContainerVisible,
                })}
                title="Maux psychologiques"
                listItems={[
                  "Libérer vos angoisses",
                  "Atténuer le stress",
                  "Retrouver un apaisement",
                  "Lever des blocages émotionnels inconscients",
                  "Couper les liens négatifs, nocifs avec des personnes toxiques de votre entourage (relation amoureuse, amicale, familiale, professionnelle, etc.)",
                ]}
                icon={<CheckIcon className={classes["icon"]} />}
              />
              <ListItem
                className={classNames(classes["list-item"], {
                  [classes["is-visible"]]: this.state.isListItemContainerVisible,
                })}
                title="Energetiques"
                listItems={[
                  "Équilibrage de la circulation de l'énergie vitale dans le corps physique et les corps subtils",
                  "Purification et harmonisation des 7 chakras principaux",
                  "Réparation des brèches énergétiques laissées par tous types de traumatismes physiques ou psychologiques et provoquant des fuites d'énergie vitale",
                  "Activation de la circulation énergétique dans tous les méridiens",
                ]}
                icon={<CheckIcon className={classes["icon"]} />}
              />
            </Observer>
          </div>

          <ContactButton size={EButtonSize.MEDIUM} text="Explorez votre potentiel de guérison. Contactez-moi." />
        </div>
      </section>
    );
  }

  private handleVisibilityChange(isVisible: boolean) {
    if (this.state.isListItemContainerVisible === isVisible) return;
    this.setState({ isListItemContainerVisible: isVisible });
  }
}
