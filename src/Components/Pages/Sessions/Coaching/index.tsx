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
import Outside from "/public/images/outside/meganeguisnet-photographe--11.jpg";

// Styles
import classes from "./classes.module.scss";
import ContactButton from "@/src/Components/ContactButton";
import { EButtonSize } from "@/src/Entities/Button";

type IProps = {};
type IState = {
	isContainerVisible: boolean;
};

export default class Coaching extends Component<IProps, IState> {
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
					<Image src={Outside} className={classes["image"]} alt="" />
				</div>

				<div className={classes["container"]}>
					<Text tag={ETextTag.P} className={classes["title"]}>
						Coaching personnalisé + soins énergétiques
					</Text>

					<div className={classes["text-container"]}>
						<Text tag={ETextTag.P} className={classes["text"]}>
							<b>Mon approche :</b>
							<br /> Chaque soin commence par un échange pour mieux comprendre tes besoins. Ensuite, je te propose un soin énergétique adapté, qui travaille sur tes
							blocages émotionnels et physiques, pour t'aider à retrouver sérénité et énergie.
						</Text>

						<Text tag={ETextTag.P} className={classes["text"]}>
							<b>Les bienfaits de ce soin personnalisé :</b>
							<ul>
								<li>- Libération des tensions et rééquilibrage énergétique</li>
								<li>- Harmonisation des émotions et apaisement du mental</li>
								<li>- Retrouver de la clarté, de la sérénité et de l'énergie</li>
								<li>- Suivi personnalisé pour un bien-être durable</li>
							</ul>
						</Text>

						<Text tag={ETextTag.P} className={classes["text"]}>
							<b>Formules et tarifs :</b>
							<ul>
								<li>- Séance combinée Coaching + soin énergétique (2H) : 85€</li>
								<li>- Pack de 3 séances combinées (Coaching + soin énergétique) : 230€ (au lieu de 255€)</li>
								<li>- Pack de 5 séances combinées (Coaching + soin énergétique) : 380€ (au lieu de 425€)</li>
							</ul>
						</Text>

						<Text tag={ETextTag.P} className={classes["text"]}>
							Chaque séance est un moment privilégié pour prendre soin de toi et travailler en profondeur sur tes objectifs de bien-être. Réserve tes séances
							combinées « Coaching et soin énergétique » dès aujourd'hui pour retrouver un bien-être complet et durable.
						</Text>
					</div>

					{/* <Text tag={ETextTag.P} font="cabin" className={classes["price"]}>
						<span className={classes["bold"]}>65€</span> par séance
					</Text> */}

					<ContactButton size={EButtonSize.MEDIUM} text="Explorez les bienfaits d'un soin. Prêt à essayer ?" />
				</div>
			</Observer>
		);
	}

	private handleContainerVisibilityChange(isVisible: boolean) {
		if (this.state.isContainerVisible === isVisible) return;
		this.setState({ isContainerVisible: isVisible });
	}
}
