import { Component } from "react";

// Assets
import { AiFillStar as StarIcon } from "react-icons/ai";

// Styles
import classes from "./classes.module.scss";
import Text from "@/src/Components/Text";
import { ETextTag } from "@/src/Entities/Text";
import classNames from "classnames";

export interface IReview {
  id: number;
  name: string;
  review: string;
  sessionType: "Séance à domicile" | "Séance à distance";
}

type IProps = {
  review: IReview;
  className?: string;
};
type IState = {};

export default class ReviewItem extends Component<IProps, IState> {
  override render() {
    return (
      <div className={classNames(classes["root"], this.props.className)}>
        <div className={classes["stars-container"]}>
          {Object.keys([...Array(5)]).map((_, index) => (
            <StarIcon key={index} className={classes["star"]} />
          ))}
        </div>

        <div className={classes["review"]}>
          <Text tag={ETextTag.P} font="cabin">
            {this.props.review.review}
          </Text>
        </div>

        <div className={classes["reviewer-info"]}>
          <Text tag={ETextTag.P} font="cabin">
            {this.props.review.name}
          </Text>
          <Text tag={ETextTag.P} font="cabin" className={classes["session-type"]}>
            {this.props.review.sessionType}
          </Text>
        </div>
      </div>
    );
  }
}
