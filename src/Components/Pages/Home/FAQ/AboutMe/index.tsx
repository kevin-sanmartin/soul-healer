import { Component } from "react";
import Image from "next/image";

// Components
import Text from "@/src/Components/Text";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Assets
import MusicOutside from "/public/images/outside/portrait-professionnel-117.jpg";

// Styles
import classes from "./classes.module.scss";

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
                Je suis Nadia, l&apos;Äme Guerrisseuse, j&apos;habite grasse (06), maman de deux grandes filles : Mégane
                29 ans photographe et Julie 20 ans en école d&apos;infirmière, avec mon mari nous avons ce même point
                commun d&apos;aimer communiquer avec les autres. Je souhaite vous apporter avec toute ma bienveillance,
                toute mon aide à travers mes soins énergétiques intuitifs que je peux vous prodiguer.
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                Adolescente, je me sentais toujours différentes, pas à ma place, en retrait, pas comprise. J&apos;ai eu
                plus tard des périodes de grosses souffrances ou il me suffisait d&apos;aller dans la nature pour
                évacuer le trop plein. Je disais souvent à ma mère « j&apos;en ai marre de tout » sans l&apos;expliquer.
                Je sais pourquoi aujourd&apos;hui...
              </Text>
            </div>

            <div className={classes["image-container"]}>
              <Image src={MusicOutside} className={classes["image"]} fill alt="" />
            </div>
          </div>

          <div className={classes["container"]}>
            <div className={classes["text-container"]}>
              <Text tag={ETextTag.P} className={classes["text"]}>
                Puis, plus tard, j&apos;ai eu des flashs souvent négatifs mais qui m&apos;annonçaient le futur, donc un
                jour j&apos;ai dit stop et ça s&apos;est arrêté. Par la suite, j&apos;ai réalisé que c&apos;était une
                bénédiction de savoir à l&apos;avance ce qui allait se passer.
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                Aujourd&apos;hui j&apos;accepte qui je suis, hypersensible, remplie d&apos;amour à donner et c&apos;est
                un immense plaisir de pouvoir vous aider, vous écouter, vous rendre votre vie meilleure pendant un
                instant de bien être à mon domicile. J&apos;ai toujours naturellement su écouter, aider à dénouer les
                problématiques de mon entourage, les personnes se confient facilement à moi.
              </Text>
            </div>

            <div className={classes["image-container"]}>
              <Image src={MusicOutside} className={classes["image"]} fill alt="" />
            </div>
          </div>
          {/* 
          <Text tag={ETextTag.H3} className={classes["title"]}>
            Comment je suis venue à faire des soins énergétiques ?
          </Text> */}

          <div className={classes["container"]}>
            <div className={classes["text-container"]}>
              <Text tag={ETextTag.P} className={classes["text"]}>
                J&apos;ai été assistante maternelle pendant 8 ans, j&apos;ai adoré mon métier, le contact avec les
                enfants, tout ce qu&apos;ils nous apprennent, leur façon naturelle et authentique d&apos;être et de
                ressentir, mais après un atelier énergétique d&apos;une journée tout a basculé.
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                J&apos;ai réalisé que ce métier n&apos;était plus pour moi, j&apos;avais besoin de donner une autre
                forme de service et j&apos;ai laissé faire la vie, l&apos;univers me guider.
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                J&apos;ai donc fait une formation de coaching qui m&apos;a mis sur la voix : « de prendre conscience que
                nous avons tous beaucoup de possibilités en nous », à être qui je suis et moins introverti, puis mes
                mains ont commencé à chauffer et vibrer. Tout s&apos;est enchainé...
              </Text>
            </div>

            <div className={classes["image-container"]}>
              <Image src={MusicOutside} className={classes["image"]} fill alt="" />
            </div>
          </div>

          <div className={classes["container"]}>
            <div className={classes["text-container"]}>
              <Text tag={ETextTag.P} className={classes["text"]}>
                Je fais depuis septembre une formation de guérisseuse, qui me permait de voir l&apos;éventail des
                possibilités que nous avons tous en nous, j&apos;apprends mais je sais qu&apos;on apprend toujours tout
                au long de notre vie. J&apos;arrête de vouloir être parfaite, de rentrer dans une case, et je lâche
                prise, tout arrive quand c&apos;est le bon moment.
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                J&apos;ai donc décidé « d&apos;expérimenter », de mettre mes techniques de guérison naturelles au profit
                du bien-être commun. J&apos;observe, je me laisse guider et je suis comme une enfant remplie de joie à
                chaque fois que je fais un soin et que cela fonctionne, aucun ne se ressemble. Je suis tellement
                reconnaissante de pouvoir vivre cela. NAMASTE
              </Text>

              <Text tag={ETextTag.P} className={classes["text"]}>
                Alors qu&apos;en dites-vous ? Envie de se rencontrer ? de communiquer et d&apos;apprendre à se guérir
                soi -même ? de m&apos;autoriser à vous soigner ?
              </Text>
            </div>

            <div className={classes["image-container"]}>
              <Image src={MusicOutside} className={classes["image"]} fill alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
