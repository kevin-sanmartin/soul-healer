import classNames from "classnames";
import { Component } from "react";

// Entities
import { EButtonSize, EButtonVariant } from "@/src/Entities/Button";

// Styles
import classes from "./classes.module.scss";

type IProps = {
  variant: EButtonVariant;
  size: EButtonSize;
  isSubmitButton?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};
type IState = {};

export default class Button extends Component<IProps, IState> {
  static defaultProps = {
    variant: EButtonVariant.PRIMARY,
    size: EButtonSize.MEDIUM,
  };

  public render() {
    return (
      <button
        disabled={this.props.disabled}
        onClick={this.props.onClick}
        type={this.props.isSubmitButton ? "submit" : "button"}
        className={classNames(
          classes["root"],
          classes[this.props.variant],
          classes[this.props.size],
          this.props.className
        )}
      >
        {this.props.children}
      </button>
    );
  }
}
