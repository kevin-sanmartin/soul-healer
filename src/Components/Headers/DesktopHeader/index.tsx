import classNames from "classnames";
import { Component } from "react";

// Components
import Logo from "../../Logo";
import CustomLink from "../CustomLink";
import ContactButton from "../../ContactButton";

// Entities
import { EButtonSize } from "@/src/Entities/Button";

// Config
import { EWebsiteLinks, EWebsiteLinksNames } from "@/src/Config/WebsiteLinks";

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
            <CustomLink to={EWebsiteLinks.WELCOME} text={EWebsiteLinksNames.WELCOME} />
            <CustomLink to={EWebsiteLinks.HEALING_BENEFITS} text={EWebsiteLinksNames.HEALING_BENEFITS} />
            <CustomLink to={EWebsiteLinks.FAQ} text={EWebsiteLinksNames.FAQ} />
            <ContactButton size={EButtonSize.MEDIUM} />
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
