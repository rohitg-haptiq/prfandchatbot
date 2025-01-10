import React from "react";

import "./about.css";   

const About = () => {
  return (
    <div className="about">
      <div className="container py-5">
        <h1 className="text-center mb-4">About Our Partner Referral Program</h1>

        <section className="mb-5">
          <h2 className="h3">What is the Partner Referral Program?</h2>
          <p>
            Our Partner Referral Program is designed to empower individuals and
            businesses to earn commissions by referring new users to our
            platform. As a partner, you can share a unique referral link and
            start earning rewards for every new user that signs up and completes
            a required action.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h3">Why is the Program Important?</h2>
          <p>
            Partnering with us helps you expand your reach while earning money
            through commissions. As a partner, you become an essential part of
            our marketing team, helping us grow and providing value to others.
            Your network is the key to unlocking amazing opportunities.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h3">Program Benefits</h2>

          <div className="row">
            <div className="col-md-4">
              <h4 className="text-primary">Monetary Rewards</h4>
              <p>
                Partners can earn generous commissions for each new user they
                refer. Our program offers a tiered commission structure, with
                higher earnings as you refer more users. This means there is no
                limit to how much you can earn!
              </p>
            </div>
            <div className="col-md-4">
              <h4 className="text-primary">Exclusive Deals or Discounts</h4>
              <p>
                As a partner, you'll get access to exclusive offers, premium
                features, and discounts that will help you grow your own
                business. Our program is designed to reward you with special
                incentives to make your partnership even more beneficial.
              </p>
            </div>
            <div className="col-md-4">
              <h4 className="text-primary">Long-term Partnership</h4>
              <p>
                We value long-term relationships with our partners. With
                consistent referrals, you can build a reliable source of income
                and enjoy growth opportunities that lead to even greater
                rewards. Your success is our success!
              </p>
            </div>
          </div>

          <div className="mb-3">
            <h4 className="text-primary">Support & Resources</h4>
            <p>
              As a partner, you will have access to a variety of resources,
              including marketing materials, training sessions, and dedicated
              account managers to help you maximize your success. We are here to
              guide you every step of the way.
            </p>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="h3">How It Works</h2>

          <h4 className="text-success">Simple Step-by-Step Process</h4>
          <ul className="list-unstyled">
            <li>1. Sign up to become a partner.</li>
            <li>2. Get your unique referral link.</li>
            <li>
              3. Share the link through your website, social media, or email.
            </li>
            <li>4. Track your referrals in real-time via our dashboard.</li>
            <li>
              5. Earn commissions based on the actions taken by your referrals.
            </li>
          </ul>

          <h4 className="text-success">Tracking & Reporting</h4>
          <p>
            Our easy-to-use dashboard provides detailed reporting tools that
            allow you to track your referrals, monitor their status, and analyze
            your performance. You’ll always know where you stand.
          </p>

          <h4 className="text-success">Payment Process</h4>
          <p>
            Payments are processed monthly, and you can choose from various
            payment methods including bank transfer, PayPal, or others. You’ll
            receive payments once your referrals meet the necessary criteria.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h3">Eligibility Criteria</h2>
          <p>
            The program is open to anyone who wants to refer new users to our
            platform. This includes bloggers, influencers, businesses,
            affiliates, and anyone with an active network. There are no special
            restrictions, but some rewards may require a minimum number of
            referrals.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h3">Success Stories</h2>
          <p>
            Hear from our successful partners! Many of our partners have turned
            their referrals into full-time businesses. "I was able to earn over
            $10,000 in just a few months by referring new users!" - Alex P., top
            partner. Read more success stories on our website.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h3">Program Tiers</h2>
          <ul className="list-unstyled">
            <li>
              <strong>Bronze</strong>: For new partners with less than 10
              referrals.
            </li>
            <li>
              <strong>Silver</strong>: For partners who refer between 10-50
              users.
            </li>
            <li>
              <strong>Gold</strong>: For top partners with 50+ referrals,
              earning premium rewards and commissions.
            </li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h3">FAQ</h2>
          <p>
            <strong>How do I track my referrals?</strong> <br />
            You can use our dashboard to see your referral progress and
            commission reports. <br />
            <strong>When will I get paid?</strong> <br />
            Payments are made monthly once your referrals meet the necessary
            criteria. <br />
            <strong>Can I refer multiple people?</strong> <br />
            Yes, the more referrals you bring, the more you can earn!
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h3">Terms and Conditions</h2>
          <p>
            Please review our full{" "}
            <a href="/terms-and-conditions" className="text-decoration-none">
              Terms and Conditions
            </a>{" "}
            to understand the rules and regulations governing our Partner
            Referral Program. This ensures both partners and our company remain
            in compliance with the program's guidelines.
          </p>
        </section>

        <section className="text-center mb-5">
          <h2 className="h3">Get Started Today!</h2>
          <p>
            Ready to become a partner? Click the sign-up button below to join
            the program and start referring today. Let’s grow together!
          </p>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => (window.location.href = "/register")}
          >
            Sign Up Now
          </button>
        </section>

        <section className="text-center">
          <h2 className="h3">Contact Information</h2>
          <p>
            Have any questions? Reach out to our team at{" "}
            <a
              href="mailto:support@company.com"
              className="text-decoration-none"
            >
              support@company.com
            </a>
            or use our{" "}
            <a href="/contact" className="text-decoration-none">
              contact form
            </a>{" "}
            for further inquiries. We're here to help!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
