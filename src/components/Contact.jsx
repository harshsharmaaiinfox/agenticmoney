import react from "react";
import Header from "./Header";
import Footer from "./Footer";


const Contact = () => {
    return(
        <>
        <Header />
         <div class="container mt-5 mb-5 contact-box">
        <div className="row">
            <div className="col-lg-6">
            <h2 className="p-set">Contact & Support</h2>
        <p className="p-set">Have a question, feedback, or need help with something?</p>
        <p className="p-set">We’d love to hear from you. While we can’t provide financial advice, we’re happy to help with:</p>
        <ul className="p-set">
            <li>Technical issues or bugs</li>
            <li>Questions about how the AI tool works</li>
            <li>Clarification on any content or disclaimers</li>
            <li>Media, partnership, or affiliate enquiries</li>
            <li>Suggestions to help shape AI-powered personal finance – <a href="#">click here</a></li>
        </ul>
            </div>
            <div className="col-lg-6">
                <img src="./images/finance-contact-1.jpg" alt="Contact Us" className="finance-contact" />
            </div>
        </div>
        <div class="contact-info d-flex  gap-3">
            <p className="p-set"><strong><i class="fa-solid fa-envelope"></i> Email us:</strong> <a href="mailto:support@agenticmoney.co.uk">support@agenticmoney.co.uk</a></p>
            <p className="p-set"><strong><i class="fa-solid fa-address-card"></i> Media & business enquiries:</strong> <a href="mailto:partnerships@agenticmoney.co.uk">partnerships@agenticmoney.co.uk</a></p>
            <p className="p-set"><strong><i class="fa-solid fa-question"></i> FAQ:</strong> For common questions, visit the <a href="#">FAQ section</a> above.</p>
        </div>
        <p>We aim to respond within 2 business days.</p>
    </div>
    <Footer />
        </>
    );
};

export default Contact;