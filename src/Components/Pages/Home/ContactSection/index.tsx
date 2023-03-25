import { Component } from "react";
import classNames from "classnames";
import Image from "next/image";

// Components
import Text from "@/src/Components/Text";
import Button from "@/src/Components/Button";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Assets
import ForestImage from "/public/images/outside/portrait-professionnel-054-min.jpg";

// Styles
import classes from "./classes.module.scss";
import { EWebsiteLinks } from "@/src/Config/WebsiteLinks";

type IProps = {
  id: EWebsiteLinks;
  className?: string;
};
type IState = {};

export default class ContactSection extends Component<IProps, IState> {
  override render() {
    return (
      <section className={classNames(classes["root"], this.props.className)} id={this.props.id}>
        <div className={classes["image-container"]}>
          <Image src={ForestImage} className={classes["image"]} fill alt="" />
        </div>

        <div className={classes["form-container"]}>
          <Text tag={ETextTag.H2} className={classes["title"]}>
            Contactez-moi
          </Text>

          <Text tag={ETextTag.P} className={classes["description"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia.
          </Text>

          <form className={classes["form"]}>
            <div className={classes["form-group"]}>
              <label htmlFor="name">
                <Text tag={ETextTag.SPAN} className={classes["text"]}>
                  Nom & Prénom
                </Text>
              </label>
              <input type="text" id="name" name="name" className={classes["input"]} />
            </div>

            <div className={classes["form-group"]}>
              <label htmlFor="email">
                <Text tag={ETextTag.SPAN} className={classes["text"]}>
                  Email
                </Text>
              </label>
              <input type="email" id="email" name="email" className={classes["input"]} />
            </div>

            <div className={classes["form-group"]}>
              <label htmlFor="message">
                <Text tag={ETextTag.SPAN} className={classes["text"]}>
                  Message
                </Text>
              </label>
              <textarea id="message" name="message" rows={5} className={classes["input"]} />
            </div>

            <Button isSubmitButton>
              <Text tag={ETextTag.SPAN} className={classes["text"]}>
                Envoyer
              </Text>
            </Button>
          </form>
        </div>
      </section>
    );
  }
}
