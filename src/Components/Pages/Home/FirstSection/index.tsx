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
  override render() {
    return (
      <section className={classNames(classes["root"], this.props.className)}>
        <Logo />

        <Text tag={ETextTag.H1} className={classes["title"]}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Text>

        <Text tag={ETextTag.P} className={classes["description"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse assumenda obcaecati error? Placeat odio,
          necessitatibus rem, saepe facilis illo cumque alias vel sunt eos voluptatibus nemo deserunt quae ullam!
        </Text>

        <Button className={classes["button"]}>
          <Text tag={ETextTag.SPAN}>BUTTON</Text>
        </Button>
      </section>
    );
  }
}
