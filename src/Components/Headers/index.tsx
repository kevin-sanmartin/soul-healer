import { Component } from "react";

// Components
import DesktopHeader from "./DesktopHeader";
import MobileMenu from "./MobileMenu";

// Entities
import { EBreakpoints } from "@/src/Config/Breakpoints";

type IProps = {};
type IState = {
  isMediumView: boolean;
};

export default class Headers extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isMediumView: false,
    };
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  public render() {
    return this.state.isMediumView ? <MobileMenu /> : <DesktopHeader />;
  }

  componentDidMount(): void {
    window.addEventListener("resize", this.onWindowResize);
    this.onWindowResize();
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.onWindowResize);
  }

  private onWindowResize() {
    const isMediumView = this.isWindowWidthLessThan(EBreakpoints.LARGE);

    // Prevent unnecessary re-rendering
    if (this.state.isMediumView === isMediumView) return;

    this.setState({ isMediumView });
  }

  private isWindowWidthLessThan(breakpoint: EBreakpoints) {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= breakpoint;
  }
}
