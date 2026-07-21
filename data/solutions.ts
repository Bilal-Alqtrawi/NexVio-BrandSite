export interface SolutionCapability {
  title: string;
  description: string;
}

export interface SolutionData {
  slug: string;
  badge: string;
  modulesLabel: string;
  title: string;
  highlightedText: string;
  description: string;
  subParagraph: string;
  capabilitiesTitle: string;
  capabilities: SolutionCapability[];
  whyItMattersTitle: string;
  whyItMattersDesc: string;
  benefitsTitle: string;
  benefits: string[];
  ctaBadge: string;
  ctaTitle: string;
  ctaDesc: string;
  ogDescription: string;
  chartTitle?: string;
  chartSubtitle?: string;
}

export const SOLUTIONS_DATA: Record<string, SolutionData> = {
  "business-intelligence": {
    slug: "business-intelligence",
    badge: "Business Analytics",
    modulesLabel: "Dashboard Insights",
    title: "Turn Data Into",
    highlightedText: "Better Decisions",
    description:
      "Successful businesses are built on informed decisions, not assumptions.",
    subParagraph:
      "NexVio gives you real-time insights into sales, inventory, employees, and customer activity—all from one centralized dashboard. Monitor performance instantly, make data-driven decisions, and gain complete visibility across every branch.",
    capabilitiesTitle: "Real-Time Business Insights",
    capabilities: [
      {
        title: "Sales Performance",
        description:
          "Track sales performance, peak hours, top-selling products, and revenue trends in real time."
      },
      {
        title: "Revenue Overview",
        description:
          "Monitor revenue growth, compare periods, and identify opportunities to improve profitability."
      },
      {
        title: "Inventory Insights",
        description:
          "Monitor stock levels, product movement, low-stock alerts, and inventory value from one dashboard."
      },
      {
        title: "Employee Performance",
        description:
          "Measure employee productivity, sales performance, attendance, and shift activity."
      },
      {
        title: "Customer Insights",
        description:
          "Understand customer behavior, purchase history, loyalty activity, and returning customer trends."
      },
      {
        title: "Branch Performance",
        description:
          "Compare branch performance, monitor KPIs, and manage every location from one centralized dashboard."
      }
    ],
    whyItMattersTitle: "Why It Matters",
    whyItMattersDesc:
      "By understanding what's happening across your business in real time, you can identify opportunities faster, respond to challenges sooner and make confident decisions that support long-term growth.",
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
      "One intelligent platform. Complete visibility. Smarter business decisions.",
    ogDescription:
      "Access real-time operational reports, sales analytics and key insights through NexVio's unified Business Intelligence tool.",
    chartTitle: "NEXVIO ANALYTICS",
    chartSubtitle: "Business Performance"
  },
  crm: {
    slug: "crm",
    badge: "CRM",
    modulesLabel: "CRM Features",
    title: "Know Your Customers.",
    highlightedText: "Grow Your Business.",
    description:
      "Every customer interaction is an opportunity to build loyalty.",
    subParagraph:
      "NexVio's integrated Customer Relationship Management (CRM) helps businesses understand their customers beyond the transaction. By centralizing customer information, purchase history and engagement, businesses can deliver more personalized experiences and build stronger long-term relationships.",
    capabilitiesTitle: "CRM Capabilities",
    capabilities: [
      {
        title: "Customer Profiles",
        description:
          "Create detailed customer profiles with contact information, preferences, purchase history, and loyalty status."
      },
      {
        title: "Purchase History",
        description:
          "Access complete purchase history to better understand customer behavior and personalize future interactions."
      },
      {
        title: "Customer Insights",
        description:
          "Analyze customer behavior, buying patterns, and engagement to build stronger relationships."
      },
      {
        title: "Loyalty Programs",
        description:
          "Reward loyal customers with personalized offers, points, and exclusive promotions."
      },
      {
        title: "Personalized Service",
        description:
          "Deliver personalized experiences based on customer preferences, purchase history, and customer engagement."
      },
      {
        title: "Customer Database",
        description:
          "Manage all customer information securely in one centralized and searchable database."
      },
      {
        title: "Customer Activity",
        description:
          "Monitor customer interactions, recent purchases, loyalty activity, and customer engagement in real time."
      },
      {
        title: "Real-Time Customer Information",
        description:
          "Access real-time customer profiles, contact details, loyalty status, and activity from one centralized CRM platform."
      }
    ],
    whyItMattersTitle: "Why Loyalty Matters",
    whyItMattersDesc:
      "Customer retention is the most cost-effective path to business expansion. With NexVio CRM, you don't just store data—you build rich customer profiles that make every guest feel valued.",
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
      "Everything you need to understand, engage, and retain your customers.",
    ogDescription:
      "Centralize guest history, build robust profiles, and enhance local customer retention with NexVio's intuitive CRM."
  },
  "security-reliability": {
    slug: "security-reliability",
    badge: "Security & Reliability",
    modulesLabel: "System Modules",
    title: "Built for Secure",
    highlightedText: "Business Operations",
    description:
      "Business technology should provide confidence as well as performance.",
    subParagraph:
      "NexVio is designed to support reliable daily operations through secure user access, cloud synchronization and centralized business management. Role-based permissions help ensure employees only access the tools they need, while real-time synchronization keeps business information accurate across every connected device.",
    capabilitiesTitle: "Security Highlights",
    capabilities: [
      {
        title: "Secure User Access",
        description:
          "Protect business operations with secure authentication and controlled access."
      },
      {
        title: "Role-Based Permissions",
        description:
          "Assign precise permissions so teams only access the tools they need."
      },
      {
        title: "Cloud Synchronization",
        description:
          "Keep business data accurate and available across every connected device."
      },
      {
        title: "Reliable Daily Operations",
        description:
          "Depend on stable infrastructure that keeps your business running smoothly."
      },
      {
        title: "Business Continuity",
        description:
          "Maintain continuity with cloud-backed data and resilient operational workflows."
      },
      {
        title: "Centralized Data Management",
        description:
          "Organize and manage critical business information from one secure platform."
      }
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
