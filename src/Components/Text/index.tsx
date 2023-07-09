import { Component } from "react";
import classNames from "classnames";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Styles
import classes from "./classes.module.scss";
import { ZCOOL_XiaoWei, Cabin } from "@next/font/google";
const xiaoWei = ZCOOL_XiaoWei({ weight: ["400"], subsets: ["latin"], display: "swap" });
const cabin = Cabin({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap" });

export const Fonts = {
  xiaoWei,
  cabin,
};

type IProps = {
  tag: ETextTag;
  font: keyof typeof Fonts;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};
type IState = {};

export default class Text extends Component<IProps, IState> {
  public static defaultProps = {
    font: "xiaoWei",
  };

  public render() {
    const CustomTag = this.props.tag;
    return (
      <CustomTag
        className={classNames(classes["root"], Fonts[this.props.font].className, this.props.className)}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </CustomTag>
    );
  }
}
