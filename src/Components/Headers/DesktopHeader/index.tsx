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
type IState = {};

export default class DesktopHeader extends Component<IProps, IState> {
	public render() {
		return (
			<header className={classes["root"]}>
				<div className={classes["content"]}>
					<Logo transparent className={classes["logo"]} />

					<div className={classes["links-container"]}>
						<CustomLink to={EWebsiteLinks.WELCOME} text={EWebsiteLinksNames.WELCOME} />
						<CustomLink to={EWebsiteLinks.HEALING_BENEFITS} text={EWebsiteLinksNames.HEALING_BENEFITS} />
						<CustomLink to={EWebsiteLinks.ABOUT} text={EWebsiteLinksNames.ABOUT} />
						<CustomLink to={EWebsiteLinks.FAQ} text={EWebsiteLinksNames.FAQ} />
						<ContactButton size={EButtonSize.MEDIUM} text="Rejoins-moi pour ton soin" />
					</div>
				</div>
			</header>
		);
	}
}
