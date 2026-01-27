import profileImage from "@/assets/profile.jpeg";

export const generateCVHTML = () => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alain Mugabo - Software Engineer CV</title>
    <style>
        @page {
            size: A4;
            margin: 0;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #1a1a2e;
            color: #ffffff;
            line-height: 1.5;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        
        .container {
            width: 210mm;
            min-height: 297mm;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 240px 1fr;
        }
        
        .sidebar {
            background: #16213e;
            padding: 30px 20px;
        }
        
        .main {
            padding: 30px 25px;
            background: #1a1a2e;
        }
        
        .profile-img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            object-position: top;
            border: 3px solid #0f3460;
            margin: 0 auto 15px;
            display: block;
        }
        
        .name {
            text-align: center;
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 3px;
            color: #e94560;
        }
        
        .title {
            text-align: center;
            font-size: 0.9rem;
            color: #a0a0a0;
            margin-bottom: 25px;
        }
        
        .section-title {
            font-size: 0.95rem;
            font-weight: 600;
            color: #e94560;
            margin-bottom: 12px;
            padding-bottom: 6px;
            border-bottom: 2px solid #0f3460;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            font-size: 0.8rem;
        }
        
        .contact-icon {
            width: 18px;
            margin-right: 8px;
            color: #e94560;
        }
        
        .skills-list {
            list-style: none;
        }
        
        .skills-list li {
            padding: 6px 0;
            font-size: 0.8rem;
            border-bottom: 1px solid #0f3460;
        }
        
        .skills-list li:last-child {
            border-bottom: none;
        }
        
        .languages {
            margin-top: 20px;
        }
        
        .language-item {
            margin-bottom: 6px;
            font-size: 0.8rem;
        }
        
        .main-section {
            margin-bottom: 22px;
        }
        
        .main-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: #e94560;
            margin-bottom: 12px;
            padding-bottom: 6px;
            border-bottom: 2px solid #0f3460;
        }
        
        .summary {
            font-size: 0.85rem;
            color: #d0d0d0;
            text-align: justify;
        }
        
        .edu-item, .exp-item {
            margin-bottom: 15px;
        }
        
        .edu-date, .exp-date {
            font-size: 0.75rem;
            color: #e94560;
            margin-bottom: 3px;
        }
        
        .edu-school, .exp-company {
            font-size: 0.95rem;
            font-weight: 600;
            color: #ffffff;
        }
        
        .edu-degree, .exp-title {
            font-size: 0.8rem;
            color: #a0a0a0;
        }
        
        .exp-list {
            list-style: disc;
            margin-left: 18px;
            margin-top: 6px;
        }
        
        .exp-list li {
            font-size: 0.8rem;
            color: #d0d0d0;
            margin-bottom: 4px;
        }
        
        .additional {
            font-size: 0.8rem;
            color: #d0d0d0;
        }
        
        .additional p {
            margin-bottom: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <aside class="sidebar">
            <img src="${profileImage}" alt="Alain Mugabo" class="profile-img">
            <h1 class="name">ALAIN MUGABO</h1>
            <p class="title">Software Engineer</p>
            
            <div class="section">
                <h2 class="section-title">Contact</h2>
                <div class="contact-item">
                    <span class="contact-icon">📱</span>
                    <span>+250 782 499 569</span>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">✉️</span>
                    <span>mugaboalain58@gmail.com</span>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">📍</span>
                    <span>Kigali, Rwanda</span>
                </div>
            </div>
            
            <div class="section" style="margin-top: 20px;">
                <h2 class="section-title">Skills & Expertise</h2>
                <ul class="skills-list">
                    <li>Excellent verbal and written communication</li>
                    <li>Proficient in English</li>
                    <li>Critical thinking and problem resolution</li>
                    <li>Professional demeanor in corporate settings</li>
                    <li>Adept at remote collaboration and project tools</li>
                </ul>
            </div>
            
            <div class="languages">
                <h2 class="section-title">Languages</h2>
                <p class="language-item">• English</p>
                <p class="language-item">• French</p>
                <p class="language-item">• Kinyarwanda</p>
            </div>
        </aside>
        
        <main class="main">
            <section class="main-section">
                <h2 class="main-title">Professional Summary</h2>
                <p class="summary">
                    Dedicated and expressive software engineering student possessing a solid background in communication, critical thinking, and technology. Enthusiastic about software creation, investigation, and human-focused solutions. Proficient in leveraging analytical and strategic approaches to architect, construct, and enhance digital platforms within fast-paced environments.
                </p>
            </section>
            
            <section class="main-section">
                <h2 class="main-title">Education</h2>
                <div class="edu-item">
                    <p class="edu-date">(2021 - PRESENT)</p>
                    <p class="edu-school">ADVENTIST UNIVERSITY OF CENTRAL AFRICA (AUCA)</p>
                    <p class="edu-degree">Bachelor of Software Engineering</p>
                </div>
                <div class="edu-item">
                    <p class="edu-date">(2019 - 2022)</p>
                    <p class="edu-school">CHRIST ROI HIGH SCHOOL</p>
                    <p class="edu-degree">Mathematics, Chemistry & Biology (MCB)</p>
                </div>
            </section>
            
            <section class="main-section">
                <h2 class="main-title">Experience</h2>
                <div class="exp-item">
                    <p class="exp-date">(2023 - PRESENT)</p>
                    <p class="exp-title">WEB DEVELOPER</p>
                    <p class="exp-company">Freelance Projects</p>
                    <ul class="exp-list">
                        <li>Architected and built web applications for local enterprises</li>
                        <li>Supported clients with digital presence strategies</li>
                        <li>Cultivated client relationships and business partnerships</li>
                    </ul>
                </div>
            </section>
            
            <section class="main-section">
                <h2 class="main-title">Additional Information</h2>
                <div class="additional">
                    <p><strong>Availability:</strong> Flexible (Part-time or Full-time)</p>
                    <p><strong>Work Style:</strong> Comfortable with remote collaboration</p>
                    <p><strong>Interests:</strong> Software development, technical research, and innovative IT solutions</p>
                    <p><strong>Openness:</strong> Seeking internships, freelance opportunities, or collaborative tech ventures</p>
                </div>
            </section>
        </main>
    </div>
</body>
</html>
`;
};

export const downloadCV = () => {
  const htmlContent = generateCVHTML();
  
  // Create a new window for printing/saving as PDF
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    
    // Wait for content to load then trigger print dialog
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
      }, 500);
    };
  }
};
