"use client"
import React, { useState, useEffect } from "react"
import { Award, ShieldCheck, Truck, DollarSign, CheckCircle, Users, ChevronLeft, ChevronRight, Star, ArrowRight, Phone, Mail, Menu, X, Building2, Target, Clock, MapPin, Zap, Trophy } from "lucide-react"

// Mock Link component for demonstration - replace with actual React Router Link
const Link = ({ to, children, className, ...props }) => (
  <a href={to} className={className} {...props}>
    {children}
  </a>
)

const reasons = [
  {
    icon: <Building2 className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-blue-600" />,
    title: "Leading TMT Rebar Stockists",
    description: "Authorized distributor of JSW Neo Steel (U.P) with comprehensive stock of TMT Rebars across India in all required sizes.",
    stat: "Pan India",
    color: "blue",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-emerald-600" />,
    title: "Premium Steel Brands",
    description: "We deal with top brands: SAIL, TATA, JSW, JINDAL PANTHER ensuring highest quality and reliability standards.",
    stat: "Top Brands",
    color: "emerald",
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    icon: <Users className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-purple-600" />,
    title: "Industrial & Construction Focus",
    description: "Specialized in serving various industrial and construction applications with tailored steel solutions.",
    stat: "Specialized",
    color: "purple",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: <Target className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-orange-600" />,
    title: "Complete Steel Range",
    description: "Full & Short Length TMT Rebars, Angles, Girders, Channels, Square Bars, Plates, Pipes, Sheets available.",
    stat: "Complete Range",
    color: "orange",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: <DollarSign className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-green-600" />,
    title: "Secondary Steel Products",
    description: "We provide RASHMI, RATHI, KAMDHENU, JINDAL, PRIME GOLD, SWROOP, RANA, K.L, CENTURY brands.",
    stat: "Secondary Steel",
    color: "green",
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-indigo-600" />,
    title: "Pan India Supply Network",
    description: "Strategic locations in Delhi, Ghaziabad with supply network covering entire India for timely deliveries.",
    stat: "Pan India",
    color: "indigo",
    gradient: "from-indigo-500 to-indigo-600"
  },
]

const productImages = [
  {
    url: "https://ik.imagekit.io/xzjipji0j/MS%20pipe%203.0.jpg?updatedAt=1752817306895",
    title: "TMT Rebars Full Length",
    description: "Premium TMT Rebars from SAIL, TATA, JSW brands",
    category: "TMT Rebars"
  },
  {
    url: "https://ik.imagekit.io/xzjipji0j/MS%20Pipe%20Steel%20.jpg?updatedAt=1752817306534",
    title: "Steel Pipes & Channels",
    description: "Industrial grade pipes and structural channels",
    category: "Structural Steel"
  },
  {
    url: "https://ik.imagekit.io/xzjipji0j/MS%20Sheet%20Steel.jpg?updatedAt=1752817306502",
    title: "Steel Plates & Sheets",
    description: "High-quality steel plates for industrial applications",
    category: "Plates & Sheets"
  },
  {
    url: "https://ik.imagekit.io/xzjipji0j/2mm%20MS%20Sheet.jpg?updatedAt=1753072192718",
    title: "Angles & Square Bars",
    description: "Precision engineered angles and square bars",
    category: "Angles & Bars"
  },
  {
    url: "https://ik.imagekit.io/xzjipji0j/MS%20pipe%202.jpg?updatedAt=1752817334875",
    title: "Secondary Steel Products",
    description: "RASHMI, RATHI, KAMDHENU and other secondary brands",
    category: "Secondary Steel"
  },
  {
    url: "https://ik.imagekit.io/xzjipji0j/ms%20sheet.png?updatedAt=1752817306273",
    title: "Girders & Structural Steel",
    description: "Heavy duty girders for construction projects",
    category: "Girders"
  },
  {
    url: "https://ik.imagekit.io/xzjipji0j/ms%20pipe%205.png?updatedAt=1752817306520",
    title: "Industrial Applications",
    description: "Specialized steel products for industrial use",
    category: "Industrial"
  }
]

const stats = [
  { number: "Pan India", label: "Supply Network", icon: <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />, color: "blue" },
  { number: "JSW", label: "Authorized Distributor", icon: <Award className="h-4 w-4 sm:h-5 sm:w-5" />, color: "emerald" },
  { number: "All Sizes", label: "TMT Rebars Available", icon: <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />, color: "purple" },
  { number: "24/7", label: "Customer Support", icon: <Phone className="h-4 w-4 sm:h-5 sm:w-5" />, color: "orange" }
]

const locations = [
  "D-1/115 Phase-2, Mayapuri Industrial Area, New Delhi-110064",
  "KHASRA NO. - 634, Hiran Kudna Village, Muneka, New Delhi - 110041",
  "E-126, Bulandshahr Road, Loha Mandi, Industrial Area, Ghaziabad, UP-201009"
]

const features = [
  { icon: <Clock className="h-5 w-5" />, text: "Quick Delivery" },
  { icon: <Trophy className="h-5 w-5" />, text: "Quality Assured" },
  { icon: <Zap className="h-5 w-5" />, text: "Competitive Pricing" },
  { icon: <MapPin className="h-5 w-5" />, text: "Pan India Service" }
]

