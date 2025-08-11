"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  Check, 
  Info, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  Phone, 
  ShoppingCart, 
  Heart,
  Share2,
  Download,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "../common/WhatsAppButton";

export default function ProductDetail({ product = {} }) {
  const {
    gallery = [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    name = "Premium Industrial Equipment",
    rating = 4.7,
    totalRatings = 253,
    price = "₹1,45,000",
    description = "High-quality industrial equipment designed for maximum efficiency and durability. Perfect for manufacturing facilities and production lines.",
    specs = [
      { name: "Material", value: "Stainless Steel" },
      { name: "Dimensions", value: "120 x 80 x 60 cm" },
      { name: "Power", value: "220V, 2000W" },
      { name: "Weight", value: "78 kg" },
      { name: "Warranty", value: "2 Years" },
      { name: "Certification", value: "ISO 9001, CE" },
    ],
    manufacturers = [
      { name: "Industrial Solutions Inc.", logo: "/logo1.svg" },
      { name: "Quality Machinery Co.", logo: "/logo2.svg" }
    ],
    longDescription = "This premium industrial equipment is engineered to deliver outstanding performance in demanding environments. Featuring robust construction and advanced technology, it ensures reliable operation with minimal maintenance. The ergonomic design improves operator comfort and productivity, while innovative safety features protect your workforce. Designed for versatility, this equipment can be integrated into various production setups and workflows.",
    features = [
      "Durable stainless steel construction",
      "Advanced digital control panel",
      "Energy-efficient operation",
      "Low maintenance requirements",
      "Comprehensive safety features",
      "Smart connectivity options"
    ],
    applications = [
      "Manufacturing facilities",
      "Production lines",
      "Assembly operations",
      "Processing plants",
      "Packaging facilities"
    ],
    availability = "In Stock",
    deliveryTime = "5-7 business days",
  } = product;

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const nextImage = () => {
    setActiveImage((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleAddToWishlist = () => {
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const handleRequestQuote = () => {
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  useEffect(() => {
    // Auto-rotate images every 5 seconds
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-blue-600 mb-6">
          <Link to="/" className="hover:text-blue-800 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/products" className="hover:text-blue-800 transition-colors">
            Products
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-blue-800 font-medium">{name}</span>
        </div>

        {/* Main Product Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Product Images Section */}
            <div className="p-6 border-r border-blue-100">
              <div className="relative aspect-square bg-white rounded-lg overflow-hidden mb-6 border border-blue-200">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={gallery[activeImage] || "/placeholder.svg"}
                    alt={`${name} image ${activeImage + 1}`}
                    className="w-full h-full object-contain"
                  />
                </AnimatePresence>

                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-blue-600 hover:text-white p-2 rounded-full shadow-md transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-blue-600 hover:text-white p-2 rounded-full shadow-md transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Image number indicator */}
                <div className="absolute bottom-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  {activeImage + 1}/{gallery.length}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-3 overflow-x-auto pb-2 justify-center">
                {gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden transition-all ${
                      activeImage === index 
                        ? "border-2 border-blue-600 ring-2 ring-blue-200" 
                        : "border border-blue-200 hover:border-blue-400"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Additional actions */}
              <div className="flex justify-center gap-4 mt-6">
                <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm transition-colors">
                  <Share2 className="h-4 w-4" /> Share
                </button>
                <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm transition-colors">
                  <Download className="h-4 w-4" /> Download Specs
                </button>
              </div>
            </div>

            {/* Product Info Section */}
            <div className="p-6">
              <div className="border-b border-blue-100 pb-6 mb-6">
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                  {availability}
                </div>
                <h1 className="text-3xl font-bold text-blue-800 mb-2">{name}</h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-blue-700">
                    {rating} ({totalRatings} reviews)
                  </span>
                </div>

                <p className="text-2xl font-semibold text-blue-700 mb-4">{price}</p>

                <p className="text-blue-600 mb-6">{description}</p>

                {/* Delivery Info */}
                <div className="flex items-center gap-2 text-sm text-blue-600 mb-4">
                  <Info className="h-4 w-4" />
                  <span>Delivery: {deliveryTime}</span>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-blue-700 font-medium">Quantity:</span>
                  <div className="flex border border-blue-200 rounded-md overflow-hidden">
                    <button 
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      className="px-3 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 flex items-center justify-center min-w-[40px]">
                      {quantity}
                    </span>
                    <button 
                      onClick={() => setQuantity(prev => prev + 1)}
                      className="px-3 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Key Specifications */}
              <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-800 mb-2">Key Specifications:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {specs.slice(0, 6).map((spec, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <span className="font-medium text-blue-700">{spec.name}:</span>{" "}
                        <span className="text-blue-600">{spec.value}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleRequestQuote}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors shadow-md flex items-center gap-2"
                >
                  Request Quote <ArrowRight className="h-4 w-4" />
                </motion.button>

                <WhatsAppButton className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors shadow-md flex items-center gap-2" />

                <a
                  href="tel:+919053719053"
                  className="border border-blue-200 bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" /> Call for Inquiry
                </a>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddToWishlist}
                  className="border border-blue-200 bg-white text-blue-700 p-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Detailed Info Tabs */}
          <div className="border-t border-blue-100">
            <div className="flex overflow-x-auto">
              {["description", "features", "applications", "manufacturers"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab
                      ? "text-blue-700 border-b-2 border-blue-600"
                      : "text-blue-500 hover:text-blue-700"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="p-6">
              {activeTab === "description" && (
                <div className="prose max-w-none text-blue-700">
                  <p>{longDescription}</p>
                </div>
              )}

              {activeTab === "features" && (
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-blue-700">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "applications" && (
                <ul className="space-y-2">
                  {applications.map((application, index) => (
                    <li key={index} className="flex items-start gap-2 text-blue-700">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span>{application}</span>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "manufacturers" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {manufacturers.map((manufacturer, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border border-blue-100 rounded-lg">
                      <div className="w-16 h-16 bg-blue-50 rounded-md flex items-center justify-center">
                        <img
                          src={manufacturer.logo || "/placeholder.svg"}
                          alt={manufacturer.name}
                          className="max-w-full max-h-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-800">{manufacturer.name}</h4>
                        <p className="text-sm text-blue-600">Official Partner</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(4).fill().map((_, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-blue-500"
              >
                <div className="aspect-square bg-blue-50 relative">
                  <img
                    src="/placeholder.svg"
                    alt={`Related product ${index + 1}`}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-blue-800">Related Product {index + 1}</h3>
                  <div className="flex items-center gap-1 my-1">
                    {Array(5).fill().map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                    ))}
                  </div>
                  <p className="text-blue-600 font-medium mb-3">₹{(80000 + index * 15000).toLocaleString()}</p>
                  <button className="w-full bg-blue-100 text-blue-700 rounded py-2 text-sm font-medium hover:bg-blue-200 transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {showSuccessToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50"
          >
            <Check className="h-5 w-5" />
            <span>Your request has been submitted successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}