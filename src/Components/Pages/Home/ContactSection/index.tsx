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

// Icons
import { FaMapMarkerAlt as LocalisationIcon } from "react-icons/fa";
import { BsTelephoneFill as PhoneIcon } from "react-icons/bs";
import { MdEmail as EmailIcon } from "react-icons/md";

// Config
import { EWebsiteLinks } from "@/src/Config/WebsiteLinks";

// Styles
import classes from "./classes.module.scss";
import Input from "@/src/Components/Input";
import Select from "@/src/Components/Select";

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
              N&apos;hésitez pas à me contacter pour toute question ou pour prendre rendez-vous. Je suis là pour vous
              aider à soulager vos douleurs physiques, améliorer votre bien-être émotionnel et spirituel, et vous
              accompagner dans votre cheminement personnel
            </Text>
          </div>

          <div className={classes["contact-infos"]}>
            <div className={classes["contact-info"]}>
              <LocalisationIcon className={classes["icon"]} />
              <Text tag={ETextTag.P} className={classes["text"]}>
                70 Route de Pegomas, 06130 Grasse
              </Text>
            </div>

            <div className={classes["contact-info"]}>
              <PhoneIcon className={classes["icon"]} />
              <Text tag={ETextTag.P} className={classes["text"]}>
                <a href="tel:+33665472490">06.65.47.24.90</a>
              </Text>
            </div>

            <div className={classes["contact-info"]}>
              <EmailIcon className={classes["icon"]} />
              <Text tag={ETextTag.P} className={classes["text"]}>
                <a href="mailto:richnad06@gmail.com">richnad06@gmail.com</a>
              </Text>
            </div>
          </div>

          <form
            className={classes["form"]}
            onSubmit={(e) => {
              e.preventDefault();
              console.log(this.state);
            }}
          >
            <div className={classes["form-group"]}>
              <Input
                name="name"
                required
                onChange={this.handleInputChange}
                label="Nom & Prénom"
                value={this.state.name}
              />
            </div>

            <div className={classes["form-group"]}>
              <Input
                name="phoneNumber"
                required
                onChange={this.handleInputChange}
                label="Téléphone"
                value={this.state.phoneNumber}
              />
            </div>

            <div className={classes["form-group"]}>
              <Input name="email" required onChange={this.handleInputChange} label="Email" value={this.state.email} />
            </div>

            <Select
              onChange={(e) => console.log(e)}
              options={[ESeanceType.PRESENTIEL, ESeanceType.DISTANT]}
              label="Type de soin"
            />

            <Text tag={ETextTag.SPAN} font="cabin" className={classes["text"]}>
              Décrivez moi au mieux vos besoins et vos attentes.
            </Text>

            <div className={classes["form-group"]}>
              <Input
                required
                isTextArea
                name="message"
                onChange={this.handleInputChange}
                label="Message"
                value={this.state.message}
              />
            </div>

            <Button isSubmitButton>
              <Text tag={ETextTag.SPAN} font="cabin">
                ENVOYER
              </Text>
            </Button>
          </form>
        </div>
      </section>
    );
  }

  private handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<IState, keyof IState>);
  }
}
