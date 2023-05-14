import { Component } from "react";
import classNames from "classnames";

// Components
import Dropdown from "@/src/Components/Dropdown";
import WhatIsEnergyHealing from "./WhatIsEnergyHealing";
import WhoCanDoEnergyHealing from "./WhoCanDoEnergyHealing";
import HomeHealing from "./HomeHealing";
import RemoteHealing from "./RemoteHealing";
import AboutMe from "./AboutMe";

// Icons
import { FaHandSparkles } from "react-icons/fa";
import { MdFamilyRestroom, MdSocialDistance, MdHome } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";

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
        <Dropdown title="Qu'est-ce qu'un soin énergétique intuitif ?" icon={FaHandSparkles}>
          <WhatIsEnergyHealing />
        </Dropdown>
        <Dropdown title="Qui peut bénéficier de soins énergétiques ?" icon={MdFamilyRestroom}>
          <WhoCanDoEnergyHealing />
        </Dropdown>
        <Dropdown title="Soin à domicile" icon={MdHome}>
          <HomeHealing />
        </Dropdown>
        <Dropdown title="Soin à distance" icon={MdSocialDistance}>
          <RemoteHealing />
        </Dropdown>
        <Dropdown title="A propos de moi" icon={BsPersonFill}>
          <AboutMe />
        </Dropdown>
      </section>
    );
  }
}
