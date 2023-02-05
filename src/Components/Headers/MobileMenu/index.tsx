import { EWebsiteLinks, EWebsiteLinksNames } from "@/src/Config/WebsiteLinks";
import classNames from "classnames";
import { Component } from "react";
import CustomLink from "../CustomLink";

// Components
import BurgerMenu from "./BurgerMenu";

// Styles
import classes from "./classes.module.scss";

type IProps = {};
type IState = {
  isBurgerMenuOpen: boolean;
};

export default class MobileMenu extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isBurgerMenuOpen: false,
    };
    this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
    this.closeBurgerMenu = this.closeBurgerMenu.bind(this);
  }

  public render() {
    return (
      <div className={classes["root"]}>
        <BurgerMenu isOpen={this.state.isBurgerMenuOpen} onOpenChange={this.toggleBurgerMenu} />

        {this.state.isBurgerMenuOpen && <div className={classes["background"]} onClick={this.closeBurgerMenu} />}

        <div
          className={classNames(classes["menu-mobile-container"], {
            [classes["menu-open"]]: this.state.isBurgerMenuOpen,
          })}
        >
          <div className={classes["menu-mobile"]}>
            <CustomLink text={EWebsiteLinksNames.HOME} to={EWebsiteLinks.HOME} className={classes["link"]} />
            <CustomLink text={EWebsiteLinksNames.ABOUT} to={EWebsiteLinks.ABOUT} className={classes["link"]} />
            <CustomLink text={EWebsiteLinksNames.PROJECTS} to={EWebsiteLinks.PROJECTS} className={classes["link"]} />
            <CustomLink text={EWebsiteLinksNames.RESUME} to={EWebsiteLinks.RESUME} className={classes["link"]} />
            <CustomLink text={EWebsiteLinksNames.CONTACT} to={EWebsiteLinks.CONTACT} className={classes["link"]} />
          </div>
        </div>
      </div>
    );
  }

  private toggleBurgerMenu(isOpen: boolean) {
    this.setState({ isBurgerMenuOpen: isOpen });
  }

  private closeBurgerMenu() {
    this.setState({ isBurgerMenuOpen: false });
  }
}
