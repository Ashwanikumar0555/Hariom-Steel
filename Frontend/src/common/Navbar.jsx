import React, { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ChevronRight, Quote, Phone, Mail, User, LogOut, Settings, Building2 } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { 
  SignedIn, 
  SignedOut, 
  SignInButton, 
  SignUpButton, 
  UserButton, 
  useUser,
  RedirectToSignIn 
} from "@clerk/clerk-react";
import Logo from "../common/Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeAddress, setActiveAddress] = useState(0);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('signin'); // 'signin' or 'signup'
  const menuRef = useRef(null);
  const location = useLocation();
  const { user, isLoaded } = useUser();
  
  // Professional heights for steel business
  const navHeight = 50;
  const topbarHeight = 90;
  
  // Enhanced scroll handling with smooth behavior
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollThreshold = 120;
    
    // Hide navbar on scroll down, show on scroll up
    if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
    setIsScrolled(currentScrollY > 20);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Auto-open auth modal on first visit (if not signed in)
  useEffect(() => {
    if (isLoaded && !user) {
      const hasVisited = localStorage.getItem('hasVisitedBefore');
      if (!hasVisited) {
        setShowAuthModal(true);
        setAuthMode('signin');
        localStorage.setItem('hasVisitedBefore', 'true');
      }
    }
  }, [isLoaded, user]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('button')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setShowAuthModal(false);
      }
    };
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen || showAuthModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, showAuthModal]);

  const navLinks = [
    { name: "Home", path: "/", id: "home" },
    { name: "About", path: "/about", id: "about" },
    { name: "Products", path: "/products", id: "products" },
    { name: "Projects", path: "/projects", id: "projects" },
    { name: "Why Choose Us", path: "/why-choose-us", id: "why-choose-us" },
    { name: "Contact", path: "/contact", id: "contact" },
  ];

  const addresses = [
    "D-1/115 Phase-2, Mayapuri Industrial Area, New Delhi-110064",
    "KHASRA NO. - 634, Hiran Kudna Village, Mundka, New Delhi - 110041",
    "E-126, Bulandshahr Road, Loha Mandi, Industrial Area, Ghaziabad, UP-201009"
  ];

  // Enhanced smooth scroll navigation
  const handleNavClick = (to, onClick) => {
    if (onClick) onClick();
    
    // Close mobile menu
    setIsMenuOpen(false);
    
    // Smooth scroll to top with enhanced easing
    setTimeout(() => {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth'
      });
    }, 50);
  };

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <div>
      {/* Main Professional Navbar */}
      <nav
        className={`fixed left-0 right-0 z-40 w-full transition-all duration-500 ease-in-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } ${
          isScrolled 
            ? "bg-white/98 backdrop-blur-xl shadow-xl border-b border-gray-100" 
            : "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-50"
        }`}
        style={{ 
          top: isScrolled ? 0 : topbarHeight, 
          height: `${navHeight}px` 
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Enhanced Logo Section */}
            <div className="flex items-center flex-shrink-0">
              <Link 
                to="/" 
                className="hover:opacity-90 transition-all duration-300 hover:scale-105"
                onClick={() => handleNavClick("/")}
              >
                <Logo variant="dark" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.path}
                  className={({ isActive }) => `
                    relative px-5 py-3 text-base font-medium rounded-xl transition-all duration-300
                    hover:scale-105 hover:shadow-lg
                    ${isActive
                      ? "text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 font-semibold shadow-md border border-blue-200"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-blue-100/50"
                    }
                  `}
                  onClick={() => handleNavClick(link.path)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Large screens navigation (lg to xl) */}
            <div className="hidden lg:flex xl:hidden items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.path}
                  className={({ isActive }) => `
                    relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300
                    ${isActive
                      ? "text-blue-700 bg-blue-50 font-semibold"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                    }
                  `}
                  onClick={() => handleNavClick(link.path)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Enhanced Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Authentication Section */}
              {/* <SignedOut>
                <div className="flex items-center space-x-2">
                  
                  <SignUpButton mode="modal">
                    <button className="group flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                      <User className="w-4 h-4" />
                      <span>Sign Up</span>
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut> */}

              <SignedIn>
                <div className="flex items-center space-x-3">
                  {/* Welcome Message */}
                  <div className="hidden xl:block text-sm text-gray-600">
                    Welcome, <span className="font-semibold text-gray-800">{user?.firstName || 'User'}</span>
                  </div>
                  
                  {/* Custom User Button with Enhanced Styling */}
                  <div className="relative">
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox: "w-10 h-10 rounded-xl shadow-md hover:shadow-lg transition-all duration-300",
                          userButtonPopoverCard: "shadow-2xl border border-gray-100 rounded-xl",
                          userButtonPopoverHeader: "bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200",
                        }
                      }}
                      afterSignOutUrl="/"
                    />
                  </div>
                </div>
              </SignedIn>

              {/* Enhanced Quote Button */}
              <Link
                to="/quote"
                onClick={() => handleNavClick("/quote")}
                className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Quote className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>Get Quote</span>
              </Link>
            </div>

            {/* Enhanced Mobile Controls */}
            <div className="lg:hidden flex items-center space-x-3">
              {/* Mobile Authentication */}
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-blue-600 transition-all duration-300"
                    aria-label="Sign In">
                    <User className="h-5 w-5" />
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8 rounded-lg shadow-md",
                    }
                  }}
                  afterSignOutUrl="/"
                />
              </SignedIn>

              {/* Enhanced Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                aria-label="Toggle Menu"
              >
                <div className="relative w-6 h-6">
                  <Menu 
                    className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                    }`} 
                  />
                  <X 
                    className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${
                      isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
                    }`} 
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div
            ref={menuRef}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto"
            style={{ 
              marginTop: `${isScrolled ? navHeight : topbarHeight + navHeight}px`, 
              maxHeight: `calc(100vh - ${isScrolled ? navHeight : topbarHeight + navHeight}px)` 
            }}
          >
            <div className="px-6 py-6">
              {/* Mobile Header with Auth Status */}
              <div className="relative mb-8 text-center border-b border-gray-200 pb-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-0 right-0 p-3 rounded-full text-gray-600 
                             hover:bg-gray-100 active:bg-gray-200 transition-colors
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>

                <h2 className="font-bold text-lg sm:text-xl text-gray-800 mb-1 pr-8 sm:pr-0">
                  Hariom Steel Infra Pvt Ltd
                </h2>
                <p className="text-blue-600 text-xs sm:text-sm font-medium">
                  Auth. Distributor: JSW Neo Steel (UP)
                </p>
                
                {/* Mobile User Status */}
                <SignedIn>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-800 text-sm font-medium">
                      Welcome back, {user?.firstName || 'User'}!
                    </p>
                    <p className="text-green-600 text-xs">You're signed in</p>
                  </div>
                </SignedIn>

                <SignedOut>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-blue-800 text-sm font-medium mb-2">Join our community</p>
                    <div className="flex space-x-2">
                      <SignInButton mode="modal">
                        <button className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors">
                          Sign In
                        </button>
                      </SignInButton>
                      <SignUpButton mode="modal">
                        <button className="flex-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-medium rounded-lg transition-colors">
                          Sign Up
                        </button>
                      </SignUpButton>
                    </div>
                  </div>
                </SignedOut>
              </div>

              {/* Enhanced Navigation Links */}
              <div className="space-y-2 mb-8">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.id}
                      to={link.path}
                      onClick={() => handleNavClick(link.path)}
                      className={`flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 font-semibold shadow-sm border-l-4 border-blue-500"
                          : "text-gray-800 hover:text-blue-700 hover:bg-gray-50 hover:pl-6"
                      }`}
                    >
                      <span className="text-lg">{link.name}</span>
                      <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${
                        isActive ? "text-blue-600 rotate-90" : "text-gray-400"
                      }`} />
                    </Link>
                  );
                })}
              </div>

              {/* Enhanced Mobile Quote Button */}
              <div className="mb-8">
                <Link
                  to="/quote"
                  onClick={() => handleNavClick("/quote")}
                  className="flex items-center justify-center space-x-3 w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                >
                  <Quote className="h-5 w-5" />
                  <span>Get a Quote</span>
                </Link>
              </div>

              {/* Enhanced Quick Contact Section */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Our Locations</h3>
                
                {/* Address Carousel */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-medium text-gray-700">
                      Address {activeAddress + 1} of {addresses.length}
                    </h4>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setActiveAddress((prev) => (prev - 1 + addresses.length) % addresses.length)}
                        className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                        aria-label="Previous address"
                      >
                        <ChevronRight className="h-4 w-4 rotate-180" />
                      </button>
                      <button 
                        onClick={() => setActiveAddress((prev) => (prev + 1) % addresses.length)}
                        className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                        aria-label="Next address"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-700 leading-relaxed">{addresses[activeAddress]}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href="tel:+919313236954"
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-gray-800 text-sm">+91 9313236954</div>
                      <div className="text-xs text-gray-500">Call us anytime</div>
                    </div>
                  </a>

                  <a
                    href="mailto:hariomsteelinfra@gmail.com"
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-gray-800 text-sm truncate">hariomsteelinfra@gmail.com</div>
                      <div className="text-xs text-gray-500">Email us</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 pt-6 mt-8 text-center">
                <p className="text-gray-600 mb-2 text-sm">Serving across India</p>
                <p className="text-xs text-gray-500">
                  © {new Date().getFullYear()} Hariom Steel Infra Pvt Ltd. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { Menu, X, ChevronRight, Quote, Phone, Mail, Search, MapPin } from "lucide-react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import Logo from "../common/Logo";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeAddress, setActiveAddress] = useState(0);
//   const menuRef = useRef(null);
//   const searchInputRef = useRef(null);
//   const location = useLocation();
  
//   // Professional heights for steel business
//   const navHeight = 50; // Increased for better presence
//   const topbarHeight = 90; // Reduced for better proportion
  
//   // Enhanced scroll handling with smooth behavior
//   const handleScroll = useCallback(() => {
//     const currentScrollY = window.scrollY;
//     const scrollThreshold = 120;
    
//     // Hide navbar on scroll down, show on scroll up
//     if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
//       setIsVisible(false);
//     } else {
//       setIsVisible(true);
//     }
    
//     setLastScrollY(currentScrollY);
//     setIsScrolled(currentScrollY > 20);
//   }, [lastScrollY]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   // Focus search input when opened
//   useEffect(() => {
//     if (isSearchOpen && searchInputRef.current) {
//       setTimeout(() => {
//         searchInputRef.current.focus();
//       }, 100);
//     }
//   }, [isSearchOpen]);

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('button')) {
//         setIsMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Handle escape key
//   useEffect(() => {
//     const handleEscKey = (event) => {
//       if (event.key === 'Escape') {
//         setIsMenuOpen(false);
//         setIsSearchOpen(false);
//       }
//     };
//     document.addEventListener('keydown', handleEscKey);
//     return () => document.removeEventListener('keydown', handleEscKey);
//   }, []);

//   // Prevent body scroll when menu is open
//   useEffect(() => {
//     if (isMenuOpen || isSearchOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isMenuOpen, isSearchOpen]);

//   // Enhanced search functionality
//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       console.log('Searching for:', searchQuery);
//       setIsSearchOpen(false);
//       setSearchQuery("");
//       // Add your search logic here
//     }
//   };

//   const navLinks = [
//     { name: "Home", path: "/", id: "home" },
//     { name: "About", path: "/about", id: "about" },
//     { name: "Products", path: "/products", id: "products" },
//     { name: "Projects", path: "/projects", id: "projects" },
//     { name: "Why Choose Us", path: "/why-choose-us", id: "why-choose-us" },
//     { name: "Contact", path: "/contact", id: "contact" },
//   ];

//   const popularSearches = [
//     "TMT Rebars", "Steel Angles", "MS Plates", "GI Sheets", 
//     "Steel Channels", "Price List", "Square Bars", "Pipes"
//   ];

//   const addresses = [
//     "D-1/115 Phase-2, Mayapuri Industrial Area, New Delhi-110064",
//     "KHASRA NO. - 634, Hiran Kudna Village, Mundka, New Delhi - 110041",
//     "E-126, Bulandshahr Road, Loha Mandi, Industrial Area, Ghaziabad, UP-201009"
//   ];

//   // Enhanced smooth scroll navigation
//   const handleNavClick = (to, onClick) => {
//     if (onClick) onClick();
    
//     // Close mobile menu
//     setIsMenuOpen(false);
    
//     // Smooth scroll to top with enhanced easing
//     setTimeout(() => {
//       window.scrollTo({ 
//         top: 0, 
//         behavior: 'smooth'
//       });
//     }, 50);
//   };

//   return (
//     <div>
//       {/* Main Professional Navbar */}
//       <nav
//         className={`fixed left-0 right-0 z-40 w-full transition-all duration-500 ease-in-out ${
//           isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
//         } ${
//           isScrolled 
//             ? "bg-white/98 backdrop-blur-xl shadow-xl border-b border-gray-100" 
//             : "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-50"
//         }`}
//         style={{ 
//           top: isScrolled ? 0 : topbarHeight, 
//           height: `${navHeight}px` 
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
//           <div className="flex justify-between items-center h-full">
//             {/* Enhanced Logo Section */}
//             <div className="flex items-center flex-shrink-0">
//               <Link 
//                 to="/" 
//                 className="hover:opacity-90 transition-all duration-300 hover:scale-105"
//                 onClick={() => handleNavClick("/")}
//               >
//                 <Logo variant="dark" />
//               </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden xl:flex items-center space-x-1">
//               {navLinks.map((link) => (
//                 <NavLink
//                   key={link.id}
//                   to={link.path}
//                   className={({ isActive }) => `
//                     relative px-5 py-3 text-base font-medium rounded-xl transition-all duration-300
//                     hover:scale-105 hover:shadow-lg
//                     ${isActive
//                       ? "text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 font-semibold shadow-md border border-blue-200"
//                       : "text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-blue-100/50"
//                     }
//                   `}
//                   onClick={() => handleNavClick(link.path)}
//                 >
//                   {link.name}
//                 </NavLink>
//               ))}
//             </div>

//             {/* Large screens navigation (lg to xl) */}
//             <div className="hidden lg:flex xl:hidden items-center space-x-1">
//               {navLinks.map((link) => (
//                 <NavLink
//                   key={link.id}
//                   to={link.path}
//                   className={({ isActive }) => `
//                     relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300
//                     ${isActive
//                       ? "text-blue-700 bg-blue-50 font-semibold"
//                       : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
//                     }
//                   `}
//                   onClick={() => handleNavClick(link.path)}
//                 >
//                   {link.name}
//                 </NavLink>
//               ))}
//             </div>

//             {/* Enhanced Desktop Action Buttons */}
//             <div className="hidden lg:flex items-center space-x-4">
//               {/* Professional Search Button */}
//               <button
//                 onClick={() => setIsSearchOpen(true)}
//                 className="group p-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-md"
//                 aria-label="Search products"
//               >
//                 <Search className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
//               </button>

//               {/* Enhanced Quote Button */}
//               <Link
//                 to="/quote"
//                 onClick={() => handleNavClick("/quote")}
//                 className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//               >
//                 <Quote className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
//                 <span>Get Quote</span>
//               </Link>
//             </div>

//             {/* Enhanced Mobile Controls */}
//             <div className="lg:hidden flex items-center space-x-3">
//               {/* Mobile Search Button */}
//               <button
//                 onClick={() => setIsSearchOpen(true)}
//                 className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-blue-600 transition-all duration-300"
//                 aria-label="Search"
//               >
//                 <Search className="h-5 w-5" />
//               </button>

//               {/* Enhanced Mobile Menu Toggle */}
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//                 aria-label="Toggle Menu"
//               >
//                 <div className="relative w-6 h-6">
//                   <Menu 
//                     className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${
//                       isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
//                     }`} 
//                   />
//                   <X 
//                     className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${
//                       isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
//                     }`} 
//                   />
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Enhanced Search Overlay */}
//       {isSearchOpen && (
//         <div
//           className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-start justify-center pt-24 sm:pt-32 px-4 transition-all duration-300"
//           onClick={() => setIsSearchOpen(false)}
//         >
//           <div
//             className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100 opacity-100"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Search Header */}
//             <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 border-b border-blue-200">
//               <h2 className="text-lg font-semibold text-gray-800 mb-1">Search Steel Products</h2>
//               <p className="text-sm text-gray-600">Find the best quality steel products for your needs</p>
//             </div>

