import { EWebsiteLinks, EWebsiteLinksNames } from "@/src/Config/WebsiteLinks";
import classNames from "classnames";
import { Component } from "react";

// Components
import BurgerMenu from "./BurgerMenu";
import Button from "../../Button";
import Text from "../../Text";
import CustomLink from "../CustomLink";

// Entities
import { ETextTag } from "@/src/Entities/Text";

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
          <div className={classes["menu-mobile"]} onClick={this.closeBurgerMenu}>
            <CustomLink text={EWebsiteLinksNames.ABOUT} to={EWebsiteLinks.ABOUT} className={classes["link"]} />
            <CustomLink
              text={EWebsiteLinksNames.HEALING_BENEFITS}
              to={EWebsiteLinks.HEALING_BENEFITS}
              className={classes["link"]}
            />
            <CustomLink
              text={EWebsiteLinksNames.HEALING_INFOS}
              to={EWebsiteLinks.HEALING_INFOS}
              className={classes["link"]}
            />
            <Button onClick={() => console.log("click")}>
              <Text tag={ETextTag.SPAN}>Contactez-moi</Text>
            </Button>
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
