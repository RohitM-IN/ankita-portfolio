/* ── PROJECTS DATA — Professional Case Study Structure ─────────────
   Each project has:
   - images[]: Array of HD image URLs (carousel). First = cover card image.
   - tags, title, subtitle, role, timeline, platform
   - overview, problem, solution
   - outcomes[]: [{n, label}] — key metrics / results
   - process[]: [{step, title, desc}] — design process steps
   - tools[]
   ──────────────────────────────────────────────────────────────── */
const PROJECTS_DATA = {

  automotive: {
    images: [
      "assets/images/automotive-thumb.png",
      "assets/images/screen1.png",
      "assets/images/screen2.png",
      "assets/images/screen3.png"
    ],
    tags: [{ label: 'Mobile App', cls: 't-mobile' }, { label: 'UX Case Study', cls: 't-ux' }, { label: 'Enterprise', cls: 't-dashboard' }],
    title: 'Automotive Service Management App',
    subtitle: 'End-to-end service tracking for mechanics and service advisors — all in one unified mobile platform.',
    role: 'UI/UX Designer', timeline: '10 Weeks', platform: 'Android',
    overview: 'Service App is a mobile service management solution designed for automotive dealerships to streamline service appointments, job card management, and workshop operations.The experience enables service advisors to create appointments, manage customer vehicles, track service progress, and handle job cards efficiently—all from a single mobile application.',
    problem: 'Service advisors spend significant time creating and managing service appointments manually.Tracking vehicle service status across multiple customers can be difficult.Job card information is often scattered across different systems.Workshop teams need quick access to customer and vehicle details while on the move.',
    solution: 'Quick Appointment Creation - A guided appointment flow helps advisors register customer vehicles and schedule service visits with minimal effort.Centralized Dashboard - All service activities, appointments, and job card summaries are accessible from a single dashboard for faster decision- making.Mobile Job Card Management - Service advisors can view, update, and track job cards directly from their mobile devices.Real - Time Service Visibility - Clear status indicators help users monitor appointment progress, open jobs, invoices, and vehicle delivery stages.',
    outcomes: [
      { n: '3×', label: 'Reducing administrative effort' },
      { n: '60%', label: 'Reduction in customer follow-up calls' },
      { n: '100%', label: 'Real-time visibility for service advisors' },
    ],
    process: [
      { step: '01', title: 'Discover', desc: 'Shadowed mechanics and interviewed 6 service managers across 2 workshops. Mapped the full service lifecycle from drop-off to delivery.' },
      { step: '02', title: 'Define', desc: 'Identified 3 core user roles with distinct needs. Created role-based user journeys and a prioritised feature list based on frequency and pain severity.' },
      { step: '03', title: 'Design', desc: 'Low-fi wireframes → component library → high-fidelity screens across all 3 roles. 4 rounds of iteration with stakeholder feedback.' },
      { step: '04', title: 'Deliver', desc: 'Figma prototype handed off to dev with annotated specs, component states, and a responsive design system for future scaling.' },
    ],
    tools: ['Figma', 'FigJam', 'Prototyping', 'User Interviews', 'Mobile Design', 'Design Systems'],
  },

  bus: {
    images: [
      'https://cdn.dribbble.com/userupload/47571016/file/eb5932117fc2d6ce88151a72a3c26b3e.png',
      'https://cdn.dribbble.com/userupload/47571156/file/fe4939ce5fdb22ee0bee3c62d2a39e27.png?resize=1504x941&vertical=center',
    ],
    tags: [{ label: 'Mobile App', cls: 't-mobile' }, { label: 'Redesign', cls: 't-ux' }],
    title: 'Bus Booking App Redesign',
    subtitle: 'Reducing booking friction by 40% through a cleaner search flow, redesigned seat map, and a trust-first payment experience.',
    role: 'UX Designer', timeline: '6 Weeks', platform: 'iOS & Android',
    overview: 'A full UX audit and redesign of an existing intercity bus booking application. The original app suffered from high drop-off at the payment step, confusing seat selection, and an information hierarchy that forced users to re-read screens multiple times.',
    problem: 'The original app had a 5-step booking flow with no progress indicator, a seat map that showed availability in 3 confusing colour states, and a payment summary that buried the total fare. Users were abandoning at checkout — not because of pricing, but because they didn\'t trust what they were buying.',
    solution: 'Simplified to a 3-step funnel with a sticky progress bar. Redesigned the seat map with clear Available / Selected / Occupied states, large touch targets, and coach-level labelling. Introduced a transparent fare breakdown on the summary screen, and replaced the generic error states with human-readable messages.',
    outcomes: [
      { n: '3→1', label: 'Booking steps reduced' },
      { n: '40%', label: 'Est. drop-off reduction' },
      { n: '5★', label: 'Avg task completion in usability test' },
    ],
    process: [
      { step: '01', title: 'UX Audit', desc: 'Ran a heuristic evaluation against Nielsen\'s 10 principles. Found 14 usability violations, ranked by severity and frequency.' },
      { step: '02', title: 'User Research', desc: 'Competitive analysis of 4 booking apps. Screened 8 users on task completion — seat selection had the highest failure rate.' },
      { step: '03', title: 'Wireframe & Test', desc: 'Paper wireframes → Figma lo-fi → tested with 5 users. Iterated the seat map 3 times before reaching 0 confusion errors.' },
      { step: '04', title: 'Hi-Fi Delivery', desc: 'Complete hi-fi screens for 20+ states including empty, loading, error, success, and edge cases across both themes.' },
    ],
    tools: ['Figma', 'UX Audit', 'Competitive Analysis', 'Wireframing', 'Usability Testing'],
  },

  upload: {
    images: [
      'https://cdn.dribbble.com/userupload/47607156/file/1c38e9845bb4f2e8644f3b703f520ea1.png',
      'https://cdn.dribbble.com/userupload/47607158/file/e7e1273712757af8de125ba6aab87b1f.png?resize=1504x449&vertical=center',
      'https://cdn.dribbble.com/userupload/47607159/file/2c27e963fb8ab263c6a21513247bd503.png?resize=1504x716&vertical=center',
      'https://cdn.dribbble.com/userupload/47607160/file/11dca5b1bc460163606a6ff086fc1442.png?resize=1504x716&vertical=center',
      'https://cdn.dribbble.com/userupload/47607161/file/7c98cb33e4d1a9326fb132b0f4492f35.png?resize=1504x784&vertical=center',
      'https://cdn.dribbble.com/userupload/47607162/file/32998a10c87d7de1cc7f45c8895498b1.png?resize=752x&vertical=center',
    ],
    tags: [{ label: 'Web App', cls: 't-web' }, { label: 'Before / After', cls: 't-ux' }, { label: 'SaaS', cls: 't-dashboard' }],
    title: 'Upload Experience Redesign',
    subtitle: 'Transforming a confusing file upload flow into a clear, feedback-rich experience that eliminated user drop-off at a critical product step.',
    role: 'UX + UI Designer', timeline: '4 Weeks', platform: 'Web (SaaS)',
    overview: 'A SaaS product\'s file upload flow was causing silent failures — users were uploading files, getting no clear confirmation, and walking away thinking it worked. The redesign focused entirely on making system status visible at every stage.',
    problem: 'Three core problems: (1) No visible progress during upload — users couldn\'t tell if anything was happening. (2) Error messages were cryptic strings like "Error 415" with no guidance on how to fix them. (3) The success state looked identical to the idle state, so users uploaded the same file twice regularly.',
    solution: 'Redesigned all 5 upload states — Idle, Dragging, Uploading (with animated progress bar), Success (distinct green confirmation), and Error (human-readable message + fix instruction). Introduced a drag-and-drop zone with clear affordance cues. Added a file preview thumbnail post-upload so users could verify what was received.',
    outcomes: [
      { n: '5', label: 'Distinct upload states designed' },
      { n: '0', label: 'Cryptic error codes in final design' },
      { n: 'Before/After', label: 'Full comparison documented' },
    ],
    process: [
      { step: '01', title: 'Identify', desc: 'Audited session recordings to pinpoint where users stalled or repeated the upload action. Drop-off and double-upload were measurable.' },
      { step: '02', title: 'Map States', desc: 'Mapped every possible upload state and edge case — large files, network drops, wrong formats, partial uploads.' },
      { step: '03', title: 'Redesign', desc: 'Designed all states in both light and dark mode. Focused on micro-copy first — then visual states wrapped around clear language.' },
      { step: '04', title: 'Before/After', desc: 'Documented the full before-and-after comparison with annotations for developer handoff and stakeholder alignment.' },
    ],
    tools: ['Figma', 'Before/After Design', 'UX Writing', 'Component Design', 'SaaS UX'],
  },

  english: {
    images: [
      'https://cdn.dribbble.com/userupload/47868210/file/aec1fe9edf21990fc5943e5224626ae5.png',
      'https://cdn.dribbble.com/userupload/47868210/file/aec1fe9edf21990fc5943e5224626ae5.png',
    ],
    tags: [{ label: 'Mobile App', cls: 't-mobile' }, { label: 'UX Case Study', cls: 't-ux' }, { label: 'EdTech', cls: 't-brand' }],
    title: 'English Learning App',
    subtitle: 'A gamified mobile experience that turns language learning into a 10-minute daily habit — with streaks, adaptive difficulty, and conversational AI practice.',
    role: 'UI/UX Designer', timeline: '8 Weeks', platform: 'iOS',
    overview: 'Existing language apps felt like homework — long sessions, passive learning, and no real motivation loop. This concept rethinks English learning as a series of short, high-engagement micro-sessions built around habit science: keep it under 10 minutes, reward consistency, and make speaking less scary.',
    problem: 'The majority of language learners quit by Day 3. Not because the content is too hard — but because the experience feels like a chore. Long lessons, no visible progress, and fear of "speaking to no one" all compound into abandonment. The real challenge was designing for motivation, not just instruction.',
    solution: 'A compact daily lesson format capped at 10 minutes, with a visual streak system that makes consistency feel meaningful. An AI chatbot for low-stakes conversation practice. Personalised learning path from an initial 3-minute assessment. Gamified badges for milestones — not just streaks — to reward depth, not just habit.',
    outcomes: [
      { n: '10 min', label: 'Max daily lesson length' },
      { n: '3 days', label: 'Target habit formation window' },
      { n: '4 modes', label: 'Learning types: Read, Listen, Speak, Write' },
    ],
    process: [
      { step: '01', title: 'Research', desc: 'Reviewed behavioral science literature on habit formation (Fogg BJ Model). Ran a diary study with 5 language learners over 2 weeks to understand their natural drop-off patterns.' },
      { step: '02', title: 'Concept', desc: 'Sketched 3 competing directions: quiz-heavy, story-based, and conversation-first. Tested concepts with 4 users — story-based + conversation hybrid won clearly.' },
      { step: '03', title: 'Design', desc: '60+ screens across onboarding, lesson flows, streak system, chatbot, and progress views. Accessible colour system designed to work across low-literacy contexts.' },
      { step: '04', title: 'Prototype', desc: 'Fully interactive Figma prototype with micro-animations for lesson completion, XP gain, and streak milestones.' },
    ],
    tools: ['Figma', 'Gamification Design', 'User Research', 'Prototyping', 'Habit Design', 'AI UX'],
  },

  healthcare: {
    images: [
      'https://cdn.dribbble.com/userupload/12333697/file/original-f8f0ea5bb88e7784e2a2ced83cec1279.jpg',
      'https://cdn.dribbble.com/userupload/12333697/file/original-f8f0ea5bb88e7784e2a2ced83cec1279.jpg',
    ],
    tags: [{ label: 'Web Dashboard', cls: 't-web' }, { label: 'Healthcare', cls: 't-dashboard' }, { label: 'Data Viz', cls: 't-ux' }],
    title: 'Healthcare Dashboard',
    subtitle: 'A clinician-facing patient analytics platform designed for speed, minimal cognitive load, and zero ambiguity in high-pressure clinical environments.',
    role: 'UI/UX + Data Viz Designer', timeline: '12 Weeks', platform: 'Web (Desktop)',
    overview: 'Designed for doctors and clinical staff who have seconds — not minutes — to make data-informed decisions. The dashboard consolidates patient vitals, upcoming appointments, department metrics, and alert flags into a single view, eliminating the need to switch between 4 separate hospital systems.',
    problem: 'Clinicians at a mid-sized hospital were switching between 4 systems to get a complete picture of a single patient: the EHR, a scheduling tool, a vitals monitor, and a department analytics dashboard. The cognitive cost of this context-switching was directly linked to documentation errors and delayed responses to critical alerts.',
    solution: 'A unified dashboard with a patient-centric information architecture. Priority alerts surface at the top — anything requiring immediate action is never more than one glance away. Patient cards use progressive disclosure: a scannable summary view expands into full records only when needed. Department-level metrics are visible in context, not buried in a separate analytics module.',
    outcomes: [
      { n: '4→1', label: 'Systems consolidated into one view' },
      { n: '↓ 35%', label: 'Time-to-find critical patient info' },
      { n: '0', label: 'Unnecessary data density on primary view' },
    ],
    process: [
      { step: '01', title: 'Contextual Inquiry', desc: 'Observed 3 doctors during morning rounds. Timed how long it took to answer "What are this patient\'s vitals right now?" — average was 4.5 minutes across systems.' },
      { step: '02', title: 'Information Architecture', desc: 'Ran card sorting with 6 clinical staff. Identified 4 mental model groups: urgent, patient-specific, departmental, and administrative.' },
      { step: '03', title: 'Dashboard Design', desc: 'Designed the layout around Tufte\'s data-ink ratio principle — every pixel either shows information or creates structure. No decoration.' },
      { step: '04', title: 'Accessibility', desc: 'WCAG AA compliant colour system, minimum 14px font throughout, and a high-contrast mode for clinical environments with variable lighting.' },
    ],
    tools: ['Figma', 'Dashboard Design', 'Healthcare UX', 'Data Visualization', 'WCAG AA', 'Card Sorting'],
  },

  finance: {
    images: [
      'https://cdn.dribbble.com/userupload/9096970/file/original-e286463615f9a1eef818818e73e8c7bf.png',
      'https://cdn.dribbble.com/userupload/9096970/file/original-e286463615f9a1eef818818e73e8c7bf.png',
    ],
    tags: [{ label: 'Mobile App', cls: 't-mobile' }, { label: 'Fintech', cls: 't-ux' }],
    title: 'Finance Bank App',
    subtitle: 'A personal banking app that answers "how much did I spend this week?" in under 2 seconds — and gets you to any action in 3 taps or fewer.',
    role: 'UI/UX Designer', timeline: '6 Weeks', platform: 'iOS',
    overview: 'A concept redesign of a personal banking mobile app, focused on speed to insight and reduction of tap depth. The design challenge: most banking apps are built around features, not tasks. Users don\'t open a banking app to "view accounts" — they open it to check if they can afford something.',
    problem: 'Banking apps bury key actions under nested menus. Users need 5+ taps to initiate a transfer, and the home screen shows account balances with no context — no spending trend, no category breakdown, no quick answers. "Can I afford this?" requires 3 screens of navigation to answer.',
    solution: 'A home screen redesigned around the user\'s most frequent questions: current balance, this week\'s spend, and recent transactions — all visible without scrolling. A persistent quick-action bar for Transfer, Pay, and Top-up. Transactions grouped by category with visual spend indicators. The full transfer flow reduced to 3 taps.',
    outcomes: [
      { n: '3 taps', label: 'To complete any core action' },
      { n: '0 scroll', label: 'Needed to see key account info' },
      { n: '5→3', label: 'Transfer flow steps reduced' },
    ],
    process: [
      { step: '01', title: 'Jobs-To-Be-Done', desc: 'Interviewed 8 banking app users. Found 3 core jobs: "Check balance", "Send money", "See where I\'ve spent". Designed primary nav around these, not feature categories.' },
      { step: '02', title: 'Competitor Teardown', desc: 'Evaluated 6 banking apps against task completion time for the 3 core jobs. Identified tap-depth as the primary differentiator.' },
      { step: '03', title: 'Design & Prototype', desc: '35 screens across home, transactions, transfer flow, notifications, and profile. Interactive Figma prototype with real banking data states.' },
      { step: '04', title: 'Usability Test', desc: 'Remote unmoderated test with 5 participants. Task: "Send ₹500 to a contact." Average completion: 28 seconds. Zero failures.' },
    ],
    tools: ['Figma', 'Mobile Design', 'Fintech UX', 'Prototyping', 'Jobs-To-Be-Done', 'Usability Testing'],
  },

  smartwatch: {
    images: [
      'https://cdn.dribbble.com/userupload/8993623/file/original-304d573b75bcdc86ea548e7aba79900d.png',
      'https://cdn.dribbble.com/userupload/8993623/file/original-304d573b75bcdc86ea548e7aba79900d.png',
    ],
    tags: [{ label: 'Wearable', cls: 't-ux' }, { label: 'UX Case Study', cls: 't-ux' }],
    title: 'Smartwatch — UX Case Study',
    subtitle: 'Designing for extreme constraints: a 40mm circular display where every interaction must complete in under 5 seconds, one-handed, on the go.',
    role: 'UX Designer', timeline: '5 Weeks', platform: 'WearOS (40mm)',
    overview: 'A wearable OS UX exploration that forces you to abandon every mobile design convention and start from the constraint up. The 40mm circular display, one-handed use, and 5-second interaction window demand entirely different patterns — swipe-based navigation, glanceable cards, muscle memory flows, and zero search.',
    problem: 'Wearable design fails when designers apply phone-first thinking to a watch. Tiny text, multi-level menus, and gesture ambiguity are the three most common failure modes. On a 40mm screen, a misplaced 44dp touch target takes up 30% of the usable space. Scale, affordance, and hierarchy have to be rethought from scratch.',
    solution: 'A swipe-based navigation model with 4 cardinal directions: left/right for context switching, up for quick settings, down for notifications. Each primary view is a glanceable data card with one action. No nested menus beyond 2 levels. All typography scaled to a minimum 16sp equivalent. Complications designed to answer a question in under 1 glance.',
    outcomes: [
      { n: '≤2', label: 'Max menu depth in entire OS' },
      { n: '5 sec', label: 'Target max interaction time' },
      { n: '4 dir', label: 'Navigation axes: simple, learnable' },
    ],
    process: [
      { step: '01', title: 'Constraint Mapping', desc: 'Documented all physical and cognitive constraints: screen diameter, bezel width, reachable zones with thumb, ambient glance duration, and one-hand grip patterns.' },
      { step: '02', title: 'Pattern Research', desc: 'Audited WearOS, watchOS, and Tizen interaction patterns. Identified what each gets right and the gaps a new OS could fill.' },
      { step: '03', title: 'Design System', desc: 'Built a watch-specific design system with circular layout guides, 4-direction navigation model, and component specs for round displays.' },
      { step: '04', title: 'Prototype', desc: 'Figma prototype simulating the full swipe navigation model across 5 primary views: Time, Health, Notifications, Quick Settings, and Workout.' },
    ],
    tools: ['Figma', 'Wearable Design', 'Interaction Design', 'Constraint-First Design', 'Design Systems'],
  },

  abtest: {
    images: [
      'https://cdn.dribbble.com/userupload/47932599/file/c2c551c02c2b273ddedf1046fdb71438.png',
      'https://cdn.dribbble.com/userupload/47932603/file/2f57477d749daaf5fbec7b652e73d91b.png?resize=1504x1070&vertical=center',
      'https://cdn.dribbble.com/userupload/47932601/file/2c0454e4f2d87033b45e00af732b4f8f.png?resize=1504x1070&vertical=center',
      'https://cdn.dribbble.com/userupload/47932602/file/afd87e3d72815f2dfd5ce3c1eea15051.png?resize=1504x1070&vertical=center'
    ],
    tags: [{ label: 'Web', cls: 't-web' }, { label: 'A/B Testing', cls: 't-ux' }, { label: 'Research', cls: 't-brand' }],
    title: 'Profile Card A/B Test',
    subtitle: 'A design-led A/B test comparing two layout strategies for user profile cards — using Fitt\'s Law, visual weight, and scan pattern analysis to recommend the higher-converting variant.',
    role: 'UI Designer + UX Researcher', timeline: '3 Weeks', platform: 'Web',
    overview: 'A product team needed a data-backed decision between two profile card layouts for a directory view. Rather than guessing, I designed both variants with identical content but different visual treatments — then analysed each against established UX principles and simulated scan patterns to produce a clear recommendation.',
    problem: 'The team had strong opinions split 50/50 between a compact horizontal layout (more cards per screen) and a vertical card (better readability). Without evidence, the debate was going in circles. Neither side had a UX-grounded argument. The decision was being made on taste.',
    solution: 'Designed both variants at full fidelity. Analysed Variant A against Fitt\'s Law for CTA reachability. Analysed Variant B against F-pattern scan behaviour. Ran a 5-second test with 12 participants to measure recall of key profile details. The vertical card (Variant B) won on recall and CTA click speed — the recommendation was unanimous with evidence.',
    outcomes: [
      { n: 'Variant B', label: 'Recommended — 34% faster CTA recognition' },
      { n: '12', label: 'Participants in 5-second recall test' },
      { n: '2 vars', label: 'Fully designed and documented at hi-fi' },
    ],
    process: [
      { step: '01', title: 'Frame the Test', desc: 'Defined the success metric before designing: CTA click rate, time-to-identify key info, and 5-second recall score. No HiPPO decisions.' },
      { step: '02', title: 'Design Both Variants', desc: 'Both variants designed at full hi-fi with identical content, the same image, and the same CTA text. Only layout differed.' },
      { step: '03', title: 'Heuristic Analysis', desc: 'Applied Fitt\'s Law, visual weight distribution analysis, and F-pattern eye tracking simulation to both variants independently.' },
      { step: '04', title: 'Recommend', desc: 'Delivered a 6-slide recommendation deck with the test methodology, participant data, and a clear design rationale for the winning variant.' },
    ],
    tools: ['Figma', 'A/B Design', 'Heuristic Evaluation', 'Fitt\'s Law', '5-Second Testing', 'UI Design'],
  },

  /* ── UPCOMING PROJECTS ── */
  'dms-web': {
    images: [], coming: true,
    tags: [{ label: 'Web App', cls: 't-web' }, { label: 'Enterprise', cls: 't-dashboard' }],
    title: 'Web DMS — Document Management System',
    subtitle: 'An enterprise platform for managing operations documentation — version control, approval workflows, and full-text search for operations teams.',
    role: 'Lead UI/UX Designer', timeline: 'In Progress', platform: 'Web (Desktop)',
    overview: 'An enterprise web platform for managing operations documentation, built on real workflow research from time at Kohler ITC. Operations teams were managing critical documents across email threads, shared drives, and physical binders — version control was a constant issue.',
    problem: 'Documents existed across 5+ disconnected tools. No version history, no audit trail, no way to know if the document you were reading was the current one. Approvals happened over email, leaving no record. Compliance reviews were a manual nightmare.',
    solution: 'Currently designing a centralised DMS with role-based access, version history, approval workflows, change notifications, and full-text search. Case study dropping soon.',
    outcomes: [], process: [],
    tools: ['Figma', 'Enterprise UX', 'Workflow Design', 'Information Architecture'],
  },
  retailer: {
    images: [], coming: true,
    tags: [{ label: 'Mobile App', cls: 't-mobile' }, { label: 'B2B', cls: 't-ux' }],
    title: 'Retailer\'s App',
    subtitle: 'A B2B mobile app for field sales reps and retailer partners — order entry, inventory, account ledger, and delivery tracking in one place.',
    role: 'UI/UX Designer', timeline: 'In Progress', platform: 'Android',
    overview: 'Field sales reps were processing retailer orders via phone calls and paper forms with no visibility into stock levels, delivery status, or account history. This app brings that entire workflow into a single mobile interface.',
    problem: 'Reps carried order books and called the warehouse to check stock — during the sales call. Orders were written up post-visit and keyed into a system manually. Errors, delays, and no audit trail were the norm.',
    solution: 'Designing a mobile-first app for reps and retailer owners: quick order entry with real-time stock availability, account ledger, and delivery tracking. Case study coming soon.',
    outcomes: [], process: [],
    tools: ['Figma', 'B2B UX', 'Mobile Design', 'Field Research'],
  },
  clockin: {
    images: [], coming: true,
    tags: [{ label: 'Mobile App', cls: 't-mobile' }, { label: 'Operations', cls: 't-ux' }],
    title: 'Mechanic Clock-In App',
    subtitle: 'A field-facing time-logging tool designed for gloves-on, one-hand use in busy workshop conditions.',
    role: 'UI/UX Designer', timeline: 'In Progress', platform: 'Android',
    overview: 'Time logging was done on paper at end-of-shift, leading to inaccuracies. Managers had no real-time visibility into job progress or mechanic utilisation. This app solves both problems with a UI designed for the workshop floor — large targets, high contrast, minimal input.',
    problem: 'End-of-shift paper logging introduced memory errors and time theft by accident. Managers had no real-time visibility. Job assignment was verbal — no digital record of who was working on what.',
    solution: 'Simple clock-in/out UI optimised for gloves-on, one-hand use. Job assignment view, parts logging, and a supervisor dashboard showing real-time technician utilisation. Design in progress.',
    outcomes: [], process: [],
    tools: ['Figma', 'Ops UX', 'Accessibility', 'Mobile Design'],
  }
};

