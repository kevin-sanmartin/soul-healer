import { Component } from "react";
import classNames from "classnames";

// Components
import Dropdown from "@/src/Components/Dropdown";

// Icons
import { FaHandSparkles } from "react-icons/fa";
import { MdFamilyRestroom, MdSocialDistance, MdHome } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";

// Config
import { EWebsiteLinks } from "@/src/Config/WebsiteLinks";

// Styles
import classes from "./classes.module.scss";
import WhatIsEnergyHealing from "./WhatIsEnergyHealing";
import WhoCanDoEnergyHealing from "./WhoCanDoEnergyHealing";
import AboutMe from "./AboutMe";

type IProps = {
  id: string;
  className?: string;
};
type IState = {};

export default class FAQ extends Component<IProps, IState> {
  override render() {
    return (
      <section className={classNames(classes["root"], this.props.className)} id={this.props.id}>
        <Dropdown title="Qu'est-ce qu'un soin énergétique intuitif ?" icon={FaHandSparkles} defaultOpen={false}>
          <WhatIsEnergyHealing />
        </Dropdown>
        <Dropdown title="Qui peut bénéficier de soins énergétiques ?" icon={MdFamilyRestroom}>
          <WhoCanDoEnergyHealing />
        </Dropdown>
        <Dropdown title="Faisons connaissance" icon={BsPersonFill} id={EWebsiteLinks.ABOUT}>
          <AboutMe />
        </Dropdown>
      </section>
    );
  }
}
