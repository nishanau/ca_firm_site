/**
 * Site Settings Configuration
 * 
 * This file contains all configurable content for the CA firm website.
 * Edit values here to update the website content without changing code.
 */

export const siteSettings = {
  // Basic Information
  firmName: "Shrestha & Associates",
  tagline: "Trusted Financial Advisory & Accounting Services",
  logo: {
    text: "S&A", // Text logo (used if no image is provided)
    imagePath: "/logo.svg" // Path to logo image (optional)
  },
  
  // Contact Information
  contact: {
    email: "info@shresthaassociates.com",
    phone: "+977 1 XXXX XXX",
    address: {
      street: "Putalisadak, Kathmandu",
      city: "Kathmandu",
      country: "Nepal",
      postalCode: "44600"
    },
    googleMapsUrl: "https://maps.google.com/maps?q=Putalisadak,Kathmandu,Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed", // Embed URL for Google Maps
    socialMedia: {
      facebook: "https://facebook.com/shresthaassociates",
      twitter: "https://twitter.com/shresthaassoc",
      linkedin: "https://linkedin.com/company/shrestha-associates"
    }
  },
  
  // Team Members
  team: [
    {
      name: "Nabin Shrestha",
      title: "Managing Partner, CA",
      photo: "/team/nabin.jpg", // Path to photo (place in public folder)
      qualifications: "CA from ICAI",
      experience: "5+ years",
      specialization: "Audit, Financial Advisory, Tax Planning",
      bio: "Nabin Shrestha is a Chartered Accountant with over 5 years of experience in auditing, financial advisory, and tax planning. He obtained his CA certification from The Institute of Chartered Accountants of India (ICAI) and has worked with various industries including manufacturing, trading, and service sectors.",
      linkedin: "https://linkedin.com/in/nabin-shrestha"
    }
    // Add more team members as needed in the future
    // Example format:
    // {
    //   name: "New Partner Name",
    //   title: "Partner, CA",
    //   photo: "/team/partner.jpg",
    //   qualifications: "CA, MBA",
    //   experience: "X years",
    //   specialization: "Areas of expertise",
    //   bio: "Professional biography and background details...",
    //   linkedin: "https://linkedin.com/in/partner-name"
    // }
  ],
  
  // Services Offered
  services: [
    {
      id: "audit",
      title: "Audit & Assurance",
      shortDescription: "Comprehensive audit services for businesses of all sizes",
      icon: "/file.svg", // Use icons from your public folder
      detailedDescription: "Our audit and assurance services provide an independent examination of financial statements and reporting systems. We help businesses maintain credibility with stakeholders through thorough and objective evaluations of financial records and internal controls.",
      servicePoints: [
        "Statutory Audits",
        "Internal Audits",
        "Compliance Audits",
        "Due Diligence",
        "Financial Statement Review"
      ]
    },
    {
      id: "tax",
      title: "Tax Advisory",
      shortDescription: "Strategic tax planning and compliance services",
      icon: "/globe.svg",
      detailedDescription: "Our tax advisory services help businesses navigate complex tax regulations and optimize their tax positions. We provide strategic planning, compliance assistance, and representation in tax matters to minimize liabilities and ensure regulatory compliance.",
      servicePoints: [
        "Tax Planning & Strategy",
        "Corporate & Individual Tax Filing",
        "VAT/GST Compliance",
        "International Tax Advisory",
        "Tax Dispute Resolution"
      ]
    },
    {
      id: "accounting",
      title: "Accounting Services",
      shortDescription: "Reliable accounting and bookkeeping solutions",
      icon: "/window.svg",
      detailedDescription: "We provide comprehensive accounting services to help businesses maintain accurate financial records. Our team handles day-to-day bookkeeping, financial statement preparation, and accounting system setup to ensure your financial data is organized and compliant.",
      servicePoints: [
        "Bookkeeping",
        "Financial Statement Preparation",
        "Accounting System Setup & Review",
        "Payroll Processing",
        "Accounts Receivable & Payable Management"
      ]
    },
    {
      id: "advisory",
      title: "Financial Advisory",
      shortDescription: "Expert financial guidance for business growth",
      icon: "/next.svg",
      detailedDescription: "Our financial advisory services help businesses make informed decisions about their financial future. We provide strategic guidance on business planning, investment analysis, and financial management to support sustainable growth and profitability.",
      servicePoints: [
        "Business Valuation",
        "Merger & Acquisition Advisory",
        "Financial Planning",
        "Cash Flow Management",
        "Investment Analysis"
      ]
    }
    // Add more services as needed
  ],
  
  // Firm Values/Principles
  values: [
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our professional dealings, ensuring trust and confidence in our services."
    },
    {
      title: "Excellence",
      description: "We are committed to delivering exceptional quality in all our services, striving for continuous improvement and professional development."
    },
    {
      title: "Client Focus",
      description: "We prioritize understanding our clients' unique needs and providing tailored solutions that add real value to their businesses."
    },
    {
      title: "Confidentiality",
      description: "We maintain strict confidentiality of all client information, respecting privacy and professional boundaries at all times."
    }
  ],
  
  // About Page Content
  aboutUs: "Shrestha & Associates is a leading chartered accountancy firm based in Kathmandu, Nepal. Founded with a vision to provide exceptional financial services, we have established ourselves as trusted advisors to businesses across various sectors. Our team of experienced professionals is dedicated to delivering high-quality audit, tax, accounting, and advisory services tailored to meet the unique needs of each client.",
  
  mission: "Our mission is to empower businesses with financial clarity and strategic insights, enabling them to make informed decisions and achieve sustainable growth. We are committed to maintaining the highest standards of professional excellence, integrity, and client service in everything we do.",
  
  vision: "To be the most trusted financial services firm in Nepal, recognized for our technical expertise, innovative solutions, and unwavering commitment to client success. We aim to contribute to the growth and development of the business community by providing world-class financial services and nurturing long-term client relationships.",
  
  history: "Established in 2018, Shrestha & Associates began as a small practice focused on providing accounting and tax services to local businesses. Under the leadership of our founding partner, Nabin Shrestha, we have grown steadily, expanding our service offerings and client base. Today, we serve a diverse portfolio of clients ranging from startups to established corporations across multiple industries. Throughout our journey, we have remained committed to our core values of integrity, excellence, and client focus, which continue to guide our professional practice.",
  
  // Client Testimonials
  testimonials: [
    {
      clientName: "Ramesh Kumar",
      company: "ABC Manufacturing Pvt. Ltd.",
      testimonial: "Shrestha & Associates has been instrumental in helping our company navigate complex financial regulations. Their audit team is thorough, professional, and provides valuable insights beyond compliance.",
      photo: "/testimonials/client1.jpg" // Optional
    },
    {
      clientName: "Sunita Sharma",
      company: "XYZ Technology Solutions",
      testimonial: "We've been working with Nabin and his team for our tax advisory needs for the past three years. Their strategic approach has helped us optimize our tax position while ensuring full compliance.",
      photo: "/testimonials/client2.jpg" // Optional
    }
    // Add more testimonials as needed
  ],
  
  // Sample Clients/Industries Served
  clients: {
    featured: [
      "Manufacturing Industries",
      "Technology Companies",
      "Retail Businesses",
      "Financial Institutions",
      "Healthcare Organizations",
      "Hospitality & Tourism",
      "Non-Profit Organizations"
    ],
    // Add specific client logos if available
    logos: [
      // { name: "Client Name", logo: "/clients/logo1.png" }
    ]
  },
  
  // Contact Form Settings
  contactForm: {
    emailServiceID: "YOUR_EMAILJS_SERVICE_ID", // EmailJS service ID
    templateID: "YOUR_EMAILJS_TEMPLATE_ID",    // EmailJS template ID
    userID: "YOUR_EMAILJS_USER_ID",            // EmailJS user ID (public key)
    defaultSubject: "Inquiry from Website",
    redirectUrl: "/thank-you",                 // Redirect after form submission
    formFields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Email Address", type: "email", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: false },
      { name: "subject", label: "Subject", type: "text", required: true },
      { name: "message", label: "Message", type: "textarea", required: true }
    ]
  },
  
  // SEO Settings
  seo: {
    defaultTitle: "Shrestha & Associates | Chartered Accountants Nepal",
    titleTemplate: "%s | Shrestha & Associates",
    description: "Shrestha & Associates is a premier chartered accountancy firm in Nepal offering audit, tax, accounting, and financial advisory services to businesses of all sizes.",
    keywords: ["chartered accountant", "Nepal", "audit services", "tax advisory", "accounting firm", "financial services", "ICAI", "business consulting"],
    ogImage: "/og-image.jpg", // Open Graph image (for social media)
    twitterHandle: "@shresthaassoc"
  },
  
  // Site Theme Settings (matching the color scheme from sample HTML)
  theme: {
    colors: {
      bg: "#0f1115",           // page background
      panel: "#151922",        // panels
      panelAlt: "#1a2030",     // alternative panel color
      text: "#e6e8ee",         // primary text
      muted: "#98a2b3",        // muted text
      brand: "#6ea8fe",        // accent color
      brandAlt: "#a78bfa",     // alternative accent
      success: "#22c55e",      // success indicators
      warning: "#f59e0b",      // warning indicators
      danger: "#ef4444",       // error indicators
      chip: "#243047",         // chip background
      border: "#273047"        // borders
    },
    fonts: {
      body: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      heading: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    }
  }
};

export default siteSettings;
