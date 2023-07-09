import { Component } from "react";

// Styles
import classes from "./classes.module.scss";
import classNames from "classnames";
import HomeHealing from "./HomeHealing";
import RemoteHealing from "./RemoteHealing";

type IProps = {
  className?: string;
};
type IState = {};

export default class Sessions extends Component<IProps, IState> {
  override render() {
    return (
      <section className={classNames(classes["root"], this.props.className)}>
        <HomeHealing />
        <RemoteHealing />
      </section>
    );
  }
}
