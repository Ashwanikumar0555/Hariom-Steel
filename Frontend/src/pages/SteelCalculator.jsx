
import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, ArrowRight, Check } from "lucide-react"

// Steel product density in kg/m³
const DENSITY = {
  "TMT Bars": 7850,
  "Steel Rods": 7850,
  "Steel Sheets": 7850,
  "MS Pipes": 7850,
  "Angles & Channels": 7850,
  Rebars: 7850,
}

// Steel product price ranges in ₹ per kg
const PRICE_RANGES = {
  "TMT Bars": { min: 58, max: 62 },
  "Steel Rods": { min: 55, max: 58 },
  "Steel Sheets": { min: 65, max: 70 },
  "MS Pipes": { min: 60, max: 65 },
  "Angles & Channels": { min: 56, max: 60 },
  Rebars: { min: 57, max: 61 },
}

export default function SteelCalculator() {
  const [productType, setProductType] = useState("TMT Bars")
  const [dimensions, setDimensions] = useState({
    length: 1,
    width: 0.1,
    thickness: 0.01,
    diameter: 0.012,
    quantity: 1,
  })
  const [calculationType, setCalculationType] = useState("rectangular")
  const [result, setResult] = useState(null)
  const [isCalculated, setIsCalculated] = useState(false)

  const handleDimensionChange = (e) => {
    const { name, value } = e.target
    setDimensions((prev) => ({
      ...prev,
      [name]: Number.parseFloat(value) || 0,
    }))
  }

  const calculateWeight = () => {
    let volume = 0
    let weight = 0

    if (calculationType === "rectangular") {
      volume = dimensions.length * dimensions.width * dimensions.thickness
    } else {
      const radius = dimensions.diameter / 2
      volume = Math.PI * radius * radius * dimensions.length
    }

    weight = volume * DENSITY[productType] * dimensions.quantity

    const priceRange = PRICE_RANGES[productType]
    const minPrice = (weight * priceRange.min).toFixed(2)
    const maxPrice = (weight * priceRange.max).toFixed(2)

    setResult({
      weight: weight.toFixed(2),
      minPrice,
      maxPrice,
    })

    setIsCalculated(true)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center p-2 bg-black text-white rounded-full mb-4">
            <Calculator className="h-6 w-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Steel Price Calculator</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimate the weight and cost of your steel requirements with our easy-to-use calculator.
          </p>
        </motion.div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Form Panel */}
            <div>
              <h3 className="text-xl font-bold mb-6">Enter Specifications</h3>
              <div className="space-y-6">

                {/* Product Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Type</label>
                  <div className="relative">
                    <select
                      value={productType}
                      onChange={(e) => setProductType(e.target.value)}
                      className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black appearance-none"
                    >
                      {Object.keys(DENSITY).map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Calculation Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Calculation Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setCalculationType("rectangular")}
                      className={`p-3 rounded-md border ${
                        calculationType === "rectangular"
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      Rectangular
                    </button>
                    <button
                      onClick={() => setCalculationType("circular")}
                      className={`p-3 rounded-md border ${
                        calculationType === "circular"
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      Circular
                    </button>
                  </div>
                </div>

                {/* Dimension Inputs */}
                {calculationType === "rectangular" ? (
                  <>
                    <InputField name="length" value={dimensions.length} onChange={handleDimensionChange} label="Length (meters)" />
                    <InputField name="width" value={dimensions.width} onChange={handleDimensionChange} label="Width (meters)" />
                    <InputField name="thickness" value={dimensions.thickness} onChange={handleDimensionChange} label="Thickness (meters)" />
                  </>
                ) : (
                  <>
                    <InputField name="length" value={dimensions.length} onChange={handleDimensionChange} label="Length (meters)" />
                    <InputField name="diameter" value={dimensions.diameter} onChange={handleDimensionChange} label="Diameter (meters)" />
                  </>
                )}

                {/* Quantity */}
                <InputField name="quantity" value={dimensions.quantity} onChange={handleDimensionChange} label="Quantity" min="1" step="1" />

                {/* Calculate Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={calculateWeight}
                  className="bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition-colors"
                >
                  Calculate
                </motion.button>
              </div>
            </div>

            {/* Result Panel */}
            <div className="flex flex-col justify-center">
              {isCalculated ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full mx-auto mb-4">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-6">Calculation Results</h3>

                  <div className="space-y-4">
                    <ResultRow label="Product Type:" value={productType} />
                    <ResultRow label="Estimated Weight:" value={`${result.weight} kg`} />
                    <ResultRow label="Estimated Price Range:" value={`₹${result.minPrice} - ₹${result.maxPrice}`} />

                    <div className="pt-4 text-center text-sm text-gray-500">
                      <p>This is an estimate based on standard density values. Actual prices may vary.</p>
                      <p className="mt-2">Contact us for accurate pricing and availability.</p>
                    </div>

                    <div className="pt-4 flex justify-center">
                      <a href="#quote">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors"
                        >
                          Request Exact Quote
                        </motion.button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col items-center justify-center h-full">
                  <Calculator className="h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium text-gray-500 text-center">
                    Enter specifications and click Calculate to see the results
                  </h3>
                  <p className="mt-4 text-gray-400 text-center max-w-xs">
                    Our calculator provides an estimate based on standard industry values
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Need help with calculations? Contact our team for assistance.</p>
        </div>
      </div>
    </section>
  )
}

function InputField({ name, value, onChange, label, min = "0.001", step = "0.001" }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        step={step}
        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  )
}

function ResultRow({ label, value }) {
  return (
    <div className="flex justify-between border-b border-gray-200 pb-2">
      <span className="font-medium">{label}</span>
      <span>{value}</span>
    </div>
  )
}
