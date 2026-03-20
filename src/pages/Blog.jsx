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
        body: "If your home is near the water — Isle of Palms, Folly Beach, Seabrook Island, Sullivans Island — we strongly recommend cleaning every 3 to 4 months. Salt air is one of the most corrosive elements for glass. Over time, salt deposits etch into the glass and cause permanent damage that no cleaning will fix.",
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
        body: "Contaminants like hard water minerals, salt, and oxidation can permanently etch into the glass surface. Once etched, the damage cannot be reversed by cleaning alone — it requires glass restoration or full window replacement, which can cost thousands. Regular professional cleanings are a fraction of that cost.",
      },
      {
        heading: "Why Lowcountry Homeowners Choose Soakd",
        body: "We've built our reputation on three things: showing up fast, doing the job right, and standing behind our work with our Clean Window Guarantee. With 70+ five-star reviews and the fastest response time in the area, Soakd is the team your neighbors trust.",
      },
    ],
  },
  {
    id: 2,
    slug: "pressure-washing-vs-soft-washing-charleston",
    title: "Pressure Washing vs Soft Washing: What's Right for Your Lowcountry Home?",
    date: "March 2026",
    category: "Pressure Washing & Soft Washing",
    seoTitle: "Pressure Washing vs Soft Washing: What's Right for Your Lowcountry Home? | Soakd",
    metaDescription: "Not sure if you need pressure washing or soft washing in Charleston SC? Soakd explains the difference. Free quotes at 843-826-6708.",
    intro: "One of the most common questions we get is: do I need pressure washing or soft washing? The honest answer depends on what surface you're cleaning and what kind of buildup you're dealing with.",
    sections: [
      {
        heading: "Window Cleaning — A Specialized Service",
        body: "Professional window cleaning is its own specialized service. Unlike spraying water at your home's exterior, window cleaning involves detailed techniques that remove hard water stains, salt deposits, and grime from glass without streaks. It's the most precise exterior cleaning service your home can receive.",
      },
      {
        heading: "What Is Soft Washing?",
        body: "Soft washing uses low pressure water combined with professional cleaning solutions to safely remove algae, mildew, and mold from delicate surfaces like vinyl siding, stucco, and roofs. The cleaning solution does the heavy lifting — not pressure — meaning no risk of damage to your home.",
      },
      {
        heading: "What Is Pressure Washing?",
        body: "Pressure washing uses high-pressure water to blast away tough buildup from hard, durable surfaces like concrete driveways, brick, pool decks, and patios. Using high pressure on the wrong surface — like siding or aging wood — can cause serious damage including cracking and water intrusion.",
      },
      {
        heading: "The Soakd Approach: Right Tool, Right Surface",
        body: "At Soakd, we assess every home individually. Our team uses professional window cleaning for your glass, soft washing for siding and walls, and pressure washing for hard surfaces like your driveway — all backed by our Clean Window Guarantee.",
      },
    ],
  },
  {
    id: 3,
    slug: "clean-windows-before-selling-home-charleston",
    title: "5 Reasons Charleston Homeowners Should Clean Their Windows Before Selling",
    date: "March 2026",
    category: "Window Cleaning & Home Value",
    seoTitle: "5 Reasons Charleston Homeowners Should Clean Their Windows Before Selling | Soakd",
    metaDescription: "Selling your home in Charleston SC? Clean windows dramatically increase curb appeal and buyer first impressions. Call Soakd at 843-826-6708.",
    intro: "If you're getting ready to list your home in Charleston, Summerville, or Mount Pleasant, don't overlook one of the highest-ROI improvements most sellers miss: professional window cleaning.",
    sections: [
      {
        heading: "1. First Impressions Start at the Curb",
        body: "Buyers form an opinion within seconds of pulling up. Dirty or hazy windows make a home look neglected — even if everything else is spotless. Crystal-clear windows signal the property has been well cared for, building buyer confidence before they even step inside.",
      },
      {
        heading: "2. Clean Windows Make Every Room Look Bigger and Brighter",
        body: "Dirty windows block a surprising amount of natural light. A professional cleaning brightens your interiors, making rooms feel larger and more inviting — especially important in listing photos, which most buyers see first.",
      },
      {
        heading: "3. One of the Cheapest Improvements With the Highest Visual Impact",
        body: "Compared to kitchen updates or new flooring, professional window cleaning is extremely affordable — and the visual payoff is immediate. Buyers notice clean glass both inside and outside the home.",
      },
      {
        heading: "4. Salt Air and Pollen Leave Lasting Residue",
        body: "In the Lowcountry, salt air and heavy pollen leave stubborn residue that standard wiping won't remove. Professional cleaners use specialized solutions to eliminate hard water stains and oxidation. Buyers notice cloudy or etched glass — and it can raise concerns about the home's overall condition.",
      },
      {
        heading: "5. It Shows You Take Pride in Your Home",
        body: "Sellers who sweat the small details signal that the big things have been taken care of too. Clean windows, clean gutters, a clean exterior — these details collectively communicate that your home has been maintained with care, leading to stronger offers.",
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