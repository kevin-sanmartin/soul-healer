import { Component } from "react";
import classNames from "classnames";

// Components
import Logo from "@/src/Components/Logo";
import Text from "@/src/Components/Text";
import ContactButton from "@/src/Components/ContactButton";

// Entities
import { ETextTag } from "@/src/Entities/Text";
import { EButtonSize } from "@/src/Entities/Button";

// Styles
import classes from "./classes.module.scss";

type IProps = {
  className?: string;
};
type IState = {};

export default class FirstSection extends Component<IProps, IState> {
  public render() {
    return (
      <section className={classNames(classes["root"], this.props.className)}>
        <div className={classes["container"]}>
          <Logo />

          <Text font={"xiaoWei"} tag={ETextTag.H1} className={classes["title"]}>
            Vous avez le pouvoir de vous soigner vous même.
          </Text>

          <Text tag={ETextTag.P} className={classes["description"]}>
            Si vous cherchez une complémentarité a la médecine traditionnelle, sachez que vous pouvez prendre votre
            santé en main et vous soigner vous-même.
          </Text>

          <ContactButton size={EButtonSize.LARGE} />
        </div>
      </section>
    );
  }
}
