import react from "react";
import Header from "./Header";
import Footer from "./Footer";


const AccessibilityStatement = () => {
    return(
        <>
        <Header />
        <div class="container mt-5 mb-5 terms-box">
        <h1>Accessibility Statement</h1>
        <div class="section">
            <p>We are committed to making this website and AI tool accessible to all users.</p>
            <ul>
                <li>The site is designed to be navigable by keyboard and screen readers.</li>
                <li>Text is readable and scalable across devices.</li>
                <li>We aim to meet WCAG 2.1 AA accessibility standards.</li>
                <li>If you encounter any accessibility issues, please contact us at <a href="mailto:support@agenticmoney.co.uk">support@agenticmoney.co.uk</a>.</li>
            </ul>
        </div>
    </div>
    <Footer/>
        </>
    );
};

export default AccessibilityStatement;