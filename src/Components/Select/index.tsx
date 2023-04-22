import { Component } from "react";

// Styles
import classes from "./classes.module.scss";
import { Cabin } from "@next/font/google";
const cabin = Cabin({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap" });

type IProps = {
  label: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
};
type IState = {};

export default class Select extends Component<IProps, IState> {
  override render() {
    return (
      <select className={classes["root"]} onChange={this.props.onChange} style={{ fontFamily: cabin.style.fontFamily }}>
        <option value="">--{this.props.label}--</option>
        {this.props.options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
}
