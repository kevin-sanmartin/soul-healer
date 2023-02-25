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
import Image from "next/image";
import ForestImage from "public/images/outside/portrait-professionnel-054-min.jpg";

type IProps = {
  className?: string;
};
type IState = {};

export default class FirstSection extends Component<IProps, IState> {
  override render() {
    return (
      <section className={classNames(classes["root"], this.props.className)}>
        {/* <Image className={classes["image"]} src={ForestImage} alt="" /> */}

        <div className={classes["container"]}>
          <Logo />

          <Text font={"xiaoWei"} tag={ETextTag.H1} className={classes["title"]}>
            Vous avez le pouvoir de vous soigner vous même.
          </Text>

          <Text tag={ETextTag.P} className={classes["description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse assumenda obcaecati error? Placeat odio,
            necessitatibus rem, saepe facilis illo cumque alias vel sunt eos voluptatibus nemo deserunt quae ullam!
          </Text>

          <Button className={classes["button"]}>
            <Text tag={ETextTag.SPAN}>CONTACTEZ-MOI</Text>
          </Button>
        </div>
      </section>
    );
  }
}
