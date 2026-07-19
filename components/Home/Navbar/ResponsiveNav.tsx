"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  // Controls mobile navigation visibility
  const [showNav, setShowNav] = useState(false);

  // Open mobile navigation menu
  const openNavHandler = () => setShowNav(true);

  // Close mobile navigation menu
  const closeNavHandler = () => setShowNav(false);

  return (
    <div>
      {/* Desktop Navigation */}
      <Nav openNav={openNavHandler} />

      {/* Mobile Navigation */}
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsiveNav;
