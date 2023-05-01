import { Component } from "react";
import classNames from "classnames";

// Styles
import classes from "./classes.module.scss";

type IProps = {
  id: string;
  className?: string;
};
type IState = {};

export default class SixthSection extends Component<IProps, IState> {
  override render() {
    return <section className={classNames(classes["root"], this.props.className)} id={this.props.id}></section>;
  }
}
