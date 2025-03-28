import react from "react";

import Header from "./Header";
import Footer from "./Footer";
const Disclaimer = () => {
    return (
        <>

            {/* HEADER SECTION START */}
            <Header></Header>
            {/* HEADER SECTION ENDS HERE */}


            <div class="container mt-5 mb-5 disclaimer">
                <h2>Important Disclaimer</h2>
                <p>The content and tools on this website are for general informational and educational purposes only and do not constitute financial advice.</p>

                <p>We are not authorised or regulated by the Financial Conduct Authority (FCA) and do not offer personalised financial advice.</p>

                <p>We may receive commission or compensation from some of the financial providers featured on our site. This does not influence our editorial content, which is generated using AI models, based on publicly available data, general product information, and FCA-authorised sources where applicable.</p>

                <p>Always consider your own circumstances and do your own research and, where appropriate, seek advice from a qualified, FCA-authorised financial adviser before making financial decisions.</p>

                <div class="ai-disclaimer">
                    <strong>AI Tool-Specific Disclaimer:</strong>
                    <p>Note: This AI tool provides general financial guidance only. It is not a substitute for professional financial advice, and it does not take your individual circumstances into account.</p>
                    <p>Always do your own research or speak with an FCA-regulated adviser before acting on financial information.</p>
                </div>
            </div>


            {/* FOOTER SECTION START */}
            <Footer></Footer>
            {/* FOOTER SECTION ENDS HERE */}

        </>
    );
};
export default Disclaimer;