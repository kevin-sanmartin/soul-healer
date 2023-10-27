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
        <Logo className={classes["logo"]} />

        <div className={classes["container"]}>
          <Text font={"xiaoWei"} tag={ETextTag.H1} className={classes["title-container"]}>
            <span className={classes["title"]}>
              Trouvez l'harmonie du corps et de l'esprit avec mes soins énergétiques.
            </span>
            <span className={classes["description"]}>
              Nadia Richard, energeticienne à Grasse dans les Alpes-Maritimes. Soins énergétiques à mon domicile ou à
              distance.
            </span>
          </Text>

          <ContactButton size={EButtonSize.LARGE} text="Contactez-moi" />
        </div>
      </section>
    );
  }
}
