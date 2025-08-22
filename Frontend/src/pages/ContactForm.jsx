
"use client"
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send, Check, Clock, ExternalLink, MessageSquare, Building, FileText } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("form")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      }, 5000)
    }, 1500)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="relative inline-block text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            Contact Us
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-blue-700/70 max-w-2xl mx-auto mt-6">
            We are leading stockists and suppliers of TMT Rebars across India. Reach out to our team for quotes and steel requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left sidebar with contact info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-blue-700 text-white p-6">
                <h3 className="text-xl font-bold mb-2">Hariom Steel Infra Pvt Ltd.</h3>
                <p className="text-blue-100">Auth. Distributor: JSW Neo Steel (U.P)</p>
                <p className="text-blue-100 text-sm mt-2">Leading stockists and suppliers of TMT Rebars across India</p>
              </div>
              
              <div className="p-6 space-y-6">
                <motion.div variants={itemVariants} className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone Numbers</h4>
                    <div className="space-y-1">
                      <a 
                        href="tel:+919312236954" 
                        className="block text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors"
                      >
                        +91 93122 36954
                      </a>
                      <a 
                        href="tel:+919312240849" 
                        className="block text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors"
                      >
                        +91 93122 40849
                      </a>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a 
                      href="mailto:HariomsteelInfra@gmail.com" 
                      className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors break-all"
                    >
                      HariomsteelInfra@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                    <Building className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Branch Office & Godown</h4>
                    <div className="text-gray-700 space-y-2 text-sm">
                      <address className="not-italic">
                        <strong>Delhi:</strong><br/>
                        D-1/115 Phase-2, Mayapuri Industrial Area,<br/>
                        New Delhi-110064
                      </address>
                      <address className="not-italic">
                        <strong>Munaka:</strong><br/>
                        KHASRA NO. - 634, Hiran Kudna Village,<br/>
                        Muneka, New Delhi - 110041
                      </address>
                      <address className="not-italic">
                        <strong>Ghaziabad:</strong><br/>
                        E-126, Bulandshahr Road, Loha Mandi,<br/>
                        Industrial Area, Ghaziabad, UP-201009
                      </address>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Company Details</h4>
                    <div className="text-gray-700 text-sm space-y-1">
                      <div><strong>CIN:</strong> U24109DL2025PTC442911</div>
                      <div><strong>PAN:</strong> AAHCH7554G</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <div className="text-gray-700 space-y-1">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* WhatsApp and Contact Actions */}
              <div className="p-6 bg-blue-50">
                <div className="flex flex-wrap gap-3 items-center">
                  <a href="https://wa.me/919312236954" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md transition-colors shadow text-sm">
                    <MessageSquare className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                  <a href="https://www.google.com/maps/search/?api=1&query=D-1/115+Phase-2,+Mayapuri+Industrial+Area,+New+Delhi-110064" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md transition-colors shadow text-sm">
                    <ExternalLink className="h-4 w-4" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side with tabs for form and map */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("form")}
                  className={`flex-1 py-4 text-center font-medium transition-colors ${
                    activeTab === "form" 
                      ? "text-blue-700 border-b-2 border-blue-700" 
                      : "text-gray-500 hover:text-blue-600"
                  }`}
                >
                  Contact Form
                </button>
                <button
                  onClick={() => setActiveTab("map")}
                  className={`flex-1 py-4 text-center font-medium transition-colors ${
                    activeTab === "map" 
                      ? "text-blue-700 border-b-2 border-blue-700" 
                      : "text-gray-500 hover:text-blue-600"
                  }`}
                >
                  Office Locations
                </button>
              </div>

              <div className="p-6">
                {activeTab === "form" ? (
                  <>
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-50 border border-green-100 rounded-lg p-8 text-center min-h-[400px] flex flex-col items-center justify-center"
                      >
                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                          <Check className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-green-800 mb-4">Message Sent Successfully!</h3>
                        <p className="text-green-700 mb-6 max-w-md">
                          Thank you for reaching out to Hariom Steel Infra. Our team will review your inquiry and get back to you as soon as possible.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="space-y-5"
                      >
                        <div className="grid md:grid-cols-2 gap-5">
                          <motion.div variants={itemVariants}>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="Enter your full name"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                          </motion.div>

                          <motion.div variants={itemVariants}>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="your.email@example.com"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                          </motion.div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                          <motion.div variants={itemVariants}>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              placeholder="+91 93122 36954"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                          </motion.div>

                          <motion.div variants={itemVariants}>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                              Subject *
                            </label>
                            <select
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            >
                              <option value="">Select inquiry type</option>
                              <option value="TMT Rebars Inquiry">TMT Rebars Inquiry</option>
                              <option value="JSW Neo Steel Query">JSW Neo Steel Query</option>
                              <option value="Bulk Order Request">Bulk Order Request</option>
                              <option value="Price Quotation">Price Quotation</option>
                              <option value="Technical Support">Technical Support</option>
                              <option value="General Inquiry">General Inquiry</option>
                            </select>
                          </motion.div>
                        </div>

                        <motion.div variants={itemVariants}>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Message *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder="Please include details about your steel requirements, quantities, specifications, or any specific questions..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          ></textarea>
                        </motion.div>

                        <motion.button
                          variants={itemVariants}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={isLoading}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center disabled:opacity-70 shadow-md"
                        >
                          {isLoading ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Processing...
                            </>
                          ) : (
                            <>
                              Send Message <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </motion.button>
                      </motion.form>
                    )}
                  </>
                ) : (
                  <div className="space-y-6">
                    {/* Office Locations */}
                    <div className="grid gap-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-bold text-blue-800 mb-2">Delhi Office & Godown</h4>
                        <div className="text-sm text-gray-700 mb-3">
                          D-1/115 Phase-2, Mayapuri Industrial Area,<br/>
                          New Delhi-110064
                        </div>
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6234567890!2d77.1234567!3d28.6234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                          width="100%" 
                          height="200" 
                          style={{ border: 0 }} 
                          allowFullScreen="" 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Delhi Office Location"
                          className="rounded-lg"
                        ></iframe>
                        <a 
                          href="https://www.google.com/maps/search/?api=1&query=D-1/115+Phase-2,+Mayapuri+Industrial+Area,+New+Delhi-110064" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mt-2"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Get Directions
                        </a>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-bold text-blue-800 mb-2">Muneka Branch</h4>
                        <div className="text-sm text-gray-700 mb-3">
                          KHASRA NO. - 634, Hiran Kudna Village,<br/>
                          Muneka, New Delhi - 110041
                        </div>
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6234567890!2d77.1234567!3d28.6234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                          width="100%" 
                          height="200" 
                          style={{ border: 0 }} 
                          allowFullScreen="" 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Muneka Branch Location"
                          className="rounded-lg"
                        ></iframe>
                        <a 
                          href="https://www.google.com/maps/search/?api=1&query=KHASRA+NO.+634,+Hiran+Kudna+Village,+Muneka,+New+Delhi+110041" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mt-2"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Quick Steel Quotes</h3>
            <p className="mb-4 text-blue-100">Need fast estimates for TMT Rebars? Our expert team provides competitive pricing.</p>
            <a href="tel:+919312236954" className="inline-flex items-center bg-white text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              Call: +91 93122 36954
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">WhatsApp Support</h3>
            <p className="mb-4 text-green-100">Chat directly with our steel experts for instant support and quick responses.</p>
            <a href="https://wa.me/919312236954" className="inline-flex items-center bg-white text-green-700 px-4 py-2 rounded-md font-medium hover:bg-green-50 transition-colors">
              <MessageSquare className="h-4 w-4 mr-2" />
              WhatsApp Now
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-blue-800 to-blue-950 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Detailed Inquiry</h3>
            <p className="mb-4 text-blue-100">Send comprehensive requirements for bulk orders and technical specifications.</p>
            <a href="mailto:HariomsteelInfra@gmail.com" className="inline-flex items-center bg-white text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              Email Us
            </a>
          </div>
        </motion.div>

        {/* Additional Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 rounded-xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4">We Provide Steel Across India!</h3>
          <p className="text-blue-100 mb-6 max-w-4xl mx-auto">
            We specialize in TMT Rebars (Full Length & Short Length) from premium brands: SAIL, TATA, JSW, JINDAL PANTHER. 
            We also deal in - Angle, Girder, Channel, Square Bars, Plates, Pipes, Sheets, etc. 
            Secondary steel brands: RASHMI, RATHI, KAMDHENU, JINDAL, PRIME GOLD, SWROOP, RANA, K.L, CENTURY ETC.
          </p>
          <div className="text-lg font-semibold">
            Feel free to reach out for specific requirements or inquiries!
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// "use client"
// import React, { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { Phone, Mail, MapPin, Send, Check, Clock, ExternalLink, MessageSquare } from "lucide-react"

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   })

//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)
//   const [activeTab, setActiveTab] = useState("form")

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setIsLoading(true)

//     // Simulate form submission
//     setTimeout(() => {
//       setIsLoading(false)
//       setIsSubmitted(true)

//       setTimeout(() => {
//         setIsSubmitted(false)
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//         })
//       }, 5000)
//     }, 1500)
//   }

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   }

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5 }
//     }
//   }

//   return (
//     <section id="contact" className="py-16 bg-gradient-to-b from-blue-50 to-white">
//       <div className="container mx-auto px-4 md:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="relative inline-block text-3xl md:text-4xl font-bold mb-4 text-blue-900">
//             Contact Us
//             <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></span>
//           </h2>
//           <p className="text-lg text-blue-700/70 max-w-2xl mx-auto mt-6">
//             We're here to help with your steel requirements. Reach out to our team for inquiries, quotes, or support.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-5 gap-8">
//           {/* Left sidebar with contact info */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="lg:col-span-2"
//           >
//             <div className="bg-white rounded-xl shadow-xl overflow-hidden">
//               <div className="bg-blue-700 text-white p-6">
//                 <h3 className="text-xl font-bold mb-2">Contact Information</h3>
//                 <p className="text-blue-100">We're eager to hear from you. Reach out through any of these channels.</p>
//               </div>
              
//               <div className="p-6 space-y-6">
//                 <motion.div variants={itemVariants} className="flex items-start gap-4">
//                   <div className="bg-blue-100 p-3 rounded-full text-blue-700">
//                     <Phone className="h-6 w-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Phone</h4>
//                     <a 
//                       href="tel:+918708275179" 
//                       className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors"
//                     >
//                       87082 75179
//                     </a>
//                   </div>
//                 </motion.div>
                
//                 <motion.div variants={itemVariants} className="flex items-start gap-4">
//                   <div className="bg-blue-100 p-3 rounded-full text-blue-700">
//                     <Mail className="h-6 w-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Email</h4>
//                     <a 
//                       href="mailto:sawariyatraders@gmail.com" 
//                       className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors"
//                     >
//                       sawariyatraders@gmail.com
//                     </a>
//                   </div>
//                 </motion.div>
                
//                 <motion.div variants={itemVariants} className="flex items-start gap-4">
//                   <div className="bg-blue-100 p-3 rounded-full text-blue-700">
//                     <MapPin className="h-6 w-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Office Address</h4>
//                     <address className="not-italic text-gray-700">
//                       Sawariya Traders,<br />
//                       CHOUDHRY DHRAM KANTA,<br />
//                       GOVINDGARH ROAD, RAMGARH,<br />
//                       ALWAR (RAJ.)
//                     </address>
//                   </div>
//                 </motion.div>
                
//                 <motion.div variants={itemVariants} className="flex items-start gap-4">
//                   <div className="bg-blue-100 p-3 rounded-full text-blue-700">
//                     <Clock className="h-6 w-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Business Hours</h4>
//                     <div className="text-gray-700 space-y-1">
//                       <div className="flex justify-between">
//                         <span>Monday - Friday:</span>
//                         <span className="font-medium">9:00 AM - 7:00 PM</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Saturday:</span>
//                         <span className="font-medium">9:00 AM - 5:00 PM</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Sunday:</span>
//                         <span className="font-medium">Closed</span>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
              
//               {/* WhatsApp and Get Directions in sidebar */}
//               <div className="p-6 bg-blue-50">
//                 <div className="flex flex-wrap gap-4 items-center">
//                   <a href="https://wa.me/918708275179" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors shadow">
//                     <MessageSquare className="h-4 w-4" />
//                     <span>WhatsApp</span>
//                     <span className="ml-2 font-semibold">87082 75179</span>
//                   </a>
//                   <a href="https://www.google.com/maps/search/?api=1&query=CHOUDHRY+DHRAM+KANTA,+GOVINDGARH+ROAD,+RAMGARH,+ALWAR+(RAJ.)" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors shadow font-semibold">
//                     <ExternalLink className="h-4 w-4" />
//                     <span>Get Directions</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right side with tabs for form and map */}
//           <div className="lg:col-span-3">
//             <div className="bg-white rounded-xl shadow-xl overflow-hidden">
//               <div className="flex border-b border-gray-200">
//                 <button
//                   onClick={() => setActiveTab("form")}
//                   className={`flex-1 py-4 text-center font-medium transition-colors ${
//                     activeTab === "form" 
//                       ? "text-blue-700 border-b-2 border-blue-700" 
//                       : "text-gray-500 hover:text-blue-600"
//                   }`}
//                 >
//                   Contact Form
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("map")}
//                   className={`flex-1 py-4 text-center font-medium transition-colors ${
//                     activeTab === "map" 
//                       ? "text-blue-700 border-b-2 border-blue-700" 
//                       : "text-gray-500 hover:text-blue-600"
//                   }`}
//                 >
//                   Office Location
//                 </button>
//               </div>

//               <div className="p-6">
//                 {activeTab === "form" ? (
//                   <>
//                     {isSubmitted ? (
//                       <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         className="bg-green-50 border border-green-100 rounded-lg p-8 text-center min-h-[400px] flex flex-col items-center justify-center"
//                       >
//                         <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
//                           <Check className="h-8 w-8 text-green-600" />
//                         </div>
//                         <h3 className="text-2xl font-bold text-green-800 mb-4">Message Sent Successfully!</h3>
//                         <p className="text-green-700 mb-6 max-w-md">
//                           Thank you for reaching out to Sawariya Traders. Our team will review your inquiry and get back to you as soon as possible.
//                         </p>
//                       </motion.div>
//                     ) : (
//                       <motion.form
//                         variants={containerVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                         onSubmit={handleSubmit}
//                         className="space-y-5"
//                       >
//                         <div className="grid md:grid-cols-2 gap-5">
//                           <motion.div variants={itemVariants}>
//                             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                               Full Name *
//                             </label>
//                             <input
//                               type="text"
//                               id="name"
//                               name="name"
//                               value={formData.name}
//                               onChange={handleChange}
//                               required
//                               placeholder="John Doe"
//                               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                             />
//                           </motion.div>

//                           <motion.div variants={itemVariants}>
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                               Email Address *
//                             </label>
//                             <input
//                               type="email"
//                               id="email"
//                               name="email"
//                               value={formData.email}
//                               onChange={handleChange}
//                               required
//                               placeholder="john@example.com"
//                               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                             />
//                           </motion.div>
//                         </div>

//                         <div className="grid md:grid-cols-2 gap-5">
//                           <motion.div variants={itemVariants}>
//                             <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                               Phone Number *
//                             </label>
//                             <input
//                               type="tel"
//                               id="phone"
//                               name="phone"
//                               value={formData.phone}
//                               onChange={handleChange}
//                               required
//                               placeholder="87082 75179 (e.g. 87082 75179)"
//                               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                             />
//                           </motion.div>

//                           <motion.div variants={itemVariants}>
//                             <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
//                               Subject *
//                             </label>
//                             <input
//                               type="text"
//                               id="subject"
//                               name="subject"
//                               value={formData.subject}
//                               onChange={handleChange}
//                               required
//                               placeholder="Product Inquiry"
//                               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                             />
//                           </motion.div>
//                         </div>

//                         <motion.div variants={itemVariants}>
//                           <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                             Your Message *
//                           </label>
//                           <textarea
//                             id="message"
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             required
//                             rows={5}
//                             placeholder="Please include details about your inquiry or requirements..."
//                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                           ></textarea>
//                         </motion.div>

//                         <motion.button
//                           variants={itemVariants}
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                           type="submit"
//                           disabled={isLoading}
//                           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center disabled:opacity-70 shadow-md"
//                         >
//                           {isLoading ? (
//                             <>
//                               <svg
//                                 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <circle
//                                   className="opacity-25"
//                                   cx="12"
//                                   cy="12"
//                                   r="10"
//                                   stroke="currentColor"
//                                   strokeWidth="4"
//                                 ></circle>
//                                 <path
//                                   className="opacity-75"
//                                   fill="currentColor"
//                                   d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                                 ></path>
//                               </svg>
//                               Processing...
//                             </>
//                           ) : (
//                             <>
//                               Send Message <Send className="ml-2 h-4 w-4" />
//                             </>
//                           )}
//                         </motion.button>
//                       </motion.form>
//                     )}
//                   </>
//                 ) : (
//                   <div className="rounded-lg overflow-hidden h-[500px] relative">
//                     {/* Using iframe for embedding Google Maps */}
//                     <iframe 
//                       src="https://www.google.com/maps?q=CHOUDHRY+DHRAM+KANTA,+GOVINDGARH+ROAD,+RAMGARH,+ALWAR+(RAJ.)&output=embed"
//                       width="100%" 
//                       height="100%" 
//                       style={{ border: 0 }} 
//                       allowFullScreen="" 
//                       loading="lazy" 
//                       referrerPolicy="no-referrer-when-downgrade"
//                       title="Office Location Map"
//                       className="absolute inset-0"
//                     ></iframe>
                    
//                     {/* Map overlay with correct address and directions */}
//                     <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
//                       <h4 className="font-bold text-blue-800 mb-2">Sawariya Traders</h4>
//                       <p className="text-sm text-gray-700 mb-3">
//                         CHOUDHRY DHRAM KANTA,<br/>
//                         GOVINDGARH ROAD, RAMGARH,<br/>
//                         ALWAR (RAJ.)
//                       </p>
//                       <a 
//                         href="https://www.google.com/maps/search/?api=1&query=CHOUDHRY+DHRAM+KANTA,+GOVINDGARH+ROAD,+RAMGARH,+ALWAR+(RAJ.)" 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
//                       >
//                         <ExternalLink className="h-3 w-3 mr-1" />
//                         Get Directions
//                       </a>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action Cards */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="grid md:grid-cols-3 gap-6 mt-16"
//         >
//           <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-lg">
//             <h3 className="text-xl font-bold mb-3">Quick Quotes</h3>
//             <p className="mb-4 text-blue-100">Need a fast estimate for your steel requirements? Our team is ready to help.</p>
//             <a href="tel:+918708275179" className="inline-flex items-center bg-white text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors">
//               <Phone className="h-4 w-4 mr-2" />
//               Call Now
//             </a>
//           </div>
          
//           <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-6 rounded-xl shadow-lg">
//             <h3 className="text-xl font-bold mb-3">WhatsApp Support</h3>
//             <p className="mb-4 text-blue-100">Chat with our team directly through WhatsApp for quick responses to your queries.</p>
//             <a href="https://wa.me/918708275179" className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600 transition-colors">
//               <MessageSquare className="h-4 w-4 mr-2" />
//               Chat Now
//             </a>
//           </div>
          
//           <div className="bg-gradient-to-br from-blue-800 to-blue-950 text-white p-6 rounded-xl shadow-lg">
//             <h3 className="text-xl font-bold mb-3">Email Inquiry</h3>
//             <p className="mb-4 text-blue-100">Send us detailed requirements or documentation for comprehensive solutions.</p>
//             <a href="mailto:sawariyatraders@gmail.com" className="inline-flex items-center bg-white text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors">
//               <Mail className="h-4 w-4 mr-2" />
//               Email Us
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }