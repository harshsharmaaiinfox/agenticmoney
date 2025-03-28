import react from "react";
import Header from "./Header";
import Footer from "./Footer";


const CookiePolicy = () => {
    return(
        <>

        <Header></Header>
        <div class="container mt-5 mb-5 cookie-box">
        <h2>Cookie Policy</h2>
        <p>We use cookies to:</p>
        <ul>
            <li>Ensure the website and AI tool function correctly</li>
            <li>Track general usage for analytics (e.g. Google Analytics)</li>
            <li>Support affiliate partnerships by registering clicks/referrals</li>
        </ul>
        <p>By continuing to use the website, you consent to the use of cookies. You can disable cookies in your browser settings.</p>
        
        <h2>Affiliate Disclosure</h2>
        <p>Some of the links on this website are affiliate links. This means we may receive a commission if you click a link and go on to purchase a product or sign up for a service — at no additional cost to you.</p>
        <p>We only link to providers that are FCA-authorised or widely used by UK consumers. Our editorial content is not influenced by affiliate partnerships.</p>
        
        <div class="notice">
            <p><strong>Sample In-Chat Affiliate Disclosure (for AI Tool)</strong></p>
            <p>"Some of the tools or providers mentioned may be affiliate links. We may earn a commission if you choose to sign up — at no extra cost to you. This does not affect the guidance we provide."</p>
        </div>
    </div>
    <Footer></Footer>
        </>
    );
};
export default CookiePolicy;