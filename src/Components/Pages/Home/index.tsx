// Components
import Layout from "@/src/Components/Layout";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import ContactSection from "./ContactSection";

// Styles
import classes from "./classes.module.scss";

export default function HomePage() {
  return (
    <Layout className={classes["root"]}>
      <FirstSection className={classes["section"]} />
      <SecondSection className={classes["section"]} />
      <ThirdSection className={classes["section"]} />
      <div className={classes["parralax"]} />
      <FourthSection className={classes["section"]} />
      <ContactSection />
    </Layout>
  );
}
