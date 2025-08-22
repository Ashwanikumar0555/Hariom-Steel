////////////////// Hariom Steel Topbar Component //////////////////
import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  X,
  MessageSquare,
  Send,
  User,
  Bot,
  Shield,
  Award,
  Truck
} from "lucide-react";

export default function Topbar() {
  const [isScrolled, setIsScrolled] = useState(false); 
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      type: "bot",
      text: "Hello! 👋 I'm your Hariom Steel Infra assistant. How can I help you with your steel requirements today? We specialize in TMT Rebars, Structural Steel, and Secondary Steel products.",
    },
  ]);
  const [hasOpenedChat, setHasOpenedChat] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to bottom of chat and focus input
  useEffect(() => {
    if (isChatOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
      setHasOpenedChat(true);
    }
  }, [chatHistory, isChatOpen]);

  // Notification timer
  useEffect(() => {
    if (!hasOpenedChat && !isChatOpen) {
      const timer = setTimeout(() => {
        setShowNotification(true);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [hasOpenedChat, isChatOpen]);

  const contactItems = [
    {
      icon: <Phone className="h-3 w-3 text-blue-600 group-hover:text-white" />,
      text: "+91 93122 36954",
      link: "tel:+919312236954",
      showOnMobile: true,
    },
    {
      icon: <Phone className="h-3 w-3 text-blue-600 group-hover:text-white" />,
      text: "+91 93122 40849",
      link: "tel:+919312240849",
      showOnMobile: "smOnly",
    },
    {
      icon: <Mail className="h-3 w-3 text-blue-600 group-hover:text-white" />,
      text: "hariomsteelinfra@gmail.com",
      link: "mailto:hariomsteelinfra@gmail.com",
      showOnMobile: false,
    },
    {
      icon: <MapPin className="h-3 w-3 text-blue-600 group-hover:text-white" />,
      text: "D-1/115 Phase-2, Mayapuri Industrial Area, New Delhi-110064",
      link: "https://maps.google.com/?q=D-1/115+Phase-2+Mayapuri+Industrial+Area+New+Delhi+110064",
      showOnMobile: false,
    },
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.21 22.5 1.5 17.79 1.5 12S6.21 1.5 12 1.5 22.5 6.21 22.5 12 17.79 22.5 12 22.5z" />
        </svg>
      ),
      url: "https://wa.me/919312236954",
      isButton: true,
    },
  ];

  const topbarHeight = isScrolled ? "65px" : "85px";

  const generateResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    setIsTyping(true);

    const getResponseAndDelay = () => {
      let response = "";
      let typingDelay = 0;

      if (lowerMessage.includes("product") || lowerMessage.includes("steel") || lowerMessage.includes("catalog") || lowerMessage.includes("items") || lowerMessage.includes("sell")) {
        response = "At Hariom Steel Infra Pvt Ltd, we are leading stockists and suppliers of premium steel products:\n\n• TMT Rebars (Full Length & Short Length) - All sizes\n• Secondary Steel - RASHMI, RATHI, KAMDHENU, JINDAL, PRIME GOLD\n• Structural Steel - Angles, Girders, Channels, Square Bars\n• Plates, Pipes, Sheets for construction applications\n\nBrands: SAIL, TATA, JSW, JINDAL PANTHER, SHYAM STEEL, ELECTRO STEEL, SRMB, BALAJI, RINL\n\nWhich specific product are you interested in today?";
        typingDelay = 2800;
      } else if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("rate") || lowerMessage.includes("quote")) {
        response = "Our steel prices are highly competitive and updated based on current market rates. We offer:\n\n• TMT Rebar prices: ₹55,000 - ₹62,000 per ton (varies by brand & grade)\n• Secondary steel: ₹52,000 - ₹58,000 per ton\n• Structural steel: Custom pricing based on specifications\n\nBeing authorized distributors of JSW Neo Steel (U.P), we provide the best rates. Would you like a detailed quotation for your specific requirements?";
        typingDelay = 2600;
      } else if (lowerMessage.includes("delivery") || lowerMessage.includes("shipping") || lowerMessage.includes("transport") || lowerMessage.includes("supply")) {
        response = "We provide steel across India with our efficient logistics network:\n\n🏢 Branch Offices:\n• Delhi - Mayapuri Industrial Area\n• Munaka - Hiran Kudna Village\n• Ghaziabad - Bulandshahr Road, Loha Mandi\n\n🚛 Delivery Services:\n• Delhi NCR: Same day to 2 days\n• Pan India: 3-7 business days\n• Bulk orders: Free delivery within 100km radius\n\nWhere do you need the materials delivered?";
        typingDelay = 2700;
      } else if (lowerMessage.includes("quality") || lowerMessage.includes("guarantee") || lowerMessage.includes("warranty") || lowerMessage.includes("standard") || lowerMessage.includes("certification")) {
        response = "Quality is our top priority at Hariom Steel Infra Pvt Ltd:\n\n✅ All products comply with IS standards\n✅ Mill Test Certificates provided with every order\n✅ Authorized distributor of premium brands like TATA, JSW, SAIL\n✅ Rigorous quality checks at our facilities\n✅ 10+ years warranty on structural steel products\n\nOur CIN: U24109DL2025PTC442911 | PAN: AAHCH7554G ensures complete transparency and trust.";
        typingDelay = 2900;
      } else if (lowerMessage.includes("order") || lowerMessage.includes("buy") || lowerMessage.includes("purchase") || lowerMessage.includes("process")) {
        response = "Ordering from Hariom Steel Infra is simple and convenient:\n\n📞 Call us: +91 93122 36954 or +91 93122 40849\n📧 Email: hariomsteelinfra@gmail.com\n💬 Chat with us here for instant quotes\n🏢 Visit our offices in Delhi, Munaka, or Ghaziabad\n\n📋 Order Process:\n1. Share your requirements\n2. Get instant quotation\n3. 30% advance payment\n4. Balance before delivery\n\nReady to place an order? Share your requirements!";
        typingDelay = 2600;
      } else if (lowerMessage.includes("branches") || lowerMessage.includes("office") || lowerMessage.includes("location") || lowerMessage.includes("address")) {
        response = "Hariom Steel Infra Pvt Ltd has strategic locations across North India:\n\n🏢 Head Office & Godown:\nD-1/115 Phase-2, Mayapuri Industrial Area, New Delhi-110064\n\n🏢 Branch Office:\nKHASRA NO. - 634, Hiran Kudna Village, Muneka, New Delhi - 110041\n\n🏢 Ghaziabad Office:\nE-126, Bulandshahr Road, Loha Mandi, Industrial Area, Ghaziabad, UP-201009\n\nAll locations are strategically positioned for easy access and efficient supply chain management.";
        typingDelay = 2800;
      } else if (lowerMessage.includes("company") || lowerMessage.includes("business") || lowerMessage.includes("about") || lowerMessage.includes("experience")) {
        response = "Hariom Steel Infra Pvt Ltd is a leading steel trading company:\n\n🏭 Authorized Distributor: JSW Neo Steel (U.P)\n📜 CIN: U24109DL2025PTC442911\n🆔 PAN: AAHCH7554G\n🏢 Multiple strategic locations across Delhi NCR\n📞 24/7 customer support\n\nWe specialize in TMT Rebars, Secondary Steel, and Structural Steel products from top brands like TATA, JSW, SAIL, JINDAL PANTHER, ensuring quality and reliability for all construction needs.";
        typingDelay = 3000;
      } else if (
        lowerMessage.includes("hi") ||
        lowerMessage.includes("hello") ||
        lowerMessage.includes("hey") ||
        lowerMessage.includes("greetings") ||
        lowerMessage === "good morning" ||
        lowerMessage === "good afternoon" ||
        lowerMessage === "good evening"
      ) {
        response = "Namaste and welcome to Hariom Steel Infra Pvt Ltd! 🙏\n\nWe are leading stockists and suppliers of premium steel products across India. Whether you need TMT Rebars, Secondary Steel, or Structural Steel, we have got you covered with top brands like TATA, JSW, SAIL, and JINDAL.\n\nHow can I assist you with your steel requirements today?";
        typingDelay = 1800;
      } else if (
        lowerMessage.includes("contact") ||
        lowerMessage.includes("call me") ||
        lowerMessage.includes("representative") ||
        lowerMessage.includes("speak") ||
        lowerMessage.includes("person")
      ) {
        response = "I'd be happy to connect you with our steel experts:\n\n📞 Primary: +91 93122 36954\n📞 Secondary: +91 93122 40849\n📧 Email: hariomsteelinfra@gmail.com\n\n⏰ Business Hours: Mon-Sat, 8:00 AM - 7:00 PM\n\nOur team is available to provide detailed quotations, technical specifications, and arrange site visits. What's the best time for our representative to call you?";
        typingDelay = 2500;
      } else {
        response = "Thank you for reaching out to Hariom Steel Infra Pvt Ltd! I'm here to help with:\n\n🔹 Product information (TMT Rebars, Secondary Steel, Structural Steel)\n🔹 Price quotations and bulk discounts\n🔹 Delivery schedules and logistics\n🔹 Technical specifications\n🔹 Brand recommendations\n\nCould you please share more details about your steel requirements so I can assist you better?";
        typingDelay = 2000;
      }

      return { response, typingDelay };
    };

    const { response, typingDelay } = getResponseAndDelay();

    setTimeout(() => {
      setChatHistory((prevChat) => [...prevChat, { type: "bot", text: response }]);
      setIsTyping(false);
    }, typingDelay);
  };

  const handleSendMessage = () => {
    if (chatMessage.trim() === "") return;

    setChatHistory((prevChat) => [...prevChat, { type: "user", text: chatMessage }]);
    generateResponse(chatMessage);
    setChatMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleOpenChat = () => {
    setIsChatOpen(true);
    setShowNotification(false);
  };

  return (
    <div>
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled ? "py-2.5 bg-white shadow-lg border-gray-200" : "py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200"
        } text-gray-800 px-4 sm:px-6 md:px-8 lg:px-12 fixed top-0 z-50 border-b`}
        style={{ height: topbarHeight }}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center h-full gap-2 md:gap-0">
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-xs sm:text-sm">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-1.5 hover:text-blue-700 transition-colors group ${
                  item.showOnMobile === "smOnly" ? "md:hidden" : item.showOnMobile === false ? "hidden md:flex" : ""
                }`}
              >
                <div className="bg-blue-100 group-hover:bg-blue-600 p-1.5 rounded-full transition-colors">{item.icon}</div>
                {item.link ? (
                  <a
                    href={item.link}
                    className="transition-colors font-medium hover:underline"
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={`Contact via ${item.text}`}
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="font-medium">{item.text}</span>
                )}
              </div>
            ))}
          </div>

          {/* Trust Badges & Actions */}
          <div className="flex gap-2 sm:gap-3 mt-2 md:mt-0 items-center flex-wrap justify-center md:justify-end">
            {/* WhatsApp Button */}
            <a
              href={socialLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors shadow-sm hover:shadow-md"
              aria-label="Contact via WhatsApp"
            >
              {socialLinks[0].icon}
              <span>WhatsApp</span>
              <ExternalLink className="h-3 w-3 ml-0.5" />
            </a>

            {/* Chat Bot Button */}
            <button
              onClick={handleOpenChat}
              className="relative flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors shadow-sm hover:shadow-md"
              aria-label="Open chat with assistant"
            >
              <MessageSquare className="h-3 w-3" />
              <span>Chat Now</span>
              {showNotification && (
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse" aria-hidden="true"></span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Chat Notification Banner */}
      {showNotification && !isChatOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg border border-blue-200 z-40 w-64 sm:w-72 md:w-80 animate-pulse">
          <div className="flex gap-2 sm:gap-3">
            <div className="h-10 w-10 sm:h-12 sm:w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 text-sm sm:text-base">Need steel products?</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Get instant quotes from Hariom Steel Infra!</p>
              <div className="mt-2 sm:mt-3 flex gap-2">
                <button
                  onClick={handleOpenChat}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded text-xs sm:text-sm transition-colors flex-1"
                  aria-label="Get quote now"
                >
                  Chat Now 
                </button>
                <button
                  onClick={() => setShowNotification(false)}
                  className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-1.5 py-1 sm:px-2 sm:py-1.5 rounded text-xs sm:text-sm transition-colors"
                  aria-label="Dismiss notification"
                >
                  Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Chat Bot Interface */}
      {isChatOpen && (
        <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-auto md:right-6 w-auto md:w-96 max-w-lg md:max-w-none bg-white rounded-lg shadow-xl z-50 flex flex-col overflow-hidden border border-blue-200">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-2.5 sm:py-3 px-3 sm:px-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 sm:h-8 sm:w-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <h3 className="font-medium text-sm sm:text-base">Hariom Steel Infra Assistant</h3>
                <div className="flex items-center gap-1 text-xs text-blue-100">
                  <span className="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  <span>Online • Ready to help</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-blue-100 hover:text-white hover:bg-blue-800/20 h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-2 border-b border-blue-100 text-center">
            <div className="flex items-center justify-center text-xs text-blue-700 gap-1 mb-0.5 sm:mb-1">
              <Shield className="h-3 w-3" />
              <span className="font-medium">Authorized JSW Distributor • CIN: U24109DL2025PTC442911</span>
            </div>
            <div className="text-xs text-blue-600">
              <span>TMT Rebars • Secondary Steel • Structural Steel • Pan India Supply</span>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto max-h-[50vh] sm:max-h-[60vh] bg-gray-50">
            {chatHistory.map((message, index) => (
              <div key={index} className={`mb-3 sm:mb-4 flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                {message.type === "bot" && (
                  <div className="h-7 w-7 sm:h-8 sm:w-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-blue-600 mr-2 self-end mb-1">
                    <Bot className="h-4 w-4" />
                  </div>
                )}
                <div
                  className={`rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 max-w-[80%] sm:max-w-[75%] ${
                    message.type === "user" 
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-none shadow-sm" 
                      : "bg-white text-gray-800 border border-blue-100 rounded-bl-none shadow-sm"
                  }`}
                >
                  {message.text.split("\n").map((text, i) => (
                    <p key={i} className={`${i > 0 ? "mt-1 sm:mt-2" : ""} text-xs sm:text-sm`}>
                      {text}
                    </p>
                  ))}
                </div>
                {message.type === "user" && (
                  <div className="h-7 w-7 sm:h-8 sm:w-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white ml-2 self-end mb-1">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex mb-3 sm:mb-4 justify-start">
                <div className="h-7 w-7 sm:h-8 sm:w-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-blue-600 mr-2 self-end mb-1">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-white rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 rounded-bl-none border border-blue-100 shadow-sm">
                  <div className="flex space-x-1 text-blue-600">
                    <span className="animate-bounce">•</span>
                    <span className="animate-bounce [animation-delay:100ms]">•</span>
                    <span className="animate-bounce [animation-delay:200ms]">•</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-2 sm:p-3 border-t border-gray-200 bg-white">
            <div className="flex gap-2 items-center">
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Ask about TMT Rebars, prices, delivery..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="w-full py-2 px-3 sm:py-2.5 sm:px-4 pr-10 border border-blue-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                  aria-label="Chat with Hariom Steel Infra assistant"
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={chatMessage.trim() === ""}
                className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                  chatMessage.trim() === "" 
                    ? "bg-blue-200 text-blue-400 cursor-not-allowed" 
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
                }`}
                aria-label="Send message"
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
            <div className="mt-1 sm:mt-2 text-center text-xs text-gray-500">
              <span>Powered by Hariom Steel Infra Pvt Ltd © 2025</span>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for Fixed Header */}
      <div style={{ height: topbarHeight }} className="w-full" />
    </div>
  );
}

// import React, { useState, useEffect, useRef } from "react";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   ExternalLink,
//   X,
//   MessageSquare,
//   Send,
//   User,
//   Bot,
//   Shield,
//   Award,
//   Truck
// } from "lucide-react";

// export default function Topbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [chatMessage, setChatMessage] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [chatHistory, setChatHistory] = useState([
//     {
//       type: "bot",
//       text: "Hello! 👋 I'm your Hariom Steel Infra assistant. How can I help you with your steel requirements today? We specialize in TMT Rebars, Structural Steel, and Secondary Steel products.",
//     },
//   ]);
//   const [hasOpenedChat, setHasOpenedChat] = useState(false);
//   const [showNotification, setShowNotification] = useState(false);

//   const chatEndRef = useRef(null);
//   const inputRef = useRef(null);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Scroll to bottom of chat and focus input
//   useEffect(() => {
//     if (isChatOpen) {
//       chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//       inputRef.current?.focus();
//       setHasOpenedChat(true);
//     }
//   }, [chatHistory, isChatOpen]);

//   // Notification timer
//   useEffect(() => {
//     if (!hasOpenedChat && !isChatOpen) {
//       const timer = setTimeout(() => {
//         setShowNotification(true);
//       }, 30000);
//       return () => clearTimeout(timer);
//     }
//   }, [hasOpenedChat, isChatOpen]);

//   const contactItems = [
//     {
//       icon: <Phone className="h-3 w-3 text-blue-600 group-hover:text-white" />,
//       text: "+91 93122 36954",
//       link: "tel:+919312236954",
//       showOnMobile: true,
//     },
//     {
//       icon: <Phone className="h-3 w-3 text-blue-600 group-hover:text-white" />,
//       text: "+91 93122 40849",
//       link: "tel:+919312240849",
//       showOnMobile: "smallOnly",
//     },
//     {
//       icon: <Mail className="h-3 w-3 text-blue-600 group-hover:text-white" />,
//       text: "hariomsteelinfra@gmail.com",
//       link: "mailto:hariomsteelinfra@gmail.com",
//       showOnMobile: false,
//     },
//     {
//       icon: <MapPin className="h-3 w-3 text-blue-600 group-hover:text-white" />,
//       text: "D-1/115 Phase-2, Mayapuri Industrial Area, New Delhi-110064",
//       link: "https://maps.google.com/?q=D-1/115+Phase-2+Mayapuri+Industrial+Area+New+Delhi+110064",
//       showOnMobile: false,
//     },
//   ];

//   const socialLinks = [
//     {
//       name: "WhatsApp",
//       icon: (
//         <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
//           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
//           <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.21 22.5 1.5 17.79 1.5 12S6.21 1.5 12 1.5 22.5 6.21 22.5 12 17.79 22.5 12 22.5z" />
//         </svg>
//       ),
//       url: "https://wa.me/919312236954",
//       isButton: true,
//     },
//   ];

//   const topbarHeight = isScrolled ? "65px" : "85px";

//   const generateResponse = (userMessage) => {
//     const lowerMessage = userMessage.toLowerCase();
//     setIsTyping(true);

//     const getResponseAndDelay = () => {
//       let response = "";
//       let typingDelay = 0;

//       if (lowerMessage.includes("product") || lowerMessage.includes("steel") || lowerMessage.includes("catalog") || lowerMessage.includes("items") || lowerMessage.includes("sell")) {
//         response = "At Hariom Steel Infra Pvt Ltd, we are leading stockists and suppliers of premium steel products:\n\n• TMT Rebars (Full Length & Short Length) - All sizes\n• Secondary Steel - RASHMI, RATHI, KAMDHENU, JINDAL, PRIME GOLD\n• Structural Steel - Angles, Girders, Channels, Square Bars\n• Plates, Pipes, Sheets for construction applications\n\nBrands: SAIL, TATA, JSW, JINDAL PANTHER, SHYAM STEEL, ELECTRO STEEL, SRMB, BALAJI, RINL\n\nWhich specific product are you interested in today?";
//         typingDelay = 2800;
//       } else if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("rate") || lowerMessage.includes("quote")) {
//         response = "Our steel prices are highly competitive and updated based on current market rates. We offer:\n\n• TMT Rebar prices: ₹55,000 - ₹62,000 per ton (varies by brand & grade)\n• Secondary steel: ₹52,000 - ₹58,000 per ton\n• Structural steel: Custom pricing based on specifications\n\nBeing authorized distributors of JSW Neo Steel (U.P), we provide the best rates. Would you like a detailed quotation for your specific requirements?";
//         typingDelay = 2600;
//       } else if (lowerMessage.includes("delivery") || lowerMessage.includes("shipping") || lowerMessage.includes("transport") || lowerMessage.includes("supply")) {
//         response = "We provide steel across India with our efficient logistics network:\n\n🏢 Branch Offices:\n• Delhi - Mayapuri Industrial Area\n• Munaka - Hiran Kudna Village\n• Ghaziabad - Bulandshahr Road, Loha Mandi\n\n🚛 Delivery Services:\n• Delhi NCR: Same day to 2 days\n• Pan India: 3-7 business days\n• Bulk orders: Free delivery within 100km radius\n\nWhere do you need the materials delivered?";
//         typingDelay = 2700;
//       } else if (lowerMessage.includes("quality") || lowerMessage.includes("guarantee") || lowerMessage.includes("warranty") || lowerMessage.includes("standard") || lowerMessage.includes("certification")) {
//         response = "Quality is our top priority at Hariom Steel Infra Pvt Ltd:\n\n✅ All products comply with IS standards\n✅ Mill Test Certificates provided with every order\n✅ Authorized distributor of premium brands like TATA, JSW, SAIL\n✅ Rigorous quality checks at our facilities\n✅ 10+ years warranty on structural steel products\n\nOur CIN: U24109DL2025PTC442911 | PAN: AAHCH7554G ensures complete transparency and trust.";
//         typingDelay = 2900;
//       } else if (lowerMessage.includes("order") || lowerMessage.includes("buy") || lowerMessage.includes("purchase") || lowerMessage.includes("process")) {
//         response = "Ordering from Hariom Steel Infra is simple and convenient:\n\n📞 Call us: +91 93122 36954 or +91 93122 40849\n📧 Email: hariomsteelinfra@gmail.com\n💬 Chat with us here for instant quotes\n🏢 Visit our offices in Delhi, Munaka, or Ghaziabad\n\n📋 Order Process:\n1. Share your requirements\n2. Get instant quotation\n3. 30% advance payment\n4. Balance before delivery\n\nReady to place an order? Share your requirements!";
//         typingDelay = 2600;
//       } else if (lowerMessage.includes("branches") || lowerMessage.includes("office") || lowerMessage.includes("location") || lowerMessage.includes("address")) {
//         response = "Hariom Steel Infra Pvt Ltd has strategic locations across North India:\n\n🏢 Head Office & Godown:\nD-1/115 Phase-2, Mayapuri Industrial Area, New Delhi-110064\n\n🏢 Branch Office:\nKHASRA NO. - 634, Hiran Kudna Village, Muneka, New Delhi - 110041\n\n🏢 Ghaziabad Office:\nE-126, Bulandshahr Road, Loha Mandi, Industrial Area, Ghaziabad, UP-201009\n\nAll locations are strategically positioned for easy access and efficient supply chain management.";
//         typingDelay = 2800;
//       } else if (lowerMessage.includes("company") || lowerMessage.includes("business") || lowerMessage.includes("about") || lowerMessage.includes("experience")) {
//         response = "Hariom Steel Infra Pvt Ltd is a leading steel trading company:\n\n🏭 Authorized Distributor: JSW Neo Steel (U.P)\n📜 CIN: U24109DL2025PTC442911\n🆔 PAN: AAHCH7554G\n🏢 Multiple strategic locations across Delhi NCR\n📞 24/7 customer support\n\nWe specialize in TMT Rebars, Secondary Steel, and Structural Steel products from top brands like TATA, JSW, SAIL, JINDAL PANTHER, ensuring quality and reliability for all construction needs.";
//         typingDelay = 3000;
//       } else if (
//         lowerMessage.includes("hi") ||
//         lowerMessage.includes("hello") ||
//         lowerMessage.includes("hey") ||
//         lowerMessage.includes("greetings") ||
//         lowerMessage === "good morning" ||
//         lowerMessage === "good afternoon" ||
//         lowerMessage === "good evening"
//       ) {
//         response = "Namaste and welcome to Hariom Steel Infra Pvt Ltd! 🙏\n\nWe are leading stockists and suppliers of premium steel products across India. Whether you need TMT Rebars, Secondary Steel, or Structural Steel, we have got you covered with top brands like TATA, JSW, SAIL, and JINDAL.\n\nHow can I assist you with your steel requirements today?";
//         typingDelay = 1800;
//       } else if (
//         lowerMessage.includes("contact") ||
//         lowerMessage.includes("call me") ||
//         lowerMessage.includes("representative") ||
//         lowerMessage.includes("speak") ||
//         lowerMessage.includes("person")
//       ) {
//         response = "I'd be happy to connect you with our steel experts:\n\n📞 Primary: +91 93122 36954\n📞 Secondary: +91 93122 40849\n📧 Email: hariomsteelinfra@gmail.com\n\n⏰ Business Hours: Mon-Sat, 8:00 AM - 7:00 PM\n\nOur team is available to provide detailed quotations, technical specifications, and arrange site visits. What's the best time for our representative to call you?";
//         typingDelay = 2500;
//       } else {
//         response = "Thank you for reaching out to Hariom Steel Infra Pvt Ltd! I'm here to help with:\n\n🔹 Product information (TMT Rebars, Secondary Steel, Structural Steel)\n🔹 Price quotations and bulk discounts\n🔹 Delivery schedules and logistics\n🔹 Technical specifications\n🔹 Brand recommendations\n\nCould you please share more details about your steel requirements so I can assist you better?";
//         typingDelay = 2000;
//       }

//       return { response, typingDelay };
//     };

//     const { response, typingDelay } = getResponseAndDelay();

//     setTimeout(() => {
//       setChatHistory((prevChat) => [...prevChat, { type: "bot", text: response }]);
//       setIsTyping(false);
//     }, typingDelay);
//   };

//   const handleSendMessage = () => {
//     if (chatMessage.trim() === "") return;

//     setChatHistory((prevChat) => [...prevChat, { type: "user", text: chatMessage }]);
//     generateResponse(chatMessage);
//     setChatMessage("");
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSendMessage();
//     }
//   };

//   const handleOpenChat = () => {
//     setIsChatOpen(true);
//     setShowNotification(false);
//   };

//   return (
//     <div>
//       <div
//         className={`w-full transition-all duration-300 ${
//           isScrolled ? "py-2.5 bg-white shadow-lg border-gray-200" : "py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200"
//         } text-gray-800 px-4 md:px-8 fixed top-0 z-50 border-b`}
//         style={{ height: topbarHeight }}
//       >
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center h-full">
//           {/* Contact Info */}
//           <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-6 text-xs md:text-sm">
//             {contactItems.map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center gap-1.5 hover:text-blue-700 transition-colors group ${
//                   item.showOnMobile === "smallOnly" ? "md:hidden" : item.showOnMobile === false ? "hidden md:flex" : ""
//                 }`}
//               >
//                 <div className="bg-blue-100 group-hover:bg-blue-600 p-1.5 rounded-full transition-colors">{item.icon}</div>
//                 {item.link ? (
//                   <a
//                     href={item.link}
//                     className="transition-colors font-medium hover:underline"
//                     target={item.link.startsWith("http") ? "_blank" : undefined}
//                     rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
//                     aria-label={`Contact via ${item.text}`}
//                   >
//                     {item.text}
//                   </a>
//                 ) : (
//                   <span className="font-medium">{item.text}</span>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Trust Badges & Actions */}
//           <div className="flex gap-3 mt-1.5 md:mt-0 items-center flex-wrap justify-center md:justify-end">
           
           
//             {/* WhatsApp Button */}
//             <a
//               href={socialLinks[0].url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors shadow-sm hover:shadow-md"
//               aria-label="Contact via WhatsApp"
//             >
//               {socialLinks[0].icon}
//               <span>WhatsApp</span>
//               <ExternalLink className="h-3 w-3 ml-0.5" />
//             </a>

//             {/* Chat Bot Button */}
//             <button
//               onClick={handleOpenChat}
//               className="relative flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors shadow-sm hover:shadow-md"
//               aria-label="Open chat with assistant"
//             >
//               <MessageSquare className="h-3 w-3" />
//               <span>Chat Now </span>
//               {showNotification && (
//                 <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse" aria-hidden="true"></span>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Chat Notification Banner */}
//       {showNotification && !isChatOpen && (
//         <div className="fixed bottom-20 right-6 bg-white p-4 rounded-lg shadow-lg border border-blue-200 z-40 w-72 animate-pulse">
//           <div className="flex gap-3">
//             <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
//               <MessageSquare className="h-6 w-6" />
//             </div>
//             <div className="flex-1">
//               <h4 className="font-medium text-gray-900">Need steel products?</h4>
//               <p className="text-sm text-gray-600 mt-1">Get instant quotes from Hariom Steel Infra!</p>
//               <div className="mt-3 flex gap-2">
//                 <button
//                   onClick={handleOpenChat}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-sm transition-colors flex-1"
//                   aria-label="Get quote now"
//                 >
//                   Get Quote
//                 </button>
//                 <button
//                   onClick={() => setShowNotification(false)}
//                   className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-2 py-1.5 rounded text-sm transition-colors"
//                   aria-label="Dismiss notification"
//                 >
//                   Later
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Enhanced Chat Bot Interface */}
//       {isChatOpen && (
//         <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col overflow-hidden border border-blue-200">
//           {/* Chat Header */}
//           <div className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-3 px-4 flex justify-between items-center">
//             <div className="flex items-center gap-2">
//               <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
//                 <Bot className="h-5 w-5" />
//               </div>
//               <div>
//                 <h3 className="font-medium">Hariom Steel Infra Assistant</h3>
//                 <div className="flex items-center gap-1.5 text-xs text-blue-100">
//                   <span className="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse"></span>
//                   <span>Online • Ready to help</span>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={() => setIsChatOpen(false)}
//               className="text-blue-100 hover:text-white hover:bg-blue-800/20 h-8 w-8 flex items-center justify-center rounded-full transition-colors"
//               aria-label="Close chat"
//             >
//               <X className="h-4 w-4" />
//             </button>
//           </div>

//           {/* Trust Indicators */}
//           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-2.5 border-b border-blue-100 text-center">
//             <div className="flex items-center justify-center text-xs text-blue-700 gap-1 mb-1">
//               <Shield className="h-3 w-3" />
//               <span className="font-medium">Authorized JSW Distributor • CIN: U24109DL2025PTC442911</span>
//             </div>
//             <div className="text-xs text-blue-600">
//               <span>TMT Rebars • Secondary Steel • Structural Steel • Pan India Supply</span>
//             </div>
//           </div>

//           {/* Chat Messages */}
//           <div className="flex-1 p-4 overflow-y-auto max-h-96 bg-gray-50">
//             {chatHistory.map((message, index) => (
//               <div key={index} className={`mb-4 flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
//                 {message.type === "bot" && (
//                   <div className="h-8 w-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-blue-600 mr-2 self-end mb-1">
//                     <Bot className="h-4 w-4" />
//                   </div>
//                 )}
//                 <div
//                   className={`rounded-lg px-4 py-2.5 max-w-[75%] ${
//                     message.type === "user" 
//                       ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-none shadow-sm" 
//                       : "bg-white text-gray-800 border border-blue-100 rounded-bl-none shadow-sm"
//                   }`}
//                 >
//                   {message.text.split("\n").map((text, i) => (
//                     <p key={i} className={i > 0 ? "mt-2" : ""}>
//                       {text}
//                     </p>
//                   ))}
//                 </div>
//                 {message.type === "user" && (
//                   <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white ml-2 self-end mb-1">
//                     <User className="h-4 w-4" />
//                   </div>
//                 )}
//               </div>
//             ))}
//             {isTyping && (
//               <div className="flex mb-4 justify-start">
//                 <div className="h-8 w-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-blue-600 mr-2 self-end mb-1">
//                   <Bot className="h-4 w-4" />
//                 </div>
//                 <div className="bg-white rounded-lg px-4 py-2.5 rounded-bl-none border border-blue-100 shadow-sm">
//                   <div className="flex space-x-1 text-blue-600">
//                     <span className="animate-bounce">•</span>
//                     <span className="animate-bounce [animation-delay:100ms]">•</span>
//                     <span className="animate-bounce [animation-delay:200ms]">•</span>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={chatEndRef} />
//           </div>

//           {/* Input Area */}
//           <div className="p-3 border-t border-gray-200 bg-white">
//             <div className="flex gap-2 items-center">
//               <div className="relative flex-1">
//                 <input
//                   ref={inputRef}
//                   type="text"
//                   placeholder="Ask about TMT Rebars, prices, delivery..."
//                   value={chatMessage}
//                   onChange={(e) => setChatMessage(e.target.value)}
//                   onKeyDown={handleKeyPress}
//                   className="w-full py-2.5 px-4 pr-10 border border-blue-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
//                   aria-label="Chat with Hariom Steel Infra assistant"
//                 />
//               </div>
//               <button
//                 onClick={handleSendMessage}
//                 disabled={chatMessage.trim() === ""}
//                 className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors shadow-sm ${
//                   chatMessage.trim() === "" 
//                     ? "bg-blue-200 text-blue-400 cursor-not-allowed" 
//                     : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
//                 }`}
//                 aria-label="Send message"
//               >
//                 <Send className="h-5 w-5" />
//               </button>
//             </div>
//             <div className="mt-2 text-center text-xs text-gray-500">
//               <span>Powered by Hariom Steel Infra Pvt Ltd © 2025</span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Spacer for Fixed Header - Increased to prevent overlap */}
//       <div style={{ height: topbarHeight }} className="w-full" />
//     </div>
//   );
// }
//////////////////Sawariya Traders Topbar Component////////////////////
// import React, { useState, useEffect, useRef } from "react";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   ExternalLink,
//   X,
//   MessageSquare,
//   Send,
//   User,
//   Bot,
//   Shield
// } from "lucide-react";

// export default function Topbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [chatMessage, setChatMessage] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [chatHistory, setChatHistory] = useState([
//     {
//       type: "bot",
//       text: "Hello! 👋 I'm your Sawariya Traders assistant. How can I help you with your steel requirements today?",
//     },
//   ]);
//   const [hasOpenedChat, setHasOpenedChat] = useState(false);
//   const [showNotification, setShowNotification] = useState(false);

//   const chatEndRef = useRef(null);
//   const inputRef = useRef(null);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Scroll to bottom of chat and focus input
//   useEffect(() => {
//     if (isChatOpen) {
//       chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//       inputRef.current?.focus();
//       setHasOpenedChat(true);
//     }
//   }, [chatHistory, isChatOpen]);

//   // Notification timer
//   useEffect(() => {
//     if (!hasOpenedChat && !isChatOpen) {
//       const timer = setTimeout(() => {
//         setShowNotification(true);
//       }, 30000);
//       return () => clearTimeout(timer);
//     }
//   }, [hasOpenedChat, isChatOpen]);

//   const contactItems = [
//     {
//       icon: <Phone className="h-3 w-3 text-blue-600 group-hover:text-white" />,
//       text: "+91 87082 75179",
//       link: "tel:+918708275179",
//       showOnMobile: true,
//     },
//     {
//       icon: <Mail className="h-3 w-3 text-blue-600 group-hover:text-white" />,
//       text: "info@sawariyatraders.in",
//       link: "mailto:info@sawariyatraders.in",
//       showOnMobile: "smallOnly",
//     },
//     {
//       icon: <MapPin className="h-3 w-3 text-blue-600 group-hover:text-white" />,
//       text: "CHOUDHRY DHRAM KANTA, GOVINDGARH ROAD, RAMGARH, ALWAR (RAJ.)",
//       link: "https://maps.google.com/?q=CHOUDHRY+DHRAM+KANTA+GOVINDGARH+ROAD+RAMGARH+ALWAR+RAJ",
//       showOnMobile: false,
//     },
//   ];

//   const socialLinks = [
//     {
//       name: "WhatsApp",
//       icon: (
//         <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
//           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
//           <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.21 22.5 1.5 17.79 1.5 12S6.21 1.5 12 1.5 22.5 6.21 22.5 12 17.79 22.5 12 22.5z" />
//         </svg>
//       ),
//       url: "https://wa.me/918708275179",
//       isButton: true,
//     },
//   ];

//   const topbarHeight = isScrolled ? "60px" : "76px";

//   const generateResponse = (userMessage) => {
//     const lowerMessage = userMessage.toLowerCase();
//     setIsTyping(true);

//     const getResponseAndDelay = () => {
//       let response = "";
//       let typingDelay = 0;

//       if (lowerMessage.includes("product") || lowerMessage.includes("steel") || lowerMessage.includes("catalog") || lowerMessage.includes("items") || lowerMessage.includes("sell")) {
//         response = "At Sawariya Traders, we offer premium quality steel products including:\n\n• TMT Bars (Fe 500/550 grade)\n• MS Angles & Channels\n• Steel Plates & Sheets\n• Structural Steel\n• Round & Square Bars\n• Sariya (Reinforcement Bars)\n\nWhich specific product are you interested in today?";
//         typingDelay = 2500;
//       } else if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("rate") || lowerMessage.includes("quote")) {
//         response = "Our steel prices are competitive and updated regularly based on market rates. For TMT bars, prices currently range from ₹58,000 to ₹64,000 per ton depending on grade and quantity. Would you like me to arrange for a detailed quotation based on your specific requirements?";
//         typingDelay = 2300;
//       } else if (lowerMessage.includes("delivery") || lowerMessage.includes("shipping") || lowerMessage.includes("transport")) {
//         response = "We provide fast and reliable delivery services across all of India. For orders within Kolkata, we typically deliver within 24-48 hours. Pan-India deliveries take 3-7 business days depending on your location. For bulk orders above 5 tons, we offer free delivery within a 50km radius of Kolkata. Could you tell me where the materials need to be delivered?";
//         typingDelay = 2700;
//       } else if (lowerMessage.includes("quality") || lowerMessage.includes("guarantee") || lowerMessage.includes("warranty") || lowerMessage.includes("standard") || lowerMessage.includes("certification")) {
//         response = "Quality is our top priority at Sawariya Traders. All our products are ISI certified and comply with strict BIS standards. We provide mill test certificates with every order and offer a 10-year quality guarantee on structural steel products. Our TMT bars undergo rigorous testing for strength, ductility, and bendability to ensure construction safety.";
//         typingDelay = 2900;
//       } else if (lowerMessage.includes("order") || lowerMessage.includes("buy") || lowerMessage.includes("purchase") || lowerMessage.includes("process")) {
//         response = "Ordering from us is simple! You can:\n\n1. Share your requirements here and I'll arrange for a quotation\n2. Call us directly at 8708275179\n3. Email your requirements to info@sawariyatraders.in\n\nOnce you confirm the order, we require a 30% advance payment, with the balance due before delivery. Would you like to place an order now?";
//         typingDelay = 2600;
//       } else if (lowerMessage.includes("payment") || lowerMessage.includes("credit") || lowerMessage.includes("terms") || lowerMessage.includes("financing")) {
//         response = "We offer flexible payment options including NEFT/RTGS transfer, UPI, and cheque payments. For regular clients, we provide credit facilities up to 30 days. For large projects, we can discuss customized payment schedules to match your project timeline. Which payment method would work best for you?";
//         typingDelay = 2400;
//       } else if (lowerMessage.includes("company") || lowerMessage.includes("business") || lowerMessage.includes("about") || lowerMessage.includes("experience") || lowerMessage.includes("history")) {
//         response = "Sawariya Traders has been a trusted name in the steel industry for over 25 years. We're an ISO 9001:2015 certified company with a monthly supply capacity of 5000+ metric tons. We serve 1000+ regular clients including major construction companies, government contractors, and industrial manufacturers across Eastern India. Our reputation is built on quality products, competitive pricing and reliable service.";
//         typingDelay = 3000;
//       } else if (
//         lowerMessage.includes("hi") ||
//         lowerMessage.includes("hello") ||
//         lowerMessage.includes("hey") ||
//         lowerMessage.includes("greetings") ||
//         lowerMessage === "good morning" ||
//         lowerMessage === "good afternoon" ||
//         lowerMessage === "good evening"
//       ) {
//         response = "Hello there! Thanks for reaching out to Sawariya Traders. How can I assist you with your steel requirements today? Whether you need information about our products, pricing, or have any other questions, I'm here to help.";
//         typingDelay = 1800;
//       } else if (
//         lowerMessage.includes("contact") ||
//         lowerMessage.includes("call me") ||
//         lowerMessage.includes("representative") ||
//         lowerMessage.includes("speak") ||
//         lowerMessage.includes("person") ||
//         lowerMessage.includes("human")
//       ) {
//         response = "I'd be happy to arrange for one of our sales representatives to contact you. Could you please share your phone number and a convenient time for our team to reach out to you? Alternatively, you can call us directly at 8708275179 during business hours (Mon-Sat, 9AM-6PM).";
//         typingDelay = 2500;
//       } else {
//         response = "Thank you for your message. I'm here to help with any questions about our steel products, pricing, delivery options, or order processes. Could you please provide more details about what you're looking for so I can assist you better?";
//         typingDelay = 2000;
//       }

//       return { response, typingDelay };
//     };

//     const { response, typingDelay } = getResponseAndDelay();

//     setTimeout(() => {
//       setChatHistory((prevChat) => [...prevChat, { type: "bot", text: response }]);
//       setIsTyping(false);
//     }, typingDelay);
//   };

//   const handleSendMessage = () => {
//     if (chatMessage.trim() === "") return;

//     setChatHistory((prevChat) => [...prevChat, { type: "user", text: chatMessage }]);
//     generateResponse(chatMessage);
//     setChatMessage("");
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSendMessage();
//     }
//   };

//   const handleOpenChat = () => {
//     setIsChatOpen(true);
//     setShowNotification(false);
//   };

//   return (
//     <div>
//       <div
//         className={`w-full transition-all duration-300 ${
//           isScrolled ? "py-2 bg-white shadow-md border-gray-200" : "py-3 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200"
//         } text-gray-800 px-4 md:px-8 fixed top-0 z-50 border-b`}
//         style={{ height: topbarHeight }}
//       >
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center h-full">
//           {/* Contact Info */}
//           <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-5 text-xs md:text-sm">
//             {contactItems.map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center gap-1.5 hover:text-blue-700 transition-colors group ${
//                   item.showOnMobile === "smallOnly" ? "md:hidden" : item.showOnMobile === false ? "hidden md:flex" : ""
//                 }`}
//               >
//                 <div className="bg-blue-100 group-hover:bg-blue-600 p-1.5 rounded-full transition-colors">{item.icon}</div>
//                 {item.link ? (
//                   <a
//                     href={item.link}
//                     className="transition-colors font-medium"
//                     target={item.link.startsWith("http") ? "_blank" : undefined}
//                     rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
//                     aria-label={`Contact via ${item.text}`}
//                   >
//                     {item.text}
//                   </a>
//                 ) : (
//                   <span className="font-medium">{item.text}</span>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Social Links */}
//           <div className="flex gap-4 mt-1 md:mt-0 items-center">
//             {/* Trust Badge */}
//             <div className="hidden md:flex items-center gap-1.5 bg-green-50 text-green-800 px-3 py-1.5 rounded-md border border-green-200">
//               <Shield className="h-3 w-3 text-green-600" />
//               <span className="text-xs font-medium">Trusted Supplier Since 2005</span>
//             </div>

//             {/* WhatsApp Button */}
//             <a
//               href={socialLinks[0].url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors shadow-sm hover:shadow-md"
//               aria-label="Contact via WhatsApp"
//             >
//               {socialLinks[0].icon}
//               <span>WhatsApp</span>
//               <ExternalLink className="h-3 w-3 ml-1" />
//             </a>

//             {/* Chat Bot Button */}
//             <button
//               onClick={handleOpenChat}
//               className="relative flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors shadow-sm hover:shadow-md"
//               aria-label="Open chat with assistant"
//             >
//               <MessageSquare className="h-3 w-3" />
//               <span>Chat Now</span>
//               {showNotification && (
//                 <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse" aria-hidden="true"></span>
//               )}
//             </button>

//             {/* Social Media Icons */}
//             <div className="flex gap-4 items-center">
//               {socialLinks.slice(1).map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-800 hover:text-blue-600 transition-colors hover:scale-110 duration-200"
//                   aria-label={`Visit our ${social.name} page`}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Chat Notification Banner */}
//       {showNotification && !isChatOpen && (
//         <div className="fixed bottom-20 right-6 bg-white p-4 rounded-lg shadow-lg border border-blue-200 z-40 w-72 animate-pulse">
//           <div className="flex gap-3">
//             <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
//               <MessageSquare className="h-6 w-6" />
//             </div>
//             <div className="flex-1">
//               <h4 className="font-medium text-gray-900">Need help with steel products?</h4>
//               <p className="text-sm text-gray-600 mt-1">Our assistant is online and ready to help!</p>
//               <div className="mt-3 flex gap-2">
//                 <button
//                   onClick={handleOpenChat}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-sm transition-colors flex-1"
//                   aria-label="Open chat now"
//                 >
//                   Chat Now
//                 </button>
//                 <button
//                   onClick={() => setShowNotification(false)}
//                   className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-2 py-1.5 rounded text-sm transition-colors"
//                   aria-label="Dismiss notification"
//                 >
//                   Later
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Enhanced Chat Bot Interface */}
//       {isChatOpen && (
//         <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col overflow-hidden border border-blue-200">
//           {/* Chat Header */}
//           <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-3 px-4 flex justify-between items-center">
//             <div className="flex items-center gap-2">
//               <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
//                 <Bot className="h-5 w-5" />
//               </div>
//               <div>
//                 <h3 className="font-medium">Sawariya Traders Assistant</h3>
//                 <div className="flex items-center gap-1.5 text-xs text-blue-100">
//                   <span className="h-1.5 w-1.5 bg-green-400 rounded-full"></span>
//                   <span>Online now</span>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={() => setIsChatOpen(false)}
//               className="text-blue-100 hover:text-white hover:bg-blue-800/20 h-8 w-8 flex items-center justify-center rounded-full"
//               aria-label="Close chat"
//             >
//               <X className="h-4 w-4" />
//             </button>
//           </div>

//           {/* Trust Indicators */}
//           <div className="bg-blue-50 p-2 border-b border-blue-100 flex items-center justify-center text-xs text-blue-700 gap-1">
//             <Shield className="h-3 w-3" />
//             <span>Trusted by 1000+ clients • ISO 9001:2015 Certified • 25+ Years of Experience</span>
//           </div>

//           {/* Chat Messages */}
//           <div className="flex-1 p-4 overflow-y-auto max-h-96 bg-gray-50">
//             {chatHistory.map((message, index) => (
//               <div key={index} className={`mb-4 flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
//                 {message.type === "bot" && (
//                   <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2 self-end mb-1">
//                     <Bot className="h-4 w-4" />
//                   </div>
//                 )}
//                 <div
//                   className={`rounded-lg px-4 py-2 max-w-[75%] ${
//                     message.type === "user" ? "bg-blue-600 text-white rounded-br-none" : "bg-white text-gray-800 border border-blue-100 rounded-bl-none shadow-sm"
//                   }`}
//                 >
//                   {message.text.split("\n").map((text, i) => (
//                     <p key={i} className={i > 0 ? "mt-2" : ""}>
//                       {text}
//                     </p>
//                   ))}
//                 </div>
//                 {message.type === "user" && (
//                   <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white ml-2 self-end mb-1">
//                     <User className="h-4 w-4" />
//                   </div>
//                 )}
//               </div>
//             ))}
//             {isTyping && (
//               <div className="flex mb-4 justify-start">
//                 <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2 self-end mb-1">
//                   <Bot className="h-4 w-4" />
//                 </div>
//                 <div className="bg-white rounded-lg px-4 py-2 rounded-bl-none border border-blue-100 shadow-sm">
//                   <div className="flex space-x-1">
//                     <span className="animate-bounce">•</span>
//                     <span className="animate-bounce [animation-delay:75ms]">•</span>
//                     <span className="animate-bounce [animation-delay:150ms]">•</span>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={chatEndRef} />
//           </div>

//           {/* Input Area */}
//           <div className="p-3 border-t border-gray-200 bg-white">
//             <div className="flex gap-2 items-center">
//               <div className="relative flex-1">
//                 <input
//                   ref={inputRef}
//                   type="text"
//                   placeholder="Type your message here..."
//                   value={chatMessage}
//                   onChange={(e) => setChatMessage(e.target.value)}
//                   onKeyDown={handleKeyPress}
//                   className="w-full py-2 px-4 pr-10 border border-blue-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   aria-label="Chat with assistant"
//                 />
//               </div>
//               <button
//                 onClick={handleSendMessage}
//                 disabled={chatMessage.trim() === ""}
//                 className={`h-10 w-10 rounded-full flex items-center justify-center ${
//                   chatMessage.trim() === "" ? "bg-blue-200 text-blue-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
//                 } transition-colors shadow-sm`}
//                 aria-label="Send message"
//               >
//                 <Send className="h-5 w-5" />
//               </button>
//             </div>
//             <div className="mt-2 text-center text-xs text-gray-500">
//               <span>Powered by Sawariya Traders © 2025</span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Spacer for Fixed Header */}
//       <div style={{ height: topbarHeight }} className="w-full" />
//     </div>
//   );
// }
////////////////////
// import React, { useState, useEffect, useRef } from "react";
// import { Phone, Mail, MapPin, Clock, ExternalLink, X, MessageSquare, Send, User, Bot, Shield, Loader } from "lucide-react";

// export default function Topbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   // Remove mobile menu state and hamburger
//   // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [chatMessage, setChatMessage] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [chatHistory, setChatHistory] = useState([
//     { 
//       type: "bot", 
//       text: "Hello! 👋 I'm your Sawariya Traders assistant. How can I help you with your steel requirements today?" 
//     }
//   ]);
//   const chatEndRef = useRef(null);
//   const inputRef = useRef(null);

//   // Track if the chat has been opened before to show notifications
//   const [hasOpenedChat, setHasOpenedChat] = useState(false);
//   const [showNotification, setShowNotification] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
    
//     window.addEventListener("scroll", handleScroll, { passive: true });
    
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     // Scroll to bottom of chat whenever messages update
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });

//     // Focus input field when chat is opened
//     if (isChatOpen) {
//       inputRef.current?.focus();
//       setHasOpenedChat(true);
//     }
//   }, [chatHistory, isChatOpen]);

//   // Show notification after 30 seconds if user hasn't opened the chat
//   useEffect(() => {
//     if (!hasOpenedChat) {
//       const timer = setTimeout(() => {
//         setShowNotification(true);
//       }, 30000);
      
//       return () => clearTimeout(timer);
//     }
//   }, [hasOpenedChat]);

//   const contactItems = [
//     {
//       icon: <Phone className="h-3 w-3 text-blue-600 group-hover:text-white" />, 
//       text: "+91 87082 75179",
//       link: "tel:8708275179",
//       showOnMobile: true
//     },
//     // Email for small screens only
//     {
//       icon: <Mail className="h-3 w-3 text-blue-600 group-hover:text-white" />, 
//       text: "info@sawariyatraders.in",
//       link: "mailto:info@sawariyatraders.in",
//       showOnMobile: "smallOnly"
//     },
//     {
//       icon: <MapPin className="h-3 w-3 text-blue-600 group-hover:text-white" />, 
//       text: "CHOUDHRY DHRAM KANTA, GOVINDGARH ROAD, RAMGARH, ALWAR (RAJ.)",
//       link: "https://maps.google.com/?q=CHOUDHRY+DHRAM+KANTA+GOVINDGARH+ROAD+RAMGARH+ALWAR+RAJ",
//       showOnMobile: false
//     },
//   ];

//   const socialLinks = [
//     {
//       name: "WhatsApp",
//       icon: (
//         <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
//           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
//           <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.21 22.5 1.5 17.79 1.5 12S6.21 1.5 12 1.5 22.5 6.21 22.5 12 17.79 22.5 12 22.5z"></path>
//         </svg>
//       ),
//       url: "https://wa.me/918708275179",
//       isButton: true
//     },
//     // {
//     //   name: "Instagram",
//     //   icon: (
//     //     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
//     //       <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
//     //     </svg>
//     //   ),
//     //   url: "https://instagram.com/sawariyatraders",
//     //   isButton: false
//     // },
//     // {
//     //   name: "LinkedIn",
//     //   icon: (
//     //     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
//     //       <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />  
//     //     </svg>
//     //   ),
//     //   url: "https://linkedin.com/company/sawariyatraders",
//     //   isButton: false
//     // },
//     // {
//     //   name: "Facebook",
//     //   icon: (
//     //     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
//     //       <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
//     //     </svg>
//     //   ),
//     //   url: "https://facebook.com/sawariyatraders",
//     //   isButton: false
//     // }
//   ];

//   const topbarHeight = isScrolled ? '60px' : '76px';

//   // More realistic AI chat responses
//   const generateResponse = (userMessage) => {
//     const lowerMessage = userMessage.toLowerCase();
    
//     // Set typing indicator
//     setIsTyping(true);
    
//     // Calculate a realistic typing delay based on response length
//     const getResponseAndDelay = () => {
//       let response = "";
//       let typingDelay = 0;
      
//       // Product inquiries
//       if (lowerMessage.includes("product") || lowerMessage.includes("steel") || lowerMessage.includes("catalog") || lowerMessage.includes("items") || lowerMessage.includes("sell")) {
//         response = "At Sawariya Traders, we offer premium quality steel products including:\n\n• TMT Bars (Fe 500/550 grade)\n• MS Angles & Channels\n• Steel Plates & Sheets\n• Structural Steel\n• Round & Square Bars\n• Sariya (Reinforcement Bars)\n\nWhich specific product are you interested in today?";
//         typingDelay = 2500;
//       }
//       // Price inquiries
//       else if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("rate") || lowerMessage.includes("quote")) {
//         response = "Our steel prices are competitive and updated regularly based on market rates. For TMT bars, prices currently range from ₹58,000 to ₹64,000 per ton depending on grade and quantity. Would you like me to arrange for a detailed quotation based on your specific requirements?";
//         typingDelay = 2300;
//       }
//       // Delivery inquiries
//       else if (lowerMessage.includes("delivery") || lowerMessage.includes("shipping") || lowerMessage.includes("transport")) {
//         response = "We provide fast and reliable delivery services across all of India. For orders within Kolkata, we typically deliver within 24-48 hours. Pan-India deliveries take 3-7 business days depending on your location. For bulk orders above 5 tons, we offer free delivery within a 50km radius of Kolkata. Could you tell me where the materials need to be delivered?";
//         typingDelay = 2700;
//       }
//       // Quality inquiries
//       else if (lowerMessage.includes("quality") || lowerMessage.includes("guarantee") || lowerMessage.includes("warranty") || lowerMessage.includes("standard") || lowerMessage.includes("certification")) {
//         response = "Quality is our top priority at Sawariya Traders. All our products are ISI certified and comply with strict BIS standards. We provide mill test certificates with every order and offer a 10-year quality guarantee on structural steel products. Our TMT bars undergo rigorous testing for strength, ductility, and bendability to ensure construction safety.";
//         typingDelay = 2900;
//       }
//       // Order process
//       else if (lowerMessage.includes("order") || lowerMessage.includes("buy") || lowerMessage.includes("purchase") || lowerMessage.includes("process")) {
//         response = "Ordering from us is simple! You can:\n\n1. Share your requirements here and I'll arrange for a quotation\n2. Call us directly at 870 827 5179\n3. Email your requirements to info@sawariyatraders.in\n\nOnce you confirm the order, we require a 30% advance payment, with the balance due before delivery. Would you like to place an order now?";
//         typingDelay = 2600;
//       }
//       // Payment terms
//       else if (lowerMessage.includes("payment") || lowerMessage.includes("credit") || lowerMessage.includes("terms") || lowerMessage.includes("financing")) {
//         response = "We offer flexible payment options including NEFT/RTGS transfer, UPI, and cheque payments. For regular clients, we provide credit facilities up to 30 days. For large projects, we can discuss customized payment schedules to match your project timeline. Which payment method would work best for you?";
//         typingDelay = 2400;
//       }
//       // Business credentials
//       else if (lowerMessage.includes("company") || lowerMessage.includes("business") || lowerMessage.includes("about") || lowerMessage.includes("experience") || lowerMessage.includes("history")) {
//         response = "Sawariya Traders has been a trusted name in the steel industry for over 25 years. We're an ISO 9001:2015 certified company with a monthly supply capacity of 5000+ metric tons. We serve 1000+ regular clients including major construction companies, government contractors, and industrial manufacturers across Eastern India. Our reputation is built on quality products, competitive pricing and reliable service.";
//         typingDelay = 3000;
//       }
//       // Greetings
//       else if (lowerMessage.includes("hi") || lowerMessage.includes("hello") || lowerMessage.includes("hey") || lowerMessage.includes("greetings") || lowerMessage === "good morning" || lowerMessage === "good afternoon" || lowerMessage === "good evening") {
//         response = "Hello there! Thanks for reaching out to Sawariya Traders. How can I assist you with your steel requirements today? Whether you need information about our products, pricing, or have any other questions, I'm here to help.";
//         typingDelay = 1800;
//       }
//       // Contact request
//       else if (lowerMessage.includes("contact") || lowerMessage.includes("call me") || lowerMessage.includes("representative") || lowerMessage.includes("speak") || lowerMessage.includes("person") || lowerMessage.includes("human")) {
//         response = "I'd be happy to arrange for one of our sales representatives to contact you. Could you please share your phone number and a convenient time for our team to reach out to you? Alternatively, you can call us directly at 870 827 5179 during business hours (Mon-Sat, 9AM-6PM).";
//         typingDelay = 2500;
//       }
//       // Default response
//       else {
//         response = "Thank you for your message. I'm here to help with any questions about our steel products, pricing, delivery options, or order processes. Could you please provide more details about what you're looking for so I can assist you better?";
//         typingDelay = 2000;
//       }
      
//       return { response, typingDelay };
//     }
    
//     const { response, typingDelay } = getResponseAndDelay();
    
//     // Simulate realistic typing delay
//     setTimeout(() => {
//       setChatHistory(prevChat => [...prevChat, { type: "bot", text: response }]);
//       setIsTyping(false);
//     }, typingDelay);
//   };

//   const handleSendMessage = () => {
//     if (chatMessage.trim() === "") return;
    
//     // Add user message to chat
//     setChatHistory(prevChat => [...prevChat, { type: "user", text: chatMessage }]);
    
//     // Generate response
//     generateResponse(chatMessage);
    
//     // Clear input
//     setChatMessage("");
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSendMessage();
//     }
//   };

//   const handleOpenChat = () => {
//     setIsChatOpen(true);
//     setShowNotification(false);
//   };

//   return (
//     <div>
//       <div 
//         className={`w-full transition-all duration-300 ${
//           isScrolled 
//             ? "py-2 bg-white shadow-md" 
//             : "py-3 bg-gradient-to-r from-blue-50 to-blue-100"
//         } text-gray-800 px-4 md:px-8 fixed top-0 z-50 border-b ${isScrolled ? 'border-gray-200' : 'border-blue-200'}`}
//         style={{ height: topbarHeight }}
//       >
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center h-full">
//           {/* Contact Info */}
//           <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-5 text-xs md:text-sm">
//             {contactItems.map((item, index) => (
//               // Only show address on md and up
//               item.text === "CHOUDHRY DHRAM KANTA, GOVINDGARH ROAD, RAMGARH, ALWAR (RAJ.)"
//                 ? (
//                   <div key={index} className="hidden md:flex items-center gap-1.5 hover:text-blue-700 transition-colors group">
//                     <div className="bg-blue-100 group-hover:bg-blue-600 p-1.5 rounded-full transition-colors">
//                       {item.icon}
//                     </div>
//                     {item.link ? (
//                       <a href={item.link} className="transition-colors font-medium" target={item.link.startsWith('http') ? "_blank" : ""} rel="noopener noreferrer">
//                         {item.text}
//                       </a>
//                     ) : (
//                       <span className="font-medium">{item.text}</span>
//                     )}
//                   </div>
//                 )
//                 : item.showOnMobile === "smallOnly" ? (
//                   <div key={index} className="flex md:hidden items-center gap-1.5 hover:text-blue-700 transition-colors group">
//                     <div className="bg-blue-100 group-hover:bg-blue-600 p-1.5 rounded-full transition-colors">
//                       {item.icon}
//                     </div>
//                     {item.link ? (
//                       <a href={item.link} className="transition-colors font-medium" target={item.link.startsWith('http') ? "_blank" : ""} rel="noopener noreferrer">
//                         {item.text}
//                       </a>
//                     ) : (
//                       <span className="font-medium">{item.text}</span>
//                     )}
//                   </div>
//                 )
//                 : (
//                   <div key={index} className="flex items-center gap-1.5 hover:text-blue-700 transition-colors group">
//                     <div className="bg-blue-100 group-hover:bg-blue-600 p-1.5 rounded-full transition-colors">
//                       {item.icon}
//                     </div>
//                     {item.link ? (
//                       <a href={item.link} className="transition-colors font-medium" target={item.link.startsWith('http') ? "_blank" : ""} rel="noopener noreferrer">
//                         {item.text}
//                       </a>
//                     ) : (
//                       <span className="font-medium">{item.text}</span>
//                     )}
//                   </div>
//                 )
//             ))}
//           </div>

//           {/* Social Links */}
//           <div className="flex gap-4 mt-1 md:mt-0 items-center">
//             {/* Trust Badge */}
//             <div className="hidden md:flex items-center gap-1.5 bg-green-50 text-green-800 px-3 py-1.5 rounded-md border border-green-200">
//               <Shield className="h-3 w-3 text-green-600" />
//               <span className="text-xs font-medium">Trusted Supplier Since 1998</span>
//             </div>

//             {/* WhatsApp Button */}
//             <a
//               href={socialLinks[0].url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors shadow-sm hover:shadow-md"
//             >
//               {socialLinks[0].icon}
//               <span>WhatsApp</span>
//               <ExternalLink className="h-3 w-3 ml-1" />
//             </a>

//             {/* Chat Bot Button */}
//             <button
//               onClick={handleOpenChat}
//               className="relative flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors shadow-sm hover:shadow-md"
//             >
//               <MessageSquare className="h-3 w-3" />
//               <span>Chat Now</span>
              
//               {/* Notification Dot */}
//               {showNotification && (
//                 <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
//               )}
//             </button>

//             {/* Social Media Icons */}
//             <div className="flex gap-4 items-center">
//               {socialLinks.slice(1).map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-800 hover:text-blue-600 transition-colors hover:scale-110 transform-gpu duration-200"
//                   aria-label={social.name}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Remove mobile menu and hamburger button */}
//       {/* Remove: Mobile Contact Info Dropdown, Hamburger Button */}
//       {/* Chat Notification Banner */}
//       {showNotification && !isChatOpen && (
//         <div className="fixed bottom-20 right-6 bg-white p-4 rounded-lg shadow-lg border border-blue-200 z-40 w-72 animate-fade-in">
//           <div className="flex gap-3">
//             <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
//               <MessageSquare className="h-6 w-6" />
//             </div>
//             <div className="flex-1">
//               <h4 className="font-medium text-gray-900">Need help with steel products?</h4>
//               <p className="text-sm text-gray-600 mt-1">Our assistant is online and ready to help!</p>
//               <div className="mt-3 flex gap-2">
//                 <button 
//                   onClick={handleOpenChat} 
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-sm transition-colors flex-1"
//                 >
//                   Chat Now
//                 </button>
//                 <button 
//                   onClick={() => setShowNotification(false)} 
//                   className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-2 py-1.5 rounded text-sm transition-colors"
//                 >
//                   Later
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Enhanced Chat Bot Interface */}
//       {isChatOpen && (
//         <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col overflow-hidden border border-blue-200">
//           {/* Chat Header */}
//           <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-3 px-4 flex justify-between items-center">
//             <div className="flex items-center gap-2">
//               <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
//                 <Bot className="h-5 w-5" />
//               </div>
//               <div>
//                 <h3 className="font-medium">Sawariya Traders Assistant</h3>
//                 <div className="flex items-center gap-1.5 text-xs text-blue-100">
//                   <span className="h-1.5 w-1.5 bg-green-400 rounded-full"></span>
//                   <span>Online now</span>
//                 </div>
//               </div>
//             </div>
//             <button onClick={() => setIsChatOpen(false)} className="text-blue-100 hover:text-white hover:bg-blue-800/20 h-8 w-8 flex items-center justify-center rounded-full">
//               <X className="h-4 w-4" />
//             </button>
//           </div>

