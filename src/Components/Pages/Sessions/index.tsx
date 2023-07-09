import { Component } from "react";

// Styles
import classes from "./classes.module.scss";
import classNames from "classnames";
import HomeHealing from "./HomeHealing";
import RemoteHealing from "./RemoteHealing";
import { ETextTag } from "@/src/Entities/Text";
import Text from "@/src/Components/Text";

type IProps = {
  className?: string;
};
type IState = {};

export default class Sessions extends Component<IProps, IState> {
  override render() {
    return (
      <section className={classNames(classes["root"], this.props.className)}>
        <Text tag={ETextTag.P} className={classes["title"]}>
          Les séances
        </Text>
        <div className={classes["sessions-container"]}>
          <HomeHealing />
          <RemoteHealing />
        </div>
      </section>
    );
  }
}
