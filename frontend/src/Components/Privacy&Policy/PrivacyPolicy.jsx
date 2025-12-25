import React from "react";
import "./PrivacyPolicy.css";
import Navigation from "../Navigation/Navigation";

function PrivacyPolicy() {
return (
<div className="privacy-container">
<Navigation />

<section className="privacy-section">
<h1>Privacy Policy</h1>
<p>
At <strong>ChatApp</strong>, we value your privacy and are committed to
protecting your personal information. This Privacy Policy explains how
we collect, use, and safeguard your data.
</p>

<div className="policy-block">
<h2>📌 Information We Collect</h2>
<p>
We may collect your name, email address, phone number, profile image,
and chat messages to provide a seamless communication experience.
</p>
</div>

<div className="policy-block">
<h2>🔒 How We Use Your Information</h2>
<p>
Your information is used to improve our services, personalize your
experience, and ensure secure communication between users.
</p>
</div>

<div className="policy-block">
<h2>⚖️ Data Protection</h2>
<p>
We implement strict security measures to protect your data from
unauthorized access, alteration, or disclosure.
</p>
</div>

<div className="policy-block">
<h2>🤝 Sharing of Information</h2>
<p>
We do not sell or trade your personal information. Data may only be
shared with trusted partners to operate our services.
</p>
</div>

<div className="policy-block">
<h2>📅 Changes to This Policy</h2>
<p>
We may update this Privacy Policy from time to time. Any changes will
be posted on this page with an updated date.
</p>
</div>

<div className="policy-block">
<h2>📧 Contact Us</h2>
<p>
If you have any questions regarding this Privacy Policy, please
contact us at <strong>support@chatapp.com</strong>.
</p>
</div>
</section>

</div>
);
}

export default PrivacyPolicy;
