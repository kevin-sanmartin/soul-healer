import Link from "next/link";
import { Component } from "react";

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
};
type IState = {};

export default class CustomLink extends Component<IProps, IState> {
  public render() {
    return (
      <div className={classes["root"]}>
        <Link href={this.props.to} className={classes["link"]}>
          <Text tag={ETextTag.SPAN}>{this.props.text}</Text>
        </Link>
      </div>
    );
  }
}
