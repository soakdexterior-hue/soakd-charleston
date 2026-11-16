import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { useAuth } from '@/lib/AuthContext';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Play, ArrowUpRight } from 'lucide-react';

const SPANS = [
  'col-span-12 md:col-span-7',
  'col-span-12 md:col-span-5',
  'col-span-6 md:col-span-4',
  'col-span-6 md:col-span-8',
];

const titleOf = (item) =>
  item.caption || (item.filename || 'Soakd').replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ');

export default function MediaGallery() {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    base44.entities.AboutMedia.filter({ is_published: true }, { sort: 'sort_order', limit: 24 })
      .then((page) => setItems(page.items || []))
      .catch(() => setItems([]));
  }, []);

  if (!items.length && user?.role !== 'admin') return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase">On the Job</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">Life at Soakd</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              Real crews, real homes, and the Lowcountry shine we leave behind.
            </p>
          </div>
          {user?.role === 'admin' && (
            <Link
              to="/about-media"
              className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:underline"
            >
              Manage photos &amp; videos <ArrowUpRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {items.length === 0 ? (
          <p className="text-sm text-muted-foreground border border-dashed rounded-xl p-8 text-center">
            No published media yet. Use “Manage photos &amp; videos” to import attachments from Gmail.
          </p>
        ) : (
          <div className="grid grid-cols-12 gap-3 sm:gap-4">
            {items.map((item, i) => (
              <motion.figure
                key={item.id}
                className={`${SPANS[i % SPANS.length]} m-0`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: Math.min(i * 0.06, 0.45) }}
              >
                <button
                  type="button"
                  onClick={() => setActive(item)}
                  className="group relative block w-full overflow-hidden bg-primary/5"
                  aria-label={`Open ${titleOf(item)}`}
                >
                  {item.type === 'video' ? (
                    <>
                      <video
                        src={item.url}
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-primary/25">
                        <span className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                          <Play className="w-5 h-5 text-primary" />
                        </span>
                      </span>
                    </>
                  ) : (
                    <img
                      src={item.url}
                      alt={titleOf(item)}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  )}
                </button>
                <figcaption
                  className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground truncate"
                  title={`${titleOf(item)} · Soakd Charleston`}
                >
                  {titleOf(item)} <span className="text-muted-foreground/60">· Soakd Charleston</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        )}
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-4xl p-2">
          {active &&
            (active.type === 'video' ? (
              <video src={active.url} controls autoPlay playsInline className="w-full max-h-[75vh]" />
            ) : (
              <img src={active.url} alt={titleOf(active)} className="w-full max-h-[75vh] object-contain" />
            ))}
        </DialogContent>
      </Dialog>
    </section>
  );
}