"use client";
import React, { useState } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const FOCUS = [
  {
    id: "01",
    heading: "Full-Stack Architecture",
    copy: "Next.js App Router, Express, and Prisma ORM. Monorepos built for high content throughput and zero downtime.",
  },
  {
    id: "02",
    heading: "AI & Vector Search",
    copy: "Production RAG pipelines. FastAPI, ChromaDB, and FastEmbed. Modular document retrieval with sub-second latency.",
  },
  {
    id: "03",
    heading: "Data Synchronization",
    copy: "High-concurrency platforms using PostgreSQL and IndexedDB for seamless online/offline state management.",
  },
];

const PROJECTS = [
  {
    name: "TCB — The Corporate Blog",
    type: "Full-stack CMS",
    stack: "Next.js 16, React 19, Cloudinary",
    year: "2024",
  },
  {
    name: "RAG Doc Intelligence",
    type: "Document retrieval engine",
    stack: "FastAPI, LangChain, Vector Databases",
    year: "2024",
  },
  {
    name: "Logic Looper",
    type: "Daily interactive platform",
    stack: "Node.js, PostgreSQL, React",
    year: "2025",
  },
];

const STACK = [
  "TypeScript",
  "Python",
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "ChromaDB",
  "Prisma",
  "Vercel",
  "AWS",
];

const TERMINAL = [
  { text: "$ vercel deploy --prod", color: "#F5F5F5" },
  { text: "Vercel CLI 37.4.2", color: "#A3A3A3" },
  { text: "> Inspecting source code...", color: "#A3A3A3" },
  { text: "> Auto-detected Next.js project", color: "#A3A3A3" },
  { text: "> Building... (44s)", color: "#A3A3A3" },
  { text: "> Build completed", color: "#4ade80" },
  { text: "> Assigning domain", color: "#A3A3A3" },
  { text: "> https://devgroup.company  [PROD]", color: "#CCFF00" },
  { text: "> Ready. Deployed in 1m 12s.", color: "#4ade80" },
];

