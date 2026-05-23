import { FileText, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing and using the B2YINFY Technologies website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.`,
  },
  {
    title: "Services Description",
    content: `B2YINFY Technologies provides software development, IT consulting, digital transformation, and related technology services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.`,
  },
  {
    title: "User Responsibilities",
    content: `You agree to:
• Provide accurate and complete information when contacting us or using our services
• Use our services only for lawful purposes
• Not attempt to gain unauthorized access to any part of our systems
• Not transmit any harmful, offensive, or disruptive content
• Comply with all applicable local, national, and international laws and regulations`,
  },
  {
    title: "Intellectual Property",
    content: `All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of B2YINFY Technologies and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.`,
  },
  {
    title: "Confidentiality",
    content: `Any information shared with B2YINFY Technologies in the course of business discussions or project engagements will be treated as confidential. We will not disclose your proprietary information to third parties without your consent, except as required by law.`,
  },
  {
    title: "Payment Terms",
    content: `Payment terms for our services are outlined in individual project agreements or statements of work. Unless otherwise agreed:
• Invoices are due within 30 days of issuance
• Late payments may incur interest charges
• We reserve the right to suspend services for overdue accounts
• All fees are non-refundable unless otherwise specified in writing`,
  },
  {
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by law, B2YINFY Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of our services or inability to use our services.

Our total liability for any claim arising from these terms or our services shall not exceed the amount paid by you for the specific service giving rise to the claim.`,
  },
  {
    title: "Warranties and Disclaimers",
    content: `Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or free of viruses or other harmful components.

We make reasonable efforts to ensure the accuracy of information on our website but do not guarantee its completeness or accuracy.`,
  },
  {
    title: "Termination",
    content: `Either party may terminate a service agreement with written notice as specified in the individual project contract. Upon termination, you must cease using any deliverables that have not been fully paid for. Provisions relating to intellectual property, confidentiality, and limitation of liability shall survive termination.`,
  },
  {
    title: "Governing Law",
    content: `These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in [Your City], India.`,
  },
  {
    title: "Changes to Terms",
    content: `We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes your acceptance of the new terms.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about these Terms of Service, please contact us at:

B2YINFY Technologies
Email: legal@b2yinfy.com
Phone: +91 XXXXX XXXXX
Address: [Your Office Address]`,
  },
];

const TermsOfService = () => {
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
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <span className="section-label">Legal</span>
          </div>
          <h1 style={{ fontFamily: "'Outfit',sans-serif", fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
            Terms of Service
          </h1>
          <p className="text-slate-500 text-base max-w-2xl" style={{ fontFamily: "'Inter',sans-serif" }}>
            Please read these terms carefully before using B2YINFY Technologies services. By using our services, you agree to be bound by these terms.
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

export default TermsOfService;
