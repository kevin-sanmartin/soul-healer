import { Component } from "react";
import Image from "next/image";
import classNames from "classnames";

// Assets
import HealingSeance from "/public/images/healingSeance/portrait-professionnel-021-min.jpg";
import { AiFillCheckCircle as CheckIcon } from "react-icons/ai";

// Styles
import classes from "./classes.module.scss";
import Text from "@/src/Components/Text";
import { ETextTag } from "@/src/Entities/Text";
import Tag, { ETagColor } from "@/src/Components/Tag";
import ListItem from "./ListItem";
import Button from "@/src/Components/Button";

type IProps = {
  className?: string;
};
type IState = {};

export default class ThirdSection extends Component<IProps, IState> {
  public render() {
    return (
      <section className={classNames(classes["root"], this.props.className)}>
        <div className={classes["healing-presentation-container"]}>
          <Image src={HealingSeance} className={classes["image"]} fill alt="" />

          <Text tag={ETextTag.H2} font="xiaoWei" className={classes["title"]}>
            Les soins énergétiques peuvent soigner :
          </Text>

          <div className={classes["container"]}>
            <div className={classes["list-container"]}>
              <ListItem
                title="Maux physiques"
                listItems={["Soulager vos maux", "Problèmes de peaux", "Brûlures"]}
                icon={<CheckIcon className={classes["icon"]} />}
              />
              <ListItem
                title="Maux psychologiques"
                listItems={[
                  "Libérer vos angoisses",
                  "Atténuer le stress",
                  "Retrouver un apaisement",
                  "Lever des blocages émotionnels inconscients",
                  "Couper les liens négatifs, nocifs avec des personnes toxiques de votre entourage (relation amoureuse, amicale, familiale, professionnelle, etc.)",
                ]}
                icon={<CheckIcon className={classes["icon"]} />}
              />
              <ListItem
                title="Energetiques"
                listItems={[
                  "Équilibrage de la circulation de l'énergie vitale dans le corps physique et les corps subtils",
                  "Purification et harmonisation des 7 chakras principaux",
                  "Réparation des brèches énergétiques laissées par tous types de traumatismes physiques ou psychologiques et provoquant des fuites d'énergie vitale",
                  "Activation de la circulation énergétique dans tous les méridiens",
                ]}
                icon={<CheckIcon className={classes["icon"]} />}
              />
            </div>
          </div>

          <Button className={classes["button"]}>
            <Text tag={ETextTag.SPAN}>CONTACTEZ-MOI</Text>
          </Button>
        </div>
      </section>
    );
  }
}
