import { Shield, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, company name, and any other information you choose to provide.

We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect to:
• Respond to your inquiries and provide customer support
• Send you technical notices, updates, and administrative messages
• Communicate with you about products, services, and events
• Monitor and analyze trends, usage, and activities on our website
• Detect, investigate, and prevent fraudulent transactions and other illegal activities
• Comply with legal obligations`,
  },
  {
    title: "Information Sharing",
    content: `We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except in the following circumstances:
• With your consent
• To trusted third-party service providers who assist us in operating our website and conducting our business
• When required by law or to protect our rights
• In connection with a merger, acquisition, or sale of assets`,
  },
  {
    title: "Data Security",
    content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "Cookies",
    content: `We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.`,
  },
  {
    title: "Third-Party Links",
    content: `Our website may contain links to third-party websites. We have no control over the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policy of every site you visit.`,
  },
  {
    title: "Children's Privacy",
    content: `Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy, please contact us at:

B2YINFY Technologies
Email: privacy@b2yinfy.com
Phone: +91 XXXXX XXXXX
Address: [Your Office Address]`,
  },
];

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter',sans-serif" }}>
      <Header />

      {/* Hero */}
      <div
        className="w-full pt-24 pb-12 px-6 md:px-10 lg:px-16 xl:px-20"
        style={{ background: "linear-gradient(135deg,#eff6ff 0%,#f8fafc 100%)", borderBottom: "1px solid #e2e8f0" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#2563eb15", border: "1.5px solid #2563eb30" }}>
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <span className="section-label">Legal</span>
          </div>
          <h1 style={{ fontFamily: "'Outfit',sans-serif", fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-base max-w-2xl" style={{ fontFamily: "'Inter',sans-serif" }}>
            Your privacy is important to us. This policy explains how B2YINFY Technologies collects, uses, and protects your personal information.
          </p>
          <p className="text-slate-400 text-sm mt-3" style={{ fontFamily: "'Inter',sans-serif" }}>Last updated: May 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-20 py-12">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-600 font-semibold text-sm mb-10 hover:gap-3 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>

          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={i} className="border-b border-slate-100 pb-10 last:border-0">
                <h2
                  style={{ fontFamily: "'Outfit',sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.75rem" }}
                >
                  {i + 1}. {s.title}
                </h2>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line" style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px" }}>
                  {s.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
