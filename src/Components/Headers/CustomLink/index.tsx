import Link from "next/link";
import { Component } from "react";
import classNames from "classnames";

// Components
import Text from "../../Text";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Config
import { EWebsiteLinks, EWebsiteLinksNames } from "@/src/Config/WebsiteLinks";

// Styles
import classes from "./classes.module.scss";

type IProps = {
  to: EWebsiteLinks;
  text: EWebsiteLinksNames;
  className?: string;
};
type IState = {};

export default class CustomLink extends Component<IProps, IState> {
  public render() {
    return (
      <Link href={this.props.to} className={classNames(classes["root"], this.props.className)}>
        <Text tag={ETextTag.SPAN}>{this.props.text}</Text>
      </Link>
    );
  }
}
