import { Component } from "react";

// Styles
import classes from "./classes.module.scss";
import LegalNotice from "../Pages/Home/LegalNotice";

type IProps = {};
type IState = {};

export default class Footer extends Component<IProps, IState> {
  public render() {
    return (
      <footer className={classes["root"]}>
        <LegalNotice />
      </footer>
    );
  }
}
