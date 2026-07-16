/* ============================================================
   COMPONO COMPETITOR INTELLIGENCE — DATA FILE
   This is the ONLY file the monthly Claude refresh rewrites.
   Last full refresh: baseline build, June 2026.
   Pricing and headcount figures are approximate — verify on
   first monthly refresh cycle.
   ============================================================ */

const LAST_UPDATED = "16 July 2026 (hub v2 - quick take and landmine questions added for every competitor; battle card copy button, upgraded hero, category-coloured pages and print styles)";

const CATEGORIES = {
  hire:    { label: "Hire",    desc: "Pure ATS players. Compono Hire wins on native behavioural insight - most of these are process-only." },
  engage:  { label: "Engage",  desc: "Culture, engagement, personality and behavioural assessment tools. Compono Engage explains how people work, not just how they feel." },
  develop: { label: "Develop", desc: "LMS and capability platforms. Compono Develop tracks what people need, not what they completed." },
  hris:    { label: "HRIS",    desc: "Full-suite platforms that bleed into Hire, Engage or Develop territory. Broad but shallow - they do everything, master nothing." }
};

const COMPETITORS = [

/* ============ HIRE - PURE ATS ============ */
{
  id: "workable",
  name: "Workable",
  domain: "workable.com",
  category: "hire",
  assessment: { level: "Basic", detail: "Offers cognitive and personality 'Workable Assessments' as an add-on, plus third-party integrations. Generic off-the-shelf tests, not a validated behavioural matching model tied to role or team fit." },
  snapshot: { hq: "Boston, USA (founded Greece)", founded: "2012", funding: "VC-backed, ~US$84M raised", headcount: "~400", anz: "Sells into ANZ, no local office or local support presence" },
  targetMarket: "SMB to mid-market, global, horizontal across industries",
  summary: "High-volume global ATS focused on sourcing reach and speed. Strong job board distribution and an AI sourcing layer.",
  pricing: "Per-job and per-employee tiers. Starter from ~US$169/mo, Standard and Premier tiers scale with headcount. Assessments and texting are paid add-ons.",
  features: ["200+ job board distribution", "AI candidate sourcing and screening", "Interview self-scheduling", "Offer letters and e-signature", "Basic onboarding", "Assessment add-ons", "Mobile app"],
  integrations: ["Seek", "LinkedIn", "Indeed", "Google and Microsoft calendars", "DocuSign", "Slack", "Zapier", "BambooHR"],
  fabTheirs: { features: "Sourcing reach, AI screening, fast setup", advantages: "Get roles live everywhere quickly with minimal admin", benefits: "Fill roles faster with less manual effort" },
  fabOurs: { features: "ATS with native, validated work personality matching against role and team", advantages: "Speed AND fit in one workflow - no bolt-ons, no generic tests", benefits: "Fewer bad hires and decisions you can defend to executives and boards" },
  wins: ["No native behavioural science - assessments are generic add-ons with no team-fit model", "No ANZ presence or local support", "Speed-first positioning leaves people insight risk completely unaddressed", "Per-job pricing gets expensive at volume"],
  losses: ["Stronger global job board distribution out of the box", "Bigger brand recognition with offshore-headquartered prospects", "Cheaper entry point for very small teams"],
  battlecard: "Workable is built to fill seats fast - and it does that well. But speed is only half the problem. It has no native behavioural layer, so every shortlist is a process decision, not a people decision. When a prospect names Workable, agree on the efficiency, then ask: 'When the role is filled, how confident are you the person will actually fit the team?' That is the gap Compono Hire closes - matching for skills AND fit in the same workflow, with science you can defend.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "yes", us: "yes" }, { label: "Requisition and approval workflow", them: "yes", us: "no" }, { label: "Multi-board posting and distribution", them: "yes", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "yes", us: "yes" }, { label: "SMS / text candidate messaging", them: "yes", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "yes", us: "yes" }, { label: "Interview scheduling built in", them: "yes", us: "yes" }, { label: "Structured interview scorecards", them: "yes", us: "no" }, { label: "Reference checking", them: "partial", us: "no" }, { label: "Offer management and e-signature", them: "yes", us: "no" }, { label: "Post-offer onboarding", them: "yes", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "yes", us: "partial" }, { label: "HRIS and API integrations", them: "yes", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Culture fit benchmark on a role", them: "no", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "no", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "no", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Fill roles fast with wide job board reach and AI sourcing.",
    ourAngle: "Speed is half the problem. We match for skills AND fit in one workflow, with science you can defend.",
    watchOut: "Cheaper entry point and stronger global distribution - do not fight them on sourcing reach."
  },
  landmines: [
    "When the role is filled, how confident are you the person will actually fit the team?",
    "What objective data sits behind the shortlist - or is it still CV screening at speed?",
    "If a hire fails at six months, what in Workable would have predicted it?"
  ],
  social: "Large global following, high content volume - mostly SEO/recruiting how-to content. Verify current numbers on refresh.",
  recentActivity: []
}
,
{
  id: "jobadder",
  name: "JobAdder",
  domain: "jobadder.com",
  category: "hire",
  assessment: { level: "None", detail: "No native assessment capability. Relies entirely on marketplace integrations for any testing." },
  snapshot: { hq: "Sydney, Australia", founded: "2007", funding: "Private, bootstrapped then PE investment", headcount: "~200", anz: "Strong - ANZ heartland, local support" },
  targetMarket: "Recruitment agencies first, plus in-house teams. SMB to mid-market, strong ANZ base",
  summary: "ANZ-born recruitment platform with agency DNA - built for recruiters managing high requisition volume, expanded into in-house talent teams.",
  pricing: "Per user per month, quote-based. Typically mid-range for ANZ market. Add-ons for premium job boards and integrations.",
  features: ["Agency-grade requisition management", "Strong Seek and ANZ job board integrations", "Candidate database and talent pools", "Placement and temp workflows", "Recruitment CRM", "Marketplace of integrations"],
  integrations: ["Seek", "LinkedIn", "Indeed", "Broadbean (multiposting)", "Xero and MYOB", "Google and Microsoft 365", "Zapier"],
  fabTheirs: { features: "Agency-grade workflows, deep ANZ job board coverage", advantages: "Built for how ANZ recruiters actually work", benefits: "Local fit and recruiter productivity" },
  fabOurs: { features: "Hiring platform with built-in behavioural matching and organisational psychology foundation", advantages: "Designed for hiring decisions, not just recruitment administration", benefits: "Quality of hire improves, not just speed of placement" },
  wins: ["Zero people insight - purely a process and pipeline tool", "Agency DNA means in-house culture/fit use cases are an afterthought", "No engagement or development story - single product vs platform"],
  losses: ["Very strong ANZ brand and recruiter loyalty", "Deeper agency/temp workflows if prospect runs blended models", "Local incumbency - often already embedded"],
  battlecard: "JobAdder is a strong ANZ recruitment workflow tool with genuine local credibility - do not attack the brand. Reframe the category instead: JobAdder manages the recruitment process; Compono manages the hiring decision. Ask what happens after the shortlist - how do they know who will actually succeed in the team? JobAdder has no answer to that question. We do, natively.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "yes", us: "yes" }, { label: "Requisition and approval workflow", them: "yes", us: "no" }, { label: "Multi-board posting and distribution", them: "yes", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "yes", us: "yes" }, { label: "SMS / text candidate messaging", them: "yes", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "yes", us: "yes" }, { label: "Interview scheduling built in", them: "yes", us: "yes" }, { label: "Structured interview scorecards", them: "partial", us: "no" }, { label: "Reference checking", them: "partial", us: "no" }, { label: "Offer management and e-signature", them: "yes", us: "no" }, { label: "Post-offer onboarding", them: "yes", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "yes", us: "partial" }, { label: "HRIS and API integrations", them: "yes", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Culture fit benchmark on a role", them: "no", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "no", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "no", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "ANZ-built recruitment workflow with strong local credibility and agency-grade pipeline tools.",
    ourAngle: "JobAdder manages the recruitment process. Compono manages the hiring decision - natively.",
    watchOut: "Strong local brand loyalty and often already embedded. Reframe the category, never attack the brand."
  },
  landmines: [
    "After the shortlist, how do you know who will actually succeed in the team?",
    "What does JobAdder tell you about a candidate beyond their CV and your pipeline notes?",
    "How do you defend a hiring decision to your executive team - process followed, or evidence gathered?"
  ],
  social: "Solid ANZ LinkedIn presence, regular recruiter-focused content. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "teamtailor",
  name: "Teamtailor",
  domain: "teamtailor.com",
  category: "hire",
  assessment: { level: "Basic", detail: "Partner integrations (e.g. Alva Labs, Thomas) for assessments. Nothing native - candidate experience is the product, not people science." },
  snapshot: { hq: "Stockholm, Sweden", founded: "2013", funding: "Private, profitable, minimal external funding", headcount: "~500", anz: "Growing ANZ push with local team presence" },
  targetMarket: "SMB to mid-market, employer-brand-conscious companies",
  summary: "Employer branding ATS - career site builder plus ATS in one. Wins on candidate experience, design polish and ease of use. Increasingly visible in ANZ deals.",
  pricing: "Per company size, all-inclusive flat model (no per-user fees) - a genuine differentiator they lead with. Quote-based.",
  features: ["Drag-and-drop career site builder", "Modern, candidate-first application flow", "Automation triggers", "Nurture campaigns", "Analytics", "Unlimited users on flat pricing", "Connect (assessment partner marketplace)"],
  integrations: ["Seek", "LinkedIn", "Indeed", "Slack", "Google and Microsoft calendars", "Assessment partners (Alva Labs, Thomas)", "Zapier"],
  fabTheirs: { features: "Career site plus ATS, unlimited users, beautiful UX", advantages: "Employer brand and hiring in one tool everyone can use", benefits: "Better candidate experience, more applicants, simple pricing" },
  fabOurs: { features: "Hiring platform with validated work personality and team-fit matching built in", advantages: "We optimise who you hire, not just how it looks while you hire them", benefits: "Candidate experience AND selection quality - both, not either/or" },
  wins: ["All experience, no insight - polished front door with nothing behind it on selection science", "Assessment story is entirely third-party partners (extra cost, broken workflow)", "Brand-led positioning struggles when prospect's pain is quality of hire, not volume of applicants"],
  losses: ["Genuinely excellent UX and career site builder - design-led buyers love it", "Flat all-inclusive pricing is easy to buy", "Strong momentum and word of mouth in ANZ right now"],
  battlecard: "Teamtailor turns the top of funnel beautiful - and if a prospect's only problem is attracting candidates, it is a credible tool. But attraction is not selection. Ask: 'Once those well-nurtured candidates apply, how does Teamtailor tell you which one will succeed in your team?' It does not - it hands you off to a third-party assessment partner at extra cost. Compono answers that question natively. Both attraction AND selection insight.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "yes", us: "yes" }, { label: "Requisition and approval workflow", them: "yes", us: "no" }, { label: "Multi-board posting and distribution", them: "yes", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "yes", us: "yes" }, { label: "SMS / text candidate messaging", them: "yes", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "yes", us: "yes" }, { label: "Interview scheduling built in", them: "yes", us: "yes" }, { label: "Structured interview scorecards", them: "yes", us: "no" }, { label: "Reference checking", them: "partial", us: "no" }, { label: "Offer management and e-signature", them: "yes", us: "no" }, { label: "Post-offer onboarding", them: "yes", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "yes", us: "partial" }, { label: "HRIS and API integrations", them: "yes", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Culture fit benchmark on a role", them: "no", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "no", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "no", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Employer branding and ATS in one - a beautiful front door for candidates.",
    ourAngle: "Attraction is not selection. We answer the question their partners charge extra for - who will succeed here.",
    watchOut: "Genuinely excellent UX with strong ANZ momentum. Design-led buyers love it."
  },
  landmines: [
    "Once those well-nurtured candidates apply, how does Teamtailor tell you which one will succeed in your team?",
    "What does the third-party assessment partner add to your cost and your workflow?",
    "Is your problem attracting candidates, or picking the right one? Which does Teamtailor solve?"
  ],
  social: "Very active, design-forward LinkedIn and content presence. Strong employer brand voice. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "lever",
  name: "Lever",
  domain: "lever.co",
  category: "hire",
  assessment: { level: "None", detail: "No native assessments - integration partners only. Positioning is CRM-style talent relationship management." },
  snapshot: { hq: "San Francisco, USA (acquired by Employ Inc.)", founded: "2012", funding: "Acquired by Employ (PE-backed) in 2022", headcount: "Part of Employ group", anz: "Sells remotely, no local presence" },
  targetMarket: "Mid-market to enterprise, tech-heavy, US-centric",
  summary: "Talent acquisition suite combining ATS and CRM - built around proactive sourcing and nurture for competitive talent markets.",
  pricing: "Quote-based annual contracts, generally premium mid-market pricing. Modules for CRM, analytics and automation.",
  features: ["ATS + CRM in one (LeverTRM)", "Nurture campaigns", "Advanced analytics", "Automation workflows", "DEI reporting", "Interview scheduling"],
  integrations: ["LinkedIn", "Indeed", "DocuSign", "Workday and HRIS connectors", "Slack", "Google Workspace", "Zoom"],
  fabTheirs: { features: "Combined ATS/CRM with nurture and analytics", advantages: "Build pipelines proactively rather than post-and-pray", benefits: "Win competitive talent before competitors do" },
  fabOurs: { features: "Hiring with native behavioural matching and organisational psychology", advantages: "Insight into fit, not just relationship tracking", benefits: "Hire people who stay and perform, not just people you courted well" },
  wins: ["No people science at all - relationships are tracked, fit is guessed", "US-centric, weak ANZ support and localisation (Seek etc.)", "Post-acquisition product investment questions linger"],
  losses: ["Stronger sourcing/CRM motion for proactive enterprise talent teams", "Deeper analytics out of the box", "Recognised name with US-aligned buyers"],
  battlecard: "Lever's pitch is relationship-led hiring - know your candidates before you need them. Reasonable. But knowing someone's email cadence history is not knowing whether they will succeed in the role. Lever tracks the courtship; it cannot assess the marriage. Compono assesses fit with validated science before the offer goes out. In ANZ specifically, also probe local support and Seek integration depth - we are standard, they are not local.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "yes", us: "yes" }, { label: "Requisition and approval workflow", them: "yes", us: "no" }, { label: "Multi-board posting and distribution", them: "yes", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "yes", us: "yes" }, { label: "SMS / text candidate messaging", them: "yes", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "yes", us: "yes" }, { label: "Interview scheduling built in", them: "yes", us: "yes" }, { label: "Structured interview scorecards", them: "partial", us: "no" }, { label: "Reference checking", them: "partial", us: "no" }, { label: "Offer management and e-signature", them: "partial", us: "no" }, { label: "Post-offer onboarding", them: "partial", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "yes", us: "partial" }, { label: "HRIS and API integrations", them: "yes", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Culture fit benchmark on a role", them: "no", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "no", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "no", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Proactive sourcing and CRM - build talent pipelines before you need them.",
    ourAngle: "Lever tracks the courtship. Compono assesses the marriage - validated fit before the offer goes out.",
    watchOut: "Stronger sourcing and CRM motion for proactive enterprise talent teams."
  },
  landmines: [
    "Knowing a candidate's engagement history is useful - but what tells you they will succeed in the role?",
    "How deep is Lever's ANZ support and Seek integration compared to what you need locally?",
    "When the pipeline delivers three finalists, what objective data separates them?"
  ],
  social: "Moderate activity, folded increasingly into Employ group messaging. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "greenhouse",
  name: "Greenhouse",
  domain: "greenhouse.com",
  category: "hire",
  assessment: { level: "Basic", detail: "Structured interview kits and scorecards (process rigour, not psychometric science) plus a large partner marketplace for actual assessments." },
  snapshot: { hq: "New York, USA", founded: "2012", funding: "PE-owned (TPG majority)", headcount: "~800", anz: "Sells into ANZ enterprise, limited local footprint" },
  targetMarket: "Mid-market to enterprise, strong in tech",
  summary: "The structured hiring ATS - scorecards, interview kits and process discipline. The enterprise benchmark for hiring process rigour.",
  pricing: "Premium quote-based annual contracts, typically the most expensive pure ATS in a deal. Tiered Essential/Advanced/Expert.",
  features: ["Structured interview kits and scorecards", "Deep reporting", "500+ integration marketplace", "DEI tooling", "CRM and events", "Onboarding module"],
  integrations: ["LinkedIn", "Indeed", "Seek", "DocuSign", "Workday and HRIS connectors", "Zoom", "Slack", "500+ partner marketplace (incl. assessments)"],
  fabTheirs: { features: "Structured hiring methodology embedded in software", advantages: "Consistent, defensible, bias-reduced process at scale", benefits: "Better decisions through process discipline" },
  fabOurs: { features: "Structured process AND validated behavioural data on every candidate", advantages: "Scorecards capture opinions - we add science. Interviewer ratings plus actual work personality fit", benefits: "Defensible decisions built on data, not just well-organised gut feel" },
  wins: ["Scorecards structure human opinion - they do not add objective people data. Process rigour without insight", "Premium pricing - often double alternatives", "Heavy implementation; mid-market teams drown in its complexity"],
  losses: ["Enterprise credibility and brand gravity - 'nobody got fired for buying Greenhouse'", "Deepest integration marketplace in the category", "Genuine thought leadership position on structured hiring"],
  battlecard: "Respect Greenhouse - they taught the market that hiring needs structure. Then extend the argument: structure organises opinions, it does not improve the underlying data. Ten interviewers with beautiful scorecards are still ten gut feels. Compono adds what the scorecard cannot - validated behavioural measurement of fit to role and team. Structure AND science. For mid-market prospects, also press total cost and implementation weight.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "yes", us: "yes" }, { label: "Requisition and approval workflow", them: "yes", us: "no" }, { label: "Multi-board posting and distribution", them: "yes", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "yes", us: "yes" }, { label: "SMS / text candidate messaging", them: "partial", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "yes", us: "yes" }, { label: "Interview scheduling built in", them: "yes", us: "yes" }, { label: "Structured interview scorecards", them: "yes", us: "no" }, { label: "Reference checking", them: "partial", us: "no" }, { label: "Offer management and e-signature", them: "yes", us: "no" }, { label: "Post-offer onboarding", them: "yes", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "yes", us: "partial" }, { label: "HRIS and API integrations", them: "yes", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Culture fit benchmark on a role", them: "no", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "no", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "no", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Structured hiring at scale - scorecards, interview kits and process discipline.",
    ourAngle: "Structure organises opinions. It does not improve the data. We add validated behavioural measurement to the process.",
    watchOut: "Enterprise brand gravity and the deepest integration marketplace in the category. Premium price is our friend in mid-market."
  },
  landmines: [
    "Ten interviewers with beautiful scorecards are still ten gut feels - what objective data joins them?",
    "What is the all-in cost and implementation timeline compared to the value your team will actually use?",
    "Your process is consistent - but what tells you the candidate fits this team, not just the process?"
  ],
  social: "High-volume thought leadership engine, strong brand. Verify on refresh.",
  recentActivity: [
    { date: "May 2026", note: "Acquired Ezra AI Labs, a voice AI interviewer, extending AI screening to the top of its funnel. Expect Greenhouse deals to lean harder on AI interviewing." }
  ]
}
,
{
  id: "smartrecruiters",
  name: "SmartRecruiters",
  domain: "smartrecruiters.com",
  category: "hire",
  assessment: { level: "Basic", detail: "Native screening questions and an assessment partner marketplace. No proprietary behavioural science." },
  snapshot: { hq: "San Francisco, USA", founded: "2010", funding: "Acquired by SAP in 2025 (~US$1.5B); being integrated into SAP SuccessFactors, kept available standalone", headcount: "~600", anz: "Enterprise deals only, minimal local presence" },
  targetMarket: "Enterprise and large mid-market, global, high-volume hiring",
  summary: "Enterprise 'hiring success' platform - high-volume requisition management, marketplace ecosystem, positioned as the modern Taleo replacement. Acquired by SAP in 2025 and being integrated into SAP SuccessFactors.",
  pricing: "Enterprise quote-based, priced per employee. Significant annual commitments.",
  features: ["Enterprise requisition workflows", "Marketplace ecosystem", "CRM and sourcing", "AI matching (Winston)", "Global compliance", "Hiring budget management"],
  integrations: ["LinkedIn", "Indeed", "Seek", "DocuSign", "Workday and HRIS connectors", "Microsoft 365", "Large partner marketplace"],
  fabTheirs: { features: "Enterprise-grade hiring infrastructure with AI matching", advantages: "Run global, high-volume hiring on one platform", benefits: "Hiring operations at enterprise scale" },
  fabOurs: { features: "People-science-led hiring built for mid-market reality", advantages: "Right-sized platform with insight depth enterprise suites lack", benefits: "Quality of hire without enterprise overhead" },
  wins: ["AI matching is keyword/CV pattern matching - not validated behavioural science", "Built for enterprise scale; mid-market prospects pay for complexity they will not use", "Weak ANZ presence and support"],
  losses: ["Genuine enterprise scalability and global compliance depth", "Large marketplace ecosystem", "Strong fit for 5,000+ employee organisations - usually out of our sweet spot anyway"],
  battlecard: "SmartRecruiters rarely contests our core mid-market deals - when it does, the prospect is usually over-buying. The honest line: SmartRecruiters is hiring infrastructure for global enterprises; Compono is hiring intelligence for organisations that feel every single hire. Ask how many of its enterprise modules they would actually use, then contrast implementation timelines and the complete absence of validated people science under its AI matching.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "yes", us: "yes" }, { label: "Requisition and approval workflow", them: "yes", us: "no" }, { label: "Multi-board posting and distribution", them: "yes", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "yes", us: "yes" }, { label: "SMS / text candidate messaging", them: "yes", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "yes", us: "yes" }, { label: "Interview scheduling built in", them: "yes", us: "yes" }, { label: "Structured interview scorecards", them: "yes", us: "no" }, { label: "Reference checking", them: "partial", us: "no" }, { label: "Offer management and e-signature", them: "yes", us: "no" }, { label: "Post-offer onboarding", them: "yes", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "yes", us: "partial" }, { label: "HRIS and API integrations", them: "yes", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Culture fit benchmark on a role", them: "no", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "no", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "no", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Enterprise hiring infrastructure at global scale, now inside SAP SuccessFactors.",
    ourAngle: "They sell hiring infrastructure for enterprises. We sell hiring intelligence for organisations that feel every hire.",
    watchOut: "Genuine enterprise scale - but a mid-market prospect choosing it is usually over-buying."
  },
  landmines: [
    "How many of the enterprise modules would your team actually use in year one?",
    "What does the SAP integration roadmap mean for the product you are buying today?",
    "Under the AI matching, what validated people science is actually there?"
  ],
  social: "Active enterprise-focused content, conference-heavy. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "recruitee",
  name: "Recruitee",
  domain: "recruitee.com",
  category: "hire",
  assessment: { level: "None", detail: "No native assessments - integration partners only." },
  snapshot: { hq: "Amsterdam, Netherlands (Tellent group)", founded: "2015", funding: "Merged into Tellent (with Javelo, KiwiHR)", headcount: "~250 (group)", anz: "No local presence" },
  targetMarket: "SMB to lower mid-market, Europe-centric",
  summary: "Collaborative hiring ATS for SMBs - clean UX, easy adoption, priced to land. Part of the Tellent HR group.",
  pricing: "Transparent tiered per-job pricing, entry from ~€199/mo region. One of the cheaper credible options.",
  features: ["Collaborative pipelines", "Career site builder", "Multi-poster job distribution", "Automation", "Referrals", "Basic reporting"],
  integrations: ["LinkedIn", "Indeed", "Slack", "Google and Microsoft calendars", "BambooHR", "Zapier"],
  fabTheirs: { features: "Simple collaborative ATS the whole team can use", advantages: "Low cost, fast adoption, no training needed", benefits: "Hiring organised without enterprise overhead" },
  fabOurs: { features: "Approachable platform with serious people science underneath", advantages: "Easy to use AND substantive on selection quality", benefits: "Simplicity without sacrificing decision quality" },
  wins: ["Pure process organisation - zero selection insight", "Europe-first; ANZ job boards and support are weak", "Low price reflects low depth - easy to outgrow"],
  losses: ["Cheaper entry point for cost-driven small buyers", "Very low-friction adoption"],
  battlecard: "Recruitee competes on price and simplicity. Do not race to the bottom - reframe value: an ATS that organises bad decisions efficiently still produces bad hires. One mis-hire costs more than years of platform price difference. If the prospect is purely cost-driven and tiny, they may genuinely be a Recruitee customer today and a Compono customer in two years - qualify hard.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "yes", us: "yes" }, { label: "Requisition and approval workflow", them: "yes", us: "no" }, { label: "Multi-board posting and distribution", them: "yes", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "yes", us: "yes" }, { label: "SMS / text candidate messaging", them: "partial", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "yes", us: "yes" }, { label: "Interview scheduling built in", them: "yes", us: "yes" }, { label: "Structured interview scorecards", them: "partial", us: "no" }, { label: "Reference checking", them: "partial", us: "no" }, { label: "Offer management and e-signature", them: "yes", us: "no" }, { label: "Post-offer onboarding", them: "yes", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "yes", us: "partial" }, { label: "HRIS and API integrations", them: "yes", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Culture fit benchmark on a role", them: "no", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "no", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "no", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Cheap, collaborative SMB hiring that anyone can adopt without training.",
    ourAngle: "An ATS that organises bad decisions efficiently still produces bad hires. One mis-hire outweighs years of price difference.",
    watchOut: "Cheaper entry point wins with cost-driven small buyers. Qualify hard before competing."
  },
  landmines: [
    "What does one failed hire cost you compared to the software saving?",
    "What in Recruitee tells you a candidate suits your team, not just your pipeline stage?",
    "How well do its Europe-first job boards and support hours serve an ANZ team?"
  ],
  social: "Moderate, European SMB-focused content. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "breezy",
  name: "Breezy HR",
  domain: "breezy.hr",
  category: "hire",
  assessment: { level: "None", detail: "No native assessment science - questionnaires and third-party integrations only." },
  snapshot: { hq: "Jacksonville, USA (LearnUpon group)", founded: "2014", funding: "Acquired by LearnUpon 2021", headcount: "Part of group", anz: "No local presence" },
  targetMarket: "Small business, budget-conscious",
  summary: "Entry-level SMB ATS with a free tier - drag-and-drop pipelines, simple automation. Volume small-business play.",
  pricing: "Freemium. Free 'Bootstrap' tier, paid tiers from ~US$157/mo. Self-serve.",
  features: ["Drag-and-drop pipeline", "Free tier", "Job board posting", "Candidate questionnaires", "Scheduling", "Basic video interviews"],
  integrations: ["LinkedIn", "Indeed", "ZipRecruiter", "Google and Microsoft calendars", "Slack", "BambooHR", "Zapier"],
  fabTheirs: { features: "Free-to-start, dead simple ATS", advantages: "Zero barrier to organising hiring", benefits: "Stop running hiring from a spreadsheet today" },
  fabOurs: { features: "Hiring platform with behavioural matching for organisations where every hire matters", advantages: "Built for decision quality, not just pipeline tidiness", benefits: "Hires that perform, not just a tidier inbox" },
  wins: ["No science, no insight, no ANZ presence - a spreadsheet replacement", "Free-tier economics mean minimal product depth and support"],
  losses: ["Free is free - unbeatable for the smallest buyers", "Rarely a real competitor in our qualified deals"],
  battlecard: "If Breezy is the genuine alternative, question whether the prospect is qualified - they are likely too small or too early. If they are qualified and anchoring on Breezy's price, the conversation is about the cost of a bad hire vs the cost of software. One mis-hire at $60k+ salary dwarfs any subscription delta.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "yes", us: "yes" }, { label: "Requisition and approval workflow", them: "partial", us: "no" }, { label: "Multi-board posting and distribution", them: "yes", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "yes", us: "yes" }, { label: "SMS / text candidate messaging", them: "yes", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "yes", us: "yes" }, { label: "Interview scheduling built in", them: "yes", us: "yes" }, { label: "Structured interview scorecards", them: "yes", us: "no" }, { label: "Reference checking", them: "partial", us: "no" }, { label: "Offer management and e-signature", them: "yes", us: "no" }, { label: "Post-offer onboarding", them: "partial", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "yes", us: "partial" }, { label: "HRIS and API integrations", them: "yes", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Culture fit benchmark on a role", them: "no", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "no", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "no", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Free-to-start SMB hiring with drag-and-drop pipelines.",
    ourAngle: "If Breezy is the real alternative, check the prospect is qualified. If they are, the argument is the cost of a bad hire.",
    watchOut: "Free is free. Rarely a real competitor in qualified deals."
  },
  landmines: [
    "A mis-hire on a 60k salary costs far more than any software - what protects you from that?",
    "What happens when you outgrow a free tool - what does the migration cost?",
    "What does Breezy tell you about a candidate that their CV does not?"
  ],
  social: "Light presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "zoho-recruit",
  name: "Zoho Recruit",
  domain: "zoho.com",
  category: "hire",
  assessment: { level: "Basic", detail: "Basic pre-screening and assessment add-ons within the Zoho ecosystem. Generic, not behavioural science." },
  snapshot: { hq: "Chennai, India", founded: "2009 (Recruit product)", funding: "Private, profitable (Zoho Corp)", headcount: "Zoho Corp 15,000+", anz: "Sells globally, ecosystem-led" },
  targetMarket: "SMBs already inside the Zoho ecosystem; agencies on a budget",
  summary: "The ATS module of the sprawling Zoho suite. Wins on price and ecosystem bundling, not on hiring depth.",
  pricing: "Aggressively cheap - from ~US$25/user/mo. Bundled into Zoho One.",
  features: ["ATS + recruitment CRM", "Zoho ecosystem integration", "Resume parsing", "Job board posting", "Workflow automation", "Client portals (agency)"],
  integrations: ["Zoho suite (native)", "LinkedIn", "Indeed", "Google Workspace", "Microsoft 365", "Zapier"],
  fabTheirs: { features: "Full ATS at a fraction of competitor cost, inside your existing Zoho stack", advantages: "One vendor, one bill, everything connected", benefits: "Hiring covered without a new budget line" },
  fabOurs: { features: "Purpose-built hiring intelligence vs a suite checkbox module", advantages: "Hiring is our entire platform thesis, not module #43", benefits: "Selection quality a generalist suite cannot reach" },
  wins: ["Suite-module depth problem - hiring is a checkbox feature, not a competency", "No behavioural science whatsoever", "Support and localisation gaps in ANZ"],
  losses: ["Price is nearly impossible to match", "Ecosystem lock-in is real if they run Zoho everywhere"],
  battlecard: "Zoho Recruit wins on invoice line, never on capability. Concede the price openly - then ask what a suite vendor's 43rd module can know about predicting human performance in their team. The honest framing: Zoho organises recruitment data cheaply; Compono improves hiring decisions. Different categories. If price is the only axis, qualify out gracefully.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "yes", us: "yes" }, { label: "Requisition and approval workflow", them: "yes", us: "no" }, { label: "Multi-board posting and distribution", them: "yes", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "yes", us: "yes" }, { label: "SMS / text candidate messaging", them: "partial", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "yes", us: "yes" }, { label: "Interview scheduling built in", them: "yes", us: "yes" }, { label: "Structured interview scorecards", them: "partial", us: "no" }, { label: "Reference checking", them: "partial", us: "no" }, { label: "Offer management and e-signature", them: "yes", us: "no" }, { label: "Post-offer onboarding", them: "yes", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "yes", us: "partial" }, { label: "HRIS and API integrations", them: "yes", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Culture fit benchmark on a role", them: "no", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "no", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "no", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "The cheapest path - hiring bundled into the Zoho suite on one bill.",
    ourAngle: "Zoho organises recruitment data cheaply. Compono improves hiring decisions. Different categories.",
    watchOut: "The price is nearly impossible to match, and Zoho ecosystem lock-in is real."
  },
  landmines: [
    "What can a suite vendor's 43rd module know about predicting human performance in your team?",
    "When you need local support fast, what does Zoho's ANZ coverage look like?",
    "Is the goal cheaper admin, or better hires? Which are you buying?"
  ],
  social: "Large Zoho-corp-level presence, product-line content thin. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "expr3ss",
  name: "Expr3ss!",
  domain: "expr3ss.com",
  category: "hire",
  assessment: { level: "Native", detail: "Has its own predictive hiring/psych profiling angle ('Spot On' matching). Closest local philosophical competitor - but proprietary black-box approach with thinner published validation than Compono's organisational psychology foundation." },
  snapshot: { hq: "Australia", founded: "2004", funding: "Private", headcount: "Small (<50)", anz: "ANZ native - this is their entire market" },
  targetMarket: "ANZ SMB to mid-market, high-turnover industries (retail, hospitality, care)",
  summary: "Australian predictive hiring tool - matches candidates on attitude/psych fit for high-volume frontline roles. The most direct local 'fit-based hiring' competitor.",
  pricing: "Quote-based, typically positioned as affordable for volume hiring. Verify current model on refresh.",
  features: ["Predictive 'Spot On' candidate matching", "High-volume screening", "Psych-style profiling", "ANZ job board coverage", "Frontline/volume hiring focus"],
  integrations: ["Seek", "HRIS and payroll connectors", "Single sign-on", "Reference-check partners"],
  fabTheirs: { features: "Predictive matching tuned for high-volume frontline hiring", advantages: "Cut screening time dramatically for turnover-heavy roles", benefits: "Faster volume hiring with better retention" },
  fabOurs: { features: "Validated work personality science across hiring, engagement AND development", advantages: "Transparent, published organisational psychology vs proprietary black box - and insight that persists beyond the hire", benefits: "Fit data that keeps working after day one, across the whole employee lifecycle" },
  wins: ["Black-box matching vs our transparent validated model - 'defensible to boards' matters", "Hire-only - no engagement or development continuation of the data", "Frontline/volume niche; weaker for professional and knowledge roles", "Dated platform experience"],
  losses: ["Long-standing ANZ relationships in retail/hospitality/care verticals", "Sharper pricing for pure volume use cases", "Local incumbent familiarity"],
  battlecard: "Expr3ss! validates our category - they prove ANZ buyers want fit-based hiring. The differentiation is depth and continuity: their matching is a proprietary black box scoped to the hire moment; Compono's work personality science is transparent, validated, and flows into engagement and development after the hire. Ask: 'What happens to that fit data on day two?' With Expr3ss! it dies. With Compono it becomes how you manage, engage and grow the person.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "yes", us: "yes" }, { label: "Requisition and approval workflow", them: "yes", us: "no" }, { label: "Multi-board posting and distribution", them: "yes", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "partial", us: "yes" }, { label: "SMS / text candidate messaging", them: "partial", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "yes", us: "yes" }, { label: "Interview scheduling built in", them: "yes", us: "yes" }, { label: "Structured interview scorecards", them: "partial", us: "no" }, { label: "Reference checking", them: "partial", us: "no" }, { label: "Offer management and e-signature", them: "yes", us: "no" }, { label: "Post-offer onboarding", them: "yes", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "yes", us: "partial" }, { label: "HRIS and API integrations", them: "partial", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "partial", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "partial", us: "yes" }, { label: "Culture fit benchmark on a role", them: "partial", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "partial", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "partial", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Australian predictive hiring - match on attitude and fit for high-volume frontline roles.",
    ourAngle: "Their matching is a black box scoped to the hire. Ours is transparent, validated, and lives on into engagement and development.",
    watchOut: "Long ANZ relationships in retail, hospitality and care, with sharp pricing for pure volume."
  },
  landmines: [
    "What happens to that fit data on day two - does it help you manage and grow the person?",
    "Can you explain to a board exactly how the matching model reaches its decision?",
    "How does it perform outside frontline roles - professional and knowledge positions?"
  ],
  social: "Light. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "pageup",
  name: "PageUp",
  domain: "pageuppeople.com",
  category: "hire",
  assessment: { level: "Basic", detail: "Partner-led assessments. Core strength is enterprise talent workflow, not people science." },
  snapshot: { hq: "Melbourne, Australia", founded: "1997", funding: "PE-owned (Battery Ventures)", headcount: "~400", anz: "Strong ANZ enterprise base, especially government, higher ed, healthcare" },
  targetMarket: "ANZ enterprise and large mid-market - government, universities, health",
  summary: "Melbourne-born enterprise talent management suite - recruitment plus onboarding, performance and learning modules. Deeply embedded in ANZ public sector and higher ed.",
  pricing: "Enterprise quote-based annual contracts, premium tier locally.",
  features: ["Enterprise recruitment workflows", "Onboarding", "Performance module", "Learning module", "Strong ANZ compliance", "Public sector depth"],
  integrations: ["Seek", "LinkedIn", "Indeed", "Broadbean", "SAP and Workday HRIS", "DocuSign", "Single sign-on"],
  fabTheirs: { features: "Enterprise talent suite with ANZ compliance baked in", advantages: "Local enterprise credibility and government-grade process", benefits: "Safe, compliant enterprise talent operations" },
  fabOurs: { features: "People-science platform vs process suite", advantages: "Insight-led where they are workflow-led; right-sized for mid-market", benefits: "Better decisions, faster time to value, without enterprise implementation weight" },
  wins: ["Workflow-deep but insight-shallow - no behavioural science core", "Heavy implementations and enterprise pricing punish mid-market buyers", "Legacy platform feel vs modern experience"],
  losses: ["ANZ enterprise incumbency, especially government and higher ed panels", "Suite breadth across the talent lifecycle", "Procurement-friendly enterprise credentials"],
  battlecard: "PageUp owns ANZ enterprise process - if the deal is a 10,000-seat government panel, it is their turf. In mid-market, flip the weight: their enterprise machinery becomes cost and implementation drag. Ask about time to value and what behavioural insight - not workflow - the platform actually contributes to each hiring decision. Process maturity is not decision quality.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "yes", us: "yes" }, { label: "Requisition and approval workflow", them: "yes", us: "no" }, { label: "Multi-board posting and distribution", them: "yes", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "yes", us: "yes" }, { label: "SMS / text candidate messaging", them: "partial", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "yes", us: "yes" }, { label: "Interview scheduling built in", them: "yes", us: "yes" }, { label: "Structured interview scorecards", them: "partial", us: "no" }, { label: "Reference checking", them: "partial", us: "no" }, { label: "Offer management and e-signature", them: "yes", us: "no" }, { label: "Post-offer onboarding", them: "yes", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "yes", us: "partial" }, { label: "HRIS and API integrations", them: "yes", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Culture fit benchmark on a role", them: "no", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "no", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "no", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Melbourne-born enterprise talent suite with government-grade process depth.",
    ourAngle: "In mid-market their enterprise machinery becomes cost and drag. Process maturity is not decision quality.",
    watchOut: "ANZ enterprise incumbency, especially government and higher ed panels. That turf is theirs."
  },
  landmines: [
    "What is the realistic time to value - months of implementation, or weeks?",
    "Beyond workflow, what behavioural insight does the platform add to each hiring decision?",
    "How much of the enterprise suite would a team your size actually switch on?"
  ],
  social: "Moderate ANZ enterprise presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "livehire",
  name: "LiveHire",
  domain: "livehire.com",
  category: "hire",
  assessment: { level: "None", detail: "No native assessment science - talent community and direct sourcing focus." },
  snapshot: { hq: "Melbourne, Australia", founded: "2011", funding: "Acquired by Humanforce in 2025; delisted from the ASX (formerly ASX: LVH)", headcount: "~100", anz: "ANZ native, now part of Humanforce" },
  targetMarket: "Mid-market to enterprise running talent communities / contingent direct sourcing",
  summary: "Talent community and direct sourcing platform - build engaged candidate pools before requisitions open. Strong in contingent workforce direct sourcing.",
  pricing: "Quote-based, platform plus usage components. Verify current model on refresh.",
  features: ["Live talent communities", "Direct sourcing for contingent work", "Candidate engagement/SMS", "Talent pooling", "ATS integrations"],
  integrations: ["Seek", "LinkedIn", "Indeed", "Workday and SAP SuccessFactors", "HRIS and payroll connectors", "Single sign-on"],
  fabTheirs: { features: "Always-on talent communities", advantages: "Source from warm pools instead of cold ads", benefits: "Faster fills from pre-engaged candidates" },
  fabOurs: { features: "Selection science for whoever enters the funnel", advantages: "A warm candidate is not necessarily the right candidate - we tell you who fits", benefits: "Pipeline quality AND selection quality" },
  wins: ["Pooling without insight - warm is not the same as right", "Company stability questions (verify current corporate status)", "Narrow use case vs full hiring platform"],
  losses: ["Genuine differentiation in contingent direct sourcing", "Established ANZ enterprise talent community deployments"],
  battlecard: "LiveHire solves candidate supply; Compono solves candidate selection. They are more often adjacent than competitive - but when positioned head-to-head, ask how a talent community tells you which warm candidate will actually succeed in the team. It cannot. Also worth gently probing vendor stability given their corporate restructuring history.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "partial", us: "yes" }, { label: "Requisition and approval workflow", them: "partial", us: "no" }, { label: "Multi-board posting and distribution", them: "partial", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "yes", us: "yes" }, { label: "SMS / text candidate messaging", them: "yes", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "partial", us: "yes" }, { label: "Interview scheduling built in", them: "partial", us: "yes" }, { label: "Structured interview scorecards", them: "no", us: "no" }, { label: "Reference checking", them: "no", us: "no" }, { label: "Offer management and e-signature", them: "no", us: "no" }, { label: "Post-offer onboarding", them: "no", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "partial", us: "partial" }, { label: "HRIS and API integrations", them: "yes", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Culture fit benchmark on a role", them: "no", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "no", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "no", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Warm talent communities - source from engaged pools instead of cold ads.",
    ourAngle: "They solve candidate supply. We solve candidate selection. Warm is not the same as right.",
    watchOut: "Genuine differentiation in contingent direct sourcing - often adjacent rather than competitive."
  },
  landmines: [
    "How does a talent community tell you which warm candidate will succeed in the team?",
    "What is the vendor's corporate position now, and what does that mean for the roadmap?",
    "Once the pool delivers candidates, what science decides between them?"
  ],
  social: "Light-moderate. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "bullhorn",
  name: "Bullhorn",
  domain: "bullhorn.com",
  category: "hire",
  assessment: { level: "None", detail: "No native behavioural or work personality assessment. Bullhorn is a staffing and recruitment CRM - any assessment comes from third-party marketplace integrations, not a validated matching model built into the product." },
  snapshot: { hq: "Boston, USA", founded: "1999", funding: "PE-backed (Stone Point Capital and Vista Equity Partners)", headcount: "~1,500", anz: "Sells into ANZ with regional presence, strong among local recruitment agencies" },
  targetMarket: "Staffing and recruitment agencies, enterprise RPO, global",
  summary: "The dominant agency-side recruitment CRM and ATS. Built for staffing firms placing candidates at scale, with deep CRM, pipeline and billing workflow.",
  pricing: "Per-user per-month subscription, multiple tiers. Mid to high cost, annual contracts, add-ons for automation and analytics.",
  features: ["Recruitment CRM and ATS", "Candidate and client pipeline management", "Job board and LinkedIn sourcing", "Automation and email sequencing", "Placement and billing workflow", "Reporting and analytics", "Large app marketplace"],
  integrations: ["LinkedIn Recruiter", "Seek", "Indeed", "Broadbean and Daxtra (multiposting and parsing)", "DocuSign", "Gmail and Microsoft 365", "Large partner marketplace (Marketplace by Bullhorn)"],
  fabTheirs: { features: "Agency-grade CRM, pipeline and billing in one system", advantages: "Run an entire staffing business end to end", benefits: "Place more candidates with less administrative drag" },
  fabOurs: { features: "Native, validated work personality matching against role and team fit", advantages: "Bullhorn organises the recruitment process - Compono adds the objective people insight the process cannot see", benefits: "Better quality placements and decisions you can defend, not just faster pipeline" },
  wins: ["No native behavioural science - fit is a recruiter's gut call dressed up as workflow", "Built for agency placement volume, not employer quality-of-hire and retention", "Assessment only via third-party bolt-ons that need buying and integrating", "Enterprise-weight CRM is heavy for an internal mid-market talent team"],
  losses: ["Unmatched depth for staffing agencies and high-volume placement", "Entrenched incumbent with huge agency market share", "Mature CRM and billing that internal-only ATS tools lack"],
  battlecard: "Bullhorn owns the agency desk - if the prospect is a staffing firm, respect that. The wedge appears the moment the buyer is an employer hiring for themselves: Bullhorn measures pipeline and placement speed, not whether the person will fit and stay. Concede the workflow, then ask: 'Once they are placed, what tells you they were the right hire?' Compono Hire answers that with native work personality matching - science at the point of decision, not a recruiter's instinct.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "yes", us: "yes" }, { label: "Requisition and approval workflow", them: "yes", us: "no" }, { label: "Multi-board posting and distribution", them: "yes", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "yes", us: "yes" }, { label: "SMS / text candidate messaging", them: "yes", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "yes", us: "yes" }, { label: "Interview scheduling built in", them: "yes", us: "yes" }, { label: "Structured interview scorecards", them: "partial", us: "no" }, { label: "Reference checking", them: "partial", us: "no" }, { label: "Offer management and e-signature", them: "yes", us: "no" }, { label: "Post-offer onboarding", them: "yes", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "yes", us: "partial" }, { label: "HRIS and API integrations", them: "yes", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Culture fit benchmark on a role", them: "no", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "no", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "no", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Run an entire staffing business end to end - the dominant agency CRM and ATS.",
    ourAngle: "Bullhorn measures pipeline and placement speed. We measure whether the person will fit and stay.",
    watchOut: "Unmatched depth for staffing agencies. If the prospect is an agency, respect the incumbent."
  },
  landmines: [
    "Once they are placed, what tells you they were the right hire?",
    "Is fit a recruiter's gut call dressed up as workflow, or actual data?",
    "For an internal talent team, how much agency-grade CRM weight are you paying for?"
  ],
  social: "Strong agency-recruitment industry presence, large events footprint. Verify current numbers on refresh.",
  recentActivity: []
}
,
{
  id: "scout-talent",
  name: "Scout Talent",
  domain: "scouttalent.com.au",
  category: "hire",
  assessment: { level: "None", detail: "No native validated behavioural assessment. Scout Talent focuses on recruitment marketing, sourcing and ATS workflow - candidate quality relies on the recruiter and on advertising reach, not an embedded matching model." },
  snapshot: { hq: "Brisbane, Australia", founded: "2004", funding: "Acquired by AD1 Holdings (ASX-listed) in 2022", headcount: "~200", anz: "ANZ-born, strong local presence and support" },
  targetMarket: "ANZ mid-market and public sector, recruitment-marketing led",
  summary: "ANZ recruitment-marketing and ATS specialist. Strong on employer branding, advertising reach and candidate attraction for internal talent teams.",
  pricing: "Module-based subscription plus recruitment-marketing services. Mid-range, often bundled with advertising spend.",
  features: ["Recruitment marketing and advertising", "Branded careers pages", "Applicant tracking workflow", "Candidate sourcing and talent pools", "Onboarding module", "Reference checking add-on", "ANZ-focused support"],
  integrations: ["Seek", "LinkedIn", "Indeed", "Job board multiposting", "HRIS and payroll connectors", "Reference-check partners", "Single sign-on"],
  fabTheirs: { features: "Attraction and advertising expertise built for ANZ", advantages: "Fill roles with stronger local candidate flow and employer brand", benefits: "More and better applicants without building marketing in-house" },
  fabOurs: { features: "Validated work personality matching embedded in the hiring workflow", advantages: "Scout gets more people to apply - Compono tells you which of them actually fit the role and team", benefits: "Attraction AND objective selection, with decisions you can defend" },
  wins: ["Strength is attraction and advertising, not selection science - no behavioural matching layer", "Candidate quality still rests on recruiter judgement", "Assessment only via third-party reference and testing partners", "Process and reach solved, people insight risk left open"],
  losses: ["Genuine ANZ recruitment-marketing depth and local credibility", "Strong employer-branding and careers-site capability", "Trusted local incumbent in public sector and mid-market"],
  battlecard: "Scout Talent is excellent at the top of the funnel - getting the right people to apply. Respect the local strength. The wedge is the next step: more applicants does not mean better hires if selection is still a gut call. Ask: 'Once the applications are in, what objective data decides who fits?' Compono Hire adds validated work personality matching to the workflow - so attraction is matched by selection science, not just a bigger pile of CVs.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "yes", us: "yes" }, { label: "Requisition and approval workflow", them: "yes", us: "no" }, { label: "Multi-board posting and distribution", them: "yes", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "yes", us: "yes" }, { label: "SMS / text candidate messaging", them: "yes", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "yes", us: "yes" }, { label: "Interview scheduling built in", them: "yes", us: "yes" }, { label: "Structured interview scorecards", them: "partial", us: "no" }, { label: "Reference checking", them: "partial", us: "no" }, { label: "Offer management and e-signature", them: "yes", us: "no" }, { label: "Post-offer onboarding", them: "yes", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "yes", us: "partial" }, { label: "HRIS and API integrations", them: "yes", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Culture fit benchmark on a role", them: "no", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "no", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "no", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "ANZ recruitment marketing - stronger candidate flow and employer brand for internal teams.",
    ourAngle: "More applicants does not mean better hires if selection is still a gut call. We add the selection science.",
    watchOut: "Genuine local recruitment-marketing depth and public sector trust."
  },
  landmines: [
    "Once the applications are in, what objective data decides who fits?",
    "Does a bigger pile of CVs change the quality of the final decision?",
    "What do the third-party testing partners add in cost, delay and workflow friction?"
  ],
  social: "Solid ANZ recruitment-marketing presence and content. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "recruit-crm",
  name: "Recruit CRM",
  domain: "recruitcrm.io",
  category: "hire",
  assessment: { level: "None", detail: "No native validated behavioural assessment. Recruit CRM is an agency ATS and CRM - matching is keyword, skills and recruiter-driven, with no embedded work personality model." },
  snapshot: { hq: "Norwood, New Jersey, USA (remote, team largely in India)", founded: "2017", funding: "Bootstrapped and profitable", headcount: "~350", anz: "Sells into ANZ remotely, no dedicated local office" },
  targetMarket: "Small to mid-size recruitment agencies, global",
  summary: "Fast-growing, well-rated ATS and CRM for recruitment agencies. Known for ease of use, AI resume parsing and strong value for smaller firms.",
  pricing: "Per-user per-month subscription, transparent tiers. Lower cost than enterprise agency tools.",
  features: ["Agency ATS and CRM", "AI resume parsing and matching", "Candidate and client pipelines", "Email and sequencing", "Chrome sourcing extension", "Reporting dashboards", "Hot-list and talent pooling"],
  integrations: ["LinkedIn", "Indeed", "Job board multiposting", "Gmail and Microsoft 365", "Zapier", "Accounting connectors (Xero, QuickBooks)", "API"],
  fabTheirs: { features: "Easy, affordable agency CRM with AI parsing", advantages: "A small agency gets running fast without enterprise cost", benefits: "Place candidates efficiently on a tight budget" },
  fabOurs: { features: "Native work personality matching for role and team fit", advantages: "Recruit CRM matches on keywords and skills - Compono matches on how people actually work", benefits: "Quality of hire and defensible decisions, not just a tidy pipeline" },
  wins: ["AI matching is keyword and skills based, not validated behavioural science", "Built for agency placement, not employer quality-of-hire and retention", "No native assessment or team-fit model", "No local ANZ support footprint"],
  losses: ["Excellent value and usability for small agencies", "Fast setup and strong customer reviews", "Lower cost of entry than enterprise rivals"],
  battlecard: "Recruit CRM wins on simplicity and price for small agencies - fair. The wedge is the same as any pure ATS: its AI reads keywords, not character. For an employer who cares about fit and retention, keyword matching is process, not insight. Ask: 'What in the tool tells you this person suits the team, not just the job description?' Compono Hire embeds validated work personality science in the workflow - selection grounded in evidence, not parsing.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "yes", us: "yes" }, { label: "Requisition and approval workflow", them: "yes", us: "no" }, { label: "Multi-board posting and distribution", them: "yes", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "yes", us: "yes" }, { label: "SMS / text candidate messaging", them: "yes", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "yes", us: "yes" }, { label: "Interview scheduling built in", them: "yes", us: "yes" }, { label: "Structured interview scorecards", them: "partial", us: "no" }, { label: "Reference checking", them: "partial", us: "no" }, { label: "Offer management and e-signature", them: "partial", us: "no" }, { label: "Post-offer onboarding", them: "partial", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "yes", us: "partial" }, { label: "HRIS and API integrations", them: "yes", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Culture fit benchmark on a role", them: "no", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "no", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "no", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Fast, affordable ATS and CRM for smaller recruitment agencies.",
    ourAngle: "Its AI reads keywords, not character. We embed validated work personality science in the workflow.",
    watchOut: "Excellent value and reviews for small agencies - fair strengths, concede them."
  },
  landmines: [
    "What in the tool tells you this person suits the team, not just the job description?",
    "Does the AI score skills on paper, or how the person actually works?",
    "Where is the local ANZ support when something breaks mid-hire?"
  ],
  social: "Active SMB-recruitment content and strong review-site presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "pinpoint",
  name: "Pinpoint",
  domain: "pinpointhq.com",
  category: "hire",
  assessment: { level: "Basic", detail: "Offers structured scorecards and integrates third-party assessments, and has added AI screening features. These organise and capture opinion - they are not a native validated work personality model matching candidates to role and team." },
  snapshot: { hq: "Jersey, Channel Islands", founded: "2017", funding: "Bootstrapped, no external funding", headcount: "~80", anz: "Sells into ANZ, limited local presence" },
  targetMarket: "Mid-market in-house talent teams, global",
  summary: "Modern, well-designed in-house ATS with strong careers sites, structured hiring and a clean candidate experience. Increasingly adding AI screening.",
  pricing: "Annual subscription scaled by headcount and hiring volume. Mid-range, with onboarding add-on.",
  features: ["In-house ATS and structured hiring", "Branded careers sites", "Structured interview scorecards", "AI screening and sourcing", "Onboarding module", "Reporting and DEI analytics", "Mobile experience"],
  integrations: ["LinkedIn", "Indeed", "Seek", "DocuSign", "Slack and Microsoft Teams", "HRIS connectors (BambooHR, HiBob)", "Google and Microsoft calendars"],
  fabTheirs: { features: "Beautiful candidate experience and structured hiring", advantages: "Run a consistent, branded, bias-aware hiring process", benefits: "Better candidate experience and tidier decisions" },
  fabOurs: { features: "Native validated work personality matching for role and team fit", advantages: "Scorecards organise opinion consistently - Compono adds objective behavioural data the scorecard cannot capture", benefits: "Structure AND science, so the decision is defensible not just consistent" },
  wins: ["Scorecards and AI screening structure opinion - they are not validated behavioural matching", "Assessment depends on third-party integrations", "No team-fit model grounded in work personality", "Process and experience solved, people insight risk remains"],
  losses: ["Genuinely excellent candidate experience and design", "Strong structured-hiring and DEI reporting", "Modern, well-liked product with good reviews"],
  battlecard: "Pinpoint is one of the better-designed ATS products - concede the experience and the structure. The wedge: structured scorecards make opinions consistent, but they are still opinions. AI screening reads keywords. Neither tells you how the person actually works. Ask: 'Your process is consistent - but what objective signal tells you they fit the team?' Compono Hire embeds validated work personality science, so structure is backed by evidence.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "yes", us: "yes" }, { label: "Requisition and approval workflow", them: "yes", us: "no" }, { label: "Multi-board posting and distribution", them: "yes", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "yes", us: "yes" }, { label: "SMS / text candidate messaging", them: "partial", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "yes", us: "yes" }, { label: "Interview scheduling built in", them: "yes", us: "yes" }, { label: "Structured interview scorecards", them: "yes", us: "no" }, { label: "Reference checking", them: "partial", us: "no" }, { label: "Offer management and e-signature", them: "yes", us: "no" }, { label: "Post-offer onboarding", them: "yes", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "yes", us: "partial" }, { label: "HRIS and API integrations", them: "yes", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Culture fit benchmark on a role", them: "no", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "no", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "no", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Modern, well-designed in-house ATS with strong careers sites and structured hiring.",
    ourAngle: "Structured scorecards make opinions consistent - they are still opinions. We back structure with evidence.",
    watchOut: "Genuinely excellent candidate experience and DEI reporting. Concede the design."
  },
  landmines: [
    "Your process is consistent - but what objective signal tells you they fit the team?",
    "What does the AI screening actually read - behaviour, or keywords?",
    "Which third-party assessment do you bolt on, and what does that add in cost and friction?"
  ],
  social: "Strong design-led content and good review presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "ashby",
  name: "Ashby",
  domain: "ashbyhq.com",
  category: "hire",
  assessment: { level: "None", detail: "No native validated behavioural assessment. Ashby's strength is analytics and operating workflow - assessment is via third-party integrations, not an embedded work personality matching model." },
  snapshot: { hq: "San Francisco, USA", founded: "2018", funding: "VC-backed, ~US$130M raised (Series D)", headcount: "~445", anz: "Sells into ANZ remotely, no local office" },
  targetMarket: "High-growth tech scale-ups and mid-market, global",
  summary: "Analytics-first all-in-one recruiting platform - ATS, CRM, scheduling and reporting in one. Beloved by data-driven talent teams at fast-scaling tech companies.",
  pricing: "Annual subscription scaled by employee count. Premium positioning, generally higher cost.",
  features: ["All-in-one ATS, CRM and scheduling", "Advanced recruiting analytics", "Sourcing and pipeline automation", "Structured interview kits", "Approvals and offer workflow", "Custom reporting", "API-first architecture"],
  integrations: ["LinkedIn", "Indeed", "Google and Microsoft calendars", "Slack", "DocuSign", "HRIS connectors (Workday, HiBob, Rippling)", "Assessment partners and API"],
  fabTheirs: { features: "Best-in-class recruiting analytics and automation", advantages: "Run hiring like a data-driven operation with deep funnel insight", benefits: "Optimise speed, cost and conversion with hard numbers" },
  fabOurs: { features: "Native work personality matching - behavioural data, not just funnel data", advantages: "Ashby measures the process brilliantly; Compono measures the person", benefits: "Optimised process AND quality of hire, with selection you can defend" },
  wins: ["World-class at process analytics, silent on people insight - no behavioural matching", "Funnel metrics tell you how fast you hire, not how well the person fits", "Assessment only via integrations", "Premium price for a process-optimisation tool"],
  losses: ["Genuinely excellent analytics and reporting depth", "Strong product loved by sophisticated tech talent teams", "Modern all-in-one architecture"],
  battlecard: "Ashby is the analytics darling - and the data is genuinely strong. That is exactly the wedge. Ashby measures everything about the process and nothing about the person. Time-to-hire and conversion are process metrics; they do not tell you whether the hire fits. Ask: 'Your funnel data is superb - what data do you have on whether the person will actually succeed in the team?' Compono Hire adds the behavioural layer process analytics cannot.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "yes", us: "yes" }, { label: "Requisition and approval workflow", them: "yes", us: "no" }, { label: "Multi-board posting and distribution", them: "yes", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "yes", us: "yes" }, { label: "SMS / text candidate messaging", them: "partial", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "yes", us: "yes" }, { label: "Interview scheduling built in", them: "yes", us: "yes" }, { label: "Structured interview scorecards", them: "yes", us: "no" }, { label: "Reference checking", them: "partial", us: "no" }, { label: "Offer management and e-signature", them: "yes", us: "no" }, { label: "Post-offer onboarding", them: "partial", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "yes", us: "partial" }, { label: "HRIS and API integrations", them: "yes", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Culture fit benchmark on a role", them: "no", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "no", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "no", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Analytics-first recruiting - ATS, CRM, scheduling and deep funnel reporting in one.",
    ourAngle: "Ashby measures everything about the process and nothing about the person. We add the behavioural layer.",
    watchOut: "Genuinely excellent analytics loved by sophisticated tech talent teams."
  },
  landmines: [
    "Your funnel data is superb - what data do you have on whether the person will succeed in the team?",
    "Time-to-hire is a process metric. What is your quality-of-hire metric?",
    "What premium are you paying for process optimisation that never touches the decision itself?"
  ],
  social: "Strong data-driven recruiting content, respected in tech talent circles. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "manatal",
  name: "Manatal",
  domain: "manatal.com",
  category: "hire",
  assessment: { level: "Basic", detail: "Provides AI candidate scoring and recommendations based on resume-to-job matching. This is keyword and skills inference, not a validated work personality model tied to role and team fit." },
  snapshot: { hq: "Bangkok, Thailand", founded: "2019", funding: "VC-backed, ~US$5M seed (Sequoia Surge)", headcount: "~130", anz: "Sells into ANZ remotely, no local presence" },
  targetMarket: "SMB agencies and in-house teams, price-sensitive, global",
  summary: "Affordable AI-enabled ATS and recruitment CRM with strong value positioning. Popular with smaller agencies and teams in emerging markets.",
  pricing: "Low per-user per-month tiers, among the cheapest in the category. Transparent self-serve pricing.",
  features: ["ATS and recruitment CRM", "AI candidate scoring and recommendations", "Social media and job board sourcing", "Chrome sourcing extension", "Candidate enrichment", "Pipeline and reporting", "Career page builder"],
  integrations: ["LinkedIn", "Indeed", "Job board multiposting", "Gmail and Microsoft 365", "Zapier", "Mailchimp", "API"],
  fabTheirs: { features: "Affordable AI-enabled ATS for everyone", advantages: "Get AI recruiting features at the lowest price point", benefits: "Modern hiring tooling without the enterprise bill" },
  fabOurs: { features: "Native validated work personality matching for role and team fit", advantages: "Manatal's AI scores resumes - Compono assesses how people actually work", benefits: "Defensible quality of hire, not just a cheap modern workflow" },
  wins: ["AI scoring is resume-keyword inference, not validated behavioural science", "Built for cost and volume, not quality-of-hire and retention", "No native work personality or team-fit model", "No ANZ support footprint"],
  losses: ["Very strong price-to-feature value", "Easy self-serve onboarding", "Good fit for budget-constrained smaller teams"],
  battlecard: "Manatal competes on price and accessible AI features - fine for a budget buyer. The wedge is what the AI actually does: it scores resumes against job text, which is keyword matching with a confidence number attached. That is not behavioural science. Ask: 'Does the AI tell you they can do the job, or that they fit the team?' Compono Hire matches on validated work personality - evidence a resume score cannot provide.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "yes", us: "yes" }, { label: "Requisition and approval workflow", them: "yes", us: "no" }, { label: "Multi-board posting and distribution", them: "yes", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "yes", us: "yes" }, { label: "SMS / text candidate messaging", them: "partial", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "yes", us: "yes" }, { label: "Interview scheduling built in", them: "yes", us: "yes" }, { label: "Structured interview scorecards", them: "partial", us: "no" }, { label: "Reference checking", them: "partial", us: "no" }, { label: "Offer management and e-signature", them: "partial", us: "no" }, { label: "Post-offer onboarding", them: "partial", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "yes", us: "partial" }, { label: "HRIS and API integrations", them: "yes", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Culture fit benchmark on a role", them: "no", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "no", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "no", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "AI recruiting features at the lowest price point on the market.",
    ourAngle: "Their AI scores resumes against job text - keyword matching with a confidence number. Not behavioural science.",
    watchOut: "Very strong price-to-feature value for budget-constrained teams."
  },
  landmines: [
    "Does the AI tell you they can do the job, or that they fit the team?",
    "What validation sits behind the AI score - could you defend it to a board?",
    "Who supports you locally when hiring stalls in an ANZ time zone?"
  ],
  social: "Active SMB and emerging-market recruiting content. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "jazzhr",
  name: "JazzHR",
  domain: "jazzhr.com",
  category: "hire",
  assessment: { level: "None", detail: "No native validated behavioural assessment. JazzHR offers knockout questions and integrates third-party tests - it has no embedded work personality matching model." },
  snapshot: { hq: "Pittsburgh, USA (parent Employ Inc., Waltham)", founded: "2009", funding: "Owned by Employ Inc. (parent of Jobvite, Lever)", headcount: "Part of Employ Inc.", anz: "Sells into ANZ remotely, US-centric" },
  targetMarket: "US SMB in-house hiring, price-conscious",
  summary: "Long-running, affordable SMB ATS focused on simple, repeatable hiring for small businesses. Now part of the Employ Inc. portfolio.",
  pricing: "Flat monthly tiers (not per-user), low cost. Add-ons for assessments, texting and e-signature.",
  features: ["SMB applicant tracking", "Job posting and syndication", "Knockout screening questions", "Interview scheduling and scorecards", "Offers and e-signature add-on", "Reporting", "Candidate texting add-on"],
  integrations: ["LinkedIn", "Indeed", "ZipRecruiter", "Job board syndication", "DocuSign", "Assessment partners (add-on)", "Payroll and HRIS connectors", "Zapier"],
  fabTheirs: { features: "Simple, affordable hiring for small business", advantages: "Standardise SMB hiring without complexity or cost", benefits: "Hire consistently on a small-business budget" },
  fabOurs: { features: "Native validated work personality matching built into the workflow", advantages: "JazzHR organises the SMB process - Compono adds the people insight it lacks", benefits: "Quality hires and defensible decisions, not just a cheap tidy process" },
  wins: ["No native behavioural science - knockout questions filter, they do not assess fit", "Assessment is a paid third-party add-on", "US-centric with no ANZ presence", "Process-only tool - people insight risk untouched"],
  losses: ["Strong affordable option for US small business", "Flat pricing is attractive to SMBs", "Mature, stable product with broad SMB adoption"],
  battlecard: "JazzHR is a competent, cheap SMB ATS - no need to overstate the contest. The wedge is standard: knockout questions and scorecards manage the process but say nothing about how a person works. For a growing business, a single bad hire is expensive. Ask: 'What in JazzHR tells you the person fits the team, not just clears the filter?' Compono Hire brings validated work personality science into the same workflow.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "yes", us: "yes" }, { label: "Requisition and approval workflow", them: "yes", us: "no" }, { label: "Multi-board posting and distribution", them: "yes", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "yes", us: "yes" }, { label: "SMS / text candidate messaging", them: "partial", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "yes", us: "yes" }, { label: "Interview scheduling built in", them: "yes", us: "yes" }, { label: "Structured interview scorecards", them: "yes", us: "no" }, { label: "Reference checking", them: "partial", us: "no" }, { label: "Offer management and e-signature", them: "yes", us: "no" }, { label: "Post-offer onboarding", them: "partial", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "yes", us: "partial" }, { label: "HRIS and API integrations", them: "yes", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Culture fit benchmark on a role", them: "no", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "no", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "no", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Simple, affordable, repeatable hiring for small US businesses.",
    ourAngle: "Knockout questions filter - they do not assess fit. One bad hire costs a growing business dearly.",
    watchOut: "Mature, cheap and stable in its SMB lane. No need to overstate the contest."
  },
  landmines: [
    "What in JazzHR tells you the person fits the team, not just clears the filter?",
    "What does the paid assessment add-on cost, and does it model fit to your team?",
    "How does a US-centric tool handle ANZ job boards, compliance and support hours?"
  ],
  social: "Moderate SMB-hiring content presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "springboard",
  name: "Springboard",
  domain: "",
  category: "hire",
  assessment: { level: "None", detail: "No native validated behavioural assessment. Springboard is an ANZ talent acquisition suite spanning attraction, ATS and onboarding - reference checking is via an embedded Xref partnership and any psychometric testing is third-party, not a built-in work personality matching model." },
  snapshot: { hq: "Sydney, Australia", founded: "2002", funding: "Privately held (HRX/RPO origins)", headcount: "~50-100", anz: "ANZ-born, strong local presence and support" },
  targetMarket: "ANZ mid-market and enterprise in-house talent teams",
  summary: "Established ANZ talent acquisition suite - recruitment marketing, ATS, CRM, onboarding and analytics with deep local job board and compliance integration.",
  pricing: "Module-based annual subscription scaled by usage. Mid-range, often bundled across the suite.",
  features: ["Recruitment marketing and attraction", "Applicant tracking and CRM", "Talent pooling", "Onboarding workflow", "Reference checking (via Xref)", "Recruitment analytics", "30+ partner integrations"],
  integrations: ["Seek", "LinkedIn", "Indeed", "Xref (reference checking, embedded)", "HRIS and payroll connectors", "Single sign-on", "30+ partner ecosystem"],
  fabTheirs: { features: "Full ANZ talent acquisition suite, locally built and supported", advantages: "Run attraction to onboarding in one local platform with strong compliance", benefits: "End-to-end hiring handled by an ANZ specialist" },
  fabOurs: { features: "Native validated work personality matching for role and team fit", advantages: "Springboard runs the full local process - Compono adds the objective people insight the suite does not contain", benefits: "Local workflow strength AND defensible selection science" },
  wins: ["No native behavioural science - selection rests on recruiter judgement and third-party tests", "Reference checking via Xref organises feedback, it does not predict fit", "Suite breadth without a work personality matching model", "Process and onboarding solved, people insight risk left open"],
  losses: ["Long-standing ANZ presence and local compliance depth", "Genuine end-to-end suite from attraction to onboarding", "Trusted local incumbent with strong support"],
  battlecard: "Springboard is a credible ANZ suite with real local depth - respect the incumbency and the compliance strength. The wedge: breadth across the process is not insight into the person. References and third-party tests sit beside the workflow, not inside a matching model. Ask: 'Across all those modules, where is the objective data on whether the person fits the team?' Compono Hire embeds that science natively - and integrates with the local stack rather than fighting it.",
  fabComparison: {
    groups: [
      { title: "What's expected of an ATS", rows: [{ label: "Job templates and description builder", them: "yes", us: "yes" }, { label: "Requisition and approval workflow", them: "yes", us: "no" }, { label: "Multi-board posting and distribution", them: "yes", us: "yes" }, { label: "Branded careers page / shareable job URL", them: "yes", us: "yes" }, { label: "CV parsing and candidate database", them: "yes", us: "yes" }, { label: "Pipeline, tagging and candidate management", them: "yes", us: "yes" }, { label: "Candidate email messaging, bulk send, templates", them: "yes", us: "yes" }, { label: "SMS / text candidate messaging", them: "yes", us: "no" }, { label: "Collaborative hiring (manager portal, permissions)", them: "yes", us: "yes" }, { label: "Interview scheduling built in", them: "yes", us: "yes" }, { label: "Structured interview scorecards", them: "partial", us: "no" }, { label: "Reference checking", them: "partial", us: "no" }, { label: "Offer management and e-signature", them: "yes", us: "no" }, { label: "Post-offer onboarding", them: "yes", us: "no" }, { label: "Recruitment analytics and reporting", them: "yes", us: "yes" }, { label: "SSO and roles / permissions", them: "yes", us: "partial" }, { label: "HRIS and API integrations", them: "yes", us: "partial" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Skills mapping with fuzzy logic / relatability", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Culture fit benchmark on a role", them: "no", us: "yes" }, { label: "Team fit and team-design insight", them: "no", us: "yes" }, { label: "Job motivation fit (18 dimensions)", them: "no", us: "yes" }, { label: "Explainable, dynamic candidate ranking on fit", them: "no", us: "yes" }, { label: "Insight that carries into engage and develop", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Established ANZ talent suite - attraction to onboarding with deep local compliance.",
    ourAngle: "Breadth across the process is not insight into the person. We embed the science natively and play well with the local stack.",
    watchOut: "Long-standing ANZ incumbency and genuine compliance depth. Respect it."
  },
  landmines: [
    "Across all those modules, where is the objective data on whether the person fits the team?",
    "Reference checks organise feedback - what actually predicts fit before the offer?",
    "Do the third-party tests sit inside the decision, or beside the workflow?"
  ],
  social: "Established ANZ talent-acquisition presence, lower content volume. Verify on refresh.",
  recentActivity: []
}
,

/* ============ ENGAGE - CULTURE / ENGAGEMENT / PERSONALITY / ASSESSMENT ============ */
{
  id: "culture-amp",
  name: "Culture Amp",
  domain: "cultureamp.com",
  category: "engage",
  snapshot: { hq: "Melbourne, Australia", founded: "2009", funding: "VC-backed, ~US$260M raised, ~US$1.5B valuation (unicorn)", headcount: "~950", anz: "Strong - Melbourne-founded, major local brand" },
  targetMarket: "Mid-market to enterprise, global, HR/people teams",
  summary: "The engagement survey category leader - employee feedback, performance and development on one platform. The biggest brand in our Engage conversations.",
  pricing: "Per employee per year, quote-based, premium. Modules (Engage, Perform, Develop) priced separately.",
  features: ["Engagement surveys with benchmark library", "Pulse and lifecycle surveys", "Performance reviews and goals", "1-on-1s and feedback", "People analytics", "Skills coach / develop module"],
  integrations: ["Workday", "BambooHR", "Rippling", "ADP", "SAP SuccessFactors", "Slack and Microsoft Teams", "HRIS connectors"],
  fabTheirs: { features: "Science-backed surveys with the industry's largest benchmark dataset", advantages: "Know how you compare and where to act", benefits: "Improve engagement with confidence" },
  fabOurs: { features: "Work personality and culture analytics that explain HOW people work, not just how they feel", advantages: "Feelings data tells you something is wrong; our data tells you why and what to do - down to team composition", benefits: "Culture problems you can actually fix, plus insight that connects to hiring and development" },
  wins: ["Measures sentiment, not work style - they know people are unhappy, not why the team composition makes them unhappy", "Survey fatigue is real and CFOs increasingly question survey ROI", "Personality/behavioural layer is thin vs our validated work personality model", "Premium pricing at scale"],
  losses: ["Massive brand gravity - often the default shortlist name", "Benchmark dataset depth is genuinely unmatched", "Strong performance management module if that is the bundled need", "Local Melbourne hero story"],
  battlecard: "Never dismiss Culture Amp - prospects respect them and so should we. The wedge is the difference between measuring feelings and explaining work. Culture Amp tells you engagement dropped 6 points; it cannot tell you that the team's composition has three competing work styles and no coordinator. Compono Engage explains how people actually work together - which is what you change. Surveys describe the weather; we explain the climate system. Both/and framing works: some clients run both.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "yes", us: "yes" }, { label: "Custom / editable survey questions", them: "yes", us: "no" }, { label: "eNPS (employee net promoter score)", them: "yes", us: "no" }, { label: "Sentiment and trend analytics", them: "yes", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "yes", us: "yes" }, { label: "Filter by team, location, demographic", them: "yes", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "yes", us: "no" }, { label: "Action planning from results", them: "yes", us: "yes" }, { label: "External benchmark library", them: "yes", us: "no" }, { label: "Performance reviews and goals", them: "yes", us: "no" }, { label: "Recognition / 1-on-1s", them: "yes", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Team work-personality / team design", them: "no", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "The engagement survey category leader - feedback, benchmarks and performance in one platform.",
    ourAngle: "They measure how people feel. We explain how people work - which is what you actually change. Some clients run both.",
    watchOut: "Massive brand gravity and an unmatched benchmark dataset. Never dismiss them."
  },
  landmines: [
    "When engagement drops six points, what tells you why - and what to change in the team?",
    "How much survey data do you already have that never turned into action?",
    "Does the platform explain how your people are wired, or just how they answered?"
  ],
  social: "Very strong - one of the loudest HR tech brands globally. Verify on refresh.",
  recentActivity: [
    { date: "Jun 2026", note: "Cut about 70 roles (roughly 9 per cent of staff) in its third round of layoffs in three years, as the new CEO restructures the business." },
    { date: "Jan 2026", note: "Caroline Rawlinson appointed CEO; founder Didier Elzinga moved to executive chair to focus on AI strategy." }
  ]
}
,
{
  id: "peakon",
  name: "Peakon (Workday)",
  domain: "workday.com",
  category: "engage",
  snapshot: { hq: "Copenhagen / Workday (Pleasanton, USA)", founded: "2014, acquired by Workday 2021", funding: "Workday-owned", headcount: "Within Workday", anz: "Sold through Workday enterprise motion" },
  targetMarket: "Enterprise, especially existing Workday customers",
  summary: "Continuous listening platform inside Workday - intelligent pulse surveys with driver analytics. Effectively the default for Workday shops.",
  pricing: "Enterprise per-employee, bundled into Workday negotiations.",
  features: ["Continuous intelligent pulse surveys", "Driver and attrition analytics", "Manager dashboards and nudges", "Benchmarking", "Workday ecosystem integration"],
  integrations: ["Workday (native)", "Major HRIS connectors", "Microsoft Teams and Slack", "Single sign-on"],
  fabTheirs: { features: "Always-on listening woven into Workday", advantages: "No separate vendor, enterprise-grade analytics", benefits: "Continuous insight inside your existing HRIS" },
  fabOurs: { features: "Work personality and culture analytics independent of any HRIS", advantages: "Explains team dynamics rather than tracking sentiment trends; works with whatever stack you run", benefits: "Actionable team-level insight without Workday lock-in" },
  wins: ["Sentiment trends without behavioural explanation - same gap as all survey tools", "Only compelling inside a Workday estate - irrelevant lock-in for most ANZ mid-market", "Enterprise pricing and motion"],
  losses: ["If the prospect runs Workday, the bundle is hard to dislodge", "Strong continuous-listening analytics engine"],
  battlecard: "Peakon only really appears when Workday is already in the building. If so, do not fight the bundle on survey features - reframe entirely: Peakon listens, Compono explains. Their analytics tell you scores moved; our work personality data tells you the mechanism inside the team that moved them. That insight also feeds hiring and development decisions - something a listening tool structurally cannot do.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "yes", us: "yes" }, { label: "Custom / editable survey questions", them: "yes", us: "no" }, { label: "eNPS (employee net promoter score)", them: "partial", us: "no" }, { label: "Sentiment and trend analytics", them: "yes", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "yes", us: "yes" }, { label: "Filter by team, location, demographic", them: "yes", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "yes", us: "no" }, { label: "Action planning from results", them: "yes", us: "yes" }, { label: "External benchmark library", them: "yes", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Team work-personality / team design", them: "no", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Continuous listening inside Workday - no extra vendor, enterprise analytics.",
    ourAngle: "Peakon listens. Compono explains - and the insight feeds hiring and development too, which a listening tool cannot.",
    watchOut: "Hard to dislodge inside a Workday estate. Do not fight the bundle on survey features."
  },
  landmines: [
    "The scores moved - what mechanism inside the team moved them?",
    "Does the listening data help you hire or develop anyone, or does it stay in a dashboard?",
    "Outside a Workday estate, what is Peakon's case on its own?"
  ],
  social: "Folded into Workday corporate presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "lattice",
  name: "Lattice",
  domain: "lattice.com",
  category: "engage",
  snapshot: { hq: "San Francisco, USA", founded: "2015", funding: "VC-backed, ~US$3B peak valuation era", headcount: "~600", anz: "Sells remotely, modest local presence" },
  targetMarket: "Mid-market, tech-leaning, people ops teams",
  summary: "Performance-management-led people platform - reviews, goals, 1:1s with engagement surveys attached. Expanding toward HRIS.",
  pricing: "Per employee per month, modular (~US$11+ pepm as modules stack). Pushes multi-module bundles.",
  features: ["Performance reviews", "OKRs/goals", "1:1s and feedback", "Engagement surveys", "Compensation module", "HRIS ambition (Lattice HRIS)"],
  integrations: ["Workday", "BambooHR", "ADP", "Rippling", "Slack and Microsoft Teams", "HRIS connectors"],
  fabTheirs: { features: "Performance and engagement in one connected system", advantages: "Link how people feel with how they perform", benefits: "A single people-management rhythm" },
  fabOurs: { features: "The missing layer under performance: how people actually work", advantages: "Performance ratings without work-style context misattribute cause; we supply the context", benefits: "Performance conversations grounded in who people are, not just what they scored" },
  wins: ["Process-rich, insight-poor - rituals (reviews, 1:1s) without behavioural understanding", "Module pricing stacks up fast", "HRIS expansion dilutes focus and signals identity drift", "US-centric playbooks for ANZ buyers"],
  losses: ["Slick product experience managers genuinely like", "Strong if the entry pain is performance process, not culture insight", "Loud content/brand machine"],
  battlecard: "Lattice systematises management rituals - reviews, goals, 1:1s. Useful plumbing. But a 1:1 template does not tell a manager that their direct report's work style needs autonomy while the team runs on tight coordination. Compono provides the insight layer those rituals are missing. If the prospect's pain is 'our reviews are chaos', Lattice is credible - probe whether the real pain is 'we do not understand our people', which rituals never fix.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "yes", us: "yes" }, { label: "Custom / editable survey questions", them: "yes", us: "no" }, { label: "eNPS (employee net promoter score)", them: "yes", us: "no" }, { label: "Sentiment and trend analytics", them: "yes", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "yes", us: "yes" }, { label: "Filter by team, location, demographic", them: "yes", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "yes", us: "no" }, { label: "Action planning from results", them: "yes", us: "yes" }, { label: "External benchmark library", them: "yes", us: "no" }, { label: "Performance reviews and goals", them: "yes", us: "no" }, { label: "Recognition / 1-on-1s", them: "yes", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Team work-personality / team design", them: "no", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Performance rituals in one place - reviews, goals, 1:1s with surveys attached.",
    ourAngle: "Rituals without understanding. We give managers the insight layer their reviews and 1:1s are missing.",
    watchOut: "Slick product managers genuinely like, with a loud content machine."
  },
  landmines: [
    "Does a 1:1 template tell a manager how their direct report actually needs to be managed?",
    "What do the modules cost once you stack performance, engagement and the rest?",
    "Is your pain really review chaos, or that you do not understand your people?"
  ],
  social: "Very active content brand. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "15five",
  name: "15Five",
  domain: "15five.com",
  category: "engage",
  snapshot: { hq: "San Francisco, USA", founded: "2011", funding: "VC-backed, ~US$80M raised", headcount: "~300", anz: "Remote sales only" },
  targetMarket: "SMB to mid-market, manager-enablement angle",
  summary: "Manager-effectiveness platform - weekly check-ins, engagement surveys, performance and manager training combined.",
  pricing: "Per employee per month tiers (~US$4-14 pepm by module bundle).",
  features: ["Weekly check-ins", "Engagement surveys", "Performance reviews", "High-fives/recognition", "Manager coaching (Transform)", "OKRs"],
  integrations: ["BambooHR", "ADP", "Workday", "Gusto", "Slack and Microsoft Teams", "HRIS connectors"],
  fabTheirs: { features: "Check-ins plus manager development in one", advantages: "Build better managers, not just collect scores", benefits: "Engagement improves because managers improve" },
  fabOurs: { features: "The data managers actually need: how each person works", advantages: "Coaching generic manager skills without person-specific work-style insight is coaching blind", benefits: "Managers adapt to real people, not personas" },
  wins: ["Manager training without people data - generic skills applied blindly", "Check-in fatigue mirrors survey fatigue", "Light analytical depth"],
  losses: ["Manager-enablement angle resonates emotionally with HR buyers", "Cheaper entry point"],
  battlecard: "15Five's bet is that better managers fix engagement - half right. The missing half: a manager cannot adapt to what they cannot see. Compono shows managers exactly how each team member works - then management improvement has a target. Position as the data layer their coaching philosophy needs.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "yes", us: "yes" }, { label: "Custom / editable survey questions", them: "yes", us: "no" }, { label: "eNPS (employee net promoter score)", them: "yes", us: "no" }, { label: "Sentiment and trend analytics", them: "yes", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "yes", us: "yes" }, { label: "Filter by team, location, demographic", them: "yes", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "yes", us: "no" }, { label: "Action planning from results", them: "yes", us: "yes" }, { label: "External benchmark library", them: "partial", us: "no" }, { label: "Performance reviews and goals", them: "yes", us: "no" }, { label: "Recognition / 1-on-1s", them: "yes", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Team work-personality / team design", them: "no", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Build better managers - weekly check-ins, surveys and manager training combined.",
    ourAngle: "A manager cannot adapt to what they cannot see. We are the data layer their coaching philosophy needs.",
    watchOut: "The manager-enablement angle resonates emotionally with HR buyers, at a cheaper entry point."
  },
  landmines: [
    "Better managers of what, exactly - can they see how each team member is wired?",
    "Is generic manager training applied blindly, or targeted at what this team needs?",
    "How is check-in fatigue trending against the insight the check-ins produce?"
  ],
  social: "Active, manager-focused content. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "qualtrics",
  name: "Qualtrics EmployeeXM",
  domain: "qualtrics.com",
  category: "engage",
  snapshot: { hq: "Provo/Seattle, USA", founded: "2002", funding: "PE-owned (Silver Lake, ~US$12.5B take-private)", headcount: "~5,000", anz: "Enterprise presence, local enterprise sales" },
  targetMarket: "Enterprise, experience-management buyers",
  summary: "Enterprise experience management - employee listening as one pillar of a CX/EX mega-platform. Survey science at maximum sophistication.",
  pricing: "Enterprise quote-based, expensive, multi-year.",
  features: ["Advanced survey design and stats engine", "360 feedback", "Lifecycle listening", "Text/sentiment analytics", "EX + CX combined dashboards"],
  integrations: ["Workday", "SAP SuccessFactors", "ServiceNow", "Salesforce", "Slack and Microsoft Teams", "Single sign-on"],
  fabTheirs: { features: "The most sophisticated listening engine on earth", advantages: "Research-grade rigour at enterprise scale", benefits: "Experience data the board trusts" },
  fabOurs: { features: "Explanation, not just measurement", advantages: "World-class listening still only measures sentiment; we model how people work and fit", benefits: "From knowing the score to changing the system" },
  wins: ["The ultimate measurement tool with the same structural gap - no behavioural work-style model", "Enterprise cost and complexity absurd for mid-market", "Needs analyst resource to extract value"],
  losses: ["Unmatched survey methodology credibility", "Enterprise procurement preference for consolidated XM platforms"],
  battlecard: "Qualtrics appearing in a mid-market deal usually signals an over-scoped RFP. The argument is not survey sophistication - concede it. The argument is that sophistication of measurement cannot fix poverty of explanation. A perfect measure of dissatisfaction still does not say which team dynamics caused it. Compono does, at a price and footprint a mid-market team can actually run.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "yes", us: "yes" }, { label: "Custom / editable survey questions", them: "yes", us: "no" }, { label: "eNPS (employee net promoter score)", them: "yes", us: "no" }, { label: "Sentiment and trend analytics", them: "yes", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "yes", us: "yes" }, { label: "Filter by team, location, demographic", them: "yes", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "yes", us: "no" }, { label: "Action planning from results", them: "yes", us: "yes" }, { label: "External benchmark library", them: "yes", us: "no" }, { label: "Performance reviews and goals", them: "partial", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Team work-personality / team design", them: "no", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Research-grade employee listening inside an enterprise experience mega-platform.",
    ourAngle: "Sophistication of measurement cannot fix poverty of explanation. We explain, at a mid-market footprint.",
    watchOut: "Unmatched survey methodology credibility. Its appearance in mid-market usually signals an over-scoped RFP."
  },
  landmines: [
    "A perfect measure of dissatisfaction still does not say which team dynamics caused it - what does?",
    "Who on your team will do the analyst work the platform needs to produce value?",
    "What will this cost, all-in, against what a mid-market team can actually run?"
  ],
  social: "Large corporate presence. Verify on refresh.",
  recentActivity: [
    { date: "May 2026", note: "Completed its US$6.75 billion acquisition of Press Ganey Forsta, deepening its healthcare experience data and AI position." }
  ]
}
,
{
  id: "leapsome",
  name: "Leapsome",
  domain: "leapsome.com",
  category: "engage",
  snapshot: { hq: "Berlin, Germany", founded: "2016", funding: "VC-backed, ~US$60M raised", headcount: "~250", anz: "Remote sales only" },
  targetMarket: "European mid-market, expanding globally",
  summary: "People enablement platform - performance, engagement, learning and compensation modules. European Lattice analogue.",
  pricing: "Modular per employee per month, ~US$8+ pepm as modules stack.",
  features: ["Reviews and goals", "Engagement surveys", "Learning paths", "Compensation", "Meetings/1:1s", "AI summaries"],
  integrations: ["BambooHR", "Personio", "Workday", "Slack and Microsoft Teams", "HRIS connectors", "Single sign-on"],
  fabTheirs: { features: "All people processes in one modular platform", advantages: "Consolidate point tools", benefits: "One system, lower total cost" },
  fabOurs: { features: "Depth of people insight vs breadth of process modules", advantages: "Consolidated processes on shallow data are consolidated guesswork", benefits: "Decisions improve, not just admin" },
  wins: ["Breadth-over-depth modular play with no behavioural science core", "Minimal ANZ presence, EU-centric support hours", "Same survey-tool explanatory gap"],
  losses: ["Attractive consolidation economics", "Solid product polish"],
  battlecard: "Leapsome sells consolidation - fewer tools, one bill. Fair. But consolidating processes that all run on the same shallow sentiment data does not improve any decision. Ask what the platform actually knows about how their people work. Also probe ANZ support reality for a Berlin-based vendor.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "yes", us: "yes" }, { label: "Custom / editable survey questions", them: "yes", us: "no" }, { label: "eNPS (employee net promoter score)", them: "yes", us: "no" }, { label: "Sentiment and trend analytics", them: "yes", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "yes", us: "yes" }, { label: "Filter by team, location, demographic", them: "yes", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "yes", us: "no" }, { label: "Action planning from results", them: "yes", us: "yes" }, { label: "External benchmark library", them: "partial", us: "no" }, { label: "Performance reviews and goals", them: "yes", us: "no" }, { label: "Recognition / 1-on-1s", them: "yes", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Team work-personality / team design", them: "no", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Consolidate performance, engagement, learning and compensation into one European platform.",
    ourAngle: "Consolidating processes that run on shallow sentiment data does not improve any decision.",
    watchOut: "Attractive consolidation economics and solid product polish."
  },
  landmines: [
    "What does the platform actually know about how your people work?",
    "What do ANZ support hours look like for a Berlin-based vendor?",
    "Fewer tools, one bill - but which decision got better?"
  ],
  social: "Moderate, EU-focused. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "officevibe",
  name: "Workleap Officevibe",
  domain: "workleap.com",
  category: "engage",
  snapshot: { hq: "Montreal, Canada", founded: "2013 (Workleap group)", funding: "PE investment in Workleap (~CA$125M)", headcount: "~400 (group)", anz: "Remote only" },
  targetMarket: "SMB, team-manager level entry",
  summary: "Lightweight pulse survey and feedback tool inside the Workleap suite - simple, cheap, manager-friendly.",
  pricing: "Cheap per-user tiers, free tier exists. Self-serve.",
  features: ["Automated pulse surveys", "Anonymous feedback", "Recognition (Good Vibes)", "Simple manager reports", "1:1 agendas"],
  integrations: ["Slack", "Microsoft Teams", "BambooHR", "ADP", "Workleap suite"],
  fabTheirs: { features: "Effortless pulse surveys teams do not hate", advantages: "Engagement signal with zero admin", benefits: "Know team mood for the price of coffee" },
  fabOurs: { features: "Substantive culture and work personality analytics", advantages: "Mood tracking is a thermometer; we are the diagnosis", benefits: "Insight that drives decisions, not dashboards that drive anxiety" },
  wins: ["Toy-depth analytics - genuinely lightweight", "No behavioural model at all", "SMB tool stretched thin in mid-market"],
  losses: ["Very cheap and frictionless", "Fine for tiny teams that just want a mood check"],
  battlecard: "Rarely a serious head-to-head - Officevibe is a mood thermometer. If a prospect compares us, the qualification question is whether they want to monitor sentiment or change outcomes. Thermometers do not treat fevers.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "yes", us: "yes" }, { label: "Custom / editable survey questions", them: "yes", us: "no" }, { label: "eNPS (employee net promoter score)", them: "yes", us: "no" }, { label: "Sentiment and trend analytics", them: "yes", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "yes", us: "yes" }, { label: "Filter by team, location, demographic", them: "yes", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "yes", us: "no" }, { label: "Action planning from results", them: "yes", us: "yes" }, { label: "External benchmark library", them: "partial", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "yes", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Team work-personality / team design", them: "no", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Lightweight pulse surveys - engagement signal with zero admin.",
    ourAngle: "A mood thermometer. Thermometers do not treat fevers. Qualify whether they want to monitor sentiment or change outcomes.",
    watchOut: "Very cheap and frictionless - fine for tiny teams wanting a mood check."
  },
  landmines: [
    "When the mood dips, what does the tool tell you to do about it?",
    "Is the goal to watch sentiment, or to change the outcomes behind it?",
    "What depth is left when your team and questions grow?"
  ],
  social: "Light-moderate. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "predictive-index",
  name: "The Predictive Index",
  domain: "predictiveindex.com",
  category: "engage",
  snapshot: { hq: "Westwood, USA", founded: "1955", funding: "PE-backed (General Catalyst era investment)", headcount: "~400 + partner network", anz: "Sold via certified partner network locally" },
  targetMarket: "SMB to mid-market via consultant/partner channel",
  summary: "Veteran behavioural assessment (PI Behavioral Assessment) wrapped in 'talent optimisation' - hire, design, inspire, diagnose framework. Our closest assessment-philosophy competitor.",
  pricing: "Annual platform subscription by employee count, often US$10-30k+/yr, plus paid partner consulting/certification.",
  features: ["PI Behavioral Assessment (4-factor)", "Cognitive assessment", "Job targets/benchmarks", "Team discovery maps", "Partner consulting ecosystem", "Hiring + management use cases"],
  integrations: ["ATS and HRIS connectors (API)", "Slack", "Single sign-on", "Partner-delivered integrations"],
  fabTheirs: { features: "60+ years of behavioural assessment heritage", advantages: "Trusted, validated, consultant-supported", benefits: "Talent optimisation with proven science" },
  fabOurs: { features: "Modern work personality science embedded in actual hiring, engagement and development workflows", advantages: "PI is an assessment seeking workflows via consultants and integrations; Compono is the workflow with the science built in", benefits: "Insight at the point of decision - no consultant dependency, no integration tax" },
  wins: ["Standalone assessment requiring consultants and ATS integrations to be operational - cost and friction stack up", "4-factor model is simpler/older than modern validated frameworks", "Partner-channel quality varies wildly", "No ATS, no engagement platform, no LMS - data lives beside the work, not in it"],
  losses: ["Six decades of brand trust in assessment", "Consultant relationships create sticky accounts", "Deep assessment-only credibility if that is all the buyer wants"],
  battlecard: "PI validates behavioural science in hiring - excellent, the category sells itself. The wedge is operationalisation: PI gives you a report and a consultant; Compono gives you the insight inside the hiring, engagement and development workflow itself. Ask what PI costs all-in (platform + consultant + the ATS they still need + integration) vs one platform where the science is native. Heritage is not architecture.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "no", us: "yes" }, { label: "Custom / editable survey questions", them: "no", us: "no" }, { label: "eNPS (employee net promoter score)", them: "no", us: "no" }, { label: "Sentiment and trend analytics", them: "partial", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "no", us: "yes" }, { label: "Filter by team, location, demographic", them: "partial", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "no", us: "no" }, { label: "Action planning from results", them: "no", us: "yes" }, { label: "External benchmark library", them: "partial", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "partial", us: "yes" }, { label: "Team work-personality / team design", them: "partial", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "partial", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Six decades of behavioural assessment wrapped in talent optimisation, delivered with consultants.",
    ourAngle: "PI gives you a report and a consultant. We build the insight into the hiring, engagement and development workflow itself.",
    watchOut: "Deep brand trust and sticky consultant relationships. They validate our category - use that."
  },
  landmines: [
    "What does PI cost all-in - platform, consultant, the ATS you still need, and the integration?",
    "How does a four-factor model from the 1950s compare with modern validated frameworks?",
    "Where does the PI data live during an actual hiring decision - in the workflow, or in a PDF?"
  ],
  social: "Strong US content presence, partner-amplified. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "sapia",
  name: "Sapia.ai",
  domain: "sapia.ai",
  category: "engage",
  snapshot: { hq: "Melbourne, Australia", founded: "2013 (as PredictiveHire)", funding: "VC-backed, ~A$24M raised (Macquarie, W23)", headcount: "~60", anz: "ANZ native, strong local enterprise logos" },
  targetMarket: "Enterprise volume hiring - retail, contact centres, airlines, banking",
  summary: "AI chat-interview assessment - candidates complete a structured text chat, AI infers personality/communication traits. ANZ-born, volume-hiring focused.",
  pricing: "Enterprise quote-based, usage/volume linked.",
  features: ["Untimed AI chat interview", "Personality + communication inference from text", "Volume screening automation", "Candidate experience focus", "Bias-reduction positioning", "ATS integrations"],
  integrations: ["ATS connectors (SmartRecruiters, Workday, SAP)", "Seek", "HRIS connectors", "API delivery"],
  fabTheirs: { features: "Interview every applicant via AI chat", advantages: "Fair, scalable, loved by candidates", benefits: "Volume screening without human bottleneck" },
  fabOurs: { features: "Validated psychometric work personality measurement vs AI inference from chat text", advantages: "Direct measurement beats linguistic inference for defensibility - and our insight extends past screening into the whole lifecycle", benefits: "Science you can defend to a board, with value beyond the funnel's top" },
  wins: ["AI-inference-from-text faces growing scrutiny vs direct validated measurement - defensibility argument is ours", "Screening-stage only; no engagement/development continuation", "Volume/frontline niche - weaker for professional roles"],
  losses: ["Outstanding candidate experience story and NPS data", "Strong ANZ enterprise logos in volume hiring", "Genuine automation value at extreme volume"],
  battlecard: "Sapia is impressive at the top of high-volume funnels - acknowledge it. Two wedges: first, method - inferring personality from chat text is contested science vs direct validated psychometric measurement, and HR leaders increasingly need AI decisions they can defend. Second, scope - Sapia's insight evaporates after screening; Compono's work personality data lives on through engagement and development. Measurement vs inference, lifecycle vs funnel.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "no", us: "yes" }, { label: "Custom / editable survey questions", them: "no", us: "no" }, { label: "eNPS (employee net promoter score)", them: "no", us: "no" }, { label: "Sentiment and trend analytics", them: "partial", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "partial", us: "yes" }, { label: "Filter by team, location, demographic", them: "no", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "no", us: "no" }, { label: "Action planning from results", them: "no", us: "yes" }, { label: "External benchmark library", them: "no", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "partial", us: "yes" }, { label: "Team work-personality / team design", them: "no", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "partial", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "AI chat interviews - fair, scalable screening candidates genuinely enjoy.",
    ourAngle: "Inferring personality from chat text is contested science. We measure directly, with validated psychometrics a board can trust.",
    watchOut: "Outstanding candidate experience story and strong ANZ enterprise logos in volume hiring."
  },
  landmines: [
    "Could you defend an AI's text-based personality inference to your board or a regulator?",
    "What happens to the screening insight after the hire - does it help you manage the person?",
    "How does chat inference perform for professional roles, outside high-volume frontline funnels?"
  ],
  social: "Active ANZ presence, AI-ethics-led content. Verify on refresh.",
  recentActivity: [
    { date: "Apr 2026", note: "Launched Ask Sapia.ai, a public chat tool that explains how its AI hiring decisions work - a push for 'glass box' AI." },
    { date: "Feb 2026", note: "Launched Phai, a consumer AI career coach, extending the brand beyond employer-side hiring." }
  ]
}
,
{
  id: "criteria",
  name: "Criteria Corp",
  domain: "criteriacorp.com",
  category: "engage",
  snapshot: { hq: "Los Angeles, USA", founded: "2006", funding: "PE-backed (Sumeru ~US$56M)", headcount: "~200", anz: "Yes - acquired Australian video-interview player Alcami; local presence" },
  targetMarket: "SMB to mid-market, test-led hiring buyers",
  summary: "Pre-employment testing platform - cognitive aptitude (CCAT), personality, emotional intelligence, skills tests plus structured/video interviewing.",
  pricing: "Annual subscription, unlimited-testing tiers by company size (~US$5-15k+/yr typical).",
  features: ["CCAT cognitive aptitude", "Personality and EI tests", "Skills tests library", "Video interviewing (Alcami heritage)", "Score benchmarking", "ATS integrations"],
  integrations: ["ATS connectors (Greenhouse, Lever, JobAdder, SmartRecruiters, Workday)", "HRIS connectors", "Single sign-on", "API"],
  fabTheirs: { features: "Broad validated test library, unlimited use", advantages: "Objective data on every candidate cheaply", benefits: "Better screening decisions at flat cost" },
  fabOurs: { features: "Integrated work personality matching vs a standalone test battery", advantages: "Tests bolted beside an ATS create candidate friction and data silos; our science lives inside the hiring flow and persists into the employee lifecycle", benefits: "One platform, one candidate experience, insight that compounds" },
  wins: ["Standalone tool tax - prospect still needs an ATS, integration, and process glue", "Generic tests scored against generic norms, not modelled against their team and culture", "Hire-moment only - no lifecycle continuation"],
  losses: ["Cheap unlimited-testing economics", "CCAT is a respected cognitive instrument", "Local presence via Alcami acquisition"],
  battlecard: "Criteria sells tests; Compono sells decisions. A test score against a national norm is trivia until it is modelled against the actual role and team - which is what our matching does natively, inside the workflow, without a second vendor and integration. If they want cognitive data points, fine. If they want to know who fits, that is us.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "no", us: "yes" }, { label: "Custom / editable survey questions", them: "no", us: "no" }, { label: "eNPS (employee net promoter score)", them: "no", us: "no" }, { label: "Sentiment and trend analytics", them: "partial", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "no", us: "yes" }, { label: "Filter by team, location, demographic", them: "no", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "no", us: "no" }, { label: "Action planning from results", them: "no", us: "yes" }, { label: "External benchmark library", them: "partial", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "partial", us: "yes" }, { label: "Team work-personality / team design", them: "no", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "partial", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Objective pre-employment testing - cognitive, personality and skills data on every candidate, cheaply.",
    ourAngle: "Criteria sells tests. Compono sells decisions - scores modelled against your role and team, inside the workflow.",
    watchOut: "Cheap unlimited-testing economics and a respected cognitive instrument in CCAT."
  },
  landmines: [
    "A score against a national norm - what does it say about fit to your team specifically?",
    "What does the second vendor, the integration and the process glue cost you?",
    "Does the insight survive past the hire, or end at the offer letter?"
  ],
  social: "Moderate. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "harrison",
  name: "Harrison Assessments",
  domain: "harrisonassessments.com",
  category: "engage",
  snapshot: { hq: "Hong Kong / global partner network", founded: "1990", funding: "Private", headcount: "Partner-distributed model", anz: "Active local consultant/partner network" },
  targetMarket: "Mid-market to enterprise via consultants - talent acquisition and development assessment",
  summary: "Veteran assessment house - 'paradox technology' behavioural assessment used for both selection and development, sold heavily through consulting partners.",
  pricing: "Per-assessment and licence models via partners. Verify current structure on refresh.",
  features: ["SmartQuestionnaire (25 min, 175 factors)", "Paradox-based behavioural model", "Job success formulas", "Development and coaching reports", "Engagement analytics add-ons", "Partner consulting delivery"],
  integrations: ["ATS and HRIS connectors", "Single sign-on", "Partner and consultant delivery", "API"],
  fabTheirs: { features: "Deep paradox-based behavioural measurement for selection and development", advantages: "One assessment, many talent use cases, consultant-guided", benefits: "Rich behavioural depth across the talent lifecycle" },
  fabOurs: { features: "Lifecycle behavioural science delivered as a platform, not a consulting engagement", advantages: "Same lifecycle ambition without per-report economics and consultant dependency - insight is in the workflow your team already runs", benefits: "Scalable, self-serve people insight at platform economics" },
  wins: ["Consultant-mediated delivery = cost, latency and dependency", "Per-assessment economics punish scale", "Assessment reports beside the work vs insight inside the work", "Dated platform experience"],
  losses: ["Genuinely deep assessment instrument respected by practitioners", "Entrenched consultant relationships", "Strong in exec/leadership assessment niches"],
  battlecard: "Harrison's science is credible - the delivery model is the wedge. Reports plus consultants is the 2010 architecture; insight embedded in your hiring, engagement and development workflows is the current one. Ask what each assessment-plus-debrief actually costs at their hiring volume, then compare platform economics where the science is simply part of how work happens.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "partial", us: "yes" }, { label: "Custom / editable survey questions", them: "partial", us: "no" }, { label: "eNPS (employee net promoter score)", them: "no", us: "no" }, { label: "Sentiment and trend analytics", them: "partial", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "no", us: "yes" }, { label: "Filter by team, location, demographic", them: "partial", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "no", us: "no" }, { label: "Action planning from results", them: "partial", us: "yes" }, { label: "External benchmark library", them: "partial", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "partial", us: "yes" }, { label: "Team work-personality / team design", them: "partial", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "partial", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Deep veteran assessment for selection and development, guided by consulting partners.",
    ourAngle: "Reports plus consultants is the 2010 architecture. Insight embedded in the workflow is the current one.",
    watchOut: "Genuinely deep instrument, entrenched consultant relationships, strong in exec assessment."
  },
  landmines: [
    "What does each assessment plus debrief cost at your hiring volume?",
    "How long between assessment and insight reaching the manager who needs it?",
    "What happens when the consultant relationship ends - who owns the capability?"
  ],
  social: "Light, partner-amplified. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "xref-engage",
  name: "Xref Engage",
  domain: "xref.com",
  category: "engage",
  snapshot: { hq: "Sydney, Australia", founded: "2009 (Xref); Engage via Voice Project acquisition (2022)", funding: "ASX-listed", headcount: "~100", anz: "ANZ-born, strong local and public sector presence" },
  targetMarket: "ANZ mid-market, government and education, survey-led",
  summary: "ANZ engagement and culture survey platform (built on the acquired Voice Project), alongside Xref's reference-checking core. Strong validated survey methodology and local benchmarks.",
  pricing: "Per-survey or subscription pricing, plus reference-checking credits. Mid-range, locally contracted.",
  features: ["Engagement and culture surveys", "Validated survey frameworks and benchmarks", "Pulse surveys", "Action planning", "Onboarding and exit surveys", "Reference checking (Xref core)", "ANZ benchmarking data"],
  integrations: ["HRIS connectors", "Single sign-on", "Seek and ATS connectors (reference checking)", "Email and calendar", "Data export and API"],
  fabTheirs: { features: "Validated ANZ engagement surveys with strong local benchmarks", advantages: "Measure engagement and culture against credible local comparators", benefits: "Know how engaged your people feel, backed by good methodology" },
  fabOurs: { features: "Work personality science that explains how people are wired, not just how they feel this quarter", advantages: "Xref Engage measures the weather; Compono explains the climate system", benefits: "Insight you can act on at the individual and team level, not just a trend line" },
  wins: ["Measures sentiment, does not explain the underlying behavioural drivers", "Survey snapshots age - they capture a moment, not how people are built", "No work personality model linking engagement to hiring and development", "Strong on diagnosis-by-survey, silent on what to do with each individual"],
  losses: ["Genuinely validated survey methodology (Voice Project heritage)", "Strong ANZ benchmark data and public sector trust", "Established local incumbent with reference-checking cross-sell"],
  battlecard: "Xref Engage has real survey credibility in ANZ - do not dismiss the methodology. The wedge is measurement versus explanation. A survey tells you engagement dropped; it does not tell you why this team is wired the way it is or what to do about this person. Ask: 'When the score moves, does the tool explain the people behind it?' Compono adds work personality science that explains behaviour, so engagement data becomes action, not just a reading.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "yes", us: "yes" }, { label: "Custom / editable survey questions", them: "yes", us: "no" }, { label: "eNPS (employee net promoter score)", them: "partial", us: "no" }, { label: "Sentiment and trend analytics", them: "yes", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "yes", us: "yes" }, { label: "Filter by team, location, demographic", them: "yes", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "yes", us: "no" }, { label: "Action planning from results", them: "yes", us: "yes" }, { label: "External benchmark library", them: "yes", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Team work-personality / team design", them: "no", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Validated ANZ engagement surveys with credible local benchmarks, from the Voice Project heritage.",
    ourAngle: "Measurement versus explanation. A survey says engagement dropped - we explain the people behind the number.",
    watchOut: "Real survey credibility, strong ANZ benchmarks and public sector trust."
  },
  landmines: [
    "When the score moves, does the tool explain the people behind it?",
    "A snapshot captures a moment - what explains how your people are actually built?",
    "How does the survey data connect to your hiring and development decisions?"
  ],
  social: "Solid ANZ HR and public sector presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "glint",
  name: "Glint (Microsoft Viva Glint)",
  domain: "microsoft.com",
  category: "engage",
  snapshot: { hq: "Redwood City, USA (Microsoft)", founded: "2013, acquired by LinkedIn/Microsoft", funding: "Part of Microsoft", headcount: "Part of Microsoft Viva", anz: "Sold globally via Microsoft, no distinct local team" },
  targetMarket: "Enterprise, Microsoft and LinkedIn ecosystem buyers",
  summary: "Enterprise engagement survey platform, now folded into Microsoft Viva Glint. Real-time engagement measurement with strong analytics and manager dashboards.",
  pricing: "Enterprise subscription, typically bundled or sold alongside Microsoft Viva and 365.",
  features: ["Engagement and pulse surveys", "Real-time people analytics", "Manager action dashboards", "Lifecycle surveys (onboarding, exit)", "AI-driven narrative insights", "Microsoft Viva integration", "Benchmarking"],
  integrations: ["Microsoft 365 and Viva (native)", "Microsoft Teams", "Workday and SAP SuccessFactors", "HRIS connectors", "Single sign-on (Entra ID)"],
  fabTheirs: { features: "Enterprise engagement analytics inside the Microsoft ecosystem", advantages: "Measure engagement at scale where people already work", benefits: "Engagement insight embedded in the Microsoft stack" },
  fabOurs: { features: "Work personality science explaining behaviour across hire, engage and develop", advantages: "Glint measures how the workforce feels; Compono explains how individuals and teams are built", benefits: "Engagement that connects to selection and development, not a standalone score" },
  wins: ["Sentiment measurement at scale, no behavioural explanation layer", "Survey data is a feeling snapshot, not a model of how people work", "Locked to Microsoft ecosystem value", "No link from engagement to hiring or development decisions"],
  losses: ["Microsoft distribution and bundling power", "Strong enterprise analytics and scale", "Native fit for Microsoft-committed organisations"],
  battlecard: "Viva Glint rides Microsoft's distribution - if the prospect is all-in on Microsoft, acknowledge the convenience. The wedge is the same as any survey tool: it measures feeling, it does not explain people. A real-time engagement score is the weather, not the climate. Ask: 'When engagement dips, does Glint tell you how these people are actually wired?' Compono explains behaviour and carries it across hiring and development - one connected people model, not a survey silo.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "yes", us: "yes" }, { label: "Custom / editable survey questions", them: "yes", us: "no" }, { label: "eNPS (employee net promoter score)", them: "partial", us: "no" }, { label: "Sentiment and trend analytics", them: "yes", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "yes", us: "yes" }, { label: "Filter by team, location, demographic", them: "yes", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "yes", us: "no" }, { label: "Action planning from results", them: "yes", us: "yes" }, { label: "External benchmark library", them: "yes", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Team work-personality / team design", them: "no", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Enterprise engagement measurement at scale, riding Microsoft Viva distribution.",
    ourAngle: "A real-time engagement score is the weather, not the climate. We explain behaviour and carry it across the lifecycle.",
    watchOut: "Microsoft bundling power - a natural default for Microsoft-committed organisations."
  },
  landmines: [
    "When engagement dips, does Glint tell you how these people are actually wired?",
    "Does the survey data ever reach a hiring or development decision?",
    "Are you choosing the best tool, or the one already in the bundle?"
  ],
  social: "Amplified by Microsoft Viva marketing. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "wtw",
  name: "WTW (Willis Towers Watson - Employee Experience)",
  domain: "wtwco.com",
  category: "engage",
  snapshot: { hq: "London, UK / global", founded: "Towers Watson heritage, merged 2016", funding: "NASDAQ-listed global advisory", headcount: "40,000+ (firm-wide)", anz: "Global advisory with ANZ offices and consultants" },
  targetMarket: "Large enterprise, consulting-led engagement and rewards",
  summary: "Global advisory firm's employee experience and engagement survey practice. Heavyweight methodology, normative databases and consultant-led insight, often tied to rewards and total-rewards work.",
  pricing: "Consulting-led engagements plus survey platform fees. High cost, project and advisory based.",
  features: ["Enterprise engagement surveys", "Large normative benchmark databases", "Consultant-led analysis", "Total rewards and engagement linkage", "Organisational diagnostics", "Listening strategy advisory", "Global delivery"],
  integrations: ["HRIS connectors", "Survey platform exports", "Single sign-on", "Consultant-delivered data services"],
  fabTheirs: { features: "Heavyweight methodology and global benchmarks, consultant-supported", advantages: "Board-grade engagement diagnostics from a trusted advisory brand", benefits: "Credible, defensible engagement insight for large enterprises" },
  fabOurs: { features: "Embedded work personality science in a software platform, no consultant dependency", advantages: "WTW delivers a study; Compono delivers continuous people intelligence inside the workflow", benefits: "Insight at the point of decision, not a periodic consulting deliverable" },
  wins: ["Consulting-led and periodic - insight arrives as a study, not live in the workflow", "Measures engagement, does not explain individual work personality", "High cost and consultant dependency", "Data sits beside hiring and development, not inside them"],
  losses: ["Deep methodology and unmatched normative benchmark data", "Trusted board-level advisory brand", "Strong linkage to rewards and broader HR strategy"],
  battlecard: "WTW brings genuine methodological weight and board credibility - never belittle it. The wedge is operating model and scope: WTW measures engagement through periodic consultant-led studies, then leaves. It does not explain how each individual is wired or carry that into hiring and development. Ask the all-in question: 'What does the engagement work cost, and how often does the insight actually reach a manager's decision?' Compono is continuous people intelligence built into the platform.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "yes", us: "yes" }, { label: "Custom / editable survey questions", them: "yes", us: "no" }, { label: "eNPS (employee net promoter score)", them: "partial", us: "no" }, { label: "Sentiment and trend analytics", them: "yes", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "yes", us: "yes" }, { label: "Filter by team, location, demographic", them: "yes", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "yes", us: "no" }, { label: "Action planning from results", them: "partial", us: "yes" }, { label: "External benchmark library", them: "yes", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Team work-personality / team design", them: "no", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Board-grade engagement diagnostics from a trusted global advisory brand.",
    ourAngle: "Consultant-led studies arrive, then leave. Compono is continuous people intelligence built into the platform.",
    watchOut: "Deep methodology, unmatched normative data and board-level trust. Never belittle it."
  },
  landmines: [
    "What does the engagement work cost, and how often does the insight reach a manager's decision?",
    "What happens between studies - who is watching the teams then?",
    "Does the diagnostic explain each individual, or describe the organisation in aggregate?"
  ],
  social: "Corporate advisory presence, thought-leadership led. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "quantum-workplace",
  name: "Quantum Workplace",
  domain: "quantumworkplace.com",
  category: "engage",
  snapshot: { hq: "Omaha, USA", founded: "2002", funding: "PE-backed (LLR Partners)", headcount: "~150", anz: "US-centric, sells into ANZ remotely" },
  targetMarket: "US mid-market to enterprise, engagement and performance",
  summary: "Engagement and performance platform best known for powering 'Best Places to Work' programmes. Surveys, goals, recognition and performance in one suite.",
  pricing: "Subscription scaled by employee count. Mid-range, modular.",
  features: ["Engagement and pulse surveys", "Best Places to Work benchmarking", "Goals and performance", "1:1s and feedback", "Recognition", "Manager analytics", "Lifecycle surveys"],
  integrations: ["HRIS connectors (BambooHR, Workday, ADP)", "Slack and Microsoft Teams", "Single sign-on", "Calendar", "Data export and API"],
  fabTheirs: { features: "Engagement, performance and recognition in one suite with strong benchmarks", advantages: "Measure and act on engagement alongside performance in one place", benefits: "A connected engagement and performance picture" },
  fabOurs: { features: "Work personality science explaining how people are built across the lifecycle", advantages: "Quantum measures engagement and tracks performance; Compono explains the people behind both", benefits: "Decisions grounded in behaviour, not just sentiment and goal-tracking" },
  wins: ["Survey and performance tracking measure outputs and feelings, not behavioural drivers", "No validated work personality model", "Benchmark-and-survey worldview we position against", "No link from engagement data to selection science"],
  losses: ["Strong Best Places to Work brand and benchmark data", "Genuinely connected engagement and performance suite", "Established US mid-market presence"],
  battlecard: "Quantum Workplace has a recognisable benchmark brand and a tidy engagement-plus-performance suite. The wedge is measurement versus explanation: surveys capture how people feel, performance modules capture what they did, but neither explains how they are wired. Ask: 'When you see the engagement and performance numbers, what tells you why these people behave the way they do?' Compono adds the work personality layer that turns measurement into understanding.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "yes", us: "yes" }, { label: "Custom / editable survey questions", them: "yes", us: "no" }, { label: "eNPS (employee net promoter score)", them: "yes", us: "no" }, { label: "Sentiment and trend analytics", them: "yes", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "yes", us: "yes" }, { label: "Filter by team, location, demographic", them: "yes", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "yes", us: "no" }, { label: "Action planning from results", them: "yes", us: "yes" }, { label: "External benchmark library", them: "yes", us: "no" }, { label: "Performance reviews and goals", them: "partial", us: "no" }, { label: "Recognition / 1-on-1s", them: "yes", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Team work-personality / team design", them: "no", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Engagement and performance in one suite, with the Best Places to Work benchmark brand.",
    ourAngle: "Surveys capture feelings, performance modules capture outputs - neither explains how people are wired.",
    watchOut: "Recognisable benchmark brand and an established US mid-market presence."
  },
  landmines: [
    "The engagement and performance numbers are in - what explains why people behave this way?",
    "Does a Best Places to Work badge change anything about how your teams actually work?",
    "How does any of this data improve your next hiring decision?"
  ],
  social: "Active US HR content, Best Places to Work amplification. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "perceptyx",
  name: "Perceptyx",
  domain: "perceptyx.com",
  category: "engage",
  snapshot: { hq: "Temecula, USA", founded: "2003", funding: "Growth-equity backed, ~US$80M raised (TCV)", headcount: "~380", anz: "US-centric enterprise, sells into ANZ remotely" },
  targetMarket: "Large enterprise, listening and people analytics",
  summary: "Enterprise employee listening and people analytics platform. Sophisticated survey science, lifecycle listening and advanced analytics for very large organisations.",
  pricing: "Enterprise subscription, high cost, scaled by population and modules.",
  features: ["Continuous employee listening", "Advanced people analytics", "Lifecycle and pulse surveys", "Manager action and coaching tools", "Crowdsourcing and sensing", "Benchmarking", "AI-driven insights"],
  integrations: ["Workday and SAP SuccessFactors", "HRIS connectors", "Microsoft Teams and Slack", "Single sign-on", "Data warehouse and API"],
  fabTheirs: { features: "Sophisticated enterprise listening and analytics", advantages: "Hear the whole workforce continuously with deep analytics", benefits: "Data-rich engagement insight at enterprise scale" },
  fabOurs: { features: "Work personality science that explains behaviour, embedded across hire, engage and develop", advantages: "Perceptyx listens at scale; Compono explains how the people doing the talking are built", benefits: "From listening data to behavioural understanding tied to real decisions" },
  wins: ["Listening and analytics measure sentiment richly, but still measure feeling not behavioural wiring", "No validated work personality matching model", "Enterprise cost and complexity", "Insight sits in an analytics layer, not in hiring and development workflows"],
  losses: ["Genuinely advanced listening and analytics capability", "Strong enterprise references and survey science", "Deep people-analytics expertise"],
  battlecard: "Perceptyx is a serious enterprise listening platform - the analytics are real. The wedge: listening, however sophisticated, is measurement. It tells you what people say and feel, not how they are wired or how to act on each individual. Ask: 'You can hear the whole workforce - but what explains the behaviour underneath the sentiment?' Compono adds work personality science and connects it to hiring and development, so listening leads to decisions.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "yes", us: "yes" }, { label: "Custom / editable survey questions", them: "yes", us: "no" }, { label: "eNPS (employee net promoter score)", them: "yes", us: "no" }, { label: "Sentiment and trend analytics", them: "yes", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "yes", us: "yes" }, { label: "Filter by team, location, demographic", them: "yes", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "yes", us: "no" }, { label: "Action planning from results", them: "yes", us: "yes" }, { label: "External benchmark library", them: "yes", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Team work-personality / team design", them: "no", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Sophisticated enterprise listening and people analytics across the employee lifecycle.",
    ourAngle: "Listening, however sophisticated, is still measurement. We explain the behaviour underneath the sentiment.",
    watchOut: "Genuinely advanced analytics and strong enterprise references."
  },
  landmines: [
    "You can hear the whole workforce - what explains the behaviour underneath the sentiment?",
    "How does the analytics layer reach an individual manager's next decision?",
    "What does enterprise listening cost against the mid-market footprint you need?"
  ],
  social: "Enterprise people-analytics thought leadership. Verify on refresh.",
  recentActivity: [
    { date: "Feb 2026", note: "Acquired Lyceum, an AI-native learning platform, moving beyond listening into acting on engagement data." }
  ]
}
,
{
  id: "joyous",
  name: "Joyous",
  domain: "joyoushq.com",
  category: "engage",
  snapshot: { hq: "Auckland, New Zealand", founded: "2018", funding: "VC-backed, ~NZ$15M raised (Square Peg, AirTree)", headcount: "~50", anz: "ANZ-born (NZ), local presence" },
  targetMarket: "Enterprise and large workforces, conversational feedback",
  summary: "Conversational, continuous feedback platform for large and frontline workforces. Open, transparent feedback at scale rather than traditional scored surveys.",
  pricing: "Enterprise subscription scaled by employee count. Mid to high, contracted.",
  features: ["Conversational continuous feedback", "Open-text at scale", "Frontline and deskless reach", "AI theming of feedback", "Transparent two-way dialogue", "Action tracking", "Manager prompts"],
  integrations: ["HRIS connectors", "Microsoft Teams and Slack", "SMS and email delivery", "Single sign-on", "Data export and API"],
  fabTheirs: { features: "Open, conversational feedback at frontline scale", advantages: "Hear honest, qualitative feedback from everyone, not just survey-takers", benefits: "Rich, candid voice from the whole workforce" },
  fabOurs: { features: "Work personality science explaining how people are built, not just what they say", advantages: "Joyous captures the conversation; Compono explains the people having it", benefits: "Behavioural understanding that informs hiring and development, not just dialogue" },
  wins: ["Captures qualitative sentiment, does not model behavioural drivers", "Feedback is what people choose to say, not how they are wired", "No work personality or selection science", "Conversation-rich, decision-light at the individual level"],
  losses: ["Genuinely strong frontline and deskless reach", "Candid qualitative feedback traditional surveys miss", "Modern conversational approach with ANZ roots"],
  battlecard: "Joyous does something real - honest conversation from frontline workers surveys never reach. Respect that. The wedge is still measurement versus explanation, just qualitative: open feedback tells you what people say in the moment, not how they are built or what each person needs. Ask: 'The conversation is rich - but what explains the behaviour behind it?' Compono adds work personality science that turns voice into understanding tied to decisions.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "yes", us: "yes" }, { label: "Custom / editable survey questions", them: "yes", us: "no" }, { label: "eNPS (employee net promoter score)", them: "no", us: "no" }, { label: "Sentiment and trend analytics", them: "yes", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "yes", us: "yes" }, { label: "Filter by team, location, demographic", them: "yes", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "partial", us: "no" }, { label: "Action planning from results", them: "partial", us: "yes" }, { label: "External benchmark library", them: "no", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "no", us: "yes" }, { label: "Team work-personality / team design", them: "no", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Open conversational feedback at scale - honest voice from frontline workers surveys never reach.",
    ourAngle: "Open feedback tells you what people say in the moment, not how they are built or what each person needs.",
    watchOut: "Genuinely strong frontline reach and candid qualitative feedback, with ANZ roots."
  },
  landmines: [
    "The conversation is rich - but what explains the behaviour behind it?",
    "How do you turn thousands of comments into a decision about one team or one person?",
    "Does the voice data connect to who you hire and how you develop them?"
  ],
  social: "Modern ANZ engagement content. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "shl",
  name: "SHL",
  domain: "shl.com",
  category: "engage",
  snapshot: { hq: "Thames Ditton, UK / global", founded: "1977", funding: "PE-backed (Exponent era)", headcount: "~1,000 + partner network", anz: "Global, with ANZ offices and partner delivery" },
  targetMarket: "Large enterprise, high-volume assessment and talent measurement",
  summary: "One of the largest global assessment houses. Deep catalogue of validated psychometric, cognitive and behavioural assessments, plus talent analytics, sold to enterprise and via consultants.",
  pricing: "Per-assessment credits plus platform and consulting fees. High cost, enterprise-contracted.",
  features: ["Validated psychometric and cognitive assessments", "Personality questionnaires (OPQ)", "Job-focused assessment catalogue", "Talent analytics", "Video interview assessment", "Global norm data", "Consultant and partner delivery"],
  integrations: ["ATS connectors (SmartRecruiters, Workday, SAP SuccessFactors)", "HRIS connectors", "Single sign-on", "API delivery", "Partner-delivered integrations"],
  fabTheirs: { features: "Vast catalogue of deeply validated assessments and global norms", advantages: "Measure capability and personality with world-class psychometric rigour", benefits: "Defensible, scientifically robust talent measurement at scale" },
  fabOurs: { features: "Validated work personality science operationalised inside hiring, engagement and development workflows", advantages: "SHL sells assessments that need an ATS and integration to be useful; Compono is the workflow with the science built in", benefits: "Insight at the point of decision - no credits to count, no integration tax" },
  wins: ["Standalone assessment - still needs an ATS, integration and often a consultant to operationalise", "Per-assessment credit model makes cost scale painfully", "Insight arrives as a report beside the workflow, not inside it", "Breadth and rigour, but no native hiring, engagement or development platform"],
  losses: ["Unmatched depth and validity of assessment catalogue", "Decades of psychometric credibility and global norms", "Trusted enterprise and consultant relationships"],
  battlecard: "SHL is the heavyweight of assessment science - never argue the validity, you will lose and you should not try. The wedge is operationalisation and cost. SHL gives you superb assessments that you then have to wire into an ATS, administer by credits, and often interpret with a consultant. Ask the all-in question: 'What does SHL cost once you add the platform, the credits, the ATS it plugs into, and the integration?' Compono builds validated work personality science into the workflow itself - the science is native, not a report you buy by the unit.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "no", us: "yes" }, { label: "Custom / editable survey questions", them: "no", us: "no" }, { label: "eNPS (employee net promoter score)", them: "no", us: "no" }, { label: "Sentiment and trend analytics", them: "partial", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "no", us: "yes" }, { label: "Filter by team, location, demographic", them: "partial", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "no", us: "no" }, { label: "Action planning from results", them: "no", us: "yes" }, { label: "External benchmark library", them: "partial", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "partial", us: "yes" }, { label: "Team work-personality / team design", them: "partial", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "partial", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "World-class psychometric rigour - the heavyweight global assessment catalogue.",
    ourAngle: "Never argue the validity. Argue the architecture - credits, consultants and integrations versus science native in the workflow.",
    watchOut: "Unmatched assessment depth and decades of credibility. The science is real."
  },
  landmines: [
    "What does SHL cost once you add the platform, the credits, the ATS it plugs into and the integration?",
    "Who interprets the reports, and how long before insight reaches the hiring manager?",
    "Does the assessment data flow into engagement and development, or stop at selection?"
  ],
  social: "Strong global assessment thought leadership. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "aon-assessment",
  name: "Aon Assessment (formerly cut-e)",
  domain: "aon.com",
  category: "engage",
  snapshot: { hq: "Hamburg, Germany / global (Aon)", founded: "cut-e 2002, acquired by Aon", funding: "Part of Aon plc (NYSE-listed)", headcount: "Part of Aon", anz: "Global advisory with ANZ delivery" },
  targetMarket: "Large enterprise, high-volume and graduate assessment",
  summary: "Aon's assessment arm (built on the acquired cut-e). Validated psychometric and cognitive assessments, gamified and adaptive testing, strong in high-volume and graduate hiring.",
  pricing: "Per-assessment and platform fees plus consulting. High cost, enterprise-contracted.",
  features: ["Validated psychometric assessments", "Adaptive and gamified ability tests", "Personality and integrity assessments", "Volume and graduate screening", "Talent analytics", "Global norms", "Consultant-supported delivery"],
  integrations: ["ATS connectors (Workday, SAP SuccessFactors, SmartRecruiters)", "HRIS connectors", "Single sign-on", "API delivery"],
  fabTheirs: { features: "Validated, adaptive, engaging assessments backed by Aon advisory", advantages: "Screen high volumes with rigorous, candidate-friendly science", benefits: "Robust, defensible measurement at graduate and volume scale" },
  fabOurs: { features: "Work personality science operationalised inside the actual hiring and development workflow", advantages: "Aon sells assessments plus advisory; Compono embeds the science where decisions happen", benefits: "Native insight at the point of decision, without the consulting and integration stack" },
  wins: ["Standalone assessment requiring ATS integration and often advisory to operationalise", "Cost stacks across assessments, platform and consulting", "Report-beside-the-workflow model, not embedded science", "No native engagement or development platform"],
  losses: ["Genuinely validated, modern adaptive assessments", "Aon brand weight and advisory backing", "Strong in graduate and high-volume hiring"],
  battlecard: "Aon Assessment pairs real psychometric science with consulting muscle - concede both. The wedge is the same as any assessment house: it is a test you must operationalise, integrate and often interpret with help. Ask: 'What is the all-in cost - assessments, platform, advisory, and the ATS it has to plug into?' Compono operationalises work personality science inside the hiring and development workflow, so the insight is native rather than purchased and bolted on.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "no", us: "yes" }, { label: "Custom / editable survey questions", them: "no", us: "no" }, { label: "eNPS (employee net promoter score)", them: "no", us: "no" }, { label: "Sentiment and trend analytics", them: "partial", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "no", us: "yes" }, { label: "Filter by team, location, demographic", them: "partial", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "no", us: "no" }, { label: "Action planning from results", them: "no", us: "yes" }, { label: "External benchmark library", them: "partial", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "partial", us: "yes" }, { label: "Team work-personality / team design", them: "partial", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "partial", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Rigorous, candidate-friendly assessment at volume, backed by Aon's advisory muscle.",
    ourAngle: "A test you must operationalise, integrate and often interpret with help. Our science is native, not bolted on.",
    watchOut: "Genuinely validated modern assessments, strong in graduate and high-volume hiring."
  },
  landmines: [
    "What is the all-in cost - assessments, platform, advisory, and the ATS it has to plug into?",
    "How much advisory time does it take to turn results into decisions?",
    "What happens to the assessment data after the intake round ends?"
  ],
  social: "Aon-amplified advisory presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "hogan",
  name: "Hogan Assessments",
  domain: "hoganassessments.com",
  category: "engage",
  snapshot: { hq: "Tulsa, USA", founded: "1987", funding: "Privately held", headcount: "~230 + global distributor network", anz: "Sold via certified local distributors and coaches" },
  targetMarket: "Leadership and executive assessment, mid-market to enterprise via consultants",
  summary: "Premier personality assessment for leadership and derailment, grounded in decades of research. Sold through a global network of certified consultants and coaches, heavily used in leadership development and selection.",
  pricing: "Per-report pricing plus required consultant certification and interpretation. High effective cost.",
  features: ["Hogan Personality Inventory (HPI)", "Hogan Development Survey (derailers)", "Motives, Values, Preferences Inventory", "Leadership and executive focus", "Validated research base", "Consultant interpretation", "Coaching and development use"],
  integrations: ["Assessment platform and API", "Distributor and consultant delivery", "HRIS connectors (via partners)", "Single sign-on"],
  fabTheirs: { features: "Gold-standard leadership personality and derailment science", advantages: "Deep, validated insight into leadership strengths and risks", benefits: "Defensible executive selection and development decisions" },
  fabOurs: { features: "Validated work personality science embedded across hiring, engagement and development for the whole workforce", advantages: "Hogan is a consultant-interpreted report for leaders; Compono is operationalised science for everyone, in the workflow", benefits: "People insight at every decision and every level, without per-report consultant dependency" },
  wins: ["Requires certified consultant interpretation - cost and dependency per use", "Leadership-focused, not built for whole-workforce hiring at scale", "Report-and-coach model sits beside the workflow, not inside it", "No native ATS, engagement or development platform"],
  losses: ["Outstanding research pedigree and leadership credibility", "Derailment insight that few rivals match", "Sticky consultant and coaching relationships"],
  battlecard: "Hogan is genuinely revered in leadership assessment - the science is excellent and you should say so. The wedge is scope and operating model: Hogan is a consultant-interpreted report, usually for leaders, priced per use. It does not run your hiring or scale across the whole workforce. Ask: 'What does Hogan cost per person once you include certification and interpretation, and who gets assessed - everyone, or just the executives?' Compono operationalises validated work personality science for the whole workforce, inside the workflow.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "no", us: "yes" }, { label: "Custom / editable survey questions", them: "no", us: "no" }, { label: "eNPS (employee net promoter score)", them: "no", us: "no" }, { label: "Sentiment and trend analytics", them: "no", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "no", us: "yes" }, { label: "Filter by team, location, demographic", them: "no", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "no", us: "no" }, { label: "Action planning from results", them: "no", us: "yes" }, { label: "External benchmark library", them: "partial", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "partial", us: "yes" }, { label: "Team work-personality / team design", them: "partial", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Revered leadership assessment - deep insight into strengths and derailment risks, via certified consultants.",
    ourAngle: "A consultant-interpreted report for leaders, priced per use. We operationalise the science for the whole workforce.",
    watchOut: "Outstanding research pedigree and sticky coaching relationships. Say so."
  },
  landmines: [
    "What does Hogan cost per person once certification and interpretation are included?",
    "Who gets assessed - everyone, or just the executives?",
    "Does the insight run your hiring and development, or sit in a coaching binder?"
  ],
  social: "Strong leadership-assessment and coaching presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "thomas-intl",
  name: "Thomas International",
  domain: "thomas.co",
  category: "engage",
  snapshot: { hq: "Marlow, UK / global", founded: "1981", funding: "Privately held", headcount: "~300 + partner network", anz: "ANZ presence via local office and partners" },
  targetMarket: "SMB to mid-market, behavioural and aptitude assessment",
  summary: "Long-established assessment provider offering behavioural (PPA/DISC-based), aptitude and emotional intelligence assessments. Accessible, widely used in SMB and mid-market hiring and development.",
  pricing: "Subscription or per-assessment plus certification. Mid-range, more accessible than enterprise houses.",
  features: ["Personal Profile Analysis (PPA)", "Aptitude (GIA) assessments", "Emotional intelligence (TEIQue)", "360 feedback", "Team and role comparison tools", "Certification and training", "Recruitment and development use"],
  integrations: ["ATS connectors (Teamtailor and others)", "HRIS connectors", "Single sign-on", "API", "Partner-delivered integrations"],
  fabTheirs: { features: "Accessible, established behavioural and aptitude assessments", advantages: "Get validated assessment into SMB hiring without enterprise complexity", benefits: "Practical people insight at an approachable price" },
  fabOurs: { features: "Work personality science operationalised natively in the hiring, engagement and development workflow", advantages: "Thomas sells assessments to plug in; Compono is the platform with the science already inside", benefits: "Insight at the point of decision across the lifecycle, not a test you administer separately" },
  wins: ["Standalone assessment - still needs an ATS and integration to operationalise", "PPA is DISC-derived, an older model than modern validated frameworks", "Report-and-certify model sits beside the workflow", "No native hiring, engagement or development platform"],
  losses: ["Accessible and trusted in SMB and mid-market", "Long heritage and broad certification base", "Lower barrier to entry than enterprise assessment houses"],
  battlecard: "Thomas International made assessment accessible to smaller organisations - respect the reach and heritage. The wedge: it is still a standalone test you administer and then have to wire into your hiring process, built on a DISC-derived model. Ask: 'Once you have the Thomas report, what carries that insight into the actual hiring decision and beyond into development?' Compono operationalises work personality science inside the lifecycle, so you are not exporting reports into a separate workflow.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "no", us: "yes" }, { label: "Custom / editable survey questions", them: "no", us: "no" }, { label: "eNPS (employee net promoter score)", them: "no", us: "no" }, { label: "Sentiment and trend analytics", them: "partial", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "no", us: "yes" }, { label: "Filter by team, location, demographic", them: "partial", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "no", us: "no" }, { label: "Action planning from results", them: "no", us: "yes" }, { label: "External benchmark library", them: "no", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "partial", us: "yes" }, { label: "Team work-personality / team design", them: "partial", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "partial", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Accessible validated assessment for SMB and mid-market, without enterprise complexity.",
    ourAngle: "Still a standalone test on a DISC-derived model. We build matching science into the lifecycle itself.",
    watchOut: "Trusted heritage and a low barrier to entry in our own segment."
  },
  landmines: [
    "Once you have the Thomas report, what carries that insight into the actual hiring decision?",
    "How does a DISC-derived model compare with modern validated frameworks?",
    "What does the insight do after the hire - anything for engagement or development?"
  ],
  social: "Established SMB-assessment presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "everything-disc",
  name: "Everything DiSC (Wiley)",
  domain: "everythingdisc.com",
  category: "engage",
  snapshot: { hq: "USA (John Wiley & Sons)", founded: "DiSC model 1970s; Everything DiSC by Wiley", funding: "Part of Wiley (NYSE-listed)", headcount: "Part of Wiley", anz: "Sold via authorised partners and facilitators locally" },
  targetMarket: "Team development and training, sold via facilitators",
  summary: "Widely used DiSC-based assessment and facilitation suite for team building, communication and development. Delivered largely through authorised partners and workshops - a development and self-awareness tool, not a selection system.",
  pricing: "Per-profile credits plus partner facilitation and kits. Mid-range per participant.",
  features: ["DiSC personality profiles", "Team and workplace application", "Facilitation kits and workshops", "Communication and conflict tools", "Catalyst learning platform", "Partner-delivered training", "Self-awareness focus"],
  integrations: ["Catalyst platform", "Partner and facilitator delivery", "Single sign-on (Catalyst)", "Limited HRIS connectivity"],
  fabTheirs: { features: "Popular, approachable DiSC profiles for team development", advantages: "Build self-awareness and better communication in teams", benefits: "Teams understand each other and work together better" },
  fabOurs: { features: "Validated work personality science built for selection and development decisions, not just self-awareness", advantages: "DiSC is a development conversation; Compono is decision-grade science inside hiring and development workflows", benefits: "Insight you can act and decide on, not just discuss in a workshop" },
  wins: ["DiSC is a development and self-awareness tool, not validated for selection", "Workshop and facilitation model - insight lives in a session, not the workflow", "Per-profile and facilitation costs add up", "No hiring, engagement or development platform"],
  losses: ["Hugely popular and approachable for team development", "Strong facilitator network and brand familiarity", "Genuinely useful for communication and self-awareness"],
  battlecard: "Everything DiSC is loved for team workshops - and for that purpose it is fine, so do not attack it as bad science for what it is. The wedge is purpose: DiSC is built for self-awareness and development conversations, not for defensible selection decisions. If a prospect is using DiSC to inform hiring, that is a misuse worth gently flagging. Ask: 'Are you using DiSC to build awareness, or to make hiring decisions?' Compono is decision-grade work personality science operationalised across hire and develop.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "no", us: "yes" }, { label: "Custom / editable survey questions", them: "no", us: "no" }, { label: "eNPS (employee net promoter score)", them: "no", us: "no" }, { label: "Sentiment and trend analytics", them: "no", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "no", us: "yes" }, { label: "Filter by team, location, demographic", them: "no", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "no", us: "no" }, { label: "Action planning from results", them: "no", us: "yes" }, { label: "External benchmark library", them: "no", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "partial", us: "yes" }, { label: "Team work-personality / team design", them: "partial", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "DiSC workshops for self-awareness and team communication, via a big facilitator network.",
    ourAngle: "DiSC is a development tool, not validated for selection. If it is informing hires, that is a misuse worth gently flagging.",
    watchOut: "Hugely popular and genuinely useful for communication workshops. Do not attack what it is."
  },
  landmines: [
    "Are you using DiSC to build awareness, or to make hiring decisions?",
    "Would the DiSC profile stand up if a hiring decision were ever challenged?",
    "What happens after the workshop - where does the insight live day to day?"
  ],
  social: "Very broad training-market presence via Wiley. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "gallup-cliftonstrengths",
  name: "Gallup CliftonStrengths",
  domain: "gallup.com",
  category: "engage",
  snapshot: { hq: "Washington DC, USA", founded: "Gallup 1935; CliftonStrengths 2001", funding: "Privately held", headcount: "~1,000s (Gallup overall)", anz: "Sold globally and via certified coaches locally" },
  targetMarket: "Strengths-based development and engagement, all sizes via coaches",
  summary: "Gallup's strengths assessment identifying a person's top talents across 34 themes, paired with Gallup's engagement research (Q12). Strong in strengths-based development and coaching, delivered with a large coach network.",
  pricing: "Per-assessment access codes plus coaching and Gallup advisory. Mid to high with coaching.",
  features: ["CliftonStrengths 34-theme assessment", "Strengths-based development", "Q12 engagement survey", "Manager and team strengths tools", "Coaching network", "Gallup research and benchmarks", "Learning resources"],
  integrations: ["Gallup Access platform", "HRIS connectors (limited)", "Single sign-on", "Coach and partner delivery"],
  fabTheirs: { features: "Strengths assessment plus world-famous engagement research", advantages: "Develop people around their strengths with trusted Gallup science", benefits: "Engaged, strengths-aware teams backed by a global brand" },
  fabOurs: { features: "Validated work personality science built for selection and team-fit decisions across the lifecycle", advantages: "CliftonStrengths is a development and self-awareness tool; Compono is decision-grade science inside hiring, engagement and development", benefits: "Insight that drives defensible decisions, not just strengths conversations" },
  wins: ["Strengths model is built for development and self-awareness, not validated selection", "Insight delivered via coaches and reports, not embedded in workflows", "Engagement (Q12) and strengths are separate from any hiring decision", "No ATS, no native development platform tying it to capability gaps"],
  losses: ["Enormous brand recognition and trust", "Genuinely strong engagement research heritage", "Large, loyal coach and practitioner community"],
  battlecard: "Gallup is a giant and CliftonStrengths has real affection behind it - acknowledge the brand and the engagement research. The wedge is purpose and operating model: strengths is a development tool delivered by coaches, not a validated selection system, and Q12 is a survey beside the workflow. Ask: 'Are you using Gallup to develop people or to make hiring and team decisions?' Compono is decision-grade work personality science operationalised across the lifecycle - and it respects strengths work rather than replacing the coaching.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "yes", us: "yes" }, { label: "Custom / editable survey questions", them: "yes", us: "no" }, { label: "eNPS (employee net promoter score)", them: "partial", us: "no" }, { label: "Sentiment and trend analytics", them: "yes", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "yes", us: "yes" }, { label: "Filter by team, location, demographic", them: "yes", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "no", us: "no" }, { label: "Action planning from results", them: "yes", us: "yes" }, { label: "External benchmark library", them: "yes", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "partial", us: "yes" }, { label: "Team work-personality / team design", them: "partial", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "no", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Strengths-based development on trusted Gallup research, delivered through a huge coach network.",
    ourAngle: "Strengths is a coaching tool beside the workflow. We are decision-grade science across the lifecycle - and we respect the coaching.",
    watchOut: "Enormous brand trust and a loyal practitioner community."
  },
  landmines: [
    "Are you using Gallup to develop people, or to make hiring and team decisions?",
    "How does a strengths report connect to who you hire next?",
    "What does the coach network cost annually against a platform where the science is built in?"
  ],
  social: "Massive global brand and content presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "plum",
  name: "Plum",
  domain: "plum.io",
  category: "engage",
  snapshot: { hq: "Kitchener, Canada", founded: "2012", funding: "Acquired by Phenom (US) in 2026; had raised ~C$19M", headcount: "~40", anz: "North America-centric, sells into ANZ remotely" },
  targetMarket: "Mid-market to enterprise, talent assessment and matching",
  summary: "Modern talent assessment platform measuring psychometric data (personality, problem-solving, social intelligence) and matching people to roles and teams. Acquired by Phenom (US) in 2026 and now part of its talent-intelligence suite. Our closest competitor on philosophy - science operationalised for matching, not just a report.",
  pricing: "Subscription scaled by employee count and use case. Mid to high.",
  features: ["Psychometric talent assessment", "Role and team match scoring", "Hiring and internal mobility use", "Talent and succession insights", "Team fit and culture analytics", "Reskilling and mobility matching", "API-first platform"],
  integrations: ["ATS connectors (Workday, SuccessFactors, Greenhouse)", "HRIS connectors", "Single sign-on", "API delivery"],
  fabTheirs: { features: "Psychometric matching operationalised for hiring and mobility", advantages: "Match people to roles and teams on validated data, not gut feel", benefits: "Better-fit hires and smarter internal moves on objective science" },
  fabOurs: { features: "Validated work personality science native to a full hire, engage and develop platform built for the ANZ mid-market", advantages: "Plum matches and plugs into your ATS; Compono is the hiring, engagement and development workflow with the science built in", benefits: "One connected platform and local presence, not a matching layer you integrate" },
  wins: ["Primarily an assessment and matching layer - still relies on integrating with your ATS and HRIS", "Strong on hiring and mobility matching, lighter as a full engagement and development platform", "North America-centric with no ANZ presence or local support", "Matching science without the surrounding hire-engage-develop workflow we provide natively"],
  losses: ["Genuinely modern, validated matching science - philosophically close to us", "Strong internal mobility and reskilling use cases", "Credible product with good enterprise references"],
  battlecard: "Plum is the rival closest to our own worldview - treat it with respect, not dismissal, because overclaiming against a strong product backfires. We agree on the premise: match people on validated science, not gut feel. The wedge is architecture and locality. Plum is a matching and assessment layer you integrate into your ATS and HRIS; Compono builds the same scientific rigour natively into a connected hire, engage and develop platform, with real ANZ presence and support. Ask: 'Do you want a matching engine to integrate, or the workflow with the science already inside it?'",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "no", us: "yes" }, { label: "Custom / editable survey questions", them: "no", us: "no" }, { label: "eNPS (employee net promoter score)", them: "no", us: "no" }, { label: "Sentiment and trend analytics", them: "partial", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "no", us: "yes" }, { label: "Filter by team, location, demographic", them: "partial", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "no", us: "no" }, { label: "Action planning from results", them: "no", us: "yes" }, { label: "External benchmark library", them: "partial", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "partial", us: "yes" }, { label: "Team work-personality / team design", them: "partial", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "partial", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Modern validated matching - people to roles and teams on psychometric data, now part of Phenom.",
    ourAngle: "We agree on the premise. The difference is architecture and locality - their matching layer integrates into your stack; our science is native in a connected platform, with real ANZ support.",
    watchOut: "Philosophically our closest rival, with credible science. Respect it - overclaiming backfires."
  },
  landmines: [
    "Do you want a matching engine to integrate, or the workflow with the science already inside it?",
    "What does the Phenom acquisition mean for the product's direction and your contract?",
    "Where is the local support when something breaks in an ANZ time zone?"
  ],
  social: "Modern talent-assessment thought leadership. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "saville-assessment",
  name: "Saville Assessment",
  domain: "savilleassessment.com",
  category: "engage",
  snapshot: { hq: "Esher, UK", founded: "2004", funding: "Owned by Tenzing (PE) since 2023; WTW remains preferred partner", headcount: "Part of WTW", anz: "Global with ANZ delivery via WTW and partners" },
  targetMarket: "Mid-market to enterprise, aptitude and personality assessment",
  summary: "Respected assessment house known for Wave personality questionnaires and aptitude tests with strong predictive validity. Owned by private-equity firm Tenzing since 2023 (sold by WTW, which remains a preferred partner). Sold to enterprise and via consultant partners.",
  pricing: "Per-assessment plus platform and certification. High effective cost with partner delivery.",
  features: ["Wave personality questionnaires", "Aptitude and ability assessments", "Strong predictive validity research", "Job and team matching reports", "360 feedback", "Certification and partner delivery", "Talent analytics"],
  integrations: ["ATS connectors", "HRIS connectors", "Single sign-on", "API delivery", "Partner and consultant delivery"],
  fabTheirs: { features: "High-validity Wave assessments backed by WTW", advantages: "Predict performance and potential with strong psychometric rigour", benefits: "Defensible, research-grade talent measurement" },
  fabOurs: { features: "Validated work personality science operationalised inside the hiring, engagement and development workflow", advantages: "Saville sells high-validity reports needing an ATS and certification; Compono builds the science into the workflow", benefits: "Native insight at the point of decision, without the credit-and-consultant stack" },
  wins: ["Standalone assessment requiring ATS integration and certification to operationalise", "PE-owned and consultant-led, with enterprise-level cost", "Report-beside-the-workflow model", "No native hiring, engagement or development platform"],
  losses: ["Excellent predictive validity (Wave heritage)", "WTW backing and enterprise credibility", "Strong research and matching reports"],
  battlecard: "Saville's Wave assessments have real predictive validity - never argue the science. The wedge is operating model and cost: it is a high-quality report you administer, certify and integrate, often with consultant support. Ask the all-in question: 'What does Saville cost once you add certification, the platform, and the ATS it plugs into?' Compono operationalises validated work personality science inside the workflow - the rigour is native, not a unit you purchase and wire in.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "no", us: "yes" }, { label: "Custom / editable survey questions", them: "no", us: "no" }, { label: "eNPS (employee net promoter score)", them: "no", us: "no" }, { label: "Sentiment and trend analytics", them: "partial", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "no", us: "yes" }, { label: "Filter by team, location, demographic", them: "partial", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "no", us: "no" }, { label: "Action planning from results", them: "no", us: "yes" }, { label: "External benchmark library", them: "partial", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "partial", us: "yes" }, { label: "Team work-personality / team design", them: "partial", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "partial", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Wave assessments with strong predictive validity, sold to enterprise and via consultants.",
    ourAngle: "Never argue the science. Argue the operating model - certification, integration and consultants versus rigour native in the workflow.",
    watchOut: "Excellent predictive validity and enterprise credibility, with WTW as a preferred partner."
  },
  landmines: [
    "What does Saville cost once you add certification, the platform and the ATS it plugs into?",
    "What does private-equity ownership mean for pricing and product investment?",
    "Does the Wave data follow the person into engagement and development?"
  ],
  social: "Assessment thought leadership, WTW-amplified. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "mcquaig",
  name: "McQuaig",
  domain: "mcquaig.com",
  category: "engage",
  snapshot: { hq: "Toronto, Canada", founded: "1966", funding: "Privately held (The McQuaig Institute)", headcount: "~50 + partner network", anz: "Sold via local distributors and partners" },
  targetMarket: "SMB to mid-market, behavioural hiring and development",
  summary: "Long-established behavioural assessment for hiring and development. Job-fit focused - define a role's behavioural needs, then assess candidates against it. Delivered with training and partner support.",
  pricing: "Subscription or per-assessment plus certification. Mid-range.",
  features: ["McQuaig Job Survey (role profiling)", "Word Survey behavioural assessment", "Mental agility test", "Job-fit comparison", "Development and coaching reports", "Self-development survey", "Certification and support"],
  integrations: ["ATS connectors", "HRIS connectors", "Single sign-on", "API", "Partner-delivered integrations"],
  fabTheirs: { features: "Job-fit behavioural assessment with role profiling", advantages: "Define the role behaviourally, then match candidates to it", benefits: "More objective hiring than gut feel, at an accessible scale" },
  fabOurs: { features: "Validated work personality science operationalised natively across hire, engage and develop", advantages: "McQuaig is a job-fit assessment to plug in; Compono is the workflow with matching science already inside", benefits: "Insight at the point of decision across the lifecycle, not a separate assessment step" },
  wins: ["Standalone assessment - needs an ATS and integration to operationalise", "Job-fit model is solid but narrower and older than modern validated frameworks", "Report-and-certify delivery sits beside the workflow", "No native hiring, engagement or development platform"],
  losses: ["Long heritage and accessible job-fit approach", "Practical role-profiling methodology", "Trusted in SMB and mid-market hiring"],
  battlecard: "McQuaig has a sensible job-fit philosophy - profile the role, match the person - which we actually agree with. The wedge is operationalisation and breadth: it is a standalone assessment you administer, certify and integrate, focused on the hiring moment. Ask: 'Once the McQuaig report is done, what carries that into the decision and into development afterward?' Compono builds matching science into the whole lifecycle natively, so role-fit insight is not a separate step you have to wire in.",
  fabComparison: {
    groups: [
      { title: "What an engagement platform does", rows: [{ label: "Engagement and pulse surveys", them: "no", us: "yes" }, { label: "Custom / editable survey questions", them: "no", us: "no" }, { label: "eNPS (employee net promoter score)", them: "no", us: "no" }, { label: "Sentiment and trend analytics", them: "partial", us: "yes" }, { label: "Open-text feedback and comment analysis", them: "no", us: "yes" }, { label: "Filter by team, location, demographic", them: "partial", us: "yes" }, { label: "Lifecycle surveys (onboarding, exit)", them: "no", us: "no" }, { label: "Action planning from results", them: "no", us: "yes" }, { label: "External benchmark library", them: "no", us: "no" }, { label: "Performance reviews and goals", them: "no", us: "no" }, { label: "Recognition / 1-on-1s", them: "no", us: "no" }] },
      { title: "What Compono adds (unique value)", rows: [{ label: "Validated culture assessment (12 dimensions)", them: "no", us: "yes" }, { label: "Current vs desired culture gap analysis", them: "no", us: "yes" }, { label: "Subculture analysis", them: "no", us: "yes" }, { label: "Work personality assessment (8 work types)", them: "partial", us: "yes" }, { label: "Team work-personality / team design", them: "partial", us: "yes" }, { label: "Culture data feeds hiring benchmarks", them: "partial", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Job-fit assessment - define the role behaviourally, then match candidates to it.",
    ourAngle: "A philosophy we share, delivered as a standalone report at the hiring moment. We build it into the whole lifecycle natively.",
    watchOut: "Sensible methodology with long heritage and mid-market trust."
  },
  landmines: [
    "Once the McQuaig report is done, what carries that into the decision - and into development afterward?",
    "Who administers, certifies and integrates it, and what does that cost in time?",
    "How does the model compare with modern validated frameworks?"
  ],
  social: "Established SMB-hiring assessment presence. Verify on refresh.",
  recentActivity: []
}
,

/* ============ DEVELOP - LMS / CAPABILITY ============ */
{
  id: "go1",
  name: "Go1",
  domain: "go1.com",
  category: "develop",
  snapshot: { hq: "Brisbane, Australia", founded: "2015", funding: "VC-backed unicorn, ~US$430M raised, ~US$3B valuation", headcount: "~650", anz: "ANZ-born, strong local presence" },
  targetMarket: "Mid-market to enterprise - content aggregation buyers, often via HRIS/LMS partners",
  summary: "Content aggregator, not an LMS - a Netflix-style library of 100k+ courses from many providers, piped into whatever LMS/HRIS the customer runs.",
  pricing: "Per-user content licence, often bundled through HRIS/LMS partner deals.",
  features: ["100k+ aggregated course library", "Single content subscription across providers", "Embeds into LMS/HRIS platforms", "Compliance content depth", "Curation tooling"],
  integrations: ["Cornerstone", "Docebo", "SAP SuccessFactors", "Workday Learning", "Microsoft Teams", "BambooHR", "Most major LMS and HRIS"],
  fabTheirs: { features: "All the content, one subscription", advantages: "Stop buying courses vendor by vendor", benefits: "Complete content coverage cheaply" },
  fabOurs: { features: "Capability intelligence - knowing WHAT each person needs, not just owning a big library", advantages: "Content abundance without need diagnosis is a bigger haystack; Compono Develop targets the gap first", benefits: "Development that closes actual capability gaps, not completion theatre" },
  wins: ["Content without diagnosis - no model of what each person actually needs", "Not an LMS - still needs a delivery platform", "Completion-tracking world view we explicitly position against"],
  losses: ["Unbeatable content breadth at the price", "Often complementary, not competitive - can sit inside a deal", "ANZ hero brand"],
  battlecard: "Go1 is frequently a partner-shaped object, not an enemy - they sell the haystack, we find the needle. If positioned competitively, the line is simple: 100,000 courses does not answer the only question that matters - what does THIS person need next? Compono Develop starts from capability gaps grounded in work personality and role data. Diagnosis before prescription.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "partial", us: "yes" }, { label: "Course authoring built in", them: "no", us: "yes" }, { label: "Off-the-shelf content library", them: "yes", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "partial", us: "yes" }, { label: "xAPI support", them: "no", us: "no" }, { label: "Assessments and quizzes", them: "partial", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "no", us: "yes" }, { label: "Group / cohort management", them: "no", us: "yes" }, { label: "Completion tracking and reporting", them: "partial", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "no", us: "yes" }, { label: "Native mobile app + offline", them: "yes", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "no", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "partial", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "One subscription, 100,000-plus courses - stop buying content vendor by vendor.",
    ourAngle: "They sell the haystack. We find the needle - diagnosing what THIS person needs before any content is prescribed.",
    watchOut: "Unbeatable content breadth and an ANZ hero brand. Often complementary, not competitive."
  },
  landmines: [
    "Out of 100,000 courses, what tells you the right one for this person?",
    "Where does the library get delivered - you still need a platform, so what does that add?",
    "How much of last year's content spend changed anyone's actual capability?"
  ],
  social: "Strong ANZ tech brand presence. Verify on refresh.",
  recentActivity: [
    { date: "Feb 2026", note: "Launched Go1 Pay, letting HR fund manager-led development beyond eLearning." },
    { date: "Jan 2026", note: "Announced a new product direction built on in-the-flow-of-work learning, led by its AI agent Morgan inside Slack and Teams." }
  ]
}
,
{
  id: "cornerstone",
  name: "Cornerstone OnDemand",
  domain: "cornerstoneondemand.com",
  category: "develop",
  snapshot: { hq: "Santa Monica, USA", founded: "1999", funding: "PE-owned (Clearlake, ~US$5.2B take-private)", headcount: "~3,000", anz: "Enterprise presence locally" },
  targetMarket: "Large enterprise talent/learning suites",
  summary: "The legacy enterprise LMS giant - learning, performance, content and talent modules at maximum scale and maximum weight.",
  pricing: "Enterprise per-user annual contracts, expensive, long implementations.",
  features: ["Enterprise LMS", "Compliance at scale", "Content marketplace", "Skills graph/AI (Galaxy)", "Performance and succession modules", "Extended enterprise training"],
  integrations: ["Workday and SAP HRIS", "ADP", "Go1 and content providers", "Microsoft Teams", "Zoom", "Single sign-on"],
  fabTheirs: { features: "Everything learning at enterprise scale", advantages: "One vendor for the entire learning estate", benefits: "Governed, compliant, global L&D" },
  fabOurs: { features: "Right-sized capability development tied to people science", advantages: "No 9-month implementation; insight-led not catalogue-led", benefits: "Time to value in weeks, development tied to actual needs" },
  wins: ["Legendary implementation weight and admin burden", "Completion-and-compliance DNA - the exact world view we challenge", "Massively over-scoped for mid-market"],
  losses: ["Enterprise compliance depth genuinely unmatched", "Procurement-safe incumbent for 10,000+ seat estates"],
  battlecard: "Cornerstone in a mid-market deal means someone copied an enterprise RFP. Concede enterprise compliance scale, then contrast: their model tracks what people completed; ours diagnoses what people need. Ask how long their last LMS implementation took and what changed in actual capability afterwards.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "yes", us: "yes" }, { label: "Course authoring built in", them: "yes", us: "yes" }, { label: "Off-the-shelf content library", them: "yes", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "yes", us: "yes" }, { label: "xAPI support", them: "yes", us: "no" }, { label: "Assessments and quizzes", them: "yes", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "yes", us: "yes" }, { label: "Group / cohort management", them: "yes", us: "yes" }, { label: "Completion tracking and reporting", them: "yes", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "yes", us: "yes" }, { label: "Native mobile app + offline", them: "yes", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "yes", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "yes", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "The enterprise learning estate on one vendor - compliance depth at maximum scale.",
    ourAngle: "Their model tracks what people completed. Ours diagnoses what people need.",
    watchOut: "Enterprise compliance depth is genuinely unmatched. In mid-market, their weight is our friend."
  },
  landmines: [
    "How long did the last LMS implementation take, and what changed in actual capability afterwards?",
    "How much admin resource does the platform consume just to run?",
    "Completion hit 100 per cent - so why do the capability gaps remain?"
  ],
  social: "Large corporate presence. Verify on refresh.",
  recentActivity: [
    { date: "May 2026", note: "Launched Cornerstone Workforce AI, repositioning the platform around workforce readiness, skills intelligence and AI agents." },
    { date: "Mar 2026", note: "Released an Adaptive Learning Agent and AI Course Assistant in its spring release." }
  ]
}
,
{
  id: "docebo",
  name: "Docebo",
  domain: "docebo.com",
  category: "develop",
  snapshot: { hq: "Toronto, Canada (Italian-founded)", founded: "2005", funding: "Public (NASDAQ: DCBO)", headcount: "~900", anz: "Growing local enterprise presence" },
  targetMarket: "Mid-market to enterprise, internal + external (customer/partner) training",
  summary: "Modern AI-positioned LMS - strong in external/extended enterprise training, content marketplace, and AI-generated learning.",
  pricing: "Quote-based per active user, mid-premium tier.",
  features: ["AI-powered LMS (Docebo Learn)", "External/customer training strength", "Content marketplace", "Learning analytics", "Shape (AI content generation)", "E-commerce for courses"],
  integrations: ["Go1 and content providers", "BambooHR", "Workday", "Salesforce", "Microsoft Teams", "Zoom", "Single sign-on"],
  fabTheirs: { features: "AI-native LMS for internal and external audiences", advantages: "One platform for employee, customer and partner learning", benefits: "Modern learning operations with AI leverage" },
  fabOurs: { features: "Capability development driven by who people are, not just AI-assembled content", advantages: "Their AI accelerates content production; our science targets content need", benefits: "Less learning noise, more capability movement" },
  wins: ["AI content generation without need diagnosis just produces more content faster", "External-training strength is irrelevant to internal capability deals", "Still fundamentally completion-paradigm"],
  losses: ["Strong product and AI story momentum", "If extended enterprise (customer training) is in scope, they are genuinely strong"],
  battlecard: "Docebo's AI makes content faster; it does not make development smarter. Faster production of generic learning is the haystack problem with a turbocharger. Compono Develop starts from the person - work personality, role, capability gap - and prescribes accordingly. If the deal includes customer/partner training, qualify carefully; that is their turf, not ours.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "yes", us: "yes" }, { label: "Course authoring built in", them: "yes", us: "yes" }, { label: "Off-the-shelf content library", them: "yes", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "yes", us: "yes" }, { label: "xAPI support", them: "yes", us: "no" }, { label: "Assessments and quizzes", them: "yes", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "yes", us: "yes" }, { label: "Group / cohort management", them: "yes", us: "yes" }, { label: "Completion tracking and reporting", them: "yes", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "yes", us: "yes" }, { label: "Native mobile app + offline", them: "yes", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "yes", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "yes", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "AI-powered LMS - one platform for employee, customer and partner learning.",
    ourAngle: "AI content generation without need diagnosis just produces more content faster. We start from the person.",
    watchOut: "Strong AI story and momentum. If customer or partner training is in scope, that is genuinely their turf."
  },
  landmines: [
    "The AI makes content faster - what tells it which person needs what?",
    "Is your problem making learning, or aiming it?",
    "How much of the platform is built for external training you will not use?"
  ],
  social: "Active, AI-narrative-led. Verify on refresh.",
  recentActivity: [
    { date: "Feb 2026", note: "Acquired 365Talents, a skills intelligence platform, to link skills data with learning and workforce decisions." }
  ]
}
,
{
  id: "talentlms",
  name: "TalentLMS",
  domain: "talentlms.com",
  category: "develop",
  snapshot: { hq: "San Francisco, USA (Epignosis)", founded: "2012", funding: "Private/PE-backed (Insight Partners)", headcount: "~300 (Epignosis)", anz: "Self-serve global, no local presence" },
  targetMarket: "SMB, self-serve, budget LMS buyers",
  summary: "The leading budget self-serve LMS - quick setup, course authoring, gamification. Volume SMB play from Epignosis.",
  pricing: "Transparent tiers from free up to ~US$500+/mo. Self-serve.",
  features: ["Fast course authoring", "Gamification", "Free tier", "Marketplace content (TalentLibrary)", "Mobile learning", "Simple reporting"],
  integrations: ["BambooHR", "Salesforce", "Zoom", "Shopify", "Zapier", "Single sign-on"],
  fabTheirs: { features: "An LMS live in an afternoon", advantages: "No procurement, no implementation, tiny cost", benefits: "Training organised today" },
  fabOurs: { features: "Capability platform vs course container", advantages: "Hosting courses is solved; knowing what each person needs is not - we solve the unsolved part", benefits: "Development outcomes, not course completions" },
  wins: ["Pure delivery container - zero intelligence about needs", "SMB depth ceiling hit fast", "No people data of any kind"],
  losses: ["Price and setup speed unbeatable at the low end", "Rarely competes in qualified mid-market deals"],
  battlecard: "If TalentLMS satisfies the prospect, their need is course hosting, not capability development - possibly a qualification signal. The honest contrast: TalentLMS stores training; Compono Develop directs it. Different jobs.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "yes", us: "yes" }, { label: "Course authoring built in", them: "yes", us: "yes" }, { label: "Off-the-shelf content library", them: "yes", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "yes", us: "yes" }, { label: "xAPI support", them: "yes", us: "no" }, { label: "Assessments and quizzes", them: "yes", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "partial", us: "yes" }, { label: "Group / cohort management", them: "yes", us: "yes" }, { label: "Completion tracking and reporting", them: "yes", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "yes", us: "yes" }, { label: "Native mobile app + offline", them: "yes", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "partial", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "partial", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "The budget self-serve LMS - quick setup, tiny cost, no procurement.",
    ourAngle: "TalentLMS stores training. Compono Develop directs it. Different jobs.",
    watchOut: "Price and setup speed are unbeatable at the low end. Rarely meets us in qualified deals."
  },
  landmines: [
    "Is the need course hosting, or capability development?",
    "What happens when you outgrow the depth ceiling?",
    "What does the platform know about your people beyond their login?"
  ],
  social: "Moderate SMB content. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "litmos",
  name: "Litmos",
  domain: "litmos.com",
  category: "develop",
  snapshot: { hq: "San Ramon, USA", founded: "2007 (ex-SAP Litmos, now Francisco Partners)", funding: "PE-owned", headcount: "~300", anz: "NZ-founded heritage, some local base" },
  targetMarket: "Mid-market, compliance and customer training",
  summary: "Established mid-market LMS with strong compliance content library - post-SAP era under PE ownership.",
  pricing: "Quote-based per user, mid-tier.",
  features: ["LMS core", "Large off-the-shelf compliance library", "Customer training", "Integrations (Salesforce etc.)", "AI assistant features"],
  integrations: ["Salesforce", "BambooHR", "Zoom", "Go1 and content providers", "Single sign-on", "Zapier"],
  fabTheirs: { features: "LMS plus ready-made compliance content", advantages: "Tick compliance boxes fast", benefits: "Low-effort training coverage" },
  fabOurs: { features: "Development intelligence beyond compliance box-ticking", advantages: "Compliance is table stakes; capability movement is the game", benefits: "Develop people, not just satisfy auditors" },
  wins: ["Compliance-content DNA equals completion paradigm", "Post-acquisition drift questions", "No people insight layer"],
  losses: ["Compliance library is genuinely convenient", "Established mid-market base"],
  battlecard: "Litmos sells audit safety. If that is the whole need, fine - but ask the prospect what changed in actual team capability after last year's completions hit 100%. Silence is our opening. Compono Develop is for organisations who want development to mean something.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "yes", us: "yes" }, { label: "Course authoring built in", them: "yes", us: "yes" }, { label: "Off-the-shelf content library", them: "yes", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "yes", us: "yes" }, { label: "xAPI support", them: "yes", us: "no" }, { label: "Assessments and quizzes", them: "yes", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "yes", us: "yes" }, { label: "Group / cohort management", them: "yes", us: "yes" }, { label: "Completion tracking and reporting", them: "yes", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "yes", us: "yes" }, { label: "Native mobile app + offline", them: "yes", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "partial", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "yes", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Tick compliance boxes fast, with a convenient built-in content library.",
    ourAngle: "Audit safety is fine - but ask what changed in team capability after completions hit 100 per cent.",
    watchOut: "The compliance library is genuinely convenient, with an established mid-market base."
  },
  landmines: [
    "After last year's completions hit 100 per cent, what changed in actual team capability?",
    "What has product investment looked like since the ownership changes?",
    "Is compliance the whole need, or the easy part of it?"
  ],
  social: "Light-moderate. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "learnupon",
  name: "LearnUpon",
  domain: "learnupon.com",
  category: "develop",
  snapshot: { hq: "Dublin, Ireland", founded: "2012", funding: "PE-backed (Summit Partners US$56M)", headcount: "~300", anz: "Sydney office - real local presence" },
  targetMarket: "Mid-market, multi-audience training (employee + customer + partner)",
  summary: "Clean multi-portal LMS - one platform serving employee, customer and partner training audiences. Strong support reputation.",
  pricing: "Quote-based annual tiers by active users, mid-tier.",
  features: ["Multi-portal architecture", "Employee + customer + partner training", "Course authoring", "Integrations", "Strong support reputation", "Reporting"],
  integrations: ["Salesforce", "BambooHR", "Zoom", "Microsoft Teams", "Go1 and content providers", "Single sign-on"],
  fabTheirs: { features: "Multiple training audiences, one LMS", advantages: "Consolidate internal and external training", benefits: "Operational simplicity across audiences" },
  fabOurs: { features: "Internal capability intelligence vs multi-audience delivery", advantages: "They optimise delivery breadth; we optimise development relevance", benefits: "The right development for each person, not the same portal for everyone" },
  wins: ["Delivery-focused, no diagnosis layer", "Multi-audience strength irrelevant in internal-only deals", "Completion paradigm"],
  losses: ["Genuine local presence (Sydney)", "Well-liked support", "Strong if customer training is in scope"],
  battlecard: "LearnUpon runs clean training operations - if the prospect's problem is operational (portals, audiences, admin), they are credible. If the problem is 'our people are not developing the capabilities we need', no portal architecture answers that. Compono Develop does - by knowing the person before prescribing the path.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "yes", us: "yes" }, { label: "Course authoring built in", them: "yes", us: "yes" }, { label: "Off-the-shelf content library", them: "yes", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "yes", us: "yes" }, { label: "xAPI support", them: "yes", us: "no" }, { label: "Assessments and quizzes", them: "yes", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "yes", us: "yes" }, { label: "Group / cohort management", them: "yes", us: "yes" }, { label: "Completion tracking and reporting", them: "yes", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "yes", us: "yes" }, { label: "Native mobile app + offline", them: "yes", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "partial", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "yes", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Clean multi-portal LMS for employee, customer and partner training, with well-liked support.",
    ourAngle: "Portal architecture solves operations. It does not answer why your people are not developing the capabilities you need.",
    watchOut: "Genuine local presence in Sydney and strong support reputation."
  },
  landmines: [
    "Is your problem training operations, or capability outcomes?",
    "How does the platform know what any individual actually needs?",
    "Which portals matter if the internal capability problem stays unsolved?"
  ],
  social: "Moderate. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "360learning",
  name: "360Learning",
  domain: "360learning.com",
  category: "develop",
  snapshot: { hq: "Paris, France", founded: "2013", funding: "VC-backed, ~US$240M raised", headcount: "~400", anz: "Remote sales only" },
  targetMarket: "Mid-market to enterprise, L&D teams bought into collaborative learning",
  summary: "Collaborative learning platform - internal experts author courses, peers co-build knowledge. 'Learning from your own people' philosophy.",
  pricing: "Per registered user per month (~US$8 pepm entry) plus platform tiers.",
  features: ["Collaborative course authoring", "Subject-expert-led content", "Reactions/co-editing", "AI authoring assists", "Academies", "Skills features"],
  integrations: ["BambooHR", "Workday", "Microsoft Teams", "Slack", "Go1 and content providers", "Single sign-on"],
  fabTheirs: { features: "Turn internal experts into course creators", advantages: "Relevant institutional knowledge beats generic libraries", benefits: "Learning culture powered by your own people" },
  fabOurs: { features: "Knowing who needs what, before deciding who teaches it", advantages: "Collaborative authoring still needs a needs-model; peer content without diagnosis is well-meaning noise", benefits: "Collaboration aimed at actual capability gaps" },
  wins: ["Authoring philosophy without need diagnosis", "Depends heavily on internal authoring energy - fades after launch enthusiasm", "No people science layer"],
  losses: ["Compelling philosophy for L&D believers", "Good product experience"],
  battlecard: "360Learning answers 'who creates content' - internal experts, nice. It does not answer 'what does each person need' - which is the prior question. Compono Develop sequences it correctly: diagnose the capability gap from real people data, then source content (theirs, ours, anyone's). Philosophy second, diagnosis first.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "yes", us: "yes" }, { label: "Course authoring built in", them: "yes", us: "yes" }, { label: "Off-the-shelf content library", them: "yes", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "yes", us: "yes" }, { label: "xAPI support", them: "yes", us: "no" }, { label: "Assessments and quizzes", them: "yes", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "partial", us: "yes" }, { label: "Group / cohort management", them: "yes", us: "yes" }, { label: "Completion tracking and reporting", them: "yes", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "partial", us: "yes" }, { label: "Native mobile app + offline", them: "yes", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "yes", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "yes", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Collaborative learning - your own experts author courses, peers co-build knowledge.",
    ourAngle: "They answer who creates content. We answer the prior question - what does each person need.",
    watchOut: "Compelling philosophy for L&D believers, with a good product experience."
  },
  landmines: [
    "Before anyone authors anything - what tells you what each person needs?",
    "What happens when the internal authoring energy fades after launch?",
    "Relevant content, but aimed at whom, and why them?"
  ],
  social: "Active, philosophy-led content. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "acorn-plms",
  name: "Acorn PLMS",
  domain: "acornlms.com",
  category: "develop",
  snapshot: { hq: "Australia", founded: "Australian-founded (2010s)", funding: "Privately held", headcount: "~100", anz: "ANZ-born, strong local and government presence" },
  targetMarket: "ANZ mid-market, government and enterprise, performance-led learning",
  summary: "ANZ performance learning management system (PLMS) linking learning to capability frameworks and performance. Strong in government and compliance-heavy sectors with local support.",
  pricing: "Subscription scaled by users. Mid-range, locally contracted.",
  features: ["Performance LMS", "Capability and competency frameworks", "Compliance and mandatory training", "Learning pathways", "AI content assistance", "Reporting and analytics", "ANZ government focus"],
  integrations: ["HRIS connectors", "Single sign-on", "Content providers (Go1 and others)", "Microsoft Teams", "Payroll connectors", "API"],
  fabTheirs: { features: "LMS tied to capability frameworks and performance", advantages: "Connect learning to defined capabilities and compliance", benefits: "Structured, compliant development aligned to frameworks" },
  fabOurs: { features: "Capability diagnosis grounded in work personality and role data, not just framework mapping", advantages: "Acorn delivers and tracks learning against frameworks; Compono diagnoses what THIS person actually needs first", benefits: "Development that closes real capability gaps, not completion against a generic framework" },
  wins: ["Framework mapping and tracking, but no behavioural model of individual need", "Compliance and completion worldview we explicitly position against", "Learning delivery without work personality based diagnosis", "Often complementary - can sit beneath Compono's intelligence layer"],
  losses: ["Genuine ANZ and government credibility", "Strong capability-framework and compliance depth", "Trusted local incumbent with good support"],
  battlecard: "Acorn is a credible ANZ PLMS, especially in government - respect the local and compliance strength. The wedge is diagnosis versus delivery: Acorn maps learning to frameworks and tracks completion, but a framework is generic and completion is not capability. Ask: 'How does Acorn know what THIS person needs, beyond their role's framework?' Compono diagnoses individual capability gaps from work personality and role data - and can sit above an LMS rather than fighting it.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "yes", us: "yes" }, { label: "Course authoring built in", them: "yes", us: "yes" }, { label: "Off-the-shelf content library", them: "yes", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "yes", us: "yes" }, { label: "xAPI support", them: "yes", us: "no" }, { label: "Assessments and quizzes", them: "yes", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "yes", us: "yes" }, { label: "Group / cohort management", them: "yes", us: "yes" }, { label: "Completion tracking and reporting", them: "yes", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "partial", us: "yes" }, { label: "Native mobile app + offline", them: "partial", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "partial", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "partial", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "ANZ performance learning platform - learning mapped to capability frameworks and compliance.",
    ourAngle: "A framework is generic and completion is not capability. We diagnose the individual - and can sit above an LMS rather than fight it.",
    watchOut: "Genuine ANZ government credibility and compliance depth."
  },
  landmines: [
    "How does Acorn know what THIS person needs, beyond their role's framework?",
    "Does mapping learning to a framework change what anyone can actually do?",
    "What individual data drives the assignments - role title, or how the person works?"
  ],
  social: "Solid ANZ government and L&D presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "tribal-habits",
  name: "Tribal Habits",
  domain: "tribalhabits.com",
  category: "develop",
  snapshot: { hq: "Melbourne, Australia", founded: "2015", funding: "Privately held", headcount: "~20", anz: "ANZ-born, local presence" },
  targetMarket: "ANZ SMB to mid-market, content-creation-led learning",
  summary: "ANZ learning platform combining an LMS with strong built-in authoring and a ready-made content library. Known for making it easy to create engaging training quickly.",
  pricing: "Per-user subscription, transparent tiers. Accessible mid-range.",
  features: ["LMS and content authoring", "Ready-made course library", "Interactive course builder", "Compliance and onboarding training", "Reporting", "Knowledge checks", "ANZ support"],
  integrations: ["HRIS connectors", "Single sign-on", "Microsoft Teams", "Zapier", "API"],
  fabTheirs: { features: "Easy authoring plus a built-in content library", advantages: "Create and deliver engaging training fast, without an instructional designer", benefits: "Good training live quickly at an accessible price" },
  fabOurs: { features: "Capability diagnosis - knowing what each person needs before building or assigning content", advantages: "Tribal Habits makes content easy to create; Compono works out what should be created and for whom", benefits: "Development targeted at real gaps, not just easy-to-make courses" },
  wins: ["Authoring and delivery strength, but no diagnosis of individual capability need", "Completion-tracking worldview we position against", "No work personality model linking development to role and fit", "Often complementary as a content and delivery layer"],
  losses: ["Genuinely strong, easy authoring", "Good value for ANZ SMBs", "Engaging content with low setup effort"],
  battlecard: "Tribal Habits is great at making training easy to build - a real strength, not a weakness. The wedge is diagnosis: easy authoring answers 'how do we make a course?' not 'what does this person actually need?' Ask: 'How do you decide what to build and who to assign it to?' Compono diagnoses capability gaps from work personality and role data, so the content - whoever authors it - is aimed at the right people. Often a partner, not a rival.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "yes", us: "yes" }, { label: "Course authoring built in", them: "yes", us: "yes" }, { label: "Off-the-shelf content library", them: "yes", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "yes", us: "yes" }, { label: "xAPI support", them: "partial", us: "no" }, { label: "Assessments and quizzes", them: "yes", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "yes", us: "yes" }, { label: "Group / cohort management", them: "yes", us: "yes" }, { label: "Completion tracking and reporting", them: "yes", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "no", us: "yes" }, { label: "Native mobile app + offline", them: "partial", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "partial", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "partial", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Build engaging training fast, without an instructional designer - authoring plus delivery in one.",
    ourAngle: "Easy authoring answers how to make a course, not what this person needs. Often a partner - they make content, we aim it.",
    watchOut: "Genuinely strong authoring and good ANZ SMB value."
  },
  landmines: [
    "How do you decide what to build and who to assign it to?",
    "Engaging content - but is it closing anyone's specific gap?",
    "What people data sits behind the assignments?"
  ],
  social: "Active ANZ L&D content. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "howtoo",
  name: "HowToo",
  domain: "howtoo.co",
  category: "develop",
  snapshot: { hq: "Sydney, Australia", founded: "2019", funding: "VC-backed", headcount: "~30", anz: "ANZ-born, local presence" },
  targetMarket: "ANZ mid-market, authoring and microlearning led",
  summary: "ANZ content authoring and microlearning platform focused on fast, accessible, well-designed course creation with built-in instructional and accessibility best practice.",
  pricing: "Subscription by authors and learners. Mid-range.",
  features: ["Rapid course authoring", "Microlearning and templates", "Accessibility built in", "Content library", "SCORM export", "Analytics", "Collaboration tools"],
  integrations: ["LMS connectors (SCORM/xAPI)", "HRIS connectors", "Single sign-on", "Microsoft Teams", "API"],
  fabTheirs: { features: "Beautiful, accessible authoring and microlearning", advantages: "Create professional, inclusive learning content fast", benefits: "High-quality training without design specialists" },
  fabOurs: { features: "Capability diagnosis identifying what each person needs before any content is built", advantages: "HowToo perfects content creation; Compono identifies the gap the content should close", benefits: "Development aimed at real needs, not just well-made courses" },
  wins: ["Authoring excellence, but no diagnosis of who needs what", "Content creation tool, not a capability intelligence layer", "Completion and content worldview we position against", "Frequently complementary rather than competitive"],
  losses: ["Excellent design and accessibility focus", "Strong, modern authoring experience", "ANZ-built with good local traction"],
  battlecard: "HowToo makes genuinely beautiful, accessible content - concede that fully. The wedge: design quality is about how content looks and works, not whether it targets the right need for the right person. Ask: 'Once the content is gorgeous, how do you know who actually needs it?' Compono diagnoses capability gaps from work personality and role data. HowToo and Compono can coexist - they make the content, we aim it.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "partial", us: "yes" }, { label: "Course authoring built in", them: "yes", us: "yes" }, { label: "Off-the-shelf content library", them: "yes", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "yes", us: "yes" }, { label: "xAPI support", them: "partial", us: "no" }, { label: "Assessments and quizzes", them: "yes", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "partial", us: "yes" }, { label: "Blended / instructor-led training", them: "no", us: "yes" }, { label: "Group / cohort management", them: "partial", us: "yes" }, { label: "Completion tracking and reporting", them: "yes", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "no", us: "yes" }, { label: "Native mobile app + offline", them: "partial", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "partial", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "no", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Fast, beautiful, accessible course creation with instructional best practice built in.",
    ourAngle: "Design quality is how content looks, not whether it targets the right need. They make it, we aim it - often coexisting.",
    watchOut: "Excellent design and accessibility focus with good ANZ traction."
  },
  landmines: [
    "Once the content is gorgeous, how do you know who actually needs it?",
    "What diagnoses the gap the course is meant to close?",
    "Is the spend going to better content, or better-targeted content?"
  ],
  social: "Design-led ANZ L&D presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "thrive",
  name: "Thrive (Thrive Learning)",
  domain: "thrivelearning.com",
  category: "develop",
  snapshot: { hq: "Manchester, UK", founded: "2010s", funding: "VC/PE-backed", headcount: "~200", anz: "UK-centric, sells into ANZ remotely" },
  targetMarket: "Mid-market to enterprise, learning experience and content",
  summary: "Learning experience platform (LXP) and LMS hybrid combining content, social learning and a large content marketplace. Modern, engagement-focused learning at scale.",
  pricing: "Subscription scaled by users plus content. Mid to high.",
  features: ["LXP and LMS hybrid", "Content marketplace", "Social and peer learning", "Campaigns and pathways", "Skills features", "Authoring", "Analytics"],
  integrations: ["HRIS connectors (Workday, SAP, HiBob)", "Single sign-on", "Content providers", "Microsoft Teams", "API"],
  fabTheirs: { features: "Engaging LXP with content marketplace and social learning", advantages: "Drive a culture of self-directed learning at scale", benefits: "Higher engagement and broad content access" },
  fabOurs: { features: "Capability diagnosis grounded in work personality and role, not engagement-for-its-own-sake", advantages: "Thrive maximises learning engagement and content access; Compono targets the specific gaps that matter", benefits: "Development that closes real gaps, not just busy, engaged learners" },
  wins: ["Engagement and content breadth, but no diagnosis of individual need", "Self-directed model risks activity without targeted outcomes", "Completion and consumption worldview we position against", "Skills features are tagging, not validated capability diagnosis"],
  losses: ["Genuinely engaging modern LXP experience", "Strong content marketplace and social learning", "Good enterprise references"],
  battlecard: "Thrive is a polished, engaging LXP - the experience is real. The wedge is engagement versus outcome: a self-directed library drives consumption, but consumption is not capability and engagement is not a closed gap. Ask: 'How do you know the learning people choose is the learning they need?' Compono diagnoses capability gaps from work personality and role data, so development is targeted - and Thrive's content can serve those targets.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "yes", us: "yes" }, { label: "Course authoring built in", them: "yes", us: "yes" }, { label: "Off-the-shelf content library", them: "yes", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "partial", us: "yes" }, { label: "xAPI support", them: "partial", us: "no" }, { label: "Assessments and quizzes", them: "yes", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "partial", us: "yes" }, { label: "Group / cohort management", them: "yes", us: "yes" }, { label: "Completion tracking and reporting", them: "yes", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "no", us: "yes" }, { label: "Native mobile app + offline", them: "yes", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "partial", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "partial", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Modern LXP - self-directed learning, social features and a big content marketplace.",
    ourAngle: "Consumption is not capability and engagement is not a closed gap. We diagnose the need; their content can serve it.",
    watchOut: "Genuinely engaging experience with good enterprise references."
  },
  landmines: [
    "How do you know the learning people choose is the learning they need?",
    "Skills tags are not diagnosis - what validates the gap being filled?",
    "High engagement, but what changed in team performance?"
  ],
  social: "Active L&D and LXP content. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "moodle",
  name: "Moodle",
  domain: "moodle.com",
  category: "develop",
  snapshot: { hq: "Perth, Australia", founded: "2002", funding: "Open source + Moodle Pty Ltd and partners", headcount: "~200 + global community", anz: "ANZ-born (Perth), global open-source footprint" },
  targetMarket: "Education, government and enterprise, open-source LMS",
  summary: "The world's most widely used open-source LMS, ANZ-born. Hugely flexible and customisable, dominant in education and used widely in corporate and government via partners.",
  pricing: "Open source (free core) plus hosting, partner services and Moodle Workplace licensing.",
  features: ["Open-source LMS core", "Highly customisable and extensible", "Course and assessment delivery", "Moodle Workplace (corporate)", "Compliance and certification", "Huge plugin ecosystem", "Partner-delivered services"],
  integrations: ["SCORM/xAPI content", "HRIS connectors (via plugins/partners)", "Single sign-on", "Video conferencing plugins", "Open API and plugins"],
  fabTheirs: { features: "Free, flexible, infinitely customisable open-source LMS", advantages: "Build exactly the learning environment you want, control your data", benefits: "Total flexibility with no licence lock-in" },
  fabOurs: { features: "Capability diagnosis from work personality and role data, delivered in a managed platform", advantages: "Moodle delivers and hosts learning you configure; Compono works out what each person needs", benefits: "Targeted development without the build-and-maintain burden" },
  wins: ["Delivery platform, not a diagnosis of who needs what", "Flexibility comes with build, configuration and maintenance overhead", "Completion-tracking worldview we position against", "No behavioural model linking learning to capability need"],
  losses: ["Unbeatable flexibility and zero licence cost", "Massive global community and plugin ecosystem", "ANZ-born hero brand in education"],
  battlecard: "Moodle is an institution - free, flexible, ANZ-born, and you cannot beat its price or customisability, so do not try. The wedge is diagnosis versus delivery and the hidden cost of build-it-yourself. Moodle hosts whatever learning you configure; it has no view on what each person actually needs. Ask: 'Who decides what each person learns, and what is the real cost of building and maintaining it?' Compono diagnoses capability gaps and targets development - it can complement a Moodle delivery layer.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "yes", us: "yes" }, { label: "Course authoring built in", them: "yes", us: "yes" }, { label: "Off-the-shelf content library", them: "partial", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "yes", us: "yes" }, { label: "xAPI support", them: "partial", us: "no" }, { label: "Assessments and quizzes", them: "yes", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "yes", us: "yes" }, { label: "Group / cohort management", them: "yes", us: "yes" }, { label: "Completion tracking and reporting", them: "yes", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "partial", us: "yes" }, { label: "Native mobile app + offline", them: "yes", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "no", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "partial", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Free, open-source, endlessly customisable - build exactly the learning environment you want.",
    ourAngle: "Moodle hosts whatever you configure. It has no view on what each person needs - and build-it-yourself has a real hidden cost.",
    watchOut: "Zero licence cost, massive community, ANZ-born. Do not fight the price."
  },
  landmines: [
    "Who decides what each person learns, and on what data?",
    "What is the real cost of building, hosting and maintaining it - people, not licences?",
    "When the configuration expert leaves, who owns the platform?"
  ],
  social: "Huge global open-source community. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "edume",
  name: "eduMe",
  domain: "edume.com",
  category: "develop",
  snapshot: { hq: "London, UK", founded: "2016", funding: "VC-backed", headcount: "~80", anz: "UK/US-centric, sells into ANZ remotely" },
  targetMarket: "Deskless and frontline workforces, mobile microlearning",
  summary: "Mobile-first microlearning platform for deskless and frontline workers. Bite-size training delivered in the flow of work, strong in gig, logistics and hospitality.",
  pricing: "Subscription scaled by users. Mid-range, volume-oriented.",
  features: ["Mobile microlearning", "Deskless and frontline focus", "In-the-flow delivery (SMS, apps)", "Onboarding and compliance", "Seamless authoring", "Analytics", "Multi-language"],
  integrations: ["Workforce and scheduling systems", "HRIS connectors", "Single sign-on", "SMS and messaging delivery", "API"],
  fabTheirs: { features: "Mobile microlearning for frontline and deskless teams", advantages: "Reach and train workers who never sit at a desk", benefits: "Frontline training that actually gets completed" },
  fabOurs: { features: "Capability diagnosis grounded in work personality and role, across the whole lifecycle", advantages: "eduMe delivers bite-size content to the frontline; Compono works out what each person needs and ties it to hiring and fit", benefits: "Targeted frontline development, not just convenient consumption" },
  wins: ["Delivery channel for the frontline, not a diagnosis of need", "Microlearning completion is not capability", "No work personality model or selection linkage", "Often complementary for deskless delivery"],
  losses: ["Genuinely strong frontline and deskless reach", "Excellent mobile, in-the-flow delivery", "Good fit for gig and high-turnover sectors"],
  battlecard: "eduMe solves a real problem - training people who never see a desk - and does it well. The wedge is delivery versus diagnosis: getting microlearning completed on a phone is valuable, but completion is not capability and a delivery channel has no view of individual need. Ask: 'How do you decide what each frontline worker needs to learn?' Compono diagnoses that from work personality and role - eduMe can be the delivery layer for the answer.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "yes", us: "yes" }, { label: "Course authoring built in", them: "yes", us: "yes" }, { label: "Off-the-shelf content library", them: "partial", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "partial", us: "yes" }, { label: "xAPI support", them: "partial", us: "no" }, { label: "Assessments and quizzes", them: "yes", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "no", us: "yes" }, { label: "Group / cohort management", them: "yes", us: "yes" }, { label: "Completion tracking and reporting", them: "yes", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "no", us: "yes" }, { label: "Native mobile app + offline", them: "yes", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "partial", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "partial", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Mobile-first microlearning for deskless and frontline workers, in the flow of work.",
    ourAngle: "A delivery channel with no view of individual need. We diagnose what each frontline worker needs - eduMe can deliver it.",
    watchOut: "Genuinely strong frontline reach - a real problem solved well."
  },
  landmines: [
    "How do you decide what each frontline worker needs to learn?",
    "Completions on a phone are up - is capability?",
    "What links the microlearning to who you hire and how they perform?"
  ],
  social: "Frontline-learning content presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "ispring-learn",
  name: "iSpring Learn",
  domain: "ispringsolutions.com",
  category: "develop",
  snapshot: { hq: "Alexandria, USA", founded: "2001", funding: "Privately held", headcount: "~400", anz: "Global, sells into ANZ remotely" },
  targetMarket: "SMB to mid-market, authoring-plus-LMS buyers",
  summary: "LMS paired with the well-regarded iSpring Suite PowerPoint-based authoring toolkit. Popular with organisations that want strong authoring and a straightforward LMS together.",
  pricing: "Per-user subscription, transparent tiers. Accessible mid-range.",
  features: ["LMS delivery and tracking", "PowerPoint-based authoring (iSpring Suite)", "Quizzes and assessments", "Onboarding and compliance", "Mobile learning", "Reporting", "Course library options"],
  integrations: ["HRIS connectors", "Single sign-on", "Microsoft Teams and 365", "Zoom", "SCORM/xAPI", "API"],
  fabTheirs: { features: "Strong authoring plus a simple LMS in one", advantages: "Build polished courses in PowerPoint and deliver them easily", benefits: "Quality content and delivery without complexity" },
  fabOurs: { features: "Capability diagnosis identifying what each person needs before content is built or assigned", advantages: "iSpring makes authoring and delivery easy; Compono identifies the gaps that matter", benefits: "Targeted development, not just well-built courses delivered to everyone" },
  wins: ["Authoring and delivery strength, no diagnosis of individual need", "Completion-tracking worldview we position against", "No work personality model linking learning to role and fit", "Often complementary as an authoring and delivery layer"],
  losses: ["Genuinely strong, accessible authoring toolkit", "Good value bundling authoring with LMS", "Stable, well-reviewed product"],
  battlecard: "iSpring is a solid authoring-plus-LMS combo at a fair price - no need to overstate the contest. The wedge is the familiar one for content tools: it answers 'how do we make and deliver courses?' not 'what does this person need?' Ask: 'How do you decide what to build and who to assign it to?' Compono diagnoses capability gaps from work personality and role data. iSpring can build and deliver against those targets.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "yes", us: "yes" }, { label: "Course authoring built in", them: "yes", us: "yes" }, { label: "Off-the-shelf content library", them: "yes", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "yes", us: "yes" }, { label: "xAPI support", them: "yes", us: "no" }, { label: "Assessments and quizzes", them: "yes", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "partial", us: "yes" }, { label: "Group / cohort management", them: "yes", us: "yes" }, { label: "Completion tracking and reporting", them: "yes", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "no", us: "yes" }, { label: "Native mobile app + offline", them: "yes", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "partial", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "partial", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Polished PowerPoint-based authoring plus a straightforward LMS, at fair value.",
    ourAngle: "It answers how to make and deliver courses, not what this person needs. We diagnose; iSpring can build against the targets.",
    watchOut: "Solid, well-reviewed and good value. No need to overstate the contest."
  },
  landmines: [
    "How do you decide what to build and who to assign it to?",
    "What people data informs the curriculum - roles, or how individuals actually work?",
    "Completion reports are tidy - what do they say about capability?"
  ],
  social: "Steady L&D and authoring content. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "absorb-lms",
  name: "Absorb LMS",
  domain: "absorblms.com",
  category: "develop",
  snapshot: { hq: "Calgary, Canada", founded: "2003", funding: "PE-backed", headcount: "~600", anz: "Global, with ANZ sales presence" },
  targetMarket: "Mid-market to enterprise, corporate and external training",
  summary: "Polished, scalable corporate LMS strong in both internal training and external/customer education. Modern interface, AI features and solid commerce capability.",
  pricing: "Subscription scaled by active users. Mid to high, enterprise-contracted.",
  features: ["Corporate LMS at scale", "External and customer training", "E-commerce for courses", "AI content and admin features", "Learning pathways and compliance", "Reporting and dashboards", "Mobile app"],
  integrations: ["HRIS connectors (Workday, BambooHR, ADP)", "Single sign-on", "Salesforce", "Content providers (Go1 and others)", "Zoom", "API"],
  fabTheirs: { features: "Scalable, polished LMS for internal and external learning", advantages: "Train staff, customers and partners on one robust platform", benefits: "Reliable learning delivery and commerce at scale" },
  fabOurs: { features: "Capability diagnosis grounded in work personality and role data", advantages: "Absorb delivers and sells learning at scale; Compono works out what each person actually needs", benefits: "Targeted internal development, not just broad delivery and tracking" },
  wins: ["Delivery and commerce platform, not a diagnosis of need", "Completion and consumption worldview we position against", "No work personality model or selection linkage", "Strong delivery, silent on individual capability gaps"],
  losses: ["Genuinely polished, scalable LMS", "Strong external/customer training and commerce", "Good enterprise references and reliability"],
  battlecard: "Absorb is a strong, scalable LMS, especially for external training - concede the delivery quality. The wedge is delivery versus diagnosis: Absorb runs and even sells learning brilliantly, but has no model of what each internal person needs. Ask: 'For your own people, how does Absorb decide who needs what?' Compono diagnoses capability gaps from work personality and role data - and can feed targeted development into a delivery platform like Absorb.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "yes", us: "yes" }, { label: "Course authoring built in", them: "yes", us: "yes" }, { label: "Off-the-shelf content library", them: "yes", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "yes", us: "yes" }, { label: "xAPI support", them: "yes", us: "no" }, { label: "Assessments and quizzes", them: "yes", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "yes", us: "yes" }, { label: "Group / cohort management", them: "yes", us: "yes" }, { label: "Completion tracking and reporting", them: "yes", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "yes", us: "yes" }, { label: "Native mobile app + offline", them: "yes", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "yes", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "yes", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Polished, scalable LMS for internal training plus external customer education and commerce.",
    ourAngle: "Absorb runs and even sells learning brilliantly - but has no model of what each internal person needs.",
    watchOut: "Genuinely strong delivery and external-training capability."
  },
  landmines: [
    "For your own people, how does Absorb decide who needs what?",
    "How much of the platform is commerce and external features you will not use?",
    "Delivery is solved - what diagnoses the gaps it should be filling?"
  ],
  social: "Active corporate-LMS content. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "sana",
  name: "Sana Labs",
  domain: "sanalabs.com",
  category: "develop",
  snapshot: { hq: "Stockholm, Sweden", founded: "2016", funding: "Acquired by Workday in 2025; had raised ~US$140M", headcount: "~250", anz: "Europe/US-centric, sells into ANZ remotely" },
  targetMarket: "Mid-market to enterprise, AI-native learning and knowledge",
  summary: "AI-native learning platform combining an LMS, an AI assistant and knowledge search. Acquired by Workday in 2025 and now part of its AI and learning portfolio. Positions learning and company knowledge together with strong generative-AI features.",
  pricing: "Subscription scaled by users. Mid to high, premium AI positioning.",
  features: ["AI-native LMS", "AI assistant and knowledge search", "Course authoring with AI", "Live and async learning", "Knowledge base integration", "Analytics", "Personalisation features"],
  integrations: ["HRIS connectors", "Single sign-on", "Slack and Microsoft Teams", "Knowledge sources (Drive, Notion)", "API"],
  fabTheirs: { features: "AI-native learning and knowledge in one platform", advantages: "Personalise learning and surface knowledge with generative AI", benefits: "Faster, smarter access to learning and answers" },
  fabOurs: { features: "Capability diagnosis grounded in validated work personality and role data, not just AI content personalisation", advantages: "Sana personalises content delivery with AI; Compono diagnoses the underlying capability gap with validated science", benefits: "Development targeted at real, evidenced needs - not AI-curated consumption" },
  wins: ["AI personalises content, but personalisation of delivery is not validated capability diagnosis", "Knowledge-and-learning focus, no work personality or selection model", "Completion and consumption worldview, even if AI-dressed", "Premium price for content intelligence, not people intelligence"],
  losses: ["Genuinely modern, impressive AI-native experience", "Strong knowledge-plus-learning proposition", "Well-funded, fast-moving product"],
  battlecard: "Sana is one of the slickest AI-native learning products around - acknowledge the technology, it is real. The wedge is AI-of-content versus science-of-people: Sana uses AI to personalise and surface content, which is impressive, but it is still optimising consumption, not diagnosing validated capability need. Ask: 'Your AI personalises the content - but what evidences the gap it is filling for this individual?' Compono diagnoses capability from validated work personality and role data.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "yes", us: "yes" }, { label: "Course authoring built in", them: "yes", us: "yes" }, { label: "Off-the-shelf content library", them: "partial", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "yes", us: "yes" }, { label: "xAPI support", them: "yes", us: "no" }, { label: "Assessments and quizzes", them: "yes", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "yes", us: "yes" }, { label: "Group / cohort management", them: "yes", us: "yes" }, { label: "Completion tracking and reporting", them: "yes", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "no", us: "yes" }, { label: "Native mobile app + offline", them: "partial", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "yes", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "yes", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "AI-native learning and knowledge - generative AI personalising content and search, now part of Workday.",
    ourAngle: "AI of content versus science of people. Personalising delivery is not diagnosing validated capability need.",
    watchOut: "Genuinely impressive AI-native product, now with Workday behind it."
  },
  landmines: [
    "The AI personalises the content - but what evidences the gap it is filling for this individual?",
    "Is the premium buying content intelligence, or people intelligence?",
    "What does the Workday acquisition mean for roadmap and pricing outside Workday shops?"
  ],
  social: "High-profile AI-learning content. Verify on refresh.",
  recentActivity: [
    { date: "May 2026", note: "Workday shipped Sana-built self-service agents into Microsoft 365 Copilot and across its suite - Sana is now the engine of Workday's agentic AI." }
  ]
}
,
{
  id: "degreed",
  name: "Degreed",
  domain: "degreed.com",
  category: "develop",
  snapshot: { hq: "Pleasanton, USA", founded: "2012", funding: "VC-backed (raised US$400M+)", headcount: "~600", anz: "Global enterprise, sells into ANZ remotely" },
  targetMarket: "Large enterprise, skills and learning experience",
  summary: "Pioneer of the learning experience platform (LXP) and a leading skills platform. Aggregates content from everywhere, tracks skills, and powers enterprise upskilling strategies.",
  pricing: "Enterprise subscription scaled by population. High cost.",
  features: ["Learning experience platform", "Skills tracking and inference", "Content aggregation from all sources", "Pathways and academies", "Skills analytics", "Career and mobility features", "Enterprise integrations"],
  integrations: ["HRIS connectors (Workday, SAP SuccessFactors)", "Content providers (LinkedIn Learning, Udemy, Go1)", "Single sign-on", "LMS connectors", "API"],
  fabTheirs: { features: "Enterprise LXP with skills tracking and universal content aggregation", advantages: "Build a skills-based learning strategy across all content sources", benefits: "A single enterprise view of learning and skills" },
  fabOurs: { features: "Capability diagnosis grounded in validated work personality and role data", advantages: "Degreed infers skills from activity and content; Compono diagnoses capability from validated behavioural science", benefits: "Evidenced individual need, not skills inferred from what people clicked" },
  wins: ["Skills are largely inferred from activity and self-report, not validated diagnosis", "Aggregation breadth without a behavioural model of individual need", "Enterprise cost and implementation weight", "Completion and consumption worldview we position against"],
  losses: ["Category-defining LXP and skills brand", "Unmatched content aggregation breadth", "Strong enterprise skills-strategy positioning"],
  battlecard: "Degreed defined the LXP and skills category - the brand and breadth are real. The wedge is inference versus diagnosis: Degreed infers skills from what people consume and self-report, which is activity data dressed as capability. Ask: 'Are your skills data validated, or inferred from clicks and self-ratings?' Compono diagnoses capability from validated work personality and role data - evidenced need, not inferred skills. At enterprise scale, also weigh Degreed's cost and implementation against the value of inferred data.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "partial", us: "yes" }, { label: "Course authoring built in", them: "no", us: "yes" }, { label: "Off-the-shelf content library", them: "yes", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "partial", us: "yes" }, { label: "xAPI support", them: "yes", us: "no" }, { label: "Assessments and quizzes", them: "partial", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "no", us: "yes" }, { label: "Group / cohort management", them: "partial", us: "yes" }, { label: "Completion tracking and reporting", them: "yes", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "no", us: "yes" }, { label: "Native mobile app + offline", them: "yes", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "partial", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "yes", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "The category-defining LXP and skills platform - all content sources, one skills strategy.",
    ourAngle: "Degreed infers skills from clicks and self-report. We diagnose capability from validated work personality and role data.",
    watchOut: "Category-defining brand with unmatched aggregation breadth - at enterprise cost."
  },
  landmines: [
    "Are your skills data validated, or inferred from clicks and self-ratings?",
    "What does implementation cost and take at enterprise scale - and what is the data worth at the end?",
    "Would the skills graph survive an audit of how it was built?"
  ],
  social: "Strong enterprise skills thought leadership. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "edcast",
  name: "EdCast (Cornerstone)",
  domain: "cornerstoneondemand.com",
  category: "develop",
  snapshot: { hq: "Mountain View, USA (Cornerstone)", founded: "2013, acquired by Cornerstone 2022", funding: "Part of Cornerstone OnDemand", headcount: "Part of Cornerstone", anz: "Global via Cornerstone, ANZ presence" },
  targetMarket: "Enterprise, learning experience and knowledge",
  summary: "Enterprise LXP and knowledge platform, now part of Cornerstone. Content aggregation, skills and knowledge sharing layered over or alongside Cornerstone's LMS.",
  pricing: "Enterprise subscription, often bundled with Cornerstone. High cost.",
  features: ["Enterprise LXP", "Content aggregation and curation", "Skills and pathways", "Knowledge sharing", "Career mobility features", "Cornerstone LMS integration", "Analytics"],
  integrations: ["Cornerstone LMS (native)", "HRIS connectors (Workday, SAP)", "Content providers", "Single sign-on", "API"],
  fabTheirs: { features: "Enterprise LXP and knowledge layer within the Cornerstone ecosystem", advantages: "Aggregate content and knowledge across a large enterprise", benefits: "Unified learning experience at enterprise scale" },
  fabOurs: { features: "Capability diagnosis from validated work personality and role data", advantages: "EdCast aggregates and curates content; Compono diagnoses what each person actually needs", benefits: "Targeted development on evidenced need, not curated consumption" },
  wins: ["Aggregation and curation, not validated diagnosis of individual need", "Enterprise cost and complexity, now inside a large suite", "Completion and consumption worldview we position against", "Skills features are inference and tagging, not behavioural diagnosis"],
  losses: ["Enterprise-grade aggregation and knowledge features", "Cornerstone ecosystem backing", "Established enterprise references"],
  battlecard: "EdCast brings enterprise LXP and knowledge muscle, now backed by Cornerstone. The wedge is the standard content-platform one plus suite weight: aggregation and curation are not validated diagnosis, and inside Cornerstone the cost and complexity climb. Ask: 'Beyond aggregating content, what tells you what each individual genuinely needs?' Compono diagnoses capability from validated work personality and role data - and is right-sized for the mid-market rather than carrying enterprise-suite weight.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "partial", us: "yes" }, { label: "Course authoring built in", them: "no", us: "yes" }, { label: "Off-the-shelf content library", them: "yes", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "partial", us: "yes" }, { label: "xAPI support", them: "yes", us: "no" }, { label: "Assessments and quizzes", them: "partial", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "no", us: "yes" }, { label: "Group / cohort management", them: "partial", us: "yes" }, { label: "Completion tracking and reporting", them: "yes", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "no", us: "yes" }, { label: "Native mobile app + offline", them: "yes", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "partial", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "yes", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Enterprise LXP and knowledge aggregation, now inside the Cornerstone suite.",
    ourAngle: "Aggregation and tagging are not validated diagnosis - and inside Cornerstone the cost and complexity climb.",
    watchOut: "Enterprise-grade aggregation with Cornerstone ecosystem backing."
  },
  landmines: [
    "Beyond aggregating content, what tells you what each individual genuinely needs?",
    "What has changed for the product since it went into the Cornerstone suite?",
    "Is this right-sized for a mid-market team, or carrying enterprise weight?"
  ],
  social: "Enterprise-learning presence via Cornerstone. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "fuse",
  name: "Fuse Universal",
  domain: "fuseuniversal.com",
  category: "develop",
  snapshot: { hq: "London, UK", founded: "2008", funding: "VC/PE-backed", headcount: "~150", anz: "UK-centric, sells into ANZ remotely" },
  targetMarket: "Mid-market to enterprise, social and knowledge-led learning",
  summary: "Learning and knowledge platform built around social learning, video and community. Emphasises learning in the flow of work and peer knowledge sharing over formal courses.",
  pricing: "Subscription scaled by users. Mid to high.",
  features: ["Social and community learning", "Video-first content", "Knowledge sharing", "In-the-flow learning", "Authoring and curation", "Analytics", "Mobile learning"],
  integrations: ["HRIS connectors", "Single sign-on", "Microsoft Teams", "Content providers", "API"],
  fabTheirs: { features: "Social, video-led learning and knowledge in the flow of work", advantages: "Capture and share peer knowledge, not just formal courses", benefits: "A living learning culture driven by people" },
  fabOurs: { features: "Capability diagnosis grounded in validated work personality and role data", advantages: "Fuse drives social knowledge sharing; Compono diagnoses what each person needs to develop", benefits: "Targeted development on evidenced need, alongside any social learning" },
  wins: ["Social and knowledge engagement, but no diagnosis of individual capability need", "Peer sharing is valuable but unstructured against role requirements", "Completion and consumption worldview we position against", "No work personality model or selection linkage"],
  losses: ["Genuinely strong social and video learning", "Good in-the-flow knowledge sharing", "Engaged-community references"],
  battlecard: "Fuse does social and knowledge-led learning well - peer knowledge is genuinely valuable. The wedge is engagement versus diagnosis: a thriving learning community shares a lot, but sharing is not the same as closing each person's specific capability gap. Ask: 'With all that knowledge flowing, how do you know what this individual still needs?' Compono diagnoses capability from validated work personality and role data, so social learning is aimed, not just abundant.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "yes", us: "yes" }, { label: "Course authoring built in", them: "yes", us: "yes" }, { label: "Off-the-shelf content library", them: "yes", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "partial", us: "yes" }, { label: "xAPI support", them: "partial", us: "no" }, { label: "Assessments and quizzes", them: "yes", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "partial", us: "yes" }, { label: "Group / cohort management", them: "yes", us: "yes" }, { label: "Completion tracking and reporting", them: "yes", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "no", us: "yes" }, { label: "Native mobile app + offline", them: "yes", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "partial", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "partial", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Social and video learning - capture and share peer knowledge in the flow of work.",
    ourAngle: "Sharing is not the same as closing each person's specific gap. We aim the community's knowledge at diagnosed needs.",
    watchOut: "Genuinely strong social learning with engaged-community references."
  },
  landmines: [
    "With all that knowledge flowing, how do you know what this individual still needs?",
    "Is peer content structured against role requirements, or just abundant?",
    "Activity is high - what happened to capability?"
  ],
  social: "Social-learning thought leadership. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "linkedin-learning",
  name: "LinkedIn Learning",
  domain: "linkedin.com",
  category: "develop",
  snapshot: { hq: "Sunnyvale, USA (Microsoft)", founded: "Lynda.com 1995, LinkedIn Learning 2016", funding: "Part of Microsoft", headcount: "Part of LinkedIn/Microsoft", anz: "Sold globally via LinkedIn, no distinct local team" },
  targetMarket: "All sizes, content library buyers, LinkedIn ecosystem",
  summary: "Vast professional content library built on Lynda.com, integrated with LinkedIn profiles and skills. Huge breadth of business, tech and creative courses, distributed through Microsoft and LinkedIn.",
  pricing: "Per-user subscription, often bundled with LinkedIn or Microsoft. Mid-range per seat.",
  features: ["Large professional course library", "LinkedIn skills integration", "Learning paths and certificates", "Skill assessments", "Manager and admin tools", "Content recommendations", "Mobile learning"],
  integrations: ["LinkedIn (native)", "Microsoft 365 and Viva", "HRIS and LMS connectors", "Single sign-on", "Content into LXPs (Degreed and others)"],
  fabTheirs: { features: "Massive professional content library tied to LinkedIn skills", advantages: "Give everyone access to broad, recognisable professional learning", benefits: "Wide content coverage with a trusted brand" },
  fabOurs: { features: "Capability diagnosis grounded in validated work personality and role data", advantages: "LinkedIn Learning owns the content; Compono works out what THIS person needs from it", benefits: "Targeted development that closes real gaps, not a big library people graze" },
  wins: ["Content breadth without diagnosis of individual need", "Recommendations are content-affinity based, not validated capability diagnosis", "Completion-and-consumption worldview we position against", "Often complementary - a content source, not a capability layer"],
  losses: ["Enormous, recognisable content library", "Strong LinkedIn brand and skills integration", "Easy, broad access at a reasonable per-seat price"],
  battlecard: "LinkedIn Learning has unbeatable content breadth and brand - do not fight it on library size, you will lose. The wedge is the classic catalogue-versus-diagnosis line: owning thousands of courses does not answer what this person needs next. Ask: 'Out of that whole library, what tells you the right course for this individual?' Compono diagnoses capability from validated work personality and role data - and LinkedIn Learning can be the content people are pointed to.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "partial", us: "yes" }, { label: "Course authoring built in", them: "no", us: "yes" }, { label: "Off-the-shelf content library", them: "yes", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "no", us: "yes" }, { label: "xAPI support", them: "partial", us: "no" }, { label: "Assessments and quizzes", them: "partial", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "no", us: "yes" }, { label: "Group / cohort management", them: "no", us: "yes" }, { label: "Completion tracking and reporting", them: "partial", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "no", us: "yes" }, { label: "Native mobile app + offline", them: "yes", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "no", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "partial", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "The recognisable giant - a vast professional library tied to LinkedIn profiles and skills.",
    ourAngle: "The classic catalogue problem - thousands of courses cannot answer what this person needs next. We can, and their library can serve it.",
    watchOut: "Enormous brand and breadth at a reasonable per-seat price. Do not fight the library."
  },
  landmines: [
    "Out of that whole library, what tells you the right course for this individual?",
    "Are recommendations based on the person's real capability gap, or their viewing habits?",
    "Licences are widely bought - how much are they actually moving capability?"
  ],
  social: "Massive brand reach via LinkedIn. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "udemy-business",
  name: "Udemy Business",
  domain: "udemy.com",
  category: "develop",
  snapshot: { hq: "San Francisco, USA", founded: "Udemy 2010, Business arm later", funding: "NASDAQ-listed", headcount: "~1,500 (Udemy overall)", anz: "Global, sells into ANZ remotely" },
  targetMarket: "All sizes, content library buyers, tech-skills heavy",
  summary: "Enterprise content arm of the Udemy marketplace - a large curated library of business, tech and professional courses for organisations, strong in technical and developer upskilling.",
  pricing: "Per-user subscription tiers. Mid-range per seat.",
  features: ["Large curated business and tech library", "Hands-on tech and coding content", "Learning paths", "Skill insights", "Assessments and labs", "Admin and reporting", "Mobile learning"],
  integrations: ["HRIS and LMS connectors", "Single sign-on", "Content into LXPs (Degreed and others)", "Microsoft Teams", "API"],
  fabTheirs: { features: "Broad, practical business and tech content library", advantages: "Upskill teams, especially technical ones, with hands-on content", benefits: "Wide, practical content access at a fair price" },
  fabOurs: { features: "Capability diagnosis grounded in validated work personality and role data", advantages: "Udemy owns the content; Compono diagnoses what each person actually needs", benefits: "Targeted development against real gaps, not a marketplace people browse" },
  wins: ["Content breadth and practicality without diagnosis of individual need", "Marketplace curation, not validated capability assessment", "Completion-and-consumption worldview we position against", "Often complementary - a content source, not a capability layer"],
  losses: ["Strong practical and technical content depth", "Recognisable brand and good per-seat value", "Hands-on labs valued by technical teams"],
  battlecard: "Udemy Business is great for practical, especially technical, content - concede the breadth and the hands-on labs. The wedge is the same catalogue-versus-diagnosis point: a big practical library does not tell you what this person needs. Ask: 'How do you decide which Udemy courses matter for this individual?' Compono diagnoses capability from validated work personality and role data - Udemy can supply the content once the need is clear.",
  fabComparison: {
    groups: [
      { title: "What an LMS does", rows: [{ label: "Course delivery and hosting", them: "partial", us: "yes" }, { label: "Course authoring built in", them: "no", us: "yes" }, { label: "Off-the-shelf content library", them: "yes", us: "yes" }, { label: "SCORM support (1.2 / 2004)", them: "no", us: "yes" }, { label: "xAPI support", them: "no", us: "no" }, { label: "Assessments and quizzes", them: "partial", us: "yes" }, { label: "Certification and certificates", them: "yes", us: "yes" }, { label: "Learning paths", them: "yes", us: "yes" }, { label: "Blended / instructor-led training", them: "no", us: "yes" }, { label: "Group / cohort management", them: "no", us: "yes" }, { label: "Completion tracking and reporting", them: "partial", us: "yes" }, { label: "Sell courses externally (e-commerce)", them: "no", us: "yes" }, { label: "Native mobile app + offline", them: "yes", us: "no" }, { label: "Mobile browser access", them: "yes", us: "yes" }, { label: "AI content generation", them: "no", us: "no" }, { label: "SSO and user provisioning", them: "yes", us: "yes" }, { label: "Pre-built HRIS connectors", them: "partial", us: "no" }, { label: "API and webhooks", them: "yes", us: "yes" }] }
    ]
  },
  quickTake: {
    theirPitch: "Practical, technical upskilling from a huge curated marketplace, with hands-on labs.",
    ourAngle: "Same catalogue-versus-diagnosis point - a big practical library does not tell you what this person needs.",
    watchOut: "Strong technical content depth and good per-seat value, valued by technical teams."
  },
  landmines: [
    "How do you decide which Udemy courses matter for this individual?",
    "Marketplace curation is broad - what diagnoses the need it should serve?",
    "Are the hands-on labs mapped to anyone's actual capability gap?"
  ],
  social: "Strong tech-learning content presence. Verify on refresh.",
  recentActivity: []
}
,