// ─────────────────────────────────────────────────────────────────────────────
// HEADER
// ─────────────────────────────────────────────────────────────────────────────

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        background: "#0A0A0A",
        borderBottom: "1px solid #262626",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "3.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand */}
        <span
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: "1rem",
            color: "#F5F5F5",
            letterSpacing: "-0.01em",
          }}
        >
          DEVGROUP.
        </span>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
          {["Work", "Infrastructure", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: "0.8125rem",
                color: "#A3A3A3",
                textDecoration: "none",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A3A3A3")}
            >
              {item}
            </Link>
          ))}
          <Link href="#contact" className="btn-accent">
            Book Audit
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "1rem", color: "#A3A3A3", background: "none", border: "none" }}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "[×]" : "[≡]"}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div
          style={{
            background: "#0A0A0A",
            borderTop: "1px solid #262626",
            padding: "1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
          className="md:hidden"
        >
          {["Work", "Infrastructure", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ fontSize: "0.875rem", color: "#A3A3A3", textDecoration: "none" }}
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link href="#contact" className="btn-accent" style={{ textAlign: "center", justifyContent: "center" }} onClick={() => setOpen(false)}>
            Book Audit
          </Link>
        </div>
      )}
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      style={{ background: "#0A0A0A", borderBottom: "1px solid #262626" }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "5rem 1.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="grid-cols-1 lg:grid-cols-2"
      >
        {/* Left */}
        <div>
          <p
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.7rem",
              color: "#A3A3A3",
              letterSpacing: "0.12em",
              marginBottom: "1.25rem",
              textTransform: "uppercase",
            }}
          >
            // Software Consultancy
          </p>
          <h1
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
              fontWeight: 700,
              color: "#F5F5F5",
              letterSpacing: "-0.04em",
              lineHeight: 1.02,
              marginBottom: "1.5rem",
            }}
          >
            Hard engineering for complex problems.
          </h1>
          <p
            style={{
              color: "#A3A3A3",
              fontSize: "1.0625rem",
              lineHeight: 1.65,
              maxWidth: "34rem",
              marginBottom: "2.5rem",
            }}
          >
            We design, build, and ship production-ready web platforms, RAG pipelines, and data-intensive applications.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="#contact" className="btn-accent">
              Start a project →
            </Link>
            <Link href="#work" className="btn-outline">
              View work
            </Link>
          </div>
        </div>

        {/* Right: Terminal */}
        <div
          style={{
            background: "#111111",
            border: "1px solid #262626",
            fontFamily: '"JetBrains Mono", monospace',
          }}
        >
          {/* Chrome bar */}
          <div
            style={{
              borderBottom: "1px solid #262626",
              padding: "0.625rem 1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#262626" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#262626" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#262626" }} />
            <span style={{ marginLeft: "0.75rem", fontSize: "0.6875rem", color: "#525252" }}>
              devgroup ~ zsh
            </span>
          </div>
          {/* Body */}
          <div style={{ padding: "1.5rem", fontSize: "0.75rem", lineHeight: 2 }}>
            {TERMINAL.map((line, i) => (
              <div
                key={i}
                className="terminal-line"
                style={{
                  color: line.color,
                  animationDelay: `${i * 0.18}s`,
                }}
              >
                {line.text}
              </div>
            ))}
            <span style={{ color: "#F5F5F5" }} className="animate-pulse">
              ▌
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ENGINEERING FOCUS
// ─────────────────────────────────────────────────────────────────────────────

function EngineeringFocus() {
  return (
    <section
      id="infrastructure"
      style={{ background: "#0A0A0A", borderBottom: "1px solid #262626" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        {/* Section label */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "1.5rem",
            marginBottom: "3rem",
            borderBottom: "1px solid #262626",
            paddingBottom: "1.25rem",
          }}
        >
          <span
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.6875rem",
              color: "#525252",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Engineering Focus
          </span>
        </div>

        {/* 3-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            border: "1px solid #262626",
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {FOCUS.map((item, i) => (
            <div
              key={item.id}
              style={{
                padding: "2rem",
                borderRight: i < FOCUS.length - 1 ? "1px solid #262626" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "0.6875rem",
                  color: "#CCFF00",
                  marginBottom: "1.25rem",
                  letterSpacing: "0.06em",
                }}
              >
                {item.id}
              </p>
              <h3
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "#F5F5F5",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.875rem",
                  lineHeight: 1.25,
                }}
              >
                {item.heading}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#A3A3A3",
                  lineHeight: 1.7,
                }}
              >
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SHIPPED PROJECTS
// ─────────────────────────────────────────────────────────────────────────────

function ShippedProjects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="work"
      style={{ background: "#0A0A0A", borderBottom: "1px solid #262626" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "1.5rem",
            marginBottom: "3rem",
            borderBottom: "1px solid #262626",
            paddingBottom: "1.25rem",
          }}
        >
          <span
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.6875rem",
              color: "#525252",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Shipped Projects
          </span>
          <span
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.6875rem",
              color: "#CCFF00",
              letterSpacing: "0.06em",
            }}
          >
            {PROJECTS.length} total
          </span>
        </div>

        {/* Project list */}
        <div>
          {PROJECTS.map((proj, i) => (
            <div
              key={proj.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderBottom: "1px solid #262626",
                padding: "1.5rem 0",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "center",
                gap: "1rem",
                transition: "background 0.15s ease",
                background: hovered === i ? "#111111" : "transparent",
                cursor: "default",
                paddingLeft: hovered === i ? "0.75rem" : 0,
                paddingRight: hovered === i ? "0.75rem" : 0,
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    color: hovered === i ? "#F5F5F5" : "#F5F5F5",
                    letterSpacing: "-0.02em",
                    marginBottom: "0.25rem",
                  }}
                >
                  {proj.name}
                  {hovered === i && (
                    <span style={{ color: "#CCFF00", marginLeft: "0.5rem", fontSize: "0.875rem" }}>→</span>
                  )}
                </h3>
                <p style={{ fontSize: "0.8125rem", color: "#A3A3A3" }}>
                  {proj.type} &nbsp;·&nbsp;{" "}
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.75rem" }}>
                    {proj.stack}
                  </span>
                </p>
              </div>
              <span
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "0.75rem",
                  color: "#525252",
                  whiteSpace: "nowrap",
                }}
              >
                {proj.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TECH STACK
// ─────────────────────────────────────────────────────────────────────────────

function TechStack() {
  const doubled = [...STACK, ...STACK];

  return (
    <section
      style={{
        background: "#111111",
        borderBottom: "1px solid #262626",
        borderTop: "1px solid #262626",
        padding: "3rem 0",
        overflow: "hidden",
      }}
    >
      {/* Label */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", marginBottom: "2rem" }}>
        <span
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.6875rem",
            color: "#525252",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          CURRENT_STACK
        </span>
      </div>

      {/* Ticker */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div className="ticker-track" style={{ gap: "0" }}>
          {doubled.map((tech, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "0.8125rem",
                  color: "#A3A3A3",
                  padding: "0 2.5rem",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.02em",
                }}
              >
                {tech}
              </span>
              <span style={{ color: "#262626", fontSize: "0.75rem" }}>|</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────────────────────

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  background: "#0A0A0A",
  border: "1px solid #262626",
  color: "#F5F5F5",
  fontSize: "0.875rem",
  padding: "0.75rem 1rem",
  outline: "none",
  fontFamily: "Inter, sans-serif",
  transition: "border-color 0.15s ease",
};

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="contact"
      style={{ background: "#0A0A0A", borderBottom: "1px solid #262626" }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "5rem 1.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "start",
        }}
        className="grid-cols-1 lg:grid-cols-2"
      >
        {/* Left copy */}
        <div>
          <span
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.6875rem",
              color: "#525252",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1.25rem",
            }}
          >
            Direct Contact
          </span>
          <h2
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
              fontWeight: 700,
              color: "#F5F5F5",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: "1.5rem",
            }}
          >
            Ship your roadmap.
          </h2>
          <p style={{ fontSize: "0.9375rem", color: "#A3A3A3", lineHeight: 1.7, maxWidth: "26rem" }}>
            Send us your project brief. We review every submission and respond within 24 hours.
          </p>
          <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <p
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "0.75rem",
                color: "#525252",
              }}
            >
              // Alternatively
            </p>
            <a
              href="mailto:devashish@devgroup.company"
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "0.8125rem",
                color: "#A3A3A3",
                textDecoration: "none",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#CCFF00")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A3A3A3")}
            >
              devashish@devgroup.company
            </a>
          </div>
        </div>

        {/* Right form */}
        {sent ? (
          <div
            style={{
              border: "1px solid #262626",
              padding: "2.5rem",
              background: "#111111",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <span style={{ color: "#CCFF00", fontSize: "1.25rem" }}>✓</span>
            <div>
              <p style={{ color: "#F5F5F5", fontWeight: 600, fontSize: "0.9375rem" }}>Brief received.</p>
              <p style={{ color: "#A3A3A3", fontSize: "0.8125rem", marginTop: "0.25rem" }}>
                We will follow up within 24 hours.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label
                htmlFor="name"
                style={{ display: "block", fontSize: "0.75rem", color: "#525252", marginBottom: "0.4rem", fontFamily: '"JetBrains Mono", monospace', letterSpacing: "0.06em" }}
              >
                NAME
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Doe"
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#525252")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#262626")}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                style={{ display: "block", fontSize: "0.75rem", color: "#525252", marginBottom: "0.4rem", fontFamily: '"JetBrains Mono", monospace', letterSpacing: "0.06em" }}
              >
                WORK EMAIL
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#525252")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#262626")}
              />
            </div>

            <div>
              <label
                htmlFor="scope"
                style={{ display: "block", fontSize: "0.75rem", color: "#525252", marginBottom: "0.4rem", fontFamily: '"JetBrains Mono", monospace', letterSpacing: "0.06em" }}
              >
                SCOPE OF WORK
              </label>
              <textarea
                id="scope"
                name="scope"
                rows={5}
                required
                placeholder="Describe the project, stack you have today, and timeline."
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#525252")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#262626")}
              />
            </div>

            <button type="submit" className="btn-accent" style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}>
              Send Brief →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ background: "#0A0A0A" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "1.75rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <span
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.75rem",
            color: "#525252",
          }}
        >
          © 2026 DEVGROUP.
        </span>

        <a
          href="mailto:devashish@devgroup.company"
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.75rem",
            color: "#525252",
            textDecoration: "none",
            transition: "color 0.15s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#A3A3A3")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#525252")}
        >
          devashish@devgroup.company
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#4ade80",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.6875rem",
              color: "#525252",
            }}
          >
            Systems Operational
          </span>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <Header />
      <main>
        <Hero />
        <EngineeringFocus />
        <ShippedProjects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
