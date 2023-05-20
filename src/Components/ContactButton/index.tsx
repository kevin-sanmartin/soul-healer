import { Component } from "react";
import { PopupButton } from "react-calendly";
import classNames from "classnames";

// Entities
import { EButtonSize } from "@/src/Entities/Button";

// Styles
import classes from "./classes.module.scss";
import { ZCOOL_XiaoWei } from "@next/font/google";
const xiaoWei = ZCOOL_XiaoWei({ weight: ["400"], subsets: ["latin"], display: "swap" });

type IProps = {
  text: string;
  size: EButtonSize;
};
type IState = {
  rootElement: HTMLElement | null;
};

export default class ContactButton extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      rootElement: null,
    };
  }

  override render() {
    if (!this.state.rootElement) return null;
    return (
      <PopupButton
        url="https://calendly.com/ame-guerrisseuse/premier-contact"
        rootElement={this.state.rootElement}
        styles={{ fontFamily: xiaoWei.style.fontFamily }}
        className={classNames(classes["root"], classes[this.props.size])}
        text={this.props.text.toUpperCase()}
      />
    );
  }

  public componentDidMount() {
    this.setState({ rootElement: document.getElementById("__next") });
  }

  public componentDidUpdate(_: Readonly<IProps>, prevState: Readonly<IState>): void {
    if (!this.state.rootElement && prevState.rootElement !== this.state.rootElement) {
      this.setState({ rootElement: document.getElementById("__next") });
    }
  }
}
