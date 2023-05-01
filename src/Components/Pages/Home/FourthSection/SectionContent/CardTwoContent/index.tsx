import { Component } from "react";
import Image from "next/image";
import classNames from "classnames";

// Components
import Text from "@/src/Components/Text";
import Observer from "@/src/Components/Observer";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Assets
import MusicOutside from "/public/images/outside/portrait-professionnel-117.jpg";
import ChakraObject from "/public/images/roomDetails/portrait-professionnel-003-min.jpg";
import oui from "/public/images/outside/portrait-professionnel-034-min.jpg";

// Styles
import classes from "./classes.module.scss";

type IProps = {};
type IState = {
  isFirstBlockVisible: boolean;
  isSecondBlockVisible: boolean;
  isThirdBlockVisible: boolean;
};

export default class CardTwoContent extends Component<IProps, IState> {
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

  public render() {
    return (
      <div className={classes["root"]}>
        <Observer
          onVisibilityChange={this.handleFirstBlockVisibilityChange}
          className={classNames(classes["container"], {
            [classes["is-visible"]]: this.state.isFirstBlockVisible,
          })}
        >
          <div className={classes["text-container"]}>
            <Text tag={ETextTag.P} className={classes["text"]}>
              Nous possédons tous en nous les clés de notre bien être intérieur, il suffit d&apos;être à l&apos;écoute
              de notre corps par nos ressentis.
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              Il arrive cependant que nous ne soyons plus à l&apos;écoute par rapport à des circonstances de la vie, ce
              qui peut être source de mal-être, de souffrances ou de maladies.
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              Savez-vous que nos pensées, nos émotions et sentiments peuvent être à l&apos;origine de nos maladies
              physiques ?
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              Restaurer le lien que nous avons tous est donc primordial ! Dans certains cas nous pourrons y parvenir
              seul, mais parfois une aide extérieure sera nécessaire.
            </Text>
          </div>

          <div className={classes["image-container"]}>
            <Image src={oui} className={classes["image"]} fill alt="" />
          </div>
        </Observer>

        <Observer
          onVisibilityChange={this.handleSecondBlockVisibilityChange}
          className={classNames(classes["container"], {
            [classes["is-visible"]]: this.state.isSecondBlockVisible,
          })}
        >
          <div className={classes["text-container"]}>
            <Text tag={ETextTag.P} className={classes["text"]}>
              Au-delà de notre corps physique, notre être se compose de 7 corps subtils, imbriqués les uns dans les
              autres. En voici un rapide résumé :
            </Text>

            <ul>
              <li>
                <Text tag={ETextTag.P} className={classes["text"]}>
                  1 - Chakra racine (Muladhara) : ancrage et besoins de base (nourriture, argent, indépendance
                  financière).
                </Text>
              </li>
              <li>
                <Text tag={ETextTag.P} className={classes["text"]}>
                  2 - Chakra sacré (Swadhisthana) : émotions, créativité et énergie sexuelle
                </Text>
              </li>
              <li>
                <Text tag={ETextTag.P} className={classes["text"]}>
                  3 - Chakra plexus solaire (Manipura) : confiance en soi, estime de soi, contrôle de sa vie.
                </Text>
              </li>
              <li>
                <Text tag={ETextTag.P} className={classes["text"]}>
                  4 - Chakra du coeur (Anahata) capacité à donner et recevoir de l&apos;amour. Centre de la joie et de
                  la paix intérieure.
                </Text>
              </li>
              <li>
                <Text tag={ETextTag.P} className={classes["text"]}>
                  5 - Chakra de la gorge (Vishuddha) : communication, s&apos;exprimer librement et facilement
                </Text>
              </li>
              <li>
                <Text tag={ETextTag.P} className={classes["text"]}>
                  6 - Chakra du 3ème oeil (Ajna) : intuition, imagination et sagesse.
                </Text>
              </li>
              <li>
                <Text tag={ETextTag.P} className={classes["text"]}>
                  7 - Chakra couronne (Saharara) : connexion spirituelle.
                </Text>
              </li>
            </ul>

            <Text tag={ETextTag.P} className={classes["text"]}>
              Les chakras constituent les 7 principaux centres énergétiques du corps humain. Plus ils sont ouverts et
              plus l&apos;énergie y circule librement.
            </Text>
          </div>

          <div className={classes["image-container"]}>
            <Image src={ChakraObject} className={classNames(classes["image"], classes["image--bottom"])} fill alt="" />
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
              Les soins énergétiques intuitifs se pratiquent, en individuel, par impositions des mains, en étant
              allongé(e) et en restant habillé(e).
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              Le soin énergétique est dit « intuitif » car il s&apos;effectue par canalisation. C&apos;est à dire que
              j&apos;utilise ma capacité intuitive, de ressenti ou de médiumnité pendant le soin. Je me connecte à
              l&apos;énergie christique et je demande assistance à l&apos;archange Mickael, aux êtres de lumières, à mes
              guides et à vos guides. Je suis le transmetteur énergétique. Par conséquent ce qui doit être soigné sera.
            </Text>

            <Text tag={ETextTag.P} className={classes["text"]}>
              J&apos;utilise la Sauge et le Palo Santo qui purifient, nettoient et permettent d&apos;ouvrir
              l&apos;Espace de Guérison, en créant cette connexion profonde entre celui qui donne et celui qui reçoit.
              Chaque soin est unique et différent à chaque fois et pour chacun, en fonction de ce que je reçois pour
              vous dans l&apos;instant présent. Pour vous apporter la paix, l&apos;énergie, la régénération, et la
              libération de tout ce qui vous pèse, au niveau de votre corps, de votre cœur et de votre âme. Il se peut
              qu&apos;il y est besoin de plusieurs soins selon «la problématique».
            </Text>
          </div>

          <div className={classes["image-container"]}>
            <Image src={MusicOutside} className={classes["image"]} fill alt="" />
          </div>
        </Observer>
      </div>
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
