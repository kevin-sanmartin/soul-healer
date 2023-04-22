import { Component } from "react";
import classNames from "classnames";

// Components
import { ESectionCardName, ISectionCard } from "../FourthSection";
import SectionCard from "../FourthSection/SectionCard";

// Icons
import { MdSocialDistance, MdHome } from "react-icons/md";

// Config
import { EWebsiteLinks } from "@/src/Config/WebsiteLinks";

// Styles
import classes from "./classes.module.scss";
import CardOneContent from "./SectionContent/CardOneContent";
import CardTwoContent from "./SectionContent/CardTwoContent";

type IProps = {
  id: EWebsiteLinks;
  className?: string;
};
type IState = {
  cards: ISectionCard[];
};

export default class FifthSection extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      cards: [
        {
          name: ESectionCardName.CARD1,
          text: "Soins à distance",
          icon: MdSocialDistance,
          isSelected: false,
          content: <CardOneContent />,
        },
        {
          name: ESectionCardName.CARD2,
          text: "Soins à domicile",
          icon: MdHome,
          isSelected: true,
          content: <CardTwoContent />,
        },
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
