import { Component } from "react";
import Image from "next/image";
import classNames from "classnames";

// Components
import Text from "@/src/Components/Text";
import Observer from "@/src/Components/Observer";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Assets
import RoomDetails from "/public/images/roomDetails/portrait-professionnel-010-min.jpg";
import HandInside from "/public/images/healingSeance/portrait-professionnel-023-min.jpg";

// Styles
import classes from "./classes.module.scss";
import ContactButton from "@/src/Components/ContactButton";
import { EButtonSize } from "@/src/Entities/Button";

type IProps = {};
type IState = {
	isContainerVisible: boolean;
};

export default class HomeHealing extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			isContainerVisible: true,
		};

		this.handleContainerVisibilityChange = this.handleContainerVisibilityChange.bind(this);
	}

	public render() {
		return (
			<Observer
				onVisibilityChange={this.handleContainerVisibilityChange}
				className={classNames(classes["root"], {
					[classes["is-visible"]]: this.state.isContainerVisible,
				})}>
				<div className={classes["image-container"]}>
					<Image src={RoomDetails} className={classes["image"]} alt="" />
				</div>

				<div className={classes["container"]}>
					<Text tag={ETextTag.P} className={classes["title"]}>
						Séance en présentiel
					</Text>

					<div className={classes["text-container"]}>
						<Text tag={ETextTag.P} className={classes["text"]}>
							Découvre mes soins énergétiques dans les Alpes-Maritimes, une approche douce pour ton bien-être global.
						</Text>

						<Text tag={ETextTag.P} className={classes["text"]}>
							Mes soins énergétiques se pratiquent en individuel, par apposition des mains, tout en restant allongé et habillé. Préfère des habits confortables pour
							profiter pleinement de ce moment.
						</Text>

						<Text tag={ETextTag.P} className={classes["text"]}>
							Chaque séance débute par un échange pour comprendre tes attentes et instaurer une relation de confiance. Le soin, accompagné d'une musique douce, vient
							t'inviter au lâcher-prise et à la détente profonde.
						</Text>

						<Text tag={ETextTag.P} className={classes["text"]}>
							Grâce à l'apposition des mains, je canalise les énergies pour rétablir ton équilibre intérieur.
						</Text>

						<Text tag={ETextTag.P} className={classes["text"]}>
							Après le soin, nous échangeons sur tes ressentis et je reste disponible pour un suivi personnalisé.
						</Text>

						<Text tag={ETextTag.P} className={classes["text"]}>
							Offre-toi une pause bien-être à Pégomas dans les Alpes-Maritimes et reconnecte-toi à ton énergie.
						</Text>
					</div>

					<Text tag={ETextTag.P} font="cabin" className={classes["price"]}>
						<span className={classes["bold"]}>75€</span> par séance (1h)
					</Text>

					<ContactButton size={EButtonSize.MEDIUM} text="Ton moment de relaxation commence ici" />
				</div>
			</Observer>
		);
	}

	private handleContainerVisibilityChange(isVisible: boolean) {
		if (this.state.isContainerVisible === isVisible) return;
		this.setState({ isContainerVisible: isVisible });
	}
}
