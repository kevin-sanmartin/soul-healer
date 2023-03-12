import classNames from "classnames";
import { Component } from "react";

// Styles
import classes from "./classes.module.scss";

export enum ETagColor {
  CRAYOLA = "crayola",
  PASTEL_GRAY = "pastel-gray",
  BLANCHED_ALMOND = "blanched-almond",
}

type IProps = {
  color: ETagColor;
  className?: string;
  children?: React.ReactNode;
};
type IState = {};

export default class Tag extends Component<IProps, IState> {
  public render() {
    return (
      <div className={classNames(classes["root"], this.props.className, classes[this.props.color])}>
        {this.props.children}
      </div>
    );
  }
}
