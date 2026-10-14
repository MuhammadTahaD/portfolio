"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/writing/", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Taha Malik home">TAHA<span>·</span></Link>
        <nav className={`desktop-nav${open ? " is-open" : ""}`} aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        </nav>
        <a className="header-contact" href="mailto:muhammad.taha.dandhla@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span><span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav${open ? " is-open" : ""}`} aria-label="Mobile navigation" hidden={!open}>
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<span aria-hidden="true">↗</span></Link>)}
      </nav>
    </header>
  );
}