/* ─── CAROUSEL STATE ─── */
let _carIdx = 0, _carImgs = [];
let _touchStartX = 0, _touchStartY = 0;
let _zoomScale = 1, _zoomPanX = 0, _zoomPanY = 0;
let _isPanning = false, _panStartX = 0, _panStartY = 0;
let _zoomListenersReady = false;

function _getActiveCarouselImage() {
  const slides = document.querySelectorAll('#carouselTrack .modal-carousel-slide');
  if (!slides.length || !slides[_carIdx]) return null;
  return slides[_carIdx].querySelector('img');
}

function _clampZoomPan(vp, scale, x, y) {
  if (!vp || scale <= 1) return { x: 0, y: 0 };
  const maxX = (vp.clientWidth * (scale - 1)) / 2;
  const maxY = (vp.clientHeight * (scale - 1)) / 2;
  return {
    x: Math.max(-maxX, Math.min(maxX, x)),
    y: Math.max(-maxY, Math.min(maxY, y)),
  };
}
function zoomIn() {
  const vp = document.getElementById('carouselViewport');
  _zoomBy(0.5, vp);
}

function zoomOut() {
  const vp = document.getElementById('carouselViewport');
  _zoomBy(-0.5, vp);
}

function resetZoom() {
  _resetActiveImageZoom();
}
function _applyActiveImageTransform() {
  const img = _getActiveCarouselImage();
  if (!img) return;
  img.style.transform = `translate(${_zoomPanX}px, ${_zoomPanY}px) scale(${_zoomScale})`;
  img.style.cursor = _zoomScale > 1 ? (_isPanning ? 'grabbing' : 'grab') : 'zoom-in';
}

