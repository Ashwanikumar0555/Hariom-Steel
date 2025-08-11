
import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, MapPin, ShoppingCart, FileText, Shield, Clock, DollarSign, Award, Truck, Users } from 'lucide-react';
import { Link } from "react-router-dom";

// Steel images
const steelImages = [
  'https://res.cloudinary.com/dds6yoff3/image/upload/v1752656213/sariya_2_rjblxh.jpg',
  'https://ik.imagekit.io/xzjipji0j/MS%20pipe%202.jpg?updatedAt=1752729921036',
  'https://res.cloudinary.com/dds6yoff3/image/upload/v1752656215/Sariya4_kwzjbm.avif',
  'https://res.cloudinary.com/dds6yoff3/image/upload/v1752658074/MS_pipe_3_sjfzff.jpg',
  
  
];

// Floating WhatsApp Button
const FloatingWhatsApp = () => {
  const whatsappNumber = '8708275179';
  const whatsappLink = `https://wa.me/91${whatsappNumber}?text=Hello%20Sawariya%20Traders,%20I'm%20interested%20in%20your%20steel%20products!`;

  return (
    <div>
      
    </div>
  );
};

// Stats Component
const StatsSection = () => {
  const stats = [
    // { icon: Users, number: '500+', label: 'Happy Clients' },
    // { icon: Award, number: '15+', label: 'Years Experience' },
    // { icon: Truck, number: '1000+', label: 'Projects Delivered' },
    // { icon: Shield, number: '100%', label: 'Quality Assured' }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
        >
          <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-400 mx-auto mb-2 sm:mb-3" />
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
          <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

// Hero Section Component
export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % steelImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const whatsappNumber = '8708275179';
  const whatsappLink = `https://wa.me/91${whatsappNumber}?text=Hello%20Sawariya%20Traders,%20I'm%20interested%20in%20your%20steel%20products!`;

  const trustIndicators = [
    { icon: Shield, text: 'Certified Quality' },
    { icon: Clock, text: 'Reliable Delivery' },
    { icon: DollarSign, text: 'Best Prices' },
    { icon: Truck, text: 'Nationwide Shipping' },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {steelImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-blue-950/60 to-gray-800/70 z-10" />
            <img
              src={image}
              alt={`Steel manufacturing ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.9) contrast(1.2)' }}
            />
          </div>
        ))}
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/5 w-1 h-1 bg-white rounded-full animate-pulse opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto min-h-screen px-4 sm:px-6 lg:px-8 flex flex-col justify-center py-16 sm:py-20">
        <div className="max-w-6xl mx-auto w-full">
          {/* Company Badge */}
          <div
            className={`inline-block mb-4 sm:mb-6 bg-blue-700/20 backdrop-blur-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg border border-blue-500/30 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-blue-200 font-semibold text-sm sm:text-base tracking-wide uppercase">
              Leading Steel Supplier Since 2005
            </span>
          </div>

          {/* Main Heading */}
          <div
            className={`mb-6 sm:mb-8 transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-3 sm:mb-4 leading-tight tracking-tight text-white drop-shadow-2xl">
              <span className="block bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                SAWARIYA
              </span>
              <span className="block bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                TRADERS
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-blue-100 tracking-wide">
              Your Trusted Partner in Steel Excellence
            </p>
          </div>

          {/* Description */}
          <div
            className={`mb-6 sm:mb-8 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed">
              Delivering premium-grade steel solutions for construction and industrial applications, crafted with precision and backed by decades of expertise.
            </p>
          </div>

          {/* Contact Information */}
          <div
            className={`mb-6 sm:mb-8 transition-all duration-1000 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 text-gray-100">
                <div className="bg-blue-700/20 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                </div>
                <span className="text-sm sm:text-base leading-relaxed">
                  Choudhry Dhram Kanta, Govindgarh Road, Ramgarh, Alwar (Raj.)
                </span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 text-gray-100">
                <div className="bg-blue-700/20 p-2 sm:p-3 rounded-full">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                </div>
                <a
                  href={`tel:+91${whatsappNumber}`}
                  className="hover:text-blue-400 transition-colors text-sm sm:text-base font-medium"
                >
                  +91 87082 75179
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className={`mb-8 sm:mb-12 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/quote" aria-label="Request a Quote">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                  Request a Quote
                </button>
              </Link>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.445.099-.149.099-.347-.025-.496-.124-.149-.546-.694-.892-1.04-.346-.347-.669-.347-.966-.347-.297 0-.496.099-.669.297-.173.198-.669.793-.669 1.937 0 1.144.793 2.258.892 2.406.099.149 1.427 2.159 3.465 3.028.495.223.892.396 1.238.495.347.099.644.099.842.05.297-.099.892-.396 1.04-.694.149-.297.297-.595.297-.892 0-.297-.124-.496-.421-.645zM12 1.5C6.201 1.5 1.5 6.201 1.5 12c0 1.834.474 3.557 1.304 5.07L1.5 21l3.96-1.287A10.46 10.46 0 0012 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5z" />
                  </svg>
                  Chat on WhatsApp
                </button>
              </a>
              <Link to="/products" aria-label="Explore Products">
                <button className="bg-transparent border-2 border-blue-500 text-blue-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                  Explore Products
                </button>
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div
            className={`mb-8 sm:mb-12 transition-all duration-1000 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex flex-col items-center gap-2 sm:gap-3 text-center">
                  <div className="bg-blue-700/20 p-3 sm:p-4 rounded-full backdrop-blur-lg border border-blue-500/30">
                    <indicator.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-100">{indicator.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <StatsSection />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-1000 delay-800 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        onClick={scrollToNextSection}
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-200 text-sm sm:text-base font-medium mb-1 sm:mb-2">Explore More</span>
          <div className="animate-bounce">
            <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </section>
  );
}

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ChevronDown, Phone, MapPin, ShoppingCart, FileText } from "lucide-react";
// import steelImage1 from "../assets/sariya.png";
// import steelImage2 from "../assets/sariya 2.jpeg";
// import steelImage3 from "../assets/sariya 3.jpeg";

// // Floating WhatsApp Button
// const FloatingWhatsApp = () => {
//   const whatsappNumber = "8708275179";
//   const whatsappLink = `https://wa.me/91${whatsappNumber}?text=Hello%20Sawariya%20Traders,%20I'm%20interested%20in%20your%20steel%20products!`;
//   return (
//     <a
//       href={whatsappLink}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="Chat with us on WhatsApp"
//       className="fixed z-50 bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg p-4 flex items-center transition-colors group"
//     >
//       <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.445.099-.149.099-.347-.025-.496-.124-.149-.546-.694-.892-1.04-.346-.347-.669-.347-.966-.347-.297 0-.496.099-.669.297-.173.198-.669.793-.669 1.937 0 1.144.793 2.258.892 2.406.099.149 1.427 2.159 3.465 3.028.495.223.892.396 1.238.495.347.099.644.099.842.05.297-.099.892-.396 1.04-.694.149-.297.297-.595.297-.892 0-.297-.124-.496-.421-.645zM12 1.5C6.201 1.5 1.5 6.201 1.5 12c0 1.834.474 3.557 1.304 5.07L1.5 21l3.96-1.287A10.46 10.46 0 0012 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5z" />
//       </svg>
//       <span className="ml-2 font-semibold hidden md:inline group-hover:inline">WhatsApp</span>
//     </a>
//   );
// };

// export default function HeroSection() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const bgImages = [steelImage1, steelImage2, steelImage3];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const scrollToNextSection = () => {
//     window.scrollTo({
//       top: window.innerHeight,
//       behavior: "smooth",
//     });
//   };

//   const whatsappNumber = "8708275179";
//   const whatsappLink = `https://wa.me/91${whatsappNumber}?text=Hello%20Sawariya%20Traders,%20I'm%20interested%20in%20your%20steel%20products!`;

//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">
//       {/* Background Image Carousel */}
//       {bgImages.map((image, index) => (
//         <motion.div
//           key={index}
//           className="absolute inset-0 z-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: index === currentImageIndex ? 0.92 : 0 }}
//           transition={{ duration: 1.5, ease: "easeInOut" }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-blue-900/80 z-10" />
//           <img
//             src={image}
//             alt={`Steel background ${index + 1}`}
//             className="w-full h-full object-cover"
//             aria-hidden={index !== currentImageIndex}
//           />
//         </motion.div>
//       ))}

//       {/* Foreground Content */}
//       <div className="relative z-20 container mx-auto h-full px-4 md:px-8 flex flex-col justify-center items-center text-center">
//         <div className="max-w-4xl">
//           {/* Logo (optional) */}
//           {/* <img src={logo} alt="Sawariya Traders Logo" className="mx-auto mb-4 h-16" /> */}

//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
//             className="inline-block mb-6 bg-blue-700/20 backdrop-blur-md px-6 py-3 rounded-full shadow-md border border-blue-500"
//           >
//             <span className="text-blue-200 font-semibold text-lg tracking-wide uppercase">
//               Trusted Steel Supplier Since 2005
//             </span>
//           </motion.div>

//           {/* Main Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
//             className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight text-white drop-shadow-lg"
//           >
//             <span className="block">SAWARIYA TRADERS</span>
//             <span className="block text-lg md:text-2xl font-light text-blue-200 mt-2 tracking-widest">
//               Premium Steel for Construction & Industry
//             </span>
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
//             className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
//           >
//             Premium quality steel products for construction and industrial applications, sourced from top manufacturers with guaranteed reliability.
//           </motion.p>

//           {/* Business Details */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
//             className="flex flex-col items-center gap-3 mb-10"
//           >
//             <div className="flex items-center gap-2 text-gray-300">
//               <MapPin className="h-5 w-5 text-blue-400" aria-hidden="true" />
//               <span className="text-base md:text-lg">Choudhry Dhram Kanta, Govindgarh Road, Ramgarh, Alwar (Raj.)</span>
//             </div>
//             <div className="flex items-center gap-2 text-gray-300">
//               <Phone className="h-5 w-5 text-blue-400" aria-hidden="true" />
//               <a href={`tel:+91${whatsappNumber}`} className="hover:text-blue-400 transition-colors text-base md:text-lg" aria-label="Call us">
//                 +91 87082 75179
//               </a>
//             </div>
//           </motion.div>

//           {/* Action Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
//             className="flex flex-wrap justify-center gap-4 mb-2"
//           >
//             <Link to="/quote" aria-label="Request a Quote">
//               <motion.button
//                 whileHover={{ scale: 1.07, boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)" }}
//                 whileTap={{ scale: 0.97 }}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 flex items-center gap-2"
//               >
//                 <FileText className="h-5 w-5" /> Request Quote
//               </motion.button>
//             </Link>
//             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
//               <motion.button
//                 whileHover={{ scale: 1.07, boxShadow: "0 8px 25px rgba(16, 185, 129, 0.3)" }}
//                 whileTap={{ scale: 0.97 }}
//                 className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 flex items-center gap-2"
//               >
//                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.445.099-.149.099-.347-.025-.496-.124-.149-.546-.694-.892-1.04-.346-.347-.669-.347-.966-.347-.297 0-.496.099-.669.297-.173.198-.669.793-.669 1.937 0 1.144.793 2.258.892 2.406.099.149 1.427 2.159 3.465 3.028.495.223.892.396 1.238.495.347.099.644.099.842.05.297-.099.892-.396 1.04-.694.149-.297.297-.595.297-.892 0-.297-.124-.496-.421-.645zM12 1.5C6.201 1.5 1.5 6.201 1.5 12c0 1.834.474 3.557 1.304 5.07L1.5 21l3.96-1.287A10.46 10.46 0 0012 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5z" />
//                 </svg>
//                 WhatsApp Us
//               </motion.button>
//             </a>
//             <Link to="/products" aria-label="View Our Products">
//               <motion.button
//                 whileHover={{ scale: 1.07, boxShadow: "0 8px 25px rgba(59, 130, 246, 0.2)" }}
//                 whileTap={{ scale: 0.97 }}
//                 className="bg-transparent border-2 border-blue-600 text-blue-400 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-600/10 transition-all duration-300 flex items-center gap-2"
//               >
//                 <ShoppingCart className="h-5 w-5" /> Our Products
//               </motion.button>
//             </Link>
//           </motion.div>

//           {/* Trust Indicators */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
//             className="mt-10 flex flex-wrap justify-center gap-6 md:gap-12"
//             aria-label="Trust Indicators"
//           >
//             <div className="flex items-center gap-3 text-gray-200">
//               <div className="bg-blue-600/20 p-3 rounded-full">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-blue-400"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </div>
//               <span className="text-lg font-medium">Quality Assured</span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-200">
//               <div className="bg-blue-600/20 p-3 rounded-full">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-blue-400"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </div>
//               <span className="text-lg font-medium">On-time Delivery</span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-200">
//               <div className="bg-blue-600/20 p-3 rounded-full">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-blue-400"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
//                   />
//                 </svg>
//               </div>
//               <span className="text-lg font-medium">Competitive Prices</span>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Down Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
//         onClick={scrollToNextSection}
//         aria-label="Scroll to next section"
//       >
//         <div className="flex flex-col items-center">
//           <span className="text-gray-200 text-lg font-medium mb-2">Discover More</span>
//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
//           >
//             <ChevronDown className="h-8 w-8 text-blue-400" aria-hidden="true" />
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Floating WhatsApp Button */}
//       <FloatingWhatsApp />
//     </section>
//   );
// }


//////////////2nd version


// import React, { useState, useEffect } from "react";
// import { ChevronDown, Phone, MapPin, ShoppingCart, FileText, Award, Users, Clock, Shield, Star, Menu, X } from "lucide-react";

// // Sample steel images - replace with actual images
// const steelImages = [
//   "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
//   "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
//   "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
// ];

// // Mobile Navigation Component
// const MobileNav = ({ isOpen, toggleNav }) => {
//   return (
//     <div className={`fixed inset-0 z-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
//       <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleNav} />
//       <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-lg border-l border-slate-700 transform transition-transform duration-300">
//         <div className="flex justify-between items-center p-6 border-b border-slate-700">
//           <h2 className="text-xl font-bold text-white">Menu</h2>
//           <button onClick={toggleNav} className="text-gray-400 hover:text-white">
//             <X className="h-6 w-6" />
//           </button>
//         </div>
//         <nav className="p-6 space-y-4">
//           <a href="#home" className="block text-gray-300 hover:text-blue-400 transition-colors py-2">Home</a>
//           <a href="#products" className="block text-gray-300 hover:text-blue-400 transition-colors py-2">Products</a>
//           <a href="#about" className="block text-gray-300 hover:text-blue-400 transition-colors py-2">About</a>
//           <a href="#services" className="block text-gray-300 hover:text-blue-400 transition-colors py-2">Services</a>
//           <a href="#contact" className="block text-gray-300 hover:text-blue-400 transition-colors py-2">Contact</a>
//         </nav>
//       </div>
//     </div>
//   );
// };

// // Floating WhatsApp Button
// const FloatingWhatsApp = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const whatsappNumber = "8708275179";
//   const whatsappLink = `https://wa.me/91${whatsappNumber}?text=Hello%20Sawariya%20Traders,%20I'm%20interested%20in%20your%20steel%20products!`;

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
//       <a
//         href={whatsappLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="group flex items-center bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
//       >
//         <div className="flex items-center px-4 py-3">
//           <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.445.099-.149.099-.347-.025-.496-.124-.149-.546-.694-.892-1.04-.346-.347-.669-.347-.966-.347-.297 0-.496.099-.669.297-.173.198-.669.793-.669 1.937 0 1.144.793 2.258.892 2.406.099.149 1.427 2.159 3.465 3.028.495.223.892.396 1.238.495.347.099.644.099.842.05.297-.099.892-.396 1.04-.694.149-.297.297-.595.297-.892 0-.297-.124-.496-.421-.645zM12 1.5C6.201 1.5 1.5 6.201 1.5 12c0 1.834.474 3.557 1.304 5.07L1.5 21l3.96-1.287A10.46 10.46 0 0012 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5z" />
//           </svg>
//           <span className="font-semibold text-sm whitespace-nowrap">WhatsApp</span>
//         </div>
//         <div className="w-0 group-hover:w-2 bg-green-500 h-12 rounded-r-full transition-all duration-300"></div>
//       </a>
//     </div>
//   );
// };

// // Stats Component
// const StatsSection = () => {
//   const stats = [
//     { icon: Award, label: "Years Experience", value: "19+" },
//     { icon: Users, label: "Happy Clients", value: "500+" },
//     { icon: Clock, label: "On-time Delivery", value: "98%" },
//     { icon: Shield, label: "Quality Assured", value: "100%" }
//   ];

//   return (
//     <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-8 lg:mt-12">
//       {stats.map((stat, index) => (
//         <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 lg:p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
//           <stat.icon className="h-6 w-6 lg:h-8 lg:w-8 text-blue-400 mx-auto mb-2" />
//           <div className="text-xl lg:text-2xl font-bold text-white mb-1">{stat.value}</div>
//           <div className="text-xs lg:text-sm text-gray-300">{stat.label}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// // Main Hero Component
// export default function HeroSection() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % steelImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const scrollToNextSection = () => {
//     window.scrollTo({
//       top: window.innerHeight,
//       behavior: "smooth",
//     });
//   };

//   const toggleNav = () => setIsNavOpen(!isNavOpen);

//   const whatsappNumber = "8708275179";
//   const whatsappLink = `https://wa.me/91${whatsappNumber}?text=Hello%20Sawariya%20Traders,%20I'm%20interested%20in%20your%20steel%20products!`;

//   return (
//     <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
//       {/* Background Image Carousel */}
//       <div className="absolute inset-0 z-0">
//         {steelImages.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-2000 ${index === currentImageIndex ? 'opacity-30' : 'opacity-0'}`}
//           >
//             <img
//               src={image}
//               alt={`Steel products ${index + 1}`}
//               className="w-full h-full object-cover"
//               loading={index === 0 ? "eager" : "lazy"}
//             />
//           </div>
//         ))}
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-slate-800/90" />
//       </div>

//       {/* Navigation */}
//       <nav className="relative z-30 container mx-auto px-4 lg:px-8 py-6">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-lg">S</span>
//             </div>
//             <div>
//               <h1 className="text-xl lg:text-2xl font-bold text-white">Sawariya Traders</h1>
//               <p className="text-xs text-gray-300 hidden sm:block">Premium Steel Solutions</p>
//             </div>
//           </div>
          
//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
//             <a href="#products" className="text-gray-300 hover:text-blue-400 transition-colors">Products</a>
//             <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
//             <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a>
//             <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleNav}
//             className="lg:hidden text-gray-300 hover:text-white transition-colors"
//           >
//             <Menu className="h-6 w-6" />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Navigation */}
//       <MobileNav isOpen={isNavOpen} toggleNav={toggleNav} />

//       {/* Hero Content */}
//       <div className="relative z-20 container mx-auto px-4 lg:px-8 pt-8 lg:pt-16 pb-20">
//         <div className="max-w-6xl mx-auto">
//           {/* Trust Badge */}
//           <div className="text-center mb-8">
//             <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-md px-4 lg:px-6 py-2 lg:py-3 rounded-full border border-blue-500/30">
//               <Star className="h-4 w-4 text-yellow-400 mr-2" />
//               <span className="text-blue-200 font-medium text-sm lg:text-base">
//                 Trusted Steel Supplier Since 2005
//               </span>
//             </div>
//           </div>

//           {/* Main Heading */}
//           <div className="text-center mb-8 lg:mb-12">
//             <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black mb-4 lg:mb-6 leading-tight text-white">
//               <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
//                 SAWARIYA
//               </span>
//               <span className="block text-blue-400">TRADERS</span>
//             </h1>
//             <p className="text-lg lg:text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto">
//               Premium Steel for Construction & Industry
//             </p>
//           </div>

//           {/* Description */}
//           <div className="text-center mb-8 lg:mb-12">
//             <p className="text-base lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//               Your trusted partner for premium quality steel products. We provide comprehensive solutions for construction and industrial applications with guaranteed reliability and competitive pricing.
//             </p>
//           </div>

//           {/* Contact Information */}
//           <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 mb-8 lg:mb-12">
//             <div className="flex items-center gap-3 text-gray-300">
//               <div className="bg-blue-600/20 p-2 rounded-full">
//                 <MapPin className="h-5 w-5 text-blue-400" />
//               </div>
//               <span className="text-sm lg:text-base">Ramgarh, Alwar, Rajasthan</span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-300">
//               <div className="bg-blue-600/20 p-2 rounded-full">
//                 <Phone className="h-5 w-5 text-blue-400" />
//               </div>
//               <a href={`tel:+91${whatsappNumber}`} className="hover:text-blue-400 transition-colors text-sm lg:text-base">
//                 +91 87082 75179
//               </a>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 lg:mb-16">
//             <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-sm lg:text-base shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
//               <FileText className="h-4 w-4 lg:h-5 lg:w-5" />
//               Request Quote
//             </button>
//             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
//               <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-sm lg:text-base shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
//                 <svg className="h-4 w-4 lg:h-5 lg:w-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.445.099-.149.099-.347-.025-.496-.124-.149-.546-.694-.892-1.04-.346-.347-.669-.347-.966-.347-.297 0-.496.099-.669.297-.173.198-.669.793-.669 1.937 0 1.144.793 2.258.892 2.406.099.149 1.427 2.159 3.465 3.028.495.223.892.396 1.238.495.347.099.644.099.842.05.297-.099.892-.396 1.04-.694.149-.297.297-.595.297-.892 0-.297-.124-.496-.421-.645zM12 1.5C6.201 1.5 1.5 6.201 1.5 12c0 1.834.474 3.557 1.304 5.07L1.5 21l3.96-1.287A10.46 10.46 0 0012 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5z" />
//                 </svg>
//                 WhatsApp Us
//               </button>
//             </a>
//             <button className="w-full sm:w-auto bg-transparent border-2 border-blue-600 text-blue-400 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-sm lg:text-base hover:bg-blue-600/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
//               <ShoppingCart className="h-4 w-4 lg:h-5 lg:w-5" />
//               Our Products
//             </button>
//           </div>

//           {/* Stats Section */}
//           <StatsSection />
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
//         <button
//           onClick={scrollToNextSection}
//           className="flex flex-col items-center text-gray-300 hover:text-blue-400 transition-colors group"
//         >
//           <span className="text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
//             Explore More
//           </span>
//           <div className="animate-bounce">
//             <ChevronDown className="h-6 w-6" />
//           </div>
//         </button>
//       </div>

//       {/* Image Indicators */}
//       <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
//         {steelImages.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentImageIndex(index)}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${
//               index === currentImageIndex ? 'bg-blue-400 w-8' : 'bg-gray-500 hover:bg-gray-400'
//             }`}
//           />
//         ))}
//       </div>

//       {/* Floating WhatsApp Button */}
//       <FloatingWhatsApp />
//     </section>
//   );
// }

///////
// 
