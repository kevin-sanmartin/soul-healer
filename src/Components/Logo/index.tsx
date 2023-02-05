import { Component } from "react";

// Styles
import classes from "./classes.module.scss";

type IProps = {};
type IState = {};

export default class Logo extends Component<IProps, IState> {
  public render() {
    return <div className={classes["root"]} />;
  }
}
