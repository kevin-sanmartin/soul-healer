import React from "react";
import { Component } from "react";
import classNames from "classnames";

// Components
import Text from "../Text";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Styles
import classes from "./classes.module.scss";

type IProps = {
  title: string;
  className?: string;
  children?: React.ReactNode;
};
type IState = {
  isOpen: boolean;
  scrollHeight: number;
};

export default class Dropdown extends Component<IProps, IState> {
  private contentRef = React.createRef<HTMLDivElement>();
  private dropdownRef = React.createRef<HTMLDivElement>();

  constructor(props: IProps) {
    super(props);
    this.state = {
      isOpen: false,
      scrollHeight: 0,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  public render() {
    return (
      <div ref={this.dropdownRef}>
        <button
          type="button"
          className={classNames(classes["collapsible"], this.props.className, { [classes["open"]]: this.state.isOpen })}
          onClick={this.toggleOpen}
        >
          <Text tag={ETextTag.P}>{this.props.title}</Text>
        </button>
        <div ref={this.contentRef} style={{ maxHeight: this.state.scrollHeight }} className={classes["content"]}>
          {this.props.children}
        </div>
      </div>
    );
  }

  public componentDidMount(): void {
    document.addEventListener("click", this.handleClickOutside);
  }

  public componentDidUpdate(): void {
    if (!this.contentRef.current) return;

    let scrollHeight = 0;
    if (this.state.isOpen) {
      scrollHeight = this.contentRef.current.scrollHeight;
    }

    if (scrollHeight !== this.state.scrollHeight) {
      this.setState({ scrollHeight });
    }
  }

  public componentWillUnmount(): void {
    document.removeEventListener("click", this.handleClickOutside);
  }

  private toggleOpen() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  private handleClickOutside(event: MouseEvent) {
    if (this.dropdownRef.current && !this.dropdownRef.current.contains(event.target as Node)) {
      this.setState({ isOpen: false });
    }
  }
}
