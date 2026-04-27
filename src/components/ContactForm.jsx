import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { db, realtimeDb } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, push, set } from 'firebase/database';
import FooterSection from './FooterSection';

const NAV_LINKS = [
  { name: 'Home',     path: '/' },
  { name: 'Service',  path: '/', scrollTo: 'services' },
  { name: 'Course',   path: '/course' },
  { name: 'About us', path: '/', scrollTo: 'about-us' },
  { name: 'Contact',  path: '/contact-us' },
  { name: 'Career',   path: '/carrer' },
];

function ContactNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleNavClick = ({ path, scrollTo }) => {
    setIsOpen(false);
    if (scrollTo) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    } else {
      navigate(path);
    }
  };

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        className="cn-desktop-bar"
      >
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/'); }}
          style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
        >
          <img
            src="/logo1.png"
            alt="Azhizen"
            style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
          />
        </a>

        {/* Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="cn-links">
          {NAV_LINKS.map(({ name, path, scrollTo }) => {
            const active = !scrollTo && currentPath === path;
            return (
              <button
                key={name}
                onClick={() => handleNavClick({ path, scrollTo })}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 0',
                  fontSize: '15px',
                  fontWeight: active ? '700' : '400',
                  color: active ? '#1877F2' : 'rgba(255,255,255,0.92)',
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s',
                  fontFamily: 'inherit',
                  position: 'relative',
                }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = 'rgba(255,255,255,0.92)'; }}
              >
                {name}
                {active && (
                  <span style={{
                    position: 'absolute', bottom: '-2px', left: '50%',
                    transform: 'translateX(-50%)', width: '100%',
                    height: '2px', borderRadius: '2px', background: '#1877F2',
                  }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Switch to Diary Tech — solid blue matching global navbar */}
        <a
          href="https://diarytech.in"
          target="_blank"
          rel="noopener noreferrer"
          className="cn-switch"
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: 'linear-gradient(135deg, #1877F2 0%, #0F5FD4 100%)',
            color: '#ffffff',
            fontSize: '13px', fontWeight: '600',
            padding: '8px 16px', borderRadius: '50px',
            textDecoration: 'none', whiteSpace: 'nowrap',
            boxShadow: '0 3px 10px rgba(24,119,242,0.45)',
            transition: 'filter 0.2s, transform 0.15s',
            letterSpacing: '0.01em',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.12)'; e.currentTarget.style.transform = 'scale(1.03)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.filter = 'brightness(1)'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          Switch to Diary Tech
          <span style={{ fontSize: '16px', lineHeight: 1, fontWeight: '700' }}>⇄</span>
        </a>

        {/* Mobile hamburger */}
        <button
          className="cn-hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen
              ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      {isOpen && (
        <div style={{
          position: 'absolute', top: '64px', left: 0, right: 0, zIndex: 30,
          background: 'rgba(5,15,40,0.97)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '12px 24px 20px',
        }}>
          {NAV_LINKS.map(({ name, path, scrollTo }) => (
            <button
              key={name}
              onClick={() => handleNavClick({ path, scrollTo })}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '10px 0', fontSize: '15px',
                color: !scrollTo && currentPath === path ? '#1877F2' : 'rgba(255,255,255,0.88)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                fontFamily: 'inherit',
              }}
            >
              {name}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .cn-links    { display: none !important; }
          .cn-switch   { display: none !important; }
          .cn-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .cn-hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}

const socialLinks = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919750603988',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/181RVfh2RT/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/azhizen_solutions?igsh=YTQ1cTdheTFjM3py',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactDetail: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'contactForms'), {
        ...formData,
        timestamp: new Date(),
      });
      console.log('Firestore document written with ID:', docRef.id);

      const contactFormRef = ref(realtimeDb, 'contactForms');
      const newContactFormRef = push(contactFormRef);
      await set(newContactFormRef, {
        ...formData,
        timestamp: new Date().toISOString(),
      });
      console.log('Realtime DB key:', newContactFormRef.key);

      alert('Message Sent Successfully!');
      setFormData({ firstName: '', lastName: '', email: '', contactDetail: '', message: '' });
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Submission Failed: ' + error.message);
    }
  };

  return (
    <div className="bg-white w-full min-h-screen flex flex-col">

      {/* ═══════════════════════════════════════
          HERO BANNER + EMBEDDED NAVBAR
      ═══════════════════════════════════════ */}
      <section className="relative w-full">
        <div className="relative w-full" style={{ height: '560px' }}>

          {/* Full-cover banner photo */}
          <img
            src="/image 476.png"
            alt="Contact banner"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Dark overlay — heavier on left, lighter on right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(5,20,50,0.75) 25%, rgba(5,20,50,0.38) 100%)',
            }}
          />

          {/* ── NAVBAR sits over the photo ── */}
          <ContactNavbar />

          {/* White diagonal cut at bottom */}
          <div
            className="absolute bottom-0 left-0 w-full"
            style={{
              height: '180px',
              background: 'white',
              clipPath: 'polygon(0 70%, 100% 30%, 100% 100%, 0 100%)',
            }}
          />
        </div>

        {/* ═══════════════════════════════════
            FLOATING CARD
        ═══════════════════════════════════ */}
        <div
          className="relative z-10 mx-auto px-4 pb-20 w-full"
          style={{ maxWidth: '1160px', marginTop: '-280px' }}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.14)' }}
          >

            {/* LEFT — Send us a message */}
            <div className="md:w-1/2 w-full p-10 bg-white">
              <h2 className="font-bold text-[28px] text-black mb-6">Send us a message</h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Row 1 — First Name / Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">First Name</label>
                    <input
                      name="firstName"
                      placeholder="Enter Your First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1.5px solid #d8e2f3',
                        background: '#f0f4ff',
                        fontSize: '13px',
                        color: '#333',
                        outline: 'none',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#4169E1'}
                      onBlur={(e) => e.target.style.borderColor = '#d8e2f3'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Last Name</label>
                    <input
                      name="lastName"
                      placeholder="Enter Your Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1.5px solid #d8e2f3',
                        background: '#f0f4ff',
                        fontSize: '13px',
                        color: '#333',
                        outline: 'none',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#4169E1'}
                      onBlur={(e) => e.target.style.borderColor = '#d8e2f3'}
                    />
                  </div>
                </div>

                {/* Row 2 — Email / Contact Detail */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter Your Email ID"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1.5px solid #d8e2f3',
                        background: '#f0f4ff',
                        fontSize: '13px',
                        color: '#333',
                        outline: 'none',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#4169E1'}
                      onBlur={(e) => e.target.style.borderColor = '#d8e2f3'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Contact Detail</label>
                    <input
                      name="contactDetail"
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      value={formData.contactDetail}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1.5px solid #d8e2f3',
                        background: '#f0f4ff',
                        fontSize: '13px',
                        color: '#333',
                        outline: 'none',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#4169E1'}
                      onBlur={(e) => e.target.style.borderColor = '#d8e2f3'}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Message</label>
                  <textarea
                    name="message"
                    placeholder="Enter Your Querys"
                    value={formData.message}
                    onChange={handleChange}
                    rows={7}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1.5px solid #d8e2f3',
                      background: '#f0f4ff',
                      fontSize: '13px',
                      color: '#333',
                      outline: 'none',
                      resize: 'none',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#4169E1'}
                    onBlur={(e) => e.target.style.borderColor = '#d8e2f3'}
                  />
                </div>

                {/* Submit — royal blue, bottom-right */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    style={{
                      background: '#4169E1',
                      color: '#fff',
                      fontWeight: '600',
                      fontSize: '14px',
                      padding: '12px 36px',
                      borderRadius: '10px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#3457c0'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#4169E1'}
                  >
                    Send a message
                  </button>
                </div>

              </form>
            </div>

            {/* RIGHT — Get in Touch */}
            <div className="md:w-1/2 w-full p-10 bg-[#eef3ff]">
              <h2 className="font-bold text-[26px] text-black mb-2">Get in Touch</h2>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-xs">
                Whether you have a question, enquiry, or project idea, our team is ready to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: '#1877F2', boxShadow: '0 4px 14px rgba(24,119,242,0.35)' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-[15px] mb-0.5">Head Office</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Tiruchengode, Namakkal,<br />Tamil Nadu.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: '#1877F2', boxShadow: '0 4px 14px rgba(24,119,242,0.35)' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-[15px] mb-0.5">Email Us</h4>
                    <p className="text-sm text-gray-500">Azhizen@Azhizen.Com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: '#1877F2', boxShadow: '0 4px 14px rgba(24,119,242,0.35)' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-[15px] mb-0.5">Call Us</h4>
                    <p className="text-sm text-gray-500">Phone: +91 9685741230</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-sm text-black mb-4">Follow Our Social Media</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#1877F2] transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          GOOGLE MAPS
      ═══════════════════════════════════ */}
      <section className="w-full">
        <div className="w-full" style={{ height: '480px' }}>
          <iframe
            src="https://www.google.com/maps?q=319%20Mercury%20Block%20KSRCE%20Neo%20Tiruchengode%20637215&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            title="Azhizen Location Map"
          />
        </div>
      </section>

      {/* Footer */}
      <FooterSection />

    </div>
  );
}

export default ContactForm;
