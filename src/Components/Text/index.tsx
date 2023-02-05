import classNames from "classnames";
import { Component } from "react";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Styles
import classes from "./classes.module.scss";
import { Roboto } from "@next/font/google";
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

type IProps = {
  tag: ETextTag;
  className?: string;
  children?: React.ReactNode;
};
type IState = {};

export default class Text extends Component<IProps, IState> {
  public render() {
    const CustomTag = this.props.tag;
    return (
      <CustomTag className={classNames(classes["root"], roboto.className, this.props.className)}>
        {this.props.children}
      </CustomTag>
    );
  }
}
