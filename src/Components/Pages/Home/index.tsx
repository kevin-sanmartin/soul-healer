// Components
import Layout from "@/src/Components/Layout";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

// Styles
import classes from "./classes.module.scss";
import ThirdSection from "./ThirdSection";

export default function HomePage() {
  return (
    <Layout className={classes["root"]}>
      <FirstSection className={classes["section"]} />
      <SecondSection className={classes["section"]} />
      <ThirdSection className={classes["section"]} />
      <div className={classes["parralax"]}></div>
      <SecondSection className={classes["section"]} />
      <ThirdSection className={classes["section"]} />
    </Layout>
  );
}
