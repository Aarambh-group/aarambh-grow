"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Target,
  Sparkles,
  Layers,
  ChevronRight,
  FileText,
  Briefcase,
  TrendingUp,
  Award,
  Scale,
  Settings,
} from "lucide-react";

// --- SERVICE DATA STRUCTURE ---
const serviceData = {
  Registration: {
    icon: <Briefcase className="w-4 h-4" />,
    subServices: [
      {
        name: "Private Limited Company",
        title: "Private Limited Company Registration",
        tagline: "Build a credible business foundation for long-term growth.",
        description:
          "A professionally structured company gives entrepreneurs a clear legal identity, stronger market credibility, and a foundation for future expansion. AarambhGrow supports you through the registration journey, from initial consultation and documentation to incorporation.",
        benefits: [
          { title: "Distinct Business Identity", desc: "Establish your business as a formally recognized entity." },
          { title: "Owner Protection", desc: "Create a structure designed to separate personal and business liabilities." },
          { title: "Professional Credibility", desc: "Strengthen confidence among clients, vendors, institutions, and partners." },
          { title: "Growth Ready", desc: "Build a foundation that can support future investment and expansion." },
        ],
        suitedFor: ["Startups", "Technology Companies", "Manufacturing Businesses", "Professional Firms", "Growing Businesses"],
        steps: [
          { num: "01", title: "Business Consultation", desc: "Understand your business goals and identify the appropriate structure." },
          { num: "02", title: "Name & Documentation Support", desc: "Assist with name selection and organize the required documentation." },
          { num: "03", title: "Application Preparation", desc: "Prepare the required registration information and application." },
          { num: "04", title: "Registration Assistance", desc: "Support the filing and incorporation process." },
          { num: "05", title: "Post-Registration Guidance", desc: "Help you understand the immediate requirements after registration." },
        ],
        whyChoose: [
          "Expert Guidance — Get practical support throughout the process.",
          "Structured Approach — Every stage is handled in a clear sequence.",
          "Documentation Accuracy — Reduce avoidable errors and missing information.",
          "Transparent Process — Understand requirements and next steps clearly.",
          "Business-Focused Support — Solutions are aligned with your business objectives.",
        ],
      },
      {
        name: "LLP Registration",
        title: "Limited Liability Partnership (LLP) Registration",
        tagline: "Combine the flexibility of a partnership with limited liability.",
        description:
          "LLP registration offers a lower compliance burden while protecting personal assets. Ideal for professional services and closely held businesses looking for structured collaboration.",
        benefits: [
          { title: "Limited Liability", desc: "Partners' personal assets remain secure from business debts." },
          { title: "Flexible Management", desc: "Internal structure can be easily managed via mutual agreement." },
          { title: "Lower Compliance", desc: "Fewer mandatory filings compared to corporate entities." },
          { title: "Easy Transferability", desc: "Partnership rights and ownership can be altered seamlessly." },
        ],
        suitedFor: ["Consultancies", "Creative Agencies", "Law Practices", "Small Partnerships"],
        steps: [
          { num: "01", title: "Partner Consultation", desc: "Define partner roles, capital contribution, and profit sharing." },
          { num: "02", title: "DIN & DSC Procurement", desc: "Obtain digital signatures and partner identification numbers." },
          { num: "03", title: "Name Approval", desc: "Check and reserve unique LLP nomenclature." },
          { num: "04", title: "Incorporation Filing", desc: "Submit incorporation documents to regulatory authorities." },
        ],
        whyChoose: [
          "Simplified compliance management tailored for agile teams.",
          "Clear partner protection mechanisms.",
          "Dedicated regulatory assistance from incorporation experts."
        ],
      },
      {
        name: "OPC Registration",
        title: "One Person Company (OPC) Registration",
        tagline: "Full corporate control with single-owner convenience.",
        description:
          "Empowers solo entrepreneurs with the benefits of a corporate structure without needing a second director or shareholder.",
        benefits: [
          { title: "Single Ownership", desc: "Retain 100% control over business decisions." },
          { title: "Corporate Status", desc: "Enjoy separate legal entity advantages as a solo founder." },
          { title: "Easy Funding Access", desc: "More reliable than sole proprietorships for credit and loans." },
        ],
        suitedFor: ["Solo Founders", "Freelancers Scaling Up", "E-commerce Sellers"],
        steps: [
          { num: "01", title: "Nominee Selection", desc: "Designate a legal nominee as required by law." },
          { num: "02", title: "Documentation & DSC", desc: "Gather KYC and secure digital signatures." },
          { num: "03", title: "Filing & Approval", desc: "Submit application for official incorporation." },
        ],
        whyChoose: [
          "Tailor-made solutions for individual entrepreneurs.",
          "Complete transparency on fees and legal requirements."
        ],
      },
      { name: "Partnership Firm", title: "Partnership Firm Registration", tagline: "Traditional collaborative business setup.", description: "Setup traditional partnerships with proper deed documentation.", benefits: [{ title: "Easy Setup", desc: "Quick drafting and execution." }], suitedFor: ["Local Traders", "Family Businesses"], steps: [{ num: "01", title: "Deed Drafting", desc: "Prepare partnership agreement." }], whyChoose: ["Fast execution and legal validation."] },
      { name: "Sole Proprietorship", title: "Sole Proprietorship Registration", tagline: "Simplest business structure for individuals.", description: "Start trading quickly using standard registrations like GST or MSME.", benefits: [{ title: "Total Control", desc: "Complete autonomy." }], suitedFor: ["Freelancers", "Retailers"], steps: [{ num: "01", title: "Identity Verification", desc: "Validate KYC documents." }], whyChoose: ["Minimal paperwork."] },
      { name: "Startup India", title: "Startup India Registration", tagline: "Unlock tax holidays and government benefits.", description: "Get recognized under DPIIT to access funding incentives and rebates.", benefits: [{ title: "Tax Exemptions", desc: "Income tax exemptions for initial years." }], suitedFor: ["Innovative Startups", "Tech Ventures"], steps: [{ num: "01", title: "DPIIT Filing", desc: "Submit pitch deck and innovation proof." }], whyChoose: ["Expert liaison with government bodies."] },
      { name: "MSME / Udyam", title: "MSME / Udyam Registration", tagline: "Empower your micro, small, or medium enterprise.", description: "Avail priority sector lending, government tenders, and subsidies.", benefits: [{ title: "Collateral Free Loans", desc: "Easy credit access." }], suitedFor: ["Manufacturers", "Service Providers"], steps: [{ num: "01", title: "Aadhaar Verification", desc: "Instant Udyam registration." }], whyChoose: ["Hassle-free digital processing."] },
      { name: "GST Registration", title: "GST Registration", tagline: "Mandatory indirect tax compliance made easy.", description: "Obtain your GSTIN seamlessly for lawful interstate and local trade.", benefits: [{ title: "Legal Trading", desc: "Operate across state borders legally." }], suitedFor: ["All Commercial Enterprises", "E-commerce"], steps: [{ num: "01", title: "Application Upload", desc: "Submit business proofs." }], whyChoose: ["Error-free submission."] },
      { name: "Trademark Registration", title: "Trademark Registration", tagline: "Protect your brand name, logo, and identity.", description: "Secure exclusive rights over your intellectual property assets.", benefits: [{ title: "Legal Monopoly", desc: "Prevent unauthorized usage of your brand." }], suitedFor: ["Brand Owners", "Product Creators"], steps: [{ num: "01", title: "Search & Class Analysis", desc: "Check availability." }], whyChoose: ["Comprehensive IP protection."] },
      { name: "GeM Registration", title: "GeM (Government e-Marketplace) Registration", tagline: "Sell directly to government departments and PSUs.", description: "Register as a verified vendor on the national public procurement portal.", benefits: [{ title: "Direct Gov Access", desc: "Bid on government tenders." }], suitedFor: ["Suppliers", "OEMs", "Contractors"], steps: [{ num: "01", title: "Vendor Assessment", desc: "Profile setup on GeM." }], whyChoose: ["Maximize public sector business reach."] },
    ],
  },
  Finance: {
    icon: <TrendingUp className="w-4 h-4" />,
    subServices: [
      {
        name: "Accounting & Bookkeeping",
        title: "Professional Accounting & Bookkeeping",
        tagline: "Maintain pristine financial records with certified accountants.",
        description: "Accurate ledger management, bank reconciliations, and financial statement compilation to keep your business audit-ready year-round.",
        benefits: [
          { title: "Real-time Visibility", desc: "Clear insight into cash flow and financial health." },
          { title: "Audit Readiness", desc: "Fully compliant books matching statutory guidelines." },
        ],
        suitedFor: ["SMEs", "Retailers", "Service Agencies"],
        steps: [
          { num: "01", title: "Data Integration", desc: "Connect banking and invoicing feeds." },
          { num: "02", title: "Monthly Reconciliation", desc: "Categorize expenses and reconcile accounts." },
        ],
        whyChoose: ["Dedicated financial experts and secure data handling."],
      },
      { name: "Financial Planning", title: "Financial Planning & Advisory", tagline: "Strategic monetary roadmaps.", description: "Plan capital allocation and ROI strategies.", benefits: [{ title: "Optimized Spend", desc: "Reduce wastage." }], suitedFor: ["Growing Companies"], steps: [{ num: "01", title: "Audit", desc: "Review current financials." }], whyChoose: ["Experienced CFO insights."] },
      { name: "Tax Planning", title: "Corporate Tax Planning", tagline: "Minimize liability legally.", description: "Structure business transactions for tax efficiency.", benefits: [{ title: "Tax Savings", desc: "Maximize deductions." }], suitedFor: ["All Businesses"], steps: [{ num: "01", title: "Review", desc: "Analyze income streams." }], whyChoose: ["Up-to-date tax code expertise."] },
      { name: "Financial Forecasting", title: "Financial Forecasting", tagline: "Predict future revenues and expenses.", description: "Build data-driven financial models for investors.", benefits: [{ title: "Better Planning", desc: "Anticipate cash crunches." }], suitedFor: ["Fundraising Startups"], steps: [{ num: "01", title: "Modeling", desc: "Create 3-5 year projections." }], whyChoose: ["Investor-grade financial models."] },
      { name: "CFO Advisory", title: "Virtual CFO Advisory", tagline: "Executive financial leadership on demand.", description: "High-level financial oversight without full-time overhead.", benefits: [{ title: "Strategic Growth", desc: "Expert pricing and expansion advice." }], suitedFor: ["Scale-ups"], steps: [{ num: "01", title: "Assessment", desc: "Review financial architecture." }], whyChoose: ["Fractional executive expertise."] },
      { name: "Business Budgeting", title: "Business Budgeting", tagline: "Control operational expenditure.", description: "Establish department-wise budgets and tracking.", benefits: [{ title: "Cost Control", desc: "Strict adherence to financial limits." }], suitedFor: ["All Enterprises"], steps: [{ num: "01", title: "Target Setting", desc: "Define fiscal targets." }], whyChoose: ["Rigorous tracking mechanisms."] },
    ],
  },
  Certification: {
    icon: <Award className="w-4 h-4" />,
    subServices: [
      {
        name: "ISO Certification",
        title: "ISO Certification Services",
        tagline: "Global recognition for quality and operational standards.",
        description: "Achieve ISO 9001, ISO 27001, and other international standard certifications to build global market trust.",
        benefits: [
          { title: "International Credibility", desc: "Bid for global and enterprise contracts." },
          { title: "Process Efficiency", desc: "Standardize internal operating procedures." },
        ],
        suitedFor: ["Manufacturers", "IT Firms", "Exporters"],
        steps: [
          { num: "01", title: "Gap Analysis", desc: "Evaluate existing processes against ISO standards." },
          { num: "02", title: "Documentation Audit", desc: "Prepare quality manuals." },
        ],
        whyChoose: ["End-to-end audit support and accredited certification."],
      },
      { name: "Quality Certifications", title: "Quality Management Certifications", tagline: "Enhance product and service quality.", description: "Implement Six Sigma and quality benchmarks.", benefits: [{ title: "Zero Defect Focus", desc: "Improve output quality." }], suitedFor: ["Manufacturing Units"], steps: [{ num: "01", title: "Inspection", desc: "Assess shop floor." }], whyChoose: ["Certified quality auditors."] },
      { name: "Government Approvals", title: "Government Licensing & Approvals", tagline: "Navigate bureaucratic clearances.", description: "Secure industry-specific government licenses.", benefits: [{ title: "Uninterrupted Operations", desc: "Full legal clearance." }], suitedFor: ["Factories", "Food Businesses"], steps: [{ num: "01", title: "Application", desc: "Filing with departments." }], whyChoose: ["Strong regulatory liaison."] },
      { name: "Industry Certifications", title: "Industry-Specific Certifications", tagline: "Comply with vertical norms.", description: "Obtain specialized sector certifications.", benefits: [{ title: "Market Access", desc: "Meet statutory supplier prerequisites." }], suitedFor: ["Niche Sectors"], steps: [{ num: "01", title: "Compliance Check", desc: "Verify norms." }], whyChoose: ["Sector-expert guidance."] },
      { name: "Compliance Certifications", title: "Regulatory Compliance Certifications", tagline: "Verify adherence to laws.", description: "Third-party compliance verification certificates.", benefits: [{ title: "Risk Mitigation", desc: "Avoid penalties." }], suitedFor: ["Corporate Entities"], steps: [{ num: "01", title: "Audit", desc: "Inspect statutory records." }], whyChoose: ["Thorough and reliable audits."] },
    ],
  },
  Branding: {
    icon: <Sparkles className="w-4 h-4" />,
    subServices: [
      {
        name: "Brand Strategy",
        title: "Comprehensive Brand Strategy",
        tagline: "Define your market positioning and brand voice.",
        description: "Craft a distinct value proposition, audience personas, and messaging framework that differentiates your business.",
        benefits: [
          { title: "Clear Positioning", desc: "Stand out in crowded competitive landscapes." },
          { title: "Customer Loyalty", desc: "Build resonant emotional connections." },
        ],
        suitedFor: ["New Brands", "Rebranding Ventures"],
        steps: [
          { num: "01", title: "Market Research", desc: "Analyze competitors and audience behavior." },
          { num: "02", title: "Strategy Formulation", desc: "Define mission, vision, and voice." },
        ],
        whyChoose: ["Creative strategists with commercial acumen."],
      },
      { name: "Brand Identity", title: "Brand Identity Development", tagline: "Visual assets that speak volumes.", description: "Professional color palettes, typography, and design guidelines.", benefits: [{ title: "Cohesive Look", desc: "Consistent cross-platform presence." }], suitedFor: ["Startups"], steps: [{ num: "01", title: "Moodboarding", desc: "Explore design directions." }], whyChoose: ["Award-winning designers."] },
      { name: "Logo & Visual Identity", title: "Logo & Visual Asset Creation", tagline: "Memorable symbols for your business.", description: "Design distinctive logos and vector assets.", benefits: [{ title: "Instant Recognition", desc: "Memorable brand mark." }], suitedFor: ["All Businesses"], steps: [{ num: "01", title: "Concept Drafts", desc: "Review initial logo designs." }], whyChoose: ["Original vector deliverables."] },
      { name: "Corporate Profile", title: "Corporate Profile & Pitch Deck", tagline: "Impress investors and partners.", description: "Design professional company profiles and funding pitch decks.", benefits: [{ title: "High Conversion", desc: "Clear value communication." }], suitedFor: ["Fundraising Startups"], steps: [{ num: "01", title: "Content Structuring", desc: "Outline key achievements." }], whyChoose: ["Investor-aligned storytelling."] },
      { name: "Digital Presence", title: "Digital Brand Presence", tagline: "Establish authority online.", description: "Optimized web profiles and social media branding.", benefits: [{ title: "Digital Reach", desc: "Engage online audiences." }], suitedFor: ["Digital-first Businesses"], steps: [{ num: "01", title: "Audit", desc: "Review current digital footprints." }], whyChoose: ["Holistic digital execution."] },
      { name: "Marketing Communication", title: "Marketing Collateral & Copy", tagline: "Persuasive content that sells.", description: "Brochures, flyers, and sales enablement collateral.", benefits: [{ title: "Sales Support", desc: "Equip sales teams effectively." }], suitedFor: ["B2B Companies"], steps: [{ num: "01", title: "Copywriting", desc: "Draft engaging content." }], whyChoose: ["Conversion-focused copywriters."] },
    ],
  },
  "Legal & CA": {
    icon: <Scale className="w-4 h-4" />,
    subServices: [
      {
        name: "Tax Compliance",
        title: "Comprehensive Tax Compliance",
        tagline: "Stay 100% compliant with Indian tax laws.",
        description: "Timely filing of income tax, TDS, and advance tax computations managed by chartered accountants.",
        benefits: [
          { title: "Zero Penalties", desc: "Never miss a statutory deadline." },
          { title: "Accurate Filings", desc: "Optimized calculations by expert CAs." },
        ],
        suitedFor: ["All Registered Entities"],
        steps: [
          { num: "01", title: "Document Collection", desc: "Gather financial statements." },
          { num: "02", title: "Computation & Filing", desc: "Submit returns online." },
        ],
        whyChoose: ["Chartered Accountant verified filings."],
      },
      { name: "GST Compliance", title: "Monthly & Annual GST Compliance", tagline: "Seamless GSTR-1, GSTR-3B filings.", description: "Reconcile input tax credit and file returns accurately.", benefits: [{ title: "ITC Claim", desc: "Maximize eligible tax credits." }], suitedFor: ["Traders", "Manufacturers", "Service Providers"], steps: [{ num: "01", title: "Invoice Matching", desc: "Reconcile GSTR-2B." }], whyChoose: ["Automated reconciliation tools + CA review."] },
      { name: "ROC Compliance", title: "ROC Annual Filing & Compliance", tagline: "Fulfill Ministry of Corporate Affairs norms.", description: "File AOC-4, MGT-7, and statutory event-based forms.", benefits: [{ title: "Active Status", desc: "Keep company master data clean and compliant." }], suitedFor: ["Private Limited Companies", "LLPs"], steps: [{ num: "01", title: "Audit Report Integration", desc: "Attach financials." }], whyChoose: ["Experienced company secretaries."] },
      { name: "Legal Documentation", title: "Commercial & Legal Contracts", tagline: "Protect your business agreements.", description: "Drafting of founder agreements, NDAs, vendor contracts, and employment terms.", benefits: [{ title: "Legal Security", desc: "Ironclad dispute prevention." }], suitedFor: ["Startups", "Enterprises"], steps: [{ num: "01", title: "Requirement Gathering", desc: "Understand contract scope." }], whyChoose: ["Drafted by seasoned corporate lawyers."] },
      { name: "Company Compliance", title: "Secretarial Audit & Compliance", tagline: "Complete corporate governance.", description: "Maintain statutory registers and board meeting minutes.", benefits: [{ title: "Governance", desc: "Adherence to corporate law." }], suitedFor: ["Growing Companies"], steps: [{ num: "01", title: "Register Setup", desc: "Initialize statutory registers." }], whyChoose: ["Rigorous secretarial standards."] },
      { name: "CA Advisory", title: "Chartered Accountant Advisory", tagline: "Expert financial and tax consultation.", description: "Direct consultations with senior CAs for complex business issues.", benefits: [{ title: "Expert Answers", desc: "Resolve intricate tax matters." }], suitedFor: ["All Businesses"], steps: [{ num: "01", title: "Consultation Call", desc: "Discuss specific queries." }], whyChoose: ["Decades of combined advisory experience."] },
    ],
  },
  Operations: {
    icon: <Settings className="w-4 h-4" />,
    subServices: [
      {
        name: "Business Process Setup",
        title: "Business Process Setup & Architecture",
        tagline: "Build scalable operational workflows from scratch.",
        description: "Design efficient workflows, supply chain pathways, and internal management systems for smooth scaling.",
        benefits: [
          { title: "Operational Clarity", desc: "Every team member knows their exact workflow." },
          { title: "Scalability", desc: "Processes that grow effortlessly with volume." },
        ],
        suitedFor: ["New Ventures", "Expanding Businesses"],
        steps: [
          { num: "01", title: "Workflow Mapping", desc: "Analyze current operations." },
          { num: "02", title: "Standardization", desc: "Design optimal process flows." },
        ],
        whyChoose: ["Experienced operations consultants."],
      },
      { name: "SOP Development", title: "Standard Operating Procedures (SOP)", tagline: "Documented workflows for consistency.", description: "Create detailed SOP manuals for every department.", benefits: [{ title: "Easy Training", desc: "Onboard staff rapidly." }], suitedFor: ["Growing Enterprises"], steps: [{ num: "01", title: "Observation", desc: "Shadow internal teams." }], whyChoose: ["Clear, actionable documentation."] },
      { name: "Process Optimization", title: "Business Process Optimization", tagline: "Eliminate bottlenecks and cut costs.", description: "Lean management techniques to streamline production and service delivery.", benefits: [{ title: "Cost Reduction", desc: "Remove operational inefficiencies." }], suitedFor: ["Established Businesses"], steps: [{ num: "01", title: "Bottleneck Analysis", desc: "Identify friction points." }], whyChoose: ["Data-driven optimization strategies."] },
      { name: "Vendor Management", title: "Vendor & Supplier Management", tagline: "Build reliable supply chains.", description: "Vendor evaluation, contracting, and performance tracking frameworks.", benefits: [{ title: "Reliability", desc: "Consistent supply chain performance." }], suitedFor: ["Manufacturers", "Retailers"], steps: [{ num: "01", title: "Vendor Assessment", desc: "Evaluate capabilities." }], whyChoose: ["Robust vendor evaluation protocols."] },
      { name: "Operational Strategy", title: "Long-term Operational Strategy", tagline: "Align operations with business goals.", description: "Strategic capacity planning and infrastructure scaling.", benefits: [{ title: "Future Ready", desc: "Infrastructure aligned with growth targets." }], suitedFor: ["Scale-ups"], steps: [{ num: "01", title: "Capacity Audit", desc: "Assess current limits." }], whyChoose: ["Strategic foresight and planning."] },
      { name: "Business Performance Support", title: "Business Performance Analytics", tagline: "Track KPIs that matter.", description: "Implement dashboards and metrics to monitor operational health.", benefits: [{ title: "Data-Driven Decisions", desc: "Monitor live performance indicators." }], suitedFor: ["All Enterprises"], steps: [{ num: "01", title: "KPI Definition", desc: "Identify core metrics." }], whyChoose: ["Advanced dashboard implementation."] },
    ],
  },
};

