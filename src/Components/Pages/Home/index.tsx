// Components
import Layout from "@/src/Components/Layout";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import ContactSection from "./ContactSection";

// Config
import { EWebsiteLinks } from "@/src/Config/WebsiteLinks";

// Styles
import classes from "./classes.module.scss";

export default function HomePage() {
  return (
    <Layout className={classes["root"]}>
      <FirstSection className={classes["section"]} />
      <SecondSection className={classes["section"]} id={EWebsiteLinks.ABOUT} />
      <ThirdSection className={classes["section"]} id={EWebsiteLinks.HEALING_BENEFITS} />
      <div className={classes["parralax"]} />
      <FourthSection className={classes["section"]} id={EWebsiteLinks.HEALING_INFOS} />
      <ContactSection id={EWebsiteLinks.CONTACT} />
    </Layout>
  );
}
