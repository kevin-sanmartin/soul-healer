import React from "react";
import { Component } from "react";
import classNames from "classnames";
import { IconType } from "react-icons";

// Components
import Text from "../Text";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Icons
import { IoIosArrowDown as ArrowIcon } from "react-icons/io";

// Styles
import classes from "./classes.module.scss";

type IProps = {
  id?: string;
  title: string;
  icon?: IconType;
  defaultOpen: boolean;
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

  static defaultProps = {
    defaultOpen: false,
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      isOpen: props.defaultOpen,
      scrollHeight: 0,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  public render() {
    const Icon = this.props.icon;
    return (
      <div ref={this.dropdownRef} className={classes["root"]} id={this.props.id}>
        <button
          type="button"
          className={classNames(classes["collapsible"], this.props.className, { [classes["open"]]: this.state.isOpen })}
          onClick={this.toggleOpen}
        >
          {Icon && <Icon className={classes["icon"]} />}
          <Text tag={ETextTag.P} className={classes["title"]}>
            {this.props.title}
          </Text>
          <ArrowIcon className={classNames(classes["arrow"], { [classes["open"]]: this.state.isOpen })} />
        </button>
        <div ref={this.contentRef} style={{ maxHeight: this.state.scrollHeight }} className={classes["content"]}>
          {this.props.children}
        </div>
      </div>
    );
  }

  public componentDidMount(): void {
    document.addEventListener("click", this.handleClickOutside);
    window.addEventListener("resize", this.onResize);

    if (!this.contentRef.current) return;

    let scrollHeight = 0;
    if (this.state.isOpen) {
      scrollHeight = this.contentRef.current.scrollHeight;
    }

    if (scrollHeight !== this.state.scrollHeight) {
      this.setState({ scrollHeight });
    }
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
    window.removeEventListener("resize", this.onResize);
  }

  private onResize() {
    this.setState({ scrollHeight: this.contentRef.current?.scrollHeight || 0 });
  }

  private toggleOpen() {
    setTimeout(() => {
      if (!this.dropdownRef.current) return;
      window.scrollTo({ top: this.dropdownRef.current.offsetTop - 90, behavior: "smooth" });
    }, 600);

    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  private handleClickOutside(event: MouseEvent) {
    // if (this.dropdownRef.current && !this.dropdownRef.current.contains(event.target as Node)) {
    //   this.setState({ isOpen: false });
    // }
  }
}