//             {/* Search Input */}
//             <form onSubmit={handleSearch} className="p-6 flex items-center gap-4 border-b border-gray-100">
//               <Search className="w-6 h-6 text-gray-400 flex-shrink-0" />
//               <input
//                 ref={searchInputRef}
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search for TMT Rebars, Angles, MS Plates, Pipes..."
//                 className="flex-1 border-none outline-none text-lg px-3 py-2 bg-gray-50 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all duration-300"
//               />
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
//               >
//                 Search
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setIsSearchOpen(false)}
//                 className="p-2 rounded-full hover:bg-gray-100 flex-shrink-0 transition-colors duration-200"
//               >
//                 <X className="w-5 h-5 text-gray-500" />
//               </button>
//             </form>

//             {/* Popular Searches */}
//             <div className="p-6">
//               <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Popular Products</h3>
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
//                 {popularSearches.map((term) => (
//                   <button
//                     key={term}
//                     onClick={() => {
//                       setSearchQuery(term);
//                       handleSearch({ preventDefault: () => {} });
//                     }}
//                     className="px-4 py-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-700 rounded-lg text-sm text-gray-700 transition-all duration-200 hover:scale-105 text-left"
//                   >
//                     {term}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Enhanced Mobile Navigation Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
//           <div
//             ref={menuRef}
//             className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto"
//             style={{ 
//               marginTop: `${isScrolled ? navHeight : topbarHeight + navHeight}px`, 
//               maxHeight: `calc(100vh - ${isScrolled ? navHeight : topbarHeight + navHeight}px)` 
//             }}
//           >
//             <div className="px-6 py-6">
//              {/* Mobile Header */}
// <div className="relative mb-8 text-center border-b border-gray-200 pb-6">
//   <button
//     onClick={() => setIsMenuOpen(false)}
//     className="absolute top-0 right-0 p-3 rounded-full text-gray-600 
//                hover:bg-gray-100 active:bg-gray-200 transition-colors
//                focus:outline-none focus:ring-2 focus:ring-blue-500"
//     aria-label="Close menu"
//   >
//     <X className="h-5 w-5 sm:h-6 sm:w-6" />
//   </button>

