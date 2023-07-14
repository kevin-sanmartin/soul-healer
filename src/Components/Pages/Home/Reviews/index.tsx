import { Component } from "react";
import classNames from "classnames";
import Slider, { Settings } from "react-slick";

// Components
import ReviewItem, { IReview } from "./ReviewItem";
// Reviews
import { reviews } from "./reviews";

// Styles
import classes from "./classes.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EBreakpoints } from "@/src/Config/Breakpoints";

type IProps = {
  className?: string;
};
type IState = {
  slideToShow: number;
};

export default class Reviews extends Component<IProps, IState> {
  private readonly sliderSettings: Settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      slideToShow: 1,
    };
    this.onResize = this.onResize.bind(this);
  }

  override render() {
    return (
      <section className={classNames(classes["root"], this.props.className)}>
        <Slider {...this.sliderSettings} slidesToShow={this.state.slideToShow} className={classes["slider-container"]}>
          {reviews.map((review: IReview) => (
            <ReviewItem key={review.id} review={review} className={classes["review"]} />
          ))}
        </Slider>
      </section>
    );
  }

  override componentDidMount() {
    window.addEventListener("resize", this.onResize);
    this.setState({ slideToShow: this.getSlideToShow() });
  }

  override componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  private onResize() {
    const slideToShow = this.getSlideToShow();
    this.setState({ slideToShow: slideToShow });
  }

  private getSlideToShow(): number {
    if (window.innerWidth >= EBreakpoints.LARGE) return 3;
    if (window.innerWidth >= EBreakpoints.MEDIUM) return 2;
    return 1;
  }
}
