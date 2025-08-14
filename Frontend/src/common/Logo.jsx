import React from "react"

export default function Logo({ variant = "light" }) {
  return (
    <div className="flex items-center space-x-2">
      <div className={`w-10 h-10 rounded-full border-2 ${variant === "light" ? "border-white" : "border-blue-700"} shadow bg-white flex items-center justify-center overflow-hidden`}>
        <img
          src="https://ik.imagekit.io/xzjipji0j/ChatGPT%20Image%20Aug%2011,%202025,%2002_55_13%20PM.png?updatedAt=1754904732212"
          alt="Sawariya Traders Logo"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <span
        className={`text-xl font-bold tracking-wide ${
          variant === "light" ? "text-white" : "text-black"
        }`}
      >
        Hariom Steel
      </span>
    </div>
  )
}

