import { Component } from "react";
import classNames from "classnames";

// Components
import Button from "@/src/Components/Button";
import Logo from "@/src/Components/Logo";
import Text from "@/src/Components/Text";

// Entities
import { ETextTag } from "@/src/Entities/Text";

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
            Si vous cherchez une alternative aux traitements médicamenteux traditionnels, sachez que vous pouvez prendre
            votre santé en main et vous soigner vous-même.
          </Text>

          <Button className={classes["button"]}>
            <Text tag={ETextTag.SPAN}>CONTACTEZ-MOI</Text>
          </Button>
        </div>
      </section>
    );
  }
}
