import AboutComps from "./components/AboutComps";
import AffiliateComps from "./components/AffiliateComps";
import BackgroundComps from "./components/BackgroundComps";
import CategoryComps from "./components/CategoryComps";
// import ContactComps from "./components/ContactComps";
import MekanismeComps from "./components/MekasimeComps";
import AfterEvent from "./components/afterevent";

function Landing () {
    return (
        <div>
        <AboutComps />
        <AffiliateComps />
        <BackgroundComps />
        <CategoryComps />
        <MekanismeComps />
        <AfterEvent />
        {/* <ProvisionComps /> */}
        {/* <FaqComps /> */}
        {/* <ContactComps /> */}
        </div>
    )
}

export default Landing;