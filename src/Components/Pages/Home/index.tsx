// Components
import Layout from "@/src/Components/Layout";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import ContactSection from "./ContactSection";
import FAQ from "./FAQ";

// Config
import { EWebsiteLinks } from "@/src/Config/WebsiteLinks";

// Styles
import classes from "./classes.module.scss";

export default function HomePage() {
  return (
    <Layout className={classes["root"]}>
      {/* <FirstSection className={classes["section"]} />
      <SecondSection className={classes["section"]} id={EWebsiteLinks.WELCOME} />
      <ThirdSection className={classes["section"]} id={EWebsiteLinks.HEALING_BENEFITS} />
      <div className={classes["parralax"]} />
      <FAQ className={classes["section"]} id={EWebsiteLinks.FAQ} />
      <ContactSection id={EWebsiteLinks.CONTACT} /> */}
    </Layout>
  );
}
