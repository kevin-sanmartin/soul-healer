import { Component } from "react";
import classNames from "classnames";

// Components
import Text from "@/src/Components/Text";
import Tag, { ETagColor } from "@/src/Components/Tag";
import Observer from "@/src/Components/Observer";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Config
import { EWebsiteLinks } from "@/src/Config/WebsiteLinks";

// Assets
import VideoPoster from "public/images/outside/portrait-professionnel-101.jpg";

// Styles
import classes from "./classes.module.scss";

type IProps = {
	id: EWebsiteLinks;
	className?: string;
};
type IState = {
	isPresentationContainerVisible: boolean;
};

export default class Welcome extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			isPresentationContainerVisible: false,
		};

		this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
	}

	public render() {
		return (
			<section className={classNames(classes["root"], this.props.className)} id={this.props.id}>
				<Observer onVisibilityChange={this.handleVisibilityChange} className={classes["presentation-container"]}>
					<div
						className={classNames(classes["video-container"], {
							[classes["is-visible"]]: this.state.isPresentationContainerVisible,
						})}>
						<iframe
							className={classes["video"]}
							src="https://www.youtube.com/embed/RMUx8-1GIJA?si=9AltmyasP0il9KzY"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						/>
					</div>

					<div
						className={classNames(classes["text-container"], {
							[classes["is-visible"]]: this.state.isPresentationContainerVisible,
						})}>
						<Tag color={ETagColor.CRAYOLA}>
							<Text tag={ETextTag.SPAN} font="xiaoWei" className={classes["tag"]}>
								Bienvenue
							</Text>
						</Tag>

						<Text tag={ETextTag.H2} className={classes["title"]}>
							Et si tu t'offrais une pause bien-être rien que pour toi ?
						</Text>

						<div className={classes["description-container"]}>
							<Text tag={ETextTag.P} className={classes["description"]}>
								Tu as sûrement déjà ressenti un moment où tu étais fatigué, stressé, ou avec des tensions, et tu n'arrivais pas à te détendre, non ?
							</Text>

							<Text tag={ETextTag.P} className={classes["description"]}>
								Un soin énergétique permet de rétablir un équilibre, de libérer ces blocages et de restaurer une énergie plus fluide.
							</Text>

							<Text tag={ETextTag.P} className={classes["description"]}>
								C'est un peu comme une méditation, où on apprend à se détendre et à libérer l'esprit des pensées envahissantes.
							</Text>

							<Text tag={ETextTag.P} className={classes["description"]}>
								Les soins énergétiques visent à atteindre un état de calme intérieur et de mieux être global.
							</Text>
						</div>
					</div>
				</Observer>
			</section>
		);
	}

	private handleVisibilityChange(isVisible: boolean) {
		if (this.state.isPresentationContainerVisible === isVisible) return;
		this.setState({ isPresentationContainerVisible: isVisible });
	}
}
