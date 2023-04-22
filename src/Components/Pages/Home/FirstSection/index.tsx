import { Component } from "react";
import classNames from "classnames";

// Components
import Button from "@/src/Components/Button";
import Logo from "@/src/Components/Logo";
import Text from "@/src/Components/Text";
import CustomLink from "@/src/Components/Headers/CustomLink";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Config
import { EWebsiteLinks } from "@/src/Config/WebsiteLinks";

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

          <CustomLink to={EWebsiteLinks.CONTACT} className={classes["button"]}>
            <Button>
              <Text tag={ETextTag.SPAN}>CONTACTEZ-MOI</Text>
            </Button>
          </CustomLink>
        </div>
      </section>
    );
  }
}
