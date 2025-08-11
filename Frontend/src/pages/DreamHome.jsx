
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Check, Home, Shield, Award, ArrowRight, 
  Star, ChevronRight, MessageCircle, Phone
} from "lucide-react";
import { Link } from "react-router-dom";

export default function DreamHome() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // State for form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  // State for testimonial navigation
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Success toast state
  const [showToast, setShowToast] = useState(false);
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    // Show success toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  
  // Testimonial data
  const testimonials = [
    {
      name: "Rahul Sharma",
      position: "Homeowner",
      content: "Using Shri Durga Steel for my home construction was the best decision. The quality is exceptional and the technical support made everything easier.",
      rating: 5
    },
    {
      name: "Priya Patel",
      position: "Architect",
      content: "As an architect, I always recommend Shri Durga Steel to my clients. Their products consistently meet our high standards for quality and durability.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      position: "Builder",
      content: "We've been using their TMT bars for years. The consistency in quality and on-time delivery keeps our projects on schedule every time.",
      rating: 4
    }
  ];
  
  // Product features
  const productFeatures = [
    {
      title: "Superior Strength",
      desc: "Our TMT bars provide exceptional strength and durability for your home's structure.",
      icon: Shield
    },
    {
      title: "Earthquake Resistant",
      desc: "Our steel products offer excellent ductility, making your home more resistant to seismic activities.",
      icon: Shield
    },
    {
      title: "Corrosion Resistant",
      desc: "Enhanced corrosion resistance ensures longevity even in humid conditions.",
      icon: Shield
    }
  ];
  
  // Services offered
  const services = [
    {
      title: "Free Technical Consultation",
      description: "Get expert advice on the right steel products for your specific construction needs.",
      icon: MessageCircle
    },
    {
      title: "Same-Day Delivery",
      description: "Never delay your construction with our prompt delivery services across the region.",
      icon: ArrowRight
    },
    {
      title: "24/7 Support",
      description: "Our customer service team is available round the clock to address your concerns.",
      icon: Phone
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="py-20 md:py-28 overflow-hidden relative" ref={ref}>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col items-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-24 h-1 bg-blue-600 mb-8 rounded-full"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold text-center mb-6 text-blue-900 tracking-tight drop-shadow-lg"
            >
              Build Your Dream Home<br />
              <span className="text-blue-700">with Sawariya Traders</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-blue-700 max-w-2xl text-center mb-6 font-medium"
            >
              Premium steel & TMT bars for a foundation that lasts generations. Trusted by thousands of builders & homeowners.
            </motion.p>
            <motion.div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <Link
                  to="/products"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                >
                  Explore Products <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="tel:8708275179"
                className="bg-white border border-blue-600 text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg shadow hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="h-5 w-5" /> 87082 75179
              </motion.a>
            </motion.div>
            <span className="text-blue-500 text-sm font-medium">Serving quality steel since 2005</span>
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="inline-flex items-center bg-blue-100 text-blue-600 px-5 py-2 rounded-full mb-8 text-lg font-semibold shadow-sm">
                <Home className="h-6 w-6 mr-2" />
                One-Stop Steel Solution
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Premium Steel for Your Dream Home</h2>

              <p className="text-lg text-blue-700 mb-8">
                At Sawariya Traders, we supply only the highest quality steel and TMT bars, sourced from top manufacturers and tested for strength, flexibility, and durability. Build with confidence, build with the best.
              </p>

              <div className="space-y-5 mb-10">
                {productFeatures.map((item, idx) => (
                  <div className="flex items-start gap-4" key={idx}>
                    <div className="bg-blue-100 p-3 rounded-full shadow">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 text-lg">{item.title}</h4>
                      <p className="text-blue-700 text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div style={{ y, opacity }} className="relative order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100">
                <img
                  src="https://ik.imagekit.io/xzjipji0j/house3.png?updatedAt=1753075319075"
                  alt="Modern Home Construction"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-7 -left-7 bg-white p-5 rounded-xl shadow-xl flex items-center gap-4 border-t-4 border-blue-600"
              >
                <Shield className="h-12 w-12 text-blue-600" />
                <div>
                  <h4 className="font-bold text-blue-900 text-xl">50+ Years</h4>
                  <p className="text-base text-blue-700">Durability Guarantee</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-7 -right-7 bg-white p-5 rounded-xl shadow-xl flex items-center gap-4 border-t-4 border-blue-600"
              >
                <Award className="h-12 w-12 text-blue-600" />
                <div>
                  <p className="text-base text-blue-700">Certified Quality</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Decorative background shapes */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-2xl opacity-40" />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-200 to-transparent rounded-full blur-2xl opacity-30" />
        </div>
      </section>

      {/* Savings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">More Strength = More Savings</h3>
                <p className="mb-6 text-blue-700">
                  More load carrying capacity of the rebars. For a given design load, fewer number of rebars or reduced
                  diameter is required.
                </p>
                <ul className="space-y-3">
                  {[
                    "Minimum YS of 570*MPa (More than IS1786:2008 – 550MPa)",
                    "Easily carries design load without any structural cracks",
                    "Optimised design leads to reduce steel consumption",
                    "Up to 6%^ savings on steel quantity",
                  ].map((point, idx) => (
                    <li className="flex items-start gap-2" key={idx}>
                      <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span className="text-blue-700">{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-blue-500 mt-4">
                  * Typical value as obtained in 95% of the cases
                  <br />^ Savings % based on study done for 500 and 550 grade rebar for typical RCC frame (SMRF)
                  configurations
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://ik.imagekit.io/xzjipji0j/MS%20Pipe%20Steel%20.jpg?updatedAt=1752817306534"
                  alt="Steel strength comparison"
                  className="rounded-lg shadow-md max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Premium Services</h2>
            <p className="text-blue-700 max-w-2xl mx-auto">
              We're committed to providing comprehensive support throughout your construction journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-500"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-800">{service.title}</h3>
                <p className="text-blue-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    
    </div>
  );
}

// "use client"
// import React from "react"
// import { motion, useScroll, useTransform } from "framer-motion"
// import { useRef } from "react"
// import { Check, Home, Shield, Award, ArrowRight } from "lucide-react"
// import { Link } from "react-router-dom"

// export default function DreamHome() {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   })

//   const y = useTransform(scrollYProgress, [0, 1], [50, -50])
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

//   return (
//     <section className="py-24 bg-white overflow-hidden" ref={ref}>
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex flex-col items-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="w-20 h-1 bg-yellow-500 mb-6"
//           />
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-3xl md:text-4xl font-bold text-center mb-4"
//           >
//             Your Dream Home One-Stop-Shop
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg text-gray-600 max-w-3xl text-center"
//           >
//             Building your dream home requires the best materials for a strong foundation and structure
//           </motion.p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="order-2 md:order-1"
//           >
//             <div className="inline-flex items-center bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full mb-6">
//               <Home className="h-5 w-5 mr-2" />
//               <span className="font-medium">Build Strong, Live Safe</span>
//             </div>

//             <h3 className="text-2xl md:text-3xl font-bold mb-6">Premium Steel for Your Dream Home</h3>

//             <p className="text-lg text-gray-600 mb-8">
//               At Shri Durga Steel, we provide premium quality TMT bars and steel products that ensure your home stands
//               strong for generations to come. Our products are sourced directly from leading manufacturers and undergo
//               rigorous quality checks.
//             </p>

//             <div className="space-y-4 mb-8">
//               {[
//                 {
//                   title: "Superior Strength",
//                   desc: "Our TMT bars provide exceptional strength and durability for your home's structure.",
//                 },
//                 {
//                   title: "Earthquake Resistant",
//                   desc: "Our steel products offer excellent ductility, making your home more resistant to seismic activities.",
//                 },
//                 {
//                   title: "Corrosion Resistant",
//                   desc: "Enhanced corrosion resistance ensures longevity even in humid conditions.",
//                 },
//               ].map((item, idx) => (
//                 <div className="flex items-start gap-3" key={idx}>
//                   <div className="bg-green-100 p-1 rounded-full">
//                     <Check className="h-5 w-5 text-green-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium">{item.title}</h4>
//                     <p className="text-gray-600">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-wrap gap-4">
//               <Link href="/products">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-yellow-500 text-black px-6 py-3 rounded-md font-medium hover:bg-yellow-400 transition-colors shadow-md inline-flex items-center"
//                 >
//                   Explore Our Products
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </motion.button>
//               </Link>

//               <Link href="/quote">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-white border-2 border-black text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
//                 >
//                   Request a Quote
//                 </motion.button>
//               </Link>
//             </div>
//           </motion.div>

//           <motion.div style={{ y, opacity }} className="relative order-1 md:order-2">
//             <div className="rounded-xl overflow-hidden shadow-2xl">
//               <img
//                 src="/placeholder.svg?height=600&width=800"
//                 alt="Modern Home Construction"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl flex items-center gap-3"
//             >
//               <Shield className="h-10 w-10 text-blue-600" />
//               <div>
//                 <h4 className="font-bold">50+ Years</h4>
//                 <p className="text-sm text-gray-600">Durability Guarantee</p>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl flex items-center gap-3"
//             >
//               <Award className="h-10 w-10 text-yellow-600" />
//               <div>
//                 <h4 className="font-bold">ISO 9001</h4>
//                 <p className="text-sm text-gray-600">Certified Quality</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         <div className="mt-24 bg-gray-50 p-8 rounded-xl shadow-lg">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h3 className="text-2xl font-bold mb-4">More Strength = More Savings</h3>
//               <p className="mb-4 text-gray-600">
//                 More load carrying capacity of the rebars. For a given design load, fewer number of rebars or reduced
//                 diameter is required.
//               </p>
//               <ul className="space-y-3">
//                 {[
//                   "Minimum YS of 570*MPa (More than IS1786:2008 – 550MPa)",
//                   "Easily carries design load without any structural cracks",
//                   "Optimised design leads to reduce steel consumption",
//                   "Up to 6%^ savings on steel quantity",
//                 ].map((point, idx) => (
//                   <li className="flex items-start gap-2" key={idx}>
//                     <Check className="h-5 w-5 text-yellow-500 mt-0.5" />
//                     <span className="text-gray-700">{point}</span>
//                   </li>
//                 ))}
//               </ul>
//               <p className="text-xs text-gray-500 mt-4">
//                 * Typical value as obtained in 95% of the cases
//                 <br />^ Savings % based on study done for 500 and 550 grade rebar for typical RCC frame (SMRF)
//                 configurations
//               </p>
//             </div>
//             <div className="flex items-center justify-center">
//               <img
//                 src="/placeholder.svg?height=300&width=400"
//                 alt="Steel strength comparison"
//                 className="rounded-lg shadow-md max-w-full h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

