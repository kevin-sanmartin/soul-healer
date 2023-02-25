import { Component } from "react";
import classNames from "classnames";

// Components
import Text from "@/src/Components/Text";
import Tag, { ETagColor } from "@/src/Components/Tag";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Styles
import classes from "./classes.module.scss";

type IProps = {
  className?: string;
};
type IState = {};

export default class SecondSection extends Component<IProps, IState> {
  override render() {
    return (
      <section className={classNames(classes["root"], this.props.className)}>
        <div className={classes["presentation-container"]}>
          <div className={classes["video-container"]}>
            <video controls controlsList="nodownload" className={classes["video"]}>
              <source src="/tmp.mp4" type="video/mp4" />
            </video>
          </div>

          <div className={classes["text-container"]}>
            <Tag color={ETagColor.BLANCHED_ALMOND}>
              <Text tag={ETextTag.SPAN} font="xiaoWei" className={classes["tag"]}>
                A propos de moi
              </Text>
            </Tag>

            <Text tag={ETextTag.H2} font="cabin" className={classes["title"]}>
              J'aide les individus à devenir leur meilleure version.
            </Text>

            <Text tag={ETextTag.P} className={classes["description"]}>
              I am glad that you have made it here to send a distress signal, and inform the Senate that all on board
              were killed. Dantooine. I'm not going to Alderaan. I really got to go. But that to me.
            </Text>
          </div>
        </div>
      </section>
    );
  }
}