const categories = Object.keys(serviceData);

export default function ServicesExplorer() {
  const [activeCategory, setActiveCategory] = useState("Registration");
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  const currentCategoryData = serviceData[activeCategory];
  const activeService = currentCategoryData.subServices[activeSubIndex] || currentCategoryData.subServices[0];

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setActiveSubIndex(0); // Reset to first sub-service
  };

  return (
    <section className="relative w-full bg-[#f8fafc] py-12 lg:py-16 font-sans text-[#0f172a] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* --- 2. MAIN SERVICE CATEGORY NAVIGATION (Tabs) --- */}
        <div className="w-full overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center justify-start md:justify-center gap-2 border-b border-slate-200/80 pb-4 min-w-max">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`group relative px-5 py-2.5 rounded-lg text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-[#03254C] text-white shadow-md shadow-[#03254C]/20"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
                  }`}
                >
                  <span className={`${isActive ? "text-[#F97316]" : "text-slate-400 group-hover:text-[#03254C]"} transition-colors`}>
                    {serviceData[cat].icon}
                  </span>
                  <span>{cat}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute -bottom-4 left-0 right-0 h-1 bg-[#F97316] rounded-full hidden md:block"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* --- 3. SERVICE CONTENT AREA (Sidebar + Main View) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Sidebar — Sub-services (3 Cols) */}
          <div className="lg:col-span-3 bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs space-y-2">
            <div className="flex items-center gap-2 pb-3 mb-2 border-b border-slate-100 px-2">
              <Layers className="w-4 h-4 text-[#F97316]" />
              <h3 className="text-xs font-black uppercase tracking-widest text-[#03254C]">
                {activeCategory} Services
              </h3>
            </div>
            
            <div className="space-y-1 max-h-[500px] overflow-y-auto pr-1">
              {currentCategoryData.subServices.map((sub, idx) => {
                const isSubActive = activeSubIndex === idx;
                return (
                  <button
                    key={sub.name}
                    onClick={() => setActiveSubIndex(idx)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                      isSubActive
                        ? "bg-[#03254C]/10 text-[#03254C] border-l-4 border-[#F97316] font-extrabold shadow-2xs"
                        : "text-slate-600 hover:bg-slate-50 hover:text-[#03254C]"
                    }`}
                  >
                    <span className="truncate pr-2">{sub.name}</span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                        isSubActive ? "text-[#F97316] translate-x-0.5" : "text-slate-300 group-hover:text-slate-500"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Main Content Area (9 Cols) */}
          <div className="lg:col-span-9 space-y-6">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${activeSubIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* --- 4. SELECTED SERVICE OVERVIEW --- */}
                <div className="bg-white border border-slate-200/80 rounded-xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#03254C] via-[#F97316] to-[#1F8A4D]" />
                  
                  <div className="space-y-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] text-[10px] font-extrabold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      Featured Solution
                    </span>
                    
                    <h2 className="text-xl sm:text-2xl lg:text-[32px] font-black text-[#03254C] tracking-tight leading-tight">
                      {activeService.title}
                    </h2>
                    
                    <p className="text-xs sm:text-sm font-semibold text-[#F97316]">
                      {activeService.tagline}
                    </p>
                    
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
                      {activeService.description}
                    </p>
                  </div>
                </div>

                {/* --- 5. KEY BENEFITS & 6. BEST SUITED FOR (2-Column Grid) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Key Benefits Card */}
                  <div className="bg-white border border-slate-200/80 rounded-xl p-6 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                        <ShieldCheck className="w-4 h-4 text-[#1F8A4D]" />
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#03254C]">
                          Key Benefits
                        </h3>
                      </div>
                      
                      <div className="space-y-3.5">
                        {activeService.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#1F8A4D] shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-xs font-bold text-[#03254C]">{benefit.title}</h4>
                              <p className="text-[11px] text-slate-600 leading-normal">{benefit.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Best Suited For Card */}
                  <div className="bg-white border border-slate-200/80 rounded-xl p-6 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                        <Target className="w-4 h-4 text-[#F97316]" />
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#03254C]">
                          Best Suited For
                        </h3>
                      </div>
                      
                      <p className="text-[11px] text-slate-500 mb-4 font-medium">
                        Tailored specifically for entities and professionals looking to optimize this domain:
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {activeService.suitedFor.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#03254C] hover:text-white text-slate-700 text-xs font-bold transition-all duration-200 cursor-default border border-slate-200/60"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- 7. WHAT AARAMBGROW DOES (Process Steps) --- */}
                <div className="bg-white border border-slate-200/80 rounded-xl p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-100">
                    <FileText className="w-4 h-4 text-[#03254C]" />
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#03254C]">
                      How AarambhGrow Supports You
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activeService.steps.map((step, i) => (
                      <div
                        key={i}
                        className="bg-slate-50 border border-slate-200/60 rounded-lg p-4 space-y-2 hover:border-[#F97316] transition-colors duration-200"
                      >
                        <span className="text-[10px] font-black px-2 py-0.5 rounded bg-[#03254C] text-white">
                          {step.num}
                        </span>
                        <h4 className="text-xs font-bold text-[#03254C] pt-1">{step.title}</h4>
                        <p className="text-[11px] text-slate-600 leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}