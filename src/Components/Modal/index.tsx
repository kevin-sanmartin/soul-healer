import { PropsWithChildren } from "react";
import classes from "./classes.module.scss";

type IProps = PropsWithChildren & {
  onClose: () => void;
};

export default function Modal(props: IProps) {
  return (
    <div className={classes["modal"]}>
      <div className={classes["layout"]} onClick={props.onClose} />
      {props.children}
    </div>
  );
}