function _zoomBy(delta, vp) {
  const nextScale = Math.max(1, Math.min(4, _zoomScale + delta));
  _zoomScale = Number(nextScale.toFixed(2));

  if (_zoomScale === 1) {
    _zoomPanX = 0;
    _zoomPanY = 0;
  } else {
    const clamped = _clampZoomPan(vp, _zoomScale, _zoomPanX, _zoomPanY);
    _zoomPanX = clamped.x;
    _zoomPanY = clamped.y;
  }
  _applyActiveImageTransform();
}

function _resetActiveImageZoom() {
  _zoomScale = 1;
  _zoomPanX = 0;
  _zoomPanY = 0;
  _isPanning = false;
  _applyActiveImageTransform();
}

function _initCarouselZoom() {
  const vp = document.getElementById('carouselViewport');
  if (!vp || _zoomListenersReady) return;
  _zoomListenersReady = true;

  vp.addEventListener('wheel', e => {
    const overlay = document.getElementById('modalOverlay');
    if (!overlay || !overlay.classList.contains('open')) return;
    const img = _getActiveCarouselImage();
    if (!img) return;

    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.25 : -0.25;
    _zoomBy(delta, vp);
  }, { passive: false });

  vp.addEventListener('mousedown', e => {
    if (_zoomScale <= 1) return;
    e.preventDefault();
    _isPanning = true;
    _panStartX = e.clientX - _zoomPanX;
    _panStartY = e.clientY - _zoomPanY;
    _applyActiveImageTransform();
  });

  window.addEventListener('mousemove', e => {
    if (!_isPanning || _zoomScale <= 1) return;
    const nextX = e.clientX - _panStartX;
    const nextY = e.clientY - _panStartY;
    const clamped = _clampZoomPan(vp, _zoomScale, nextX, nextY);
    _zoomPanX = clamped.x;
    _zoomPanY = clamped.y;
    _applyActiveImageTransform();
  });

  window.addEventListener('mouseup', () => {
    if (!_isPanning) return;
    _isPanning = false;
    _applyActiveImageTransform();
  });

  vp.addEventListener('dblclick', e => {
    e.preventDefault();

    if (_zoomScale === 1) {
      _zoomScale = 2;
    } else {
      _zoomScale = 1;
      _zoomPanX = 0;
      _zoomPanY = 0;
    }

    _applyActiveImageTransform();
  });

  vp.addEventListener('dblclick', e => {
    e.preventDefault();
    _resetActiveImageZoom();
  });
}

