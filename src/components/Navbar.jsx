import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TechTransition from "./TechTransition";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Service", path: "/services" },
  { name: "Course", path: "/course" },
  { name: "Career", path: "/career" },
  { name: "About us", path: "/about" },
  { name: "Contact", path: "/contact-us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastAnchor, setToastAnchor] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionMode, setTransitionMode] = useState("toDiary");
  const transitionModeRef = useRef("toDiary");
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const changeTransitionMode = (mode) => {
    setTransitionMode(mode);
    transitionModeRef.current = mode;
  };

  const handleSwitchToTech = () => {
    changeTransitionMode("toDiary");
    setIsAnimating(true);
  };

  const onAnimationComplete = () => {
    if (transitionModeRef.current === "toDiary") {
      sessionStorage.setItem("azhizen_returned_from_diary", "true");
      window.location.href = "https://www.azhizen.com/";
    } else {
      setIsAnimating(false);
    }
  };

  // Handle browser back button or returning from external site
  useEffect(() => {
    const handlePageShow = (event) => {
      const returnedFromDiary = sessionStorage.getItem("azhizen_returned_from_diary");

      if (returnedFromDiary === "true") {
        sessionStorage.removeItem("azhizen_returned_from_diary");
        changeTransitionMode("toTech");
        setIsAnimating(true);
      } else {
        setIsAnimating(false);
      }
    };

    const handlePageHide = () => {
      setIsAnimating(false);
    };

    if (sessionStorage.getItem("azhizen_returned_from_diary") === "true") {
      sessionStorage.removeItem("azhizen_returned_from_diary");
      changeTransitionMode("toTech");
      setIsAnimating(true);
    }

    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("pagehide", handlePageHide);
    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("pagehide", handlePageHide);
    };
  }, []);

  const triggerToast = (serviceName, anchor) => {
    setToastMessage(`${serviceName} is Coming Soon!`);
    setToastAnchor(anchor);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3500);
  };

  /* close mobile menu on route change */
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  /* subtle box-shadow on scroll */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const limit = 4;
      setScrolled(scrollTop > limit);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

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

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const isTransparentRoute = false;
  const isTransparentNavbar = !scrolled && isTransparentRoute;
  const defaultTextColor = isTransparentNavbar ? "#ffffff" : "#374151";

  const navPosition = isTransparentNavbar ? "absolute" : "fixed";
  const navZIndex = isTransparentNavbar ? 100 : 50;
  const navBg = isTransparentNavbar ? "transparent" : "#ffffff";
  const navShadow = isTransparentNavbar
    ? "none"
    : (scrolled ? "0 2px 12px rgba(0,0,0,0.10)" : "0 1px 4px rgba(0,0,0,0.06)");

  return (
    <>
      <nav
        style={{
          position: navPosition,
          top: 0,
          left: 0,
          right: 0,
          zIndex: navZIndex,
          backgroundColor: navBg,
          boxShadow: navShadow,
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
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
              style={{ height: "44px", width: "auto", objectFit: "contain" }}
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
              const active =
                (!scrollTo && currentPath === path) ||
                (name === "Service" && ["/marketing-services", "/training-support", "/services"].includes(currentPath));
              if (name === "Service") {
                return (
                  <div
                    key={name}
                    onMouseEnter={() => setServicesHovered(true)}
                    onMouseLeave={() => setServicesHovered(false)}
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setServicesHovered(!servicesHovered);
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "4px 0",
                        fontSize: "15px",
                        fontWeight: active ? "700" : "400",
                        color: servicesHovered || active ? "#1877F2" : defaultTextColor,
                        letterSpacing: "0.01em",
                        transition: "color 0.2s",
                        position: "relative",
                        fontFamily: "inherit",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      {name}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          transform: servicesHovered ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {servicesHovered && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          backgroundColor: "#ffffff",
                          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                          borderRadius: "12px",
                          padding: "8px 0",
                          minWidth: "190px",
                          zIndex: 100,
                          border: "1px solid #f1f5f9",
                        }}
                      >
                        <button
                          onClick={() => navigate("/services")}
                          style={{
                            display: "block",
                            width: "100%",
                            padding: "10px 16px",
                            textAlign: "left",
                            background: "none",
                            border: "none",
                            fontSize: "14px",
                            color: "#374151",
                            cursor: "pointer",
                            fontFamily: "inherit",
                            transition: "all 0.15s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f8fafc";
                            e.currentTarget.style.color = "#1877F2";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "#374151";
                          }}
                        >
                          Tech Services
                        </button>
                        <button
                          onClick={() => navigate("/marketing-services")}
                          style={{
                            display: "block",
                            width: "100%",
                            padding: "10px 16px",
                            textAlign: "left",
                            background: "none",
                            border: "none",
                            fontSize: "14px",
                            color: "#374151",
                            cursor: "pointer",
                            fontFamily: "inherit",
                            transition: "all 0.15s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f8fafc";
                            e.currentTarget.style.color = "#1877F2";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "#374151";
                          }}
                        >
                          Marketing Services
                        </button>
                        <button
                          onClick={() => navigate("/training-support")}
                          style={{
                            display: "block",
                            width: "100%",
                            padding: "10px 16px",
                            textAlign: "left",
                            background: "none",
                            border: "none",
                            fontSize: "14px",
                            color: "#374151",
                            cursor: "pointer",
                            fontFamily: "inherit",
                            transition: "all 0.15s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f8fafc";
                            e.currentTarget.style.color = "#1877F2";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "#374151";
                          }}
                        >
                          Training Support
                        </button>
                      </div>
                    )}

                    {/* Toast Popover relative to Service wrapper */}
                    {showToast && toastAnchor === "services" && (
                      <div
                        style={{
                          position: "absolute",
                          top: "44px",
                          left: "200px",
                          backgroundColor: "#0a1931",
                          color: "#ffffff",
                          padding: "10px 18px",
                          borderRadius: "10px",
                          boxShadow: "0 10px 30px rgba(0, 110, 230, 0.25)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          fontSize: "13px",
                          fontWeight: "600",
                          whiteSpace: "nowrap",
                          zIndex: 999,
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontFamily: "Poppins, sans-serif",
                          pointerEvents: "none",
                          animation: "popoverFadeIn 0.2s ease-out forwards",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            left: "-5px",
                            top: "14px",
                            transform: "rotate(45deg)",
                            width: "10px",
                            height: "10px",
                            backgroundColor: "#0a1931",
                            borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                        />
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#006EE6"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ flexShrink: 0 }}
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        {toastMessage}
                      </div>
                    )}
                  </div>
                );
              }

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
                    color: active ? "#1877F2" : defaultTextColor,
                    letterSpacing: "0.01em",
                    transition: "color 0.2s",
                    position: "relative",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.color = "#1877F2";
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = defaultTextColor;
                  }}
                >
                  {name}
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

          {/* ── Switch to Diary Tech Button (Desktop) ── */}
          <div style={{ position: "relative", display: "inline-block" }}>
            <button
              onClick={handleSwitchToTech}
              className="switch-btn"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                background: isTransparentNavbar ? "transparent" : "#1877F2",
                color: "#ffffff",
                border: isTransparentNavbar ? "1px solid rgba(255, 255, 255, 0.6)" : "none",
                fontSize: "13.5px",
                fontWeight: "600",
                padding: "8px 20px",
                borderRadius: "50px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s ease-in-out",
                boxShadow: isTransparentNavbar ? "none" : "0 4px 12px rgba(24, 119, 242, 0.3)",
                letterSpacing: "0.01em",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                if (isTransparentNavbar) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                } else {
                  e.currentTarget.style.background = "#1565C0";
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 6px 16px rgba(24, 119, 242, 0.4)";
                }
              }}
              onMouseLeave={(e) => {
                if (isTransparentNavbar) {
                  e.currentTarget.style.background = "transparent";
                } else {
                  e.currentTarget.style.background = "#1877F2";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(24, 119, 242, 0.3)";
                }
              }}
            >
              Switch to Diary Tech
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
              >
                <path d="M4 8h16M20 8l-4-4M20 8l-4 4" />
                <path d="M20 16H4M4 16l4 4M4 16l4-4" />
              </svg>
            </button>

            {showToast && toastAnchor === "switch" && (
              <div
                style={{
                  position: "absolute",
                  top: "120%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#0a1931",
                  color: "#ffffff",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  boxShadow: "0 6px 20px rgba(0, 110, 230, 0.25)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  fontSize: "12px",
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                  zIndex: 999,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "Poppins, sans-serif",
                  pointerEvents: "none",
                  animation: "toastFadeIn 0.3s ease-out forwards",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-5px",
                    left: "50%",
                    transform: "translateX(-50%) rotate(45deg)",
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#0a1931",
                    borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#006EE6" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {toastMessage}
              </div>
            )}
          </div>

          {/* ── Mobile Hamburger Icon Button ── */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              color: isTransparentNavbar ? "#ffffff" : "#374151",
            }}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Mobile Side Drawer Backdrop Overlay ── */}
      <div
        className={`mobile-backdrop ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(2px)",
          zIndex: 998,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* ── Mobile Off-Canvas Side Drawer ── */}
      <div
        className="mobile-drawer"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "78%",
          maxWidth: "320px",
          backgroundColor: "#ffffff",
          zIndex: 999,
          boxShadow: "4px 0 25px rgba(0, 0, 0, 0.15)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          overflowY: "auto",
        }}
      >
        {/* Drawer Header with Logo & Close Icon */}
        <div
          style={{
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #f1f5f9",
            backgroundColor: "#ffffff",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              navigate("/");
            }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="/logo1.png"
              alt="Azhizen Logo"
              style={{ height: "38px", width: "auto", objectFit: "contain" }}
            />
          </a>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              color: "#374151",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Drawer Links Body */}
        <div
          style={{
            flex: 1,
            padding: "4px 20px 20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {NAV_LINKS.map(({ name, path, scrollTo }) => {
            const active =
              (!scrollTo && currentPath === path) ||
              (name === "Service" && ["/marketing-services", "/training-support", "/services"].includes(currentPath));

            if (name === "Service") {
              return (
                <div key={name} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "16px 0",
                      fontSize: "16px",
                      fontWeight: active ? "600" : "500",
                      color: active ? "#1877F2" : "#374151",
                      fontFamily: "inherit",
                    }}
                  >
                    <span>{name}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                        color: "#6b7280",
                      }}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  {mobileServicesOpen && (
                    <div
                      style={{
                        paddingLeft: "12px",
                        paddingBottom: "12px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                      }}
                    >
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          navigate("/services");
                        }}
                        style={{
                          display: "block",
                          width: "100%",
                          textAlign: "left",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "10px 12px",
                          fontSize: "14.5px",
                          fontWeight: currentPath === "/services" ? "600" : "400",
                          color: currentPath === "/services" ? "#1877F2" : "#4B5563",
                          fontFamily: "inherit",
                          borderRadius: "8px",
                        }}
                      >
                        Tech Services
                      </button>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          navigate("/marketing-services");
                        }}
                        style={{
                          display: "block",
                          width: "100%",
                          textAlign: "left",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "10px 12px",
                          fontSize: "14.5px",
                          fontWeight: currentPath === "/marketing-services" ? "600" : "400",
                          color: currentPath === "/marketing-services" ? "#1877F2" : "#4B5563",
                          fontFamily: "inherit",
                          borderRadius: "8px",
                        }}
                      >
                        Marketing Services
                      </button>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          navigate("/training-support");
                        }}
                        style={{
                          display: "block",
                          width: "100%",
                          textAlign: "left",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "10px 12px",
                          fontSize: "14.5px",
                          fontWeight: currentPath === "/training-support" ? "600" : "400",
                          color: currentPath === "/training-support" ? "#1877F2" : "#4B5563",
                          fontFamily: "inherit",
                          borderRadius: "8px",
                        }}
                      >
                        Training Support
                      </button>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={name}
                onClick={() => {
                  setIsOpen(false);
                  handleNavClick({ path, scrollTo });
                }}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "16px 0",
                  fontSize: "16px",
                  fontWeight: active ? "600" : "500",
                  color: active ? "#1877F2" : "#374151",
                  borderBottom: "1px solid #f1f5f9",
                  fontFamily: "inherit",
                }}
              >
                {name}
              </button>
            );
          })}
        </div>

        {/* Drawer Footer with Action Button & Copyright */}
        <div
          style={{
            padding: "16px 20px 24px",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <button
            onClick={() => {
              setIsOpen(false);
              handleSwitchToTech();
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              width: "100%",
              background: "#1877F2",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: "600",
              padding: "12px 20px",
              borderRadius: "14px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(24, 119, 242, 0.25)",
              letterSpacing: "0.01em",
              fontFamily: "inherit",
              transition: "all 0.2s ease",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0 }}
            >
              <path d="M4 8h16M20 8l-4-4M20 8l-4 4" />
              <path d="M20 16H4M4 16l4 4M4 16l4-4" />
            </svg>
            <span>Switch to Diary Tech</span>
          </button>

          <div
            style={{
              fontSize: "11px",
              fontWeight: "600",
              color: "#9ca3af",
              letterSpacing: "0.05em",
              textAlign: "center",
            }}
          >
            © AZHIZEN
          </div>
        </div>
      </div>

      {/* ── Mobile Global Toast ── */}
      {showToast && (toastAnchor === "mobile-course" || toastAnchor === "switch-mobile" || toastAnchor === "mobile-services") && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(10, 25, 49, 0.95)",
            backdropFilter: "blur(8px)",
            color: "#ffffff",
            padding: "12px 24px",
            borderRadius: "50px",
            boxShadow: "0 10px 30px rgba(24, 119, 242, 0.25)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            fontSize: "14px",
            fontWeight: "600",
            letterSpacing: "0.02em",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            animation: "toastFadeIn 0.3s ease-out forwards",
            fontFamily: "Poppins, sans-serif",
            pointerEvents: "none",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1877F2"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0 }}
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {toastMessage}
        </div>
      )}

      {/* ── Keyframes animations ── */}
      <style>{`
        @keyframes toastFadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, 15px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        @keyframes popoverFadeIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes popoverBelowFadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, 20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 12px);
          }
        }
      `}</style>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav  { display: none !important; }
          .switch-btn   { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
      {isAnimating && <TechTransition mode={transitionMode} onComplete={onAnimationComplete} />}
    </>
  );
};

export default Navbar;