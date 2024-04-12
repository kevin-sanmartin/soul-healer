import { Component } from "react";

// Components
import LegalNotice from "../Pages/Home/LegalNotice";
import Text from "../Text";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

// Styles
import classes from "./classes.module.scss";

type IProps = {};
type IState = {};

export default class Footer extends Component<IProps, IState> {
  public render() {
    return (
      <footer className={classes["root"]}>
        <LegalNotice />
        <Text tag={ETextTag.P}>N° Siret : 92486444000012</Text>
        <div className={classes["social-media-container"]}>
          <a href="https://www.instagram.com/nadia.richard06" target="_blank" rel="noreferrer">
            <FaInstagram className={classes["icon"]} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61553812034072" target="_blank" rel="noreferrer">
            <FaFacebook className={classes["icon"]} />
          </a>
        </div>
      </footer>
    );
  }
}
