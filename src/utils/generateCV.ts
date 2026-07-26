export const generateCVHTML = () => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Alain Mugabo - Software Engineer CV</title>
    <style>
        @page { size: A4; margin: 18mm 18mm 18mm 18mm; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body {
            background: #ffffff;
            color: #000000;
            font-family: Calibri, Arial, Helvetica, sans-serif;
            font-size: 11pt;
            line-height: 1.4;
        }
        .doc { max-width: 174mm; margin: 0 auto; }
        h1.name {
            font-size: 22pt;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            text-align: center;
            margin-bottom: 2px;
        }
        .title {
            text-align: center;
            font-size: 11pt;
            margin-bottom: 6px;
        }
        .contact {
            text-align: center;
            font-size: 10pt;
            margin-bottom: 14px;
        }
        .contact a { color: #000; text-decoration: none; }
        h2.section {
            font-size: 12pt;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-bottom: 1px solid #000;
            padding-bottom: 2px;
            margin-top: 14px;
            margin-bottom: 8px;
        }
        p { margin-bottom: 6px; text-align: justify; }
        .item { margin-bottom: 10px; }
        .row {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            gap: 8px;
        }
        .row .left { font-weight: 700; }
        .row .right { font-style: italic; font-size: 10pt; }
        .sub { font-style: italic; font-size: 10.5pt; margin-bottom: 3px; }
        ul { margin: 4px 0 4px 20px; }
        li { margin-bottom: 2px; font-size: 10.5pt; }
        .two-col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4px 24px;
        }
        .two-col p { margin-bottom: 2px; font-size: 10.5pt; }
        .ref-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 6px;
        }
    </style>