//   <h2 className="font-bold text-lg sm:text-xl text-gray-800 mb-1 pr-8 sm:pr-0">
//     Hariom Steel Infra Pvt Ltd
//   </h2>
//   <p className="text-blue-600 text-xs sm:text-sm font-medium">
//     Auth. Distributor: JSW Neo Steel (UP)
//   </p>
//   <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
//     Premium Steel Solutions
//   </p>
// </div>

//               {/* Enhanced Navigation Links */}
//               <div className="space-y-2 mb-8">
//                 {navLinks.map((link) => {
//                   const isActive = location.pathname === link.path;
//                   return (
//                     <Link
//                       key={link.id}
//                       to={link.path}
//                       onClick={() => handleNavClick(link.path)}
//                       className={`flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-300 ${
//                         isActive
//                           ? "text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 font-semibold shadow-sm border-l-4 border-blue-500"
//                           : "text-gray-800 hover:text-blue-700 hover:bg-gray-50 hover:pl-6"
//                       }`}
//                     >
//                       <span className="text-lg">{link.name}</span>
//                       <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${
//                         isActive ? "text-blue-600 rotate-90" : "text-gray-400"
//                       }`} />
//                     </Link>
//                   );
//                 })}
//               </div>

//               {/* Enhanced Mobile Quote Button */}
//               <div className="mb-8">
//                 <Link
//                   to="/quote"
//                   onClick={() => handleNavClick("/quote")}
//                   className="flex items-center justify-center space-x-3 w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
//                 >
//                   <Quote className="h-5 w-5" />
//                   <span>Get a Quote</span>
//                 </Link>
//               </div>

//               {/* Enhanced Quick Contact Section */}
//               <div className="border-t border-gray-200 pt-8">
//                 <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Our Locations</h3>
                
//                 {/* Address Carousel */}
//                 <div className="mb-6">
//                   <div className="flex items-center justify-between mb-3">
//                     <h4 className="text-sm font-medium text-gray-700">
//                       Address {activeAddress + 1} of {addresses.length}
//                     </h4>
//                     <div className="flex space-x-2">
//                       <button 
//                         onClick={() => setActiveAddress((prev) => (prev - 1 + addresses.length) % addresses.length)}
//                         className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition"
//                         aria-label="Previous address"
//                       >
//                         <ChevronRight className="h-4 w-4 rotate-180" />
//                       </button>
//                       <button 
//                         onClick={() => setActiveAddress((prev) => (prev + 1) % addresses.length)}
//                         className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition"
//                         aria-label="Next address"
//                       >
//                         <ChevronRight className="h-4 w-4" />
//                       </button>
//                     </div>
//                   </div>
//                   <div className="p-4 bg-gray-50 rounded-xl">
//                     <p className="text-sm text-gray-700 leading-relaxed">{addresses[activeAddress]}</p>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <a
//                     href="tel:+919313236954"
//                     className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
//                   >
//                     <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
//                       <Phone className="h-5 w-5 text-blue-600" />
//                     </div>
//                     <div className="min-w-0">
//                       <div className="font-semibold text-gray-800 text-sm">+91 9313236954</div>
//                       <div className="text-xs text-gray-500">Call us anytime</div>
//                     </div>
//                   </a>

//                   <a
//                     href="mailto:hariomsteelinfra@gmail.com"
//                     className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
//                   >
//                     <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
//                       <Mail className="h-5 w-5 text-blue-600" />
//                     </div>
//                     <div className="min-w-0">
//                       <div className="font-semibold text-gray-800 text-sm truncate">hariomsteelinfra@gmail.com</div>
//                       <div className="text-xs text-gray-500">Email us</div>
//                     </div>
//                   </a>
//                 </div>
//               </div>

//               {/* Footer */}
//               <div className="border-t border-gray-200 pt-6 mt-8 text-center">
//                 <p className="text-gray-600 mb-2 text-sm">Serving across India</p>
//                 <p className="text-xs text-gray-500">
//                   © {new Date().getFullYear()} Hariom Steel Infra Pvt Ltd. All rights reserved.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
//////////removed animation ////
// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { Menu, X, ChevronRight, Quote, Phone, Mail, Search, MapPin } from "lucide-react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import Logo from "../common/Logo";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const menuRef = useRef(null);
//   const searchInputRef = useRef(null);
//   const location = useLocation();
  
//   // Professional heights for steel business
//   const navHeight = 50; // Increased for better presence
//   const topbarHeight = 90; // Reduced for better proportion
  
//   // Enhanced scroll handling with smooth behavior
//   const handleScroll = useCallback(() => {
//     const currentScrollY = window.scrollY;
//     const scrollThreshold = 120;
    
//     // Hide navbar on scroll down, show on scroll up
//     if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
//       setIsVisible(false);
//     } else {
//       setIsVisible(true);
//     }
    
//     setLastScrollY(currentScrollY);
//     setIsScrolled(currentScrollY > 20);
//   }, [lastScrollY]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   // Focus search input when opened
//   useEffect(() => {
//     if (isSearchOpen && searchInputRef.current) {
//       setTimeout(() => {
//         searchInputRef.current.focus();
//       }, 100);
//     }
//   }, [isSearchOpen]);

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('button')) {
//         setIsMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Handle escape key
//   useEffect(() => {
//     const handleEscKey = (event) => {
//       if (event.key === 'Escape') {
//         setIsMenuOpen(false);
//         setIsSearchOpen(false);
//       }
//     };
//     document.addEventListener('keydown', handleEscKey);
//     return () => document.removeEventListener('keydown', handleEscKey);
//   }, []);

//   // Prevent body scroll when menu is open
//   useEffect(() => {
//     if (isMenuOpen || isSearchOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isMenuOpen, isSearchOpen]);

//   // Enhanced search functionality
//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       console.log('Searching for:', searchQuery);
//       setIsSearchOpen(false);
//       setSearchQuery("");
//       // Add your search logic here
//     }
//   };

//   const navLinks = [
//     { name: "Home", path: "/", id: "home" },
//     { name: "About", path: "/about", id: "about" },
//     { name: "Products", path: "/products", id: "products" },
//     { name: "Projects", path: "/projects", id: "projects" },
//     { name: "Why Choose Us", path: "/why-choose-us", id: "why-choose-us" },
//     { name: "Contact", path: "/contact", id: "contact" },
//   ];

//   const popularSearches = [
//     "Steel Pipes", "MS Plates", "TMT Bars", "GI Sheets", 
//     "Steel Angles", "Price List", "Structural Steel", "Wire Rods"
//   ];

//   // Enhanced smooth scroll navigation
//   const handleNavClick = (to, onClick) => {
//     if (onClick) onClick();
    
//     // Close mobile menu
//     setIsMenuOpen(false);
    
//     // Smooth scroll to top with enhanced easing
//     setTimeout(() => {
//       window.scrollTo({ 
//         top: 0, 
//         behavior: 'smooth'
//       });
//     }, 50);
//   };

//   return (
//     <div>
//       {/* Main Professional Navbar - FIXED: Removed space by setting top to 0 when scrolled */}
//       <nav
//         className={`fixed left-0 right-0 z-40 w-full transition-all duration-500 ease-in-out ${
//           isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
//         } ${
//           isScrolled 
//             ? "bg-white/98 backdrop-blur-xl shadow-xl border-b border-gray-100" 
//             : "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-50"
//         }`}
//         style={{ 
//           top: isScrolled ? 0 : topbarHeight, 
//           height: `${navHeight}px` 
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
//           <div className="flex justify-between items-center h-full">
//             {/* Enhanced Logo Section */}
//             <div className="flex items-center flex-shrink-0">
//               <Link 
//                 to="/" 
//                 className="hover:opacity-90 transition-all duration-300 hover:scale-105"
//                 onClick={() => handleNavClick("/")}
//               >
//                 <Logo variant="dark" />
//               </Link>
//             </div>

//             {/* Desktop Navigation - Enhanced */}
//             <div className="hidden xl:flex items-center space-x-1">
//               {navLinks.map((link) => (
//                 <NavLink
//                   key={link.id}
//                   to={link.path}
//                   className={({ isActive }) => `
//                     relative px-5 py-3 text-base font-medium rounded-xl transition-all duration-300
//                     hover:scale-105 hover:shadow-lg
//                     ${isActive
//                       ? "text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 font-semibold shadow-md border border-blue-200"
//                       : "text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-blue-100/50"
//                     }
//                   `}
//                   onClick={() => handleNavClick(link.path)}
//                 >
//                   {link.name}
//                 </NavLink>
//               ))}
//             </div>

//             {/* Large screens navigation (lg to xl) */}
//             <div className="hidden lg:flex xl:hidden items-center space-x-1">
//               {navLinks.map((link) => (
//                 <NavLink
//                   key={link.id}
//                   to={link.path}
//                   className={({ isActive }) => `
//                     relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300
//                     ${isActive
//                       ? "text-blue-700 bg-blue-50 font-semibold"
//                       : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
//                     }
//                   `}
//                   onClick={() => handleNavClick(link.path)}
//                 >
//                   {link.name}
//                 </NavLink>
//               ))}
//             </div>

//             {/* Enhanced Desktop Action Buttons */}
//             <div className="hidden lg:flex items-center space-x-4">
//               {/* Professional Search Button */}
//               <button
//                 onClick={() => setIsSearchOpen(true)}
//                 className="group p-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-md"
//                 aria-label="Search products"
//               >
//                 <Search className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
//               </button>

//               {/* Enhanced Quote Button */}
//               <Link
//                 to="/quote"
//                 onClick={() => handleNavClick("/quote")}
//                 className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//               >
//                 <Quote className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
//                 <span>Get Quote</span>
//               </Link>
//             </div>

//             {/* Enhanced Mobile Controls */}
//             <div className="lg:hidden flex items-center space-x-3">
//               {/* Mobile Search Button */}
//               <button
//                 onClick={() => setIsSearchOpen(true)}
//                 className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-blue-600 transition-all duration-300"
//                 aria-label="Search"
//               >
//                 <Search className="h-5 w-5" />
//               </button>

//               {/* Enhanced Mobile Menu Toggle */}
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//                 aria-label="Toggle Menu"
//               >
//                 <div className="relative w-6 h-6">
//                   <Menu 
//                     className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${
//                       isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
//                     }`} 
//                   />
//                   <X 
//                     className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${
//                       isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
//                     }`} 
//                   />
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Enhanced Search Overlay */}
//       {isSearchOpen && (
//         <div
//           className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-start justify-center pt-24 sm:pt-32 px-4 transition-all duration-300"
//           onClick={() => setIsSearchOpen(false)}
//         >
//           <div
//             className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100 opacity-100"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Search Header */}
//             <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 border-b border-blue-200">
//               <h2 className="text-lg font-semibold text-gray-800 mb-2">Search Steel Products</h2>
//               <p className="text-sm text-gray-600">Find the best quality steel products for your needs</p>
//             </div>

