import { Component } from "react";
import classNames from "classnames";
import Image from "next/image";

// Components
import Text from "@/src/Components/Text";
import ContactButton from "@/src/Components/ContactButton";

// Entities
import { ETextTag } from "@/src/Entities/Text";
import { EButtonSize } from "@/src/Entities/Button";

// Assets
import HandHeartOutside from "/public/images/outside/portrait-professionnel-041-min.jpg";

// Icons
import { FaMapMarkerAlt as LocalisationIcon } from "react-icons/fa";

// Config
import { EWebsiteLinks } from "@/src/Config/WebsiteLinks";

// Styles
import classes from "./classes.module.scss";

enum ESeanceType {
  DISTANT = "Distance",
  PRESENTIEL = "Présentiel",
}

type IProps = {
  id: EWebsiteLinks;
  className?: string;
};
type IState = {
  name: string;
  email: string;
  seanceType: ESeanceType | null;
  phoneNumber: string;
  message: string;
};

export default class ContactSection extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
      seanceType: null,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  public render() {
    return (
      <section className={classNames(classes["root"], this.props.className)} id={this.props.id}>
        <div className={classes["image-container"]}>
          <Image src={HandHeartOutside} className={classes["image"]} fill alt="" />
        </div>

        <div className={classes["form-container"]}>
          <div className={classes["title-container"]}>
            <Text tag={ETextTag.H2} className={classes["title"]}>
              Contactez-moi
            </Text>

            <Text tag={ETextTag.P} className={classes["description"]}>
              N&apos;hésitez pas à prendre rendez-vous. Je suis là pour vous aider à soulager vos douleurs physiques,
              améliorer votre bien-être émotionnel et spirituel, et vous accompagner dans votre cheminement personnel
            </Text>
          </div>

          <div className={classes["contact-infos"]}>
            <div className={classes["contact-info"]}>
              <LocalisationIcon className={classes["icon"]} />
              <Text tag={ETextTag.P} className={classes["text"]}>
                06130 Grasse
              </Text>
            </div>
          </div>

          <ContactButton size={EButtonSize.MEDIUM} text="Contactez-moi" />
        </div>
      </section>
    );
  }

  private handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<IState, keyof IState>);
  }
}
