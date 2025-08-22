import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  UserButton,
  RedirectToSignIn,
} from "@clerk/clerk-react";

import Topbar from "./common/Topbar";
import Navbar from "./common/Navbar";
import Footer from "./pages/Footer";
import HeroSection from "./pages/HeroSection";
import AboutSection from "./pages/About.Section";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import WhyChooseUs from "./pages/WhyChooseUs";
import SteelCalculator from "./pages/SteelCalculator";
import DreamHome from "./pages/DreamHome";
import QuoteForm from "./pages/QuoteForm";
import ContactForm from "./pages/ContactForm";
import TestimonialsSection from "./pages/TestimonialsSection";
import "./App.css";

/* ---------- Layout ---------- */
const PageLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "h-14 md:h-10" : "h-16 md:h-12"
        }`}
      />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

/* ---------- Helpers ---------- */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

/* ---------- Page components ---------- */
const HomePage = () => (
  <>
    <HeroSection />
    <AboutSection />
    <WhyChooseUs />
    <TestimonialsSection />
  </>
);
const ProductsPage = () => <Product />;
const ProductDetailsPage = () => <ProductDetail />;
const CalculatorPage = () => <SteelCalculator />;
const ProjectsPage = () => <DreamHome />;
const QuotePage = () => <QuoteForm />;
const ContactPage = () => <ContactForm />;

/* ---------- Protected Route Wrapper ---------- */
function ProtectedRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

/* ---------- App ---------- */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<PageLayout />}>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Protected Routes */}
          <Route
            path="/calculator"
            element={
              <ProtectedRoute>
                <CalculatorPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quote"
            element={
              <ProtectedRoute>
                <QuotePage />
              </ProtectedRoute>
            }
          />

          {/* Clerk Auth Pages */}
          <Route path="/sign-in" element={<SignIn routing="path" path="/sign-in" />} />
          <Route path="/sign-up" element={<SignUp routing="path" path="/sign-up" />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   Outlet,
//   useLocation,
// } from 'react-router-dom';
// import Topbar from './common/Topbar';
// import Navbar from './common/Navbar';
// import Footer from './pages/Footer';
// import HeroSection from './pages/HeroSection';
// import AboutSection from './pages/About.Section';
// import Product from './pages/Product';
// import ProductDetail from './pages/ProductDetail';
// import WhyChooseUs from './pages/WhyChooseUs';
// import SteelCalculator from './pages/SteelCalculator';
// import DreamHome from './pages/DreamHome';
// import QuoteForm from './pages/QuoteForm';
// import ContactForm from './pages/ContactForm';
// import TestimonialsSection from './pages/TestimonialsSection';
// import './App.css';

// /* ---------- Layout ---------- */
// const PageLayout = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     if (typeof window === 'undefined') return;          // SSR guard
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Topbar />
//       <div
//         className={`transition-all duration-300 ${
//           isScrolled ? 'h-14 md:h-10' : 'h-16 md:h-12'
//         }`}
//       />
//       <Navbar />
//       <main className="flex-grow">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// /* ---------- Helpers ---------- */
// const ScrollToTop = () => {
//   const { pathname } = useLocation();
//   useEffect(() => window.scrollTo(0, 0), [pathname]);
//   return null;
// };

// /* ---------- Page components ---------- */
// const HomePage = () => (
//   <>
//     <HeroSection />
//     <AboutSection />
//     <WhyChooseUs />
//     <TestimonialsSection />
//   </>
// );
// const ProductsPage = () => <Product />;
// const ProductDetailsPage = () => <ProductDetail />;
// const CalculatorPage = () => <SteelCalculator />;
// const ProjectsPage = () => <DreamHome />;
// const QuotePage = () => <QuoteForm />;
// const ContactPage = () => <ContactForm />;

// /* ---------- Routes ---------- */
// const routes = [
//   { path: '/', element: <HomePage /> },
//   { path: '/about', element: <AboutSection /> },
//   { path: '/products', element: <ProductsPage /> },
//   { path: '/products/:productId', element: <ProductDetailsPage /> },
//   { path: '/projects', element: <ProjectsPage /> },
//   { path: '/why-choose-us', element: <WhyChooseUs /> },
//   { path: '/calculator', element: <CalculatorPage /> },
//   { path: '/quote', element: <QuotePage /> },
//   { path: '/contact', element: <ContactPage /> },
//   { path: '*', element: <Navigate to="/" replace /> },
// ];

// /* ---------- App ---------- */
// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <Routes>
//         <Route element={<PageLayout />}>
//           {routes.map(({ path, element }) => (
//             <Route key={path} path={path} element={element} />
//           ))}
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;