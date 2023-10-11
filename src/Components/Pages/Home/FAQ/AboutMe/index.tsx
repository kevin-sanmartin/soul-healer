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
            })}
          >
            <div className={classes["text-container"]}>
              <Text tag={ETextTag.H3} className={classes["title"]}>
                Qu'est-ce qui m'anime et me rend heureuse ?
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                Je suis Nadia, j&apos;habite Grasse (06), maman de deux grandes filles, avec mon mari nous avons ce même
                point commun d&apos;aimer communiquer avec les autres.
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                Ce qui m'anime, c'est de vous aider a retrouver votre bien-être intérieur, vous soulagez de vos maux,
                d'échanger avec vous, de vous apporter toute ma bienveillance, de discuter de vos maux émotionnels.
              </Text>
            </div>

            <div className={classes["image-container"]}>
              <Image src={MusicOutside} className={classes["image"]} fill alt="" />
            </div>
          </Observer>

          <Observer
            onVisibilityChange={this.handleSecondBlockVisibilityChange}
            className={classNames(classes["container"], {
              [classes["is-visible"]]: this.state.isSecondBlockVisible,
            })}
          >
            <div className={classes["text-container"]}>
              <Text tag={ETextTag.H3} className={classes["title"]}>
                Comment je suis venue à faire des soins énergétiques ?
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                Adolescente, je me sentais toujours différente, pas à ma place, en retrait, pas comprise.
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                J&apos;ai eu des périodes de grosses souffrances où il me suffisait d&apos;aller dans la nature pour
                évacuer le trop-plein. Je disais souvent à ma mère « j&apos;en ai marre de tout » sans l&apos;expliquer.
                Je sais pourquoi aujourd&apos;hui… J&apos;ai eu des flashs souvent négatifs, mais qui m&apos;annonçaient
                le futur, donc un jour j&apos;ai dit stop et ça s&apos;est arrêté. Par la suite, j&apos;ai réalisé que
                c&apos;était une bénédiction de savoir à l&apos;avance ce qui allait se passer.
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
            })}
          >
            <div className={classes["text-container"]}>
              <Text tag={ETextTag.P} className={classes["text"]}>
                J&apos;ai été assistante maternelle pendant 8 ans, j&apos;ai adoré mon métier, le contact avec les
                enfants, tout ce qu&apos;ils nous apprennent, leur façon naturelle et authentique d&apos;être et de
                ressentir, mais après un atelier énergétique tout a basculé.
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                J&apos;ai réalisé que ce métier n&apos;était plus pour moi, j&apos;avais besoin de donner une autre
                forme de service et j&apos;ai laissé faire la vie, l&apos;univers me guider.
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                J&apos;ai donc fait une formation de l&apos;âme et du cœur, qui m&apos;a mis sur la voix : « de prendre
                conscience que nous avons tous beaucoup de possibilités en nous », à être qui je suis, puis mes mains
                ont commencé à chauffer et vibrer. Tout s&apos;est enchaîné…
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                J&apos;ai terminé ma formation dans une école de guérisseuse, j&apos;apprends mais je sais qu&apos;on
                apprend tout au long de notre vie. J&apos;arrête de vouloir être parfaite, de rentrer dans une case, et
                je lâche prise, tout arrive quand c&apos;est le bon moment.
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                J&apos;ai donc décidé de mettre mes techniques de guérison naturelles au profit du bien-être commun.
                J&apos;observe, je me laisse guider et je suis comme une enfant remplie de joie à chaque fois que je
                fais un soin et que cela fonctionne, aucun ne se ressemble. Je suis tellement reconnaissante de pouvoir
                vivre cela. NAMASTE.
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                Avez-vous le désir de communiquer, de vous autoriser à recevoir un soin énergétique, et enfin, avez-vous
                envie que l'on se rencontre ?
              </Text>
            </div>
            <div className={classNames(classes["image-container"], classes["portrait"])}>
              <Image src={Outside2} className={classes["image"]} fill alt="" />
            </div>
          </Observer>

          <ContactButton size={EButtonSize.MEDIUM} text="Travaillons ensemble pour une harmonie de vos énergies" />
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
