import { Component } from "react";
import classNames from "classnames";

// Styles
import classes from "./classes.module.scss";

type IProps = {
  onOpenChange: (isOpen: boolean) => void;
  isOpen: boolean;
};
type IState = {};

export default class BurgerMenu extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  public render() {
    return (
      <div
        className={classNames(classes["root"], {
          [classes["open"]]: this.props.isOpen,
        })}
        onClick={this.toggleOpen}
      >
        <div className={classes["line"]} />
        <div className={classes["line"]} />
        <div className={classes["line"]} />
      </div>
    );
  }

  private toggleOpen() {
    this.props.onOpenChange(!this.props.isOpen);
  }
}
