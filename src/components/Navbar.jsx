import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { name: "Home",     path: "/" },
  { name: "Service",  path: "/", scrollTo: "services" },
  // { name: "Course",   path: "/course" },
  { name: "About us", path: "/about"},
  { name: "Career",   path: "/carrer" },
  { name: "Contact",  path: "/contact-us" },

];

const Navbar = () => {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();
  const currentPath = location.pathname;

  /* close mobile menu on route change */
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  /* subtle box-shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* handle nav clicks — supports scroll-to-section */
  const handleNavClick = ({ path, scrollTo }) => {
    if (scrollTo) {
      if (currentPath !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(scrollTo);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 350);
      } else {
        const el = document.getElementById(scrollTo);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "#ffffff",
        boxShadow: scrolled
          ? "0 2px 12px rgba(0,0,0,0.10)"
          : "0 1px 4px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* ── Logo ── */}
        <a
          href="/"
          style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
          onClick={(e) => { e.preventDefault(); navigate("/"); }}
        >
          <img
            src="/logo1.png"
            alt="Azhizen Logo"
            style={{ height: "36px", width: "auto", objectFit: "contain" }}
          />
        </a>

        {/* ── Desktop Nav Links ── */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
        >
          {NAV_LINKS.map(({ name, path, scrollTo }) => {
            const active = !scrollTo && currentPath === path;
            return (
              <button
                key={name}
                onClick={() => handleNavClick({ path, scrollTo })}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px 0",
                  fontSize: "15px",
                  fontWeight: active ? "700" : "400",
                  color: active ? "#1877F2" : "#374151",
                  letterSpacing: "0.01em",
                  transition: "color 0.2s",
                  position: "relative",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.color = "#1877F2";
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.color = "#374151";
                }}
              >
                {name}
                {/* active underline */}
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "100%",
                      height: "2px",
                      borderRadius: "2px",
                      backgroundColor: "#1877F2",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Switch to Diary Tech Button ──
        <a
          href="https://diarytech.in"
          target="_blank"
          rel="noopener noreferrer"
          className="switch-btn"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "linear-gradient(135deg, #1877F2 0%, #0F5FD4 100%)",
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: "600",
            padding: "8px 16px",
            borderRadius: "50px",
            textDecoration: "none",
            whiteSpace: "nowrap",
            transition: "filter 0.2s, transform 0.15s",
            boxShadow: "0 3px 10px rgba(24,119,242,0.40)",
            letterSpacing: "0.01em",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = "brightness(1.12)";
            e.currentTarget.style.transform = "scale(1.03)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = "brightness(1)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Switch to Diary Tech
          <span style={{ fontSize: "16px", lineHeight: 1, fontWeight: "700" }}>⇄</span>
        </a> */}

        {/* ── Mobile Hamburger ── */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            color: "#374151",
          }}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6"  x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      {isOpen && (
        <div
          style={{
            backgroundColor: "#ffffff",
            borderTop: "1px solid #e5e7eb",
            padding: "12px 24px 20px",
          }}
        >
          {NAV_LINKS.map(({ name, path, scrollTo }) => {
            const active = !scrollTo && currentPath === path;
            return (
              <button
                key={name}
                onClick={() => { setIsOpen(false); handleNavClick({ path, scrollTo }); }}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "10px 0",
                  fontSize: "15px",
                  fontWeight: active ? "700" : "400",
                  color: active ? "#1877F2" : "#374151",
                  borderBottom: "1px solid #f3f4f6",
                  fontFamily: "inherit",
                }}
              >
                {name}
              </button>
            );
          })}
          <a
            href="https://diarytech.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "16px",
              background: "linear-gradient(135deg, #1877F2 0%, #0F5FD4 100%)",
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: "600",
              padding: "8px 16px",
              borderRadius: "50px",
              textDecoration: "none",
              boxShadow: "0 3px 10px rgba(24,119,242,0.40)",
              letterSpacing: "0.01em",
            }}
          >
            Switch to Diary Tech
            <span style={{ fontSize: "16px", lineHeight: 1, fontWeight: "700" }}>⇄</span>
          </a>
        </div>
      )}

      {/* ── Responsive CSS ── */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav  { display: none !important; }
          .switch-btn   { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;