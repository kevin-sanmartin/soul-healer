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

export default class HealingBenefits extends Component<IProps, IState> {
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
          <Text tag={ETextTag.H2} font="xiaoWei" className={classes["title"]}>
            Les soins énergétiques peuvent soulager:
          </Text>

          <div className={classes["container"]}>
            <Observer onVisibilityChange={this.handleVisibilityChange} className={classes["list-container"]}>
              <ListItem
                className={classNames(classes["list-item"], {
                  [classes["is-visible"]]: this.state.isListItemContainerVisible,
                })}
                title="Maux physiques"
                icon={<CheckIcon className={classes["icon"]} />}
              />
              <ListItem
                className={classNames(classes["list-item"], {
                  [classes["is-visible"]]: this.state.isListItemContainerVisible,
                })}
                title="Maux emotionnels"
                icon={<CheckIcon className={classes["icon"]} />}
              />
              <ListItem
                className={classNames(classes["list-item"], {
                  [classes["is-visible"]]: this.state.isListItemContainerVisible,
                })}
                title="Maux energetiques"
                icon={<CheckIcon className={classes["icon"]} />}
              />
            </Observer>
          </div>

          <Text tag={ETextTag.P} className={classes["text"]}>
            Tout le monde peut profiter des bienfaits des soins énergétiques ! Et ce, quel que soit l&apos;âge ou la
            situation. Bébés, enfants et adultes. Donc, si vous êtes dans une démarche d&apos;accompagnement et de
            travail sur soi, c&apos;est le soin à faire en première intention.
          </Text>

          <Text tag={ETextTag.P} className={classNames(classes["text"], classes["bold"])}>
            Ces soins ne remplacent pas la médecine classique, mais peuvent être un complément très efficace.
          </Text>

          <ContactButton size={EButtonSize.MEDIUM} text="Prenez soin de vous dès aujourd'hui." />
        </div>
      </section>
    );
  }

  private handleVisibilityChange(isVisible: boolean) {
    if (this.state.isListItemContainerVisible === isVisible) return;
    this.setState({ isListItemContainerVisible: isVisible });
  }
}
