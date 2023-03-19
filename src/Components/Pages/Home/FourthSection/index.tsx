import { Component, ReactNode } from "react";
import Image from "next/image";
import classNames from "classnames";
import { IconType } from "react-icons";

// Components
import SectionCard from "./SectionCard";
import CardOneContent from "./SectionContent/CardOneContent";

// Icons
import { FaHandSparkles } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsPersonBoundingBox } from "react-icons/bs";

// Styles
import classes from "./classes.module.scss";

enum ESectionCardName {
  CARD1 = "card1",
  CARD2 = "card2",
  CARD3 = "card3",
}

interface ISectionCard {
  name: ESectionCardName;
  text: string;
  icon: IconType;
  isSelected: boolean;
  content: ReactNode;
}

type IProps = {
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
          icon: AiOutlineQuestionCircle,
          isSelected: false,
          content: <CardOneContent />,
        },
        {
          name: ESectionCardName.CARD2,
          text: "Qu'est-ce qu'un soin énergétique intuitif ?",
          icon: FaHandSparkles,
          isSelected: true,
          content: <div>test</div>,
        },
        {
          name: ESectionCardName.CARD3,
          text: "En toute transparence",
          icon: BsPersonBoundingBox,
          isSelected: false,
          content: <div>test</div>,
        },
      ],
    };
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  override render() {
    return (
      <div className={classNames(classes["root"], this.props.className)}>
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
              >
                {card.content}
              </div>
            )
        )}
      </div>
    );
  }

  private handleCardClick(name: string): void {
    const cards = this.state.cards.map((card) => {
      if (card.name === name) {
        card.isSelected = !card.isSelected;
        return card;
      }
      card.isSelected = false;
      return card;
    });

    this.setState({ cards });
  }
}
