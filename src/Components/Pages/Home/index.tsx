// Components
import Layout from "@/src/Components/Layout";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

// Styles
import classes from "./classes.module.scss";

export default function HomePage() {
  return (
    <Layout className={classes["root"]}>
      <FirstSection className={classes["section"]} />
      <SecondSection className={classes["section"]} />
      <ThirdSection className={classes["section"]} />
    </Layout>
  );
}
