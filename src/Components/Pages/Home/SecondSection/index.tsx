import { Component, createRef } from "react";
import classNames from "classnames";

// Components
import Text from "@/src/Components/Text";
import Tag, { ETagColor } from "@/src/Components/Tag";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Icons
import { RiMentalHealthLine as MentalHealthIcon } from "react-icons/ri";
import { GiHealing as HealingIcon } from "react-icons/gi";
import { MdOutlineHealthAndSafety as HealthIcon } from "react-icons/md";

// Styles
import classes from "./classes.module.scss";
import Observer from "@/src/Components/Observer";

type IProps = {
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
      <section className={classNames(classes["root"], this.props.className)}>
        <div className={classes["presentation-container"]} ref={this._presentationContainerRef}>
          <Observer
            onVisibilityChange={this.handleVisibilityChange}
            className={classNames(classes["video-container"], {
              [classes["is-visible"]]: this.state.isPresentationContainerVisible,
            })}
          >
            <video controls controlsList="nodownload" className={classes["video"]}>
              <source src="/tmp.mp4" type="video/mp4" />
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
              I am glad that you have made it here to send a distress signal, and inform the Senate that all on board
              were killed. Dantooine. I&apos;m not going to Alderaan. I really got to go. But that to me.
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
