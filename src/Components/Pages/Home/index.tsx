// Components
import Layout from "@/src/Components/Layout";
import classNames from "classnames";

// Styles
import classes from "./classes.module.scss";
import FirstSection from "./FirstSection";

export default function HomePage() {
  return (
    <Layout className={classes["root"]}>
      <FirstSection className={classes["section"]} />
    </Layout>
  );
}
