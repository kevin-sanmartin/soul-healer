import Link from "next/link";
import { Component } from "react";
import classNames from "classnames";

// Components
import Text from "../../Text";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Config
import { EWebsiteLinks, EWebsiteLinksNames } from "@/src/Config/WebsiteLinks";
import { EBreakpoints } from "@/src/Config/Breakpoints";

// Styles
import classes from "./classes.module.scss";

type IProps = {
  to: EWebsiteLinks;
  text?: EWebsiteLinksNames;
  children?: React.ReactNode;
  className?: string;
};
type IState = {};

export default class CustomLink extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  public render() {
    return (
      <Link
        href={this.props.to}
        className={classNames(classes["root"], this.props.className)}
        scroll={false}
        onClick={this.onClick}
      >
        {this.props.text && <Text tag={ETextTag.SPAN}>{this.props.text}</Text>}
        {this.props.children}
      </Link>
    );
  }

  private onClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    const targetElement = document.getElementById(this.props.to);
    if (!targetElement) return;

    const windowWidth = window.innerWidth;
    const offset = windowWidth < EBreakpoints.MEDIUM ? 50 : 100;

    const targetPosition = targetElement.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}
