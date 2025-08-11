// import React, { useState, useEffect } from 'react'; 
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
// import Topbar from './common/Topbar'; 
// import Navbar from './common/Navbar'; 
// import './App.css'; 
// import HeroSection from './pages/HeroSection'; 
// import AboutSection from './pages/About.Section'; 
// import Product from './pages/Product'; 
// import ProductDetail from './pages/ProductDetail'; 
// import WhyChooseUs from "./pages/WhyChooseUs"; 
// import SteelCalculator from './pages/SteelCalculator'; 
// import DreamHome from './pages/DreamHome'; 
// import QuoteForm from "./pages/QuoteForm"; 
// import ContactForm from './pages/ContactForm'; 
// import Footer from './pages/Footer'; 
// import TestimonialsSection from './pages/TestimonialsSection';  

// // Create page components that combine relevant sections
// const HomePage = () => (   
//   <>     
//     <HeroSection />     
//     <AboutSection />     
//     <WhyChooseUs />     
//     <TestimonialsSection />   
//   </> 
// );  

// const ProductsPage = () => (   
//   <>     
//     <Product />   
//   </> 
// );  

// const ProductDetailsPage = () => (   
//   <>     
//     <ProductDetail />   
//   </> 
// );  

// const CalculatorPage = () => (   
//   <>     
//     <SteelCalculator />   
//   </> 
// );  

// const ProjectsPage = () => (   
//   <>     
//     <DreamHome />   
//   </> 
// );  

// const GetQuotePage = () => (   
//   <>     
//     <QuoteForm />   
//   </> 
// );  

// const ContactPage = () => (   
//   <>     
//     <ContactForm />   
//   </> 
// );  

// function App() {   
//   const [isScrolled, setIsScrolled] = useState(false);      
  
//   // Add scroll event listener to track page scrolling   
//   useEffect(() => {     
//     const handleScroll = () => {       
//       setIsScrolled(window.scrollY > 10);     
//     };          
    
//     window.addEventListener('scroll', handleScroll, { passive: true });          
    
//     return () => {       
//       window.removeEventListener('scroll', handleScroll);     
//     };   
//   }, []);    
  
//   return (     
//     <Router>       
//       <div className="flex flex-col min-h-screen">         
//         {/* Topbar Component */}         
//         <Topbar />                  
        
//         {/* Dynamic spacing between Topbar and Navbar */}         
//         <div className={`transition-all duration-300 ${isScrolled ? 'h-14 md:h-10' : 'h-16 md:h-12'}`}></div>                  
        
//         {/* Navbar Component */}         
//         <Navbar />                  
        
//         {/* Main Content Container */}         
//         <main className="flex-grow">           
//           <Routes>             
//             <Route path="/" element={<HomePage />} />             
//             <Route path="/about" element={<AboutSection />} />             
//             <Route path="/products" element={<ProductsPage />} />             
//             <Route path="/products/:productId" element={<ProductDetailsPage />} />             
//             <Route path="/projects" element={<ProjectsPage />} />             
//             <Route path="/why-choose-us" element={<WhyChooseUs />} />             
//             <Route path="/calculator" element={<CalculatorPage />} />             
//             <Route path="/quote" element={<GetQuotePage />} />             
//             <Route path="/contact" element={<ContactPage />} />             
//             <Route path="*" element={<Navigate to="/" replace />} />           
//           </Routes>         
//         </main>                  
        
//         {/* Footer appears on all pages */}         
//         <Footer />       
//       </div>     
//     </Router>   
//   ); 
// }  

// export default App;


// App.jsx
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from 'react-router-dom';
import Topbar from './common/Topbar';
import Navbar from './common/Navbar';
import Footer from './pages/Footer';
import HeroSection from './pages/HeroSection';
import AboutSection from './pages/About.Section';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import WhyChooseUs from './pages/WhyChooseUs';
import SteelCalculator from './pages/SteelCalculator';
import DreamHome from './pages/DreamHome';
import QuoteForm from './pages/QuoteForm';
import ContactForm from './pages/ContactForm';
import TestimonialsSection from './pages/TestimonialsSection';
import './App.css';

/* ---------- Layout ---------- */
const PageLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;          // SSR guard
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <div
        className={`transition-all duration-300 ${
          isScrolled ? 'h-14 md:h-10' : 'h-16 md:h-12'
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

/* ---------- Routes ---------- */
const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutSection /> },
  { path: '/products', element: <ProductsPage /> },
  { path: '/products/:productId', element: <ProductDetailsPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/why-choose-us', element: <WhyChooseUs /> },
  { path: '/calculator', element: <CalculatorPage /> },
  { path: '/quote', element: <QuotePage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '*', element: <Navigate to="/" replace /> },
];

/* ---------- App ---------- */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<PageLayout />}>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;