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
          <Logo className={classes["logo"]} />

          <Text font={"xiaoWei"} tag={ETextTag.H1} className={classes["title"]}>
            Trouvez l&apos;harmonie du corps et de l&apos;esprit.
          </Text>

          <Text tag={ETextTag.P} className={classes["description"]}>
            Je m&apos;appelle Nadia Richard, si vous cherchez une complémentarité a la médecine traditionnelle, sachez
            que vous pouvez prendre votre santé en main.
          </Text>

          <ContactButton size={EButtonSize.LARGE} text="Contactez-moi" />
        </div>
      </section>
    );
  }
}
