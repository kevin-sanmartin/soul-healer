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

// Assets
import MusicOutside from "/public/images/outside/portrait-professionnel-108.jpg";
import Outside from "/public/images/outside/meganeguisnet-photographe--11.jpg";
import Outside2 from "/public/images/portraits/portrait-professionnel-032-min.jpg";

// Styles
import classes from "./classes.module.scss";
import { EWebsiteLinks } from "@/src/Config/WebsiteLinks";

type IProps = {};
type IState = {
	isFirstBlockVisible: boolean;
	isSecondBlockVisible: boolean;
	isThirdBlockVisible: boolean;
};

export default class AboutMe extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			isFirstBlockVisible: true,
			isSecondBlockVisible: true,
			isThirdBlockVisible: true,
		};
		this.handleFirstBlockVisibilityChange = this.handleFirstBlockVisibilityChange.bind(this);
		this.handleSecondBlockVisibilityChange = this.handleSecondBlockVisibilityChange.bind(this);
		this.handleThirdBlockVisibilityChange = this.handleThirdBlockVisibilityChange.bind(this);
	}

	override render() {
		return (
			<section className={classes["root"]}>
				<div className={classes["section-content"]}>
					<Observer
						onVisibilityChange={this.handleFirstBlockVisibilityChange}
						className={classNames(classes["container"], {
							[classes["is-visible"]]: this.state.isFirstBlockVisible,
						})}>
						<div className={classNames(classes["image-container"], classes["portrait"])}>
							<Image src={Outside2} className={classes["image"]} fill alt="" />
						</div>

						<div className={classes["text-container"]}>
							<Text tag={ETextTag.H3} className={classes["title"]}>
								Nadia, praticienne en soins énergétiques à Pégomas dans les Alpes-Maritimes.
							</Text>

							<Text tag={ETextTag.P} className={classes["text"]}>
								Je suis énergéticienne, formée dans une école de guérisseuses, où j'ai approfondi mes connaissances et ma pratique des soins énergétiques.
							</Text>

							<Text tag={ETextTag.P} className={classes["text"]}>
								Mon parcours a débuté lors d'un atelier avec mon ostéopathe énergéticienne, un moment clé où tout a basculer. J'ai pris conscience que je devais
								changer de métier, puis mes mains se sont mises à vibrer et à chauffer, révélant mon potentiel naturel pour transmettre l'énergie.
							</Text>

							<Text tag={ETextTag.P} className={classes["text"]}>
								Depuis, j'accompagne les personnes dans leur chemin de bien-être et de rééquilibrage énergétique, avec passion et bienveillance dans un espace dédié
								pour toi enclin à la relaxation
							</Text>

							<Text tag={ETextTag.P} className={classNames(classes["text"], classes["bold"])}>
								Es-tu prêt(e) à recevoir un soin énergétique personnalisé et à vivre une expérience qui pourrait changer ton quotidien ?
							</Text>
						</div>
					</Observer>

					{/* <Observer
						onVisibilityChange={this.handleSecondBlockVisibilityChange}
						className={classNames(classes["container"], {
							[classes["is-visible"]]: this.state.isSecondBlockVisible,
						})}>
						<div className={classes["text-container"]}>
							<Text tag={ETextTag.H3} className={classes["title"]}>
								Comment je suis venue à faire des soins énergétiques ?
							</Text>

							<Text tag={ETextTag.P} className={classes["text"]}>
								Adolescente, je me sentais toujours différente, pas à ma place, en retrait, pas comprise.
							</Text>

							<Text tag={ETextTag.P} className={classes["text"]}>
								J'ai eu des périodes de grosses souffrances où il me suffisait d'aller dans la nature pour évacuer le trop-plein. Je disais souvent à ma mère « j'en
								ai marre de tout » sans l'expliquer. Je sais pourquoi aujourd'hui… J'ai eu des flashs souvent négatifs, mais qui m'annonçaient le futur, donc un
								jour j'ai dit stop et ça s'est arrêté. Par la suite, j'ai réalisé que c'était une bénédiction de savoir à l'avance ce qui allait se passer.
							</Text>
						</div>

						<div className={classes["image-container"]}>
							<Image src={Outside} className={classNames(classes["image"], classes["position-top"])} fill alt="" />
						</div>
					</Observer>

					<Observer
						onVisibilityChange={this.handleThirdBlockVisibilityChange}
						className={classNames(classes["container"], {
							[classes["is-visible"]]: this.state.isThirdBlockVisible,
						})}>
						<div className={classes["text-container"]}>
							<Text tag={ETextTag.P} className={classes["text"]}>
								J'ai été assistante maternelle pendant 8 ans, j'ai adoré mon métier, le contact avec les enfants, tout ce qu'ils nous apprennent, leur façon
								naturelle et authentique d'être et de ressentir, mais après un atelier énergétique tout a basculé.
							</Text>

							<Text tag={ETextTag.P} className={classes["text"]}>
								J'ai réalisé que ce métier n'était plus pour moi, j'avais besoin de donner une autre forme de service et j'ai laissé faire la vie, l'univers me
								guider.
							</Text>

							<Text tag={ETextTag.P} className={classes["text"]}>
								J'ai donc fait une formation de l'âme et du cœur, qui m'a mis sur la voix : « de prendre conscience que nous avons tous beaucoup de possibilités en
								nous », à être qui je suis, puis mes mains ont commencé à chauffer et vibrer. Tout s'est enchaîné…
							</Text>

							<Text tag={ETextTag.P} className={classes["text"]}>
								J'ai terminé ma formation dans une école de guérisseuse, j'apprends mais je sais qu'on apprend tout au long de notre vie. J'arrête de vouloir être
								parfaite, de rentrer dans une case, et je lâche prise, tout arrive quand c'est le bon moment.
							</Text>

							<Text tag={ETextTag.P} className={classes["text"]}>
								J'ai donc décidé de mettre mes techniques de guérison naturelles au profit du bien-être commun. J'observe, je me laisse guider et je suis comme une
								enfant remplie de joie à chaque fois que je fais un soin et que cela fonctionne, aucun ne se ressemble. Je suis tellement reconnaissante de pouvoir
								vivre cela. NAMASTE.
							</Text>

							<Text tag={ETextTag.P} className={classes["text"]}>
								Avez-vous le désir de communiquer, de vous autoriser à recevoir un soin énergétique, et enfin, avez-vous envie que l'on se rencontre ?
							</Text>
						</div>

						<div className={classNames(classes["image-container"], classes["portrait"])}>
							<Image src={Outside2} className={classes["image"]} fill alt="" />
						</div>
					</Observer> */}

					<ContactButton size={EButtonSize.MEDIUM} text="Prêt(e) à t'écouter vraiment ?" />
				</div>
			</section>
		);
	}

	private handleFirstBlockVisibilityChange(isVisible: boolean): void {
		if (this.state.isFirstBlockVisible === isVisible) return;
		this.setState({ isFirstBlockVisible: isVisible });
	}

	private handleSecondBlockVisibilityChange(isVisible: boolean): void {
		if (this.state.isSecondBlockVisible === isVisible) return;
		this.setState({ isSecondBlockVisible: isVisible });
	}

	private handleThirdBlockVisibilityChange(isVisible: boolean): void {
		if (this.state.isThirdBlockVisible === isVisible) return;
		this.setState({ isThirdBlockVisible: isVisible });
	}
}
