"use client"
import React, { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Check, ChevronDown, Send, Shield, Phone, Calendar, X } from "lucide-react"
import WhatsAppButton from "../common/WhatsAppButton"
import toast, { Toaster } from "react-hot-toast"

const products = [
  "TMT Bars",
  "Steel Rods",
  "Steel Sheets",
  "MS/SS Pipes",
  "Angles & Channels",
  "Rebars",
  "Other (please specify)",
]

export default function QuoteForm() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    specifications: "",
    deliveryLocation: "",
    preferredDate: "",
    additionalInfo: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const selectProduct = (product) => {
    setFormData((prev) => ({ ...prev, product }))
    setShowDropdown(false)
    if (formErrors.product) {
      setFormErrors(prev => ({ ...prev, product: "" }))
    }
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    if (!formData.phone.trim()) errors.phone = "Phone number is required"
    if (!formData.product) errors.product = "Please select a product"
    if (!formData.quantity.trim()) errors.quantity = "Quantity is required"
    if (!formData.deliveryLocation.trim()) errors.deliveryLocation = "Delivery location is required"
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector('.error-message')
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      
      // Show error toast
      toast.error("Please fill all required fields", {
        style: {
          border: '1px solid #f56565',
          padding: '16px',
          color: '#c53030',
          background: '#fff5f5'
        },
        iconTheme: {
          primary: '#c53030',
          secondary: '#fff'
        }
      })
      
      return
    }
    
    setIsLoading(true)

    const message = `
*New Quote Request*
------------------
*Name:* ${formData.name}
*Company:* ${formData.company}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Product:* ${formData.product}
*Quantity:* ${formData.quantity}
*Specifications:* ${formData.specifications}
*Delivery Location:* ${formData.deliveryLocation}
*Preferred Date:* ${formData.preferredDate || "Not specified"}
*Additional Info:* ${formData.additionalInfo}
    `.trim()

    // Simulating API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      
      // Show success toast
      toast.custom((t) => (
        <div className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-blue-50 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-blue-200 ring-opacity-5`}>
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-blue-900">
                  Quote Request Successful!
                </p>
                <p className="mt-1 text-sm text-blue-700">
                  Our team will review your request and get back to you shortly.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-blue-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ), { duration: 5000 })

      // Open WhatsApp with the form data
      try {
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/919312236954?text=${encodedMessage}`
        window.open(whatsappUrl, "_blank")
      } catch (error) {
        console.error("Error opening WhatsApp:", error)
        toast.error("Error opening WhatsApp. Please try again.")
      }

      // Reset the form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          product: "",
          quantity: "",
          specifications: "",
          deliveryLocation: "",
          preferredDate: "",
          additionalInfo: "",
        })
        if (formRef.current) {
          formRef.current.reset()
        }
      }, 5000)
    }, 1500)
  }

  return (
    <section id="quote" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">Get in Touch</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Request a Quote</h2>
          <div className="w-20 h-1 bg-blue-600 rounded mx-auto mb-6"></div>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            Fill out the form below to get a personalized quote for your steel requirements.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center shadow-lg"
          >
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Check className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Quote Request Submitted!</h2>
            <p className="text-blue-700 mb-6">
              Thank you for your interest in our products. Your quote request has been sent to our team via WhatsApp.
              We'll review your requirements and get back to you shortly.
            </p>
            <div className="flex justify-center">
              <WhatsAppButton />
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-xl p-8 border border-blue-100"
          >
            <div className="flex items-center gap-3 bg-blue-50 text-blue-800 p-4 rounded-lg mb-6 border-l-4 border-blue-600">
              <Shield className="h-5 w-5 text-blue-600" />
              <p className="text-sm">Your information is secure. We never share your details with third parties.</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${formErrors.name ? 'border-red-300 bg-red-50' : 'border-blue-200'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  />
                  {formErrors.name && <p className="text-red-500 text-xs mt-1 error-message">{formErrors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${formErrors.email ? 'border-red-300 bg-red-50' : 'border-blue-200'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  />
                  {formErrors.email && <p className="text-red-500 text-xs mt-1 error-message">{formErrors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">Phone Number *</label>
                  <div className={`flex items-center border ${formErrors.phone ? 'border-red-300 bg-red-50' : 'border-blue-200'} rounded-md focus-within:ring-2 focus-within:ring-blue-500 transition-all`}>
                    <div className="flex items-center justify-center px-3 border-r border-blue-200">
                      <Phone className="h-4 w-4 text-blue-600" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 focus:outline-none rounded-md bg-transparent"
                    />
                  </div>
                  {formErrors.phone && <p className="text-red-500 text-xs mt-1 error-message">{formErrors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-blue-800 mb-1">Product Type *</label>
                  <button
                    type="button"
                    onClick={() => setShowDropdown(!showDropdown)}
                    className={`w-full px-4 py-3 border ${formErrors.product ? 'border-red-300 bg-red-50' : 'border-blue-200'} rounded-md bg-white text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  >
                    <span className={formData.product ? 'text-blue-900' : 'text-blue-400'}>
                      {formData.product || "Select a product"}
                    </span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  {formErrors.product && <p className="text-red-500 text-xs mt-1 error-message">{formErrors.product}</p>}

                  {showDropdown && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-blue-200 rounded-md shadow-lg max-h-60 overflow-auto">
                      {products.map((product, index) => (
                        <div
                          key={index}
                          onClick={() => selectProduct(product)}
                          className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-blue-900 transition-colors"
                        >
                          {product}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">Quantity Required *</label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g., 5 tons, 200 pieces"
                    className={`w-full px-4 py-3 border ${formErrors.quantity ? 'border-red-300 bg-red-50' : 'border-blue-200'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  />
                  {formErrors.quantity && <p className="text-red-500 text-xs mt-1 error-message">{formErrors.quantity}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-1">Product Specifications</label>
                <input
                  type="text"
                  name="specifications"
                  value={formData.specifications}
                  onChange={handleChange}
                  placeholder="e.g., Size, Grade, Dimensions"
                  className="w-full px-4 py-3 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">Delivery Location *</label>
                  <input
                    type="text"
                    name="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={handleChange}
                    placeholder="Full delivery address"
                    className={`w-full px-4 py-3 border ${formErrors.deliveryLocation ? 'border-red-300 bg-red-50' : 'border-blue-200'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  />
                  {formErrors.deliveryLocation && <p className="text-red-500 text-xs mt-1 error-message">{formErrors.deliveryLocation}</p>}
                </div>
                {/* <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">Preferred Delivery Date</label>
                  <div className="flex items-center border border-blue-200 rounded-md focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                    <div className="flex items-center justify-center px-3 border-r border-blue-200">
                      <Calendar className="h-4 w-4 text-blue-600" />
                    </div>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 focus:outline-none rounded-md"
                    />
                  </div>
                </div> */}
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-1">Additional Information</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any specific requirements or questions"
                  className="w-full px-4 py-3 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                ></textarea>
              </div>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-auto md:px-16 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-md font-medium transition-colors flex items-center justify-center disabled:opacity-70 shadow-lg text-lg mx-auto relative overflow-hidden group"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                      <span className="relative">Submit Quote Request</span>
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}

        <div className="mt-12 p-6 bg-blue-800 text-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-center">Need Immediate Assistance?</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a 
              href="tel:+919053719053" 
              className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-600 py-3 px-6 rounded-md transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">+91 93122 36954</span>
            </a>
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  )
}