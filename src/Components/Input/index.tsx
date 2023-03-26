import { Component } from "react";
import classNames from "classnames";

// Components
import Text from "@/src/Components/Text";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Styles
import classes from "./classes.module.scss";

type IProps = {
  value: string;
  name: string;
  placeholder: string;
  type: string;
  onChange: (name: string, value: string) => void;
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  isTextArea?: boolean;
};
type IState = {};

export default class Input extends Component<IProps, IState> {
  static defaultProps = {
    type: "text",
    isTextArea: false,
  };

  constructor(props: IProps) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  override render() {
    return this.renderInputContainer();
  }

  private renderTextArea() {
    return (
      <textarea
        className={classNames(classes["input"])}
        placeholder={this.props.placeholder}
        onChange={this.handleInputChange}
        value={this.props.value}
        name={this.props.name}
        id={this.props.name}
      />
    );
  }

  private renderInput() {
    return (
      <>
        {this.renderLabel()}
        <input
          type={this.props.type}
          className={classNames(classes["input"], this.props.inputClassName)}
          value={this.props.value}
          name={this.props.name}
          onChange={this.handleInputChange}
          placeholder={this.props.placeholder}
          id={this.props.name}
        />
      </>
    );
  }

  private renderLabel() {
    return (
      this.props.label && (
        <label htmlFor={this.props.name} className={this.props.labelClassName}>
          <Text tag={ETextTag.SPAN}>{this.props.label}</Text>
        </label>
      )
    );
  }

  private renderInputContainer() {
    return this.props.isTextArea ? this.renderTextArea() : this.renderInput();
  }

  private handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    this.props.onChange(name, value);
  }
}
