"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile drawer whenever the viewport grows past the breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 54rem)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-card">
      <div className="container-page flex items-center justify-between py-[2rem] lg:pt-[4.56rem] lg:pb-[2.56rem]">
        {/* Logo */}
        <a href="#top" aria-label="LaslesVPN home" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.svg"
            alt="LaslesVPN"
            width={149}
            height={37}
            className="h-auto w-[12rem] sm:w-[14rem] lg:w-[14.9rem]"
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:block" aria-label="Main">
          <ul className="flex items-center gap-[2.4rem] lg:gap-[4rem]">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-[1.5rem] text-muted transition-colors hover:text-primary lg:text-[1.6rem] ${
                    i === 0 ? "text-primary" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth buttons */}
        <div className="hidden items-center gap-[2rem] font-medium md:flex lg:gap-[3rem]">
          <a
            href="#"
            className="text-[1.5rem] text-ink transition-colors hover:text-primary lg:text-[1.6rem]"
          >
            Sign In
          </a>
          <a
            href="#"
            className="rounded-pill border-2 border-primary px-[2.4rem] py-[0.8rem] text-[1.5rem] text-primary transition-colors hover:bg-primary hover:text-white lg:px-[4.38rem] lg:py-[1.13rem] lg:text-[1.6rem]"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex flex-col gap-[0.5rem] md:hidden"
        >
          <span
            className={`block h-[0.3rem] w-[2.8rem] bg-ink transition-transform duration-300 ${
              open ? "translate-y-[0.8rem] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[0.3rem] w-[2.8rem] bg-ink transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[0.3rem] w-[2.8rem] bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[0.8rem] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`overflow-hidden bg-white/95 backdrop-blur-[1rem] transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-[60rem] border-t border-line-soft" : "max-h-0"
        }`}
      >
        <nav className="container-page py-[3rem]" aria-label="Mobile">
          <ul className="flex flex-col gap-[2.4rem]">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-[1.8rem] ${
                    i === 0 ? "text-primary" : "text-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-[3rem] flex items-center gap-[2rem]">
            <a href="#" className="text-[1.6rem] text-ink">
              Sign In
            </a>
            <a
              href="#"
              className="rounded-pill border-2 border-primary px-[2.8rem] py-[1rem] text-[1.6rem] text-primary"
            >
              Sign Up
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
