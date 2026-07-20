import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "What services does Azhizen Solutions provide?",
    answer: "We offer custom hardware prototyping, PCB design, AI/ML firmware integration, smart IoT automation, R&D validation services, and creative digital storytelling/marketing through Azhizen Media."
  },
  {
    id: 2,
    question: "How does the Azhizen Academy training program work?",
    answer: "Azhizen Academy offers hands-on, cohort-based technical training in embedded systems, IoT, and software development. We bridge the gap between academic learning and industry expectations."
  },
  {
    id: 3,
    question: "Do you provide job placement support?",
    answer: "Yes, Azhizen Academy has a dedicated placement wing. We prepare students through mock interviews, resume styling, and directly connect graduates with our hiring industry partners."
  },
  {
    id: 4,
    question: "Can Azhizen assist with custom hardware prototyping and R&D?",
    answer: "Absolutely. We manage the entire lifecycle of custom product creation, from schematics and multi-layer PCB design to physical component assembly, firmware flashing, and testing."
  },
  {
    id: 5,
    question: "How can we collaborate with Azhizen for a project?",
    answer: "You can reach out via our contact form. Our R&D and engineering teams will schedule a technical scoping call to align on requirements, deliverables, and timelines."
  }
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);
  const [questionInput, setQuestionInput] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [sendHovered, setSendHovered] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (questionInput.trim() !== "") {
      setShowToast(true);
      setQuestionInput("");
      setTimeout(() => setShowToast(false), 3500);
    }
  };

  return (
    <section 
      id="faq-section" 
      className="py-[80px] px-6 sm:px-8 lg:px-12 bg-white w-full border-t border-slate-100"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Title */}
        <div className="text-center mb-[56px]">
          <h2 className="text-[32px] sm:text-[38px] font-semibold text-[#0f172a] font-[Poppins] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Two Columns Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 justify-between items-start">
          
          {/* Left Column: Have a Question Form */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-[350px] shrink-0 flex flex-col items-center"
          >
            {/* Man Thinking Image */}
            <div className="w-[220px] h-[220px] mb-6 flex items-center justify-center">
              <img
                src="/image 1164.png"
                alt="Have a Question?"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Form Title */}
            <h3 className="text-[20px] font-bold text-[#0f172a] font-[Poppins] mb-4 text-center">
              Have a Question?
            </h3>

            {/* Input Form */}
            <form onSubmit={handleSend} className="w-full relative">
              <input
                type="text"
                value={questionInput}
                onChange={(e) => setQuestionInput(e.target.value)}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                placeholder="type here..."
                className="w-full px-5 py-[14px] pr-20 bg-white border rounded-[12px] text-[14px] focus:outline-none transition-colors font-[Poppins] shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
                style={{
                  borderColor: inputFocused ? "#1877F2" : "#E2E8F0",
                  color: "#000000",
                  backgroundColor: "#ffffff",
                }}
              />
              
              {/* Send Button */}
              <div className="flex justify-end mt-3">
                <button
                  type="submit"
                  onMouseEnter={() => setSendHovered(true)}
                  onMouseLeave={() => setSendHovered(false)}
                  className="px-6 py-[10px] font-semibold text-[14px] rounded-[10px] flex items-center gap-2 shadow-[0_4px_12px_rgba(24,119,242,0.2)] transition-all active:scale-[0.98] font-[Poppins]"
                  style={{
                    backgroundColor: sendHovered ? "#166fe5" : "#1877F2",
                    color: "#ffffff",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {/* Paper Plane Icon */}
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Send
                </button>
              </div>
            </form>

            {/* Success Notification */}
            <AnimatePresence>
              {showToast && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 px-4 py-2 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium rounded-lg text-center font-[Poppins] w-full"
                >
                  Thank you! We'll get back to you soon.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Accordion */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex-1 w-full flex flex-col gap-4"
          >
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              const isHovered = hoveredId === item.id;
              return (
                <div 
                  key={item.id}
                  className="border border-[#E2E8F0] rounded-[12px] bg-white overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.015)] transition-all hover:shadow-[0_6px_18px_rgba(0,0,0,0.03)]"
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="w-full text-left px-6 py-[22px] flex items-center justify-between gap-4 font-semibold font-[Poppins] text-[15px] sm:text-[16px] transition-colors"
                    style={{
                      backgroundColor: "transparent",
                      color: isHovered ? "#1877F2" : "#1e293b",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <span>{item.question}</span>
                    
                    {/* Plus / Minus Button Circle */}
                    <div 
                      className={`w-[28px] h-[28px] rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "bg-[#e2e8f0] text-[#475569]" : "bg-[#1877F2] text-white"
                      }`}
                    >
                      {isOpen ? (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      ) : (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Accordion Expandable Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-[22px] text-[14px] text-slate-500 leading-relaxed font-[Poppins] border-t border-slate-50/50 pt-2 bg-slate-50/20">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