function carouselMove(dir) {
  _carIdx = Math.max(0, Math.min(_carImgs.length - 1, _carIdx + dir));
  _renderCarousel();
}
function carouselGoTo(i) {
  _carIdx = i;
  _renderCarousel();
}
function _renderCarousel() {
  document.getElementById('carouselTrack').style.transform = `translateX(-${_carIdx * 100}%)`;
  document.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === _carIdx));
  document.querySelectorAll('.carousel-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === _carIdx);
    if (i === _carIdx) t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  });
  document.getElementById('carouselPrev').classList.toggle('hidden', _carIdx === 0);
  document.getElementById('carouselNext').classList.toggle('hidden', _carIdx === _carImgs.length - 1);
  document.getElementById('carouselCounter').textContent = `${_carIdx + 1} / ${_carImgs.length}`;
  _resetActiveImageZoom();
}

/* Touch / swipe support */
function _initCarouselTouch() {
  const vp = document.getElementById('carouselViewport');
  if (!vp) return;
  vp.addEventListener('touchstart', e => {
    _touchStartX = e.touches[0].clientX;
    _touchStartY = e.touches[0].clientY;
  }, { passive: true });
  vp.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - _touchStartX;
    const dy = e.changedTouches[0].clientY - _touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) carouselMove(dx < 0 ? 1 : -1);
  }, { passive: true });
}

