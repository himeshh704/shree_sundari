"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";
import TextReveal from "@/components/ui/TextReveal";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
          
          <div className={styles.heroImageContainer}>
            <motion.img 
              src="https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=2000&auto=format&fit=crop" 
              alt="Shreesundari Beauty" 
              className={styles.heroImage}
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(234, 230, 225, 0.1), rgba(234, 230, 225, 0.4))', zIndex: 1 }} />
          </div>

          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          >
            shreesundari
          </motion.h1>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
            <div className={styles.heroSubtitleContainer}>
              <motion.h2 
                className={styles.heroSubtitle}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                New philosophy of bridal elegance: <br/> timeless artistry.
              </motion.h2>
              <motion.p 
                className={styles.heroText}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                Shreesundari is about conscious simplicity — effective techniques, thoughtful products, and soft textures designed for your most important day.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
              >
                <a href="#about" style={{ padding: '0.75rem 2rem', backgroundColor: '#9B9B88', color: '#FAFAF7', borderRadius: '50px', fontSize: '0.875rem', textDecoration: 'none', transition: 'background-color 0.3s' }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#7a7a6a'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#9B9B88'}>
                  More about Neha
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              style={{ padding: '4rem 2rem 0', maxWidth: '300px' }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.5rem' }}>Location</p>
              <p style={{ fontFamily: 'var(--font-jost)', fontSize: '0.875rem', color: 'var(--text-charcoal)' }}>Pali, Rajasthan</p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`${styles.section} ${styles.bgWhite}`}>
        <div className={`container ${styles.splitSection}`}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1 }}
            className={`img-container ${styles.aspectPortrait}`}
          >
            <img 
              src="https://images.unsplash.com/photo-1522337360788-8b13fee7a3ce?q=80&w=2069&auto=format&fit=crop" 
              alt="Luxury Makeup" 
              className="img-aesthetic"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1 }}
          >
            <h4 style={{ fontFamily: 'var(--font-jost)', color: 'var(--accent-rosegold)', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Neha Soni MUA</h4>
            <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>Artistry That Celebrates You</h2>
            <p className="text-body" style={{ marginBottom: '1.5rem' }}>
              At Shreesundari, we believe that makeup is not about masking who you are—it is about enhancing the breathtaking features you already possess. Based in Pali, Rajasthan, Neha Soni brings years of expertise in luxury bridal and high-fashion makeup.
            </p>
            <p className="text-body" style={{ marginBottom: '2.5rem' }}>
              Using only the finest global cosmetic brands, our mission is to ensure you walk down the aisle or step into your event feeling like the absolute best version of yourself—radiant, confident, and unforgettable.
            </p>
            <img src="/signature.png" alt="Neha Soni" style={{ height: '3rem', opacity: 0.5 }} onError={(e) => e.currentTarget.style.display = 'none'} />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.section}>
        <div className="container">
          <div className={styles.sectionTitle}>
            <TextReveal text="Signature Services" className="heading-lg" />
          </div>
          
          <div className={styles.servicesGrid}>
            <motion.div 
              className={`${styles.serviceCard} ${styles.serviceCard1}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="https://images.unsplash.com/photo-1595956553066-b24610b3085c?q=80&w=2000&auto=format&fit=crop" alt="Bridal Makeup" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
              <div className={styles.serviceOverlay} />
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>Bridal Excellence</h3>
                <p className={styles.serviceDesc}>A bespoke, flawless look designed specifically for your big day. Long-lasting, HD, and utterly radiant.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className={`${styles.serviceCard} ${styles.serviceCard2}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="https://images.unsplash.com/photo-1512496015851-a1dc8a478b02?q=80&w=2000&auto=format&fit=crop" alt="Party Makeup" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
              <div className={styles.serviceOverlay} />
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>Event & Party</h3>
                <p className={styles.serviceDesc}>Sophisticated glam for engagements, receptions, and special occasions.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className={`${styles.serviceCard} ${styles.serviceCard3}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2000&auto=format&fit=crop" alt="Hair Styling" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
              <div className={styles.serviceOverlay} />
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>Luxury Hair</h3>
                <p className={styles.serviceDesc}>From elegant updos to voluminous Hollywood waves, perfectly complementing your look.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className={`${styles.serviceCard} ${styles.serviceCard4}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="https://images.unsplash.com/photo-1516975080661-46bfa2c281c7?q=80&w=2000&auto=format&fit=crop" alt="Pre Wedding" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
              <div className={styles.serviceOverlay} />
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>Pre-Wedding Shoots</h3>
                <p className={styles.serviceDesc}>HD camera-ready makeup designed to look stunning in natural light and professional photography.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
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
              "https://images.unsplash.com/photo-1601639016834-311451f2f01f?q=80&w=1000&auto=format&fit=crop"
            ].map((img, i) => (
              <motion.div 
                key={i}
                className={styles.galleryItem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <div className="img-container">
                  <img src={img} alt="Shreesundari Bride" style={{ width: '100%', height: 'auto' }} className="img-aesthetic" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="https://www.instagram.com/shreesundari_?igsh=OXpxNGQ0aHk3NmRj" target="_blank" rel="noreferrer" className="btn-outline">
              View More on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className={styles.ctaSection}>
        <div className={styles.ctaBg}></div>
        <div className={`container ${styles.ctaContainer}`}>
          <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>Ready for Your Transformation?</h2>
          <p className="text-body" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            Dates fill up quickly, especially for the upcoming bridal season. Connect with Neha to secure your date and begin the journey to your perfect look.
          </p>
          <a href="https://wa.me/919660651719?text=Hello!%20I'm%20interested%20in%20booking%20an%20appointment%20with%20Shreesundari." target="_blank" rel="noreferrer" className="btn-primary">
            Book Appointment via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