//             {/* Search Input */}
//             <form onSubmit={handleSearch} className="p-6 flex items-center gap-4 border-b border-gray-100">
//               <Search className="w-6 h-6 text-gray-400 flex-shrink-0" />
//               <input
//                 ref={searchInputRef}
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search for steel pipes, plates, TMT bars, angles..."
//                 className="flex-1 border-none outline-none text-lg px-3 py-2 bg-gray-50 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all duration-300"
//               />
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
//               >
//                 Search
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setIsSearchOpen(false)}
//                 className="p-2 rounded-full hover:bg-gray-100 flex-shrink-0 transition-colors duration-200"
//               >
//                 <X className="w-5 h-5 text-gray-500" />
//               </button>
//             </form>

//             {/* Popular Searches */}
//             <div className="p-6">
//               <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Popular Products</h3>
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
//                 {popularSearches.map((term) => (
//                   <button
//                     key={term}
//                     onClick={() => {
//                       setSearchQuery(term);
//                       handleSearch({ preventDefault: () => {} });
//                     }}
//                     className="px-4 py-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-700 rounded-lg text-sm text-gray-700 transition-all duration-200 hover:scale-105 text-left"
//                   >
//                     {term}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Enhanced Mobile Navigation Menu - FIXED: Updated top position */}
//       {isMenuOpen && (
//         <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
//           <div
//             ref={menuRef}
//             className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto"
//             style={{ 
//               marginTop: `${isScrolled ? navHeight : topbarHeight + navHeight}px`, 
//               maxHeight: `calc(100vh - ${isScrolled ? navHeight : topbarHeight + navHeight}px)` 
//             }}
//           >
//             <div className="px-6 py-6">
//               {/* Mobile Header */}
//               <div className="mb-8 text-center border-b border-gray-200 pb-6">
//                 <h2 className="font-bold text-xl text-gray-800 mb-2">SAWARIYA TRADERS</h2>
//                 <p className="text-gray-600 text-sm">Premium Steel Solutions</p>
//               </div>

//               {/* Enhanced Navigation Links */}
//               <div className="space-y-2 mb-8">
//                 {navLinks.map((link) => {
//                   const isActive = location.pathname === link.path;
//                   return (
//                     <Link
//                       key={link.id}
//                       to={link.path}
//                       onClick={() => handleNavClick(link.path)}
//                       className={`flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-300 ${
//                         isActive
//                           ? "text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 font-semibold shadow-sm border-l-4 border-blue-500"
//                           : "text-gray-800 hover:text-blue-700 hover:bg-gray-50 hover:pl-6"
//                       }`}
//                     >
//                       <span className="text-lg">{link.name}</span>
//                       <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${
//                         isActive ? "text-blue-600 rotate-90" : "text-gray-400"
//                       }`} />
//                     </Link>
//                   );
//                 })}
//               </div>

//               {/* Enhanced Mobile Quote Button */}
//               <div className="mb-8">
//                 <Link
//                   to="/quote"
//                   onClick={() => handleNavClick("/quote")}
//                   className="flex items-center justify-center space-x-3 w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
//                 >
//                   <Quote className="h-5 w-5" />
//                   <span>Get a Quote</span>
//                 </Link>
//               </div>

//               {/* Enhanced Quick Contact Section */}
//               <div className="border-t border-gray-200 pt-8">
//                 <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Quick Contact</h3>
//                 <div className="space-y-4">
//                   <a
//                     href="tel:+918708275179"
//                     className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
//                   >
//                     <div className="bg-blue-100 rounded-full p-3">
//                       <Phone className="h-5 w-5 text-blue-600" />
//                     </div>
//                     <div>
//                       <div className="font-semibold text-gray-800">+91 870 827 5179</div>
//                       <div className="text-sm text-gray-500">Call us anytime</div>
//                     </div>
//                   </a>

//                   <a
//                     href="mailto:info@sawariyatraders.in"
//                     className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
//                   >
//                     <div className="bg-blue-100 rounded-full p-3">
//                       <Mail className="h-5 w-5 text-blue-600" />
//                     </div>
//                     <div>
//                       <div className="font-semibold text-gray-800">info@sawariyatraders.in</div>
//                       <div className="text-sm text-gray-500">Email us</div>
//                     </div>
//                   </a>

//                   <Link
//                     to="/contact"
//                     onClick={() => handleNavClick("/contact")}
//                     className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
//                   >
//                     <div className="bg-blue-100 rounded-full p-3">
//                       <MapPin className="h-5 w-5 text-blue-600" />
//                     </div>
//                     <div>
//                       <div className="font-semibold text-gray-800">Visit Our Office</div>
//                       <div className="text-sm text-gray-500">Choudhry Dhram Kanta, Govindgarh Road</div>
//                       <div className="text-sm text-gray-500">Ramgarh, Alwar (Raj.)</div>
//                     </div>
//                   </Link>
//                 </div>
//               </div>

//               {/* Footer */}
//               <div className="border-t border-gray-200 pt-6 mt-8 text-center">
//                 <p className="text-gray-600 mb-2">Serving since 2005</p>
//                 <p className="text-xs text-gray-500">© {new Date().getFullYear()} Sawariya Traders. All rights reserved.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { Menu, X, ChevronRight, Quote, Phone, Mail, Search, MapPin } from "lucide-react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import Logo from "../common/Logo";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const menuRef = useRef(null);
//   const searchInputRef = useRef(null);
//   const location = useLocation();
  
//   // Professional heights for steel business
//   const navHeight = 50; // Increased for better presence
//   const topbarHeight = 90; // Reduced for better proportion
  
//   // Enhanced scroll handling with smooth behavior
//   const handleScroll = useCallback(() => {
//     const currentScrollY = window.scrollY;
//     const scrollThreshold = 120;
    
//     // Hide navbar on scroll down, show on scroll up
//     if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
//       setIsVisible(false);
//     } else {
//       setIsVisible(true);
//     }
    
