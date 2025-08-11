"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  CheckCircle, 
  ShieldCheck, 
  Award,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
  Info,
  BrainCircuit,
  Calculator
} from "lucide-react"

const productCatalog = [
  {
    id: 1,
    name: "MS Pipe",
    brand: "TATA Tiscon",
    sizes: ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm", "32mm"],
    price: "₹70,500 per ton",
    images: [
      "https://ik.imagekit.io/xzjipji0j/ms%20pipe%205.png?updatedAt=1752817306520",
      "https://ik.imagekit.io/xzjipji0j/MS%20pipe%203.jpg?updatedAt=1752817305737",
      "https://res.cloudinary.com/dds6yoff3/image/upload/v1752656212/MS_Pipe_Steel_grbamx.jpg"
    ],
    rating: 4.9,
    stock: "In Stock",
    description: "Premium quality MS Pipe with superior strength and ductility for earthquake-resistant construction.",
    features: ["High Yield Strength", "Superior Weldability", "Better Corrosion Resistance", "Excellent Bendability"],
    bestFor: ["High-Rise Buildings", "Bridges", "Dams", "Industrial Structures"]
  },
  {
    id: 2,
    name: "MS Sheet",
    brand: "JSW Neosteel",
    sizes: ["10mm", "12mm", "16mm", "20mm", "25mm", "32mm"],
    price: "₹72,800 per ton",
    images: [
      "https://ik.imagekit.io/xzjipji0j/2mm%20MS%20Sheet.jpg?updatedAt=1753072192718",
      "https://res.cloudinary.com/dds6yoff3/image/upload/v1752656213/MS_Sheet_Steel_q3h1b9.jpg"
    ],
    rating: 4.8,
    stock: "In Stock",
    description: "High-performance MS sheet for structures requiring exceptional strength and durability.",
    features: ["Higher Tensile Strength", "Better Fire Resistance", "Improved Ductility", "High Fatigue Strength"],
    bestFor: ["Skyscrapers", "Heavy Infrastructure", "Flyovers", "Earthquake-Prone Areas"]
  },
  {
    id: 3,
    name: "CRS TMT Bars",
    brand: "SAIL",
    sizes: ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm"],
    price: "₹75,200 per ton",
    images: [
      "https://res.cloudinary.com/dds6yoff3/image/upload/v1752658074/MS_pipe_3_sjfzff.jpg"
    ],
    rating: 4.9,
    stock: "Limited Stock",
    description: "Corrosion Resistant Steel TMT Bars designed specifically for coastal and high-humidity regions.",
    features: ["Superior Corrosion Resistance", "Extended Lifespan", "Low Maintenance", "High Strength"],
    bestFor: ["Coastal Constructions", "Chemical Plants", "Sewage Treatment Plants", "Marine Structures"]
  }
];

const productFeatures = [
  {
    title: "Superior Strength & Flexibility",
    description: "Our TMT bars offer excellent tensile strength and ductility for safer structures.",
    icon: <CheckCircle className="h-5 w-5" />,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Advanced Corrosion Resistance",
    description: "Enhanced protection against environmental factors for longer-lasting construction.",
    icon: <ShieldCheck className="h-5 w-5" />,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "ISI & ISO Certified",
    description: "All our products meet and exceed Indian and international quality standards.",
    icon: <Award className="h-5 w-5" />,
    color: "bg-purple-100 text-purple-600"
  }
]

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showProductDetail, setShowProductDetail] = useState(false)

  const viewProductDetail = (product) => {
    setSelectedProduct(product)
    setShowProductDetail(true)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Premium Steel Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            High-quality steel products for all your construction needs
          </p>
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {productCatalog.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -5, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all group"
            >
              <ProductImageCarousel images={product.images} alt={product.name} />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-700 transition">{product.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold">
                    {product.brand}
                  </span>
                </div>
                <div className="flex items-center mb-3">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`} />
                    ))}
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${product.stock === "In Stock" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"} font-medium`}>
                    {product.stock}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{product.description.substring(0, 100)}...</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-700 font-medium mb-1">Available Sizes:</p>
                  <div className="flex flex-wrap gap-1">
                    {product.sizes.map((size, idx) => (
                      <span key={idx} className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p className="font-bold text-blue-600 text-lg">{product.price}</p>
                  <WhatsAppButton message={`Hi, I'm interested in ${product.name} from Shri Durga Steel.`} />
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => viewProductDetail(product)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-all shadow"
                  >
                    View Details
                  </button>
                  <button 
                    className="flex-1 bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 text-sm font-medium py-2 px-4 rounded transition-all"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Product Features */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Why Our Steel Stands Out</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {productFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className={`${feature.color} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Product Detail Modal */}
      {showProductDetail && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
              <h3 className="text-xl font-bold text-gray-800">Product Details</h3>
              <button 
                onClick={() => setShowProductDetail(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gray-100 rounded-lg p-4 flex justify-center h-64">
                    <img src={selectedProduct.images[0]} alt={selectedProduct.name} className="h-full object-contain" />
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < Math.floor(selectedProduct.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`} />
                      ))}
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${selectedProduct.stock === "In Stock" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                      {selectedProduct.stock}
                    </span>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-800">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-sm text-gray-600 mb-2">
                    Brand: <span className="font-semibold">{selectedProduct.brand}</span>
                  </p>
                  <p className="font-bold text-xl mb-4 text-blue-600">
                    {selectedProduct.price}
                  </p>
                  <p className="text-gray-700 mb-6">
                    {selectedProduct.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-medium mb-2 text-gray-800">Key Features:</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-medium mb-2 text-gray-800">Best For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.bestFor.map((use, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-700 border border-blue-100"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all shadow-md hover:shadow-lg flex-1"
                    >
                      Request Quote
                    </button>
                    <button
                      onClick={() => setShowProductDetail(false)}
                      className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-medium py-2 px-6 rounded-lg transition-all flex-1"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                  <Info className="h-5 w-5 text-blue-600" />
                  <p className="text-sm text-gray-700">
                    Need help choosing? Call us at +91 87082 75179 for expert advice.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

// Carousel component for product images
function ProductImageCarousel({ images, alt }) {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images]);
  return (
    <div className="relative w-full h-48 flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden">
      <img
        src={images[index]}
        alt={alt}
        className="h-full object-contain transition-all duration-700 w-auto mx-auto"
        style={{ maxHeight: '12rem', maxWidth: '100%' }}
      />
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${i === index ? 'bg-blue-600' : 'bg-gray-300'} transition-all`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// WhatsAppButton component
function WhatsAppButton({ message }) {
  const encoded = encodeURIComponent(message);
  return (
    <a
      href={`https://wa.me/919876543210?text=${encoded}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-green-600 hover:bg-green-700 text-white text-xs font-medium shadow transition"
      aria-label="Contact via WhatsApp"
    >
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12 12 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22c-1.7 0-3.37-.34-4.93-1.01l-.35-.15-3.69.97.99-3.59-.18-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
      WhatsApp
    </a>
  );
}