import { Component } from "react";
import Image from "next/image";
import classNames from "classnames";

// Components
import Text from "@/src/Components/Text";
import ContactButton from "@/src/Components/ContactButton";
import Observer from "@/src/Components/Observer";

// Entities
import { ETextTag } from "@/src/Entities/Text";
import { EButtonSize } from "@/src/Entities/Button";

// Icons
import { HiQuestionMarkCircle } from "react-icons/hi";

// Assets
import MusicOutside from "/public/images/outside/portrait-professionnel-117.jpg";

// Styles
import classes from "./classes.module.scss";

type IProps = {};
type IState = {
	isFirstBlockVisible: boolean;
};

export default class WhatIsEnergyHealing extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			isFirstBlockVisible: true,
		};

		this.handleFirstBlockVisibilityChange = this.handleFirstBlockVisibilityChange.bind(this);
	}

	public render() {
		return (
			<div className={classes["root"]}>
				<Observer
					onVisibilityChange={this.handleFirstBlockVisibilityChange}
					className={classNames(classes["container"], {
						[classes["is-visible"]]: this.state.isFirstBlockVisible,
					})}>
					<div className={classes["text-container"]}>
						<Text tag={ETextTag.P} className={classes["text"]}>
							Un soin énergétique, c'est un moment pour rééquilibrer l'énergie qui circule dans ton corps. Grâce à des gestes doux, souvent avec les mains, on aide à
							enlever les blocages, calmer le stress et booster ton bien-être.
						</Text>

						<Text tag={ETextTag.P} className={classes["text"]}>
							Ça te permet de te sentir mieux, plus léger et aligné avec toi-même. Simple et apaisant !
						</Text>

						<div className={classes["title-container"]}>
							<HiQuestionMarkCircle className={classes["icon"]} />
							<Text tag={ETextTag.H3} font="xiaoWei" className={classes["title"]}>
								Dans quel but ?
							</Text>
						</div>

						<Text tag={ETextTag.P} className={classes["text"]}>
							Le but d'un soin énergétique est de se sentir mieux dans son corps et son esprit. C'est idéal pour se recentrer, se détendre profondement et améliorer
							son bien-être global.
						</Text>

						<Text tag={ETextTag.P} className={classes["text"]}>
							Il est important de noter que le nombre de séances peut varier en fonction de la problématique.
						</Text>
					</div>

					<div className={classes["image-container"]}>
						<Image src={MusicOutside} className={classes["image"]} fill alt="" />
					</div>
				</Observer>

				<div className={classes["contact"]}>
					<ContactButton size={EButtonSize.MEDIUM} text="Restaurez votre bien-être intérieur. Intéressé ?" />
				</div>
			</div>
		);
	}

	private handleFirstBlockVisibilityChange(isVisible: boolean): void {
		if (this.state.isFirstBlockVisible === isVisible) return;
		this.setState({ isFirstBlockVisible: isVisible });
	}
}