//     setLastScrollY(currentScrollY);
//     setIsScrolled(currentScrollY > 20);
//   }, [lastScrollY]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   // Focus search input when opened
//   useEffect(() => {
//     if (isSearchOpen && searchInputRef.current) {
//       setTimeout(() => {
//         searchInputRef.current.focus();
//       }, 100);
//     }
//   }, [isSearchOpen]);

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('button')) {
//         setIsMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Handle escape key
//   useEffect(() => {
//     const handleEscKey = (event) => {
//       if (event.key === 'Escape') {
//         setIsMenuOpen(false);
//         setIsSearchOpen(false);
//       }
//     };
//     document.addEventListener('keydown', handleEscKey);
//     return () => document.removeEventListener('keydown', handleEscKey);
//   }, []);

//   // Prevent body scroll when menu is open
//   useEffect(() => {
//     if (isMenuOpen || isSearchOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isMenuOpen, isSearchOpen]);

//   // Enhanced search functionality
//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       console.log('Searching for:', searchQuery);
//       setIsSearchOpen(false);
//       setSearchQuery("");
//       // Add your search logic here
//     }
//   };

//   const navLinks = [
//     { name: "Home", path: "/", id: "home" },
//     { name: "About", path: "/about", id: "about" },
//     { name: "Products", path: "/products", id: "products" },
//     { name: "Projects", path: "/projects", id: "projects" },
//     { name: "Why Choose Us", path: "/why-choose-us", id: "why-choose-us" },
//     { name: "Contact", path: "/contact", id: "contact" },
//   ];

//   const popularSearches = [
//     "Steel Pipes", "MS Plates", "TMT Bars", "GI Sheets", 
//     "Steel Angles", "Price List", "Structural Steel", "Wire Rods"
//   ];

//   // Enhanced smooth scroll navigation
//   const handleNavClick = (to, onClick) => {
//     if (onClick) onClick();
    
//     // Close mobile menu
//     setIsMenuOpen(false);
    
//     // Smooth scroll to top with enhanced easing
//     setTimeout(() => {
//       window.scrollTo({ 
//         top: 0, 
//         behavior: 'smooth'
//       });
//     }, 50);
//   };

//   return (
//     <div>
//       {/* Main Professional Navbar */}
//       <nav
//         className={`fixed left-0 right-0 z-40 w-full transition-all duration-500 ease-in-out ${
//           isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
//         } ${
//           isScrolled 
//             ? "bg-white/98 backdrop-blur-xl shadow-xl border-b border-gray-100" 
//             : "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-50"
//         }`}
//         style={{ top: topbarHeight, height: `${navHeight}px` }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
//           <div className="flex justify-between items-center h-full">
//             {/* Enhanced Logo Section */}
//             <div className="flex items-center flex-shrink-0">
//               <Link 
//                 to="/" 
//                 className="hover:opacity-90 transition-all duration-300 hover:scale-105"
//                 onClick={() => handleNavClick("/")}
//               >
//                 <Logo variant="dark" />
//               </Link>
//             </div>

//             {/* Desktop Navigation - Enhanced */}
//             <div className="hidden xl:flex items-center space-x-1">
//               {navLinks.map((link) => (
//                 <NavLink
//                   key={link.id}
//                   to={link.path}
//                   className={({ isActive }) => `
//                     relative px-5 py-3 text-base font-medium rounded-xl transition-all duration-300
//                     hover:scale-105 hover:shadow-lg
//                     ${isActive
//                       ? "text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 font-semibold shadow-md border border-blue-200"
//                       : "text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-blue-100/50"
//                     }
//                   `}
//                   onClick={() => handleNavClick(link.path)}
//                 >
//                   {link.name}
//                 </NavLink>
//               ))}
//             </div>

//             {/* Large screens navigation (lg to xl) */}
//             <div className="hidden lg:flex xl:hidden items-center space-x-1">
//               {navLinks.map((link) => (
//                 <NavLink
//                   key={link.id}
//                   to={link.path}
//                   className={({ isActive }) => `
//                     relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300
//                     ${isActive
//                       ? "text-blue-700 bg-blue-50 font-semibold"
//                       : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
//                     }
//                   `}
//                   onClick={() => handleNavClick(link.path)}
//                 >
//                   {link.name}
//                 </NavLink>
//               ))}
//             </div>

//             {/* Enhanced Desktop Action Buttons */}
//             <div className="hidden lg:flex items-center space-x-4">
//               {/* Professional Search Button */}
//               <button
//                 onClick={() => setIsSearchOpen(true)}
//                 className="group p-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-md"
//                 aria-label="Search products"
//               >
//                 <Search className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
//               </button>

//               {/* Enhanced Quote Button */}
//               <Link
//                 to="/quote"
//                 onClick={() => handleNavClick("/quote")}
//                 className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//               >
//                 <Quote className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
//                 <span>Get Quote</span>
//               </Link>
//             </div>

//             {/* Enhanced Mobile Controls */}
//             <div className="lg:hidden flex items-center space-x-3">
//               {/* Mobile Search Button */}
//               <button
//                 onClick={() => setIsSearchOpen(true)}
//                 className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-blue-600 transition-all duration-300"
//                 aria-label="Search"
//               >
//                 <Search className="h-5 w-5" />
//               </button>

//               {/* Enhanced Mobile Menu Toggle */}
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//                 aria-label="Toggle Menu"
//               >
//                 <div className="relative w-6 h-6">
//                   <Menu 
//                     className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${
//                       isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
//                     }`} 
//                   />
//                   <X 
//                     className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${
//                       isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
//                     }`} 
//                   />
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Enhanced Search Overlay */}
//       {isSearchOpen && (
//         <div
//           className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-start justify-center pt-24 sm:pt-32 px-4 transition-all duration-300"
//           onClick={() => setIsSearchOpen(false)}
//         >
//           <div
//             className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100 opacity-100"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Search Header */}
//             <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 border-b border-blue-200">
//               <h2 className="text-lg font-semibold text-gray-800 mb-2">Search Steel Products</h2>
//               <p className="text-sm text-gray-600">Find the best quality steel products for your needs</p>
//             </div>

//             {/* Search Input */}
//             <form onSubmit={handleSearch} className="p-6 flex items-center gap-4 border-b border-gray-100">
//               <Search className="w-6 h-6 text-gray-400 flex-shrink-0" />
//               <input
//                 ref={searchInputRef}
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search for steel pipes, plates, TMT bars, angles..."
//                 className="flex-1 border-none outline-none text-lg px-3 py-2 bg-gray-50 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all duration-300"
//               />
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
//               >
//                 Search
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setIsSearchOpen(false)}
//                 className="p-2 rounded-full hover:bg-gray-100 flex-shrink-0 transition-colors duration-200"
//               >
//                 <X className="w-5 h-5 text-gray-500" />
//               </button>
//             </form>

//             {/* Popular Searches */}
//             <div className="p-6">
//               <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Popular Products</h3>
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
//                 {popularSearches.map((term) => (
//                   <button
//                     key={term}
//                     onClick={() => {
//                       setSearchQuery(term);
//                       handleSearch({ preventDefault: () => {} });
//                     }}
//                     className="px-4 py-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-700 rounded-lg text-sm text-gray-700 transition-all duration-200 hover:scale-105 text-left"
//                   >
//                     {term}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Enhanced Mobile Navigation Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
//           <div
//             ref={menuRef}
//             className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto"
//             style={{ marginTop: `${topbarHeight + navHeight}px`, maxHeight: `calc(100vh - ${topbarHeight + navHeight}px)` }}
//           >
//             <div className="px-6 py-6">
//               {/* Mobile Header */}
//               <div className="mb-8 text-center border-b border-gray-200 pb-6">
//                 <h2 className="font-bold text-xl text-gray-800 mb-2">SAWARIYA TRADERS</h2>
//                 <p className="text-gray-600 text-sm">Premium Steel Solutions</p>
//               </div>

//               {/* Enhanced Navigation Links */}
//               <div className="space-y-2 mb-8">
//                 {navLinks.map((link) => {
//                   const isActive = location.pathname === link.path;
//                   return (
//                     <Link
//                       key={link.id}
//                       to={link.path}
//                       onClick={() => handleNavClick(link.path)}
//                       className={`flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-300 ${
//                         isActive
//                           ? "text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 font-semibold shadow-sm border-l-4 border-blue-500"
//                           : "text-gray-800 hover:text-blue-700 hover:bg-gray-50 hover:pl-6"
//                       }`}
//                     >
//                       <span className="text-lg">{link.name}</span>
//                       <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${
//                         isActive ? "text-blue-600 rotate-90" : "text-gray-400"
//                       }`} />
//                     </Link>
//                   );
//                 })}
//               </div>

//               {/* Enhanced Mobile Quote Button */}
//               <div className="mb-8">
//                 <Link
//                   to="/quote"
//                   onClick={() => handleNavClick("/quote")}
//                   className="flex items-center justify-center space-x-3 w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
//                 >
//                   <Quote className="h-5 w-5" />
//                   <span>Get a Quote</span>
//                 </Link>
//               </div>

