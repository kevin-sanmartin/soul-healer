import { Component } from "react";
import classNames from "classnames";
import Image from "next/image";
import nodemailer from "nodemailer";

// Components
import Text from "@/src/Components/Text";
import Input from "@/src/Components/Input";
import Select from "@/src/Components/Select";
import Button from "@/src/Components/Button";

// Entities
import { ETextTag } from "@/src/Entities/Text";
import { EButtonSize } from "@/src/Entities/Button";

// Assets
import HandHeartOutside from "/public/images/outside/portrait-professionnel-041-min.jpg";

// Utils
import reCAPTCHA from "@/src/Utils/reCaptcha";

// Icons
import { FaMapMarkerAlt as LocalisationIcon } from "react-icons/fa";
import { GrMail as MailIcon } from "react-icons/gr";
import { BsTelephoneInboundFill as PhoneIcon } from "react-icons/bs";

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
  isSubmitButtonDisabled: boolean;
};

type TUserInfo = Omit<IState, "isSubmitButtonDisabled">;

export default class ContactSection extends Component<IProps, IState> {
  private readonly reCaptcha = new reCAPTCHA("6LcyIdgoAAAAAB4Fb62iKeuE6rk1QIxIyBfVvv0T", "contact");

  constructor(props: IProps) {
    super(props);
    this.state = {
      name: "test",
      email: "test@test.fr",
      phoneNumber: "0606067060",
      message: "test",
      seanceType: ESeanceType.PRESENTIEL,
      isSubmitButtonDisabled: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  public render() {
    return (
      <section className={classNames(classes["root"], this.props.className)} id={this.props.id}>
        <div className={classes["image-container"]}>
          <Image src={HandHeartOutside} className={classes["image"]} fill alt="" />
        </div>
        <div className={classes["info-container"]}>
          <div className={classes["title-container"]}>
            <Text tag={ETextTag.H2} className={classes["title"]}>
              Contactez-moi
            </Text>

            <Text tag={ETextTag.P} className={classes["description"]}>
              N&apos;hésitez pas à m&apos;envoyer un message. Je suis là pour vous aider à soulager vos douleurs
              physiques, améliorer votre bien-être intérieur, et vous accompagner dans votre cheminement personnel.
            </Text>
          </div>

          <div className={classes["contact-infos"]}>
            <div className={classes["contact-info"]}>
              <LocalisationIcon className={classes["icon"]} />
              <Text tag={ETextTag.P} className={classes["text"]}>
                06130 Grasse
              </Text>
            </div>
            <div className={classes["contact-info"]}>
              <MailIcon className={classes["icon"]} />
              <Text tag={ETextTag.P} className={classes["text"]}>
                richnad06@gmail.com
              </Text>
            </div>
            <div className={classes["contact-info"]}>
              <PhoneIcon className={classes["icon"]} />
              <Text tag={ETextTag.P} className={classes["text"]}>
                06.65.47.24.90
              </Text>
            </div>
          </div>

          <div className={classes["form-container"]}>
            <Input
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
              label="Nom & Prénom"
              required
            />

            <Input
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email}
              label="Email"
              type="email"
              required
            />

            <Input
              name="phoneNumber"
              onChange={this.handleInputChange}
              value={this.state.phoneNumber}
              label="Numéro de téléphone"
            />
            <Select
              name="seanceType"
              label="Type de préstation"
              onChange={this.handleInputChange}
              options={[ESeanceType.PRESENTIEL, ESeanceType.DISTANT]}
            />

            <Input
              name="message"
              required
              onChange={this.handleInputChange}
              value={this.state.message}
              label="Message"
              isTextArea
            />

            <Button size={EButtonSize.LARGE} onClick={this.sendEmail} disabled={this.state.isSubmitButtonDisabled}>
              <Text tag={ETextTag.P} font="cabin">
                ENVOYER
              </Text>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  public override componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=6LcyIdgoAAAAAB4Fb62iKeuE6rk1QIxIyBfVvv0T";
    document.body.appendChild(script);
  }

  private async sendEmail() {
    if (!this.state.email || !this.state.name || !this.state.message || !this.state.seanceType) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    const userInfo: TUserInfo = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      phoneNumber: this.state.phoneNumber,
      seanceType: this.state.seanceType,
    };
    try {
      const reCaptchaToken: string = await this.reCaptcha.getToken();
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userInfo, reCaptchaToken }),
      });

      const data = await response.json();

      this.setState({
        isSubmitButtonDisabled: false,
        name: "",
        email: "",
        message: "",
        phoneNumber: "",
        seanceType: null,
      });

      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue lors de l'envoi du mail");
      this.setState({ isSubmitButtonDisabled: false });
    }
  }

  private handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<IState, keyof TUserInfo>);
  }
}
