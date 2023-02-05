import classNames from "classnames";
import { Component } from "react";

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
        ></div>
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