</head>
<body>
    <div class="doc">
        <h1 class="name">Alain Mugabo</h1>
        <p class="title">Software Engineer &mdash; Full-Stack Developer</p>
        <p class="contact">
            Kigali, Rwanda &nbsp;|&nbsp; +250 782 499 569 &nbsp;|&nbsp;
            <a href="mailto:mugaboalain58@gmail.com">mugaboalain58@gmail.com</a><br/>
            <a href="https://github.com/Alain296">github.com/Alain296</a> &nbsp;|&nbsp;
            <a href="https://www.linkedin.com/in/alain-mugabo-308021325">linkedin.com/in/alain-mugabo-308021325</a> &nbsp;|&nbsp;
            <a href="https://alainmugabo-portfolio.netlify.app/">alainmugabo-portfolio.netlify.app</a>
        </p>

        <h2 class="section">Professional Summary</h2>
        <p>
            Final-year Software Engineering student at the Adventist University of Central Africa (AUCA),
            currently enrolled in an intensive full-stack developer training at kLab Academy. Skilled in
            building modern web applications using React, Node.js, Express, PostgreSQL and Prisma, with
            hands-on experience in API testing (Swagger, Postman) and applied AI. Passionate about writing
            clean, maintainable code and delivering reliable, user-centered software.
        </p>

        <h2 class="section">Education</h2>
        <div class="item">
            <div class="row">
                <span class="left">Adventist University of Central Africa (AUCA)</span>
                <span class="right">2023 &ndash; 2026</span>
            </div>
            <p class="sub">Bachelor of Software Engineering (Final Year)</p>
        </div>
        <div class="item">
            <div class="row">
                <span class="left">Christ Roi High School</span>
                <span class="right">2019 &ndash; 2022</span>
            </div>
            <p class="sub">Mathematics, Chemistry &amp; Biology (MCB)</p>
        </div>

        <h2 class="section">Professional Training</h2>
        <div class="item">
            <div class="row">
                <span class="left">kLab Academy &mdash; Software Development Program (DSE)</span>
                <span class="right">April 2026 &ndash; July 2026</span>
            </div>
            <p class="sub">Kigali, Rwanda &mdash; Completed (Certificate issued July 15, 2026)</p>
            <ul>
                <li>Frontend development with HTML, CSS, JavaScript, React and Tailwind CSS.</li>
                <li>Backend development with Node.js, Express.js and REST API design.</li>
                <li>Databases with MongoDB; version control with Git &amp; GitHub; UI design with Figma.</li>
                <li>Mobile Application Development with React Native.</li>
                <li>Delivered under the Digital Skills for Employability (DSE) Program by DOT Rwanda &amp; Mastercard Foundation.</li>
            </ul>
        </div>

        <h2 class="section">Technical Skills</h2>
        <div class="two-col">
            <p><strong>Languages:</strong> JavaScript, TypeScript, Java, Python, C#, SQL, PL/SQL.</p>
            <p><strong>Frontend:</strong> React, HTML5, CSS3, Tailwind CSS.</p>
            <p><strong>Backend:</strong> Node.js, Express, Django, REST APIs.</p>
            <p><strong>Databases:</strong> PostgreSQL, MySQL, Oracle, MongoDB.</p>
            <p><strong>Tools:</strong> Prisma, Git/GitHub, Postman, Swagger.</p>
            <p><strong>Other:</strong> Prompt Engineering, AI &amp; ML basics, UI/UX, Adobe Photoshop.</p>
        </div>

        <h2 class="section">Experience</h2>
        <div class="item">
            <div class="row">
                <span class="left">Freelance Web Developer</span>
                <span class="right">2023 &ndash; Present</span>
            </div>
            <p class="sub">Self-employed &mdash; Kigali, Rwanda</p>
            <ul>
                <li>Designed and built full-stack web applications for local clients.</li>
                <li>Implemented REST APIs and integrated PostgreSQL/MySQL databases.</li>
                <li>Integrated AI-powered features (chat, content generation) into client projects.</li>
                <li>Managed client relationships from requirements gathering to deployment.</li>
            </ul>
        </div>
        <div class="item">
            <div class="row">
                <span class="left">Creative Designer &amp; Photo Editor</span>
                <span class="right">2022 &ndash; Present</span>
            </div>
            <p class="sub">Freelance</p>
            <ul>
                <li>Designed logos, branding materials and social media visuals (Photoshop, Illustrator).</li>
                <li>Produced AI-generated artwork using Midjourney and DALL-E.</li>
                <li>Edited and retouched professional photos for businesses and individuals.</li>
            </ul>
        </div>

        <h2 class="section">Selected Projects</h2>
        <div class="item">
            <p><strong>Personal Finance App</strong> &mdash; React, Node.js, Express, PostgreSQL, Prisma.<br/>
            Personal finance tracker with income/expense tracking, budgets, savings goals and analytics charts.</p>
        </div>
        <div class="item">
            <p><strong>Airbnb Booking System &amp; REST API</strong> &mdash; React, Node.js, Express, MongoDB, Swagger.<br/>
            Vacation rental platform with property listings, secure bookings and host dashboards; API tested with Postman and Swagger.</p>
        </div>
        <div class="item">
            <p><strong>Study Room Booking System</strong> &mdash; React, Node.js, PostgreSQL, JWT.<br/>
            Real-time university study room reservation system with admin approvals and email notifications.</p>
        </div>
        <div class="item">
            <p><strong>Umuhinzi Credit App</strong> &mdash; React Native, Node.js, PostgreSQL, Prisma.<br/>
            Mobile micro-credit platform tailored to Rwandan farmers, with crop-cycle-aligned repayment plans.</p>
        </div>
        <div class="item">
            <p><strong>Village Water System</strong> &mdash; React.js, Django, MySQL, JWT.<br/>
            Full-stack web application for automated water usage tracking and billing in village communities.</p>
        </div>
        <div class="item">
            <p><strong>Artisanal Coffee Roastery Management</strong> &mdash; PL/SQL, Oracle.<br/>
            Database solution with stored procedures and triggers for order fulfillment and inventory control.</p>
        </div>

        <h2 class="section">Certifications</h2>
        <ul>
            <li><strong>Certificate of Completion &mdash; kLab Academy Software Development Program</strong>, issued July 15, 2026. Digital Skills for Employability (DSE) Program by DOT Rwanda, in collaboration with kLab &amp; Mastercard Foundation. Covered HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express.js, REST APIs, MongoDB, Git &amp; GitHub, Figma, and Mobile Application Development with React Native.</li>
            <li><strong>Introduction to UNIX/Linux and Virtualization</strong> &mdash; issued October 21, 2025.</li>
            <li><strong>Computer Hardware Basics</strong> &mdash; Cisco Networking Academy, August 15, 2025.</li>
            <li>Additional certifications available on request.</li>
        </ul>

        <h2 class="section">Languages</h2>
        <p>English (Professional) &nbsp;&middot;&nbsp; French (Intermediate) &nbsp;&middot;&nbsp; Kinyarwanda (Native).</p>

        <h2 class="section">Referees</h2>
        <div class="ref-grid">
            <div class="item">
                <p><strong>Robert NIYITANGA</strong><br/>
                Facilitator, kLab Academy &mdash; Full-Stack Developer Program<br/>
                Phone: +250 787 491 277</p>
            </div>
            <p style="font-size: 10.5pt;">Additional academic and professional references available upon request.</p>
        </div>

        <h2 class="section">Additional Information</h2>
        <p>
            <strong>Availability:</strong> Open to internships, full-time roles and freelance opportunities.<br/>
            <strong>Work Style:</strong> Comfortable with both in-office and remote collaboration.<br/>
            <strong>Interests:</strong> Software development, AI applications, and building tools for the Rwandan market.
        </p>
    </div>
</body>
</html>
`;
};

export const downloadCV = () => {
  const htmlContent = generateCVHTML();
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
      }, 500);
    };
  }
};
