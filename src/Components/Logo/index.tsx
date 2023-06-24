import { Component } from "react";
import Image from "next/image";
import classNames from "classnames";

// Assets
import LogoTransparant from "../../../public/10-08.png";
import LogoWithBackground from "../../../public/10-03.png";

// Styles
import classes from "./classes.module.scss";

type IProps = {
  transparent?: boolean;
  className?: string;
};
type IState = {};

export default class Logo extends Component<IProps, IState> {
  public render() {
    return (
      <Image
        src={this.props.transparent ? LogoTransparant : LogoWithBackground}
        alt="Logo"
        className={classNames(classes["root"], this.props.className)}
      />
    );
  }
}
