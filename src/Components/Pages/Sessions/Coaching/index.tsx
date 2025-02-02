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
							<b>Mon approche : un accompagnement global pour ton bien-être</b>
							<br />
							Chaque séance commence par un temps d'échange où nous explorons ensemble ta problématique du moment. À travers le coaching, je t'accompagne pour mieux
							comprendre tes émotions, prendre du recul sur ta situation et identifier des clés concrètes pour avancer.
						</Text>

						<Text tag={ETextTag.P} className={classes["text"]}>
							Ensuite, le soin énergétique vient compléter ce travail en libérant les blocages émotionnels et physiques, en rééquilibrant ton énergie et en favorisant
							un état de bien-être profond. Cette synergie entre coaching et soin énergétique te permet de retrouver clarté, apaisement et vitalité, tout en amorçant
							des changements durables dans ton quotidien.
						</Text>

						<Text tag={ETextTag.P} className={classes["text"]}>
							<b>Les bienfaits de cet accompagnement :</b>
							<ul>
								<li>✨ Une prise de conscience et une meilleure compréhension de tes besoins</li>
								<li>✨ Un apaisement mental et émotionnel face aux défis du quotidien</li>
								<li>✨ Une libération des tensions physiques et énergétiques</li>
								<li>✨ Un soutien sur mesure pour avancer avec confiance et sérénité</li>
							</ul>
						</Text>

						<Text tag={ETextTag.P} className={classes["text"]}>
							Cet accompagnement est conçu pour t'aider à te reconnecter à toi-même, à lever les blocages qui t'empêchent d'avancer et à retrouver un équilibre
							global.
						</Text>

						<Text tag={ETextTag.P} className={classes["text"]}>
							<b>Formules et tarifs :</b>
							<ul>
								<li>- Séance combinée Coaching + soin énergétique (2H) : 85€</li>
								<li>- Pack de 3 séances (Coaching + soin énergétique) : 230€ (au lieu de 255€)</li>
								<li>- Pack de 5 séances (Coaching + soin énergétique) : 380€ (au lieu de 425€)</li>
							</ul>
						</Text>

						<Text tag={ETextTag.P} className={classes["text"]}>
							Ces séances sont une véritable parenthèse de bien-être pour avancer sereinement vers un mieux-être global. Réserve dès aujourd'hui ton accompagnement
							personnalisé !
						</Text>
					</div>

					{/* <Text tag={ETextTag.P} font="cabin" className={classes["price"]}>
						<span className={classes["bold"]}>65€</span> par séance
					</Text> */}

					<ContactButton size={EButtonSize.MEDIUM} text="Prends le temps de te recentrer" />
				</div>
			</Observer>
		);
	}

	private handleContainerVisibilityChange(isVisible: boolean) {
		if (this.state.isContainerVisible === isVisible) return;
		this.setState({ isContainerVisible: isVisible });
	}
}
