"use client"
import React from "react";
import { useState, useEffect } from "react"
import { Star, Quote, Check, Send, UserPlus, ChevronLeft, ChevronRight } from "lucide-react"

const initialTestimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "Construction Manager",
    company: "RK Builders, New Delhi",
    image: "https://ik.imagekit.io/xzjipji0j/men1.jpg?updatedAt=1752859096692",
    rating: 5,
    quote: "We've been sourcing our TMT Rebars from Hariom Steel Infra for over 6 years now. Their quality is consistently excellent, and their delivery is always on time. The steel meets all industry standards and has never let us down on any project. Their range of SAIL, TATA, JSW brands is impressive.",
    date: "15 April 2025"
  },
  {
    id: 2,
    name: "Amit Sharma",
    position: "Project Director",
    company: "Sharma Constructions, Ghaziabad",
    image: "https://ik.imagekit.io/xzjipji0j/men%203%20(2).jpg?updatedAt=1752859044200",
    rating: 5,
    quote: "The quality of TMT Rebars and secondary steel from Hariom Steel Infra is exceptional. Their range includes JINDAL PANTHER, ELECTRO STEEL, and other premium brands. Their customer service is outstanding and they're our go-to supplier across multiple projects in UP and Delhi.",
    date: "8 April 2025"
  },
  {
    id: 3,
    name: "Priya Patel",
    position: "Procurement Manager",
    company: "Patel Infrastructure, Muneka",
    image: "https://ik.imagekit.io/xzjipji0j/cheerful-successful-young-professional-portrait.jpg?updatedAt=1752859706054",
    rating: 5,
    quote: "What sets Hariom Steel Infra apart is their commitment to quality and customer satisfaction. They supply both full length and short length TMT Rebars as per our requirements. Their range of Angle, Girder, Channel, and Square Bars is comprehensive. Never disappointed in 4 years of partnership.",
    date: "2 April 2025"
  },
  {
    id: 4,
    name: "Sunil Mehta",
    position: "Director",
    company: "Mehta Developers, Loha Mandi",
    image: "https://ik.imagekit.io/xzjipji0j/men%202.jpg?updatedAt=1752859084611",
    rating: 5,
    quote: "Being authorized distributors of JSW Neo Steel, Hariom Steel Infra provides authentic products at competitive prices. Their secondary steel range including RASHMI, RATHI, KAMDHENU is excellent. Reliable delivery across India makes them our preferred steel partner.",
    date: "28 March 2025"
  },
  {
    id: 5,
    name: "Vikash Singh",
    position: "Site Engineer",
    company: "Singh Construction, Mayapuri Industrial Area",
    image: "https://ik.imagekit.io/xzjipji0j/men1.jpg?updatedAt=1752859096692",
    rating: 5,
    quote: "Hariom Steel Infra's range of SRMB, BALAJI, RINIL products is top-notch. Their expertise in both primary and secondary steel makes them a one-stop solution. The quality consistency across different brands they supply is remarkable.",
    date: "22 March 2025"
  },
  {
    id: 6,
    name: "Neha Gupta",
    position: "Purchase Head",
    company: "Gupta Enterprises, Bulandshahr",
    image: "https://ik.imagekit.io/xzjipji0j/cheerful-successful-young-professional-portrait.jpg?updatedAt=1752859706054",
    rating: 4,
    quote: "Their PRIME GOLD, SWROOP, RANA, K.L, CENTURY steel products are of excellent quality. Hariom Steel Infra maintains strict quality standards and their pan-India delivery network is impressive. Great experience working with their team.",
    date: "18 March 2025"
  }
]

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState(initialTestimonials)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showForm, setShowForm] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [filterRating, setFilterRating] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    rating: 0,
    quote: ""
  })

  // Calculate stats
  const totalRating = testimonials.reduce((acc, t) => acc + t.rating, 0)
  const averageRating = (totalRating / testimonials.length).toFixed(1)
  const fiveStarCount = testimonials.filter(t => t.rating === 5).length
  const fourStarCount = testimonials.filter(t => t.rating === 4).length
  const threeStarCount = testimonials.filter(t => t.rating === 3).length
  
  // Filter testimonials
  const filteredTestimonials = filterRating > 0 
    ? testimonials.filter(t => t.rating >= filterRating)
    : testimonials

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && filteredTestimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, filteredTestimonials.length])

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
    setIsAutoPlaying(false)
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    const currentDate = new Date()
    const dateString = currentDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    
    const newTestimonial = {
      id: testimonials.length + 1,
      ...formData,
      image: "https://ik.imagekit.io/xzjipji0j/men1.jpg?updatedAt=1752859096692",
      date: dateString
    }
    
    setTestimonials([newTestimonial, ...testimonials])
    setShowForm(false)
    setShowToast(true)
    setFormData({
      name: "",
      position: "",
      company: "",
      rating: 0,
      quote: ""
    })
    
    setTimeout(() => setShowToast(false), 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleRatingChange = (rating) => {
    setFormData(prev => ({ ...prev, rating }))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4 fill-current" />
            Customer Reviews
          </div>
          <h2 className="text-5xl font-bold mb-6 text-slate-800 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            What Our Industry Partners Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what construction professionals across India say about Hariom Steel Infra's premium TMT Rebars, secondary steel products, and exceptional service quality.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Overall Rating */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-white">{averageRating}</span>
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full p-2 shadow-md">
                  <Star className="h-4 w-4 fill-white text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Overall Rating</h3>
              <p className="text-slate-600">Based on {testimonials.length} verified reviews</p>
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
            <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">Rating Distribution</h3>
            <div className="space-y-3">
              {[5, 4, 3].map((rating) => {
                const count = testimonials.filter(t => t.rating === rating).length
                const percentage = (count / testimonials.length) * 100
                return (
                  <div key={rating} className="flex items-center gap-3">
                    <div className="flex text-yellow-400">
                      {[...Array(rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-1000"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-slate-600 w-8">{count}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
            <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">Customer Satisfaction</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">5-Star Reviews</span>
                <span className="text-2xl font-bold text-green-600">{Math.round((fiveStarCount / testimonials.length) * 100)}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">4+ Star Reviews</span>
                <span className="text-2xl font-bold text-blue-600">{Math.round(((fiveStarCount + fourStarCount) / testimonials.length) * 100)}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Verified Reviews</span>
                <span className="text-2xl font-bold text-indigo-600">{testimonials.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: "All Reviews", value: 0 },
            { label: "5 Stars", value: 5 },
            { label: "4+ Stars", value: 4 }
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => {
                setFilterRating(filter.value)
                setCurrentIndex(0)
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                filterRating === filter.value
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white/80 text-slate-700 hover:bg-white hover:shadow-md'
              }`}
            >
              {filter.label}
            </button>
          ))}
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
          >
            <UserPlus className="h-4 w-4" />
            Share Your Experience
          </button>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {filteredTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden group hover:shadow-3xl transition-all duration-500">
                    <div className="p-8 md:p-12">
                      <div className="flex flex-col md:flex-row items-start gap-8">
                        {/* Profile Section */}
                        <div className="flex-shrink-0 text-center md:text-left">
                          <div className="relative inline-block mb-6">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-2 shadow-lg">
                              <Quote className="h-4 w-4 text-white" />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-slate-800 mb-2">{testimonial.name}</h4>
                            <p className="text-blue-600 font-medium mb-1">{testimonial.position}</p>
                            <p className="text-slate-600 text-sm mb-4">{testimonial.company}</p>
                            <div className="flex justify-center md:justify-start mb-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-5 w-5 ${
                                    star <= testimonial.rating
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-slate-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-xs text-slate-500">{testimonial.date}</p>
                          </div>
                        </div>

                        {/* Quote Section */}
                        <div className="flex-1">
                          <div className="relative">
                            <Quote className="h-8 w-8 text-blue-200 mb-4" />
                            <p className="text-slate-700 text-lg leading-relaxed italic">
                              {testimonial.quote}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl text-slate-700 hover:text-blue-600 transition-all duration-300 flex items-center justify-center border border-white/20 hover:bg-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl text-slate-700 hover:text-blue-600 transition-all duration-300 flex items-center justify-center border border-white/20 hover:bg-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Add Review Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Share Your Experience</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  name="position"
                  placeholder="Your Position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingChange(star)}
                        className={`text-2xl ${
                          star <= formData.rating ? "text-yellow-400" : "text-slate-300"
                        } hover:text-yellow-400 transition-colors`}
                      >
                        <Star className={`h-6 w-6 ${star <= formData.rating ? "fill-current" : ""}`} />
                      </button>
                    ))}
                  </div>
                </div>
                <textarea
                  name="quote"
                  placeholder="Share your experience with our steel products and services..."
                  value={formData.quote}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Submit Review
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
                              </div>
            </div>
          </div>
        )}

        {/* Success Toast */}
        {showToast && (
          <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <Check className="h-5 w-5" />
            Thank you! Your review has been submitted successfully.
          </div>
        )}
      </div>
    </section>
  )
}