import { Component } from "react";

// Styles
import classes from "./classes.module.scss";
import classNames from "classnames";
import HomeHealing from "./HomeHealing";
import RemoteHealing from "./RemoteHealing";
import { ETextTag } from "@/src/Entities/Text";
import Text from "@/src/Components/Text";
import { EBreakpoints } from "@/src/Config/Breakpoints";
import Coaching from "./Coaching";

type IProps = {
	className?: string;
};
type IState = {
	isHomeHealingVisible: boolean;
	isRemoteHealingVisible: boolean;
	isCoachingVisible: boolean;
};

enum ESessionType {
	HOME_HEALING = "HOME_HEALING",
	REMOTE_HEALING = "REMOTE_HEALING",
	COACHING = "COACHING",
}

export default class Sessions extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			isHomeHealingVisible: true,
			isRemoteHealingVisible: false,
			isCoachingVisible: false,
		};
	}

	override render() {
		return (
			<section className={classNames(classes["root"], this.props.className)}>
				<Text tag={ETextTag.P} className={classes["title"]}>
					Mes prestations
				</Text>
				<div className={classes["sessions-selector"]}>
					<Text
						onClick={() => this.handleSelectorClick(ESessionType.HOME_HEALING)}
						tag={ETextTag.P}
						className={classNames(classes["selector"], {
							[classes["selected"]]: this.state.isHomeHealingVisible,
						})}>
						Séances en présentiel
					</Text>
					<Text
						onClick={() => this.handleSelectorClick(ESessionType.REMOTE_HEALING)}
						tag={ETextTag.P}
						className={classNames(classes["selector"], {
							[classes["selected"]]: this.state.isRemoteHealingVisible,
						})}>
						Séances à distance
					</Text>
					<Text
						onClick={() => this.handleSelectorClick(ESessionType.COACHING)}
						tag={ETextTag.P}
						className={classNames(classes["selector"], {
							[classes["selected"]]: this.state.isCoachingVisible,
						})}>
						Coaching + soins énergétiques
					</Text>
				</div>

				<div className={classes["sessions-container"]}>
					{this.state.isHomeHealingVisible && <HomeHealing />}
					{this.state.isRemoteHealingVisible && <RemoteHealing />}
					{this.state.isCoachingVisible && <Coaching />}
				</div>
			</section>
		);
	}

	private handleSelectorClick(sessionType: ESessionType) {
		switch (sessionType) {
			case ESessionType.HOME_HEALING:
				this.setState({ isHomeHealingVisible: true, isRemoteHealingVisible: false, isCoachingVisible: false });
				break;
			case ESessionType.REMOTE_HEALING:
				this.setState({ isHomeHealingVisible: false, isRemoteHealingVisible: true, isCoachingVisible: false });
				break;
			case ESessionType.COACHING:
				this.setState({ isHomeHealingVisible: false, isRemoteHealingVisible: false, isCoachingVisible: true });
		}
	}

	private handleComponentVisibility() {
		this.setState({ isHomeHealingVisible: true, isRemoteHealingVisible: true, isCoachingVisible: true });
	}
}