export default function WhyChooseUs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }))
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-40 sm:h-40 lg:w-60 lg:h-60 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          id="header"
          data-animate
        >
          <div className={`inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-100/80 to-indigo-100/80 backdrop-blur-sm text-blue-800 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full text-xs sm:text-sm lg:text-base font-medium mb-4 sm:mb-6 shadow-lg border border-blue-200/50 transition-all duration-700 ${isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 fill-current animate-spin" style={{animationDuration: '3s'}} />
            <span className="whitespace-nowrap">Leading TMT Rebar Stockists in India</span>
            <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 fill-current animate-spin" style={{animationDuration: '3s', animationDirection: 'reverse'}} />
          </div>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 text-slate-800 leading-tight px-2 sm:px-4 transition-all duration-700 delay-200 ${isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Why Choose
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent block sm:inline animate-gradient">
              {" "}Hariom Steel Infra
            </span>
          </h2>
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6 transition-all duration-700 delay-400 ${isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Authorized distributor of JSW Neo Steel (U.P) with comprehensive supply network across India, 
            delivering premium TMT rebars and steel products for industrial and construction applications with unmatched quality and reliability.
          </p>
          
          {/* Feature Pills */}
          <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mt-6 sm:mt-8 transition-all duration-700 delay-600 ${isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm text-slate-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-md border border-slate-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="text-blue-600">
                  {feature.icon}
                </div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-6 xl:p-8 text-center shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 lg:hover:-translate-y-3 group cursor-pointer transform`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className={`bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200 p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                {stat.icon}
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-slate-800 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">{stat.number}</div>
              <div className="text-xs sm:text-sm lg:text-base text-slate-600 font-medium leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid - Enhanced */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Enhanced Image Gallery */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-3 sm:p-4 lg:p-6 border border-white/50 hover:shadow-3xl transition-all duration-500">
              <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[28rem] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 shadow-inner">
                {/* Main Image */}
                <div className="relative h-full group">
                  <img
                    src={productImages[currentImageIndex].url}
                    alt={productImages[currentImageIndex].title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    onMouseEnter={() => !isMobile && setIsAutoPlaying(false)}
                    onMouseLeave={() => !isMobile && setIsAutoPlaying(true)}
                  />
                  
                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
                  
                  {/* Animated Category Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6">
                    <div className="bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm lg:text-base font-medium shadow-lg border border-white/20 animate-pulse">
                      {productImages[currentImageIndex].category}
                    </div>
                  </div>
                  
                  {/* Enhanced Image Info */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 lg:bottom-6 lg:left-6 text-white max-w-[calc(100%-6rem)] sm:max-w-[calc(100%-8rem)]">
                    <h3 className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold mb-1 sm:mb-2 line-clamp-2 leading-tight">{productImages[currentImageIndex].title}</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 line-clamp-2 leading-tight opacity-90">{productImages[currentImageIndex].description}</p>
                  </div>
                  
                  {/* Enhanced Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-3 lg:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 sm:p-3 lg:p-4 transition-all hover:scale-110 group-hover:shadow-xl touch-manipulation border border-white/20"
                  >
                    <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white group-hover:text-blue-200" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-3 lg:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 sm:p-3 lg:p-4 transition-all hover:scale-110 group-hover:shadow-xl touch-manipulation border border-white/20"
                  >
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white group-hover:text-blue-200" />
                  </button>
                </div>
                
                {/* Enhanced Dot Indicators */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6 flex gap-1 sm:gap-2">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all touch-manipulation border border-white/30 ${
                        currentImageIndex === index 
                          ? "bg-white scale-125 shadow-lg" 
                          : "bg-white/50 hover:bg-white/70 hover:scale-110"
                      }`}
                    />
                  ))}
                </div>

                {/* Auto-play indicator */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6">
                  <div className={`w-2 h-2 sm:w-3 sm:h-3 bg-white/60 rounded-full transition-all ${isAutoPlaying ? 'animate-pulse' : 'opacity-40'}`}></div>
                </div>
              </div>
              
              {/* Enhanced Thumbnail Strip */}
              <div className="flex gap-2 sm:gap-3 lg:gap-4 mt-4 sm:mt-5 lg:mt-6 overflow-x-auto pb-2 scrollbar-hide">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden border-2 transition-all hover:scale-105 touch-manipulation shadow-md ${
                      currentImageIndex === index 
                        ? "border-blue-500 shadow-lg scale-105 ring-2 ring-blue-200" 
                        : "border-gray-200 hover:border-blue-300 hover:shadow-lg"
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Enhanced Quality Badge */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full shadow-2xl border-2 border-white animate-bounce" style={{animationDuration: '3s'}}>
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 fill-current text-yellow-300 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <span className="text-xs sm:text-sm lg:text-base font-bold whitespace-nowrap">JSW Authorized</span>
              </div>
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 order-1 lg:order-2">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-slate-800 leading-tight">
                Premium TMT Rebars & 
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent block sm:inline animate-gradient">
                  {" "}Steel Solutions
                </span>
              </h3>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-8">
                As authorized distributor of JSW Neo Steel, we specialize in TMT Rebars (Full Length & Short Length) 
                from premium brands including SAIL, TATA, JSW, and JINDAL PANTHER for industrial and construction applications 
                with guaranteed quality and competitive pricing.
              </p>
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 p-4 sm:p-5 lg:p-6 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl flex-shrink-0 shadow-md">
                  <Building2 className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm sm:text-base lg:text-lg">JSW Authorized Distributor</div>
                  <div className="text-xs sm:text-sm lg:text-base text-slate-600">Premium Steel Brands Available Nationwide</div>
                </div>
              </div>
            </div>

            {/* Enhanced Key Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
              {reasons.slice(0, 4).map((reason, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animation: `slideInLeft 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`bg-gradient-to-br ${reason.gradient.replace('from-', 'from-').replace('to-', 'to-')}-100 to-${reason.color}-200 p-2 sm:p-3 rounded-lg sm:rounded-xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                      {reason.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-xs sm:text-sm font-bold text-${reason.color}-600 mb-1 sm:mb-2 uppercase tracking-wider`}>{reason.stat}</div>
                      <h4 className="font-bold text-slate-800 text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">{reason.title}</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed line-clamp-3">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 pt-4 sm:pt-6">
              <Link 
                to="/products" 
                className="group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 sm:hover:-translate-y-2 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg touch-manipulation relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="whitespace-nowrap relative z-10">Explore Steel Products</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
              <Link 
                to="/quote" 
                className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold transition-all hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg touch-manipulation relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <span className="whitespace-nowrap relative z-10">Get Instant Quote</span>
                <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:scale-110 transition-transform relative z-10" />
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced Reasons Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
          id="reasons-grid"
          data-animate
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 lg:hover:-translate-y-4 group cursor-pointer relative overflow-hidden ${isVisible['reasons-grid'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                transitionDelay: `${index * 0.1}s`
              }}
              onMouseEnter={() => setHoveredCard(index + 4)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl sm:rounded-3xl`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`bg-gradient-to-br from-${reason.color}-100 via-${reason.color}-200 to-${reason.color}-300 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl border border-white/30`}>
                  {reason.icon}
                </div>
                <div className={`text-xs sm:text-sm font-bold text-${reason.color}-600 mb-2 sm:mb-3 uppercase tracking-wider`}>{reason.stat}</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">{reason.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">{reason.description}</p>
                
                {/* Hover indicator */}
                <div className={`absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r ${reason.gradient} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0`}>
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div 
          className="text-center"
          id="bottom-cta"
          data-animate
        >
          <div className={`bg-gradient-to-r from-white/90 via-blue-50/90 to-indigo-50/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl lg:rounded-[3rem] shadow-2xl p-6 sm:p-8 lg:p-12 xl:p-16 border border-white/50 relative overflow-hidden transition-all duration-700 ${isVisible['bottom-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/5 via-indigo-600/5 to-purple-600/5 rounded-2xl sm:rounded-3xl lg:rounded-[3rem]"></div>
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-100/80 to-indigo-100/80 backdrop-blur-sm text-blue-800 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full text-xs sm:text-sm lg:text-base font-bold mb-6 sm:mb-8 shadow-lg border border-blue-200/50 animate-bounce" style={{animationDuration: '3s'}}>
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                <span className="whitespace-nowrap">Get Started Today - Call Now!</span>
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 text-slate-800 leading-tight">
                Ready to Build with 
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent block sm:inline animate-gradient">
                  {" "}Premium Steel?
                </span>
              </h3>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
                Join thousands of industrial leaders who trust Hariom Steel Infra for their TMT rebar and steel requirements. 
                Get competitive quotes with our pan-India supply network, expert consultation, and guaranteed quality assurance.
              </p>
              
              {/* Enhanced Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto">
                <div className="flex items-center gap-4 p-4 sm:p-5 lg:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                  <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-3 sm:p-4 rounded-xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-blue-600" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="font-bold text-slate-800 text-sm sm:text-base lg:text-lg mb-1">Call Us Now</div>
                    <div className="text-xs sm:text-sm lg:text-base text-slate-600 font-medium">+91 93122 36954</div>
                    <div className="text-xs sm:text-sm lg:text-base text-slate-600 font-medium">+91 93122 40849</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 sm:p-5 lg:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                  <div className="bg-gradient-to-r from-emerald-100 to-emerald-200 p-3 sm:p-4 rounded-xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-emerald-600" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="font-bold text-slate-800 text-sm sm:text-base lg:text-lg mb-1">Email Us</div>
                    <div className="text-xs sm:text-sm lg:text-base text-slate-600 font-medium break-all">hariomsteelinfra@gmail.com</div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Branch Locations */}
              <div className="mb-8 sm:mb-10 lg:mb-12">
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-slate-700 mb-4 sm:mb-6 flex items-center justify-center gap-2">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  Our Strategic Locations Across India
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm lg:text-base text-slate-600">
                  {locations.map((location, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-md border border-blue-100/50 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Building2 className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="text-left leading-relaxed">{location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6 justify-center">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-8 sm:px-10 lg:px-12 xl:px-14 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-bold transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-2 flex items-center justify-center gap-3 text-base sm:text-lg lg:text-xl touch-manipulation relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 group-hover:rotate-12 transition-transform relative z-10" />
                  <span className="whitespace-nowrap relative z-10">Contact Us Today</span>
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 group-hover:translate-x-1 transition-transform relative z-10" />
                </Link>
                <Link 
                  to="/products" 
                  className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 sm:px-10 lg:px-12 xl:px-14 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-bold transition-all hover:shadow-xl flex items-center justify-center gap-3 text-base sm:text-lg lg:text-xl touch-manipulation relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 group-hover:rotate-180 transition-transform relative z-10" />
                  <span className="whitespace-nowrap relative z-10">View Steel Catalog</span>
                  <Trophy className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 group-hover:scale-110 transition-transform relative z-10" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes animate-gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: animate-gradient 3s ease-in-out infinite;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

// "use client"
// import React, { useState, useEffect } from "react"
// import { Award, ShieldCheck, Truck, DollarSign, CheckCircle, Users, ChevronLeft, ChevronRight, Star, ArrowRight, Phone, Mail, Menu, X, Building2, Target } from "lucide-react"

// // Mock Link component for demonstration - replace with actual React Router Link
// const Link = ({ to, children, className, ...props }) => (
//   <a href={to} className={className} {...props}>
//     {children}
//   </a>
// )

// const reasons = [
//   {
//     icon: <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
//     title: "Leading TMT Rebar Stockists",
//     description: "Authorized distributor of JSW Neo Steel (U.P) with comprehensive stock of TMT Rebars across India in all required sizes.",
//     stat: "Pan India",
//     color: "blue"
//   },
//   {
//     icon: <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600" />,
//     title: "Premium Steel Brands",
//     description: "We deal with top brands: SAIL, TATA, JSW, JINDAL PANTHER ensuring highest quality and reliability standards.",
//     stat: "Top Brands",
//     color: "emerald"
//   },
//   {
//     icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />,
//     title: "Industrial & Construction Focus",
//     description: "Specialized in serving various industrial and construction applications with tailored steel solutions.",
//     stat: "Specialized",
//     color: "purple"
//   },
//   {
//     icon: <Target className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />,
//     title: "Complete Steel Range",
//     description: "Full & Short Length TMT Rebars, Angles, Girders, Channels, Square Bars, Plates, Pipes, Sheets available.",
//     stat: "Complete Range",
//     color: "orange"
//   },
//   {
//     icon: <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
//     title: "Secondary Steel Products",
//     description: "We provide RASHMI, RATHI, KAMDHENU, JINDAL, PRIME GOLD, SWROOP, RANA, K.L, CENTURY brands.",
//     stat: "Secondary Steel",
//     color: "green"
//   },
//   {
//     icon: <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600" />,
//     title: "Pan India Supply Network",
//     description: "Strategic locations in Delhi, Ghaziabad with supply network covering entire India for timely deliveries.",
//     stat: "Pan India",
//     color: "indigo"
//   },
// ]

// const productImages = [
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/MS%20pipe%203.0.jpg?updatedAt=1752817306895",
//     title: "TMT Rebars Full Length",
//     description: "Premium TMT Rebars from SAIL, TATA, JSW brands",
//     category: "TMT Rebars"
//   },
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/MS%20Pipe%20Steel%20.jpg?updatedAt=1752817306534",
//     title: "Steel Pipes & Channels",
//     description: "Industrial grade pipes and structural channels",
//     category: "Structural Steel"
//   },
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/MS%20Sheet%20Steel.jpg?updatedAt=1752817306502",
//     title: "Steel Plates & Sheets",
//     description: "High-quality steel plates for industrial applications",
//     category: "Plates & Sheets"
//   },
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/2mm%20MS%20Sheet.jpg?updatedAt=1753072192718",
//     title: "Angles & Square Bars",
//     description: "Precision engineered angles and square bars",
//     category: "Angles & Bars"
//   },
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/MS%20pipe%202.jpg?updatedAt=1752817334875",
//     title: "Secondary Steel Products",
//     description: "RASHMI, RATHI, KAMDHENU and other secondary brands",
//     category: "Secondary Steel"
//   },
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/ms%20sheet.png?updatedAt=1752817306273",
//     title: "Girders & Structural Steel",
//     description: "Heavy duty girders for construction projects",
//     category: "Girders"
//   },
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/ms%20pipe%205.png?updatedAt=1752817306520",
//     title: "Industrial Applications",
//     description: "Specialized steel products for industrial use",
//     category: "Industrial"
//   }
// ]

// const stats = [
//   { number: "Pan India", label: "Supply Network", icon: <Building2 className="h-4 w-4 sm:h-5 sm:w-5" /> },
//   { number: "JSW", label: "Authorized Distributor", icon: <Award className="h-4 w-4 sm:h-5 sm:w-5" /> },
//   { number: "All Sizes", label: "TMT Rebars Available", icon: <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" /> },
//   { number: "24/7", label: "Customer Support", icon: <Phone className="h-4 w-4 sm:h-5 sm:w-5" /> }
// ]

// const locations = [
//   "D-1/115 Phase-2, Mayapuri Industrial Area, New Delhi-110064",
//   "KHASRA NO. - 634, Hiran Kudna Village, Muneka, New Delhi - 110041",
//   "E-126, Bulandshahr Road, Loha Mandi, Industrial Area, Ghaziabad, UP-201009"
// ]

// export default function WhyChooseUs() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)
//   const [hoveredCard, setHoveredCard] = useState(null)
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//     }
    
//     checkMobile()
//     window.addEventListener('resize', checkMobile)
//     return () => window.removeEventListener('resize', checkMobile)
//   }, [])

//   useEffect(() => {
//     if (!isAutoPlaying) return
    
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
//     }, 4000)
//     return () => clearInterval(interval)
//   }, [isAutoPlaying])

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
//     setIsAutoPlaying(false)
//     setTimeout(() => setIsAutoPlaying(true), 5000)
//   }

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
//     setIsAutoPlaying(false)
//     setTimeout(() => setIsAutoPlaying(true), 5000)
//   }

//   const goToImage = (index) => {
//     setCurrentImageIndex(index)
//     setIsAutoPlaying(false)
//     setTimeout(() => setIsAutoPlaying(true), 5000)
//   }

//   return (
//     <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 bg-blue-600 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-24 h-24 sm:w-40 sm:h-40 bg-indigo-600 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-60 sm:h-60 bg-purple-600 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
//         {/* Header */}
//         <div className="text-center mb-12 sm:mb-16">
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg border border-blue-200">
//             <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current animate-pulse" />
//             <span className="whitespace-nowrap">Leading TMT Rebar Stockists</span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-800 leading-tight px-4">
//             Why Choose
//             <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block sm:inline">
//               {" "}Hariom Steel Infra
//             </span>
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
//             Authorized distributor of JSW Neo Steel (U.P) with comprehensive supply network across India, 
//             delivering premium TMT rebars and steel products for industrial and construction applications.
//           </p>
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 group"
//             >
//               <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-2 sm:p-3 rounded-lg sm:rounded-xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform">
//                 {stat.icon}
//               </div>
//               <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-1 sm:mb-2">{stat.number}</div>
//               <div className="text-xs sm:text-sm text-slate-600 font-medium leading-tight">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-16 sm:mb-20">
//           {/* Enhanced Image Gallery */}
//           <div className="relative order-2 lg:order-1">
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-3 sm:p-4 md:p-6 border border-blue-100">
//               <div className="relative h-64 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 shadow-inner">
//                 {/* Main Image */}
//                 <div className="relative h-full group">
//                   <img
//                     src={productImages[currentImageIndex].url}
//                     alt={productImages[currentImageIndex].title}
//                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
//                     onMouseEnter={() => !isMobile && setIsAutoPlaying(false)}
//                     onMouseLeave={() => !isMobile && setIsAutoPlaying(true)}
//                   />
                  
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  
//                   {/* Category Badge */}
//                   <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-blue-600/90 backdrop-blur-sm text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
//                     {productImages[currentImageIndex].category}
//                   </div>
                  
//                   {/* Image Info */}
//                   <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-white max-w-[calc(100%-4rem)] sm:max-w-[calc(100%-8rem)]">
//                     <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-1 line-clamp-1">{productImages[currentImageIndex].title}</h3>
//                     <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 leading-tight">{productImages[currentImageIndex].description}</p>
//                   </div>
                  
//                   {/* Navigation Arrows */}
//                   <button
//                     onClick={prevImage}
//                     className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all hover:scale-110 group touch-manipulation"
//                   >
//                     <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-blue-200" />
//                   </button>
//                   <button
//                     onClick={nextImage}
//                     className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all hover:scale-110 group touch-manipulation"
//                   >
//                     <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-blue-200" />
//                   </button>
//                 </div>
                
//                 {/* Dot Indicators */}
//                 <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 flex gap-1 sm:gap-2">
//                   {productImages.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => goToImage(index)}
//                       className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all touch-manipulation ${
//                         currentImageIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>
              
//               {/* Thumbnail Strip */}
//               <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4 overflow-x-auto pb-2 scrollbar-hide">
//                 {productImages.map((image, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToImage(index)}
//                     className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all hover:scale-105 touch-manipulation ${
//                       currentImageIndex === index ? "border-blue-500 shadow-lg" : "border-gray-200 hover:border-blue-300"
//                     }`}
//                   >
//                     <img
//                       src={image.url}
//                       alt={image.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>
            
//             {/* Quality Badge */}
//             <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full shadow-xl border-2 border-white">
//               <div className="flex items-center gap-1 sm:gap-2">
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current text-yellow-300 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
//                   ))}
//                 </div>
//                 <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">JSW Authorized</span>
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
//             <div>
//               <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-slate-800 leading-tight">
//                 Premium TMT Rebars & 
//                 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block sm:inline">
//                   {" "}Steel Solutions
//                 </span>
//               </h3>
//               <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6">
//                 As authorized distributor of JSW Neo Steel, we specialize in TMT Rebars (Full Length & Short Length) 
//                 from premium brands including SAIL, TATA, JSW, and JINDAL PANTHER for industrial and construction applications.
//               </p>
//               <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl border border-blue-100">
//                 <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
//                   <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
//                 </div>
//                 <div>
//                   <div className="font-semibold text-slate-800 text-sm sm:text-base">JSW Authorized Distributor</div>
//                   <div className="text-xs sm:text-sm text-slate-600">Premium Steel Brands Available</div>
//                 </div>
//               </div>
//             </div>

//             {/* Key Features */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//               {reasons.slice(0, 4).map((reason, index) => (
//                 <div
//                   key={index}
//                   className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
//                   onMouseEnter={() => setHoveredCard(index)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                 >
//                   <div className="flex items-start gap-3">
//                     <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
//                       {reason.icon}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <div className="text-xs sm:text-sm font-bold text-blue-600 mb-1">{reason.stat}</div>
//                       <h4 className="font-semibold text-slate-800 text-sm sm:text-base mb-2 line-clamp-2">{reason.title}</h4>
//                       <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">{reason.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Enhanced CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//               <Link 
//                 to="/products" 
//                 className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
//               >
//                 <span className="whitespace-nowrap">Explore Steel Products</span>
//                 <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
//               </Link>
//               <Link 
//                 to="/quote" 
//                 className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
//               >
//                 <span className="whitespace-nowrap">Get Quote</span>
//                 <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Reasons Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
//           {reasons.map((reason, index) => (
//             <div
//               key={index}
//               className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 group cursor-pointer"
//               style={{
//                 animationDelay: `${index * 0.1}s`
//               }}
//             >
//               <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 sm:p-4 rounded-lg sm:rounded-xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
//                 {reason.icon}
//               </div>
//               <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wider">{reason.stat}</div>
//               <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">{reason.title}</h3>
//               <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{reason.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Enhanced Bottom CTA */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-blue-100 relative overflow-hidden">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-5">
//               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl sm:rounded-3xl"></div>
//             </div>
            
//             <div className="relative z-10">
//               <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
//                 <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
//                 <span className="whitespace-nowrap">Get Started Today</span>
//               </div>
//               <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-slate-800 leading-tight">
//                 Ready to Build with 
//                 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block sm:inline">
//                   {" "}Premium Steel?
//                 </span>
//               </h3>
//               <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
//                 Join industrial leaders who trust Hariom Steel Infra for their TMT rebar and steel requirements. 
//                 Get competitive quotes with our pan-India supply network and expert consultation.
//               </p>
              
//               {/* Contact Info */}
//               <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-6 sm:mb-8">
//                 <div className="flex items-center gap-3 text-slate-600 justify-center sm:justify-start">
//                   <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
//                     <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
//                   </div>
//                   <div className="text-center sm:text-left">
//                     <div className="font-semibold text-sm sm:text-base">Call Us Now</div>
//                     <div className="text-xs sm:text-sm">+91 93122 36954 | +91 93122 40849</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3 text-slate-600 justify-center sm:justify-start">
//                   <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
//                     <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
//                   </div>
//                   <div className="text-center sm:text-left">
//                     <div className="font-semibold text-sm sm:text-base">Email Us</div>
//                     <div className="text-xs sm:text-sm break-all">hariomsteelinfra@gmail.com</div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Branch Locations */}
//               <div className="mb-6 sm:mb-8">
//                 <h4 className="text-sm sm:text-base font-semibold text-slate-700 mb-3">Our Strategic Locations</h4>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs sm:text-sm text-slate-600">
//                   {locations.map((location, index) => (
//                     <div key={index} className="bg-blue-50/50 rounded-lg p-2 sm:p-3">
//                       {location}
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
//                 <Link 
//                   to="/contact" 
//                   className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
//                 >
//                   <span className="whitespace-nowrap">Contact Us Today</span>
//                   <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//                 <Link 
//                   to="/products" 
//                   className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
//                 >
//                   <span className="whitespace-nowrap">View Steel Catalog</span>
//                   <Star className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
// "use client"
// import React, { useState, useEffect } from "react"
// import { Award, ShieldCheck, Truck, DollarSign, CheckCircle, Users, ChevronLeft, ChevronRight, Star, ArrowRight, Phone, Mail, Menu, X } from "lucide-react"

// // Mock Link component for demonstration - replace with actual React Router Link
// const Link = ({ to, children, className, ...props }) => (
//   <a href={to} className={className} {...props}>
//     {children}
//   </a>
// )

// const reasons = [
//   {
//     icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
//     title: "18+ Years of Excellence",
//     description: "Since 2005, delivering unmatched expertise in steel supply for construction projects across India.",
//     stat: "18+ Years",
//     color: "blue"
//   },
//   {
//     icon: <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600" />,
//     title: "Certified Quality",
//     description: "100% genuine products with ISO and ISI certifications ensuring reliability and safety standards.",
//     stat: "ISO Certified",
//     color: "emerald"
//   },
//   {
//     icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />,
//     title: "Trusted by Industry Leaders",
//     description: "Preferred by 100+ top builders across Rajasthan for consistent quality and timely delivery.",
//     stat: "100+ Clients",
//     color: "purple"
//   },
//   {
//     icon: <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />,
//     title: "Swift Delivery",
//     description: "Timely deliveries to keep your projects on schedule with our efficient logistics network.",
//     stat: "On-Time",
//     color: "orange"
//   },
//   {
//     icon: <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
//     title: "Competitive Pricing",
//     description: "Premium quality steel at prices that fit your project budget without compromising quality.",
//     stat: "Best Price",
//     color: "green"
//   },
//   {
//     icon: <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600" />,
//     title: "Seismic-Ready Products",
//     description: "TMT bars designed for earthquake resistance and structural safety meeting all safety norms.",
//     stat: "Safety First",
//     color: "indigo"
//   },
// ]
// const productImages = [
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/MS%20pipe%203.0.jpg?updatedAt=1752817306895",
//     title: "MS Pipe Heavy Duty",
//     description: "Heavy duty mild steel pipes for construction",
//     category: "Pipes"
//   },
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/MS%20Pipe%20Steel%20.jpg?updatedAt=1752817306534",
//     title: "Steel Pipes Premium",
//     description: "Professional grade steel pipes",
//     category: "Pipes"
//   },
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/MS%20Sheet%20Steel.jpg?updatedAt=1752817306502",
//     title: "Steel Sheets Industrial",
//     description: "Premium steel sheets for industrial use",
//     category: "Sheets"
//   },
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/2mm%20MS%20Sheet.jpg?updatedAt=1753072192718",
//     title: "MS Sheet Commercial",
//     description: "High-quality mild steel sheets for construction",
//     category: "Sheets"
//   },
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/MS%20pipe%202.jpg?updatedAt=1752817334875",
//     title: "MS Pipe Standard",
//     description: "Standard MS Pipe for construction projects",
//     category: "Pipes"
//   },
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/ms%20sheet.png?updatedAt=1752817306273",
//     title: "MS Sheet Commercial",
//     description: "High-quality mild steel sheets for construction",
//     category: "Sheets"
//   },
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/ms%20pipe%205.png?updatedAt=1752817306520",
//     title: "MS Pipe Structural",
//     description: "Durable mild steel pipes for structural applications",
//     category: "Pipes"
//   }
// ]

// const stats = [
//   { number: "18+", label: "Years Experience", icon: <Award className="h-4 w-4 sm:h-5 sm:w-5" /> },
//   { number: "500+", label: "Projects Completed", icon: <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" /> },
//   { number: "100+", label: "Happy Clients", icon: <Users className="h-4 w-4 sm:h-5 sm:w-5" /> },
//   { number: "24/7", label: "Customer Support", icon: <Phone className="h-4 w-4 sm:h-5 sm:w-5" /> }
// ]

// export default function WhyChooseUs() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)
//   const [hoveredCard, setHoveredCard] = useState(null)
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//     }
    
//     checkMobile()
//     window.addEventListener('resize', checkMobile)
//     return () => window.removeEventListener('resize', checkMobile)
//   }, [])

//   useEffect(() => {
//     if (!isAutoPlaying) return
    
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
//     }, 4000)
//     return () => clearInterval(interval)
//   }, [isAutoPlaying])

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
//     setIsAutoPlaying(false)
//     setTimeout(() => setIsAutoPlaying(true), 5000)
//   }

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
//     setIsAutoPlaying(false)
//     setTimeout(() => setIsAutoPlaying(true), 5000)
//   }

//   const goToImage = (index) => {
//     setCurrentImageIndex(index)
//     setIsAutoPlaying(false)
//     setTimeout(() => setIsAutoPlaying(true), 5000)
//   }

//   return (
//     <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 bg-blue-600 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-24 h-24 sm:w-40 sm:h-40 bg-indigo-600 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-60 sm:h-60 bg-purple-600 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
//         {/* Header */}
//         <div className="text-center mb-12 sm:mb-16">
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg border border-blue-200">
//             <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current animate-pulse" />
//             <span className="whitespace-nowrap">Industry Leading Steel Supplier</span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-800 leading-tight px-4">
//             Why Choose
//             <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block sm:inline">
//               {" "}Sawariya Traders
//             </span>
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
//             With over 18 years of expertise, we're Rajasthan's most trusted steel supplier, 
//             delivering certified quality and reliability to builders and contractors nationwide.
//           </p>
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 group"
//             >
//               <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-2 sm:p-3 rounded-lg sm:rounded-xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform">
//                 {stat.icon}
//               </div>
//               <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-1 sm:mb-2">{stat.number}</div>
//               <div className="text-xs sm:text-sm text-slate-600 font-medium leading-tight">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-16 sm:mb-20">
//           {/* Enhanced Image Gallery */}
//           <div className="relative order-2 lg:order-1">
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-3 sm:p-4 md:p-6 border border-blue-100">
//               <div className="relative h-64 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 shadow-inner">
//                 {/* Main Image */}
//                 <div className="relative h-full group">
//                   <img
//                     src={productImages[currentImageIndex].url}
//                     alt={productImages[currentImageIndex].title}
//                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
//                     onMouseEnter={() => !isMobile && setIsAutoPlaying(false)}
//                     onMouseLeave={() => !isMobile && setIsAutoPlaying(true)}
//                   />
                  
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  
//                   {/* Category Badge */}
//                   <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-blue-600/90 backdrop-blur-sm text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
//                     {productImages[currentImageIndex].category}
//                   </div>
                  
//                   {/* Image Info */}
//                   <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-white max-w-[calc(100%-4rem)] sm:max-w-[calc(100%-8rem)]">
//                     <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-1 line-clamp-1">{productImages[currentImageIndex].title}</h3>
//                     <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 leading-tight">{productImages[currentImageIndex].description}</p>
//                   </div>
                  
//                   {/* Navigation Arrows */}
//                   <button
//                     onClick={prevImage}
//                     className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all hover:scale-110 group touch-manipulation"
//                   >
//                     <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-blue-200" />
//                   </button>
//                   <button
//                     onClick={nextImage}
//                     className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all hover:scale-110 group touch-manipulation"
//                   >
//                     <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-blue-200" />
//                   </button>
//                 </div>
                
//                 {/* Dot Indicators */}
//                 <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 flex gap-1 sm:gap-2">
//                   {productImages.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => goToImage(index)}
//                       className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all touch-manipulation ${
//                         currentImageIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>
              
//               {/* Thumbnail Strip */}
//               <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4 overflow-x-auto pb-2 scrollbar-hide">
//                 {productImages.map((image, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToImage(index)}
//                     className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all hover:scale-105 touch-manipulation ${
//                       currentImageIndex === index ? "border-blue-500 shadow-lg" : "border-gray-200 hover:border-blue-300"
//                     }`}
//                   >
//                     <img
//                       src={image.url}
//                       alt={image.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>
            
//             {/* Quality Badge */}
//             <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full shadow-xl border-2 border-white">
//               <div className="flex items-center gap-1 sm:gap-2">
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current text-yellow-300 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
//                   ))}
//                 </div>
//                 <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">Premium Quality</span>
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
//             <div>
//               <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-slate-800 leading-tight">
//                 Premium Steel Solutions for 
//                 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block sm:inline">
//                   {" "}Modern Construction
//                 </span>
//               </h3>
//               <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6">
//                 Our TMT bars and MS products are sourced from top-tier manufacturers, 
//                 ensuring superior strength, durability, and compliance with international 
//                 ISO and ISI standards for your peace of mind.
//               </p>
//               <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl border border-blue-100">
//                 <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
//                   <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
//                 </div>
//                 <div>
//                   <div className="font-semibold text-slate-800 text-sm sm:text-base">Quality Guaranteed</div>
//                   <div className="text-xs sm:text-sm text-slate-600">ISO & ISI Certified Products</div>
//                 </div>
//               </div>
//             </div>

//             {/* Key Features */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//               {reasons.slice(0, 4).map((reason, index) => (
//                 <div
//                   key={index}
//                   className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
//                   onMouseEnter={() => setHoveredCard(index)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                 >
//                   <div className="flex items-start gap-3">
//                     <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
//                       {reason.icon}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <div className="text-xs sm:text-sm font-bold text-blue-600 mb-1">{reason.stat}</div>
//                       <h4 className="font-semibold text-slate-800 text-sm sm:text-base mb-2 line-clamp-2">{reason.title}</h4>
//                       <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">{reason.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Enhanced CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//               <Link 
//                 to="/products" 
//                 className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
//               >
//                 <span className="whitespace-nowrap">Explore Our Products</span>
//                 <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
//               </Link>
//               <Link 
//                 to="/quote" 
//                 className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
//               >
//                 <span className="whitespace-nowrap">Get Instant Quote</span>
//                 <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Reasons Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
//           {reasons.map((reason, index) => (
//             <div
//               key={index}
//               className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 group cursor-pointer"
//               style={{
//                 animationDelay: `${index * 0.1}s`
//               }}
//             >
//               <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 sm:p-4 rounded-lg sm:rounded-xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
//                 {reason.icon}
//               </div>
//               <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wider">{reason.stat}</div>
//               <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">{reason.title}</h3>
//               <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{reason.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Enhanced Bottom CTA */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-blue-100 relative overflow-hidden">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-5">
//               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl sm:rounded-3xl"></div>
//             </div>
            
//             <div className="relative z-10">
//               <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
//                 <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
//                 <span className="whitespace-nowrap">Get Started Today</span>
//               </div>
//               <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-slate-800 leading-tight">
//                 Ready to Build with 
//                 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block sm:inline">
//                   {" "}Premium Steel?
//                 </span>
//               </h3>
//               <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
//                 Join hundreds of satisfied customers who trust Sawariya Traders for their steel requirements. 
//                 Get competitive quotes and expert consultation with our 24/7 customer support.
//               </p>
              
//               {/* Contact Info */}
//               <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-6 sm:mb-8">
//                 <div className="flex items-center gap-3 text-slate-600 justify-center sm:justify-start">
//                   <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
//                     <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
//                   </div>
//                   <div className="text-center sm:text-left">
//                     <div className="font-semibold text-sm sm:text-base">Call Us Now</div>
//                     <div className="text-xs sm:text-sm">+91 87082 75179</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3 text-slate-600 justify-center sm:justify-start">
//                   <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
//                     <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
//                   </div>
//                   <div className="text-center sm:text-left">
//                     <div className="font-semibold text-sm sm:text-base">Email Us</div>
//                     <div className="text-xs sm:text-sm break-all">info@sawariyatraders.com</div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
//                 <Link 
//                   to="/contact" 
//                   className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
//                 >
//                   <span className="whitespace-nowrap">Contact Us Today</span>
//                   <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//                 <Link 
//                   to="/products" 
//                   className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
//                 >
//                   <span className="whitespace-nowrap">View Catalog</span>
//                   <Star className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

//////////////////////////////

// "use client"
// import React from "react"
// import { useRef, useState, useEffect } from "react"
// import { motion, useInView, AnimatePresence } from "framer-motion"
// import Sariya1 from "../assets/sariya.png"
// import { 
//   Award, 
//   ShieldCheck, 
//   Truck, 
//   DollarSign, 
//   CheckCircle, 
//   Users, 
//   Star, 
//   ChevronLeft, 
//   ChevronRight, 
//   Calculator,
//   MessageSquare,
//   Moon,
//   Sun,
//   X,
//   Loader,
//   Send,
//   Info,
//   HelpCircle,
//   RefreshCw,
//   Search,
//   ThumbsUp,
//   BarChart3,
//   BrainCircuit
// } from "lucide-react"
// import Image from "../assets/sariya 3.jpeg"
// import * as THREE from 'three'

// const reasons = [
//   {
//     icon: <Award className="h-8 w-8" />,
//     title: "18+ Years of Experience",
//     description: "Established in 2005, we bring decades of expertise to every order.",
//   },
//   {
//     icon: <ShieldCheck className="h-8 w-8" />,
//     title: "100% Genuine Product Guarantee",
//     description: "We never compromise on quality. All our products are authentic and certified.",
//   },
//   {
//     icon: <Users className="h-8 w-8" />,
//     title: "Trusted by 100+ Builders",
//     description: "Leading construction companies across West Bengal rely on our products.",
//   },
//   {
//     icon: <Truck className="h-8 w-8" />,
//     title: "Fast Delivery",
//     description: "We understand the importance of timelines in construction projects.",
//   },
//   {
//     icon: <DollarSign className="h-8 w-8" />,
//     title: "Affordable Price",
//     description: "Competitive pricing without compromising on quality.",
//   },
//   {
//     icon: <CheckCircle className="h-8 w-8" />,
//     title: "ISO Certified Quality",
//     description: "Our products meet international quality standards and certifications.",
//   },
// ]

// const testimonials = [
//   {
//     name: "Rajesh Kumar",
//     position: "Construction Manager, Kolkata",
//     image: "/placeholder-avatar-1.jpg",
//     rating: 5,
//     comment: "We've been sourcing our TMT bars from Shri Durga Steel for over 5 years now. Their quality is consistently excellent, and their delivery is always on time. Highly recommended!",
//     project: "Multi-story Residential Complex",
//     date: "January 15, 2025"
//   },
//   {
//     name: "Amit Sharma",
//     position: "Project Director, Durgapur",
//     image: "/placeholder-avatar-2.jpg",
//     rating: 5,
//     comment: "The quality of steel from Shri Durga Steel is exceptional. Their TMT bars meet all the required standards, and their customer service is outstanding. They're our go-to supplier for all steel requirements.",
//     project: "Commercial Office Building",
//     date: "March 3, 2025"
//   },
//   {
//     name: "Priya Desai",
//     position: "Civil Engineer, Howrah",
//     image: "/placeholder-avatar-3.jpg", 
//     rating: 4,
//     comment: "Shri Durga Steel's consistent quality and reliable delivery have made them our preferred supplier. They understand our requirements perfectly and always deliver on their promises.",
//     project: "Highway Bridge Construction",
//     date: "February 22, 2025"
//   },
//   {
//     name: "Sunil Mehta",
//     position: "Contractor, Siliguri",
//     image: "/placeholder-avatar-4.jpg",
//     rating: 5,
//     comment: "As a contractor handling multiple projects, I need suppliers I can depend on. Shri Durga Steel has never let me down with their premium quality products and excellent service.",
//     project: "Government School Construction",
//     date: "April 10, 2025"
//   },
// ]

// const productFeatures = [
//   {
//     title: "Superior Strength & Flexibility",
//     description: "Our TMT bars offer excellent tensile strength and ductility for safer structures.",
//     icon: <CheckCircle className="h-5 w-5 text-blue-600" />,
//     detail: "Tensile strength up to 600 MPa, with 20% elongation at break"
//   },
//   {
//     title: "Advanced Corrosion Resistance",
//     description: "Enhanced protection against environmental factors for longer-lasting construction.",
//     icon: <ShieldCheck className="h-5 w-5 text-blue-600" />,
//     detail: "Special alloy coating provides up to 25 years protection in normal environments"
//   },
//   {
//     title: "ISI & ISO Certified",
//     description: "All our products meet and exceed Indian and international quality standards.",
//     icon: <Award className="h-5 w-5 text-blue-600" />,
//     detail: "Certified under IS 1786:2008 and ISO 9001:2015 quality management systems"
//   },
//   {
//     title: "Earthquake Resistant",
//     description: "Specially designed to withstand seismic activities for safer buildings.",
//     icon: <CheckCircle className="h-5 w-5 text-blue-600" />,
//     detail: "Complies with IS 13920 for seismic resistance with high ductility ratio"
//   },
// ]

// const productCatalog = [
//   {
//     id: 1,
//     name: "Fe 500D TMT Bars",
//     brand: "TATA Tiscon",
//     sizes: ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm", "32mm"],
//     price: "₹70,500 per ton",
//     image: "/api/placeholder/300/300", 
//     rating: 4.9,
//     stock: "In Stock",
//     description: "Premium quality Fe 500D TMT Bars with superior strength and ductility for earthquake-resistant construction.",
//     features: ["High Yield Strength", "Superior Weldability", "Better Corrosion Resistance", "Excellent Bendability"],
//     bestFor: ["High-Rise Buildings", "Bridges", "Dams", "Industrial Structures"]
//   },
//   {
//     id: 2,
//     name: "Fe 550D TMT Bars",
//     brand: "JSW Neosteel",
//     sizes: ["10mm", "12mm", "16mm", "20mm", "25mm", "32mm"],
//     price: "₹72,800 per ton",
//     image: "/api/placeholder/300/300",
//     rating: 4.8,
//     stock: "In Stock",
//     description: "High-performance Fe 550D TMT Bars for structures requiring exceptional strength and durability.",
//     features: ["Higher Tensile Strength", "Better Fire Resistance", "Improved Ductility", "High Fatigue Strength"],
//     bestFor: ["Skyscrapers", "Heavy Infrastructure", "Flyovers", "Earthquake-Prone Areas"]
//   },
//   {
//     id: 3,
//     name: "CRS TMT Bars",
//     brand: "SAIL",
//     sizes: ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm"],
//     price: "₹75,200 per ton",
//     image: "/api/placeholder/300/300",
//     rating: 4.9,
//     stock: "Limited Stock",
//     description: "Corrosion Resistant Steel TMT Bars designed specifically for coastal and high-humidity regions.",
//     features: ["Superior Corrosion Resistance", "Extended Lifespan", "Low Maintenance", "High Strength"],
//     bestFor: ["Coastal Constructions", "Chemical Plants", "Sewage Treatment Plants", "Marine Structures"]
//   }
// ];

// // AI-based chatbot responses
// const chatbotResponses = {
//   greetings: [
//     "Hello! How can I help you with your steel requirements today?",
//     "Welcome to Shri Durga Steel! I'm here to assist you with any queries.",
//     "Hi there! Looking for quality TMT bars or other steel products?"
//   ],
//   productInfo: "We offer a wide range of TMT bars from top manufacturers like TATA Steel, JSW, and SAIL. Our products include Fe 500D, Fe 550D, and CRS TMT bars in various sizes from 8mm to 32mm. Would you like specific information about any of these products?",
//   priceQuery: "Our prices are competitive and depend on the grade, size, and quantity. Fe 500D TMT bars start from ₹70,500 per ton. For a detailed quotation based on your specific requirements, I'd recommend filling out our quote request form or mentioning your requirements here.",
//   deliveryInfo: "We deliver across West Bengal, typically within 24-48 hours after order confirmation for Kolkata and surrounding areas. For remote locations, it may take 2-3 days. We can provide expedited delivery for urgent requirements at a small additional cost.",
//   qualityCertifications: "All our products are certified by BIS (Bureau of Indian Standards) and adhere to ISO 9001:2015 quality management systems. We only stock TMT bars from manufacturers who comply with IS 1786:2008 standards for high-strength deformed steel bars.",
//   contactInfo: "You can reach our sales team at 033-XXXX-XXXX or email us at info@shridurgasteel.com. Our office is located at Industrial Area, Howrah, West Bengal. Would you like me to arrange a callback from our team?",
//   calculatorHelp: "Our material calculator helps you estimate the quantity of TMT bars needed for your project. Simply enter the dimensions and specifications, and it will calculate the approximate weight and number of bars required. Would you like me to guide you through using it?"
// };

// const AIRecommendationEngine = ({ projectType, setRecommendedProduct }) => {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     projectType: projectType || "residential",
//     location: "",
//     budget: "medium",
//     floorCount: "",
//     specialRequirements: ""
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     // Simulate AI processing
//     setTimeout(() => {
//       // AI logic to determine the best product based on inputs
//       let recommendedProductId = 1; // Default
      
//       if (formData.projectType === "commercial" || formData.floorCount > 5) {
//         recommendedProductId = 2; // Fe 550D for taller buildings
//       }
      
//       if (formData.location === "coastal" || formData.specialRequirements.toLowerCase().includes("corrosion")) {
//         recommendedProductId = 3; // CRS for coastal areas
//       }
      
//       if (formData.budget === "high" && formData.projectType === "infrastructure") {
//         recommendedProductId = 2; // Premium product for high-budget infrastructure
//       }
      
//       const product = productCatalog.find(p => p.id === recommendedProductId);
//       setRecommendedProduct(product);
//       setLoading(false);
//     }, 1500);
//   };

//   return (
//     <div className="bg-blue-50 p-6 rounded-lg">
//       <div className="flex items-center gap-2 mb-4">
//         <BrainCircuit className="h-5 w-5 text-blue-600" />
//         <h4 className="font-semibold text-blue-800">AI Product Recommendation</h4>
//       </div>
      
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm text-blue-700 mb-1">Project Type</label>
//           <select 
//             name="projectType"
//             value={formData.projectType}
//             onChange={handleInputChange}
//             className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//           >
//             <option value="residential">Residential Building</option>
//             <option value="commercial">Commercial Building</option>
//             <option value="infrastructure">Infrastructure (Bridge/Flyover)</option>
//             <option value="industrial">Industrial Structure</option>
//           </select>
//         </div>
        
//         <div>
//           <label className="block text-sm text-blue-700 mb-1">Location Type</label>
//           <select 
//             name="location"
//             value={formData.location}
//             onChange={handleInputChange}
//             className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//           >
//             <option value="">Select Location Type</option>
//             <option value="urban">Urban Area</option>
//             <option value="coastal">Coastal Area</option>
//             <option value="seismic">Earthquake-Prone Zone</option>
//             <option value="industrial">Industrial Zone</option>
//           </select>
//         </div>
        
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm text-blue-700 mb-1">Budget Level</label>
//             <select 
//               name="budget"
//               value={formData.budget}
//               onChange={handleInputChange}
//               className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//             >
//               <option value="low">Economy</option>
//               <option value="medium">Standard</option>
//               <option value="high">Premium</option>
//             </select>
//           </div>
          
//           <div>
//             <label className="block text-sm text-blue-700 mb-1">Number of Floors</label>
//             <input 
//               type="number"
//               name="floorCount"
//               value={formData.floorCount}
//               onChange={handleInputChange}
//               placeholder="e.g. 4"
//               className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//             />
//           </div>
//         </div>
        
//         <div>
//           <label className="block text-sm text-blue-700 mb-1">Special Requirements</label>
//           <input 
//             type="text"
//             name="specialRequirements"
//             value={formData.specialRequirements}
//             onChange={handleInputChange}
//             placeholder="e.g. corrosion resistance, high load capacity"
//             className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//           />
//         </div>
        
//         <button 
//           type="submit"
//           disabled={loading} 
//           className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center"
//         >
//           {loading ? (
//             <>
//               <Loader className="h-4 w-4 mr-2 animate-spin" />
//               Analyzing Requirements...
//             </>
//           ) : (
//             <>
//               <BrainCircuit className="h-4 w-4 mr-2" />
//               Get AI Recommendation
//             </>
//           )}
//         </button>
//       </form>
//     </div>
//   );
// };

// // Material calculator component
// const MaterialCalculator = () => {
//   const [dimensions, setDimensions] = useState({
//     length: "",
//     width: "",
//     depth: "",
//     spacing: 150, // mm
//     barSize: 12 // mm
//   });
  
//   const [result, setResult] = useState(null);
  
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setDimensions(prev => ({ ...prev, [name]: value }));
//   };
  
//   const calculateMaterial = (e) => {
//     e.preventDefault();
    
//     const { length, width, depth, spacing, barSize } = dimensions;
    
//     // Basic calculation for reinforcement steel in a slab
//     if (!length || !width) return;
    
//     const lengthM = parseFloat(length);
//     const widthM = parseFloat(width);
//     const spacingM = spacing / 1000; // convert to meters
    
//     const barDiameter = parseFloat(barSize) / 1000; // in meters
//     const barArea = Math.PI * Math.pow(barDiameter / 2, 2); // in sq. meters
    
//     // Calculate number of bars
//     const barsAlongLength = Math.ceil(widthM / spacingM) + 1;
//     const barsAlongWidth = Math.ceil(lengthM / spacingM) + 1;
    
//     // Calculate total length of bars
//     const totalBarLength = (barsAlongLength * lengthM) + (barsAlongWidth * widthM);
    
//     // Calculate volume and weight (density of steel is about 7850 kg/m3)
//     const volume = totalBarLength * barArea; // in cubic meters
//     const weight = volume * 7850; // in kg
    
//     setResult({
//       totalBars: barsAlongLength + barsAlongWidth,
//       totalLength: totalBarLength.toFixed(2),
//       totalWeight: weight.toFixed(2),
//       tonsNeeded: (weight / 1000).toFixed(3)
//     });
//   };
  
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
//       <div className="flex items-center mb-4">
//         <Calculator className="h-6 w-6 text-blue-600 mr-2" />
//         <h3 className="text-xl font-bold text-blue-800">TMT Bar Calculator</h3>
//       </div>
      
//       <form onSubmit={calculateMaterial} className="space-y-4">
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-blue-700 text-sm mb-1">Length (meters)</label>
//             <input
//               type="number"
//               name="length"
//               value={dimensions.length}
//               onChange={handleInputChange}
//               required
//               step="0.01"
//               min="0"
//               className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//             />
//           </div>
          
//           <div>
//             <label className="block text-blue-700 text-sm mb-1">Width (meters)</label>
//             <input
//               type="number"
//               name="width"
//               value={dimensions.width}
//               onChange={handleInputChange}
//               required
//               step="0.01"
//               min="0"
//               className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//             />
//           </div>
//         </div>
        
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-blue-700 text-sm mb-1">Bar Size (mm)</label>
//             <select
//               name="barSize"
//               value={dimensions.barSize}
//               onChange={handleInputChange}
//               className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//             >
//               <option value="8">8 mm</option>
//               <option value="10">10 mm</option>
//               <option value="12">12 mm</option>
//               <option value="16">16 mm</option>
//               <option value="20">20 mm</option>
//               <option value="25">25 mm</option>
//               <option value="32">32 mm</option>
//             </select>
//           </div>
          
//           <div>
//             <label className="block text-blue-700 text-sm mb-1">Bar Spacing (mm)</label>
//             <select
//               name="spacing"
//               value={dimensions.spacing}
//               onChange={handleInputChange}
//               className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//             >
//               <option value="100">100 mm</option>
//               <option value="150">150 mm</option>
//               <option value="200">200 mm</option>
//               <option value="250">250 mm</option>
//             </select>
//           </div>
//         </div>
        
//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg w-full"
//         >
//           Calculate Materials
//         </button>
//       </form>
      
//       {result && (
//         <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
//           <h4 className="font-semibold text-blue-800 mb-2">Results:</h4>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <p className="text-sm text-blue-700">Total Bars Needed:</p>
//               <p className="font-semibold text-blue-900">{result.totalBars} bars</p>
//             </div>
//             <div>
//               <p className="text-sm text-blue-700">Total Length:</p>
//               <p className="font-semibold text-blue-900">{result.totalLength} meters</p>
//             </div>
//             <div>
//               <p className="text-sm text-blue-700">Total Weight:</p>
//               <p className="font-semibold text-blue-900">{result.totalWeight} kg</p>
//             </div>
//             <div>
//               <p className="text-sm text-blue-700">Quantity Required:</p>
//               <p className="font-semibold text-blue-900">{result.tonsNeeded} tons</p>
//             </div>
//           </div>
//           <div className="mt-3 flex justify-between items-center border-t border-blue-200 pt-3">
//             <p className="text-sm text-blue-600">Need a quotation for this quantity?</p>
//             <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded transition-all">
//               Request Quote
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default function WhyChooseUs() {
//   const [isMounted, setIsMounted] = useState(false)
//   const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
//   const [requestCallback, setRequestCallback] = useState(false)
//   const [formData, setFormData] = useState({ name: "", phone: "", company: "", message: "", email: "" })
//   const [formErrors, setFormErrors] = useState({})
//   const [submitted, setSubmitted] = useState(false)
//   const [darkMode, setDarkMode] = useState(false)
//   const [activeSection, setActiveSection] = useState(null)
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [recommendedProduct, setRecommendedProduct] = useState(null)
//   const [showProductDetail, setShowProductDetail] = useState(false)
  
//   // Set up 3D model viewer - simulated with animation
//   const [rotate3D, setRotate3D] = useState(false)

//   useEffect(() => {
//     setIsMounted(true)
//   }, [])

//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: false, amount: 0.2 })

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     }),
//   }

//   const nextTestimonial = () => {
//     setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
//   }

//   const prevTestimonial = () => {
//     setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
//   }

//   const validateForm = () => {
//     const errors = {};
    
//     if (!formData.name.trim()) errors.name = "Name is required";
    
//     if (!formData.phone.trim()) {
//       errors.phone = "Phone number is required";
//     } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
//       errors.phone = "Please enter a valid 10-digit phone number";
//     }
    
//     if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       errors.email = "Please enter a valid email address";
//     }
    
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
    
//     // Clear error when user starts typing
//     if (formErrors[name]) {
//       setFormErrors(prev => ({...prev, [name]: null}));
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
    
//     if (!validateForm()) return;
    
//     // In a real application, you would send this data to your server
//     console.log("Form submitted:", formData)
//     setSubmitted(true)
    
//     // Reset form after 3 seconds
//     setTimeout(() => {
//       setSubmitted(false)
//       setRequestCallback(false)
//       setFormData({ name: "", phone: "", company: "", message: "", email: "" })
//     }, 3000)
//   }
  
//   const toggleDarkMode = () => {
//     setDarkMode(prev => !prev);
//   };
  
//   const viewProductDetail = (product) => {
//     setSelectedProduct(product);
//     setShowProductDetail(true);
//   };

//   return (
//     <section 
//       id="why-choose-us" 
//       className={`py-20 ${darkMode 
//         ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white' 
//         : 'bg-gradient-to-b from-blue-50 to-blue-100'}`}
//     >
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Dark Mode Toggle */}
//         <div className="absolute top-4 right-4">
//           <button 
//             onClick={toggleDarkMode}
//             className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-blue-100 text-blue-800'} transition-all`}
//           >
//             {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//           </button>
//         </div>
        
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Why Choose Us</h2>
//           <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-blue-700'} max-w-2xl mx-auto`}>
//             For over 18 years, we've been the trusted steel supplier for businesses across West Bengal. Here's why our customers choose Shri Durga Steel.
//           </p>
//         </motion.div>

