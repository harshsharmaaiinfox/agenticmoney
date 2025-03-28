import react from "react";
import Header from "./Header";
import Footer from "./Footer";

const TermCondition = () => {
    return(
        <>
        <Header />
        <div class="container mt-5 mb-5 terms-box">
        <h1>Terms of Use</h1>
        <div class="section">
            <p>By using this website and the AI tool, you agree to the following terms:</p>
            <ul>
                <li><strong>General Use:</strong> You may access the site and use the AI tool for your own non-commercial use.</li>
                <li><strong>No Advice:</strong> The tool offers general guidance only. It does not provide personalised financial advice or regulated services.</li>
                <li><strong>Affiliate Links:</strong> Some links may earn us a commission. This helps keep the service free.</li>
                <li><strong>Availability:</strong> We do our best to ensure the tool runs smoothly, but we cannot guarantee 100% uptime.</li>
                <li><strong>Changes:</strong> We may update these terms at any time. Continued use of the site means you accept the latest version.</li>
            </ul>
        </div>

        <h2>Transparency Statement</h2>
        <div class="section">
            <p>Our goal is to offer clear, practical, and helpful financial guidance — not to push products.</p>
            <ul>
                <li>We use AI to generate content based on publicly available information.</li>
                <li>We include affiliate links, but never promote products just because they pay.</li>
                <li>We aim to maintain editorial independence, even when we earn commission.</li>
                <li>We are not FCA-regulated and do not offer advice.</li>
                <li>We believe in making financial knowledge more accessible. That’s why our tool is free to use, with no signup required.</li>
            </ul>
        </div>
    </div>
    <Footer/>
        </>
    );
};

export default TermCondition;