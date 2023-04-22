import { Component, ReactNode } from "react";
import classNames from "classnames";
import { IconType } from "react-icons";

// Components
import SectionCard from "./SectionCard";
import CardOneContent from "./SectionContent/CardOneContent";
import CardTwoContent from "./SectionContent/CardTwoContent";
import CardThreeContent from "./SectionContent/CardThreeContent";
import Text from "@/src/Components/Text";
import CustomLink from "@/src/Components/Headers/CustomLink";
import Button from "@/src/Components/Button";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Config
import { EWebsiteLinks } from "@/src/Config/WebsiteLinks";

// Icons
import { FaHandSparkles } from "react-icons/fa";
import { MdFamilyRestroom as FamilyIcon } from "react-icons/md";

// Styles
import classes from "./classes.module.scss";

export enum ESectionCardName {
  CARD1 = "card1",
  CARD2 = "card2",
  CARD3 = "card3",
}

export interface ISectionCard {
  name: ESectionCardName;
  text: string;
  icon: IconType;
  isSelected: boolean;
  content: ReactNode;
}

type IProps = {
  id: EWebsiteLinks;
  className?: string;
};
type IState = {
  cards: ISectionCard[];
};

export default class FourthSection extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      cards: [
        {
          name: ESectionCardName.CARD1,
          text: "Qui peut bénéficier de soins énergétiques ?",
          icon: FamilyIcon,
          isSelected: false,
          content: <CardOneContent />,
        },
        {
          name: ESectionCardName.CARD2,
          text: "Qu'est-ce qu'un soin énergétique intuitif ?",
          icon: FaHandSparkles,
          isSelected: true,
          content: <CardTwoContent />,
        },
        // {
        //   name: ESectionCardName.CARD3,
        //   text: "En toute transparence",
        //   icon: BsPersonBoundingBox,
        //   isSelected: false,
        //   content: <CardThreeContent />,
        // },
      ],
    };
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  public render() {
    return (
      <section className={classNames(classes["root"], this.props.className)} id={this.props.id}>
        <div className={classes["section-cards"]}>
          {this.state.cards.map((card) => (
            <SectionCard
              key={card.name}
              name={card.name}
              text={card.text}
              icon={card.icon}
              isSelected={card.isSelected}
              onClick={this.handleCardClick}
            />
          ))}
        </div>

        {this.state.cards.map(
          (card) =>
            card.isSelected && (
              <div
                className={classNames(classes["section-content"], {
                  [classes["selected"]]: this.state.cards.some((card) => card.isSelected),
                })}
                key={card.name}
              >
                {card.content}
                <CustomLink to={EWebsiteLinks.CONTACT}>
                  <Button className={classes["contact-button"]}>
                    <Text tag={ETextTag.SPAN}>CONTACTEZ-MOI</Text>
                  </Button>
                </CustomLink>
              </div>
            )
        )}
      </section>
    );
  }

  private handleCardClick(name: string): void {
    const cards = this.state.cards.map((card) => {
      if (card.name === name && card.isSelected) return card;

      if (card.name === name && !card.isSelected) {
        card.isSelected = true;
        return card;
      }

      card.isSelected = false;
      return card;
    });

    this.setState({ cards });
  }
}
