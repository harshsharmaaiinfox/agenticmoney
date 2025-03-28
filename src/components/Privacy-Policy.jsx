import react from "react";
import Header from "./Header";
import Footer from "./Footer";

const Privacy = () => {
  return (
    <>

      {/* HEADER SECTION START */}
      <Header></Header>
      {/* HEADER SECTION ENDS HERE */}


      <div class="container d-flex justify-content-start flex-column align-items-start mt-5 mb-5 privacy">
        <h2>Privacy Policy</h2>
        <p className="p-set">This Privacy Policy explains how we handle your information when you use our website and AI tool.</p>

        <h3>1. We Don’t Collect Personal Data</h3>
        <p className="p-set">We don’t ask for or store names, email addresses, or financial account information. All interactions with our AI tool are anonymous.</p>

        <h3>2. Cookies & Tracking</h3>
        <p className="p-set">We use essential cookies to ensure the site functions properly. We may also use analytics or affiliate tracking cookies to understand general usage patterns and track referrals.</p>

        <h3>3. Third-Party Services</h3>
        <p className="p-set">We may link to or promote third-party services (e.g., budgeting tools, investment platforms). These have their own privacy policies. We are not responsible for their data practices.</p>

        <h3>4. Data Security</h3>
        <p className="p-set">We take reasonable precautions to ensure any technical data collected (such as site analytics) is secure.</p>

        <h3>5. Your Rights</h3>
        <p className="p-set">As a UK-based user, you have rights under GDPR. While we don’t hold personal data, you can contact us at <a href="mailto:support@agenticmoney.co.uk/">support@agenticmoney.co.uk</a> if you have any privacy concerns.</p>




      </div>


      {/* FOOTER SECTION START */}
      <Footer></Footer>
      {/* FOOTER SECTION ENDS HERE */}

    </>
  );
};
export default Privacy;