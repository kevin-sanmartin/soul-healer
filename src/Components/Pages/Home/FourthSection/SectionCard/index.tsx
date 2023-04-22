import { Component } from "react";
import classNames from "classnames";
import { IconType } from "react-icons";

// Components
import Text from "@/src/Components/Text";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Styles
import classes from "./classes.module.scss";

type IProps = {
  icon: IconType;
  text: string;
  isSelected: boolean;
  name: string;
  onClick: (name: string) => void;
  className?: string;
};
type IState = {};

export default class SectionCard extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  public render() {
    return (
      <div className={classNames(classes["root"], this.props.className)} onClick={this.onClick}>
        {this.props.icon({
          className: classNames(classes["icon"], {
            [classes["selected"]]: this.props.isSelected,
          }),
        })}
        <Text
          tag={ETextTag.P}
          className={classNames(classes["text"], {
            [classes["selected"]]: this.props.isSelected,
          })}
        >
          {this.props.text}
        </Text>
      </div>
    );
  }

  private onClick() {
    this.props.onClick(this.props.name);
  }
}
