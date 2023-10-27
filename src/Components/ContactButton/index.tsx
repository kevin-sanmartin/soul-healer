import { Component, Fragment } from "react";
import classNames from "classnames";

// Components
import Button from "../Button";
import Modal from "../Modal";
import ContactSection from "../Pages/Home/ContactSection";

// Config
import { EWebsiteLinks } from "@/src/Config/WebsiteLinks";

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
  isModalVisible: boolean;
};

export default class ContactButton extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  override render() {
    return (
      <Fragment>
        <Button className={classNames(classes["root"], classes[this.props.size])} onClick={this.toggleModal}>
          {this.props.text.toUpperCase()}
        </Button>
        {this.state.isModalVisible && (
          <Modal onClose={this.toggleModal}>
            <ContactSection id={EWebsiteLinks.CONTACT} className={classes["contact"]} />
          </Modal>
        )}
      </Fragment>
    );
  }

  private toggleModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
}
