import { Component } from "react";
import classNames from "classnames";
import { IconType } from "react-icons";

// Components
import SectionCard from "./SectionCard";

// Icons
import { FaHandSparkles } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsPersonBoundingBox } from "react-icons/bs";

// Styles
import classes from "./classes.module.scss";

interface ISectionCard {
  name: string;
  text: string;
  icon: IconType;
  isSelected: boolean;
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
          name: "card1",
          text: "Qui peut bénéficier de soins énergétiques ?",
          icon: AiOutlineQuestionCircle,
          isSelected: false,
        },
        {
          name: "card2",
          text: "Qu'est-ce qu'un soin énergétique intuitif ?",
          icon: FaHandSparkles,
          isSelected: true,
        },
        {
          name: "card3",
          text: "En toute transparence",
          icon: BsPersonBoundingBox,
          isSelected: false,
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
      </div>
    );
  }

  private handleCardClick(name: string) {
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
