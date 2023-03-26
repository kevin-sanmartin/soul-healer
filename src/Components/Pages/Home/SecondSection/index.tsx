import { Component, createRef } from "react";
import classNames from "classnames";

// Components
import Text from "@/src/Components/Text";
import Tag, { ETagColor } from "@/src/Components/Tag";
import Observer from "@/src/Components/Observer";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Icons
import { RiMentalHealthLine as MentalHealthIcon } from "react-icons/ri";
import { GiHealing as HealingIcon } from "react-icons/gi";
import { MdOutlineHealthAndSafety as HealthIcon } from "react-icons/md";

// Config
import { EWebsiteLinks } from "@/src/Config/WebsiteLinks";

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
  private _presentationContainerRef = createRef<HTMLDivElement>();

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
        <div className={classes["presentation-container"]} ref={this._presentationContainerRef}>
          <Observer
            onVisibilityChange={this.handleVisibilityChange}
            className={classNames(classes["video-container"], {
              [classes["is-visible"]]: this.state.isPresentationContainerVisible,
            })}
          >
            <video controls controlsList="nodownload" className={classes["video"]}>
              <source src="/presentation-video.mp4" type="video/mp4" />
            </video>
          </Observer>

          <Observer
            onVisibilityChange={this.handleVisibilityChange}
            className={classNames(classes["text-container"], {
              [classes["is-visible"]]: this.state.isPresentationContainerVisible,
            })}
          >
            <Tag color={ETagColor.BLANCHED_ALMOND}>
              <Text tag={ETextTag.SPAN} font="xiaoWei" className={classes["tag"]}>
                A propos de moi
              </Text>
            </Tag>

            <Text tag={ETextTag.H2} font="cabin" className={classes["title"]}>
              J&apos;aide les individus à devenir leur meilleure version.
            </Text>

            <Text tag={ETextTag.P} className={classes["description"]}>
              J&apos;ai été assistante maternelle pendant 8 ans, j&apos;ai adoré mon métier, le contact avec les
              enfants, tout ce qu&apos;ils nous apprennent, leur façon naturelle et authentique d&apos;être et de
              ressentir, mais après un atelier énergétique d&apos;une journée tout a basculé
            </Text>

            <Text tag={ETextTag.P} className={classes["description"]}>
              J&apos;ai pris conscience que ce métier n&apos;était plus pour moi, j&apos;avais besoin de donner une
              autre forme de service et j&apos;ai laissé faire la vie, l&apos;univers me guider. J&apos;ai donc fait une
              formation de coaching qui m&apos;a appris à être qui je suis et moins introverti, puis mes mains ont
              commencé à chauffer et vibrer. Tout s&apos;est enchaîné…
            </Text>

            <div className={classes["icons-container"]}>
              <div className={classes["container"]}>
                <MentalHealthIcon className={classes["icon"]} />
                <Text tag={ETextTag.P} className={classes["text"]}>
                  Heal your troubles
                </Text>
              </div>

              <div className={classes["container"]}>
                <HealingIcon className={classes["icon"]} />
                <Text tag={ETextTag.P} className={classes["text"]}>
                  Heal your troubles
                </Text>
              </div>

              <div className={classes["container"]}>
                <HealthIcon className={classes["icon"]} />
                <Text tag={ETextTag.P} className={classes["text"]}>
                  Heal your troubles
                </Text>
              </div>
            </div>
          </Observer>
        </div>
      </section>
    );
  }

  private handleVisibilityChange(isVisible: boolean) {
    this.setState({ isPresentationContainerVisible: isVisible });
  }
}