/* ============ HRIS - FULL SUITE OVERLAP ============ */
{
  id: "employment-hero",
  name: "Employment Hero",
  domain: "employmenthero.com",
  category: "hris",
  snapshot: { hq: "Sydney, Australia", founded: "2014", funding: "VC/PE-backed double unicorn (KKR investor), ~A$2B+ valuation; acquired Humi (Canada) 2025", headcount: "~1,000", anz: "ANZ native, aggressive local growth" },
  targetMarket: "ANZ SMB to lower mid-market, payroll-led",
  summary: "ANZ employment super-app - HRIS, payroll, benefits, hiring (Swag/SmartMatch) and engagement features in one aggressive bundle. The loudest local consolidator.",
  pricing: "Per employee per month tiers, payroll-bundled, aggressive discounting.",
  features: ["HRIS + payroll core", "Hiring module + SmartMatch talent pool", "Engagement surveys (basic)", "Learning module (basic)", "Benefits/Swag app", "Compliance (ANZ awards)"],
  integrations: ["Seek", "Xero", "MYOB", "QuickBooks", "KeyPay payroll", "Swag app"],
  fabTheirs: { features: "Employment, end to end, one ANZ platform", advantages: "Consolidate HR, payroll and hiring into one bill", benefits: "Less admin, fewer vendors, local compliance handled" },
  fabOurs: { features: "Depth where it decides outcomes: hiring, engagement, development on real people science", advantages: "Suite modules are checkbox-deep; people decisions deserve specialist depth", benefits: "Run payroll wherever you like - make people decisions on science" },
  wins: ["Hiring/engagement/learning modules are shallow checkbox features vs specialist depth", "No behavioural science anywhere in the stack", "Land-and-expand pricing creep frustrates customers", "Their breadth is our both/and: keep their payroll, add our intelligence"],
  losses: ["Consolidation economics are seductive for SMBs", "Massive ANZ brand momentum and channel (accountants)", "Payroll gravity - owning payroll makes everything else sticky"],
  battlecard: "Never fight Employment Hero on payroll - concede it, even compliment it. The wedge: ask the prospect to open the hiring or engagement module and find the science. There is none - they are admin features wearing product names. Compono coexists: keep EH for employment admin, use Compono for the decisions that determine who you employ and how they perform. Both/and beats rip-and-replace, and it defuses their consolidation pitch.",
  quickTake: {
    theirPitch: "The ANZ employment super-app - HR, payroll, benefits and hiring on one bill.",
    ourAngle: "Keep their payroll, add our intelligence. Their hiring and engagement modules are admin features wearing product names.",
    watchOut: "Seductive consolidation economics and massive local momentum through the accountant channel."
  },
  landmines: [
    "Open the hiring or engagement module - where is the science?",
    "How has the pricing moved since you signed, module by module?",
    "Does consolidating the admin change the quality of a single people decision?"
  ],
  social: "Very loud ANZ presence, aggressive marketing. Verify on refresh.",
  recentActivity: [
    { date: "Jun 2026", note: "Partnered with Intuit QuickBooks to embed its HeroClear super engine in QuickBooks Payroll ahead of Payday Super starting 1 July 2026." },
    { date: "Apr 2026", note: "Launched HeroForce, an AI-powered employer-of-record service that takes on payroll, award compliance and super for small businesses." }
  ]
}
,
{
  id: "elmo",
  name: "ELMO Software",
  domain: "elmosoftware.com.au",
  category: "hris",
  snapshot: { hq: "Sydney, Australia", founded: "2002", funding: "PE-owned (K1 take-private from ASX, ~A$486M)", headcount: "~600", anz: "ANZ/UK mid-market staple" },
  targetMarket: "ANZ mid-market HR suites - 200-2,000 employees",
  summary: "The ANZ mid-market HR suite incumbent - modular HRIS spanning recruitment, onboarding, performance, learning, payroll. The most frequent suite incumbent in our deals.",
  pricing: "Modular per-module per-employee annual contracts. Multi-module bundles discounted.",
  features: ["Modular HRIS core", "Recruitment module", "Performance module", "Learning module + course library", "Payroll", "Surveys (basic)"],
  integrations: ["Seek", "Xero", "MYOB", "Payroll and finance connectors", "LinkedIn", "Single sign-on"],
  fabTheirs: { features: "Pick-your-modules ANZ HR suite", advantages: "One local vendor, broad coverage, procurement-friendly", benefits: "HR consolidated with a known local name" },
  fabOurs: { features: "Specialist people-science platform vs module catalogue", advantages: "Every ELMO module is a workflow; none contains insight. We are insight-first across hire, engage, develop", benefits: "Decisions improve, not just processes digitise" },
  wins: ["Module breadth, insight zero - no behavioural science anywhere", "Post-take-private product investment perceptions worth probing", "Modules individually beatable by every specialist", "Survey-basic engagement vs our explanatory depth"],
  losses: ["Entrenched mid-market incumbency - often already installed", "Procurement preference for module consolidation", "Local brand familiarity and compliance trust"],
  battlecard: "ELMO is usually the incumbent, so the motion is displacement or coexistence, not bake-off. Probe satisfaction module by module - recruitment and learning are commonly the weakest-loved. The line: ELMO digitised your HR processes; it never improved a single people decision. Compono can sit beside the ELMO core and own the decision layer - hiring, engagement insight, capability - where workflow tools structurally cannot follow.",
  quickTake: {
    theirPitch: "One local vendor, broad module coverage - the ANZ mid-market suite incumbent.",
    ourAngle: "ELMO digitised your HR processes. It never improved a single people decision. We own the decision layer beside their core.",
    watchOut: "Usually already installed - the motion is displacement or coexistence, not a bake-off."
  },
  landmines: [
    "Module by module, which ones does your team actually love - and which do they tolerate?",
    "What has product investment looked like since the take-private?",
    "Where in the suite is the behavioural science - recruitment, engagement, anywhere?"
  ],
  social: "Moderate ANZ presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "rippling",
  name: "Rippling",
  domain: "rippling.com",
  category: "hris",
  snapshot: { hq: "San Francisco, USA", founded: "2016", funding: "VC mega-backed, ~US$2B raised, ~US$16.8B valuation", headcount: "~6,000", anz: "Launched ANZ (Sydney) - expanding aggressively with local payroll" },
  targetMarket: "SMB to mid-market, ops/finance-led buyers consolidating HR+IT+finance",
  summary: "The employee-graph super-platform - HR, IT (devices/apps) and finance on one system. Hyper-aggressive global expansion including ANZ payroll.",
  pricing: "Modular per employee per month, starts cheap, stacks fast. Quote-based bundles.",
  features: ["HRIS + global payroll", "Device/app management (IT)", "Spend/finance modules", "Recruiting module (basic ATS)", "Learning module (basic)", "Workflow automation engine"],
  integrations: ["Slack", "Google Workspace and Microsoft 365", "Zoom", "Accounting and finance (NetSuite, QuickBooks)", "600+ app marketplace", "Single sign-on"],
  fabTheirs: { features: "HR, IT and finance unified on the employee graph", advantages: "Onboard once, everything provisions automatically", benefits: "Operational consolidation no rival matches" },
  fabOurs: { features: "People intelligence vs operational automation", advantages: "Rippling automates the admin around an employee; we inform the decisions about the human", benefits: "Provision laptops with Rippling; choose and grow people with Compono" },
  wins: ["People modules (recruiting, learning, engagement) are checkbox-thin vs the ops core", "Zero behavioural science", "Ops/IT-led buying centre often is not our buyer anyway - coexistence framing easy", "ANZ depth (awards, local nuance) still maturing despite the launch"],
  losses: ["Ferocious product velocity and funding", "Consolidation pitch resonates with cost-cutting CFOs", "Slick demo experience"],
  battlecard: "Rippling's genius is admin automation - conceding that costs nothing because it is not our category. The reframe: Rippling treats an employee as a record to provision; Compono treats them as a human to understand. No employee graph tells you whether a candidate fits the team or why a team is misfiring. Coexistence is natural: their rails, our intelligence. Watch their ANZ localisation claims closely on refresh - it is moving fast.",
  quickTake: {
    theirPitch: "The employee graph - HR, IT and finance provisioning automated from one record.",
    ourAngle: "Rippling treats an employee as a record to provision. We treat them as a human to understand. Their rails, our intelligence.",
    watchOut: "Ferocious product velocity and a slick demo. ANZ localisation is maturing fast - re-check on every refresh."
  },
  landmines: [
    "Does the employee graph tell you whether a candidate fits the team, or why a team is misfiring?",
    "How deep is the ANZ awards and compliance handling today, in writing?",
    "Who in your building is buying this - IT and ops, or the people making people decisions?"
  ],
  social: "Extremely loud, high-velocity marketing. Verify on refresh.",
  recentActivity: [
    { date: "Feb 2026", note: "Won a US federal court ruling allowing its racketeering and trade-secret lawsuit against Deel to proceed towards trial." }
  ]
}
,
{
  id: "bamboohr",
  name: "BambooHR",
  domain: "bamboohr.com",
  category: "hris",
  snapshot: { hq: "Lindon, Utah, USA", founded: "2008", funding: "Private (ICONIQ Growth and Sorenson Capital backed)", headcount: "~1,800", anz: "Sells remotely, US-centric" },
  targetMarket: "Global SMB HRIS, HR-led buyers",
  summary: "The friendly SMB HRIS benchmark - core HR records, time off, basic ATS, performance and eNPS surveys. Beloved UX, deliberately simple.",
  pricing: "Per employee per month tiers (~US$6-12 pepm region), self-serve-ish.",
  features: ["Core HRIS records", "Time off/leave", "Basic ATS", "Onboarding", "Performance basics", "eNPS/wellbeing surveys"],
  integrations: ["Greenhouse and Workable", "Indeed", "Slack", "Payroll partners", "Google and Microsoft 365", "Marketplace connectors"],
  fabTheirs: { features: "HR basics done beautifully", advantages: "Loved by employees and admins alike", benefits: "HR foundation without complexity" },
  fabOurs: { features: "The intelligence layer SMB suites do not attempt", advantages: "Bamboo manages records; we improve decisions - different jobs, often complementary", benefits: "Keep the friendly HRIS; add the people science" },
  wins: ["ATS and survey features are deliberately basic - no science, no depth", "US-centric (leave/compliance localisation gaps for ANZ)", "Coexistence story trivial to tell"],
  losses: ["Genuinely loved product with loyal advocates", "Simple economics for small teams"],
  battlecard: "BambooHR rarely deserves attack - it is a records system people like. When prospects conflate it with a hiring or engagement solution, gently separate the jobs: Bamboo stores what happened to employees; Compono informs what should happen next. The basic ATS comparison wins itself on one demo of behavioural matching.",
  quickTake: {
    theirPitch: "The friendly SMB HRIS - records, time off, basic ATS and eNPS people genuinely like.",
    ourAngle: "Bamboo stores what happened to employees. Compono informs what should happen next.",
    watchOut: "Genuinely loved product with loyal advocates. Coexistence is the easy story."
  },
  landmines: [
    "The ATS is deliberately basic - what does it tell you about who will succeed?",
    "How do the US-centric leave and compliance defaults fit ANZ reality?",
    "An eNPS number moved - what do you do with that?"
  ],
  social: "Strong SMB content brand. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "sage-hr",
  name: "Sage HR / Sage People",
  domain: "sage.com",
  category: "hris",
  snapshot: { hq: "Newcastle, UK (Sage Group)", founded: "Sage 1981; HR via acquisitions", funding: "Public (LSE: SGE)", headcount: "11,000+ (group)", anz: "Present via Sage accounting ecosystem" },
  targetMarket: "SMB (Sage HR) and mid-market (Sage People) inside Sage finance estates",
  summary: "HR modules of the Sage accounting empire - bought where Sage finance already runs. Solid records, shallow people features.",
  pricing: "Modular per employee per month, low entry (Sage HR), enterprise quotes (Sage People).",
  features: ["Core HR records", "Leave management", "Basic performance", "Basic recruitment module", "Sage finance ecosystem integration", "Payroll links"],
  integrations: ["Sage accounting", "Slack and Microsoft Teams", "Google Workspace", "Payroll connectors", "Zapier"],
  fabTheirs: { features: "HR attached to the finance system you already trust", advantages: "One vendor relationship, finance-grade reliability", benefits: "Low-risk HR digitisation" },
  fabOurs: { features: "People decisions need people science, not an accounting vendor's HR module", advantages: "Ecosystem convenience does not assess fit, explain culture, or close capability gaps", benefits: "Keep Sage for money; use Compono for people" },
  wins: ["HR is a side-business of an accounting company - depth reflects it", "No behavioural anything", "Easy coexistence framing"],
  losses: ["Ecosystem gravity where Sage finance is entrenched", "Cheap bundled economics"],
  battlecard: "Sage HR appears via the accountant channel, not HR strategy. The respectful line: Sage is excellent at money and adequate at records - nobody, including Sage, claims it understands people. When the conversation is about who to hire or why a team underperforms, Sage has no entry. We do.",
  quickTake: {
    theirPitch: "HR modules from the Sage accounting empire - one vendor where the finance already runs.",
    ourAngle: "Sage is excellent at money and adequate at records. Nobody, including Sage, claims it understands people.",
    watchOut: "Ecosystem gravity and cheap bundled economics where Sage finance is entrenched."
  },
  landmines: [
    "When the question is who to hire or why a team underperforms, where does Sage enter?",
    "Is HR a core business for this vendor, or a side module?",
    "What people science exists anywhere in the stack?"
  ],
  social: "Group-level corporate presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "humanforce",
  name: "Humanforce",
  domain: "humanforce.com",
  category: "hris",
  snapshot: { hq: "Sydney, Australia", founded: "2002 (as TimeTarget)", funding: "PE-owned (Accel-KKR); acquired intelliHR, Wagestream AU and LiveHire", headcount: "~300", anz: "ANZ native, frontline-workforce focus" },
  targetMarket: "ANZ frontline/deskless industries - care, hospitality, retail, mining services",
  summary: "Frontline workforce management suite - rostering, time and attendance core, plus HRIS, payroll and (via intelliHR acquisition) people analytics and engagement.",
  pricing: "Per employee per month modular, workforce-management-led bundles.",
  features: ["Rostering/scheduling core", "Time and attendance", "Award interpretation (ANZ)", "HRIS + payroll", "intelliHR people analytics/engagement", "Frontline employee app"],
  integrations: ["Xero", "MYOB", "intelliHR (native)", "Payroll and POS systems", "HRIS connectors"],
  fabTheirs: { features: "Frontline workforce ops end to end, ANZ-compliant", advantages: "Built for shift-based reality, awards handled", benefits: "Deskless workforce managed properly" },
  fabOurs: { features: "Who to hire and how teams work - questions rostering never answers", advantages: "intelliHR added dashboards, not behavioural science; scheduling hours is not understanding humans", benefits: "Fit-based hiring and culture insight for the same frontline teams they roster" },
  wins: ["People analytics (intelliHR) is reporting, not behavioural insight", "Hiring capability minimal - rostering DNA", "Coexistence natural: they schedule the workforce we helped select"],
  losses: ["Deep frontline/awards moat in ANZ", "Entrenched in care/hospitality verticals we also target"],
  battlecard: "Humanforce owns the roster; the open question is who deserves to be on it. In shared verticals (care especially), the pitch is sequential: Compono selects for personality and care quality - per our childcare/early-learning positioning - and explains team dynamics; Humanforce schedules the result. If their intelliHR module is raised, distinguish dashboards about people from science about how people work.",
  quickTake: {
    theirPitch: "Frontline workforce management - rostering and awards handled, with people analytics via intelliHR.",
    ourAngle: "Humanforce owns the roster. The open question is who deserves to be on it - we select and explain, they schedule.",
    watchOut: "Deep frontline and awards moat, entrenched in care and hospitality verticals we also target."
  },
  landmines: [
    "The roster is optimised - but how were the people on it selected?",
    "Is the intelliHR module dashboards about people, or science about how people work?",
    "In a high-turnover workforce, what is fixing the turnover rather than scheduling around it?"
  ],
  social: "Moderate ANZ presence. Verify on refresh.",
  recentActivity: [
    { date: "Jul 2026", note: "Launched Humanforce HR Analytics and Humanforce Learning, adding AI-driven workforce insight and automated compliance training to its frontline suite." },
    { date: "Apr 2026", note: "Acquired Emprevo and ShiftMatch and launched Humanforce Connect, a labour fulfilment layer spanning internal, agency and contingent workforces." }
  ]
}
,
{
  id: "dayforce",
  name: "Dayforce (Ceridian)",
  domain: "dayforce.com",
  category: "hris",
  snapshot: { hq: "Minneapolis, USA", founded: "1992 (Ceridian lineage), rebranded Dayforce 2024", funding: "Taken private by Thoma Bravo in 2026 (~US$12.3B); formerly NYSE/TSX: DAY", headcount: "~9,000", anz: "Established ANZ enterprise payroll presence" },
  targetMarket: "Enterprise HCM - payroll-led, 1,000+ employees",
  summary: "Enterprise HCM with a celebrated continuous-calculation payroll engine - HR, workforce management, talent modules attached to the payroll core.",
  pricing: "Enterprise per-employee contracts, payroll-anchored, premium.",
  features: ["Continuous-calc payroll engine", "Workforce management", "HR core", "Recruiting module", "Talent/learning modules", "Wallet (on-demand pay)"],
  integrations: ["Own payroll and WFM ecosystem", "ERP and finance connectors", "Single sign-on", "Benefits carriers"],
  fabTheirs: { features: "Real-time payroll plus full HCM", advantages: "One enterprise system anchored on payroll accuracy", benefits: "Compliance and cost control at scale" },
  fabOurs: { features: "Decision intelligence enterprise HCM modules never contain", advantages: "Their talent modules exist to tick RFP boxes beside payroll; ours exist because people science is the whole product", benefits: "Enterprise payroll AND genuine people insight - different vendors, both excellent" },
  wins: ["Talent modules are RFP-grade, not decision-grade - no science", "Enterprise weight irrelevant below 1,000 seats", "Coexistence framing with payroll incumbency"],
  losses: ["Payroll engine genuinely superb - immovable where installed", "Enterprise procurement consolidation pressure"],
  battlecard: "Dayforce deals are payroll deals wearing HCM clothes. Never contest payroll. The opening: ask which Dayforce talent module the HR team actually loves - the answer is reliably none. Compono coexists as the people-decision layer above any payroll spine. Both/and, zero rip-out.",
  quickTake: {
    theirPitch: "Enterprise HCM anchored on a celebrated continuous-calculation payroll engine.",
    ourAngle: "Dayforce deals are payroll deals wearing HCM clothes. Never contest payroll - be the decision layer above it.",
    watchOut: "The payroll engine is genuinely superb and immovable where installed."
  },
  landmines: [
    "Which Dayforce talent module does your HR team actually love?",
    "Below 1,000 seats, what is the enterprise weight buying you?",
    "Where is the science in the talent modules - or are they RFP checkboxes?"
  ],
  social: "Large corporate presence. Verify on refresh.",
  recentActivity: [{ date: "Feb 2026", note: "Thoma Bravo completed its take-private acquisition for about US$12.3 billion; Dayforce delisted from the NYSE and TSX." }]
}
,
{
  id: "ukg",
  name: "UKG",
  domain: "ukg.com",
  category: "hris",
  snapshot: { hq: "Lowell/Weston, USA", founded: "2020 merger (Ultimate + Kronos)", funding: "PE-owned (Hellman & Friedman), ~US$22B+ valuation era", headcount: "~15,000", anz: "Workforce-management-led local presence (Kronos heritage)" },
  targetMarket: "Enterprise HCM and workforce management",
  summary: "HCM giant from the Ultimate-Kronos merger - workforce management heritage (Kronos) plus full HCM (Pro). Enterprise scale, culture-marketing-heavy ('Great Place To Work' ownership).",
  pricing: "Enterprise contracts, premium, payroll/WFM-anchored.",
  features: ["Workforce management (Kronos lineage)", "Full HCM suite (Pro)", "Payroll", "Talent modules", "Great Place To Work survey assets", "AI assistant (Bryte)"],
  integrations: ["SAP and Workday connectors", "ERP and finance", "Single sign-on", "Great Place To Work assets"],
  fabTheirs: { features: "Enterprise HCM plus the workforce management gold standard", advantages: "Scale, compliance, and culture credentials (GPTW)", benefits: "People operations for the largest workforces" },
  fabOurs: { features: "Owning a survey brand is not the same as explaining how people work", advantages: "GPTW badges measure perception; Compono models actual work personality and team dynamics", benefits: "Culture you can engineer, not just certify" },
  wins: ["Talent/culture features are certification-and-survey paradigm - the exact gap we exploit", "Enterprise-only relevance; rare in our segment", "Module depth thin outside payroll/WFM"],
  losses: ["Enormous enterprise installed base", "GPTW brand halo in culture conversations"],
  battlecard: "UKG rarely meets us directly below enterprise. When the GPTW halo enters a culture conversation, the distinction is sharp: a Great Place To Work certificate describes how people felt last quarter; Compono explains how your specific people work and what your teams need next. Certification is marketing; explanation is management.",
  quickTake: {
    theirPitch: "Enterprise scale, compliance and culture credentials - including Great Place To Work ownership.",
    ourAngle: "A GPTW certificate describes how people felt last quarter. We explain how your specific people work and what teams need next.",
    watchOut: "Enormous enterprise base and a culture-brand halo. Rarely meets us below enterprise."
  },
  landmines: [
    "Does a certification change anything about how your teams actually work?",
    "Outside payroll and workforce management, how deep are the modules really?",
    "Is this sized for your organisation, or for the enterprise RFP it came from?"
  ],
  social: "Large corporate presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "hibob",
  name: "HiBob",
  domain: "hibob.com",
  category: "hris",
  snapshot: { hq: "London, UK / Tel Aviv", founded: "2015", funding: "VC-backed, ~US$600M raised, ~US$2.4B valuation", headcount: "~1,950", anz: "Growing ANZ presence, popular with local scale-ups" },
  targetMarket: "Mid-market, modern people-first HRIS",
  summary: "Modern, design-led HRIS ('Bob') popular with fast-growing companies. Strong core HR, culture and engagement features in a slick interface.",
  pricing: "Per employee per month, modular. Mid-range, quote-based.",
  features: ["Core HRIS and people data", "Culture and engagement features", "Onboarding and workflows", "Performance and goals (module)", "Compensation management", "Surveys and analytics", "Time and attendance"],
  integrations: ["ATS connectors (Greenhouse, Lever, Pinpoint)", "Payroll partners", "Slack and Microsoft Teams", "Google and Microsoft 365", "Finance connectors", "Large marketplace"],
  fabTheirs: { features: "Modern HRIS with culture and engagement built in", advantages: "Run core HR with a people-first, engaging experience", benefits: "Tidy HR data and a culture-forward employee experience" },
  fabOurs: { features: "Validated work personality science across hiring, engagement and development", advantages: "Bob's culture and performance modules organise process; Compono adds the behavioural science they lack", benefits: "Keep Bob for core HR - make people decisions on defensible science" },
  wins: ["Engagement and performance modules are feature-deep, not behavioural science", "No validated work personality or matching model", "Survey-and-track worldview, not explanation", "Their breadth is our both/and: keep Bob, add our intelligence"],
  losses: ["Genuinely modern, well-loved HRIS experience", "Strong mid-market and scale-up momentum", "Growing ANZ traction"],
  battlecard: "HiBob is a lovely modern HRIS and prospects enjoy using it - do not attack the core. The wedge: Bob's culture, engagement and performance features are well-designed process tools, but there is no behavioural science underneath them. Ask the prospect to find the validated people model inside Bob - there is not one. Compono coexists: keep Bob as the system of record, use Compono for the hiring, engagement and development decisions that need defensible science. Both/and, not rip-and-replace.",
  quickTake: {
    theirPitch: "The modern, design-led HRIS scale-ups love, with culture and engagement features built in.",
    ourAngle: "Bob's people features are well-designed process tools with no behavioural science underneath. Keep Bob, add our intelligence.",
    watchOut: "Genuinely well-loved product with growing ANZ traction. Do not attack the core."
  },
  landmines: [
    "Find the validated people model inside Bob - what is actually there?",
    "The engagement features track sentiment - what explains it?",
    "When a hiring or team decision gets challenged, what evidence does Bob give you?"
  ],
  social: "Strong modern-HR brand and content. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "worknice",
  name: "Worknice",
  domain: "worknice.com",
  category: "hris",
  snapshot: { hq: "Sydney, Australia", founded: "2021", funding: "Privately held / early VC", headcount: "~30", anz: "ANZ-born, local focus" },
  targetMarket: "ANZ SMB to lower mid-market, modern core HR",
  summary: "Modern ANZ HRIS focused on clean core HR, onboarding and compliance for growing local businesses. Strong usability and local integrations.",
  pricing: "Per employee per month, transparent tiers. Accessible mid-range.",
  features: ["Core HRIS and people data", "Onboarding workflows", "Document and compliance management", "Org charts", "Basic surveys", "Integrations hub", "ANZ support"],
  integrations: ["Payroll (Xero, MYOB, Employment Hero)", "Seek and ATS connectors", "Slack and Microsoft Teams", "Google and Microsoft 365", "Single sign-on"],
  fabTheirs: { features: "Clean modern core HR built for ANZ SMBs", advantages: "Tidy HR admin, onboarding and compliance locally", benefits: "Less HR admin with a friendly local platform" },
  fabOurs: { features: "Validated work personality science across hiring, engagement and development", advantages: "Worknice keeps HR admin tidy; Compono adds the people-decision science it does not attempt", benefits: "Keep Worknice for core HR - make people decisions on science" },
  wins: ["Core HR and compliance focus, no behavioural science or matching", "Surveys are basic, not an explanation model", "No hiring selection science or capability diagnosis", "Their core is our both/and: keep Worknice, add our intelligence"],
  losses: ["Genuinely clean, modern local HRIS", "Good ANZ SMB fit and support", "Strong local payroll integrations"],
  battlecard: "Worknice is a tidy modern HRIS for ANZ SMBs - concede the core admin, it does it well and locally. The wedge: it is deliberately core-HR focused, with no people-decision science. Ask: 'For hiring and development decisions, what science does Worknice give you?' None - that is not its job. Compono coexists: keep Worknice as the system of record, add Compono for defensible hiring, engagement and development decisions. Both/and, with two ANZ players.",
  quickTake: {
    theirPitch: "Clean, modern ANZ HRIS - core HR, onboarding and compliance done tidily and locally.",
    ourAngle: "Deliberately core-HR focused with no people-decision science - which is not its job. Keep Worknice, add Compono. Two ANZ players.",
    watchOut: "Genuinely clean local product with good SMB fit and support."
  },
  landmines: [
    "For hiring and development decisions, what science does Worknice give you?",
    "The records are tidy - what informs the decisions about the people in them?",
    "As you grow, what carries fit and capability data across the lifecycle?"
  ],
  social: "Growing ANZ SMB-HR presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "deputy",
  name: "Deputy",
  domain: "deputy.com",
  category: "hris",
  snapshot: { hq: "Sydney, Australia", founded: "2008", funding: "VC-backed (raised US$100M+)", headcount: "~400", anz: "ANZ-born, strong global shift-work presence" },
  targetMarket: "Shift-based and hourly workforces, hospitality, retail, healthcare",
  summary: "ANZ-born workforce management leader for shift-based teams - rostering, time and attendance, and labour compliance. Dominant in hospitality and retail scheduling.",
  pricing: "Per user per month, scheduling and time modules. Mid-range, volume-friendly.",
  features: ["Rostering and scheduling", "Time and attendance", "Labour compliance and awards", "Shift swapping and communication", "Wage and cost tracking", "Payroll integration", "Mobile app"],
  integrations: ["Payroll (Xero, MYOB, ADP, KeyPay)", "POS systems", "Accounting connectors", "HRIS connectors", "Single sign-on", "API"],
  fabTheirs: { features: "Best-in-class rostering and time for shift workforces", advantages: "Schedule, track and pay hourly teams compliantly", benefits: "Right people, right shifts, compliant labour cost" },
  fabOurs: { features: "Validated work personality science for hiring, engagement and development", advantages: "Deputy optimises when people work; Compono informs who you hire and how they fit and grow", benefits: "Keep Deputy for scheduling - make people decisions on science" },
  wins: ["Workforce scheduling, not people-decision science", "No behavioural matching, engagement explanation or capability model", "High-turnover sectors where hiring fit matters most are left unsupported on selection", "Their scheduling is our both/and: keep Deputy, add our hiring intelligence"],
  losses: ["Best-in-class shift scheduling and time", "ANZ-born hero brand with global reach", "Deep hospitality and retail penetration"],
  battlecard: "Deputy owns shift scheduling and does it superbly - never fight it there. The wedge is scope: Deputy decides when people work, not who you should hire or how they fit. In hospitality and retail, where turnover is brutal, selection fit is exactly the unsolved problem. Ask: 'Deputy rosters them - but what helps you hire the right people in the first place?' Compono adds validated work personality matching. Keep Deputy for scheduling; add Compono for the hire. Both/and.",
  quickTake: {
    theirPitch: "Best-in-class shift scheduling, time and labour compliance for hourly teams.",
    ourAngle: "Deputy decides when people work, not who you should hire. In high-turnover sectors, selection is the unsolved problem.",
    watchOut: "ANZ-born hero brand, dominant in hospitality and retail scheduling. Never fight it there."
  },
  landmines: [
    "Deputy rosters them - but what helps you hire the right people in the first place?",
    "Turnover is brutal in your sector - what is fixing selection, not just scheduling?",
    "What does one wrong frontline hire cost across churn, training and coverage?"
  ],
  social: "Strong ANZ and global shift-work presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "tanda",
  name: "Tanda",
  domain: "tanda.co",
  category: "hris",
  snapshot: { hq: "Brisbane, Australia", founded: "2012", funding: "Privately held / VC", headcount: "~200", anz: "ANZ-born, strong local workforce-management presence" },
  targetMarket: "ANZ shift-based and hourly workforces, retail, hospitality, healthcare",
  summary: "ANZ workforce management platform for rostering, time and attendance, and wage compliance. Strong on award interpretation and 'wage compliance' for hourly workforces.",
  pricing: "Per employee per month, workforce-management modules. Mid-range.",
  features: ["Rostering and scheduling", "Time and attendance", "Award and wage compliance", "Onboarding", "Labour cost management", "Payroll integration", "Mobile clock-in"],
  integrations: ["Payroll (Xero, MYOB, ADP, KeyPay)", "POS systems", "Accounting connectors", "HRIS connectors", "Single sign-on", "API"],
  fabTheirs: { features: "Rostering, time and award compliance for ANZ hourly teams", advantages: "Schedule and pay shift workers accurately under complex awards", benefits: "Compliant labour cost and less payroll risk" },
  fabOurs: { features: "Validated work personality science for hiring, engagement and development", advantages: "Tanda manages and pays the shift; Compono informs who to hire and how they fit", benefits: "Keep Tanda for workforce management - make people decisions on science" },
  wins: ["Workforce management and compliance, not people-decision science", "No behavioural matching or capability diagnosis", "High-turnover sectors left unsupported on selection fit", "Their compliance core is our both/and: keep Tanda, add our hiring intelligence"],
  losses: ["Strong ANZ award-compliance depth", "Solid local workforce-management brand", "Good payroll and POS integration"],
  battlecard: "Tanda is strong on ANZ award compliance and rostering - concede it, award interpretation is genuinely hard and valuable. The wedge is scope: Tanda gets people paid correctly for shifts worked; it has nothing to say about who you should hire or whether they fit. Ask: 'Tanda handles the roster and the award - but what helps you pick the right person for a high-turnover role?' Compono adds validated work personality matching. Keep Tanda; add Compono. Both/and, both ANZ.",
  quickTake: {
    theirPitch: "Rostering, time and wage compliance - complex ANZ awards interpreted correctly.",
    ourAngle: "Tanda gets people paid correctly for shifts worked. It has nothing to say about who you should hire or whether they fit.",
    watchOut: "Genuine award-compliance depth - hard, valuable work. Concede it."
  },
  landmines: [
    "The award is handled - but what helps you pick the right person for a high-turnover role?",
    "Compliance protects the pay run - what protects the hiring decision?",
    "What in the platform reduces churn rather than administering it?"
  ],
  social: "Solid ANZ workforce-management presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "the-access-group",
  name: "The Access Group",
  domain: "theaccessgroup.com",
  category: "hris",
  snapshot: { hq: "Loughborough, UK", founded: "1991", funding: "PE-backed (large)", headcount: "~7,000", anz: "Acquired into ANZ (incl. local HR/payroll brands), growing presence" },
  targetMarket: "Mid-market to enterprise, broad business and HR software suite",
  summary: "Large UK-headquartered business software group with a broad HR, payroll, recruitment and learning portfolio, often assembled through acquisition. Growing in ANZ via acquired local brands.",
  pricing: "Module-based licensing across a wide suite. Mid to high, quote-based.",
  features: ["HR and payroll suite", "Recruitment and onboarding modules", "Learning and compliance", "Workforce management", "Expenses and finance crossover", "Analytics", "Broad acquired portfolio"],
  integrations: ["Within Access suite (native)", "Payroll and finance connectors", "Single sign-on", "HRIS and ATS connectors", "API"],
  fabTheirs: { features: "Broad HR, payroll, recruitment and learning suite", advantages: "Consolidate many HR functions with one vendor", benefits: "Fewer vendors across a wide range of HR needs" },
  fabOurs: { features: "Validated work personality science across hiring, engagement and development", advantages: "Access offers broad modules assembled by acquisition; Compono offers specialist depth and science where decisions are made", benefits: "Keep Access for admin breadth - make people decisions on specialist science" },
  wins: ["Broad but acquisition-assembled - modules vary in depth and integration", "No validated behavioural science anywhere in the stack", "Recruitment and learning modules are process tools, not people intelligence", "Their breadth is our both/and: keep Access admin, add our intelligence"],
  losses: ["Genuine breadth across HR, payroll and finance", "Large, well-resourced vendor", "Growing ANZ footprint via acquisitions"],
  battlecard: "The Access Group sells breadth - a wide suite that consolidates vendors. Concede the convenience. The wedge is depth and coherence: acquisition-built suites have uneven modules and, crucially, no validated people science. Ask the prospect to find the behavioural model inside the recruitment or learning module - there is not one. Compono coexists: keep Access for broad admin, use Compono for the hiring, engagement and development decisions that need specialist science. Both/and beats a shallow all-in-one.",
  quickTake: {
    theirPitch: "One large vendor consolidating HR, payroll, recruitment and learning - much of it acquired.",
    ourAngle: "Acquisition-built suites have uneven modules and no validated people science. Keep Access for admin, add our intelligence.",
    watchOut: "Genuine breadth, deep resources and a growing ANZ footprint via acquisitions."
  },
  landmines: [
    "Find the behavioural model inside the recruitment or learning module - what is there?",
    "How well do the acquired modules actually integrate with each other?",
    "Which module would you have chosen on its own merits?"
  ],
  social: "Corporate suite presence, acquisition-led. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "personio",
  name: "Personio",
  domain: "personio.com",
  category: "hris",
  snapshot: { hq: "Munich, Germany", founded: "2015", funding: "VC-backed, ~US$725M raised (unicorn)", headcount: "~1,850", anz: "Europe-centric, limited ANZ presence" },
  targetMarket: "European SMB to mid-market, all-in-one HR",
  summary: "Leading European all-in-one HR platform for SMB and mid-market - core HR, recruiting, payroll (in some markets) and performance in one system. Dominant in the DACH region.",
  pricing: "Per employee per month, modular. Mid-range, quote-based.",
  features: ["Core HRIS", "Recruiting and ATS module", "Onboarding", "Performance and development module", "Absence and time", "Payroll (select markets)", "Reporting"],
  integrations: ["ATS and job board connectors", "Payroll partners", "Slack and Microsoft Teams", "Accounting and finance", "Marketplace", "API"],
  fabTheirs: { features: "All-in-one HR for European SMB and mid-market", advantages: "Run core HR, hiring and performance in one platform", benefits: "Consolidated HR with less admin and fewer vendors" },
  fabOurs: { features: "Validated work personality science across hiring, engagement and development", advantages: "Personio's recruiting and performance modules organise process; Compono adds the behavioural science they lack", benefits: "Keep Personio for core HR - make people decisions on defensible science" },
  wins: ["Recruiting and performance modules are process features, not behavioural science", "No validated work personality or matching model", "Europe-focused with limited ANZ relevance and support", "Their breadth is our both/and: keep Personio, add our intelligence"],
  losses: ["Strong all-in-one breadth for SMB and mid-market", "Dominant European brand with deep funding", "Genuinely capable core HR"],
  battlecard: "Personio is a strong all-in-one in Europe - concede the breadth where it is relevant, though note its limited ANZ presence. The wedge is the suite pattern: its recruiting and performance modules are competent process tools with no people science underneath. Ask the prospect to find the validated behavioural model - there is none. Compono coexists: keep Personio for core HR, add Compono for decisions that need defensible science. Both/and, not rip-and-replace.",
  quickTake: {
    theirPitch: "Europe's leading all-in-one HR platform for SMB and mid-market.",
    ourAngle: "The suite pattern - competent process modules with no people science underneath. And limited ANZ presence.",
    watchOut: "Strong all-in-one breadth and deep funding, dominant in DACH."
  },
  landmines: [
    "Find the validated behavioural model in the recruiting or performance module - what is there?",
    "What does ANZ support and localisation look like for a Europe-focused vendor?",
    "Broad modules, but which people decision got better?"
  ],
  social: "Strong European HR brand. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "foundu",
  name: "Foundu",
  domain: "foundu.com.au",
  category: "hris",
  snapshot: { hq: "Brisbane, Australia", founded: "2017", funding: "Privately held", headcount: "~50", anz: "ANZ-born, local workforce-management focus" },
  targetMarket: "ANZ shift-based and hourly workforces, all-in-one workforce management",
  summary: "ANZ all-in-one workforce management and payroll platform for hourly and shift-based businesses - onboarding, rostering, time, and payroll in one local system.",
  pricing: "Per employee per month, all-in-one. Mid-range.",
  features: ["Onboarding and HR", "Rostering and scheduling", "Time and attendance", "Award interpretation", "Native payroll", "Communication tools", "Mobile app"],
  integrations: ["Accounting (Xero, MYOB)", "POS systems", "HRIS connectors", "Single sign-on", "API"],
  fabTheirs: { features: "All-in-one workforce management and payroll for ANZ hourly teams", advantages: "Onboard, roster, track and pay shift workers in one local platform", benefits: "One system for the whole shift-work employment cycle" },
  fabOurs: { features: "Validated work personality science for hiring, engagement and development", advantages: "Foundu manages and pays the workforce; Compono informs who to hire and how they fit", benefits: "Keep Foundu for workforce management - make people decisions on science" },
  wins: ["Workforce management and payroll, not people-decision science", "No behavioural matching or capability diagnosis", "High-turnover sectors left unsupported on selection fit", "Their operational core is our both/and: keep Foundu, add our hiring intelligence"],
  losses: ["Genuine ANZ all-in-one workforce-management depth", "Native payroll and award handling", "Good local fit for shift-based SMBs"],
  battlecard: "Foundu is a capable ANZ all-in-one for shift-based businesses - concede the operational breadth and native payroll. The wedge is scope: Foundu runs the operational employment cycle but has no people-decision science. Ask: 'Foundu rosters and pays them - but what helps you hire the right people for high-turnover roles?' Compono adds validated work personality matching. Keep Foundu for operations; add Compono for the hire. Both/and, both ANZ.",
  quickTake: {
    theirPitch: "ANZ all-in-one for shift businesses - onboarding, rostering, time and native payroll.",
    ourAngle: "Foundu runs the operational employment cycle. It has no people-decision science. Keep it for operations, add us for the hire.",
    watchOut: "Genuine local all-in-one depth with native payroll and award handling."
  },
  landmines: [
    "Foundu rosters and pays them - but what helps you hire the right people for high-turnover roles?",
    "The operations are covered - what covers the decisions?",
    "What is churn costing you that better selection would fix?"
  ],
  social: "Local workforce-management presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "roubler",
  name: "Roubler",
  domain: "roubler.com",
  category: "hris",
  snapshot: { hq: "Brisbane, Australia", founded: "2015", funding: "Privately held", headcount: "~100", anz: "ANZ-born, also in UK and Asia" },
  targetMarket: "Shift-based and hourly workforces, all-in-one HR and payroll",
  summary: "ANZ-born all-in-one workforce management platform - hiring, onboarding, rostering, time, and native payroll in a single system for shift-based businesses across several countries.",
  pricing: "Per employee per month, all-in-one. Mid-range.",
  features: ["Hiring and onboarding", "Rostering and scheduling", "Time and attendance", "Award interpretation", "Native single-platform payroll", "HR management", "Mobile app"],
  integrations: ["Accounting (Xero, MYOB)", "POS systems", "HRIS connectors", "Single sign-on", "API"],
  fabTheirs: { features: "One platform from hire to pay for shift workforces", advantages: "Manage the entire shift-work employment cycle in one system", benefits: "Seamless workforce management without stitching tools together" },
  fabOurs: { features: "Validated work personality science across hiring, engagement and development", advantages: "Roubler's hiring module organises the process; Compono adds the selection science it lacks", benefits: "Keep Roubler for the operational cycle - make people decisions on science" },
  wins: ["Hiring module is workflow, not behavioural matching science", "No validated work personality or capability model", "High-turnover sectors left unsupported on selection fit", "Their single-platform core is our both/and: keep Roubler, add our intelligence"],
  losses: ["Genuine end-to-end single-platform breadth", "Native payroll across multiple countries", "Good fit for multi-site shift businesses"],
  battlecard: "Roubler's pitch is one platform from hire to pay - concede the operational elegance. The wedge: the hiring module is a workflow, not selection science. Ask the prospect to find the validated behavioural model inside it - there is not one. Compono coexists: keep Roubler for the operational employment cycle, add Compono for the hiring, engagement and development decisions that need defensible science. Both/and, with two ANZ-born players.",
  quickTake: {
    theirPitch: "One system from hire to pay for shift-based, multi-site businesses.",
    ourAngle: "The hiring module is a workflow, not selection science. Keep Roubler for the cycle, add Compono for the decisions.",
    watchOut: "Genuine end-to-end breadth with native payroll across several countries."
  },
  landmines: [
    "Inside the hiring module, where is the validated behavioural model?",
    "Hire to pay is covered - but is the hire any better than before?",
    "What does the platform know about fit, engagement drivers or capability?"
  ],
  social: "ANZ and international workforce-management presence. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "adp-workforce-now",
  name: "ADP Workforce Now",
  domain: "adp.com",
  category: "hris",
  snapshot: { hq: "Roseland, USA", founded: "ADP 1949", funding: "NASDAQ-listed (ADP)", headcount: "60,000+ (ADP overall)", anz: "Global with ANZ payroll and HR presence" },
  targetMarket: "Mid-market to enterprise, payroll-led HCM",
  summary: "ADP's mid-market to enterprise HCM suite - payroll, HR, benefits, talent and time on one platform, backed by ADP's payroll and compliance scale.",
  pricing: "Per employee per month plus payroll fees, modular. Mid to high, quote-based.",
  features: ["Core HR and payroll", "Benefits administration", "Talent and performance modules", "Time and attendance", "Compliance and tax", "Analytics and benchmarking", "Recruiting module"],
  integrations: ["ADP Marketplace (large)", "ATS and HRIS connectors", "Finance and ERP", "Single sign-on", "API"],
  fabTheirs: { features: "Payroll-led HCM at scale with compliance backing", advantages: "Run payroll, HR and talent on one compliant global platform", benefits: "Reliable payroll and HR with ADP's scale behind it" },
  fabOurs: { features: "Validated work personality science across hiring, engagement and development", advantages: "ADP's talent modules organise process; Compono adds the behavioural science they lack", benefits: "Keep ADP for payroll and HR - make people decisions on defensible science" },
  wins: ["Talent and performance modules are process features bolted to payroll, no people science", "Suite breadth without validated behavioural matching", "Enterprise weight and cost for mid-market buyers", "Their payroll core is our both/and: keep ADP, add our intelligence"],
  losses: ["Unmatched payroll and compliance scale", "Trusted global brand and reliability", "Broad HCM module coverage"],
  battlecard: "Never fight ADP on payroll - concede it and compliment the compliance scale. The wedge: ADP's talent and performance modules are admin features attached to a payroll engine, with no behavioural science. Ask the prospect to open the recruiting or performance module and find the people model - there is none. Compono coexists: keep ADP for payroll and HR, use Compono for the decisions that determine who you hire and how they perform. Both/and defuses the consolidation pitch.",
  quickTake: {
    theirPitch: "Payroll, HR and talent on one platform, backed by ADP's compliance scale.",
    ourAngle: "The talent modules are admin features attached to a payroll engine. Keep ADP for pay, add Compono for the decisions.",
    watchOut: "Unmatched payroll and compliance scale from a trusted global brand. Never fight the payroll."
  },
  landmines: [
    "Open the recruiting or performance module - where is the people model?",
    "How much of the suite does your HR team actively use beyond payroll?",
    "What is the enterprise weight costing a mid-market team in fees and admin?"
  ],
  social: "Massive global payroll-and-HR brand. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "workday",
  name: "Workday",
  domain: "workday.com",
  category: "hris",
  snapshot: { hq: "Pleasanton, USA", founded: "2005", funding: "NASDAQ-listed", headcount: "~20,000", anz: "Strong ANZ enterprise presence" },
  targetMarket: "Large enterprise, HCM and finance",
  summary: "Leading enterprise HCM and finance suite. The system of record for large organisations - core HR, talent, payroll, learning and analytics at scale, with significant implementation weight.",
  pricing: "Enterprise subscription, high cost, long implementations. Quote-based.",
  features: ["Enterprise core HCM", "Talent and performance", "Workday Learning", "Payroll and finance", "Recruiting (Workday Recruiting)", "Skills Cloud", "Advanced analytics"],
  integrations: ["Huge enterprise ecosystem", "ATS and assessment connectors", "Finance and ERP (native)", "Single sign-on", "Content providers (Go1)", "API"],
  fabTheirs: { features: "Enterprise system of record across HCM and finance", advantages: "One authoritative platform for HR, talent and finance at scale", benefits: "Unified enterprise data and process control" },
  fabOurs: { features: "Validated work personality science, right-sized and embedded across hire, engage and develop", advantages: "Workday is the enterprise system of record; Compono is the specialist people-decision science it lacks - and far lighter to adopt", benefits: "Keep Workday as the record - make people decisions on science without enterprise weight" },
  wins: ["Talent, recruiting and learning modules are process and tracking, not validated behavioural science", "Skills Cloud is inference and tagging, not work personality diagnosis", "Enterprise cost, complexity and implementation weight - a liability for mid-market", "Their system of record is our both/and: keep Workday, add our intelligence"],
  losses: ["Dominant enterprise system of record", "Unmatched breadth and data unification at scale", "Deep enterprise credibility and ANZ presence"],
  battlecard: "Workday is the enterprise gravity well - for a true enterprise, it is the system of record and you concede that. Two wedges. First, both/and: Workday's talent and learning modules track process, with no validated behavioural science - keep Workday, add Compono for the decisions. Second, right-sizing: for a 60-1000 employee mid-market prospect, Workday's weight, cost and implementation are a liability, not a benefit. Ask: 'Do you need an enterprise system of record, or people-decision science you can adopt in weeks?' Compono is the latter.",
  quickTake: {
    theirPitch: "The enterprise system of record - HR, talent, payroll and analytics at maximum scale.",
    ourAngle: "Two wedges - keep Workday, add our science for decisions; and for mid-market, its weight and cost are a liability, not a benefit.",
    watchOut: "The enterprise gravity well, with deep ANZ presence. For true enterprises, concede the record."
  },
  landmines: [
    "Do you need an enterprise system of record, or people-decision science you can adopt in weeks?",
    "Is Skills Cloud validated measurement, or inference and tagging?",
    "What will implementation cost and take before anyone sees value?"
  ],
  social: "Dominant enterprise-HCM brand. Verify on refresh.",
  recentActivity: [
    { date: "Jun 2026", note: "A US federal court allowed state discrimination claims to proceed in the long-running lawsuit alleging bias in Workday's AI screening tools. Buyers are asking harder questions about black-box AI in hiring." },
    { date: "May 2026", note: "Named a Leader in the 2026 Gartner Magic Quadrant for Talent Acquisition and reported quarterly revenue of US$2.54 billion, up 13.5 per cent." }
  ]
}
,
{
  id: "sap-successfactors",
  name: "SAP SuccessFactors",
  domain: "sap.com",
  category: "hris",
  snapshot: { hq: "Walldorf, Germany (SAP)", founded: "SuccessFactors 2001, SAP acquired 2012", funding: "Part of SAP (NYSE/Frankfurt-listed)", headcount: "Part of SAP", anz: "Strong ANZ enterprise presence" },
  targetMarket: "Large enterprise, global HCM",
  summary: "SAP's enterprise HCM suite - core HR, talent, recruiting, learning and analytics for large global organisations, deeply tied to the SAP ecosystem with heavy implementations.",
  pricing: "Enterprise subscription, high cost, long implementations. Quote-based.",
  features: ["Enterprise core HR (Employee Central)", "Recruiting and onboarding", "Performance and goals", "Learning (SAP SuccessFactors Learning)", "Succession and development", "Compensation", "Analytics"],
  integrations: ["SAP ecosystem (native)", "ATS and assessment connectors", "Finance and ERP", "Single sign-on", "Content providers", "API"],
  fabTheirs: { features: "Enterprise HCM across the SAP ecosystem", advantages: "Unify global HR, talent and learning at enterprise scale", benefits: "One enterprise HCM tied to the SAP backbone" },
  fabOurs: { features: "Validated work personality science, right-sized and embedded across hire, engage and develop", advantages: "SuccessFactors is the enterprise HCM record; Compono is the people-decision science it lacks - and far lighter to adopt", benefits: "Keep SuccessFactors as the record - make people decisions on science without enterprise drag" },
  wins: ["Talent, recruiting and learning modules track process, with no validated behavioural science", "Heavy, slow, costly implementations", "Enterprise weight is a liability for mid-market buyers", "Their HCM record is our both/and: keep SuccessFactors, add our intelligence"],
  losses: ["Enterprise breadth and SAP ecosystem integration", "Global scale and deep enterprise credibility", "Strong ANZ enterprise footprint"],
  battlecard: "SAP SuccessFactors is enterprise infrastructure - for SAP-committed enterprises, concede it as the HCM record. Same two wedges as Workday. Both/and: its modules are process and tracking, no behavioural science - keep SuccessFactors, add Compono for the decisions. Right-sizing: for a mid-market prospect, SuccessFactors' implementation weight and cost are a board-level liability. Ask: 'Do you want enterprise HCM infrastructure, or people-decision science live in weeks?' Compono is defensible, specialist, and light.",
  quickTake: {
    theirPitch: "Global enterprise HCM unified with the SAP ecosystem.",
    ourAngle: "Same two wedges as Workday - process modules with no behavioural science, and implementation weight a mid-market board should question.",
    watchOut: "Enterprise breadth and a strong ANZ enterprise footprint. Concede it for SAP-committed enterprises."
  },
  landmines: [
    "Do you want enterprise HCM infrastructure, or people-decision science live in weeks?",
    "What did the last SuccessFactors implementation cost, and how long did it run?",
    "Where is the validated behavioural science in the talent modules?"
  ],
  social: "Enterprise-HCM presence via SAP. Verify on refresh.",
  recentActivity: [
    { date: "Jun 2026", note: "At Sapphire, SAP repositioned its AI stack under new SAP Business AI and Autonomous Suite brands, shifting messaging from AI features to business outcomes." }
  ]
}
,
{
  id: "oracle-hcm",
  name: "Oracle HCM (Fusion Cloud HCM)",
  domain: "oracle.com",
  category: "hris",
  snapshot: { hq: "Austin, USA (Oracle)", founded: "Oracle 1977; Fusion HCM 2011", funding: "NYSE-listed (Oracle)", headcount: "Part of Oracle", anz: "Strong ANZ enterprise presence" },
  targetMarket: "Large enterprise, global HCM and ERP",
  summary: "Oracle's enterprise HCM cloud - core HR, talent, recruiting, learning and analytics, tied to Oracle's ERP and database backbone, built for very large global organisations.",
  pricing: "Enterprise subscription, high cost, long implementations. Quote-based.",
  features: ["Enterprise core HCM", "Oracle Recruiting Cloud", "Talent and performance", "Learning module", "Compensation and benefits", "Workforce analytics", "ERP integration"],
  integrations: ["Oracle ERP and ecosystem (native)", "ATS and assessment connectors", "Finance systems", "Single sign-on", "API"],
  fabTheirs: { features: "Enterprise HCM tied to Oracle ERP", advantages: "Run global HR and talent on the Oracle backbone", benefits: "Unified enterprise HCM and ERP data" },
  fabOurs: { features: "Validated work personality science, right-sized and embedded across hire, engage and develop", advantages: "Oracle HCM is the enterprise record; Compono is the people-decision science it lacks - and adoptable in weeks not years", benefits: "Keep Oracle as the record - make people decisions on science without enterprise weight" },
  wins: ["Talent, recruiting and learning modules track process, with no validated behavioural science", "Heavy, costly, slow implementations", "Enterprise complexity is a liability for mid-market", "Their HCM record is our both/and: keep Oracle, add our intelligence"],
  losses: ["Enterprise breadth and Oracle ecosystem integration", "Global scale and credibility", "Strong ANZ enterprise presence"],
  battlecard: "Oracle HCM is enterprise ERP-grade infrastructure - concede it for Oracle-committed enterprises. Same two wedges. Both/and: modules are process and tracking, no behavioural science - keep Oracle, add Compono for decisions. Right-sizing: for mid-market, Oracle's weight, cost and implementation timeline are a liability you can name to a board. Ask: 'Do you need enterprise HCM infrastructure, or people-decision science you can run in weeks?' Compono is specialist, defensible and light.",
  quickTake: {
    theirPitch: "Global HR and talent on the Oracle ERP backbone, at very large scale.",
    ourAngle: "Enterprise infrastructure with no people science in the talent modules. Keep Oracle where it belongs, add our decision layer.",
    watchOut: "Enterprise scale and ecosystem integration, with real ANZ enterprise presence."
  },
  landmines: [
    "Do you need enterprise HCM infrastructure, or people-decision science you can run in weeks?",
    "What is the realistic implementation timeline and cost for an organisation your size?",
    "Which talent module improves a decision rather than recording one?"
  ],
  social: "Enterprise-HCM presence via Oracle. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "xero-payroll",
  name: "Xero Payroll",
  domain: "xero.com",
  category: "hris",
  snapshot: { hq: "Wellington, New Zealand", founded: "Xero 2006", funding: "ASX-listed", headcount: "~5,000 (Xero overall)", anz: "ANZ-born, dominant small-business accounting and payroll" },
  targetMarket: "ANZ small business, accounting-led payroll",
  summary: "Payroll built into Xero's dominant ANZ small-business accounting platform. Not an HRIS or talent system - payroll and basic employee admin within the accounting ledger. Complementary to Compono.",
  pricing: "Included with or added to Xero accounting subscriptions. Low cost, per-employee payroll.",
  features: ["Payroll within accounting", "Employee pay and leave", "Superannuation and STP compliance", "Timesheets (basic)", "Payslips", "Basic employee records", "Accounting integration (native)"],
  integrations: ["Xero accounting (native)", "Workforce management (Deputy, Tanda)", "HRIS connectors", "Banking", "Single sign-on"],
  fabTheirs: { features: "Payroll inside the dominant ANZ small-business ledger", advantages: "Pay people and keep the books in one accounting platform", benefits: "Simple, compliant small-business payroll" },
  fabOurs: { features: "Validated work personality science across hiring, engagement and development", advantages: "Xero handles pay and the ledger; Compono handles who you hire and how they fit and grow", benefits: "Keep Xero for payroll - make people decisions on science" },
  wins: ["Payroll and accounting, not an HRIS or people-decision platform at all", "No talent, engagement or behavioural capability", "Clearly complementary, rarely a real competitor", "Their payroll is our both/and: keep Xero, add our intelligence"],
  losses: ["Dominant ANZ small-business accounting and payroll", "Trusted, ubiquitous local brand", "Deep accountant-channel relationships"],
  battlecard: "Xero is not really a competitor - it is a complement, and you should say so plainly. Xero handles accounting and payroll for small business; it does not attempt hiring, engagement or development. There is no contest on people decisions because Xero does not play there. The line is simple: keep Xero for the books and the pay run, add Compono for the people decisions Xero was never built to make. Pure both/and - and a natural integration story given Xero's ANZ ubiquity.",
  quickTake: {
    theirPitch: "Payroll inside the accounting platform most ANZ small businesses already run.",
    ourAngle: "Not a competitor - a complement. Keep Xero for the books and the pay run, add Compono for the people decisions it was never built to make.",
    watchOut: "Ubiquitous, trusted, and deeply tied to the accountant channel. Say plainly there is no contest."
  },
  landmines: [
    "Xero pays them - what helps you decide who to hire and how they fit?",
    "Where do hiring, engagement and development live in your current stack?",
    "What would connecting people decisions to your Xero-run business look like?"
  ],
  social: "Dominant ANZ small-business brand. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "myob",
  name: "MYOB",
  domain: "myob.com",
  category: "hris",
  snapshot: { hq: "Melbourne, Australia", founded: "1991", funding: "PE-backed (KKR)", headcount: "~1,500", anz: "ANZ-born, major small-business accounting and payroll" },
  targetMarket: "ANZ small to mid business, accounting-led payroll",
  summary: "Long-established ANZ accounting and business management platform with payroll and basic employee admin. Like Xero, an accounting-and-payroll system rather than an HRIS or talent platform. Complementary to Compono.",
  pricing: "Subscription accounting tiers with payroll. Low to mid, per-employee payroll.",
  features: ["Accounting and business management", "Payroll and STP compliance", "Employee pay and leave", "Superannuation", "Basic timesheets", "Payslips", "Accounting integration (native)"],
  integrations: ["MYOB accounting (native)", "Workforce management (Deputy, Tanda)", "HRIS connectors", "Banking", "Single sign-on"],
  fabTheirs: { features: "Accounting and payroll for ANZ business", advantages: "Run the books and pay staff in one established local platform", benefits: "Compliant accounting and payroll from a trusted local name" },
  fabOurs: { features: "Validated work personality science across hiring, engagement and development", advantages: "MYOB handles accounting and pay; Compono handles who you hire and how they fit and grow", benefits: "Keep MYOB for payroll - make people decisions on science" },
  wins: ["Accounting and payroll, not an HRIS or people-decision platform", "No talent, engagement or behavioural capability", "Clearly complementary, rarely a real competitor", "Their payroll is our both/and: keep MYOB, add our intelligence"],
  losses: ["Long-established ANZ accounting and payroll brand", "Deep small-business and accountant relationships", "Trusted local incumbent"],
  battlecard: "Like Xero, MYOB is a complement, not a competitor - be straight about that. MYOB does accounting and payroll; it does not attempt hiring, engagement or development, so there is no contest on people decisions. The line: keep MYOB for the books and the pay run, add Compono for the people decisions it was never designed to make. Both/and, with an obvious local integration story.",
  quickTake: {
    theirPitch: "Long-established ANZ accounting and payroll with basic employee admin.",
    ourAngle: "Like Xero - a complement, not a competitor. MYOB does the books and the pay run; we do the people decisions.",
    watchOut: "Deep small-business and accountant relationships. Be straight that there is no contest."
  },
  landmines: [
    "MYOB pays them - what informs who you hire and how they perform?",
    "Where does people data live beyond the payroll record?",
    "What would defensible hiring look like alongside the MYOB core?"
  ],
  social: "Established ANZ small-business brand. Verify on refresh.",
  recentActivity: []
}
,
{
  id: "deel",
  name: "Deel",
  domain: "deel.com",
  category: "hris",
  snapshot: { hq: "San Francisco, USA", founded: "2019", funding: "VC-backed, ~US$1.3B raised, ~US$17B valuation (IPO expected)", headcount: "~9,000", anz: "Global, growing ANZ presence for global hiring" },
  targetMarket: "Companies hiring globally, contractors and EOR, plus emerging HRIS",
  summary: "Fast-growing global payroll, contractor and employer-of-record (EOR) platform, now expanding into core HRIS. Strong for hiring and paying people across borders compliantly.",
  pricing: "Per contractor/employee per month plus EOR fees. Mid-range, usage-based.",
  features: ["Global payroll", "Contractor management", "Employer of record (EOR)", "Compliance across countries", "Core HRIS (emerging)", "Onboarding", "Immigration and equity support"],
  integrations: ["HRIS and ATS connectors", "Accounting (Xero, NetSuite, QuickBooks)", "Slack and Microsoft Teams", "Single sign-on", "Large marketplace", "API"],
  fabTheirs: { features: "Global payroll, contractors and EOR in one platform", advantages: "Hire and pay anyone, anywhere, compliantly", benefits: "Global workforce without local entities or compliance headaches" },
  fabOurs: { features: "Validated work personality science across hiring, engagement and development", advantages: "Deel solves the logistics of global employment; Compono solves who to hire and how they fit", benefits: "Keep Deel for global pay and compliance - make people decisions on science" },
  wins: ["Global payroll and compliance, not people-decision science", "Emerging HRIS modules are process, not behavioural matching", "No validated work personality or capability model", "Their global-employment engine is our both/and: keep Deel, add our intelligence"],
  losses: ["Best-in-class global payroll, contractor and EOR", "Huge momentum and funding", "Strong fit for distributed and global teams"],
  battlecard: "Deel won the global-employment logistics race - concede it, paying people compliantly across borders is genuinely hard. The wedge is scope: Deel solves how to employ and pay globally; its emerging HRIS is process, with no people-decision science. Ask: 'Deel gets them hired and paid anywhere - but what helps you decide who to hire and whether they fit?' Compono adds validated work personality science. Keep Deel for global employment; add Compono for the decision. Both/and.",
  quickTake: {
    theirPitch: "Hire and pay anyone, anywhere, compliantly - global payroll, contractors and EOR.",
    ourAngle: "Deel solves how to employ and pay globally. We solve who to hire and whether they fit. Keep Deel, add Compono.",
    watchOut: "Best-in-class global employment logistics with huge momentum. Concede it - it is genuinely hard."
  },
  landmines: [
    "Deel gets them hired and paid anywhere - but what helps you decide who to hire?",
    "The emerging HRIS modules - process, or people science?",
    "Across a distributed team, what tells you how people fit and work together?"
  ],
  social: "Very high-profile global-employment brand. Verify on refresh.",
  recentActivity: [
    { date: "Jul 2026", note: "Asked the court to strike key claims in Rippling's espionage lawsuit after the central witness refused to testify. The dispute keeps trust questions in front of buyers." },
    { date: "Feb 2026", note: "A US federal court allowed Rippling's racketeering and trade-secret claims to proceed against Deel and its top executives." }
  ]
}
,
{
  id: "remote",
  name: "Remote",
  domain: "remote.com",
  category: "hris",
  snapshot: { hq: "San Francisco, USA (remote-first)", founded: "2019", funding: "VC-backed (raised US$300M+, unicorn)", headcount: "~1,500", anz: "Global, ANZ coverage for global hiring" },
  targetMarket: "Companies hiring globally, EOR and global payroll",
  summary: "Global employer-of-record and payroll platform for hiring international talent compliantly, with emerging core HR features. Deel's main rival in the global-employment category.",
  pricing: "Per employee/contractor per month plus EOR fees. Mid-range, usage-based.",
  features: ["Employer of record (EOR)", "Global payroll", "Contractor management", "Compliance across countries", "Core HR (emerging)", "Onboarding", "Equity and benefits support"],
  integrations: ["HRIS and ATS connectors", "Accounting (Xero, QuickBooks, NetSuite)", "Slack", "Single sign-on", "API"],
  fabTheirs: { features: "Compliant global employment and payroll via EOR", advantages: "Employ international talent without local entities", benefits: "Global hiring made compliant and simple" },
  fabOurs: { features: "Validated work personality science across hiring, engagement and development", advantages: "Remote solves the legal logistics of global employment; Compono solves who to hire and how they fit", benefits: "Keep Remote for global employment - make people decisions on science" },
  wins: ["Global employment and payroll, not people-decision science", "Emerging HR features are process, not behavioural matching", "No validated work personality or capability model", "Their EOR engine is our both/and: keep Remote, add our intelligence"],
  losses: ["Strong global EOR and payroll capability", "Good compliance coverage and momentum", "Solid fit for distributed teams"],
  battlecard: "Remote, like Deel, solves global-employment logistics well - concede it. The wedge is identical: Remote handles the legal and payroll mechanics of employing people internationally; it has no people-decision science. Ask: 'Remote gets them legally employed anywhere - but what tells you they are the right hire?' Compono adds validated work personality matching. Keep Remote for global employment compliance; add Compono for the hiring decision itself. Both/and.",
  quickTake: {
    theirPitch: "Employ international talent compliantly without local entities - Deel's main rival.",
    ourAngle: "Identical wedge to Deel - they handle the legal and payroll mechanics; we handle the hiring decision itself.",
    watchOut: "Strong global EOR capability and good compliance coverage."
  },
  landmines: [
    "Remote gets them legally employed anywhere - but what tells you they are the right hire?",
    "What people science sits in the emerging HR features?",
    "For a distributed team, what explains fit and team dynamics across borders?"
  ],
  social: "High-profile global-employment brand. Verify on refresh.",
  recentActivity: [
    { date: "Feb 2026", note: "Acquired Atlas, a rival employer-of-record provider, consolidating its global employment platform." }
  ]
}
];