//         <div className={`mb-20 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-xl shadow-xl overflow-hidden border-t-4 ${darkMode ? 'border-blue-400' : 'border-blue-500'}`}>
//           <div className="grid md:grid-cols-2 items-center">
//             <div className="p-8 md:p-12">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Premium Quality TMT Bars</h3>
//                 <p className={`${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-8`}>
//                   Our TMT bars are sourced directly from top manufacturers like TATA Steel, JSW, and SAIL, ensuring the highest quality for your construction projects. These bars undergo rigorous quality checks and are certified to meet all industry standards.
//                 </p>

//                 <div className="grid md:grid-cols-2 gap-4 mb-8">
//                   {productFeatures.map((feature, index) => (
//                     <div 
//                       key={index} 
//                       className={`flex items-start gap-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-50 hover:bg-blue-100'} p-4 rounded-lg hover:shadow-md transition-all cursor-pointer group`}
//                       onClick={() => setActiveSection(index === activeSection ? null : index)}
//                     >
//                       <div className={`${darkMode ? 'bg-gray-600' : 'bg-blue-100'} p-2 rounded-full mt-1`}>
//                         {feature.icon}
//                       </div>
//                       <div>
//                         <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-blue-700'}`}>{feature.title}</h4>
//                         <p className={`${darkMode ? 'text-gray-300' : 'text-blue-600'} text-sm`}>
//                           {feature.description}
//                         </p>
                        
