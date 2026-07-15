export interface SolutionData {
  slug: string;
  badge: string;
  title: string;
  highlightedText: string;
  description: string;
  subParagraph: string;
  capabilitiesTitle: string;
  capabilities: string[];
  whyItMattersTitle: string;
  whyItMattersDesc: string;
  benefitsTitle: string;
  benefits: string[];
  ctaBadge: string;
  ctaTitle: string;
  ctaDesc: string;
  ogDescription: string;
}

export const SOLUTIONS_DATA: Record<string, SolutionData> = {
  "business-intelligence": {
    slug: "business-intelligence",
    badge: "Business Intelligence",
    title: "Turn Data Into",
    highlightedText: "Better Decisions",
    description:
      "Successful businesses are built on informed decisions, not assumptions.",
    subParagraph:
      "NexVio provides real-time business intelligence that gives owners and managers complete visibility across every aspect of their operations. From sales performance and inventory movement to employee productivity and customer activity, every insight is available through one centralized dashboard. Instead of spending hours preparing reports, businesses can instantly access accurate, real-time information that supports faster decision-making and continuous improvement. Whether you're monitoring one location or multiple branches, NexVio keeps you connected to your business—anytime, anywhere.",
    capabilitiesTitle: "Real-Time Business Insights",
    capabilities: [
      "Sales Performance",
      "Revenue Analysis",
      "Inventory Reports",
      "Employee Performance",
      "Customer Activity",
      "Branch Performance",
      "Product Performance",
      "Operational Dashboards"
    ],
    whyItMattersTitle: "Why It Matters",
    whyItMattersDesc:
      "By understanding what's happening across your business in real time, you can identify opportunities faster, respond to challenges sooner and make confident decisions that support long-term growth. Better visibility leads to better decisions.",
    benefitsTitle: "Key Benefits",
    benefits: [
      "Live Business Dashboard",
      "Real-Time Reporting",
      "Sales & Revenue Analysis",
      "Inventory Insights",
      "Performance Tracking",
      "Multi-Branch Reporting",
      "Cloud Access",
      "Actionable Business Intelligence"
    ],
    ctaBadge: "Make Every Decision with Confidence",
    ctaTitle: "Every report. Every transaction. Every insight.",
    ctaDesc:
      "Connected in one intelligent platform built for the modern merchant.",
    ogDescription:
      "Access real-time operational reports, sales analytics and key insights through NexVio's unified Business Intelligence tool."
  },
  crm: {
    slug: "crm",
    badge: "CRM",
    title: "Know Your Customers.",
    highlightedText: "Grow Your Business.",
    description:
      "Every customer interaction is an opportunity to build loyalty.",
    subParagraph:
      "NexVio's integrated Customer Relationship Management (CRM) helps businesses understand their customers beyond the transaction. By centralizing customer information, purchase history and engagement, businesses can deliver more personalized experiences and build stronger long-term relationships. Whether welcoming a first-time visitor or serving a returning customer, your team has the information they need to provide faster, smarter and more personalized service. Because stronger customer relationships lead to stronger businesses.",
    capabilitiesTitle: "CRM Capabilities",
    capabilities: [
      "Customer Profiles",
      "Purchase History",
      "Customer Insights",
      "Loyalty Support",
      "Personalized Service",
      "Customer Database",
      "Sales History",
      "Real-Time Customer Information"
    ],
    whyItMattersTitle: "Why Loyalty Matters",
    whyItMattersDesc:
      "Customer retention is the most cost-effective path to business expansion. With NexVio CRM, you don't just store data—you build rich customer profiles that make every guest feel valued, driving repeat visits and higher average order values.",
    benefitsTitle: "Key Benefits",
    benefits: [
      "Build Long-Term Customer Relationships",
      "Improve Customer Retention",
      "Deliver Personalized Service",
      "Better Understand Customer Behavior",
      "Increase Customer Satisfaction"
    ],
    ctaBadge: "Every Customer Matters",
    ctaTitle: "Know who they are. Know what they buy.",
    ctaDesc:
      "Know how to serve them better, all managed through your NexVio ecosystem.",
    ogDescription:
      "Centralize guest history, build robust profiles, and enhance local customer retention with NexVio's intuitive CRM."
  },
  "security-reliability": {
    slug: "security-reliability",
    badge: "Security & Reliability",
    title: "Built for Secure",
    highlightedText: "Business Operations",
    description:
      "Business technology should provide confidence as well as performance.",
    subParagraph:
      "NexVio is designed to support reliable daily operations through secure user access, cloud synchronization and centralized business management. Role-based permissions help ensure employees only access the tools they need, while real-time synchronization keeps business information accurate across every connected device. Reliable technology allows businesses to focus on serving customers—not managing systems.",
    capabilitiesTitle: "Security Highlights",
    capabilities: [
      "Secure User Access",
      "Role-Based Permissions",
      "Cloud Synchronization",
      "Reliable Daily Operations",
      "Business Continuity",
      "Centralized Data Management"
    ],
    whyItMattersTitle: "Why Security Matters",
    whyItMattersDesc:
      "Protecting business information is essential for maintaining operational efficiency and supporting business continuity. NexVio helps businesses operate with confidence by keeping information connected, organized and accessible to authorized users.",
    benefitsTitle: "Enterprise-Grade Standards",
    benefits: [
      "End-to-End Encrypted Sync",
      "Instant Cloud Failover",
      "Granular Employee Access Control",
      "Continuous Operational Uptime"
    ],
    ctaBadge: "Make Every Operation Bulletproof",
    ctaTitle: "Uncompromising Security. Absolute Reliability.",
    ctaDesc:
      "Protect your data, empower your team with role-based access, and sync live to the cloud.",
    ogDescription:
      "Discover NexVio's secure-by-design infrastructure, cloud sync, and role-based permissions built for business continuity."
  }
};
