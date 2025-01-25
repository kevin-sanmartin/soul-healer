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
							Comment vous sentez-vous ? Comment puis-je vous aider ?
						</Text>

						<div className={classes["description-container"]}>
							<Text tag={ETextTag.P} className={classes["description"]}>
								Savez-vous que nos pensées, nos émotions et sentiments peuvent être à l'origine de nos maladies physiques ?
							</Text>

							<Text tag={ETextTag.P} className={classes["description"]}>
								Nous possédons tous en nous les clés de notre bien-être intérieur, il suffit d'être à l'écoute de notre corps par nos ressentis.
							</Text>

							<Text tag={ETextTag.P} className={classes["description"]}>
								Il arrive cependant que nous ne soyons plus à l'écoute par rapport à des circonstances de la vie, ce qui peut être source de mal-être, de
								souffrances ou de maladies.
							</Text>

							<Text tag={ETextTag.P} className={classes["description"]}>
								Restaurer le lien que nous avons tous est donc primordial ! Dans certains cas, nous pourrons y parvenir seul, mais parfois une aide extérieure sera
								nécessaire.
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
