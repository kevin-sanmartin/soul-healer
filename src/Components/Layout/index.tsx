import classNames from "classnames";
import { Component, Fragment } from "react";
import Footer from "../Footer";
import Headers from "../Headers";
import HeadMetadata from "../HeadMetadata";

// Styles
import classes from "./classes.module.scss";

type IProps = {
  className?: string;
  children?: React.ReactNode;
};
type IState = {};

export default class Layout extends Component<IProps, IState> {
  public render() {
    return (
      <Fragment>
        <HeadMetadata />
        <Headers />
        <main className={classes.root}>
          <div className={classNames(classes.content, this.props.className)}>{this.props.children}</div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}