/* ─── MODAL LOGIC ─── */
function openModal(id) {
  const data = PROJECTS_DATA[id];
  if (!data) return;
  const overlay = document.getElementById('modalOverlay');

  /* ── Carousel ── */
  _carImgs = (data.images || []).filter(Boolean);
  _carIdx = 0;
  const track = document.getElementById('carouselTrack');
  const dotsEl = document.getElementById('carouselDots');
  const thumbsEl = document.getElementById('carouselThumbs');
  track.innerHTML = '';
  dotsEl.innerHTML = '';
  thumbsEl.innerHTML = '';

  if (_carImgs.length === 0) {
    track.innerHTML = `<div class="modal-carousel-slide placeholder"><div class="placeholder-inner"><div class="ph-icon">🖼️</div><div class="ph-label">Add images via Dribbble or Cloudinary</div></div></div>`;
    document.getElementById('carouselPrev').classList.add('hidden');
    document.getElementById('carouselNext').classList.add('hidden');
    document.getElementById('carouselCounter').textContent = '';
    thumbsEl.style.display = 'none';
    dotsEl.style.display = 'none';
  } else {
    thumbsEl.style.display = '';
    dotsEl.style.display = '';
    _carImgs.forEach((src, i) => {
      track.innerHTML += `<div class="modal-carousel-slide"><img src="${src}" alt="Screen ${i + 1}" loading="lazy"></div>`;
      dotsEl.innerHTML += `<button class="carousel-dot${i === 0 ? ' active' : ''}" onclick="carouselGoTo(${i})"></button>`;
      thumbsEl.innerHTML += `<div class="carousel-thumb${i === 0 ? ' active' : ''}" onclick="carouselGoTo(${i})"><img src="${src}" alt="Thumb ${i + 1}" loading="lazy"></div>`;
    });
    _initCarouselZoom();
    _renderCarousel();
    _initCarouselTouch();
  }

  /* ── Header ── */
  document.getElementById('modalTags').innerHTML = data.tags.map(t => `<span class="ptag ${t.cls}">${t.label}</span>`).join('');
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalSubtitle').textContent = data.subtitle || '';

  /* ── Meta row ── */
  const metaEl = document.getElementById('modalMeta');
  if (data.role || data.timeline || data.platform) {
    metaEl.style.display = '';
    metaEl.innerHTML = [
      data.role ? `<div class="modal-meta-item"><div class="modal-meta-label">My Role</div><div class="modal-meta-value">${data.role}</div></div>` : '',
      data.timeline ? `<div class="modal-meta-item"><div class="modal-meta-label">Timeline</div><div class="modal-meta-value">${data.timeline}</div></div>` : '',
      data.platform ? `<div class="modal-meta-item"><div class="modal-meta-label">Platform</div><div class="modal-meta-value">${data.platform}</div></div>` : '',
    ].join('');
  } else { metaEl.style.display = 'none'; }

  /* ── Content ── */
  let html = '';

  if (data.coming) {
    html += `<div class="coming-banner">⏳ Case study in progress — check back soon or <a href="#contact" onclick="closeModal()" style="color:var(--accent);text-decoration:underline;">reach out for a preview</a>.</div>`;
  }

  /* Overview */
  if (data.overview) {
    html += `<div class="modal-section"><div class="modal-section-label">Overview</div><p>${data.overview}</p></div>`;
  }

  /* Problem / Solution side-by-side */
  if (data.problem || data.solution) {
    html += `<div class="modal-ps-grid">`;
    if (data.problem) html += `<div class="modal-ps-card problem"><div class="ps-label">🔴 The Problem</div><p>${data.problem}</p></div>`;
    if (data.solution) html += `<div class="modal-ps-card solution"><div class="ps-label">🟢 The Solution</div><p>${data.solution}</p></div>`;
    html += `</div>`;
  }

  /* Outcomes */
  if (data.outcomes && data.outcomes.length > 0) {
    html += `<div class="modal-section"><div class="modal-section-label">Key Outcomes</div><div class="modal-outcomes">`;
    data.outcomes.forEach(o => {
      html += `<div class="modal-outcome-card"><div class="outcome-n">${o.n}</div><div class="outcome-l">${o.label}</div></div>`;
    });
    html += `</div></div>`;
  }

  /* Process */
  if (data.process && data.process.length > 0) {
    html += `<div class="modal-section"><div class="modal-section-label">Design Process</div>`;
    html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-top:0.5rem;">`;
    data.process.forEach(p => {
      html += `<div style="background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius-sm);padding:1rem 1.1rem;">
        <div style="font-family:var(--serif);font-size:1.5rem;color:rgba(200,240,96,0.2);line-height:1;margin-bottom:0.4rem;">${p.step}</div>
        <div style="font-size:0.875rem;font-weight:600;color:var(--white);margin-bottom:0.4rem;">${p.title}</div>
        <div style="font-size:0.8rem;color:var(--off);line-height:1.65;">${p.desc}</div>
      </div>`;
    });
    html += `</div></div>`;
  }

  /* Tools */
  if (data.tools && data.tools.length > 0) {
    html += `<div class="modal-section"><div class="modal-section-label">Tools & Methods</div><div class="modal-chips">`;
    data.tools.forEach(t => { html += `<span class="modal-chip">${t}</span>`; });
    html += `</div></div>`;
  }

  document.getElementById('modalContent').innerHTML = html;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function carouselGoTo(i) {
  _carIdx = i;
  _renderCarousel();
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modalOverlay') && e.type === 'click') return;
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight') carouselMove(1);
  if (e.key === 'ArrowLeft') carouselMove(-1);
});

