import { Component } from "react";
import classNames from "classnames";

// Components
import Dropdown from "@/src/Components/Dropdown";
import WhatIsEnergyHealing from "./WhatIsEnergyHealing";
import AboutMe from "./AboutMe";

// Icons
import { FaHandSparkles } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

// Config
import { EWebsiteLinks } from "@/src/Config/WebsiteLinks";

// Styles
import classes from "./classes.module.scss";

type IProps = {
  id: string;
  className?: string;
};
type IState = {};

export default class FAQ extends Component<IProps, IState> {
  override render() {
    return (
      <section className={classNames(classes["root"], this.props.className)} id={this.props.id}>
        <Dropdown title="Qu'est-ce qu'un soin énergétique intuitif ?" icon={FaHandSparkles} defaultOpen>
          <WhatIsEnergyHealing />
        </Dropdown>
        <Dropdown title="Faisons connaissance" icon={BsPersonFill} id={EWebsiteLinks.ABOUT} defaultOpen>
          <AboutMe />
        </Dropdown>
      </section>
    );
  }
}
