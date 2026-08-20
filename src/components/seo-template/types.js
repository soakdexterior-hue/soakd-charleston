/**
 * Copy shapes for the four SEO page types.
 *
 * SeoPageTemplate renders in this order, skipping any section whose copy is
 * not provided. The hub, when present, always sits directly BELOW the hero:
 *
 *   Nested Broad Stroke (county):  Hero → Locations hub → Benefits → Why → FAQ → Map (area)
 *   Broad Stroke (city):           Hero → Services hub  → Benefits → Why → FAQ → Map (area)
 *   Location Service / Primary:    Hero →                 Benefits → Why → FAQ → Map (gbp)
 *
 * Copy strings marked "rich" accept inline [label](url) links and render
 * through RichText. FAQ answers keep their links on the page but are stripped
 * to plain text for JSON-LD. Meta fields never carry links.
 *
 * @typedef {Object} HeroCopy
 * @property {string}  headline
 * @property {string}  subtext                rich
 * @property {string} [image]                 Background image URL.
 * @property {string} [imageAlt]
 * @property {string} [imageCredit]
 * @property {string} [formTitle]             Quote-form card title.
 * @property {string} [formPreselectService]  Service slug preselected in the hero form.
 *
 * @typedef {Object} SplitItem
 * @property {string} title                   Bold lead-in.
 * @property {string} text                    rich
 *
 * @typedef {Object} SplitCopy
 * @property {string}      [eyebrow]          Defaults to "Benefits" / "Why Us".
 * @property {string}       heading
 * @property {string}      [subheading]       rich
 * @property {SplitItem[]}  items             Three checkmark rows.
 * @property {string}      [image]
 * @property {string}      [imageAlt]
 *
 * @typedef {Object} HubItem
 * @property {string}  name
 * @property {string}  href
 * @property {string} [image]                 Thumbnail: the image of the page it links to.
 * @property {string} [description]
 *
 * @typedef {Object} HubCopy
 * @property {string}    [eyebrow]
 * @property {string}     heading
 * @property {string}    [subtext]
 * @property {HubItem[]}  items
 * @property {'location'|'service'} variant
 *
 * @typedef {Object} MapCopy
 * @property {string} [eyebrow]               Defaults to "Find Us".
 * @property {string} [heading]               Defaults per variant.
 * @property {string} [subtext]               rich
 * @property {'location'|'gbp'} [variant]     "location" = area map by query (county/city pages);
 *                                            "gbp" = Google Business Profile (leaf service pages).
 * @property {string} [query]                 Place query for the "location" variant.
 *
 * @typedef {Object} FaqItem
 * @property {string} question
 * @property {string} answer                  rich
 *
 * @typedef {Object} FaqCopy
 * @property {string}    [title]
 * @property {string}    [subtitle]
 * @property {FaqItem[]}  items
 *
 * @typedef {Object} SeoPageCopy
 * @property {HeroCopy}   hero
 * @property {HubCopy}   [hub]
 * @property {SplitCopy}  benefits
 * @property {SplitCopy}  why
 * @property {FaqCopy}    faq
 * @property {MapCopy}    map
 * @property {string}    [ctaHeadline]
 */

export {};
