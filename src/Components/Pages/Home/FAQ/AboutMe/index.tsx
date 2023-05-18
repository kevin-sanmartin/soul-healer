import { Component } from "react";
import Image from "next/image";

// Components
import Text from "@/src/Components/Text";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Assets
import MusicOutside from "/public/images/outside/portrait-professionnel-108.jpg";
import Outside from "/public/images/outside/meganeguisnet-photographe--11.jpg";
import Outside2 from "/public/images/portraits/portrait-professionnel-032-min.jpg";

// Styles
import classes from "./classes.module.scss";
import classNames from "classnames";

type IProps = {};
type IState = {};

export default class AboutMe extends Component<IProps, IState> {
  override render() {
    return (
      <section className={classes["root"]}>
        <div className={classes["section-content"]}>
          <div className={classes["container"]}>
            <div className={classes["text-container"]}>
              <Text tag={ETextTag.P} className={classes["text"]}>
                Pour devenir thérapeute en soins énergétiques, il n&apos;existe pas de diplôme reconnu. Magnétiseur ?
                Énergéticien ? Thérapeute ? Les appellations sont nombreuses. Mais est-ce si important au fond ?
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                Je suis Nadia, l’Äme Guerrisseuse, j’habite grasse (06), maman de deux grandes filles, avec mon mari
                nous avons ce même point commun d’aimer communiquer avec les autres.
              </Text>
            </div>

            <div className={classes["image-container"]}>
              <Image src={MusicOutside} className={classes["image"]} fill alt="" />
            </div>
          </div>

          <div className={classes["container"]}>
            <div className={classes["text-container"]}>
              <Text tag={ETextTag.H3} className={classes["title"]}>
                Comment je suis venue à faire des soins énergétiques ?
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                Adolescente, je me sentais toujours différentes, pas à ma place, en retrait, pas comprise.
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                J’ai eu : Des périodes de grosses souffrances ou il me suffisait d’aller dans la nature pour évacuer le
                trop plein. Je disais souvent à ma mère « j’en ai marre de tout » sans l‘expliquer.je sais pourquoi
                aujourd’hui… J’ai eu des flashs souvent négatifs mais qui m’annonçaient le futur, donc un jour j’ai dit
                stop et ça s’est arrêté. Par la suite, j’ai réalisé que c’était une bénédiction de savoir à l’avance ce
                qui allait se passer.
              </Text>
            </div>

            <div className={classes["image-container"]}>
              <Image src={Outside} className={classNames(classes["image"], classes["position-top"])} fill alt="" />
            </div>
          </div>

          <div className={classes["container"]}>
            <div className={classes["text-container"]}>
              <Text tag={ETextTag.P} className={classes["text"]}>
                J’ai été assistante maternelle pendant 8 ans, j’ai adoré mon métier, le contact avec les enfants, tout
                ce qu’ils nous apprennent, leur façon naturelle et authentique d’être et de ressentir, mais après un
                atelier énergétique tout a basculé.
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                J’ai réalisé que ce métier n’était plus pour moi, j’avais besoin de donner une autre forme de service et
                j’ai laissé faire la vie, l’univers me guider.
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                J’ai donc fait une formation de l’âme et du cœur, qui m’a mis sur la voix : « de prendre conscience que
                nous avons tous beaucoup de possibilités en nous », à être qui je suis, puis mes mains ont commencé à
                chauffer et vibrer. Tout s’est enchainé…
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                Actuellement en formation dans une école de guérisseuse, j’apprends mais je sais qu’on apprend tout au
                long de notre vie. J’arrête de vouloir être parfaite, de rentrer dans une case, et je lâche prise, tout
                arrive quand c’est le bon moment.
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                J’ai donc décidé de mettre mes techniques de guérison naturelles au profit du bien-être commun.
                J’observe, je me laisse guider et je suis comme une enfant remplie de joie à chaque fois que je fais un
                soin et que cela fonctionne, aucun ne se ressemble. Je suis tellement reconnaissante de pouvoir vivre
                cela. NAMASTE.
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                Alors qu’en dites-vous ? Envie de communiquer et d’apprendre à se guérir soi -même ? Envie de
                m’autoriser à vous soigner ? Envie de se rencontrer ?
              </Text>
            </div>

            <div className={classNames(classes["image-container"], classes["portrait"])}>
              <Image src={Outside2} className={classes["image"]} fill alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
