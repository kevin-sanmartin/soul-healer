import { EWebsiteLinks, EWebsiteLinksNames } from "@/src/Config/WebsiteLinks";
import classNames from "classnames";
import Link from "next/link";
import { Component } from "react";

// Components
import Logo from "../../Logo";
import CustomLink from "../CustomLink";

// Styles
import classes from "./classes.module.scss";

type IProps = {};
type IState = {
  isAtTop: boolean;
};

export default class DesktopHeader extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isAtTop: true,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  public render() {
    return (
      <header
        className={classNames(classes["root"], {
          [classes["scrolled"]]: !this.state.isAtTop,
        })}
      >
        <div className={classes["content"]}>
          <Logo />

          <div className={classes["links-container"]}>
            <CustomLink to={EWebsiteLinks.HOME} text={EWebsiteLinksNames.HOME} />
            <CustomLink to={EWebsiteLinks.ABOUT} text={EWebsiteLinksNames.ABOUT} />
            <CustomLink to={EWebsiteLinks.PROJECTS} text={EWebsiteLinksNames.PROJECTS} />
            <CustomLink to={EWebsiteLinks.RESUME} text={EWebsiteLinksNames.RESUME} />
            <CustomLink to={EWebsiteLinks.CONTACT} text={EWebsiteLinksNames.CONTACT} />
          </div>
        </div>
      </header>
    );
  }

  public componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  private handleScroll() {
    if (typeof window === "undefined") return;

    const isAtTop = window.scrollY === 0;

    if (isAtTop !== this.state.isAtTop) {
      this.setState({ isAtTop });
    }
  }
}
