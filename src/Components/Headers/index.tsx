import { Component } from "react";

// Components
import DesktopHeader from "./DesktopHeader";
import MobileMenu from "./MobileMenu";

// Entities
import { EBreakpoints } from "@/src/Config/Breakpoints";

type IProps = {};
type IState = {
  isMobileView: boolean;
};

export default class Headers extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isMobileView: false,
    };
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  public render() {
    return this.state.isMobileView ? <MobileMenu /> : <DesktopHeader />;
  }

  componentDidMount(): void {
    window.addEventListener("resize", this.onWindowResize);
    this.onWindowResize();
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.onWindowResize);
  }

  private onWindowResize() {
    const isMobileView = this.isWindowWidthLessThan(EBreakpoints.MEDIUM);

    // Prevent unnecessary re-rendering
    if (this.state.isMobileView === isMobileView) return;

    this.setState({ isMobileView });
  }

  private isWindowWidthLessThan(breakpoint: EBreakpoints) {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= breakpoint;
  }
}
