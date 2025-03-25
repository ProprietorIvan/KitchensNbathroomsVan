import React from "react";
import Navigation from "@/components/Navigation";
import Head from "next/head";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Privacy Policy | Cloud Bathrooms and Kitchens Vancouver</title>
        <meta
          name="description"
          content="Privacy policy for Cloud Bathrooms and Kitchens Vancouver. Learn how we protect your personal information."
        />
      </Head>

      <Navigation />

      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-light mb-12">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p>
            At Cloud Bathrooms and Kitchens Vancouver, we value your privacy and
            are committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website or engage our services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, postal address, and other information you provide when
              contacting us or requesting a quote.
            </li>
            <li>
              <strong>Usage Information:</strong> Browser type, IP address,
              device information, pages visited, time spent on pages, and other
              statistics about your interactions with our website.
            </li>
            <li>
              <strong>Project Information:</strong> Details about your
              renovation project, including photos, measurements, preferences,
              and budget.
            </li>
          </ul>

          <h2>2. How We Collect Information</h2>
          <p>We collect information through:</p>
          <ul>
            <li>
              Direct interactions when you fill out forms on our website,
              communicate with us, or engage our services.
            </li>
            <li>
              Automated technologies such as cookies and similar tracking
              technologies.
            </li>
            <li>
              Third-party sources, such as business partners or service
              providers.
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information for the following purposes:</p>
          <ul>
            <li>To provide, maintain, and improve our services</li>
            <li>To process and fulfill your service requests</li>
            <li>To communicate with you about your project</li>
            <li>
              To send you updates, promotions, and marketing information (with
              your consent)
            </li>
            <li>To analyze website usage and improve user experience</li>
            <li>To protect our rights, property, or safety</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>4. Information Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Third-party vendors who
              perform services on our behalf, such as subcontractors, suppliers,
              payment processors, and IT service providers.
            </li>
            <li>
              <strong>Professional Advisors:</strong> Lawyers, accountants, and
              other professional advisors when necessary.
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law, court
              order, or governmental authority.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              acquisition, or sale of assets, your information may be
              transferred as a business asset.
            </li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2>5. Cookies and Tracking Technologies</h2>
          <p>
            Our website uses cookies and similar tracking technologies to
            enhance user experience and collect information about how visitors
            use our website. You can set your browser to refuse cookies, but
            this may limit your ability to use some features of our website.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. However, no method of transmission over the Internet or
            electronic storage is 100% secure, so we cannot guarantee absolute
            security.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law.
          </p>

          <h2>8. Your Rights</h2>
          <p>
            Depending on your location, you may have the following rights
            regarding your personal information:
          </p>
          <ul>
            <li>The right to access your personal information</li>
            <li>The right to correct inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information
            provided in the &quot;Contact Us&quot; section.
          </p>

          <h2>9. Children&apos;s Privacy</h2>
          <p>
            Our website and services are not directed to individuals under the
            age of 18. We do not knowingly collect personal information from
            children. If you believe we have collected information from a child,
            please contact us immediately.
          </p>

          <h2>10. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these websites.
            We encourage you to review the privacy policies of any website you
            visit.
          </p>

          <h2>11. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated
            version will be indicated by an updated &quot;Last Updated&quot;
            date. We encourage you to review this Privacy Policy periodically.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <p>
            Cloud Bathrooms and Kitchens Vancouver
            <br />
            +1 (778) 200-8827
            <br />
            info@cloudbathrooms.ca
          </p>

          <p className="text-sm text-gray-500 mt-8">Last updated: May 2023</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