//               {/* Enhanced Quick Contact Section */}
//               <div className="border-t border-gray-200 pt-8">
//                 <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Quick Contact</h3>
//                 <div className="space-y-4">
//                   <a
//                     href="tel:+918708275179"
//                     className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
//                   >
//                     <div className="bg-blue-100 rounded-full p-3">
//                       <Phone className="h-5 w-5 text-blue-600" />
//                     </div>
//                     <div>
//                       <div className="font-semibold text-gray-800">+91 870 827 5179</div>
//                       <div className="text-sm text-gray-500">Call us anytime</div>
//                     </div>
//                   </a>

//                   <a
//                     href="mailto:info@sawariyatraders.in"
//                     className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
//                   >
//                     <div className="bg-blue-100 rounded-full p-3">
//                       <Mail className="h-5 w-5 text-blue-600" />
//                     </div>
//                     <div>
//                       <div className="font-semibold text-gray-800">info@sawariyatraders.in</div>
//                       <div className="text-sm text-gray-500">Email us</div>
//                     </div>
//                   </a>

//                   <Link
//                     to="/contact"
//                     onClick={() => handleNavClick("/contact")}
//                     className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
//                   >
//                     <div className="bg-blue-100 rounded-full p-3">
//                       <MapPin className="h-5 w-5 text-blue-600" />
//                     </div>
//                     <div>
//                       <div className="font-semibold text-gray-800">Visit Our Office</div>
//                       <div className="text-sm text-gray-500">Choudhry Dhram Kanta, Govindgarh Road</div>
//                       <div className="text-sm text-gray-500">Ramgarh, Alwar (Raj.)</div>
//                     </div>
//                   </Link>
//                 </div>
//               </div>

//               {/* Footer */}
//               <div className="border-t border-gray-200 pt-6 mt-8 text-center">
//                 <p className="text-gray-600 mb-2">Serving since 2005</p>
//                 <p className="text-xs text-gray-500">© {new Date().getFullYear()} Sawariya Traders. All rights reserved.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, ChevronRight, Quote, Phone, Mail, Search, ShoppingCart, User, MapPin, Clock } from "lucide-react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import Logo from "../common/Logo";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [language, setLanguage] = useState("en");
//   const menuRef = useRef(null);
//   const searchInputRef = useRef(null);
//   const scrollListenerRef = useRef(null);
//   const location = useLocation();
//   const navHeight = 70;
  
//   // Handle scroll events with improved visibility logic
//   const handleScroll = useCallback(() => {
//     const currentScrollY = window.scrollY;
//     if (currentScrollY > lastScrollY && currentScrollY > 150) {
//       setIsVisible(false);
//     } else {
//       setIsVisible(true);
//     }
//     setLastScrollY(currentScrollY);
//     setIsScrolled(currentScrollY > 10);
//   }, [lastScrollY]);

//   useEffect(() => {
//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     scrollListenerRef.current = handleScroll;
//     return () => {
//       if (scrollListenerRef.current) {
//         window.removeEventListener("scroll", scrollListenerRef.current);
//       }
//     };
//   }, [handleScroll]);

//   useEffect(() => {
//     if (menuRef.current) {
//       const height = menuRef.current.scrollHeight;
//       const maxHeight = window.innerHeight - 136;
//       const adjustedHeight = Math.min(height, maxHeight);
//       menuRef.current.style.maxHeight = `${adjustedHeight}px`;
//     }
//   }, [isMenuOpen]);

//   useEffect(() => {
//     if (isSearchOpen && searchInputRef.current) {
//       searchInputRef.current.focus();
//     }
//   }, [isSearchOpen]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('button')) {
//         setIsMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const handleEscKey = (event) => {
//       if (event.key === 'Escape') {
//         setIsMenuOpen(false);
//         setIsSearchOpen(false);
//       }
//     };
//     document.addEventListener('keydown', handleEscKey);
//     return () => document.removeEventListener('keydown', handleEscKey);
//   }, []);

//   useEffect(() => {
//     if (isMenuOpen || isSearchOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isMenuOpen, isSearchOpen]);

//   const languages = {
//     en: "English",
//     hi: "हिंदी",
//     es: "Español"
//   };

//   const navLinks = [
//     { name: "Home", path: "/", id: "home" },
//     { name: "About", path: "/about", id: "about" },
//     { name: "Products", path: "/products", id: "products" },
//     { name: "Projects", path: "/projects", id: "projects" },
//     { name: "Why Choose Us", path: "/why-choose-us", id: "why-choose-us" },
//     { name: "Contact Us", path: "/contact", id: "contact" },
//   ];

//   const topbarHeight = 60;

//   return (
//     <div>
//       {/* Main Navbar */}
//       <motion.nav
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ 
//           y: isVisible ? 0 : -100, 
//           opacity: isVisible ? 1 : 0,
//         }}
//         transition={{ duration: 0.4 }}
//         className={`fixed left-0 right-0 z-40 w-full backdrop-blur-md ${
//           isScrolled 
//             ? "bg-white/80 shadow-xl" 
//             : "bg-gradient-to-r from-blue-50/80 to-indigo-50/80"
//         } transition-all duration-300`}
//         style={{ top: topbarHeight, height: `${navHeight}px` }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
//           <div className="flex justify-between items-center h-full">
//             {/* Logo */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3, duration: 0.4 }}
//               className="flex items-center"
//             >
//               <Link to="/">
//                 <motion.div
//                   whileHover={{ scale: 1.08, rotate: -3 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   className="cursor-pointer"
//                 >
//                   <Logo variant="dark" />
//                 </motion.div>
//               </Link>
//             </motion.div>

//             {/* Desktop Nav */}
//             <div className="hidden md:flex gap-1 items-center">
//               {navLinks.map((link, index) => (
//                 <motion.div
//                   key={link.id}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
//                 >
//                   <NavLink
//                     to={link.path}
//                     className={({ isActive }) => `relative font-medium transition-colors duration-200 text-sm px-3 py-2 rounded-md group overflow-hidden ${
//                       isActive
//                         ? "text-blue-700 font-semibold"
//                         : "text-gray-700 hover:text-blue-600"
//                     }`}
//                   >
//                     {({ isActive }) => (
//                       <>
//                         <span className="relative z-10">{link.name}</span>
//                         <motion.div
//                           layoutId="activeNavLink"
//                           className={`absolute left-0 right-0 bottom-1 h-0.5 rounded-full bg-blue-500 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 transition-transform duration-300`}
//                           transition={{ type: "spring", stiffness: 400, damping: 30 }}
//                         />
//                       </>
//                     )}
//                   </NavLink>
//                 </motion.div>
//               ))}
//               {/* Action Buttons */}
//               <div className="flex gap-2 ml-2">
//                 {/* Quote Button */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.7, duration: 0.3 }}
//                 >
//                   <Link
//                     to="/quote"
//                     className="flex items-center gap-2 font-medium text-sm px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-xl transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                   >
//                     <Quote className="w-4 h-4" />
//                     <span>Get a Quote</span>
//                   </Link>
//                 </motion.div>
//               </div>
//             </div>

//             {/* Mobile Controls */}
//             <div className="md:hidden flex items-center gap-3">
//               {/* Mobile Search Button */}
//               <motion.button
//                 whileTap={{ scale: 1.15 }}
//                 className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-200 shadow-sm"
//                 onClick={() => setIsSearchOpen(true)}
//                 aria-label="Search"
//               >
//                 <Search className="h-5 w-5" />
//               </motion.button>