//           {/* Trust Indicators */}
//           <div className="bg-blue-50 p-2 border-b border-blue-100 flex items-center justify-center text-xs text-blue-700 gap-1">
//             <Shield className="h-3 w-3" />
//             <span>Trusted by 1000+ clients • ISO 9001:2015 Certified • 25+ Years of Experience</span>
//           </div>

//           {/* Chat Messages */}
//           <div className="flex-1 p-4 overflow-y-auto max-h-96 bg-gray-50">
//             {chatHistory.map((message, index) => (
//               <div 
//                 key={index} 
//                 className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
//               >
//                 {message.type === 'bot' && (
//                   <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2 self-end mb-1">
//                     <Bot className="h-4 w-4" />
//                   </div>
//                 )}
                
//                 <div 
//                   className={`rounded-lg px-4 py-2 max-w-[75%] ${
//                     message.type === 'user' 
//                       ? 'bg-blue-600 text-white rounded-br-none' 
//                       : 'bg-white text-gray-800 border border-blue-100 rounded-bl-none shadow-sm'
//                   }`}
//                 >
//                   {message.text.split('\n').map((text, i) => (
//                     <p key={i} className={i > 0 ? "mt-2" : ""}>{text}</p>
//                   ))}
//                 </div>
                
//                 {message.type === 'user' && (
//                   <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white ml-2 self-end mb-1">
//                     <User className="h-4 w-4" />
//                   </div>
//                 )}
//               </div>
//             ))}
            
