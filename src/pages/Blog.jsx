import React, { useState } from 'react';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SEO from '../components/shared/SEO';

const BLOG_POSTS = [
  {
    id: 1,
    slug: "how-often-clean-windows-charleston-sc",
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
        body: "We've built our reputation on three things: showing up fast, doing the job right, and standing behind our work with our Clean Window Guarantee. With 70+ five-star Google reviews and the fastest response time in Charleston, Soakd is the window cleaning company your neighbors trust in West Ashley, Mount Pleasant, James Island, and beyond.",
      },
    ],
  },
  {
    id: 2,
    slug: "pressure-washing-vs-soft-washing-charleston",
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
        body: "Any company can put fake testimonials on their own site. Always check Google Reviews for honest, verified feedback from real customers. Soakd has 70+ five-star reviews from Charleston homeowners across West Ashley, Mount Pleasant, James Island, and more.",
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
];

function BlogCard({ post, onRead }) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden">
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