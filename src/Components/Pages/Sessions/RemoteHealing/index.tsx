import { Component } from "react";
import Image from "next/image";
import classNames from "classnames";

// Components
import Text from "@/src/Components/Text";
import Observer from "@/src/Components/Observer";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Assets
import HandOutside from "/public/images/outside/portrait-professionnel-085.jpg";
import IllustrationImage from "/public/images/outside/portrait-professionnel-042-min.jpg";

// Styles
import classes from "./classes.module.scss";
import ContactButton from "@/src/Components/ContactButton";
import { EButtonSize } from "@/src/Entities/Button";

type IProps = {};
type IState = {
	isContainerVisible: boolean;
};

export default class RemoteHealing extends Component<IProps, IState> {
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
					<Image src={HandOutside} className={classes["image"]} alt="" />
				</div>

				<div className={classes["container"]}>
					<Text tag={ETextTag.P} className={classes["title"]}>
						Soins énergétiques à distance - Réserve dès aujourd'hui
					</Text>

					<div className={classes["text-container"]}>
						<Text tag={ETextTag.P} className={classes["text"]}>
							Mes soins énergétiques à distance sont disponibles sur réservation. Pour organiser ta séance, contacte-moi par email avec tes disponibilités. Nous
							fixerons un rendez-vous téléphonique pour faire connaissance, convenir d'une date et finaliser les détails.
						</Text>

						<Text tag={ETextTag.P} className={classes["text"]}>
							Avant le soin, je te demanderai une photo récente (claire, de face, sans filtre, avec les yeux visibles) pour assurer un suivi personnalisé lors de
							futurs rendez-vous. Tu recevras également toutes les recommandations nécessaires par email la veille.
						</Text>

						<Text tag={ETextTag.P} className={classes["text"]}>
							Le jour du soin, installe-toi confortablement dans un lieu calme, en position assise ou allongé, et prépare-toi à la détente. Une musique apaisante et
							des exercices de respiration profonde favoriseront ta relaxation. Je t'enverrai un message à la fin du soin pour t'en informer.
						</Text>

						<Text tag={ETextTag.P} className={classes["text"]}>
							Après la séance, nous échangerons pour faire le point sur tes ressentis et évaluer tes besoins. Un suivi peut être organisé selon tes sensations et
							l'évolution constatée.
						</Text>

						<Text tag={ETextTag.P} className={classes["text"]}>
							Réserve ton soin énergétique à distance et offre-toi un moment de bien-être, où que tu sois.
						</Text>
					</div>

					<Text tag={ETextTag.P} font="cabin" className={classes["price"]}>
						<span className={classes["bold"]}>60€</span> par séance
					</Text>

					<ContactButton size={EButtonSize.MEDIUM} text="Soin intuitif, énergie régénératrice. Essayez ?" />
				</div>
			</Observer>
		);
	}

	private handleContainerVisibilityChange(isVisible: boolean) {
		if (this.state.isContainerVisible === isVisible) return;
		this.setState({ isContainerVisible: isVisible });
	}
}