//                         {activeSection === index && (
//                           <motion.div
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: 'auto' }}
//                             exit={{ opacity: 0, height: 0 }}
//                             className="mt-2 pt-2 border-t border-dashed border-blue-200"
//                           >
//                             <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-blue-500'}`}>
//                               {feature.detail}
//                             </p>
//                           </motion.div>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex flex-wrap gap-3">
//                   <button 
//                     className={`${darkMode 
//                       ? 'bg-blue-500 hover:bg-blue-600 text-white' 
//                       : 'bg-blue-600 hover:bg-blue-700 text-white'} font-medium py-2 px-6 rounded-lg transition-all shadow-md hover:shadow-lg`}
//                     onClick={() => setRequestCallback(true)}
//                   >
//                     Request Free Quotation
//                   </button>
                  
//                   <button 
//                     className={`${darkMode 
//                       ? 'bg-gray-700 hover:bg-gray-600 text-white border border-blue-400' 
//                       : 'bg-white hover:bg-blue-50 text-blue-600 border border-blue-500'} font-medium py-2 px-6 rounded-lg transition-all`}
//                     onClick={() => setActiveSection('calculator')}
//                   >
//                     <Calculator className="h-4 w-4 inline-block mr-1" />
//                     Material Calculator
//                   </button>
//                 </div>
//               </motion.div>
//             </div>

