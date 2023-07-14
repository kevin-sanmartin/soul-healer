// Components
import Layout from "@/src/Components/Layout";

// Components
import FirstSection from "./FirstSection";
import Welcome from "./Welcome";
import HealingBenefits from "./HealingBenefits";

// Config
import { EWebsiteLinks } from "@/src/Config/WebsiteLinks";

// Styles
import classes from "./classes.module.scss";
import FAQ from "./FAQ";
import ContactSection from "./ContactSection";
import Sessions from "../Sessions";
import Reviews from "./Reviews";

export default function HomePage() {
  return (
    <Layout className={classes["root"]}>
      <FirstSection className={classes["section"]} />
      <Welcome id={EWebsiteLinks.WELCOME} className={classes["section"]} />
      <HealingBenefits id={EWebsiteLinks.HEALING_BENEFITS} className={classes["section"]} />
      <div className={classes["parralax"]} />
      <Sessions className={classes["section"]} />
      <Reviews className={classes["section"]} />
      <FAQ id={EWebsiteLinks.FAQ} className={classes["section"]} />
      <ContactSection id={EWebsiteLinks.CONTACT} />
    </Layout>
  );
}
