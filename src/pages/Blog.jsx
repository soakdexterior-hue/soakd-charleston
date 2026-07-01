import React, { useState } from 'react';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SEO from '../components/shared/SEO';

// Image URLs
const PORCH_IMG    = "https://media.base44.com/images/public/69bdabf65e992908c9993001/b6652a928_AJwashingporch2.png";
const ROOF_IMG     = "https://media.base44.com/images/public/69bdabf65e992908c9993001/2fc103a53_roofwash.png";
const BRICK_IMG    = "https://media.base44.com/images/public/69bdabf65e992908c9993001/29793a4e1_Jackwashingwindow.png";
const DOUBLE_IMG   = "https://media.base44.com/images/public/69bdabf65e992908c9993001/5650f7cc5_doublecleaning.png";

const BLOG_POSTS = [
  {
    id: 1,
    slug: "how-often-clean-windows-charleston-sc",
    image: PORCH_IMG,
    title: "How Often Should You Clean Your Windows in Charleston SC?",
    date: "March 2026",
    category: "Window Cleaning",
    seoTitle: "How Often Should You Clean Your Windows in Charleston SC? | Soakd",
    metaDescription: "Wondering how often to clean your windows in Charleston SC? Soakd Window Cleaning shares expert tips for Lowcountry homeowners. Call 843-826-6708!",
    intro: "If you live in the Lowcountry, Charleston's climate is beautiful — but it can be brutal on your home's exterior. Between the salt air, summer humidity, pollen season, and occasional storms, your windows take a beating year-round.",
    sections: [
      {
        heading: "The General Rule: At Least Twice a Year",
        body: "For most Charleston homeowners, professional window cleaning twice a year — once in the spring and once in the fall — is the minimum recommended schedule. Spring cleaning removes heavy pollen buildup. Fall cleaning clears grime, salt, and residue from the hot, humid summer months.",
      },
      {
        heading: "Do You Live Near the Coast? You Need More Frequent Cleanings",
        body: "If your home is near the water — Isle of Palms, Folly Beach, Seabrook Island, Sullivans Island — we strongly recommend window cleaning every 3 to 4 months. Salt air is one of the most corrosive elements for glass. Over time, salt deposits etch into the glass and cause permanent damage that no cleaning will fix.",
      },
      {
        heading: "Signs Your Windows Need Cleaning Now",
        body: "",
        bullets: [
          "Visible streaks, spots, or haze on the glass",
          "Yellow or green pollen coating on the outside",
          "Hard water stains or mineral deposits around the edges",
          "Your home feels darker inside than it used to",
          "Dirt or debris on the window sills and frames",
        ],
      },
      {
        heading: "The Hidden Cost of Waiting Too Long",
        body: "Contaminants like hard water minerals, salt, and oxidation can permanently etch into the glass surface. Once etched, the damage cannot be reversed by cleaning alone — it requires glass restoration or full window replacement, which can cost thousands. Regular professional window cleaning in Charleston SC is a fraction of that cost.",
      },
      {
        heading: "Why Lowcountry Homeowners Choose Soakd Window Cleaning",
        body: "We've built our reputation on three things: showing up fast, doing the job right, and standing behind our work with our Clean Window Guarantee. With 150+ five-star Google reviews and the fastest response time in Charleston, Soakd is the window cleaning company your neighbors trust in West Ashley, Mount Pleasant, James Island, and beyond.",
      },
    ],
  },
  {
    id: 2,
    slug: "pressure-washing-vs-soft-washing-charleston",
    image: ROOF_IMG,
    title: "Pressure Washing vs Soft Washing: What's Right for Your Lowcountry Home?",
    date: "March 2026",
    category: "Pressure Washing & Soft Washing",
    seoTitle: "Pressure Washing vs Soft Washing Charleston SC | Soakd",
    metaDescription: "Not sure if you need pressure washing or soft washing in Charleston SC? Soakd explains the difference and which is safe for your home. Free quotes at 843-826-6708.",
    intro: "One of the most common questions we get from Charleston homeowners is: do I need pressure washing or soft washing? The honest answer depends on what surface you're cleaning and what kind of buildup you're dealing with.",
    sections: [
      {
        heading: "What Is Soft Washing?",
        body: "Soft washing uses low-pressure water combined with professional biodegradable cleaning solutions to safely remove algae, mildew, mold, and organic staining from delicate surfaces like vinyl siding, stucco, wood, and roofs. The cleaning solution does the heavy lifting — not pressure — meaning zero risk of damage to your Charleston home.",
      },
      {
        heading: "What Is Pressure Washing?",
        body: "Pressure washing uses high-pressure water to blast away tough buildup from hard, durable surfaces like concrete driveways, brick patios, pool decks, and sidewalks. Using high pressure on the wrong surface — like siding or aging wood — can cause serious damage including cracking and water intrusion behind walls.",
      },
      {
        heading: "Which Does My Charleston Home Need?",
        body: "",
        bullets: [
          "Driveway, concrete, brick patio → Pressure Washing",
          "Vinyl siding, stucco, painted wood → Soft Washing",
          "Roof (shingles or tile) → Soft Washing only",
          "Wood deck or fence → Low-pressure soft washing",
          "Windows → Professional window cleaning (neither)",
        ],
      },
      {
        heading: "Why Charleston Homes Need Soft Washing More Than Most",
        body: "The warm, humid climate in Charleston SC creates the perfect conditions for algae, black mold streaks, and mildew to grow rapidly on home exteriors. Soft washing with professional-grade solutions kills these organisms at the root — preventing regrowth for 12–24 months — far longer than pressure washing alone.",
      },
      {
        heading: "The Soakd Approach: Right Tool, Right Surface",
        body: "At Soakd, we assess every Charleston home individually. Our team uses professional window cleaning for your glass, soft washing for siding and walls, and pressure washing for hard surfaces — all backed by our Clean Window Guarantee. Serving West Ashley, James Island, Mount Pleasant, Summerville, and all surrounding areas.",
      },
    ],
  },
  {
    id: 3,
    slug: "clean-windows-before-selling-home-charleston",
    image: DOUBLE_IMG,
    title: "5 Reasons Charleston Homeowners Should Clean Their Windows Before Selling",
    date: "March 2026",
    category: "Window Cleaning & Home Value",
    seoTitle: "Clean Windows Before Selling Your Home in Charleston SC | Soakd",
    metaDescription: "Selling your home in Charleston SC? Professional window cleaning dramatically increases curb appeal and buyer first impressions. Call Soakd at 843-826-6708.",
    intro: "If you're getting ready to list your home in Charleston, Summerville, or Mount Pleasant, don't overlook one of the highest-ROI improvements most sellers miss: professional window cleaning.",
    sections: [
      {
        heading: "1. First Impressions Start at the Curb",
        body: "Buyers form an opinion within seconds of pulling up to a home. Dirty or hazy windows make a property look neglected — even if everything else is spotless. Crystal-clear windows signal the home has been well cared for, building buyer confidence before they even step inside.",
      },
      {
        heading: "2. Clean Windows Make Every Room Look Bigger and Brighter",
        body: "Dirty windows block a surprising amount of natural light. Professional window cleaning in Charleston SC brightens your interiors, making rooms feel larger and more inviting — especially important for listing photos, which most buyers see first.",
      },
      {
        heading: "3. One of the Cheapest Improvements With the Highest Visual Impact",
        body: "Compared to kitchen updates or new flooring, professional window cleaning is extremely affordable — and the visual payoff is immediate. Both buyers and real estate agents consistently notice clean windows as a sign of a well-maintained home.",
      },
      {
        heading: "4. Salt Air and Pollen Leave Lasting Residue",
        body: "In the Lowcountry, salt air and heavy pollen leave stubborn residue that standard wiping won't remove. Professional window cleaners use specialized solutions to eliminate hard water stains and oxidation. Buyers notice cloudy or etched glass — and it can raise concerns about the home's overall condition.",
      },
      {
        heading: "5. It Shows You Take Pride in Your Home",
        body: "Sellers who sweat the small details signal that the big things have been taken care of too. Clean windows, clean gutters, a clean exterior — these details collectively communicate that your Charleston SC home has been maintained with care, leading to stronger offers and faster closings.",
      },
    ],
  },
  {
    id: 4,
    slug: "gutter-cleaning-charleston-sc-why-it-matters",
    image: BRICK_IMG,
    title: "Why Gutter Cleaning in Charleston SC Is Critical for Your Home",
    date: "March 2026",
    category: "Gutter Cleaning",
    seoTitle: "Gutter Cleaning Charleston SC | Why It Matters | Soakd",
    metaDescription: "Clogged gutters in Charleston SC can cause serious water damage, foundation issues, and roof rot. Learn why regular gutter cleaning is essential. Call Soakd: 843-826-6708.",
    intro: "Most Charleston homeowners don't think about their gutters — until they have a major water problem. Clogged gutters are one of the leading causes of preventable home damage in the Lowcountry, and professional gutter cleaning is one of the most cost-effective services you can invest in.",
    sections: [
      {
        heading: "What Happens When Gutters Clog in Charleston",
        body: "Charleston's combination of heavy rainfall, Spanish moss, and surrounding tree canopy means gutters fill up fast. When gutters clog, rainwater overflows directly against your foundation, fascia boards, and siding. This leads to wood rot, mold growth, basement flooding, and in severe cases, cracked foundations — all of which cost thousands to repair.",
      },
      {
        heading: "How Often Should You Have Gutters Cleaned in Charleston SC?",
        body: "We recommend professional gutter cleaning at least twice per year in the Charleston area — once in late spring after pollen season, and once in late fall after leaves drop. Homes near live oaks or pine trees may need quarterly cleanings due to heavy debris accumulation.",
      },
      {
        heading: "Signs Your Gutters Need Cleaning Now",
        body: "",
        bullets: [
          "Water spilling over the sides during rain",
          "Sagging or pulling away from the roofline",
          "Plants or weeds growing in the gutters",
          "Staining or streaking on your siding below the gutters",
          "Pest activity (mosquitoes, birds, rodents) near the roofline",
        ],
      },
      {
        heading: "What Soakd Includes With Every Gutter Cleaning",
        body: "When you hire Soakd for gutter cleaning in Charleston SC, you get a full flush of all downspouts, removal of all debris (leaves, moss, sticks), and a visual inspection of your gutter system. We'll let you know if we spot any damage or areas of concern — no surprises.",
      },
      {
        heading: "Serving All of the Charleston Area",
        body: "Soakd provides professional gutter cleaning in Charleston, West Ashley, James Island, Mount Pleasant, Summerville, Goose Creek, North Charleston, and all surrounding Lowcountry communities. Call or text us at 843-826-6708 for a free same-day quote.",
      },
    ],
  },
  {
    id: 5,
    slug: "best-window-cleaning-company-charleston-sc",
    image: PORCH_IMG,
    title: "How to Choose the Best Window Cleaning Company in Charleston SC",
    date: "March 2026",
    category: "Window Cleaning Tips",
    seoTitle: "Best Window Cleaning Company in Charleston SC | Soakd",
    metaDescription: "Looking for the best window cleaning company in Charleston SC? Here's exactly what to look for — and why Soakd earns 5 stars from 70+ local homeowners. Call 843-826-6708.",
    intro: "Searching for a reliable window cleaning company in Charleston SC? With so many options, it can be hard to know who to trust with your home. Here's a straightforward guide to finding the right window cleaning professional — and the red flags to avoid.",
    sections: [
      {
        heading: "1. Always Verify Insurance",
        body: "Any reputable window cleaning company in Charleston should carry general liability insurance. This protects you if a ladder slips, glass gets scratched, or any property damage occurs. Never hire an uninsured window cleaner — you could be liable for any injuries that happen on your property. Soakd is fully insured on every job.",
      },
      {
        heading: "2. Check Google Reviews (Not Just Their Website)",
        body: "Any company can put fake testimonials on their own site. Always check Google Reviews for honest, verified feedback from real customers. Soakd has 150+ five-star reviews from Charleston homeowners across West Ashley, Mount Pleasant, James Island, and more.",
      },
      {
        heading: "3. Ask About Their Cleaning Method",
        body: "Professional window cleaners should use either traditional squeegee technique or water-fed pole systems with pure water — not just a garden hose and a rag. Ask specifically how they clean interior windows, whether they clean screens and tracks, and how they handle hard water stains.",
      },
      {
        heading: "4. Get a Clear, Upfront Quote",
        body: "Be wary of window cleaning companies that won't give you a price before showing up. Soakd provides transparent, upfront quotes — no hidden fees, no surprises. You'll know the price before we ever arrive at your Charleston home.",
      },
      {
        heading: "5. Look for a Satisfaction Guarantee",
        body: "The best window cleaning companies in Charleston SC stand behind their work. Soakd offers our Clean Window Guarantee: if you're not satisfied, we come back and make it right — no questions asked. That's our promise to every homeowner in the Lowcountry.",
      },
    ],
  },
  {
    id: 6,
    slug: "soft-washing-roof-charleston-sc",
    image: ROOF_IMG,
    title: "Soft Washing Your Roof in Charleston SC: What You Need to Know",
    date: "March 2026",
    category: "Soft Washing",
    seoTitle: "Roof Soft Washing Charleston SC | Safe Roof Cleaning | Soakd",
    metaDescription: "Black streaks on your roof in Charleston SC? Soft washing safely removes algae and mold without voiding your warranty. Get a free quote from Soakd: 843-826-6708.",
    intro: "If you've noticed black streaks, green moss, or dark staining on your roof, you're not alone. It's one of the most common concerns we hear from Charleston homeowners — and the good news is that it's completely fixable with professional soft washing.",
    sections: [
      {
        heading: "What Are Those Black Streaks on My Roof?",
        body: "Those dark streaks are caused by Gloeocapsa magma — a type of algae that thrives in warm, humid climates like Charleston SC. The algae feeds on the limestone filler in asphalt shingles, causing discoloration, premature aging, and eventual shingle breakdown if left untreated.",
      },
      {
        heading: "Why You Should Never Pressure Wash a Roof",
        body: "High-pressure washing can crack, loosen, and strip the protective granules from asphalt shingles — voiding your roof warranty and dramatically shortening your roof's lifespan. The only safe and manufacturer-approved method for cleaning shingle roofs is low-pressure soft washing.",
      },
      {
        heading: "How Roof Soft Washing Works",
        body: "Professional roof soft washing applies a biodegradable cleaning solution that kills algae, mold, and mildew at the root. Results are immediate, and the treatment continues working after the cleaning — preventing regrowth for 1–3 years in most Charleston SC climates.",
      },
      {
        heading: "How Often Should You Soft Wash Your Roof in Charleston?",
        body: "Given Charleston's hot, humid summers and salt air exposure, we recommend roof soft washing every 2–3 years for most homes. Coastal properties near Folly Beach, Isle of Palms, or Sullivan's Island may need treatment annually due to accelerated biological growth.",
      },
      {
        heading: "Soakd's Roof Soft Washing Service",
        body: "Soakd provides professional roof soft washing throughout the Charleston SC area, including West Ashley, James Island, Mount Pleasant, Summerville, and Goose Creek. Our low-pressure technique is safe for all roof types and backed by our satisfaction guarantee. Call or text 843-826-6708 for a free quote.",
      },
    ],
  },
  {
    id: 7,
    slug: "soft-wash-vs-pressure-wash-charleston-home",
    image: DOUBLE_IMG,
    title: "Soft Wash vs Pressure Wash: Which Is Right for Your Charleston Home?",
    date: "April 2026",
    category: "Soft Washing & Pressure Washing",
    seoTitle: "Soft Wash vs Pressure Wash Charleston SC | Which Is Right for You? | Soakd",
    metaDescription: "Not sure whether you need soft washing or pressure washing for your Charleston home? Soakd explains which method is safe for each surface. Free estimate: 843-826-6708.",
    intro: "Homeowners across Charleston ask us the same question every week: should I get soft washing or pressure washing? The answer depends entirely on what surface you're cleaning and what's growing on it. Using the wrong method can damage your home — here's how to get it right.",
    sections: [
      {
        heading: "What Is Soft Washing?",
        body: "Soft washing is a low-pressure cleaning method that combines biodegradable cleaning solutions with gentle water flow to safely remove algae, mold, mildew, and organic staining from delicate surfaces. The cleaning agents do the work — not the water pressure — which means zero risk of damage to your siding, stucco, painted wood, or roof shingles. Soft washing is the only manufacturer-approved method for cleaning asphalt shingle roofs.",
      },
      {
        heading: "What Is Pressure Washing?",
        body: "Pressure washing uses high-pressure water to blast stubborn buildup off hard, durable surfaces like concrete driveways, brick patios, sidewalks, and pool decks. It's extremely effective on these surfaces — but applying that same pressure to softer materials like vinyl siding, aging wood, or stucco can cause serious damage including cracking, water intrusion, and stripped paint.",
      },
      {
        heading: "Which Surfaces Need Which Method?",
        body: "",
        bullets: [
          "Concrete driveway, brick patio, sidewalks → Pressure Washing",
          "Vinyl siding, stucco, painted wood → Soft Washing",
          "Roof (shingles or tile) → Soft Washing only — never pressure wash",
          "Wood decks and fences → Low-pressure soft washing",
          "Windows → Professional window cleaning (separate process)",
          "Older Charleston homes with painted or fragile surfaces → Soft Washing always",
        ],
      },
      {
        heading: "Why Charleston Homes Need Soft Washing More Than Most",
        body: "Charleston's warm, humid climate and coastal salt air create ideal conditions for algae, Gloeocapsa magma (the black streak algae), mold, and mildew to grow rapidly on home exteriors. Professional soft washing with biodegradable solutions kills these organisms at the root — not just on the surface — which prevents regrowth for 12–24 months. Pressure washing alone cannot achieve this result and can actually spread algae spores if used on the wrong surfaces.",
      },
    ],
    faqs: [
      {
        question: "Is soft washing safe for my roof?",
        answer: "Yes — soft washing is actually the only safe method for cleaning asphalt shingle roofs. The low-pressure application won't strip granules or void your roof warranty. Pressure washing shingles can cause significant damage and even void manufacturer warranties, which is why professional roof cleaners exclusively use soft wash techniques.",
      },
      {
        question: "How long does soft washing last compared to pressure washing?",
        answer: "Soft washing typically lasts 12–24 months because the cleaning solution kills algae and mold at the root, preventing regrowth. Pressure washing removes visible buildup but doesn't treat the underlying organisms, so growth often returns much faster — sometimes within weeks in Charleston's humid climate.",
      },
      {
        question: "Can I pressure wash my own driveway instead of hiring a professional?",
        answer: "You can, but professional residential exterior cleaning produces far better results. Pros use commercial-grade equipment, the right pressure settings per surface type, and professional detergents. DIY pressure washers often miss areas, apply inconsistent pressure, and risk damaging surfaces — especially on older driveways or decorative concrete.",
      },
    ],
  },
  {
    id: 8,
    slug: "how-often-professional-window-cleaning",
    image: BRICK_IMG,
    title: "How Often Should You Get Your Windows Professionally Cleaned? (And Why It Matters)",
    date: "April 2026",
    category: "Window Cleaning",
    seoTitle: "How Often Should Windows Be Professionally Cleaned? | Soakd Charleston SC",
    metaDescription: "Wondering how often to schedule professional window cleaning? Soakd covers residential and commercial schedules, signs to watch for, and why DIY falls short. Call 843-826-6708.",
    intro: "Most homeowners and business owners wait too long between professional window cleanings — and by then, damage from salt buildup, hard water stains, and oxidation is already underway. Here's a straightforward guide to how often you should schedule professional window washing in Charleston, SC.",
    sections: [
      {
        heading: "Residential Window Cleaning: A Seasonal Guide",
        body: "For most Charleston homeowners, professional window cleaning twice a year is the minimum. Schedule once in the spring to clear heavy pollen and winter grime, and once in the fall to remove salt, humidity residue, and summer buildup before the cooler months. Homes near the coast — Isle of Palms, Folly Beach, Sullivan's Island — should schedule every 3–4 months. Salt air is highly corrosive and can permanently etch glass if deposits are left to accumulate.",
      },
      {
        heading: "Commercial Window Cleaning: Retail, Office & Storefronts",
        body: "Commercial properties have higher cleaning demands. Storefronts and retail shops benefit from monthly window cleaning to maintain curb appeal and first impressions — dirty windows actively turn customers away. Office buildings generally need cleaning every 4–6 weeks. High-traffic areas, restaurants, and beachfront businesses may need weekly service. Regular commercial window cleaning in Charleston SC communicates professionalism and care to every customer who walks by.",
      },
      {
        heading: "Signs Your Windows Need Immediate Attention",
        body: "",
        bullets: [
          "Visible streaks, haze, or white mineral deposits on the glass",
          "Yellow or green pollen coating on exterior panes",
          "Hard water stains or rings that don't wipe off",
          "Salt buildup near coastal or waterfront properties",
          "Rooms feel noticeably darker than they used to",
          "Grease, smoke, or fingerprint buildup on commercial glass",
        ],
      },
      {
        heading: "Why Professional Cleaning Beats DIY Every Time",
        body: "DIY window cleaning with a squeegee and store-bought cleaner can remove surface dust, but it won't eliminate hard water stains, mineral deposits, or oxidation — and can leave streaks that make windows look worse. Professional window washers use pure water systems or professional-grade solutions that remove contaminants at a molecular level, leaving glass truly streak-free. Pros also clean screens, tracks, and sills — the parts most homeowners skip.",
      },
    ],
    faqs: [
      {
        question: "How often should windows be professionally cleaned in Charleston SC?",
        answer: "Most Charleston homeowners should schedule professional window cleaning at least twice a year. Coastal properties near salt air exposure should book every 3–4 months. Commercial storefronts benefit from monthly service. The more exposure your windows have to pollen, salt, humidity, and traffic, the more frequently they need professional attention.",
      },
      {
        question: "Can hard water stains on windows be removed professionally?",
        answer: "Yes — professional window cleaners use specialized hard water stain removal solutions that dissolve mineral deposits without scratching glass. DIY methods rarely work on stubborn hard water stains. If left too long, mineral deposits can etch permanently into the glass surface, at which point restoration or replacement is the only option.",
      },
      {
        question: "Is professional window cleaning worth it for my home?",
        answer: "Absolutely. Beyond aesthetics, regular professional window cleaning protects your investment by preventing permanent glass damage from mineral buildup and oxidation. It also improves natural light inside your home, enhances curb appeal, and can even improve energy efficiency by allowing more sunlight through clean panes in winter months.",
      },
    ],
  },
  {
    id: 9,
    slug: "commercial-pressure-washing-charleston-business",
    image: PORCH_IMG,
    title: "Why Your Charleston Business Needs Regular Commercial Pressure Washing",
    date: "April 2026",
    category: "Commercial Cleaning",
    seoTitle: "Commercial Pressure Washing Charleston SC | Soakd Exterior Cleaning",
    metaDescription: "Regular commercial pressure washing in Charleston SC protects your property, boosts curb appeal, and reduces liability. Get a free commercial quote from Soakd: 843-826-6708.",
    intro: "Your building's exterior is the first thing customers, clients, and tenants see. In Charleston's humid, coastal climate, grime, mold, mildew, and algae accumulate fast — and for commercial properties, that buildup costs you more than just appearances. Here's why regular commercial pressure washing is a smart investment for any Charleston business.",
    sections: [
      {
        heading: "Curb Appeal Drives Revenue for Retail and Office Spaces",
        body: "Studies consistently show that a clean, well-maintained exterior increases foot traffic and customer trust. For retail shops, restaurants, and service businesses along Charleston's busiest corridors, storefront washing can directly impact how many people walk through your door. A grimy façade tells customers you don't sweat the details — and they'll wonder what else you're neglecting. Regular commercial exterior cleaning keeps your brand looking sharp year-round.",
      },
      {
        heading: "Grime and Mold Damage Surfaces — and Cost You More Long-Term",
        body: "Algae, mold, and mildew aren't just ugly — they actively degrade building materials. On concrete, biological growth opens micro-cracks that expand over time. On painted surfaces, moisture trapped under organic growth leads to peeling and rot. Commercial building washing on a regular schedule is a fraction of the cost of repainting, resealing, or replacing damaged surfaces. In Charleston's humid environment, neglect accelerates surface deterioration significantly.",
      },
      {
        heading: "Slippery Walkways and Parking Lots Are a Liability Risk",
        body: "Algae and mold growth on walkways, sidewalks, and parking lot surfaces creates serious slip-and-fall hazards. In a city like Charleston where rain is frequent and humidity is constant, organic growth on exterior surfaces can develop quickly. A single slip-and-fall incident can result in lawsuits that cost far more than years of professional parking lot cleaning and walkway maintenance. Regular pressure washing isn't just maintenance — it's risk management.",
      },
      {
        heading: "Scheduled Cleaning Saves Money and Meets Property Standards",
        body: "Many commercial properties in Charleston are subject to HOA, landlord, or local property standards that require regular exterior maintenance. Staying ahead with a scheduled commercial pressure washing program prevents violations, lease disputes, and costly last-minute cleaning bills. Most Soakd commercial clients save money by setting up recurring cleaning contracts — we offer competitive rates for monthly, quarterly, or bi-annual service agreements across Charleston SC and surrounding areas.",
      },
    ],
    faqs: [
      {
        question: "How often should commercial properties be pressure washed in Charleston SC?",
        answer: "Most commercial properties benefit from professional exterior cleaning every 3–6 months. High-traffic retail locations, restaurants, and properties near the coast may need monthly or bi-monthly service. We recommend an initial assessment to determine the right schedule — factors include traffic volume, proximity to salt air, surrounding vegetation, and surface materials.",
      },
      {
        question: "Does commercial pressure washing disrupt my business operations?",
        answer: "At Soakd, we schedule commercial jobs to minimize disruption — early mornings, evenings, or weekends based on your preference. Most commercial exterior cleaning projects are completed efficiently with professional equipment. We'll work around your hours so customers and staff aren't impacted during peak business times.",
      },
      {
        question: "Can pressure washing damage my building's exterior?",
        answer: "Only if done incorrectly. Professional commercial pressure washing uses the right pressure settings for each surface — high pressure on concrete and brick, soft washing for painted walls, siding, and stucco. Soakd assesses every surface before beginning work to ensure the safest, most effective method is used, protecting your property while delivering excellent results.",
      },
    ],
  },
  {
    id: 10,
    slug: "pressure-washing-home-exterior-charleston-sc-guide",
    image: ROOF_IMG,
    title: "The Complete Guide to Pressure Washing Your Home's Exterior in Charleston, SC",
    date: "April 2026",
    category: "Pressure Washing",
    seoTitle: "Complete Guide to Pressure Washing Home Exterior in Charleston SC | Soakd",
    metaDescription: "Everything Charleston homeowners need to know about pressure washing: surfaces, timing, professional vs DIY, and what to expect. Free quote: 843-826-6708.",
    intro: "Whether you're looking to clean your driveway, refresh your home's siding, or tackle a weathered deck, pressure washing is one of the most effective ways to restore your home's exterior. This complete guide covers everything Charleston, SC homeowners need to know before booking a pressure washing service.",
    sections: [
      {
        heading: "What Surfaces Can Be Pressure Washed?",
        body: "",
        bullets: [
          "Driveways and parking pads (concrete, asphalt, pavers)",
          "Sidewalks and walkways",
          "Brick and stone patios",
          "Pool decks and hardscape",
          "Vinyl, brick, and fiber cement siding (with appropriate pressure)",
          "Wood and composite decks (low pressure only)",
          "Fences (wood, vinyl, aluminum)",
          "Gutters and downspout exteriors",
        ],
      },
      {
        heading: "When Is the Best Time to Pressure Wash in Charleston, SC?",
        body: "Spring is the most popular season for pressure washing in Charleston — right after pollen season peaks in March and April, when homes are coated in yellow-green dust. Fall is the second-best time, clearing summer humidity residue before the holidays. Avoid pressure washing during Charleston's hurricane season peak (August–October) if possible, as heavy rainfall will undo the work quickly. Winter is actually a decent option — lower humidity means surfaces dry faster and stay cleaner longer. The best rule: pressure wash when your home looks like it needs it, regardless of season.",
      },
      {
        heading: "Signs You Need a Professional vs. DIY",
        body: "Small jobs like rinsing a single patio section are manageable with a rented pressure washer. But for full home exterior cleaning, roof adjacent surfaces, two-story homes, or any job involving soft washing (siding, stucco, roofs), hiring a professional pressure washing company in Charleston SC is the right call. Pros bring commercial-grade equipment, the right detergents for each surface, and the experience to avoid costly mistakes like stripping paint, cracking grout, or forcing water behind siding panels.",
      },
      {
        heading: "How to Choose a Reputable Local Pressure Washing Company",
        body: "",
        bullets: [
          "Verify they carry general liability insurance — always",
          "Check Google Reviews from verified local customers",
          "Ask if they use soft washing for appropriate surfaces",
          "Request a clear, upfront quote with no hidden fees",
          "Confirm they offer a satisfaction guarantee",
          "Look for a locally owned company familiar with Charleston's specific climate challenges",
        ],
      },
      {
        heading: "What to Expect During a Professional Pressure Washing Service",
        body: "A professional exterior cleaning from Soakd begins with a surface assessment to determine the right pressure and method for each area. We pre-treat any organic growth areas with appropriate solutions, then work systematically across each surface. Driveways, patios, and concrete are washed with high pressure; siding and wood surfaces receive low-pressure soft washing treatment. The process typically takes 2–4 hours for an average Charleston home. We clean up debris and rinse surrounding areas before leaving — no mess left behind.",
      },
    ],
    faqs: [
      {
        question: "How much does pressure washing cost in Charleston, SC?",
        answer: "Pricing varies by surface type, square footage, and job complexity. Driveway cleaning typically ranges from $100–$250. Full home exterior washing runs $250–$600+ depending on home size and condition. Soakd provides free, no-obligation quotes for all pressure washing services in Charleston SC — call or text 843-826-6708 for an estimate.",
      },
      {
        question: "Will pressure washing damage my driveway or concrete?",
        answer: "Not when done correctly. Professional pressure washers use appropriate PSI settings for each surface. Concrete can withstand higher pressure, while older or decorative concrete requires lower settings. DIY users sometimes damage surfaces by holding the wand too close or using excessive pressure. Professional services eliminate this risk by matching equipment settings to each surface type.",
      },
      {
        question: "How long does a pressure washed surface stay clean in Charleston?",
        answer: "In Charleston's humid climate, driveways and concrete typically stay clean for 6–12 months. Soft-washed siding lasts 12–24 months before significant organic regrowth. Proximity to trees, the coast, and the amount of foot or vehicle traffic all affect how quickly surfaces re-soil. Regular scheduled cleaning is the most cost-effective way to maintain results.",
      },
      {
        question: "Do I need to be home during the pressure washing service?",
        answer: "You don't need to be present the entire time, but we recommend being available at the start so we can walk through the job together and note any areas of concern. You'll need to ensure water access is available and pets or vehicles are moved away from the work areas. Most clients check in at the beginning and end of service.",
      },
    ],
  },
  {
    id: 11,
    slug: "black-streaks-roof-algae-removal-charleston",
    image: DOUBLE_IMG,
    title: "Black Streaks on Your Roof? Here's What They Are and How to Remove Them Safely",
    date: "April 2026",
    category: "Roof Soft Washing",
    seoTitle: "Black Streaks on Roof? Safe Roof Algae Removal Charleston SC | Soakd",
    metaDescription: "Black streaks on your roof are Gloeocapsa Magma algae — common in Charleston's humid climate. Soakd safely removes them with soft washing. Free quote: 843-826-6708.",
    intro: "If you've noticed dark black or gray streaks running down your roof, you're not imagining things — and it's not dirt. Those streaks are a sign of a living organism that's actively feeding on your shingles. Here's what's causing it, why it matters, and how to get rid of it safely.",
    sections: [
      {
        heading: "What Causes Black Streaks on Roofs?",
        body: "Black roof streaks are caused by Gloeocapsa Magma — a type of cyanobacteria (commonly called algae) that spreads via airborne spores. It thrives in warm, humid environments and feeds on the limestone filler used in asphalt shingles. As the algae colony grows, it produces a dark pigmented sheath that causes the characteristic black streak appearance. Left untreated, it degrades shingle granules, shortens roof lifespan, and can spread to neighboring homes via wind.",
      },
      {
        heading: "Why Black Streaks Are So Common in Charleston's Coastal Climate",
        body: "Charleston, SC sits in one of the most algae-friendly climates in the country. High humidity, warm temperatures, and frequent rainfall create ideal conditions for Gloeocapsa Magma to flourish year-round. Homes surrounded by trees or in shaded areas are especially vulnerable, as reduced sunlight allows moisture to linger on shingles longer. Coastal salt air can also degrade protective shingle coatings, making roofs even more susceptible to biological growth in communities like Mount Pleasant, James Island, and West Ashley.",
      },
      {
        heading: "Why Pressure Washing Your Roof Is a Bad Idea",
        body: "High-pressure washing is one of the worst things you can do to a shingle roof. The force strips away the protective granules that shield shingles from UV rays and weather. This voids most manufacturer warranties and accelerates aging dramatically — sometimes shortening a roof's lifespan by years. Many insurance companies also deny claims on pressure-washed roofs. The Asphalt Roofing Manufacturers Association (ARMA) specifically recommends low-pressure soft washing as the only approved cleaning method.",
      },
      {
        heading: "How Soft Washing Safely Removes Roof Algae and Prevents Regrowth",
        body: "Roof soft washing applies a professional-grade, biodegradable cleaning solution at low pressure to kill algae, mold, and mildew at the root. Unlike pressure washing, which only removes surface buildup, soft washing eliminates the organism entirely — which means results last far longer. In Charleston's climate, a professional roof soft wash treatment typically prevents regrowth for 2–3 years. The cleaning solution continues working after application, neutralizing spores that pressure washing would simply spread around.",
      },
    ],
    faqs: [
      {
        question: "How often should I get my roof soft washed in Charleston, SC?",
        answer: "Most Charleston homes benefit from roof soft washing every 2–3 years. Coastal properties near Folly Beach, Isle of Palms, or Sullivan's Island, and homes heavily shaded by trees, may need annual treatment due to faster biological regrowth. A visual inspection each spring is a good way to catch early algae growth before it becomes a major issue.",
      },
      {
        question: "Will soft washing damage my roof shingles or void my warranty?",
        answer: "No — soft washing is the manufacturer-approved method for cleaning asphalt shingle roofs and will not void your warranty. It uses low water pressure (similar to a garden hose) combined with professional cleaning solutions that do the work without mechanical force. Pressure washing, on the other hand, is known to void warranties and cause shingle damage.",
      },
      {
        question: "Can I use bleach to clean algae off my roof myself?",
        answer: "DIY bleach treatments are not recommended. Improper concentrations can damage shingles, kill surrounding landscaping, and irritate skin and eyes. Professional roof soft washing services use biodegradable, properly diluted solutions designed specifically for roof surfaces, applied safely from the ground or with fall protection — giving you better results with none of the risks.",
      },
    ],
  },
];

