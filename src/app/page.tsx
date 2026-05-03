"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";
import TextReveal from "@/components/ui/TextReveal";

import type { Transition } from "framer-motion";

// Shared animation presets for performance
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" } as const,
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] } as Transition,
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.9, delay } as Transition,
});

export default function Home() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className={styles.hero}>

        {/* Image block */}
        <div className={styles.heroImageContainer}>
          <motion.img
            src="https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=2000&auto=format&fit=crop"
            alt="Shreesundari bridal beauty"
            className={styles.heroImage}
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
          <div className={styles.heroImageGrad} />
        </div>

        {/* Giant brand name — sits over the image bottom edge */}
        <motion.h1
          className={styles.heroTitle}
          {...fadeIn(0.4)}
        >
          Shreesundari
        </motion.h1>

        {/* Split row below */}
        <div className={styles.heroBottom}>
          <div className={styles.heroSubtitleContainer}>
            <motion.span
              style={{ fontFamily: "var(--font-jost)", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.5, display: "block", marginBottom: "1rem" }}
              {...fadeIn(0.9)}
            >
              Bridal · Party · Editorial
            </motion.span>
            <motion.h2 className={styles.heroSubtitle} {...fadeIn(1)}>
              New philosophy of<br />bridal elegance.
            </motion.h2>
            <motion.p className={styles.heroText} {...fadeIn(1.15)}>
              Shreesundari is about conscious simplicity — effective techniques, thoughtful products, and soft textures designed for your most important day.
            </motion.p>
            <motion.div {...fadeIn(1.3)}>
              <a href="#about" className={styles.heroCta}>
                More about Neha
              </a>
            </motion.div>
          </div>

          <motion.div className={styles.heroMeta} {...fadeIn(1.2)}>
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4, marginBottom: "0.4rem" }}>Based in</p>
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.95rem", color: "var(--text-charcoal)" }}>Pali, Rajasthan</p>
          </motion.div>
        </div>

      </section>

      {/* ── ABOUT ───────────────────────────────────────────── */}
      <section id="about" className={`${styles.section} ${styles.bgWhite}`}>
        <div className={`container ${styles.splitSection}`}>
          <motion.div {...fadeUp()} className={`img-container ${styles.aspectPortrait}`}>
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13fee7a3ce?q=80&w=2069&auto=format&fit=crop"
              alt="Luxury Makeup"
              className="img-aesthetic"
            />
          </motion.div>

          <motion.div {...fadeUp(0.15)}>
            <h4 style={{ fontFamily: "var(--font-jost)", color: "var(--accent-rosegold)", letterSpacing: "0.3em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: "1.5rem" }}>
              Neha Soni — MUA
            </h4>
            <h2 className="heading-lg" style={{ marginBottom: "2rem" }}>Artistry That<br />Celebrates You</h2>
            <p className="text-body" style={{ marginBottom: "1.5rem" }}>
              At Shreesundari, we believe makeup is not about masking who you are — it is about enhancing the breathtaking features you already possess. Based in Pali, Rajasthan, Neha Soni brings years of expertise in luxury bridal and high-fashion makeup.
            </p>
            <p className="text-body" style={{ marginBottom: "2.5rem" }}>
              Using only the finest global cosmetic brands, our mission is to ensure you walk down the aisle feeling like the absolute best version of yourself — radiant, confident, and unforgettable.
            </p>
            <a href="#contact" className="btn-primary">Book a Consultation</a>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────── */}
      <section id="services" className={styles.section}>
        <div className="container">
          <div className={styles.sectionTitle}>
            <TextReveal text="Signature Services" className="heading-lg" />
          </div>

          <div className={styles.servicesGrid}>
            {[
              {
                title: "Bridal Excellence",
                desc: "A bespoke, flawless look designed for your big day. Long-lasting, HD, and utterly radiant.",
                img: "https://images.unsplash.com/photo-1595956553066-b24610b3085c?q=80&w=2000&auto=format&fit=crop",
                span: styles.serviceCard1,
              },
              {
                title: "Event & Party",
                desc: "Sophisticated glam for engagements, receptions, and special occasions.",
                img: "https://images.unsplash.com/photo-1512496015851-a1dc8a478b02?q=80&w=2000&auto=format&fit=crop",
                span: styles.serviceCard2,
              },
              {
                title: "Luxury Hair",
                desc: "From elegant updos to voluminous Hollywood waves, perfectly complementing your look.",
                img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2000&auto=format&fit=crop",
                span: styles.serviceCard3,
              },
              {
                title: "Pre-Wedding Shoots",
                desc: "HD camera-ready makeup designed to look stunning in natural light and professional photography.",
                img: "https://images.unsplash.com/photo-1516975080661-46bfa2c281c7?q=80&w=2000&auto=format&fit=crop",
                span: styles.serviceCard4,
              },
            ].map((svc, i) => (
              <motion.div
                key={svc.title}
                className={`${styles.serviceCard} ${svc.span}`}
                {...fadeUp(i * 0.1)}
              >
                <img src={svc.img} alt={svc.title} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
                <div className={styles.serviceOverlay} />
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{svc.title}</h3>
                  <p className={styles.serviceDesc}>{svc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────── */}
      <section id="gallery" className={`${styles.section} ${styles.bgWhite}`}>
        <div className="container">
          <div className={styles.sectionTitle}>
            <TextReveal text="Our Beautiful Brides" className="heading-lg" />
          </div>

          <div className={styles.gallery}>
            {[
              "https://images.unsplash.com/photo-1594968417935-430b8b982ce1?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1601639016834-311451f2f01f?q=80&w=1000&auto=format&fit=crop",
            ].map((img, i) => (
              <motion.div
                key={i}
                className={styles.galleryItem}
                {...fadeUp(i * 0.08)}
              >
                <div className="img-container">
                  <img src={img} alt="Shreesundari Bride" style={{ width: "100%", height: "auto" }} className="img-aesthetic" loading="lazy" />
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a href="https://www.instagram.com/shreesundari_?igsh=OXpxNGQ0aHk3NmRj" target="_blank" rel="noreferrer" className="btn-outline">
              View More on Instagram ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section id="contact" className={styles.ctaSection}>
        <div className={styles.ctaBg} />
        <motion.div className={`container ${styles.ctaContainer}`} {...fadeUp()}>
          <h2 className="heading-lg" style={{ marginBottom: "1.5rem" }}>Ready for Your<br />Transformation?</h2>
          <p className="text-body" style={{ marginBottom: "2.5rem", textAlign: "center", maxWidth: "540px", margin: "0 auto 2.5rem" }}>
            Dates fill up quickly, especially for the upcoming bridal season. Connect with Neha to secure your date and begin the journey to your perfect look.
          </p>
          <a
            href="https://wa.me/919660651719?text=Hello!%20I'm%20interested%20in%20booking%20an%20appointment%20with%20Shreesundari."
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Book via WhatsApp
          </a>
        </motion.div>
      </section>
    </>
  );
}