//             {/* Typing indicator */}
//             {isTyping && (
//               <div className="flex mb-4 justify-start">
//                 <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2 self-end mb-1">
//                   <Bot className="h-4 w-4" />
//                 </div>
//                 <div className="bg-white rounded-lg px-4 py-2 rounded-bl-none border border-blue-100 shadow-sm">
//                   <div className="flex space-x-1">
//                     <span className="animate-bounce">•</span>
//                     <span className="animate-bounce delay-75">•</span>
//                     <span className="animate-bounce delay-150">•</span>
//                   </div>
//                 </div>
//               </div>
//             )}
            
//             {/* Bottom of chat reference for auto-scrolling */}
//             <div ref={chatEndRef} />
//           </div>
          
//           {/* Input Area */}
//           <div className="p-3 border-t border-gray-200 bg-white">
//             <div className="flex gap-2 items-center">
//               <div className="relative flex-1">
//                 <input
//                   ref={inputRef}
//                   type="text"
//                   placeholder="Type your message here..."
//                   value={chatMessage}
//                   onChange={(e) => setChatMessage(e.target.value)}
//                   onKeyDown={handleKeyPress}
//                   className="w-full py-2 px-4 pr-10 border border-blue-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//               <button
//                 onClick={handleSendMessage}
//                 disabled={chatMessage.trim() === ""}
//                 className={`h-10 w-10 rounded-full flex items-center justify-center ${
//                   chatMessage.trim() === ""
//                     ? "bg-blue-200 text-blue-400 cursor-not-allowed"
//                     : "bg-blue-600 text-white hover:bg-blue-700"
//                 } transition-colors shadow-sm`}
//               >
//                 <Send className="h-5 w-5" />
//               </button>
//             </div>
            
//             {/* Powered By */}
//             <div className="mt-2 text-center text-xs text-gray-500">
//               <span>Powered by Sawariya Traders © 2025</span>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Extra Spacer for Fixed Header */}
//       <div style={{ height: topbarHeight }} className="w-full"></div>
//       </div>
//   );
// }

///////////