//               {/* Mobile Menu Toggle */}
//               <motion.button
//                 whileTap={{ scale: 1.2, rotate: 10 }}
//                 className="p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-md"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 aria-label="Toggle Menu"
//                 aria-expanded={isMenuOpen}
//               >
//                 {isMenuOpen ? (
//                   <X className="h-6 w-6" />
//                 ) : (
//                   <Menu className="h-6 w-6" />
//                 )}
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Search Overlay */}
//       <AnimatePresence>
//         {isSearchOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-start justify-center pt-32"
//             onClick={() => setIsSearchOpen(false)}
//           >
//             <motion.div
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -30, opacity: 0 }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//               className="w-full max-w-2xl mx-4 bg-white rounded-xl shadow-2xl overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="p-4 flex items-center gap-3 border-b border-gray-100">
//                 <Search className="w-5 h-5 text-gray-400" />
//                 <motion.input
//                   ref={searchInputRef}
//                   type="text"
//                   placeholder="Search for steel products, services, or information..."
//                   className="flex-1 border-none outline-none text-lg focus:ring-2 focus:ring-blue-400 rounded-md px-2 py-1 transition-all"
//                   autoFocus
//                   initial={false}
//                   animate={{ boxShadow: isSearchOpen ? '0 0 0 2px #3b82f6' : 'none' }}
//                   transition={{ duration: 0.2 }}
//                 />
//                 <button 
//                   onClick={() => setIsSearchOpen(false)}
//                   className="p-2 rounded-full hover:bg-gray-100"
//                 >
//                   <X className="w-5 h-5 text-gray-500" />
//                 </button>
//               </div>
//               <div className="p-4 pb-6">
//                 <h3 className="text-sm font-medium text-gray-500 mb-3">Popular Searches</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {["Steel Pipes", "MS Plates", "TMT Bars", "GI Sheets", "Steel Angles", "Price List"].map((term) => (
//                     <motion.button 
//                       key={term} 
//                       whileHover={{ scale: 1.08 }}
//                       className="px-3 py-1.5 bg-gray-100 hover:bg-blue-100 rounded-full text-sm text-gray-700 transition shadow-sm"
//                     >
//                       {term}
//                     </motion.button>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Mobile Navigation Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             ref={menuRef}
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -30 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-white border-t border-gray-200 shadow-2xl text-gray-800 fixed top-[130px] left-0 right-0 z-50 overflow-y-auto rounded-b-2xl"
//           >
//             <motion.div
//               className="px-6 pt-6 pb-24 flex flex-col gap-1"
//               initial="closed"
//               animate="open"
//               variants={{
//                 closed: {},
//                 open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
//               }}
//             >
//               {navLinks.map((link, index) => {
//                 const isActive = location.pathname === link.path;
//                 return (
//                   <motion.div
//                     key={link.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
//                     whileHover={{ scale: 1.03, backgroundColor: '#f0f7ff' }}
//                   >
//                     <Link
//                       to={link.path}
//                       onClick={() => setIsMenuOpen(false)}
//                       className={`py-4 text-lg font-medium block ${
//                         isActive
//                           ? "text-blue-700 border-l-4 border-blue-600 pl-4 bg-blue-50"
//                           : "text-gray-800 hover:text-blue-700 border-l-4 border-transparent pl-4 hover:bg-gray-50"
//                       } transition-all duration-200 rounded-r-md`}
//                     >
//                       <div className="flex items-center justify-between">
//                         <span>{link.name}</span>
//                         <ChevronRight className={`h-5 w-5 ${
//                           isActive ? "text-blue-600" : "text-gray-400"
//                         }`} />
//                       </div>
//                     </Link>
//                   </motion.div>
//                 );
//               })}
//               {/* Mobile call-to-action buttons */}
//               <div className="mt-6 flex flex-col gap-3">
//                 {/* Get a Quote */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4, duration: 0.3 }}
//                   whileHover={{ scale: 1.04 }}
//                 >
//                   <Link
//                     to="/quote"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="py-4 text-lg font-medium flex items-center justify-center gap-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors duration-200"
//                   >
//                     <Quote className="h-5 w-5" />
//                     Get a Quote
//                   </Link>
//                 </motion.div>
//                 {/* E-catalog download */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.45, duration: 0.3 }}
//                   whileHover={{ scale: 1.04 }}
//                 >
//                   <Link
//                     to="/catalog"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="py-4 text-lg font-medium flex items-center justify-center gap-2 bg-gray-100 text-gray-800 rounded-md shadow-md hover:bg-gray-200 transition-colors duration-200"
//                   >
//                     <ShoppingCart className="h-5 w-5" />
//                     Download Catalog
//                   </Link>
//                 </motion.div>
//               </div>
//               {/* Language Selection */}
//               <div className="mt-6 pt-4 border-t border-gray-200">
//                 <p className="text-sm text-gray-500 mb-2">Select Language</p>
//                 <div className="flex gap-2 border rounded-lg p-2 bg-gray-50">
//                   {Object.entries(languages).map(([code, name]) => (
//                     <motion.button 
//                       key={code}
//                       whileTap={{ scale: 1.1 }}
//                       onClick={() => setLanguage(code)}
//                       className={`px-3 py-2 rounded font-medium border transition-all duration-200 ${
//                         language === code 
//                           ? "bg-blue-600 text-white border-blue-600 shadow" 
//                           : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50"
//                       }`}
//                     >
//                       {name}
//                     </motion.button>
//                   ))}
//                 </div>
//               </div>
//               {/* Quick contact options */}
//               <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col gap-3">
//                 <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Quick Contact</p>
//                 <motion.a href="tel:+123456789" whileHover={{ scale: 1.04, backgroundColor: '#e0f2fe' }} className="flex items-center gap-3 text-gray-800 py-2 rounded-lg transition-all">
//                   <div className="bg-blue-100 rounded-full p-2">
//                     <Phone className="h-4 w-4 text-blue-600" />
//                   </div>
//                   <span>+91 870 827 5179</span>
//                 </motion.a>
//                 <motion.a href="mailto:info@example.com" whileHover={{ scale: 1.04, backgroundColor: '#e0f2fe' }} className="flex items-center gap-3 text-gray-800 py-2 rounded-lg transition-all">
//                   <div className="bg-blue-100 rounded-full p-2">
//                     <Mail className="h-4 w-4 text-blue-600" />
//                   </div>
//                   <span>info@sawariyatraders.in </span>
//                 </motion.a>
//                 <motion.div whileHover={{ scale: 1.04, backgroundColor: '#e0f2fe' }} className="rounded-lg transition-all">
//                   <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-gray-800 py-2">
//                     <div className="bg-blue-100 rounded-full p-2">
//                       <MapPin className="h-4 w-4 text-blue-600" />
//                     </div>
//                     <div>
//                       <span>Industrial Area, Phase 2</span>
//                       <p className="text-sm text-gray-500">Delhi, India</p>
//                     </div>
//                   </Link>
//                 </motion.div>
//               </div>
//               {/* Company Info */}
//               <div className="mt-auto pt-6 border-t border-gray-200 text-sm text-gray-500">
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5, duration: 0.3 }}
//                 >
//                   <p className="font-medium text-gray-800">Shri Durga Steel</p>
//                   <p className="mt-1">Premium steel supplier since 2005</p>
//                   <p className="mt-4">© {new Date().getFullYear()} All rights reserved</p>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )} 
//       </AnimatePresence>
//       </div>
//   );
// }


// ///////////////////////////////
// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, ChevronRight, Quote, Phone, Mail, Search, User, MapPin, Clock } from "lucide-react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import Logo from "../common/Logo";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const menuRef = useRef(null);
//   const searchInputRef = useRef(null);
//   const scrollListenerRef = useRef(null);
//   const location = useLocation();
//   const navHeight = 70;
  
//   // Handle scroll events with improved visibility logic
//   const handleScroll = useCallback(() => {
//     const currentScrollY = window.scrollY;
//     if (currentScrollY > lastScrollY && currentScrollY > 150) {
//       setIsVisible(false);
//     } else {
//       setIsVisible(true);
//     }
//     setLastScrollY(currentScrollY);
//     setIsScrolled(currentScrollY > 10);
//   }, [lastScrollY]);

//   useEffect(() => {
//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     scrollListenerRef.current = handleScroll;
//     return () => {
//       if (scrollListenerRef.current) {
//         window.removeEventListener("scroll", scrollListenerRef.current);
//       }
//     };
//   }, [handleScroll]);

//   useEffect(() => {
//     if (menuRef.current) {
//       const height = menuRef.current.scrollHeight;
//       const maxHeight = window.innerHeight - 136;
//       const adjustedHeight = Math.min(height, maxHeight);
//       menuRef.current.style.maxHeight = `${adjustedHeight}px`;
//     }
//   }, [isMenuOpen]);

//   useEffect(() => {
//     if (isSearchOpen && searchInputRef.current) {
//       searchInputRef.current.focus();
//     }
//   }, [isSearchOpen]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('button')) {
//         setIsMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const handleEscKey = (event) => {
//       if (event.key === 'Escape') {
//         setIsMenuOpen(false);
//         setIsSearchOpen(false);
//       }
//     };
//     document.addEventListener('keydown', handleEscKey);
//     return () => document.removeEventListener('keydown', handleEscKey);
//   }, []);

//   useEffect(() => {
//     if (isMenuOpen || isSearchOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isMenuOpen, isSearchOpen]);

//   const navLinks = [
//     { name: "Home", path: "/", id: "home" },
//     { name: "About", path: "/about", id: "about" },
//     { name: "Products", path: "/products", id: "products" },
//     { name: "Projects", path: "/projects", id: "projects" },
//     { name: "Why Choose Us", path: "/why-choose-us", id: "why-choose-us" },
//     { name: "Contact Us", path: "/contact", id: "contact" },
//   ];

//   const topbarHeight = 60;

//   return (
//     <div>
//       {/* Main Navbar */}
//       <motion.nav
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ 
//           y: isVisible ? 0 : -100, 
//           opacity: isVisible ? 1 : 0,
//         }}
//         transition={{ duration: 0.4 }}
//         className={`fixed left-0 right-0 z-40 w-full backdrop-blur-lg ${
//           isScrolled 
//             ? "bg-white/90 shadow-xl border-b border-gray-200/50" 
//             : "bg-gradient-to-r from-blue-50/90 to-indigo-50/90"
//         } transition-all duration-300`}
//         style={{ top: topbarHeight, height: `${navHeight}px` }}
//       >
//         <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-full">
//           <div className="flex justify-between items-center h-full">
//             {/* Logo */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3, duration: 0.4 }}
//               className="flex items-center flex-shrink-0"
//             >
//               <Link to="/">
//                 <motion.div
//                   whileHover={{ scale: 1.05, rotate: -2 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   className="cursor-pointer"
//                 >
//                   <Logo variant="dark" />
//                 </motion.div>
//               </Link>
//             </motion.div>

