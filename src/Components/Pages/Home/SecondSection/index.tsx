import { Component } from "react";
import classNames from "classnames";

// Components
import Text from "@/src/Components/Text";
import Tag, { ETagColor } from "@/src/Components/Tag";
import Observer from "@/src/Components/Observer";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Config
import { EWebsiteLinks } from "@/src/Config/WebsiteLinks";

// Assets
import VideoPoster from "public/images/outside/portrait-professionnel-101.jpg";

// Styles
import classes from "./classes.module.scss";

type IProps = {
  id: EWebsiteLinks;
  className?: string;
};
type IState = {
  isPresentationContainerVisible: boolean;
};

export default class SecondSection extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isPresentationContainerVisible: false,
    };

    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  public render() {
    return (
      <section className={classNames(classes["root"], this.props.className)} id={this.props.id}>
        <Observer onVisibilityChange={this.handleVisibilityChange} className={classes["presentation-container"]}>
          <div
            className={classNames(classes["video-container"], {
              [classes["is-visible"]]: this.state.isPresentationContainerVisible,
            })}
          >
            <video controls controlsList="nodownload" className={classes["video"]} playsInline>
              <img src="public/images/outside/portrait-professionnel-034-min.jpg" alt="Portrait professionnel" />
              <source src="/presentation-video.mp4" type="video/mp4" />
            </video>
          </div>

          <div
            className={classNames(classes["text-container"], {
              [classes["is-visible"]]: this.state.isPresentationContainerVisible,
            })}
          >
            <Tag color={ETagColor.BLANCHED_ALMOND}>
              <Text tag={ETextTag.SPAN} font="xiaoWei" className={classes["tag"]}>
                Bienvenue
              </Text>
            </Tag>

            <Text tag={ETextTag.H2} className={classes["title"]}>
              Je vous aide à devenir la meilleure version de vous-même.
            </Text>

            <Text tag={ETextTag.P} className={classes["description"]}>
              Aujourd&apos;hui, avec mes outils et mes qualités, je vous accompagne pour que vous puissiez accéder, à
              votre rythme à la meilleure version de vous-même, à mon domicile dans une pièce qui vous est dédiée, pour
              un instant de bien-être, une pause pour soi.
            </Text>

            <Text tag={ETextTag.P} className={classes["description"]}>
              Soulager les personnes par mes soins énergétiques est source de bien-être pour moi, mais également pour
              elles. Je suis comme une enfant qui découvre l&apos;immense possibilité que j&apos;ai, à chaque soin qui
              ne se ressemble pas. Mes capacités se développent au fil du temps (ma clair voyance, ma clair audience, ma
              clair ressenti), j&apos;évolue et tout est juste, tout arrive quand ça doit arriver.
            </Text>

            <Text tag={ETextTag.P} className={classes["description"]}>
              J&apos;expérimente la cocréation angélique, et j&apos;observe tout simplement ce qui se passe pour moi,
              dans ma vie et chez les personnes que je soigne.
            </Text>
          </div>
        </Observer>
      </section>
    );
  }

  private handleVisibilityChange(isVisible: boolean) {
    if (this.state.isPresentationContainerVisible === isVisible) return;
    this.setState({ isPresentationContainerVisible: isVisible });
  }
}