function BlogCard({ post, onRead }) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {post.image && (
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover bg-muted" />
      )}
      <div className="border-t-4 border-secondary" />
      <div className="p-6 md:p-8">
        <span className="inline-block bg-secondary/10 text-primary text-xs font-bold px-3 py-1 rounded-full border border-secondary/30 mb-4">
          {post.category}
        </span>
        <h2 className="text-xl font-bold text-primary mb-3 leading-snug">{post.title}</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">{post.intro}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{post.date} · Soakd Window Cleaning</span>
          <Button
            onClick={() => onRead(post)}
            className="bg-primary hover:bg-secondary text-white font-semibold text-sm"
          >
            Read More <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function BlogPostView({ post, onBack }) {
  return (
    <>
      <SEO
        title={post.seoTitle}
        description={post.metaDescription}
        canonical={`/blog/${post.slug}`}
      />
      {post.image && (
        <div className="w-full h-96 overflow-hidden bg-muted flex items-center justify-center">
          <img src={post.image} alt={post.title} className="w-full h-full object-contain" />
        </div>
      )}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-primary border border-secondary/50 hover:bg-muted px-4 py-2 rounded-lg text-sm font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </button>

        <span className="inline-block bg-secondary/10 text-primary text-xs font-bold px-3 py-1 rounded-full border border-secondary/30 mb-4">
          {post.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-3">{post.title}</h1>
        <p className="text-muted-foreground text-sm mb-8">{post.date} · Soakd Window Cleaning</p>

        <p className="text-base leading-relaxed text-foreground mb-8">{post.intro}</p>

        <div className="space-y-8">
          {post.sections.map((sec, i) => (
            <div key={i}>
              <h2 className="text-xl font-bold text-primary mb-3">{sec.heading}</h2>
              {sec.body && <p className="text-foreground leading-relaxed">{sec.body}</p>}
              {sec.bullets && (
                <ul className="space-y-2 mt-2">
                  {sec.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-foreground text-sm">
                      <span className="text-secondary font-bold mt-1">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {post.faqs.map((faq, i) => (
                <div key={i} className="border-l-4 border-secondary pl-5">
                  <h3 className="font-bold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Box */}
        <div className="bg-primary rounded-2xl p-8 text-center mt-12">
          <p className="text-white text-lg font-semibold mb-2">Ready for crystal-clear results?</p>
          <p className="text-white/70 text-sm mb-6">Get your free quote today — we respond within 1 hour!</p>
          <a href="tel:8438266708">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8">
              <Phone className="w-5 h-5 mr-2" /> Call or Text 843-826-6708
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}

export default function Blog() {
  const [activePost, setActivePost] = useState(null);

  if (activePost) {
    return <BlogPostView post={activePost} onBack={() => setActivePost(null)} />;
  }

  return (
    <>
      <SEO
        title="Blog | Window Cleaning Tips for Charleston SC Homeowners | Soakd"
        description="Expert tips, guides and advice for Lowcountry homeowners from Soakd Window Cleaning. Learn when to clean windows, soft vs pressure washing, and more."
        canonical="/blog"
      />

      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Expert Advice</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">The Soakd Blog</h1>
          <p className="text-white/75 max-w-xl mx-auto">
            Tips, guides, and expert advice for Lowcountry homeowners from the team at Soakd Window Cleaning.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} onRead={setActivePost} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}