//             {/* Desktop Nav */}
//             <div className="hidden lg:flex gap-1 items-center flex-1 justify-center">
//               {navLinks.map((link, index) => (
//                 <motion.div
//                   key={link.id}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
//                 >
//                   <NavLink
//                     to={link.path}
//                     className={({ isActive }) => `relative font-medium transition-all duration-200 text-sm xl:text-base px-3 xl:px-4 py-2 rounded-lg group overflow-hidden ${
//                       isActive
//                         ? "text-blue-700 font-semibold bg-blue-50"
//                         : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
//                     }`}
//                   >
//                     {({ isActive }) => (
//                       <>
//                         <span className="relative z-10 whitespace-nowrap">{link.name}</span>
//                         <motion.div
//                           layoutId="activeNavLink"
//                           className={`absolute left-0 right-0 bottom-1 h-0.5 rounded-full bg-blue-600 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 transition-transform duration-300`}
//                           transition={{ type: "spring", stiffness: 400, damping: 30 }}
//                         />
//                       </>
//                     )}
//                   </NavLink>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Desktop Action Buttons */}
//             <div className="hidden lg:flex gap-2 items-center flex-shrink-0">
//               {/* Search Button */}
//               <motion.button
//                 whileTap={{ scale: 0.95 }}
//                 className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-200 shadow-sm"
//                 onClick={() => setIsSearchOpen(true)}
//                 aria-label="Search"
//               >
//                 <Search className="h-5 w-5" />
//               </motion.button>

//               {/* Quote Button */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.7, duration: 0.3 }}
//               >
//                 <Link
//                   to="/quote"
//                   className="flex items-center gap-2 font-medium text-sm xl:text-base px-4 xl:px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none whitespace-nowrap"
//                 >
//                   <Quote className="w-4 h-4" />
//                   <span>Get Quote</span>
//                 </Link>
//               </motion.div>
//             </div>

//             {/* Mobile Controls */}
//             <div className="lg:hidden flex items-center gap-2">
//               {/* Mobile Search Button */}
//               <motion.button
//                 whileTap={{ scale: 0.95 }}
//                 className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-200 shadow-sm"
//                 onClick={() => setIsSearchOpen(true)}
//                 aria-label="Search"
//               >
//                 <Search className="h-5 w-5" />
//               </motion.button>

//               {/* Mobile Menu Toggle */}
//               <motion.button
//                 whileTap={{ scale: 0.95 }}
//                 className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-md"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 aria-label="Toggle Menu"
//                 aria-expanded={isMenuOpen}
//               >
//                 {isMenuOpen ? (
//                   <X className="h-6 w-6" />
//                 ) : (
//                   <Menu className="h-6 w-6" />
//                 )}
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Search Overlay */}
//       <AnimatePresence>
//         {isSearchOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 sm:pt-32 px-4"
//             onClick={() => setIsSearchOpen(false)}
//           >
//             <motion.div
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -30, opacity: 0 }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//               className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="p-4 flex items-center gap-3 border-b border-gray-100">
//                 <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
//                 <input
//                   ref={searchInputRef}
//                   type="text"
//                   placeholder="Search for steel products, services..."
//                   className="flex-1 border-none outline-none text-base sm:text-lg focus:ring-2 focus:ring-blue-400 rounded-md px-2 py-1 transition-all"
//                   autoFocus
//                 />
//                 <button 
//                   onClick={() => setIsSearchOpen(false)}
//                   className="p-2 rounded-full hover:bg-gray-100 flex-shrink-0"
//                 >
//                   <X className="w-5 h-5 text-gray-500" />
//                 </button>
//               </div>
//               <div className="p-4 pb-6">
//                 <h3 className="text-sm font-medium text-gray-500 mb-3">Popular Searches</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {["Steel Pipes", "MS Plates", "TMT Bars", "GI Sheets", "Steel Angles", "Price List"].map((term) => (
//                     <motion.button 
//                       key={term} 
//                       whileHover={{ scale: 1.05 }}
//                       className="px-3 py-1.5 bg-gray-100 hover:bg-blue-100 rounded-full text-sm text-gray-700 transition shadow-sm"
//                     >
//                       {term}
//                     </motion.button>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Mobile Navigation Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             ref={menuRef}
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -30 }}
//             transition={{ duration: 0.3 }}
//             className="lg:hidden bg-white border-t border-gray-200 shadow-2xl text-gray-800 fixed top-[130px] left-0 right-0 z-50 overflow-y-auto rounded-b-2xl"
//           >
//             <motion.div
//               className="px-4 sm:px-6 pt-6 pb-8 flex flex-col gap-1"
//               initial="closed"
//               animate="open"
//               variants={{
//                 closed: {},
//                 open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
//               }}
//             >
//               {/* Navigation Links */}
//               {navLinks.map((link, index) => {
//                 const isActive = location.pathname === link.path;
//                 return (
//                   <motion.div
//                     key={link.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
//                     whileHover={{ scale: 1.02 }}
//                   >
//                     <Link
//                       to={link.path}
//                       onClick={() => setIsMenuOpen(false)}
//                       className={`py-4 text-lg font-medium block ${
//                         isActive
//                           ? "text-blue-700 border-l-4 border-blue-600 pl-4 bg-blue-50"
//                           : "text-gray-800 hover:text-blue-700 border-l-4 border-transparent pl-4 hover:bg-gray-50"
//                       } transition-all duration-200 rounded-r-lg`}
//                     >
//                       <div className="flex items-center justify-between">
//                         <span>{link.name}</span>
//                         <ChevronRight className={`h-5 w-5 ${
//                           isActive ? "text-blue-600" : "text-gray-400"
//                         }`} />
//                       </div>
//                     </Link>
//                   </motion.div>
//                 );
//               })}
              
//               {/* Mobile Get Quote Button */}
//               <div className="mt-6">
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4, duration: 0.3 }}
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <Link
//                     to="/quote"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="py-4 text-lg font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
//                   >
//                     <Quote className="h-5 w-5" />
//                     Get a Quote
//                   </Link>
//                 </motion.div>
//               </div>
              
//               {/* Quick Contact Section */}
//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <p className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-4">Quick Contact</p>
//                 <div className="flex flex-col gap-3">
//                   <motion.a 
//                     href="tel:+918708275179" 
//                     whileHover={{ scale: 1.02, backgroundColor: '#e0f2fe' }} 
//                     className="flex items-center gap-3 text-gray-800 py-3 px-2 rounded-lg transition-all"
//                   >
//                     <div className="bg-blue-100 rounded-full p-2.5">
//                       <Phone className="h-4 w-4 text-blue-600" />
//                     </div>
//                     <div>
//                       <span className="font-medium">+91 870 827 5179</span>
//                       <p className="text-sm text-gray-500">Call us anytime</p>
//                     </div>
//                   </motion.a>
                  
//                   <motion.a 
//                     href="mailto:info@sawariyatraders.in" 
//                     whileHover={{ scale: 1.02, backgroundColor: '#e0f2fe' }} 
//                     className="flex items-center gap-3 text-gray-800 py-3 px-2 rounded-lg transition-all"
//                   >
//                     <div className="bg-blue-100 rounded-full p-2.5">
//                       <Mail className="h-4 w-4 text-blue-600" />
//                     </div>
//                     <div>
//                       <span className="font-medium">info@sawariyatraders.in</span>
//                       <p className="text-sm text-gray-500">Email us</p>
//                     </div>
//                   </motion.a>
                  
//                   <motion.div 
//                     whileHover={{ scale: 1.02, backgroundColor: '#e0f2fe' }} 
//                     className="rounded-lg transition-all"
//                   >
//                     <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-gray-800 py-3 px-2">
//                       <div className="bg-blue-100 rounded-full p-2.5">
//                         <MapPin className="h-4 w-4 text-blue-600" />
//                       </div>
//                       <div>
//                         <span className="font-medium">Visit Our Office</span>
//                         <p className="text-sm text-gray-500">Choudhry Dhram Kanta, Govindgarh Road</p>
//                         <p className="text-sm text-gray-500">Ramgarh, Alwar (Raj.)</p>
//                       </div>
//                     </Link>
//                   </motion.div>
//                 </div>
//               </div>
              
//               {/* Company Info */}
//               <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-500">
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5, duration: 0.3 }}
//                   className="text-center"
//                 >
//                   <p className="font-bold text-lg text-gray-800 mb-2">SAWARIYA TRADERS</p>
//                   <p className="text-gray-600 mb-1">Premium steel supplier since 2005</p>
//                   <p className="text-gray-500">© {new Date().getFullYear()} All rights reserved</p>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )} 
//       </AnimatePresence>
//     </div>
//   );
// }


