import { Component } from "react";

// Components
import Text from "../Text";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Styles
import classes from "./classes.module.scss";

type IProps = {};
type IState = {};

export default class Logo extends Component<IProps, IState> {
  public render() {
    return (
      <div className={classes["root"]}>
        <Text tag={ETextTag.SPAN}>Logo</Text>
      </div>
    );
  }
}
