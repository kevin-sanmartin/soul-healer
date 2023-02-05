import { Component } from "react";
import classNames from "classnames";

// Components
import Text from "@/src/Components/Text";

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
        <Text tag={ETextTag.H2} className={classes["title"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>

        <video controls controlsList="nodownload" className={classes["video"]}>
          <source src="/tmp.mp4" type="video/mp4" />
        </video>

        <Text tag={ETextTag.P} className={classes["description"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptate ut, quas quam ullam minus nihil
          qui dignissimos dolore blanditiis et, ipsam consequatur natus voluptatum velit facere vero placeat suscipit,
          sed voluptatibus recusandae nobis enim. Reiciendis, officiis, suscipit at cupiditate vitae voluptatibus
          voluptatem voluptatum aliquam incidunt et quis molestias labore odit dicta atque commodi officia dolores
          ducimus totam? Earum hic id vitae.
        </Text>
      </section>
    );
  }
}
