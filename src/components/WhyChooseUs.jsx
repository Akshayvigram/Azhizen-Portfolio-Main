import React from "react";
import { motion } from "framer-motion";

const RDIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    <circle cx="12" cy="12" r="4" fill="#eff6ff" />
  </svg>
);

const EndToEndIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const QualityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#eff6ff" />
  </svg>
);

const ClientIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" fill="#eff6ff" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const BENEFITS = [
  {
    icon: <RDIcon />,
    title: "Expert R&D Team",
    desc: "Our team comprises highly skilled researchers, developers, and engineers specializing in firmware, AI/ML, edutech, and hardware designs."
  },
  {
    icon: <EndToEndIcon />,
    title: "End-to-End Solutions",
    desc: "We manage the entire lifecycle of product creation, from custom PCB prototyping and embedded programming to manufacturing and deployment."
  },
  {
    icon: <PrecisionIcon />,
    title: "Precision & Quality",
    desc: "We follow rigorous validation standards, ensuring that every hardware layout, smart component, and software module operates with peak efficiency."
  },
  {
    icon: <ClientIcon />,
    title: "Client-Centric Delivery",
    desc: "We collaborate closely with partnerships, creating scalable, customized hardware solutions that align precisely with commercial success."
  }
];

function PrecisionIcon() {
  return <QualityIcon />;
}

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section 
      style={{ 
        backgroundColor: "#f8fafc", 
        padding: "80px 24px 56px",
        fontFamily: "'Poppins', sans-serif",
        borderTop: "1px solid #f1f5f9",
        borderBottom: "1px solid #f1f5f9",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: "clamp(28px, 5vw, 38px)",
              fontWeight: 800,
              color: "#0f172a",
              marginBottom: "12px",
              lineHeight: 1.2,
            }}
          >
            Why Choose <span style={{ color: "#2563EB" }}>Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: "15px",
              color: "#64748b",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            What makes Azhizen your trusted partner in technical innovation, product development, and placement support.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "28px",
          }}
        >
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(0,0,0,0.06)", transition: { duration: 0.2 } }}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "32px 24px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                border: "1px solid #f1f5f9",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
              }}
            >
              <div 
                style={{ 
                  width: "48px", 
                  height: "48px", 
                  borderRadius: "8px", 
                  backgroundColor: "#eff6ff", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  marginBottom: "20px"
                }}
              >
                {benefit.icon}
              </div>
              <h3 
                style={{ 
                  fontSize: "17px", 
                  fontWeight: 700, 
                  color: "#0f172a", 
                  marginBottom: "12px" 
                }}
              >
                {benefit.title}
              </h3>
              <p 
                style={{ 
                  fontSize: "13.5px", 
                  color: "#64748b", 
                  lineHeight: 1.6,
                  margin: 0
                }}
              >
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
