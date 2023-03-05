import { ETextTag } from "@/src/Entities/Text";
import { Component, ReactNode } from "react";
import Text from "@/src/Components/Text";

// Styles
import classes from "./classes.module.scss";
import classNames from "classnames";

type IProps = {
  title: string;
  listItems: string[];
  icon?: ReactNode;
  className?: string;
};
type IState = {};

export default class ListItem extends Component<IProps, IState> {
  override render() {
    return (
      <div className={classNames(classes["root"], this.props.className)}>
        <div className={classes["title-container"]}>
          {this.props.icon}
          <Text tag={ETextTag.P} className={classes["title"]}>
            {this.props.title}
          </Text>
        </div>
        <ul className={classes["items-container"]}>
          {this.props.listItems.map((item, index) => (
            <li key={index} className={classes["item"]}>
              <Text tag={ETextTag.P} font="xiaoWei" className={classes["text"]}>
                {`- ${item}`}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
