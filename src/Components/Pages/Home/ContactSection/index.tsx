import { Component } from "react";
import classNames from "classnames";
import Image from "next/image";

// Components
import Text from "@/src/Components/Text";
import Button from "@/src/Components/Button";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Assets
import HandHeartOutside from "/public/images/outside/portrait-professionnel-041-min.jpg";

// Config
import { EWebsiteLinks } from "@/src/Config/WebsiteLinks";

// Styles
import classes from "./classes.module.scss";

type IProps = {
  id: EWebsiteLinks;
  className?: string;
};
type IState = {};

export default class ContactSection extends Component<IProps, IState> {
  public render() {
    return (
      <section className={classNames(classes["root"], this.props.className)} id={this.props.id}>
        <div className={classes["image-container"]}>
          <Image src={HandHeartOutside} className={classes["image"]} fill alt="" />
        </div>

        <div className={classes["form-container"]}>
          <Text tag={ETextTag.H2} className={classes["title"]}>
            Contactez-moi
          </Text>

          <Text tag={ETextTag.P} className={classes["description"]}>
            N'hésitez pas à me contacter pour toute question ou pour prendre rendez-vous. Je suis là pour vous aider à
            soulager vos douleurs physiques, améliorer votre bien-être émotionnel et spirituel, et vous accompagner dans
            votre cheminement personnel
          </Text>

          <form className={classes["form"]}>
            <div className={classes["form-group"]}>
              <label htmlFor="name">
                <Text tag={ETextTag.SPAN} className={classes["text"]}>
                  Nom & Prénom
                </Text>
              </label>
              <input type="text" id="name" name="name" className={classes["input"]} required />
            </div>

            <div className={classes["form-group"]}>
              <label htmlFor="tel">
                <Text tag={ETextTag.SPAN} className={classes["text"]}>
                  Téléphone
                </Text>
              </label>
              <input type="tel" id="tel" name="tel" className={classes["input"]} required />
            </div>

            <div className={classes["form-group"]}>
              <label htmlFor="message">
                <Text tag={ETextTag.SPAN} className={classes["text"]}>
                  Message
                </Text>
              </label>
              <textarea id="message" name="message" rows={5} className={classes["input"]} required />
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