//             <div className="h-[400px] relative flex items-center justify-center overflow-hidden">
//               {isMounted && (
//                 <>
//                   <div className={`absolute inset-0 ${darkMode ? 'bg-blue-800' : 'bg-blue-600'} opacity-20 z-0 flex items-center justify-center`}>
//                     {Array.from({ length: 10 }).map((_, i) => (
//                       <div
//                         key={i}
//                         className="absolute w-40 h-40 border-2 border-white border-opacity-20 rounded-full"
//                         style={{
//                           transform: `scale(${(i + 1) * 0.5}) rotate(${i * 5}deg)`,
//                           animation: `pulse ${3 + i * 0.5}s infinite alternate ease-in-out`,
//                         }}
//                       />
//                     ))}
//                   </div>
//                   <div className="z-10 p-6 relative">
//                     <div className={`flex items-center justify-center ${rotate3D ? 'animate-spin-slow' : ''}`}>
//                       <img 
//                         src={Sariya1} 
//                         alt="Premium TMT Bars" 
//                         className="rounded-lg shadow-2xl max-w-full h-auto transform hover:scale-105 transition-all duration-500" 
//                       />
//                     </div>
                    
//                     <div className="mt-4 flex justify-center">
//                       <button 
//                         onClick={() => setRotate3D(!rotate3D)}
//                         className={`text-xs px-3 py-1 rounded-full ${darkMode 
//                           ? 'bg-gray-700 text-white hover:bg-gray-600' 
//                           : 'bg-white text-blue-600 hover:bg-blue-50'} shadow-md flex items-center`}
//                       >
//                         <RefreshCw className={`h-3 w-3 mr-1 ${rotate3D ? 'animate-spin' : ''}`} />
//                         {rotate3D ? 'Stop Rotation' : '3D View'}
//                       </button>
//                     </div>
                    
//                     <div className={`absolute -bottom-4 -right-4 ${darkMode ? 'bg-gray-700' : 'bg-white'} p-4 rounded-lg shadow-lg`}>
//                       <div className="flex gap-1">
//                         {[...Array(5)].map((_, i) => (
//                           <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                         ))}
//                       </div>
//                       <p className={`font-bold ${darkMode ? 'text-white' : 'text-blue-800'} mt-1`}>Top Rated Quality</p>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
        
//         {/* AI Product Recommendations Section */}
//         <AnimatePresence>
//           {recommendedProduct && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className={`mb-10 ${darkMode ? 'bg-gray-800 border-blue-400' : 'bg-white border-blue-500'} rounded-xl shadow-xl overflow-hidden border-t-4 p-6`}
//             >
//               <div className="flex items-center mb-4">
//                 <BrainCircuit className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-2`} />
//                 <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-blue-800'}`}>AI Recommended Product</h3>
//               </div>
              
//               <div className="grid md:grid-cols-3 gap-6 items-center">
//                 <div>
//                   <div className={`bg-gradient-to-br ${darkMode ? 'from-gray-700 to-gray-600' : 'from-blue-100 to-blue-50'} rounded-lg p-4 flex items-center justify-center`}>
//                     <img src={recommendedProduct.image} alt={recommendedProduct.name} className="max-w-full h-auto rounded shadow-md" />
//                   </div>
//                 </div>
                
//                 <div className="md:col-span-2">
//                   <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-blue-800'} mb-1`}>{recommendedProduct.name}</h4>
//                   <p className={`${darkMode ? 'text-gray-400' : 'text-blue-600'} text-sm`}>Brand: {recommendedProduct.brand}</p>
                  
//                   <div className="flex items-center mt-2 mb-3">
//                     <div className="flex">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} className={`h-4 w-4 ${i < Math.floor(recommendedProduct.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`} />
//                       ))}
//                     </div>
//                     <span className={`ml-2 text-sm ${darkMode ? 'text-gray-400' : 'text-blue-600'}`}>{recommendedProduct.rating}/5</span>
//                     <span className={`ml-4 text-xs px-2 py-0.5 rounded-full ${darkMode ? 'bg-green-800 text-green-100' : 'bg-green-100 text-green-800'}`}>
//                       {recommendedProduct.stock}
//                     </span>
//                   </div>
                  
//                   <p className={`${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-3`}>{recommendedProduct.description}</p>
                  
//                   <div className="mb-4">
//                     <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-blue-700'}`}>Available Sizes:</p>
//                     <div className="flex flex-wrap gap-2 mt-1">
//                       {recommendedProduct.sizes.map((size, idx) => (
//                         <span key={idx} className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-blue-100 text-blue-700'}`}>
//                           {size}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
                  
//                   <div className="flex flex-wrap items-center gap-3">
//                     <p className={`font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>{recommendedProduct.price}</p>
                    
//                     <div className="flex gap-2">
//                       <button className={`${darkMode 
//                         ? 'bg-blue-500 hover:bg-blue-600 text-white' 
//                         : 'bg-blue-600 hover:bg-blue-700 text-white'} text-sm font-medium py-1.5 px-4 rounded transition-all`}>
//                         Request Quote
//                       </button>
                      
