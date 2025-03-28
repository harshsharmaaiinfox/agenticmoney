import react from "react";
import Header from "./Header";
import Footer from "./Footer";

const Checklist = () => {
    return(
        <>
        <Header />
        <div class="container terms-box mt-5 mb-5 align-items-center">
        <h2 className="mb-3">Affiliate Integration Checklist</h2>
        <ul class="checklist">
            <li>Use only approved promotional methods listed by the advertiser</li>
            <li>Include an in-line affiliate disclosure near each link or mention</li>
            <li>Ensure the page/tool does not imply personalised advice or financial outcomes</li>
            <li>Confirm that affiliate tracking works correctly (e.g. test clicks)</li>
            <li>Ensure cookie consent is in place and functioning</li>
            <li>Avoid incentivised behaviour or misleading phrasing</li>
            <li>Log campaign details and provider disclaimers (if required)</li>
        </ul>
    </div>
    <Footer></Footer>
        </>
    );
};

export default Checklist;   