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
import { GrMail as MailIcon } from "react-icons/gr";
import { BsTelephoneInboundFill as PhoneIcon } from "react-icons/bs";

// Config
import { EWebsiteLinks } from "@/src/Config/WebsiteLinks";

// Styles
import classes from "./classes.module.scss";

type IProps = {
	id: EWebsiteLinks;
	className?: string;
};

export default class ContactSection extends Component<IProps> {
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
							Offre-toi un moment de bien-être unique : réserve maintenant un soin énergétique pour retrouver énergie et équilibre intérieur.
						</Text>
					</div>

					<div className={classes["contact-infos"]}>
						<div className={classes["contact-info"]}>
							<LocalisationIcon className={classes["icon"]} />
							<Text tag={ETextTag.P} className={classes["text"]}>
								06580 Pégomas
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

					<ContactButton size={EButtonSize.MEDIUM} text="Prends soin de toi, c'est simple" />
				</div>
			</section>
		);
	}
}
