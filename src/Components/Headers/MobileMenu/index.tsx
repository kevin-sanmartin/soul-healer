import classNames from "classnames";
import { Component } from "react";

// Components
import BurgerMenu from "./BurgerMenu";
import CustomLink from "../CustomLink";
import ContactButton from "../../ContactButton";

// Entities
import { EButtonSize } from "@/src/Entities/Button";

// Config
import { EWebsiteLinks, EWebsiteLinksNames } from "@/src/Config/WebsiteLinks";

// Styles
import classes from "./classes.module.scss";
import Logo from "../../Logo";

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
					})}>
					<div className={classes["menu-mobile"]} onClick={this.closeBurgerMenu}>
						<CustomLink text={EWebsiteLinksNames.WELCOME} to={EWebsiteLinks.WELCOME} className={classes["link"]} />

						<CustomLink text={EWebsiteLinksNames.HEALING_BENEFITS} to={EWebsiteLinks.HEALING_BENEFITS} className={classes["link"]} />

						<CustomLink text={EWebsiteLinksNames.ABOUT} to={EWebsiteLinks.ABOUT} className={classes["link"]} />

						<CustomLink text={EWebsiteLinksNames.FAQ} to={EWebsiteLinks.FAQ} className={classes["link"]} />

						<ContactButton size={EButtonSize.MEDIUM} text="Rejoins-moi pour ton soin" />

						<Logo className={classes["logo"]} transparent />
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
