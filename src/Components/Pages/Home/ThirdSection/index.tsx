import classNames from "classnames";
import { Component } from "react";

// Components
import Dropdown from "@/src/Components/Dropdown";
import Text from "@/src/Components/Text";

// Entities
import { ETextTag } from "@/src/Entities/Text";

// Styles
import classes from "./classes.module.scss";

type IProps = {
  className?: string;
};
type IState = {};

export default class ThirdSection extends Component<IProps, IState> {
  override render() {
    return (
      <section className={classNames(classes["root"], this.props.className)}>
        <Dropdown
          title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, nobis."
          className={classes["dropdown"]}
        >
          <div className={classes["container"]}>
            <Text tag={ETextTag.P} className={classes["content"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, id vero odio facere dolores nobis aliquid,
              enim quia voluptate reprehenderit veniam quibusdam corrupti hic veritatis quasi saepe ipsam doloremque a
              quisquam explicabo cupiditate. Earum saepe laboriosam atque quia nihil nemo obcaecati a consectetur
              explicabo sapiente veritatis minima, ad accusantium porro, pariatur nobis reiciendis vitae fugit. Nemo
              tenetur quidem cum maxime officia ea facilis, voluptatibus magni, velit labore ipsa fugit voluptatem
              provident ducimus repellat optio nam! Veritatis eveniet neque, commodi facere odio distinctio
              voluptatibus, molestiae, culpa ullam architecto asperiores nemo tempora. Ratione dolor quaerat incidunt
              quas accusamus quasi facere? At, architecto!
            </Text>

            <div className={classes["image"]}>
              <Text tag={ETextTag.SPAN}>Image</Text>
            </div>
          </div>
        </Dropdown>

        <Dropdown
          title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, nobis."
          className={classes["dropdown"]}
        >
          <div className={classes["container"]}>
            <Text tag={ETextTag.P} className={classes["content"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, id vero odio facere dolores nobis aliquid,
              enim quia voluptate reprehenderit veniam quibusdam corrupti hic veritatis quasi saepe ipsam doloremque a
              quisquam explicabo cupiditate. Earum saepe laboriosam atque quia nihil nemo obcaecati a consectetur
              explicabo sapiente veritatis minima, ad accusantium porro, pariatur nobis reiciendis vitae fugit. Nemo
              tenetur quidem cum maxime officia ea facilis, voluptatibus magni, velit labore ipsa fugit voluptatem
              provident ducimus repellat optio nam! Veritatis eveniet neque, commodi facere odio distinctio
              voluptatibus, molestiae, culpa ullam architecto asperiores nemo tempora. Ratione dolor quaerat incidunt
              quas accusamus quasi facere? At, architecto!
            </Text>

            <div className={classes["image"]}>
              <Text tag={ETextTag.SPAN}>Image</Text>
            </div>
          </div>
        </Dropdown>

        <Dropdown
          title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, nobis."
          className={classes["dropdown"]}
        >
          <div className={classes["container"]}>
            <Text tag={ETextTag.P} className={classes["content"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, id vero odio facere dolores nobis aliquid,
              enim quia voluptate reprehenderit veniam quibusdam corrupti hic veritatis quasi saepe ipsam doloremque a
              quisquam explicabo cupiditate. Earum saepe laboriosam atque quia nihil nemo obcaecati a consectetur
              explicabo sapiente veritatis minima, ad accusantium porro, pariatur nobis reiciendis vitae fugit. Nemo
              tenetur quidem cum maxime officia ea facilis, voluptatibus magni, velit labore ipsa fugit voluptatem
              provident ducimus repellat optio nam! Veritatis eveniet neque, commodi facere odio distinctio
              voluptatibus, molestiae, culpa ullam architecto asperiores nemo tempora. Ratione dolor quaerat incidunt
              quas accusamus quasi facere? At, architecto!
            </Text>

            <div className={classes["image"]}>
              <Text tag={ETextTag.SPAN}>Image</Text>
            </div>
          </div>
        </Dropdown>

        <Dropdown
          title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, nobis."
          className={classes["dropdown"]}
        >
          <div className={classes["container"]}>
            <Text tag={ETextTag.P} className={classes["content"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, id vero odio facere dolores nobis aliquid,
              enim quia voluptate reprehenderit veniam quibusdam corrupti hic veritatis quasi saepe ipsam doloremque a
              quisquam explicabo cupiditate. Earum saepe laboriosam atque quia nihil nemo obcaecati a consectetur
              explicabo sapiente veritatis minima, ad accusantium porro, pariatur nobis reiciendis vitae fugit. Nemo
              tenetur quidem cum maxime officia ea facilis, voluptatibus magni, velit labore ipsa fugit voluptatem
              provident ducimus repellat optio nam! Veritatis eveniet neque, commodi facere odio distinctio
              voluptatibus, molestiae, culpa ullam architecto asperiores nemo tempora. Ratione dolor quaerat incidunt
              quas accusamus quasi facere? At, architecto!
            </Text>

            <div className={classes["image"]}>
              <Text tag={ETextTag.SPAN}>Image</Text>
            </div>
          </div>
        </Dropdown>
      </section>
    );
  }
}
