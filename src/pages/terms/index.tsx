import React from "react";
import Navigation from "@/components/Navigation";
import Head from "next/head";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Terms of Service | Cloud Bathrooms and Kitchens Vancouver</title>
        <meta
          name="description"
          content="Terms of service for Cloud Bathrooms and Kitchens Vancouver. Read our terms and conditions for renovation services."
        />
      </Head>

      <Navigation />

      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-light mb-12">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p>
            Welcome to Cloud Bathrooms and Kitchens Vancouver. These Terms of
            Service govern your use of our website and services. By accessing
            our website or engaging our services, you agree to these terms.
            Please read them carefully.
          </p>

          <h2>1. Services</h2>
          <p>
            Cloud Bathrooms and Kitchens Vancouver provides bathroom and kitchen
            renovation services in the Greater Vancouver area. Our services
            include design, demolition, installation, and project management.
          </p>

          <h2>2. Quotes and Estimates</h2>
          <p>
            All quotes and estimates provided by Cloud Bathrooms and Kitchens
            Vancouver are valid for 30 days from the date of issuance. Quotes
            are based on our assessment of your requirements and may be subject
            to change if additional work is required or if unforeseen
            circumstances arise during the renovation process.
          </p>

          <h2>3. Contracts</h2>
          <p>
            All services require a signed contract before work commences. The
            contract will outline the scope of work, timeline, payment schedule,
            and other important details. Any changes to the scope of work after
            the contract is signed may result in additional costs and timeline
            adjustments.
          </p>

          <h2>4. Payments</h2>
          <p>Payment terms are as follows:</p>
          <ul>
            <li>30% deposit upon signing the contract</li>
            <li>40% payment at the midpoint of the project</li>
            <li>30% final payment upon completion of the project</li>
          </ul>
          <p>
            We accept payments via bank transfer, certified check, or credit
            card. A 3% processing fee applies to credit card payments.
          </p>

          <h2>5. Cancellation Policy</h2>
          <p>
            If you need to cancel your project after signing the contract but
            before work begins, a cancellation fee of 15% of the total project
            cost will apply. Cancellations after work has begun will be charged
            based on the percentage of work completed plus a 15% cancellation
            fee on the remaining balance.
          </p>

          <h2>6. Warranties</h2>
          <p>
            Cloud Bathrooms and Kitchens Vancouver provides a 2-year warranty on
            all workmanship. Manufacturer warranties apply to all products and
            materials installed. To maintain your warranty, you must follow all
            care instructions provided upon completion of the project.
          </p>

          <h2>7. Timeline</h2>
          <p>
            While we strive to complete all projects within the estimated
            timeline, delays may occur due to unforeseen circumstances,
            including but not limited to material backorders, permit delays, or
            discovery of underlying structural issues. We will communicate any
            delays promptly and work to minimize their impact on your project.
          </p>

          <h2>8. Change Orders</h2>
          <p>
            Any changes to the original scope of work must be documented in a
            change order and signed by both parties. Change orders may impact
            the project timeline and cost. We will provide a detailed estimate
            for any requested changes before proceeding.
          </p>

          <h2>9. Access to Property</h2>
          <p>
            You agree to provide reasonable access to your property during
            regular business hours (Monday to Friday, 8 AM to 5 PM) for the
            duration of the project. If access is restricted, project timelines
            may be extended.
          </p>

          <h2>10. Insurance</h2>
          <p>
            Cloud Bathrooms and Kitchens Vancouver maintains comprehensive
            liability insurance and WorkSafeBC coverage for all employees and
            subcontractors. Upon request, we will provide proof of insurance.
          </p>

          <h2>11. Dispute Resolution</h2>
          <p>
            In the event of a dispute, both parties agree to attempt resolution
            through good-faith negotiation. If negotiation fails, disputes will
            be resolved through mediation in Vancouver, British Columbia, before
            pursuing legal action.
          </p>

          <h2>12. Website Usage</h2>
          <p>
            The content on our website is for informational purposes only. While
            we strive to keep the information up to date and accurate, we make
            no representations or warranties of any kind, express or implied,
            about the completeness, accuracy, reliability, suitability, or
            availability of the information.
          </p>

          <h2>13. Intellectual Property</h2>
          <p>
            All content on our website, including text, graphics, logos, and
            images, is the property of Cloud Bathrooms and Kitchens Vancouver
            and is protected by copyright and intellectual property laws. You
            may not reproduce, distribute, or use our content without our
            written permission.
          </p>

          <h2>14. Privacy</h2>
          <p>
            Your privacy is important to us. Please refer to our Privacy Policy
            for information on how we collect, use, and protect your personal
            information.
          </p>

          <h2>15. Limitation of Liability</h2>
          <p>
            Cloud Bathrooms and Kitchens Vancouver shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages
            resulting from your use of our services or website.
          </p>

          <h2>16. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will
            be effective immediately upon posting on our website. Your continued
            use of our services after any changes indicates your acceptance of
            the new terms.
          </p>

          <h2>17. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us at:
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

export default TermsPage;
