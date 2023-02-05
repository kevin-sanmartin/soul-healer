import { Component } from "react";

// Styles
import classes from "./classes.module.scss";

type IProps = {};
type IState = {};

export default class Footer extends Component<IProps, IState> {
  public render() {
    return <footer className={classes["root"]}></footer>;
  }
}
