import { Component, createRef, ReactNode } from "react";

type IProps = {
  onVisibilityChange: (isVisible: boolean) => void;
  children?: ReactNode;
  className?: string;
};
type IState = {};

export default class Observer extends Component<IProps, IState> {
  private _elementContainerRef = createRef<HTMLDivElement>();

  constructor(props: IProps) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  public render() {
    return (
      <div className={this.props.className} ref={this._elementContainerRef}>
        {this.props.children}
      </div>
    );
  }

  public componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  private handleScroll() {
    const elementContainer = this._elementContainerRef.current;
    if (!elementContainer) return;

    const elementContainerRect = elementContainer.getBoundingClientRect();
    // if elementContainer is in the viewport
    if (elementContainerRect.top < window.innerHeight && elementContainerRect.bottom > 0) {
      this.props.onVisibilityChange(true);
    }

    // if elementContainer is not in the viewport
    if (elementContainerRect.top > window.innerHeight || elementContainerRect.bottom < 0) {
      this.props.onVisibilityChange(false);
    }
  }
}