/* Attach click to all project cards */
document.querySelectorAll('.proj-card[data-id], .upcoming-row[data-id]').forEach(el => {
  el.addEventListener('click', () => openModal(el.dataset.id));
});

/* ── HAMBURGER MENU ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('open');
  if (isOpen) {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
  } else {
    mobileMenu.classList.add('open');
    hamburger.classList.add('open');
  }
});
function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
}

/* ── FAQ ACCORDION ── */
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-icon').textContent = '+';
    });
    if (!isOpen) {
      item.classList.add('open');
      item.querySelector('.faq-icon').textContent = '−';
    }
  });
});

/* Ensure at least one FAQ is expanded on first render */
(() => {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(i => {
    const icon = i.querySelector('.faq-icon');
    if (icon) icon.textContent = i.classList.contains('open') ? '−' : '+';
  });

  const hasOpenItem = document.querySelector('.faq-item.open');
  if (!hasOpenItem) {
    faqItems[0].classList.add('open');
    const firstIcon = faqItems[0].querySelector('.faq-icon');
    if (firstIcon) firstIcon.textContent = '−';
  }
})();

/* ── CONTACT FORM ── */
function handleSubmit(e) {
  // e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Message sent! ✓';
  btn.style.background = '#3B6E11';
  btn.style.color = '#fff';
  setTimeout(() => { btn.textContent = 'Send message →'; btn.style.background = ''; btn.style.color = ''; }, 3000);

  const myForm = e.target;
  const formData = new FormData(myForm);
}

/* ── THEME TOGGLE ── */
(function () {
  const btns = [
    document.getElementById('themeToggle'),
    document.getElementById('themeToggleMobile')
  ].filter(Boolean);

  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.classList.add('light');
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isLight = document.documentElement.classList.toggle('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  });
})();

/* Edit panel JS removed for public build */


const io = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.proj-card').forEach(el => io.observe(el));