//                       <button 
//                         onClick={() => viewProductDetail(recommendedProduct)}
//                         className={`${darkMode 
//                           ? 'bg-gray-700 hover:bg-gray-600 text-white border border-blue-400' 
//                           : 'bg-white hover:bg-blue-50 text-blue-600 border border-blue-500'} text-sm font-medium py-1.5 px-4 rounded transition-all`}>
//                         Product Details
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="mt-4 pt-4 border-t border-dashed border-blue-200">
//                 <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-blue-600'}`}>
//                   <ThumbsUp className="h-4 w-4 inline-block mr-1" />
//                   Best choice for your project type and requirements. AI recommendation based on your inputs.
//                 </p>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Main Features Section */}
//         <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//           {reasons.map((reason, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               variants={cardVariants}
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               whileHover={{
//                 y: -10,
//                 boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//               }}
//               className={`${darkMode 
//                 ? 'bg-gray-800 border-blue-400' 
//                 : 'bg-white border-blue-500'} p-6 rounded-lg shadow-lg transition-all duration-300 flex flex-col h-full border-t-4`}
//             >
//               <div className={`${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-600'} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
//                 {reason.icon}
//               </div>
//               <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-blue-800'}`}>{reason.title}</h3>
//               <p className={`${darkMode ? 'text-gray-300' : 'text-blue-600'} flex-grow`}>{reason.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Testimonials Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className={`mt-20 ${darkMode ? 'bg-gray-800 border-blue-400' : 'bg-white border-blue-500'} p-8 rounded-lg shadow-xl border-t-4 mb-20`}
//         >
//           <h3 className={`text-2xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-blue-800'}`}>What Our Customers Say</h3>

//           <div className="relative">
//             <div className="overflow-hidden">
//               <div 
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
//               >
//                 {testimonials.map((testimonial, index) => (
//                   <div key={index} className="min-w-full px-4">
//                     <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-50'} p-6 sm:p-8 rounded-lg shadow-md`}>
//                       <div className="flex flex-col sm:flex-row sm:items-center mb-4">
//                         <div className={`w-16 h-16 ${darkMode ? 'bg-gray-600' : 'bg-blue-200'} rounded-full mr-4 overflow-hidden mb-2 sm:mb-0`}>
//                           <img src="/api/placeholder/150/150" alt={testimonial.name} className="w-full h-full object-cover" />
//                         </div>
//                         <div>
//                           <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-blue-800'}`}>{testimonial.name}</h4>
//                           <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-blue-600'}`}>{testimonial.position}</p>
//                           <div className="flex mt-1">
//                             {[...Array(5)].map((_, i) => (
//                               <Star 
//                                 key={i} 
//                                 className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`} 
//                               />
//                             ))}
//                           </div>
//                         </div>
//                         <div className="hidden sm:block ml-auto">
//                           <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-600 text-white' : 'bg-blue-100 text-blue-700'}`}>
//                             {testimonial.project}
//                           </span>
//                           <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-blue-500'}`}>{testimonial.date}</p>
//                         </div>
//                       </div>
//                       <p className={`${darkMode ? 'text-gray-300' : 'text-blue-700'} italic`}>
//                         "{testimonial.comment}"
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <button 
//               onClick={prevTestimonial}
//               className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 ${darkMode ? 'bg-gray-700' : 'bg-white'} p-2 rounded-full shadow-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:text-blue-800 transition-all`}
//             >
//               <ChevronLeft className="h-6 w-6" />
//             </button>
            
//             <button 
//               onClick={nextTestimonial}
//               className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 ${darkMode ? 'bg-gray-700' : 'bg-white'} p-2 rounded-full shadow-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:text-blue-800 transition-all`}
//             >
//               <ChevronRight className="h-6 w-6" />
//             </button>

//             <div className="flex justify-center mt-6 gap-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentTestimonialIndex(index)}
//                   className={`w-3 h-3 rounded-full transition-all ${
//                     index === currentTestimonialIndex 
//                       ? (darkMode ? 'bg-blue-400 w-6' : 'bg-blue-600 w-6') 
//                       : (darkMode ? 'bg-gray-600' : 'bg-blue-300')
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* AI Recommender and Calculator Section */}
//         <div className="mb-20">
//           <h3 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-blue-800'}`}>Smart Tools & Resources</h3>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className={`${darkMode ? 'bg-gray-800 border-blue-400' : 'bg-white border-blue-500'} p-8 rounded-lg shadow-lg border-t-4`}
//             >
//               <AIRecommendationEngine 
//                 projectType="residential" 
//                 setRecommendedProduct={setRecommendedProduct} 
//               />
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               {activeSection === 'calculator' ? (
//                 <MaterialCalculator />
//               ) : (
//                 <div className={`${darkMode ? 'bg-gray-800 border-blue-400' : 'bg-white border-blue-500'} p-8 rounded-lg shadow-lg border-t-4`}>
//                   <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Our Quality Standards</h3>
//                   <div className="space-y-6">
//                     <div className="flex items-center gap-4">
//                       <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-100'} p-3 rounded-lg`}>
//                         <Award className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
//                       </div>
//                       <div>
//                         <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-blue-700'}`}>BIS Certified</h4>
//                         <p className={`${darkMode ? 'text-gray-300' : 'text-blue-600'} text-sm`}>All products meet Bureau of Indian Standards specifications</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center gap-4">
//                       <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-100'} p-3 rounded-lg`}>
//                         <ShieldCheck className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
//                       </div>
//                       <div>
//                         <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-blue-700'}`}>Manufacturer Certified</h4>
//                         <p className={`${darkMode ? 'text-gray-300' : 'text-blue-600'} text-sm`}>Direct supply from TATA Steel, JSW, and SAIL</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center gap-4">
//                       <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-100'} p-3 rounded-lg`}>
//                         <CheckCircle className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
//                       </div>
//                       <div>
//                         <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-blue-700'}`}>Quality Tested</h4>
//                         <p className={`${darkMode ? 'text-gray-300' : 'text-blue-600'} text-sm`}>Each batch undergoes rigorous testing before delivery</p>
//                       </div>
//                     </div>
                    
//                     <div className="pt-4 mt-4 border-t border-dashed border-blue-200">
//                       <button
//                         onClick={() => setActiveSection('calculator')}
//                         className={`${darkMode 
//                           ? 'bg-blue-500 hover:bg-blue-600 text-white' 
//                           : 'bg-blue-600 hover:bg-blue-700 text-white'} font-medium py-2 px-6 rounded-lg transition-all shadow-md hover:shadow-lg w-full flex items-center justify-center`}
//                       >
//                         <Calculator className="h-4 w-4 mr-2" />
//                         Open Material Calculator
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </motion.div>
//           </div>
//         </div>

//         {/* Contact Form Section */}
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className={`${darkMode ? 'bg-gray-800 border-blue-400' : 'bg-white border-blue-500'} p-8 rounded-lg shadow-lg border-t-4`}
//           >
//             <div className="flex flex-col items-center justify-center h-full">
//               <BarChart3 className={`h-16 w-16 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-6`} />
//               <h3 className={`text-2xl font-bold mb-4 text-center ${darkMode ? 'text-white' : 'text-blue-800'}`}>Performance Metrics</h3>
              
//               <div className="grid grid-cols-2 gap-6 w-full max-w-md">
//                 <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-50'} p-4 rounded-lg text-center`}>
//                   <p className={`text-3xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>98%</p>
//                   <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-blue-600'}`}>On-time Delivery</p>
//                 </div>
                
//                 <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-50'} p-4 rounded-lg text-center`}>
//                   <p className={`text-3xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>100+</p>
//                   <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-blue-600'}`}>Regular Clients</p>
//                 </div>
                
//                 <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-50'} p-4 rounded-lg text-center`}>
//                   <p className={`text-3xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>4.9/5</p>
//                   <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-blue-600'}`}>Customer Rating</p>
//                 </div>
                
//                 <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-50'} p-4 rounded-lg text-center`}>
//                   <p className={`text-3xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>18+</p>
//                   <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-blue-600'}`}>Years Experience</p>
//                 </div>
//               </div>
              
//               <div className="mt-6 text-center">
//                 <p className={`${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-4`}>
//                   Join our satisfied customers and experience our premium quality steel products and exceptional service.
//                 </p>
//                 <button 
//                   onClick={() => setRequestCallback(true)}
//                   className={`${darkMode 
//                     ? 'bg-blue-500 hover:bg-blue-600 text-white' 
//                     : 'bg-blue-600 hover:bg-blue-700 text-white'} font-medium py-2 px-6 rounded-lg transition-all shadow-md hover:shadow-lg`}
//                 >
//                   Contact Sales Team
//                 </button>
//               </div>
//             </div>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className={`${darkMode ? 'bg-gray-800 border-blue-400' : 'bg-white border-blue-500'} p-8 rounded-lg shadow-lg border-t-4`}
//           >
//             {requestCallback ? (
//               <div>
//                 <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Request a Callback</h3>
                
//                 {submitted ? (
//                   <div className={`${darkMode ? 'bg-green-800' : 'bg-green-100'} p-4 rounded-lg mb-4`}>
//                     <div className="flex items-center">
//                       <CheckCircle className={`h-5 w-5 ${darkMode ? 'text-green-300' : 'text-green-600'} mr-2`} />
//                       <p className={`${darkMode ? 'text-green-300' : 'text-green-700'} font-medium`}>
//                         Thank you! Our team will contact you shortly.
//                       </p>
//                     </div>
//                   </div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                       <label className={`block text-sm ${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-1`}>
//                         Your Name*
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         className={`w-full p-2 border ${formErrors.name ? 
//                           (darkMode ? 'border-red-500 bg-red-900/20' : 'border-red-500 bg-red-50') : 
//                           (darkMode ? 'border-gray-600 bg-gray-700' : 'border-blue-200')} 
//                           rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
//                           ${darkMode ? 'text-white' : 'text-blue-800'}`}
//                         placeholder="Enter your full name"
//                       />
//                       {formErrors.name && (
//                         <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
//                       )}
//                     </div>
                    
//                     <div>
//                       <label className={`block text-sm ${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-1`}>
//                         Phone Number*
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         className={`w-full p-2 border ${formErrors.phone ? 
//                           (darkMode ? 'border-red-500 bg-red-900/20' : 'border-red-500 bg-red-50') : 
//                           (darkMode ? 'border-gray-600 bg-gray-700' : 'border-blue-200')} 
//                           rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
//                           ${darkMode ? 'text-white' : 'text-blue-800'}`}
//                         placeholder="Enter your phone number"
//                       />
//                       {formErrors.phone && (
//                         <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
//                       )}
//                     </div>
                    
//                     <div>
//                       <label className={`block text-sm ${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-1`}>
//                         Email (Optional)
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         className={`w-full p-2 border ${formErrors.email ? 
//                           (darkMode ? 'border-red-500 bg-red-900/20' : 'border-red-500 bg-red-50') : 
//                           (darkMode ? 'border-gray-600 bg-gray-700' : 'border-blue-200')} 
//                           rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
//                           ${darkMode ? 'text-white' : 'text-blue-800'}`}
//                         placeholder="Enter your email address"
//                       />
//                       {formErrors.email && (
//                         <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
//                       )}
//                     </div>
                    
//                     <div>
//                       <label className={`block text-sm ${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-1`}>
//                         Company Name (Optional)
//                       </label>
//                       <input
//                         type="text"
//                         name="company"
//                         value={formData.company}
//                         onChange={handleInputChange}
//                         className={`w-full p-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-blue-200'} 
//                           rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none`}
//                         placeholder="Enter your company name"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className={`block text-sm ${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-1`}>
//                         Message (Optional)
//                       </label>
//                       <textarea
//                         name="message"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         rows="3"
//                         className={`w-full p-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-blue-200'} 
//                           rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none`}
//                         placeholder="Enter any specific details about your requirements"
//                       ></textarea>
//                     </div>
                    
//                     <div className="flex flex-col sm:flex-row gap-3">
//                       <button
//                         type="submit"
//                         className={`${darkMode 
//                           ? 'bg-blue-500 hover:bg-blue-600 text-white' 
//                           : 'bg-blue-600 hover:bg-blue-700 text-white'} flex-1 font-medium py-2 px-6 rounded-lg transition-all shadow-md hover:shadow-lg`}
//                       >
//                         Submit Request
//                       </button>
                      
//                       <button
//                         type="button"
//                         onClick={() => setRequestCallback(false)}
//                         className={`${darkMode 
//                           ? 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600' 
//                           : 'bg-white hover:bg-blue-50 text-blue-600 border border-blue-200'} flex-1 font-medium py-2 px-6 rounded-lg transition-all`}
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </form>
//                 )}
//               </div>
//             ) : (
//               <div className="h-full flex flex-col justify-center">
//                 <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Get in Touch</h3>
//                 <p className={`${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-6`}>
//                   Need more information? Have questions about our products or services? Our team is here to help you.
//                 </p>
                
//                 <div className="space-y-4 mb-6">
//                   <div className="flex items-center gap-3">
//                     <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-100'} p-2 rounded-full`}>
//                       <MessageSquare className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
//                     </div>
//                     <div>
//                       <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-blue-800'}`}>Email Us</h4>
//                       <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-blue-600'}`}>info@shridurgasteel.com</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center gap-3">
//                     <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-100'} p-2 rounded-full`}>
//                       <Search className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
//                     </div>
//                     <div>
//                       <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-blue-800'}`}>Visit Our Store</h4>
//                       <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-blue-600'}`}>Industrial Area, Howrah, West Bengal</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="flex gap-3">
//                   <button
//                     onClick={() => setRequestCallback(true)}
//                     className={`${darkMode 
//                       ? 'bg-blue-500 hover:bg-blue-600 text-white' 
//                       : 'bg-blue-600 hover:bg-blue-700 text-white'} flex-1 font-medium py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg`}
//                   >
//                     Request Callback
//                   </button>
                  
//                   <button
//                     className={`${darkMode 
//                       ? 'bg-gray-700 hover:bg-gray-600 text-white border border-blue-400' 
//                       : 'bg-white hover:bg-blue-50 text-blue-600 border border-blue-500'} flex-1 font-medium py-2 px-4 rounded-lg transition-all flex items-center justify-center`}
//                   >
//                     <MessageSquare className="h-4 w-4 mr-1" />
//                     Chat with Us
//                   </button>
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         </div>
//       </div>
      
//       {/* Floating Chat Button */}
//       {/* Removed floating chat button and ChatAssistant UI */}
      
//       {/* Product Detail Modal */}
//       <AnimatePresence>
//         {showProductDetail && selectedProduct && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//             onClick={() => setShowProductDetail(false)}
//           >
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 50, opacity: 0 }}
//               className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex justify-between items-center p-4 border-b border-gray-200">
//                 <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-blue-800'}`}>Product Details</h3>
//                 <button 
//                   onClick={() => setShowProductDetail(false)}
//                   className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-blue-700'}`}
//                 >
//                   <X className="h-5 w-5" />
//                 </button>
//               </div>
              
//               <div className="p-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <div className={`bg-gradient-to-br ${darkMode ? 'from-gray-700 to-gray-600' : 'from-blue-100 to-blue-50'} rounded-lg p-4 flex items-center justify-center`}>
//                       <img src={selectedProduct.image} alt={selectedProduct.name} className="max-w-full h-auto rounded shadow-md" />
//                     </div>
                    
//                     <div className="mt-4">
//                       <div className="flex items-center justify-between">
//                         <div className="flex">
//                           {[...Array(5)].map((_, i) => (
//                             <Star key={i} className={`h-5 w-5 ${i < Math.floor(selectedProduct.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`} />
//                           ))}
//                         </div>
//                         <span className={`text-sm px-2 py-0.5 rounded-full ${darkMode ? 'bg-green-800 text-green-100' : 'bg-green-100 text-green-800'}`}>
//                           {selectedProduct.stock}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div>
//                     <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-blue-800'}`}>
//                       {selectedProduct.name}
//                     </h2>
//                     <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-blue-600'} mb-2`}>
//                       Brand: <span className="font-semibold">{selectedProduct.brand}</span>
//                     </p>
//                     <p className={`font-bold text-lg mb-4 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
//                       {selectedProduct.price}
//                     </p>
                    
//                     <p className={`${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-6`}>
//                       {selectedProduct.description}
//                     </p>
                    
//                     <div className="mb-4">
//                       <h4 className={`font-medium mb-2 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Available Sizes:</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {selectedProduct.sizes.map((size, idx) => (
//                           <span 
//                             key={idx} 
//                             className={`text-sm px-3 py-1 rounded-full ${darkMode 
//                               ? 'bg-gray-700 text-white border border-gray-600'
//                               : 'bg-blue-100 text-blue-700'}`}
//                           >
//                             {size}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
                    
//                     <div className="mb-6">
//                       <h4 className={`font-medium mb-2 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Key Features:</h4>
//                       <ul className={`list-disc pl-5 ${darkMode ? 'text-gray-300' : 'text-blue-700'} space-y-1`}>
//                         {selectedProduct.features.map((feature, idx) => (
//                           <li key={idx}>{feature}</li>
//                         ))}
//                       </ul>
//                     </div>
                    
//                     <div className="mb-6">
//                       <h4 className={`font-medium mb-2 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Best For:</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {selectedProduct.bestFor.map((use, idx) => (
//                           <span 
//                             key={idx} 
//                             className={`text-xs px-2 py-1 rounded ${darkMode 
//                               ? 'bg-gray-700 text-blue-300 border border-blue-400'
//                               : 'bg-blue-50 text-blue-600 border border-blue-200'}`}
//                           >
//                             {use}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
                    
//                     <div className="flex gap-3">
//                       <button
//                         onClick={() => {
//                           setRequestCallback(true);
//                           setShowProductDetail(false);
//                         }}
//                         className={`${darkMode 
//                           ? 'bg-blue-500 hover:bg-blue-600 text-white' 
//                           : 'bg-blue-600 hover:bg-blue-700 text-white'} flex-1 font-medium py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg`}
//                       >
//                         Request Quote
//                       </button>
                      
//                       <button
//                         onClick={() => setShowProductDetail(false)}
//                         className={`${darkMode 
//                           ? 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600' 
//                           : 'bg-white hover:bg-blue-50 text-blue-600 border border-blue-200'} font-medium py-2 px-4 rounded-lg transition-all`}
//                       >
//                         Close
//                       </button>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="mt-6 pt-6 border-t border-gray-200">
//                   <div className="flex items-center gap-2 mb-2">
//                     <Info className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
//                     <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-blue-800'}`}>Need Help Choosing?</h4>
//                   </div>
//                   <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-blue-700'}`}>
//                     Our experts can help you select the right product for your specific requirements. Contact us at 033-XXXX-XXXX or use our chat service for quick assistance.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
      
//       {/* Help Button */}
//       {/* Removed help button that opened chat assistant */}
//     </section>
//   )
// }
                
////// 2nd 
// "use client"
// import React from "react"
// import { useRef, useState, useEffect } from "react"
// import { motion, useInView, AnimatePresence } from "framer-motion"
// import Sariya1 from "../assets/sariya.png"
// import { 
//   Award, 
//   ShieldCheck, 
//   Truck, 
//   DollarSign, 
//   CheckCircle, 
//   Users, 
//   Star, 
//   ChevronLeft, 
//   ChevronRight, 
//   Calculator,
//   MessageSquare,
//   Moon,
//   Sun,
//   X,
//   Loader,
//   Send,
//   Info,
//   HelpCircle,
//   RefreshCw,
//   Search,
//   ThumbsUp,
//   BarChart3,
//   BrainCircuit,
//   Phone,
//   MapPin
// } from "lucide-react"
// import Image from "../assets/sariya 3.jpeg"

// const reasons = [
//   {
//     icon: <Award className="h-8 w-8" />,
//     title: "18+ Years of Experience",
//     description: "Established in 2005, we bring decades of expertise to every order.",
//   },
//   {
//     icon: <ShieldCheck className="h-8 w-8" />,
//     title: "100% Genuine Product Guarantee",
//     description: "We never compromise on quality. All our products are authentic and certified.",
//   },
//   {
//     icon: <Users className="h-8 w-8" />,
//     title: "Trusted by 100+ Builders",
//     description: "Leading construction companies across Rajasthan rely on our products.",
//   },
//   {
//     icon: <Truck className="h-8 w-8" />,
//     title: "Fast Delivery",
//     description: "We understand the importance of timelines in construction projects.",
//   },
//   {
//     icon: <DollarSign className="h-8 w-8" />,
//     title: "Affordable Price",
//     description: "Competitive pricing without compromising on quality.",
//   },
//   {
//     icon: <CheckCircle className="h-8 w-8" />,
//     title: "ISO Certified Quality",
//     description: "Our products meet international quality standards and certifications.",
//   },
// ]

// const testimonials = [
//   {
//     name: "Rajesh Kumar",
//     position: "Construction Manager, Alwar",
//     image: "/placeholder-avatar-1.jpg",
//     rating: 5,
//     comment: "We've been sourcing our TMT bars from Sawariya Traders for over 5 years now. Their quality is consistently excellent, and their delivery is always on time. Highly recommended!",
//     project: "Multi-story Residential Complex",
//     date: "January 15, 2025"
//   },
//   {
//     name: "Amit Sharma",
//     position: "Project Director, Ramgarh",
//     image: "/placeholder-avatar-2.jpg",
//     rating: 5,
//     comment: "The quality of steel from Sawariya Traders is exceptional. Their TMT bars meet all the required standards, and their customer service is outstanding. They're our go-to supplier for all steel requirements.",
//     project: "Commercial Office Building",
//     date: "March 3, 2025"
//   },
//   {
//     name: "Priya Desai",
//     position: "Civil Engineer, Govindgarh",
//     image: "/placeholder-avatar-3.jpg", 
//     rating: 4,
//     comment: "Sawariya Traders' consistent quality and reliable delivery have made them our preferred supplier. They understand our requirements perfectly and always deliver on their promises.",
//     project: "Highway Bridge Construction",
//     date: "February 22, 2025"
//   },
//   {
//     name: "Sunil Mehta",
//     position: "Contractor, Alwar",
//     image: "/placeholder-avatar-4.jpg",
//     rating: 5,
//     comment: "As a contractor handling multiple projects, I need suppliers I can depend on. Sawariya Traders has never let me down with their premium quality products and excellent service.",
//     project: "Government School Construction",
//     date: "April 10, 2025"
//   },
// ]

// const productFeatures = [
//   {
//     title: "Superior Strength & Flexibility",
//     description: "Our TMT bars offer excellent tensile strength and ductility for safer structures.",
//     icon: <CheckCircle className="h-5 w-5 text-blue-600" />,
//     detail: "Tensile strength up to 600 MPa, with 20% elongation at break"
//   },
//   {
//     title: "Advanced Corrosion Resistance",
//     description: "Enhanced protection against environmental factors for longer-lasting construction.",
//     icon: <ShieldCheck className="h-5 w-5 text-blue-600" />,
//     detail: "Special alloy coating provides up to 25 years protection in normal environments"
//   },
//   {
//     title: "ISI & ISO Certified",
//     description: "All our products meet and exceed Indian and international quality standards.",
//     icon: <Award className="h-5 w-5 text-blue-600" />,
//     detail: "Certified under IS 1786:2008 and ISO 9001:2015 quality management systems"
//   },
//   {
//     title: "Earthquake Resistant",
//     description: "Specially designed to withstand seismic activities for safer buildings.",
//     icon: <CheckCircle className="h-5 w-5 text-blue-600" />,
//     detail: "Complies with IS 13920 for seismic resistance with high ductility ratio"
//   },
// ]

// const productCatalog = [
//   {
    
//   },
//   {
    
//   },
//   {
    
//   }
// ];

// const AIRecommendationEngine = ({ projectType, setRecommendedProduct }) => {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     projectType: projectType || "residential",
//     location: "",
//     budget: "medium",
//     floorCount: "",
//     specialRequirements: ""
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     setTimeout(() => {
//       let recommendedProductId = 1;
      
//       if (formData.projectType === "commercial" || formData.floorCount > 5) {
//         recommendedProductId = 2;
//       }
      
//       if (formData.location === "coastal" || formData.specialRequirements.toLowerCase().includes("corrosion")) {
//         recommendedProductId = 3;
//       }
      
//       if (formData.budget === "high" && formData.projectType === "infrastructure") {
//         recommendedProductId = 2;
//       }
      
//       const product = productCatalog.find(p => p.id === recommendedProductId);
//       setRecommendedProduct(product);
//       setLoading(false);
//     }, 1500);
//   };

//   return (
//     <div className="bg-blue-50 p-6 rounded-lg">
//       <div className="flex items-center gap-2 mb-4">
//         <BrainCircuit className="h-5 w-5 text-blue-600" />
//         <h4 className="font-semibold text-blue-800">AI Product Recommendation</h4>
//       </div>
      
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm text-blue-700 mb-1">Project Type</label>
//           <select 
//             name="projectType"
//             value={formData.projectType}
//             onChange={handleInputChange}
//             className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//           >
//             <option value="residential">Residential Building</option>
//             <option value="commercial">Commercial Building</option>
//             <option value="infrastructure">Infrastructure (Bridge/Flyover)</option>
//             <option value="industrial">Industrial Structure</option>
//           </select>
//         </div>
        
//         <div>
//           <label className="block text-sm text-blue-700 mb-1">Location Type</label>
//           <select 
//             name="location"
//             value={formData.location}
//             onChange={handleInputChange}
//             className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//           >
//             <option value="">Select Location Type</option>
//             <option value="urban">Urban Area</option>
//             <option value="coastal">Coastal Area</option>
//             <option value="seismic">Earthquake-Prone Zone</option>
//             <option value="industrial">Industrial Zone</option>
//           </select>
//         </div>
        
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm text-blue-700 mb-1">Budget Level</label>
//             <select 
//               name="budget"
//               value={formData.budget}
//               onChange={handleInputChange}
//               className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//             >
//               <option value="low">Economy</option>
//               <option value="medium">Standard</option>
//               <option value="high">Premium</option>
//             </select>
//           </div>
          
//           <div>
//             <label className="block text-sm text-blue-700 mb-1">Number of Floors</label>
//             <input 
//               type="number"
//               name="floorCount"
//               value={formData.floorCount}
//               onChange={handleInputChange}
//               placeholder="e.g. 4"
//               className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//             />
//           </div>
//         </div>
        
//         <div>
//           <label className="block text-sm text-blue-700 mb-1">Special Requirements</label>
//           <input 
//             type="text"
//             name="specialRequirements"
//             value={formData.specialRequirements}
//             onChange={handleInputChange}
//             placeholder="e.g. corrosion resistance, high load capacity"
//             className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
//           />
//         </div>
        
//         <button 
//           type="submit"
//           disabled={loading} 
//           className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center"
//         >
//           {loading ? (
//             <>
//               <Loader className="h-4 w-4 mr-2 animate-spin" />
//               Analyzing Requirements...
//             </>
//           ) : (
//             <>
//               <BrainCircuit className="h-4 w-4 mr-2" />
//               Get AI Recommendation
//             </>
//           )}
//         </button>
//       </form>
//     </div>
//   );
// };

// const MaterialCalculator = () => {
//   const [dimensions, setDimensions] = useState({
//     length: "",
//     width: "",
//     depth: "",
//     spacing: 150,
//     barSize: 12
//   });
  
//   const [result, setResult] = useState(null);
  
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setDimensions(prev => ({ ...prev, [name]: value }));
//   };
  
//   const calculateMaterial = (e) => {
//     e.preventDefault();
    
//     const { length, width, depth, spacing, barSize } = dimensions;
    
//     if (!length || !width) return;
    
//     const lengthM = parseFloat(length);
//     const widthM = parseFloat(width);
//     const spacingM = spacing / 1000;
    
//     const barDiameter = parseFloat(barSize) / 1000;
//     const barArea = Math.PI * Math.pow(barDiameter / 2, 2);
    
//     const barsAlongLength = Math.ceil(widthM / spacingM) + 1;
//     const barsAlongWidth = Math.ceil(lengthM / spacingM) + 1;
    
//     const totalBarLength = (barsAlongLength * lengthM) + (barsAlongWidth * widthM);
    
//     const volume = totalBarLength * barArea;
//     const weight = volume * 7850;
    
//     setResult({
//       totalBars: barsAlongLength + barsAlongWidth,
//       totalLength: totalBarLength.toFixed(2),
//       totalWeight: weight.toFixed(2),
//       tonsNeeded: (weight / 1000).toFixed(3)
//     });
//   };
  
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
//       <div className="flex items-center mb-4">
//         <Calculator className="h-6 w-6 text-blue-600 mr-2" />
//         <h3 className="text-xl font-bold text-blue-800">TMT Bar Calculator</h3>
//       </div>
      
//       <form onSubmit={calculateMaterial} className="space-y-4">
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-blue-700 text-sm mb-1">Length (meters)</label>
//             <input
//               type="number"
//               name="length"
//               value={dimensions.length}
//               onChange={handleInputChange}
//               required
//               step="0.01"
//               min="0"
//               className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//             />
//           </div>
          
//           <div>
//             <label className="block text-blue-700 text-sm mb-1">Width (meters)</label>
//             <input
//               type="number"
//               name="width"
//               value={dimensions.width}
//               onChange={handleInputChange}
//               required
//               step="0.01"
//               min="0"
//               className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//             />
//           </div>
//         </div>
        
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-blue-700 text-sm mb-1">Bar Size (mm)</label>
//             <select
//               name="barSize"
//               value={dimensions.barSize}
//               onChange={handleInputChange}
//               className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//             >
//               <option value="8">8 mm</option>
//               <option value="10">10 mm</option>
//               <option value="12">12 mm</option>
//               <option value="16">16 mm</option>
//               <option value="20">20 mm</option>
//               <option value="25">25 mm</option>
//               <option value="32">32 mm</option>
//             </select>
//           </div>
          
//           <div>
//             <label className="block text-sm text-blue-700 mb-1">Bar Spacing (mm)</label>
//             <select
//               name="spacing"
//               value={dimensions.spacing}
//               onChange={handleInputChange}
//               className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//             >
//               <option value="100">100 mm</option>
//               <option value="150">150 mm</option>
//               <option value="200">200 mm</option>
//               <option value="250">250 mm</option>
//             </select>
//           </div>
//         </div>
        
//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg w-full"
//         >
//           Calculate Materials
//         </button>
//       </form>
      
//       {result && (
//         <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
//           <h4 className="font-semibold text-blue-800 mb-2">Results:</h4>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <p className="text-sm text-blue-700">Total Bars Needed:</p>
//               <p className="font-semibold text-blue-900">{result.totalBars} bars</p>
//             </div>
//             <div>
//               <p className="text-sm text-blue-700">Total Length:</p>
//               <p className="font-semibold text-blue-900">{result.totalLength} meters</p>
//             </div>
//             <div>
//               <p className="text-sm text-blue-700">Total Weight:</p>
//               <p className="font-semibold text-blue-900">{result.totalWeight} kg</p>
//             </div>
//             <div>
//               <p className="text-sm text-blue-700">Quantity Required:</p>
//               <p className="font-semibold text-blue-900">{result.tonsNeeded} tons</p>
//             </div>
//           </div>
//           <div className="mt-3 flex justify-between items-center border-t border-blue-200 pt-3">
//             <p className="text-sm text-blue-600">Need a quotation for this quantity?</p>
//             <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded transition-all">
//               Request Quote
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default function WhyChooseUs() {
//   const [isMounted, setIsMounted] = useState(false)
//   const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
//   const [requestCallback, setRequestCallback] = useState(false)
//   const [formData, setFormData] = useState({ name: "", phone: "", company: "", message: "", email: "" })
//   const [formErrors, setFormErrors] = useState({})
//   const [submitted, setSubmitted] = useState(false)
//   const [darkMode, setDarkMode] = useState(false)
//   const [activeSection, setActiveSection] = useState(null)
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [recommendedProduct, setRecommendedProduct] = useState(null)
//   const [showProductDetail, setShowProductDetail] = useState(false)
//   const [currentProductImageIndex, setCurrentProductImageIndex] = useState(0)
  
//   const productImages = [
//     "https://res.cloudinary.com/dds6yoff3/image/upload/v1752656212/MS_Pipe_Steel_grbamx.jpg",
//     "https://res.cloudinary.com/dds6yoff3/image/upload/v1752656213/MS_Sheet_Steel_q3h1b9.jpg",
//     "https://res.cloudinary.com/dds6yoff3/image/upload/v1752658074/MS_pipe_3_sjfzff.jpg"
//   ]

//   useEffect(() => {
//     setIsMounted(true)
    
//     const interval = setInterval(() => {
//       setCurrentProductImageIndex((prev) => (prev + 1) % productImages.length)
//     }, 2000)
    
//     return () => clearInterval(interval)
//   }, [])

//   const ref = useRef(null)

//   const nextTestimonial = () => {
//     setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
//   }

//   const prevTestimonial = () => {
//     setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
//   }

//   const validateForm = () => {
//     const errors = {};
    
//     if (!formData.name.trim()) errors.name = "Name is required";
    
//     if (!formData.phone.trim()) {
//       errors.phone = "Phone number is required";
//     } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
//       errors.phone = "Please enter a valid 10-digit phone number";
//     }
    
//     if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       errors.email = "Please enter a valid email address";
//     }
    
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
    
//     if (formErrors[name]) {
//       setFormErrors(prev => ({...prev, [name]: null}));
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
    
//     if (!validateForm()) return;
    
//     console.log("Form submitted:", formData)
//     setSubmitted(true)
    
//     setTimeout(() => {
//       setSubmitted(false)
//       setRequestCallback(false)
//       setFormData({ name: "", phone: "", company: "", message: "", email: "" })
//     }, 3000)
//   }
  
//   const toggleDarkMode = () => {
//     setDarkMode(prev => !prev);
//   };
  
//   const viewProductDetail = (product) => {
//     setSelectedProduct(product);
//     setShowProductDetail(true);
//   };

//   return (
//     <section 
//       id="why-choose-us" 
//       className={`py-20 ${darkMode 
//         ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white' 
//         : 'bg-gradient-to-b from-blue-50 to-blue-100'}`}
//     >
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Dark Mode Toggle */}
//         <div className="absolute top-4 right-4">
//           <button 
//             onClick={toggleDarkMode}
//             className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-blue-100 text-blue-800'} transition-all`}
//           >
//             {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//           </button>
//         </div>
        
//         <div className="text-center mb-16">
//           <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Why Choose Sawariya Traders</h2>
//           <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-blue-700'} max-w-2xl mx-auto`}>
//             For over 18 years, we've been the trusted steel supplier for businesses across Rajasthan. Here's why our customers choose us.
//           </p>
//         </div>

//         <div className={`mb-20 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-blue-500'} rounded-xl shadow-xl overflow-hidden border-t-4`}>
//           <div className="grid md:grid-cols-2 items-center">
//             <div className="p-8 md:p-12">
//               <div>
//                 <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Premium Quality Steel Products</h3>
//                 <p className={`${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-8`}>
//                   Our steel products are sourced directly from top manufacturers, ensuring the highest quality for your construction projects. These products undergo rigorous quality checks and are certified to meet all industry standards.
//                 </p>

//                 <div className="grid md:grid-cols-2 gap-4 mb-8">
//                   {productFeatures.map((feature, index) => (
//                     <div 
//                       key={index} 
//                       className={`flex items-start gap-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-50 hover:bg-blue-100'} p-4 rounded-lg hover:shadow-md transition-all cursor-pointer group`}
//                       onClick={() => setActiveSection(index === activeSection ? null : index)}
//                     >
//                       <div className={`${darkMode ? 'bg-gray-600' : 'bg-blue-100'} p-2 rounded-full mt-1`}>
//                         {feature.icon}
//                       </div>
//                       <div>
//                         <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-blue-700'}`}>{feature.title}</h4>
//                         <p className={`${darkMode ? 'text-gray-300' : 'text-blue-600'} text-sm`}>
//                           {feature.description}
//                         </p>
                        
//                         {activeSection === index && (
//                           <div className="mt-2 pt-2 border-t border-dashed border-blue-200">
//                             <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-blue-500'}`}>
//                               {feature.detail}
//                             </p>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>

               
//               </div>
//             </div>

//             <div className="h-[400px] relative flex items-center justify-center overflow-hidden">
//               <div className={`absolute inset-0 ${darkMode ? 'bg-blue-800' : 'bg-blue-600'} opacity-20 z-0`}></div>
//               <div className="z-10 p-6 relative">
//                 <div className="flex items-center justify-center">
//                   <img 
//                     src={productImages[currentProductImageIndex]} 
//                     alt="Premium Steel Products" 
//                     className="rounded-lg shadow-2xl max-w-full h-auto max-h-[300px] object-contain" 
//                   />
//                 </div>
                
//                 <div className={`absolute -bottom-4 -right-4 ${darkMode ? 'bg-gray-700' : 'bg-white'} p-4 rounded-lg shadow-lg`}>
//                   <div className="flex gap-1">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                     ))}
//                   </div>
//                   <p className={`font-bold ${darkMode ? 'text-white' : 'text-blue-800'} mt-1`}>Top Rated Quality</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* AI Product Recommendations Section */}
//         {recommendedProduct && (
//           <div className={`mb-10 ${darkMode ? 'bg-gray-800 border-blue-400' : 'bg-white border-blue-500'} rounded-xl shadow-xl overflow-hidden border-t-4 p-6`}>
//             <div className="flex items-center mb-4">
//               <BrainCircuit className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-2`} />
//               <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-blue-800'}`}>AI Recommended Product</h3>
//             </div>
            
//             <div className="grid md:grid-cols-3 gap-6 items-center">
//               <div>
//                 <div className={`bg-gradient-to-br ${darkMode ? 'from-gray-700 to-gray-600' : 'from-blue-100 to-blue-50'} rounded-lg p-4 flex items-center justify-center`}>
//                   <img src={recommendedProduct.image} alt={recommendedProduct.name} className="max-w-full h-auto rounded shadow-md" />
//                 </div>
//               </div>
              
//               <div className="md:col-span-2">
//                 <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-blue-800'} mb-1`}>{recommendedProduct.name}</h4>
//                 <p className={`${darkMode ? 'text-gray-400' : 'text-blue-600'} text-sm`}>Brand: {recommendedProduct.brand}</p>
                
//                 <div className="flex items-center mt-2 mb-3">
//                   <div className="flex">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className={`h-4 w-4 ${i < Math.floor(recommendedProduct.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`} />
//                     ))}
//                   </div>
//                   <span className="ml-2 text-sm text-blue-600">{recommendedProduct.rating}/5</span>
//                   <span className={`ml-4 text-xs px-2 py-0.5 rounded-full ${darkMode ? 'bg-green-800 text-green-100' : 'bg-green-100 text-green-800'}`}>
//                     {recommendedProduct.stock}
//                   </span>
//                 </div>
                
//                 <p className={`${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-3`}>{recommendedProduct.description}</p>
                
//                 <div className="mb-4">
//                   <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-blue-700'}`}>Available Sizes:</p>
//                   <div className="flex flex-wrap gap-2 mt-1">
//                     {recommendedProduct.sizes.map((size, idx) => (
//                       <span key={idx} className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-blue-100 text-blue-700'}`}>
//                         {size}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div className="flex flex-wrap items-center gap-3">
//                   <p className={`font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>{recommendedProduct.price}</p>
                  
//                   <div className="flex gap-2">
//                     <button className={`${darkMode 
//                       ? 'bg-blue-500 hover:bg-blue-600 text-white' 
//                       : 'bg-blue-600 hover:bg-blue-700 text-white'} text-sm font-medium py-1.5 px-4 rounded transition-all`}>
//                       Request Quote
//                     </button>
                    
//                     <button 
//                       onClick={() => viewProductDetail(recommendedProduct)}
//                       className={`${darkMode 
//                         ? 'bg-gray-700 hover:bg-gray-600 text-white border border-blue-400' 
//                         : 'bg-white hover:bg-blue-50 text-blue-600 border border-blue-500'} text-sm font-medium py-1.5 px-4 rounded transition-all`}>
//                       Product Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="mt-4 pt-4 border-t border-dashed border-blue-200">
//               <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-blue-600'}`}>
//                 <ThumbsUp className="h-4 w-4 inline-block mr-1" />
//                 Best choice for your project type and requirements. AI recommendation based on your inputs.
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Main Features Section */}
//         <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//           {reasons.map((reason, index) => (
//             <div
//               key={index}
//               className={`${darkMode 
//                 ? 'bg-gray-800 border-blue-400' 
//                 : 'bg-white border-blue-500'} p-6 rounded-lg shadow-lg transition-all duration-300 flex flex-col h-full border-t-4`}
//             >
//               <div className={`${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-600'} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
//                 {reason.icon}
//               </div>
//               <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-blue-800'}`}>{reason.title}</h3>
//               <p className={`${darkMode ? 'text-gray-300' : 'text-blue-600'} flex-grow`}>{reason.description}</p>
//             </div>
//           ))}
//         </div>

       
//       </div> 
      
  
      
//     </section>
//   )
// }

///////
// "use client"
// import React, { useState, useEffect } from "react"
// import { Award, ShieldCheck, Truck, DollarSign, CheckCircle, Users, ChevronLeft, ChevronRight, Star, ArrowRight, Phone, Mail } from "lucide-react"

// // Mock Link component for demonstration - replace with actual React Router Link
// const Link = ({ to, children, className, ...props }) => (
//   <a href={to} className={className} {...props}>
//     {children}
//   </a>
// )

// const reasons = [
//   {
//     icon: <Award className="h-8 w-8 text-blue-600" />,
//     title: "18+ Years of Excellence",
//     description: "Since 2005, delivering unmatched expertise in steel supply for construction projects across India.",
//     stat: "18+ Years",
//     color: "blue"
//   },
//   {
//     icon: <ShieldCheck className="h-8 w-8 text-emerald-600" />,
//     title: "Certified Quality",
//     description: "100% genuine products with ISO and ISI certifications ensuring reliability and safety standards.",
//     stat: "ISO Certified",
//     color: "emerald"
//   },
//   {
//     icon: <Users className="h-8 w-8 text-purple-600" />,
//     title: "Trusted by Industry Leaders",
//     description: "Preferred by 100+ top builders across Rajasthan for consistent quality and timely delivery.",
//     stat: "100+ Clients",
//     color: "purple"
//   },
//   {
//     icon: <Truck className="h-8 w-8 text-orange-600" />,
//     title: "Swift Delivery",
//     description: "Timely deliveries to keep your projects on schedule with our efficient logistics network.",
//     stat: "On-Time",
//     color: "orange"
//   },
//   {
//     icon: <DollarSign className="h-8 w-8 text-green-600" />,
//     title: "Competitive Pricing",
//     description: "Premium quality steel at prices that fit your project budget without compromising quality.",
//     stat: "Best Price",
//     color: "green"
//   },
//   {
//     icon: <CheckCircle className="h-8 w-8 text-indigo-600" />,
//     title: "Seismic-Ready Products",
//     description: "TMT bars designed for earthquake resistance and structural safety meeting all safety norms.",
//     stat: "Safety First",
//     color: "indigo"
//   },
// ]

// const productImages = [
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/MS%20pipe%203.0.jpg?updatedAt=1752817306895",
//     title: "MS Pipe Heavy Duty",
//     description: "Heavy duty mild steel pipes for construction",
//     category: "Pipes"
//   },
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/MS%20Pipe%20Steel%20.jpg?updatedAt=1752817306534",
//     title: "Steel Pipes Premium",
//     description: "Professional grade steel pipes",
//     category: "Pipes"
//   },
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/MS%20Sheet%20Steel.jpg?updatedAt=1752817306502",
//     title: "Steel Sheets Industrial",
//     description: "Premium steel sheets for industrial use",
//     category: "Sheets"
//   },
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/MS%20pipe%202.jpg?updatedAt=1752817334875",
//     title: "MS Pipe Standard",
//     description: "Standard MS Pipe for construction projects",
//     category: "Pipes"
//   },
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/ms%20sheet.png?updatedAt=1752817306273",
//     title: "MS Sheet Commercial",
//     description: "High-quality mild steel sheets for construction",
//     category: "Sheets"
//   },
//   {
//     url: "https://ik.imagekit.io/xzjipji0j/ms%20pipe%205.png?updatedAt=1752817306520",
//     title: "MS Pipe Structural",
//     description: "Durable mild steel pipes for structural applications",
//     category: "Pipes"
//   }
// ]

// const stats = [
//   { number: "18+", label: "Years Experience", icon: <Award className="h-5 w-5" /> },
//   { number: "500+", label: "Projects Completed", icon: <CheckCircle className="h-5 w-5" /> },
//   { number: "100+", label: "Happy Clients", icon: <Users className="h-5 w-5" /> },
//   { number: "24/7", label: "Customer Support", icon: <Phone className="h-5 w-5" /> }
// ]

// export default function WhyChooseUs() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)
//   const [hoveredCard, setHoveredCard] = useState(null)

//   useEffect(() => {
//     if (!isAutoPlaying) return
    
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
//     }, 4000)
//     return () => clearInterval(interval)
//   }, [isAutoPlaying])

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
//     setIsAutoPlaying(false)
//     setTimeout(() => setIsAutoPlaying(true), 5000)
//   }

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
//     setIsAutoPlaying(false)
//     setTimeout(() => setIsAutoPlaying(true), 5000)
//   }

//   const goToImage = (index) => {
//     setCurrentImageIndex(index)
//     setIsAutoPlaying(false)
//     setTimeout(() => setIsAutoPlaying(true), 5000)
//   }

//   return (
//     <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-600 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-600 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg border border-blue-200">
//             <Star className="h-4 w-4 fill-current animate-pulse" />
//             Industry Leading Steel Supplier
//           </div>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-800 leading-tight">
//             Why Choose
//             <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
//               Sawariya Traders
//             </span>
//           </h2>
//           <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//             With over 18 years of expertise, we're Rajasthan's most trusted steel supplier, 
//             delivering certified quality and reliability to builders and contractors nationwide.
//           </p>
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
//             >
//               <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-xl w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
//                 {stat.icon}
//               </div>
//               <div className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
//               <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
//           {/* Enhanced Image Gallery */}
//           <div className="relative">
//             <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border border-blue-100">
//               <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 shadow-inner">
//                 {/* Main Image */}
//                 <div className="relative h-full group">
//                   <img
//                     src={productImages[currentImageIndex].url}
//                     alt={productImages[currentImageIndex].title}
//                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
//                     onMouseEnter={() => setIsAutoPlaying(false)}
//                     onMouseLeave={() => setIsAutoPlaying(true)}
//                   />
                  
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  
//                   {/* Category Badge */}
//                   <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
//                     {productImages[currentImageIndex].category}
//                   </div>
                  
//                   {/* Image Info */}
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <h3 className="text-xl font-bold mb-1">{productImages[currentImageIndex].title}</h3>
//                     <p className="text-sm text-gray-200">{productImages[currentImageIndex].description}</p>
//                   </div>
                  
//                   {/* Navigation Arrows */}
//                   <button
//                     onClick={prevImage}
//                     className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all hover:scale-110 group"
//                   >
//                     <ChevronLeft className="h-5 w-5 text-white group-hover:text-blue-200" />
//                   </button>
//                   <button
//                     onClick={nextImage}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all hover:scale-110 group"
//                   >
//                     <ChevronRight className="h-5 w-5 text-white group-hover:text-blue-200" />
//                   </button>
//                 </div>
                
//                 {/* Dot Indicators */}
//                 <div className="absolute bottom-4 right-4 flex gap-2">
//                   {productImages.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => goToImage(index)}
//                       className={`w-2.5 h-2.5 rounded-full transition-all ${
//                         currentImageIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>
              
//               {/* Thumbnail Strip */}
//               <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
//                 {productImages.map((image, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToImage(index)}
//                     className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all hover:scale-105 ${
//                       currentImageIndex === index ? "border-blue-500 shadow-lg" : "border-gray-200 hover:border-blue-300"
//                     }`}
//                   >
//                     <img
//                       src={image.url}
//                       alt={image.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>
            
//             {/* Quality Badge */}
//             <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-xl border-2 border-white">
//               <div className="flex items-center gap-2">
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="h-4 w-4 fill-current text-yellow-300 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
//                   ))}
//                 </div>
//                 <span className="text-sm font-semibold">Premium Quality</span>
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 leading-tight">
//                 Premium Steel Solutions for 
//                 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                   {" "}Modern Construction
//                 </span>
//               </h3>
//               <p className="text-lg text-slate-600 leading-relaxed mb-6">
//                 Our TMT bars and MS products are sourced from top-tier manufacturers, 
//                 ensuring superior strength, durability, and compliance with international 
//                 ISO and ISI standards for your peace of mind.
//               </p>
//               <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
//                 <div className="bg-blue-100 p-2 rounded-lg">
//                   <ShieldCheck className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <div>
//                   <div className="font-semibold text-slate-800">Quality Guaranteed</div>
//                   <div className="text-sm text-slate-600">ISO & ISI Certified Products</div>
//                 </div>
//               </div>
//             </div>

//             {/* Key Features */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {reasons.slice(0, 4).map((reason, index) => (
//                 <div
//                   key={index}
//                   className={`bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-${reason.color}-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer`}
//                   onMouseEnter={() => setHoveredCard(index)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                 >
//                   <div className="flex items-start gap-3">
//                     <div className={`bg-${reason.color}-100 p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
//                       {reason.icon}
//                     </div>
//                     <div className="flex-1">
//                       <div className={`text-sm font-bold text-${reason.color}-600 mb-1`}>{reason.stat}</div>
//                       <h4 className="font-semibold text-slate-800 text-sm mb-2">{reason.title}</h4>
//                       <p className="text-xs text-slate-600 leading-relaxed">{reason.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Enhanced CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link 
//                 to="/products" 
//                 className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
//               >
//                 Explore Our Products
//                 <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </Link>
//               <Link 
//                 to="/quote" 
//                 className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
//               >
//                 Get Instant Quote
//                 <DollarSign className="h-5 w-5 group-hover:scale-110 transition-transform" />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Reasons Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {reasons.map((reason, index) => (
//             <div
//               key={index}
//               className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-${reason.color}-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer`}
//               style={{
//                 animationDelay: `${index * 0.1}s`
//               }}
//             >
//               <div className={`bg-gradient-to-br from-${reason.color}-100 to-${reason.color}-200 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
//                 {reason.icon}
//               </div>
//               <div className={`text-xs font-bold text-${reason.color}-600 mb-2 uppercase tracking-wider`}>{reason.stat}</div>
//               <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">{reason.title}</h3>
//               <p className="text-slate-600 leading-relaxed">{reason.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Enhanced Bottom CTA */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-blue-100 relative overflow-hidden">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-5">
//               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl"></div>
//             </div>
            
//             <div className="relative z-10">
//               <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
//                 <Phone className="h-4 w-4" />
//                 Get Started Today
//               </div>
//               <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
//                 Ready to Build with 
//                 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                   {" "}Premium Steel?
//                 </span>
//               </h3>
//               <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
//                 Join hundreds of satisfied customers who trust Sawariya Traders for their steel requirements. 
//                 Get competitive quotes and expert consultation with our 24/7 customer support.
//               </p>
              
//               {/* Contact Info */}
//               <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
//                 <div className="flex items-center gap-3 text-slate-600">
//                   <div className="bg-blue-100 p-2 rounded-lg">
//                     <Phone className="h-5 w-5 text-blue-600" />
//                   </div>
//                   <div>
//                     <div className="font-semibold">Call Us Now</div>
//                     <div className="text-sm">+91 87082 75179</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3 text-slate-600">
//                   <div className="bg-blue-100 p-2 rounded-lg">
//                     <Mail className="h-5 w-5 text-blue-600" />
//                   </div>
//                   <div>
//                     <div className="font-semibold">Email Us</div>
//                     <div className="text-sm">info@sawariyatraders.com</div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link 
//                   to="/contact" 
//                   className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
//                 >
//                   Contact Us Today
//                   <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//                 <Link 
//                   to="/products" 
//                   className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-xl font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
//                 >
//                   View Catalog
//                   <Star className="h-5 w-5 group-hover:scale-110 transition-transform" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

