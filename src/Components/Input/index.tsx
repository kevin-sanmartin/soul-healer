import { Component } from "react";
import classNames from "classnames";

// Components
import Text from "@/src/Components/Text";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Styles
import classes from "./classes.module.scss";
import { Cabin } from "@next/font/google";
const cabin = Cabin({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap" });

type IProps = {
  value: string;
  name: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => void;
  placeholder?: string;
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  isTextArea?: boolean;
  required?: boolean;
};
type IState = {
  isFocused: boolean;
};

export default class Input extends Component<IProps, IState> {
  static defaultProps = {
    type: "text",
    isTextArea: false,
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      isFocused: false,
    };
    this.toggleFocus = this.toggleFocus.bind(this);
  }

  public render() {
    return this.renderInputContainer();
  }

  private renderTextArea() {
    return (
      <div className={classes["input-container"]}>
        {this.renderLabel()}
        <textarea
          onFocus={this.toggleFocus}
          onBlur={this.toggleFocus}
          style={{ fontFamily: cabin.style.fontFamily }}
          className={classNames(classes["input"])}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          required={this.props.required}
          value={this.props.value}
          name={this.props.name}
          id={this.props.name}
        />
      </div>
    );
  }

  private renderInput() {
    return (
      <div className={classes["input-container"]}>
        {this.renderLabel()}
        <input
          onFocus={this.toggleFocus}
          onBlur={this.toggleFocus}
          className={classNames(classes["input"], this.props.inputClassName)}
          style={{ fontFamily: cabin.style.fontFamily }}
          onChange={this.props.onChange}
          required={this.props.required}
          value={this.props.value}
          type={this.props.type}
          name={this.props.name}
          id={this.props.name}
        />
      </div>
    );
  }

  private renderLabel() {
    return (
      this.props.label && (
        <label
          htmlFor={this.props.name}
          className={classNames(classes["label"], {
            [classes["active"]]: this.state.isFocused,
          })}
        >
          <Text tag={ETextTag.SPAN} className={classes["text"]} font="cabin">
            {this.props.label}
            {this.props.required && "*"}
          </Text>
        </label>
      )
    );
  }

  private renderInputContainer() {
    return this.props.isTextArea ? this.renderTextArea() : this.renderInput();
  }

  private toggleFocus() {
    this.setState({ isFocused: !this.state.isFocused });
  }
}
