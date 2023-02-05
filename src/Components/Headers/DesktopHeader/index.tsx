import { EWebsiteLinks, EWebsiteLinksNames } from "@/src/Config/WebsiteLinks";
import Link from "next/link";
import { Component } from "react";

// Components
import Logo from "../../Logo";
import CustomLink from "../CustomLink";

// Styles
import classes from "./classes.module.scss";

type IProps = {};
type IState = {};

export default class DesktopHeader extends Component<IProps, IState> {
  public render() {
    return (
      <header className={classes["root"]}>
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
}
